import { generateUUID } from '../utils/uuid';
import type { Message } from '../types';

interface StoredMessage extends Message {
  id: string;
  character_id: string;
  created_at: string;
}

// In-memory message storage
const messages = new Map<string, StoredMessage[]>();

// Local storage key
const STORAGE_KEY = 'circus_messages';

// Load initial data
try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const data = JSON.parse(stored);
    Object.entries(data).forEach(([characterId, msgs]) => {
      messages.set(characterId, msgs as StoredMessage[]);
    });
  }
} catch (error) {
  console.error('Failed to load messages from storage:', error);
}

// Save to localStorage
function saveToStorage() {
  const data = Object.fromEntries(messages);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Message operations
export async function addMessage(characterId: string, message: Message): Promise<StoredMessage> {
  const storedMessage: StoredMessage = {
    id: generateUUID(),
    character_id: characterId,
    created_at: new Date().toISOString(),
    ...message
  };

  const characterMessages = messages.get(characterId) || [];
  messages.set(characterId, [...characterMessages, storedMessage]);
  saveToStorage();

  return storedMessage;
}

export async function getMessages(characterId: string): Promise<StoredMessage[]> {
  return messages.get(characterId) || [];
}

export async function clearMessages(characterId: string): Promise<void> {
  messages.delete(characterId);
  saveToStorage();
}