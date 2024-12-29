import { useState, useEffect } from 'react';
import { supabase } from './client';
import type { Database } from './types';
import * as queries from './queries';

type Character = Database['public']['Tables']['characters']['Row'];
type ChatMessage = Database['public']['Tables']['chat_messages']['Row'];

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await queries.getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error('Error loading characters:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();

    const subscription = supabase
      .channel('characters')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'characters' 
      }, payload => {
        if (payload.eventType === 'INSERT') {
          setCharacters(prev => [payload.new as Character, ...prev]);
        } else if (payload.eventType === 'DELETE') {
          setCharacters(prev => prev.filter(char => char.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { characters, loading };
}

export function useCharacter(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacter() {
      try {
        const data = await queries.getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error('Error loading character:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCharacter();

    const subscription = supabase
      .channel(`character-${id}`)
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'characters',
        filter: `id=eq.${id}`
      }, payload => {
        if (payload.eventType === 'UPDATE') {
          setCharacter(payload.new as Character);
        } else if (payload.eventType === 'DELETE') {
          setCharacter(null);
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [id]);

  return { character, loading };
}

export function useChatMessages(characterId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await queries.getChatMessages(characterId);
        setMessages(data);
      } catch (error) {
        console.error('Error loading messages:', error);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();

    const subscription = supabase
      .channel(`chat-${characterId}`)
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'chat_messages',
        filter: `character_id=eq.${characterId}`
      }, payload => {
        setMessages(prev => [...prev, payload.new as ChatMessage]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [characterId]);

  return { messages, loading };
}