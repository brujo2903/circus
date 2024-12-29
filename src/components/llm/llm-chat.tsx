import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { performers } from "./llm-data";
import { PerformerCard } from "./performer-card";
import { ChatInterface } from "./chat-interface";

export function LLMChat() {
  const [selectedPerformer, setSelectedPerformer] = useState<number | null>(null);

  return (
    <>
      {/* Performers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {performers.map((performer, index) => (
          <PerformerCard
            key={performer.name}
            performer={performer}
            isSelected={selectedPerformer === index}
            onClick={() => setSelectedPerformer(index)}
          />
        ))}
      </div>

      {/* Chat Dialog */}
      <Dialog 
        open={selectedPerformer !== null} 
        onOpenChange={() => setSelectedPerformer(null)}
      >
        {selectedPerformer !== null && (
          <ChatInterface 
            performer={performers[selectedPerformer]} 
            onClose={() => setSelectedPerformer(null)}
          />
        )}
      </Dialog>
    </>
  );
}