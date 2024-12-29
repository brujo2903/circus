import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useCharacter } from '@/lib/hooks/use-character';
import { useMessages } from '@/lib/hooks/use-messages';
import { useChat } from '@/lib/hooks/use-chat';

interface ChatInterfaceProps {
  characterId: string;
  onClose: () => void;
}

export function ChatInterface({ characterId, onClose }: ChatInterfaceProps) {
  const { character } = useCharacter(characterId);
  const { messages, loading: messagesLoading } = useMessages(characterId);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, isLoading } = useChat(characterId);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput(''); // Clear input immediately for better UX
    
    try {
      await sendMessage(message);
    } catch (error) {
      console.error('Failed to send message:', error);
      setInput(message); // Restore input on error
    }
  };
  
  if (!character) return null;

  return (
    <div className="h-full flex flex-col bg-black/90 backdrop-blur-xl rounded-lg border border-red-900/20 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-red-500/50">
              <img 
                src={character.image_url} 
                alt={character.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent">
                {character.name}
              </h2>
              <p className="text-red-400/80">{character.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {messagesLoading ? (
            <div className="flex justify-center py-4">
              <div className="animate-pulse text-white/60">Loading messages...</div>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-white/60 space-y-4 py-12">
              <MessageSquare className="h-12 w-12 opacity-50" />
              <p>Start chatting with {character.name}...</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start space-x-2",
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={character.image_url}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-4 py-2",
                    message.role === 'user'
                      ? "bg-red-500/20 text-white ml-auto"
                      : "bg-white/10 text-white/90 mr-auto"
                  )}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">You</span>
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <form 
        onSubmit={handleSubmit}
        className="border-t border-white/10 p-6"
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${character.name}...`}
            disabled={isLoading}
            className={cn(
              "w-full bg-white/5 border border-white/10 rounded-lg",
              "px-4 py-3 pr-[100px]",
              "text-white placeholder:text-white/40",
              "focus:outline-none focus:ring-2 focus:ring-red-500/50",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200"
            )}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "bg-red-500/20 hover:bg-red-500/30",
              "text-red-400 rounded-lg px-4 py-2",
              "transition-colors duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center gap-2"
            )}
          >
            <Send className="h-4 w-4" />
            <span>{isLoading ? 'Sending...' : 'Send'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}