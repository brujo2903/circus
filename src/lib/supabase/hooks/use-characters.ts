import { useState, useEffect } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type Character = Database['public']['Tables']['characters']['Row'];

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Initial load
    async function loadCharacters() {
      try {
        const { data, error } = await supabase
          .from('characters')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50); // Limit initial load

        if (error) throw error;
        if (mounted) {
          setCharacters(data || []);
        }
      } catch (error) {
        console.error('Error loading characters:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCharacters();

    // Real-time subscription
    const channel = supabase
      .channel(`characters-${Math.random()}`) // Unique channel per instance
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'characters'
        },
        (payload) => {
          if (!mounted) return;

          if (payload.eventType === 'INSERT') {
            const newChar = payload.new as Character;
            setCharacters(prev => {
              if (prev.some(char => char.id === newChar.id)) return prev;
              return [newChar, ...prev];
            });
          } else if (payload.eventType === 'DELETE') {
            setCharacters(prev => prev.filter(char => char.id !== payload.old.id));
          } else if (payload.eventType === 'UPDATE') {
            setCharacters(prev => prev.map(char => 
              char.id === payload.new.id ? payload.new as Character : char
            ));
          }
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      channel.unsubscribe();
    };
  }, []);

  return { characters, loading };
}