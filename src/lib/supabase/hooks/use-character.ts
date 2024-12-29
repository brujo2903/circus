import { useState, useEffect } from 'react';
import { supabase } from '../client';
import type { Database } from '../types';

type Character = Database['public']['Tables']['characters']['Row'];

export function useCharacter(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacter() {
      try {
        const { data, error } = await supabase
          .from('characters')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        if (mounted) {
          setCharacter(data);
        }
      } catch (error) {
        console.error('Error loading character:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCharacter();
    let mounted = true;

    const channel = supabase.channel(`character-${id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'characters',
          filter: `id=eq.${id}`
        },
        (payload) => {
          if (!mounted) return;
          if (payload.eventType === 'UPDATE') {
            setCharacter(payload.new as Character);
          } else if (payload.eventType === 'DELETE') {
            setCharacter(null);
          }
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      channel.unsubscribe();
    };
  }, [id]);

  return { character, loading };
}