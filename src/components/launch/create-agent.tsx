import { useState } from 'react';
import { cn } from "@/lib/utils";
import { TerminalHeader } from "./terminal-header";
import { AgentForm } from "./agent-form";
import { createCharacter } from '@/lib/supabase/queries';
import type { AgentProfile } from '@/lib/types';

export function CreateAgent() {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

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

      if (!character) throw new Error('Failed to create character');

      // Reset form on success
      window.dispatchEvent(new Event('character-created'));
    } catch (error: any) {
      console.error('Error creating agent:', error);
      setError(error.message || 'Failed to create agent. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className={cn(
      "bg-black/80 backdrop-blur-xl rounded-lg",
      "border border-red-500/20",
      "overflow-hidden shadow-2xl"
    )}>
      <TerminalHeader />

      <div className="p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
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
    </div>
  );
}