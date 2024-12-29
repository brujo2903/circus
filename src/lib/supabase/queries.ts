import { supabase } from './client';
import type { Database } from './types';

type Character = Database['public']['Tables']['characters']['Row'];
type ChatMessage = Database['public']['Tables']['chat_messages']['Row'];

/**
 * Character Queries
 */
export async function getCharacters() {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getCharacterById(id: string) {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createCharacter(character: Omit<Character, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('characters')
    .insert(character)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateCharacter(
  id: string,
  updates: Partial<Omit<Character, 'id' | 'created_at'>>
) {
  const { data, error } = await supabase
    .from('characters')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCharacter(id: string) {
  const { error } = await supabase
    .from('characters')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * Chat Message Queries
 */
export async function getChatMessages(characterId: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('character_id', characterId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
}

export async function createChatMessage(message: {
  character_id: string;
  role: 'user' | 'assistant';
  content: string;
}) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert(message)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteChatMessages(characterId: string) {
  const { error } = await supabase
    .from('chat_messages')
    .delete()
    .eq('character_id', characterId);

  if (error) throw error;
}