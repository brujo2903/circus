import { useState, useEffect } from 'react';
import { getMessages } from '../storage/messages';
import type { Message } from '../types';

export function useMessages(characterId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadMessages() {
      try {
        const data = await getMessages(characterId);
        if (mounted) {
          setMessages(data);
        }
      } catch (error) {
        console.error('Error loading messages:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadMessages();

    // Set up message polling
    const interval = setInterval(loadMessages, 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [characterId]);

  return { messages, loading };
}