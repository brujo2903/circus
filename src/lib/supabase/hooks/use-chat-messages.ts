import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type ChatMessage = Database['public']['Tables']['chat_messages']['Row'];

export function useChatMessages(characterId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
  const mountedRef = useRef(true);

  // Memoize message addition function
  const addMessage = useCallback((newMessage: ChatMessage) => {
    setMessages(prev => {
      if (prev.some(msg => msg.id === newMessage.id)) return prev;
      const newMessages = [...prev, newMessage].sort((a, b) => 
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      return newMessages;
    });
  }, []);

  // Memoize subscription setup
  const setupSubscription = useCallback(() => {
    if (channelRef.current) {
      channelRef.current.unsubscribe();
    }

    channelRef.current = supabase
      .channel(`chat-${characterId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `character_id=eq.${characterId}`
        },
        (payload) => {
          if (!mountedRef.current) return;
          addMessage(payload.new as ChatMessage);
        }
      )
      .subscribe();
  }, [characterId, addMessage]);

  useEffect(() => {
    mountedRef.current = true;

    async function loadMessages() {
      try {
        const { data, error } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('character_id', characterId)
          .order('created_at', { ascending: true });

        if (error) throw error;
        if (mountedRef.current) {
          setMessages(data || []);
          setupSubscription();
        }
      } catch (error) {
        console.error('Error loading messages:', error);
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    }

    loadMessages();

    return () => {
      mountedRef.current = false;
      if (channelRef.current) {
        channelRef.current.unsubscribe();
        channelRef.current = null;
      }
    };
  }, [characterId, setupSubscription]);

  return { messages, loading, addMessage };
}