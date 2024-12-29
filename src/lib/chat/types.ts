export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatProps {
  name: string;
  traits: Array<{
    title: string;
    value: string;
  }>;
}