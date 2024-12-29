import { generateUUID } from '../utils/uuid';
import type { Character } from '../types';

// In-memory storage
const characters = new Map<string, Character>();

// Local storage key
const STORAGE_KEY = 'circus_characters';

// Load initial data from localStorage
try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    Object.entries(data).forEach(([id, char]) => {
      characters.set(id, char as Character);
    });
  }
} catch (error) {
  console.error('Failed to load characters from storage:', error);
}

// Save to localStorage
function saveToStorage() {
  const data = Object.fromEntries(characters);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Character operations
export async function createCharacter(data: Omit<Character, 'id' | 'created_at'>): Promise<Character> {
  const id = generateUUID();
  const character: Character = {
    ...data,
    id,
    created_at: new Date().toISOString()
  };
  
  characters.set(id, character);
  saveToStorage();
  return character;
}

export async function getCharacter(id: string): Promise<Character | null> {
  return characters.get(id) || null;
}

export async function deleteCharacter(id: string): Promise<void> {
  characters.delete(id);
  saveToStorage();
}