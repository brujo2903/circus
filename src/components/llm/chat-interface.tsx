import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { openai } from "@/lib/openai";
import type { Performer } from "./types";
import { cn } from "@/lib/utils";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  performer: Performer;
  onClose: () => void;
}

export function ChatInterface({ performer, onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);

    try {
      // Get AI response
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content: `You are ${performer.name}, ${performer.role}. ${performer.description} 
                     Respond in character, maintaining a mystical and theatrical circus theme.
                     Keep responses concise (max 3 sentences) and engaging.`
          },
          ...newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        ],
        temperature: 0.9,
        max_tokens: 150
      });

      // Add AI response
      setMessages([
        ...newMessages,
        { role: 'assistant', content: response.choices[0].message.content || '' }
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DialogContent className="sm:max-w-[800px] bg-black/80 backdrop-blur-xl border-red-900/20 p-0">
      <DialogHeader className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-red-500/50">
              <img 
                src={performer.image} 
                alt={performer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent">
                {performer.name}
              </DialogTitle>
              <p className="text-red-400/80">{performer.role}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-white/60 hover:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </DialogHeader>

      {/* Chat Area */}
      <div className="h-[500px] overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-white/40">
            <div className="text-center max-w-md">
              <MessageSquare className="h-16 w-16 mx-auto mb-6 opacity-40" />
              <p className="text-xl mb-3">Begin your mystical conversation with {performer.name}...</p>
              <p className="text-white/30 italic">{performer.description}</p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start space-x-4",
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'assistant' && (
                <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-red-500/30">
                  <img 
                    src={performer.image} 
                    alt={performer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2",
                  message.role === 'user' 
                    ? "bg-red-500/20 backdrop-blur-sm text-white"
                    : "bg-white/10 backdrop-blur-sm text-white/90"
                )}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 p-6">
        <form 
          onSubmit={handleSubmit}
          className="flex items-center space-x-3"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Whisper your thoughts..."
              className={cn(
                "w-full bg-white/5 border border-white/10 rounded-lg",
                "px-4 py-3 pr-[100px]", // Added padding for the button
                "text-white placeholder:text-white/40",
                "focus:outline-none focus:ring-2 focus:ring-red-500/50",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
              disabled={isLoading}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Button 
                type="submit" 
                size="sm"
                disabled={isLoading}
                className={cn(
                  "relative overflow-hidden group",
                  "bg-gradient-to-r from-red-500 to-red-600",
                  "hover:from-red-600 hover:to-red-700",
                  "transition-all duration-300",
                  "h-9 px-4",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "shadow-[0_0_15px_rgba(239,68,68,0.5)]",
                  "hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
                )}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon with animation */}
                <Send className={cn(
                  "h-4 w-4 relative",
                  "transform group-hover:scale-110 group-hover:rotate-[-10deg]",
                  "transition-transform duration-300"
                )} />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}