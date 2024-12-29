import { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import type { AgentProfile } from '../types';

interface UseCharacterProfileResult {
  profile: AgentProfile | null;
  loading: boolean;
  error: Error | null;
}

export function useCharacterProfile(id: string | null): UseCharacterProfileResult {
  const [profile, setProfile] = useState<AgentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setProfile(null);
      setError(null);
      setLoading(false);
      return;
    }

    async function loadProfile() {
      try {
        const { data, error } = await supabase
          .from('characters')
          .select(`
            id,
            name,
            role,
            personality,
            speaking_style,
            background,
            image_url
          `)
          .eq('id', id)
          .single();

        if (error) throw error;

        setProfile({
          name: data.name,
          role: data.role,
          personality: data.personality,
          speakingStyle: data.speaking_style,
          background: data.background,
          imageUrl: data.image_url
        });
      } catch (err: any) {
        console.error('Error loading character profile:', err);
        setError(new Error('Failed to load character profile'));
      } finally {
        setLoading(false);
      }
    }

    loadProfile();

    // Subscribe to changes
    const subscription = supabase
      .channel(`character-${id}`)
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'characters',
        filter: `id=eq.${id}`
      }, payload => {
        if (payload.eventType === 'UPDATE') {
          const data = payload.new;
          setProfile({
            name: data.name,
            role: data.role,
            personality: data.personality,
            speakingStyle: data.speaking_style,
            background: data.background,
            imageUrl: data.image_url
          });
        } else if (payload.eventType === 'DELETE') {
          setProfile(null);
        }
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [id]);

  return { profile, loading, error };
}