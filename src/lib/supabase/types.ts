export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      characters: {
        Row: {
          id: string
          created_at: string
          name: string
          role: string
          personality: string
          speaking_style: string
          background: string
          image_url: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          role: string
          personality: string
          speaking_style: string
          background: string
          image_url: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          role?: string
          personality?: string
          speaking_style?: string
          background?: string
          image_url?: string
        }
      }
      chat_messages: {
        Row: {
          id: string
          created_at: string
          character_id: string
          role: 'user' | 'assistant'
          content: string
        }
        Insert: {
          id?: string
          created_at?: string
          character_id: string
          role: 'user' | 'assistant'
          content: string
        }
        Update: {
          id?: string
          created_at?: string
          character_id?: string
          role?: 'user' | 'assistant'
          content?: string
        }
      }
    }
  }
}