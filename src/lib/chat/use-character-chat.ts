import { useState, useCallback, useRef, useEffect } from 'react';
import { openai } from '@/lib/openai/client';
import { OPENAI_CONFIG } from '@/lib/openai/config';
import { createChatMessage, getCharacterById } from '@/lib/supabase/queries';
import type { Message } from '@/lib/types';

export function useCharacterChat(characterId: string, onMessageSent?: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const mountedRef = useRef(true);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;
    setIsLoading(true);

    try {
      // Send user message
      await createChatMessage({
        character_id: characterId,
        role: 'user',
        content: content.trim()
      });

      // Get character info
      const character = await getCharacterById(characterId);
      if (!character) throw new Error('Character not found');

      // Get AI response
      const response = await openai.chat.completions.create({
        model: OPENAI_CONFIG.models.chat,
        messages: [
          {
            role: "system",
            content: OPENAI_CONFIG.systemPrompts.chat(character)
          },
          { role: "user", content: content.trim() }
        ],
        ...OPENAI_CONFIG.chatOptions
      });

      const aiResponse = response.choices[0].message.content;
      if (!aiResponse) throw new Error('No response from AI');

      // Send AI response
      await createChatMessage({
        character_id: characterId,
        role: 'assistant',
        content: aiResponse
      });

      onMessageSent?.();
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [characterId, isLoading, onMessageSent]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    isLoading,
    sendMessage
  };
}