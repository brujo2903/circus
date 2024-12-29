import { useState, useCallback, useEffect } from 'react';
import { openai } from '../openai/client';
import { OPENAI_CONFIG } from '../openai/config';
import { getCharacter } from '../storage/characters';
import { addMessage } from '../storage/messages';
import type { Message } from '../types';

export function useChat(characterId: string, onMessageSent?: () => void) {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;
    setIsLoading(true);

    try {
      // Store user message
      await addMessage(characterId, {
        role: 'user',
        content: content.trim()
      });

      // Get character info
      const character = await getCharacter(characterId);
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

      // Store AI response
      await addMessage(characterId, {
        role: 'assistant',
        content: aiResponse
      });

      onMessageSent?.();
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [characterId, isLoading, onMessageSent]);

  return {
    isLoading,
    sendMessage
  };
}