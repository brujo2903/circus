import { useState } from 'react';
import { openai } from '@/lib/openai';
import { SYSTEM_PROMPT_TEMPLATE } from '../constants';
import type { Message, Performer } from '../types';

export function useChat(performer: Performer) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(content: string) {
    if (!content.trim() || isLoading) return;

    setIsLoading(true);
    const newMessages = [...messages, { role: 'user', content: content.trim() }];
    setMessages(newMessages);

    try {
      const systemPrompt = SYSTEM_PROMPT_TEMPLATE
        .replace('{name}', performer.name)
        .replace('{role}', performer.role)
        .replace('{description}', performer.description);

      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        temperature: 0.9,
        max_tokens: 150
      });

      setMessages([
        ...newMessages,
        { 
          role: 'assistant', 
          content: response.choices[0].message.content || ''
        }
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      // Could add error handling UI here
    } finally {
      setIsLoading(false);
    }
  }

  return {
    messages,
    isLoading,
    sendMessage
  };
}