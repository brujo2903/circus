import { useState } from 'react';
import { cn } from "@/lib/utils";
import { TerminalHeader } from "./terminal-header";
import { AgentForm } from "./agent-form";
import { createCharacter } from '@/lib/storage/characters';
import { ChatInterface } from './chat-interface';
import type { AgentProfile } from '@/lib/types';

export function Terminal() {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const [characterId, setCharacterId] = useState<string | null>(null);

  const handleCreateAgent = async (profile: AgentProfile) => {
    setIsCreating(true);
    setError('');

    try {
      const character = await createCharacter({
        name: profile.name,
        role: profile.role,
        personality: profile.personality,
        speaking_style: profile.speakingStyle,
        background: profile.background,
        image_url: profile.imageUrl || ''
      });

      setCharacterId(character.id);
    } catch (error: any) {
      console.error('Error creating agent:', error);
      setError(error.message || 'Failed to create agent. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="relative">
      {/* Terminal */}
      <div className={cn(
        "bg-black/80 backdrop-blur-xl rounded-lg",
        "border border-red-500/20",
        "overflow-hidden shadow-2xl"
      )}>
        <TerminalHeader />
        <div className="p-6 md:p-8">
          <AgentForm 
            onSubmit={handleCreateAgent}
            isLoading={isCreating}
          />
          {error && (
            <p className="mt-4 text-red-400 text-center">
              {error}
            </p>
          )}
        </div>
      </div>

      {/* Chat Modal */}
      {characterId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-4xl h-[80vh] relative">
            <ChatInterface
              characterId={characterId}
              onClose={() => setCharacterId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}