import { useState } from 'react';
import { Dialog } from "@/components/ui/dialog";
import { MessageSquare, Trash2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useCharacters } from '@/lib/supabase/hooks';
import { deleteCharacter } from '@/lib/supabase/queries';
import { ChatInterface } from './chat-interface';

export function CharacterList() {
  const { characters, loading } = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await deleteCharacter(id);
    } catch (error) {
      console.error('Error deleting character:', error);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white/60">
        Loading characters...
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <div className="text-center text-white/60">
        No characters created yet. Create one above to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className={cn(
            "bg-black/50 backdrop-blur-sm rounded-lg",
            "border border-red-500/20",
            "overflow-hidden",
            "transition-all duration-300 hover:transform hover:-translate-y-1",
            "group"
          )}
        >
          {/* Character Image */}
          <div className="aspect-square relative overflow-hidden">
            <img 
              src={character.image_url} 
              alt={character.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>

          {/* Character Info */}
          <div className="p-4">
            <h3 className="text-xl font-bold text-red-400 mb-1">
              {character.name}
            </h3>
            <p className="text-white/60 text-sm mb-4">
              {character.role}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCharacter(character.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2",
                  "bg-red-500/20 hover:bg-red-500/30",
                  "text-red-400 hover:text-red-300",
                  "rounded-lg px-3 py-2",
                  "transition-colors duration-200"
                )}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat</span>
              </button>
              <button
                onClick={(e) => handleDelete(e, character.id)}
                className={cn(
                  "bg-black/30 hover:bg-red-900/30",
                  "text-white/60 hover:text-red-400",
                  "rounded-lg px-3 py-2",
                  "transition-colors duration-200"
                )}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Chat Dialog */}
      <Dialog 
        open={selectedCharacter !== null}
        onOpenChange={() => setSelectedCharacter(null)}
      >
        {selectedCharacter && (
          <ChatInterface
            characterId={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </Dialog>
    </div>
  );
}