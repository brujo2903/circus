import { useState, useEffect } from 'react';
import { getCharacter } from '../storage/characters';
import type { Character } from '../types';

export function useCharacter(id: string | null) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadCharacter() {
      if (!id) {
        setCharacter(null);
        setLoading(false);
        return;
      }

      try {
        const data = await getCharacter(id);
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

    return () => {
      mounted = false;
    };
  }, [id]);

  return { character, loading };
}