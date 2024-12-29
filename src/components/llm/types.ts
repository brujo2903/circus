export interface Performer {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatProps {
  performer: Performer;
  onClose: () => void;
}