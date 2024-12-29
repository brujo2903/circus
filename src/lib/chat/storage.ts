import { supabase } from '../supabase/client';
import { generateUUID } from '../utils/uuid';
import type { Message } from '../types';

interface StoredMessage extends Message {
  id: string;
  character_id: string;
  created_at: string;
}

export async function storeChatMessage(
  characterId: string,
  message: Message
): Promise<StoredMessage> {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .insert({
        id: generateUUID(),
        character_id: characterId,
        role: message.role,
        content: message.content
      })
      .select()
      .single();

    if (error) throw error;
    if (!data) throw new Error('Failed to store message');

    return data;
  } catch (error) {
    console.error('Error storing message:', error);
    throw new Error('Failed to store chat message');
  }
}

export async function getChatHistory(characterId: string): Promise<StoredMessage[]> {
  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .select()
      .eq('character_id', characterId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw new Error('Failed to fetch chat history');
  }
}