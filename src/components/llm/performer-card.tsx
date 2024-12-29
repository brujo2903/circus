import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Performer } from "./types";

interface PerformerCardProps {
  performer: Performer;
  isSelected: boolean;
  onClick: () => void;
}

export function PerformerCard({ performer, isSelected, onClick }: PerformerCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer group relative overflow-hidden",
        "transform transition-all duration-500 hover:scale-105",
        "bg-white/10 backdrop-blur-sm hover:bg-white/20",
        "border-red-900/20 hover:border-red-500/50",
        isSelected && "border-red-500/50 bg-white/20"
      )}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 via-purple-500/20 to-transparent blur-xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Image Container */}
        <div className="aspect-square overflow-hidden">
          <img 
            src={performer.image} 
            alt={performer.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        {/* Text Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className={cn(
            "text-2xl font-bold mb-2",
            "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
            "group-hover:animate-gradient-x"
          )}>
            {performer.name}
          </h3>
          <p className="text-red-400/90 font-medium mb-2 text-sm">
            {performer.role}
          </p>
          <p className="text-white/70 text-sm italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {performer.description}
          </p>
        </div>
      </div>
    </Card>
  );
}