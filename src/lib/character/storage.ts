import { supabase } from '../supabase/client';
import type { AgentProfile } from '../types';

export async function storeCharacterProfile(profile: AgentProfile & { id: string }) {
  try {
    const { data, error } = await supabase
      .from('characters')
      .insert({
        id: profile.id,
        name: profile.name,
        role: profile.role,
        personality: profile.personality,
        speaking_style: profile.speakingStyle,
        background: profile.background,
        image_url: profile.imageUrl || ''
      })
      .select('*')
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error storing character:', error);
    throw new Error('Failed to store character profile');
  }
}

export async function getCharacterProfile(id: string) {
  try {
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error loading character profile:', error);
    throw new Error('Failed to load character profile');
  }
}

export async function updateCharacterProfile(
  id: string,
  updates: Partial<Omit<AgentProfile, 'id'>>
) {
  try {
    const { data, error } = await supabase
      .from('characters')
      .update({
        name: updates.name,
        role: updates.role,
        personality: updates.personality,
        speaking_style: updates.speakingStyle,
        background: updates.background,
        image_url: updates.imageUrl
      })
      .eq('id', id)
      .select('*')
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating character:', error);
    throw new Error('Failed to update character profile');
  }
}

export async function deleteCharacterProfile(id: string) {
  try {
    const { error } = await supabase
      .from('characters')
      .delete()
      .eq('id', id);

    if (error) throw error;
  } catch (error) {
    console.error('Error deleting character:', error);
    throw new Error('Failed to delete character profile');
  }
}