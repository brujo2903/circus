export type Character = {
  id: string;
  name: string;
  role: string;
  personality: string;
  speaking_style: string;
  background: string;
  image_url: string;
  created_at?: string;
};

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}