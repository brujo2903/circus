import { cn } from "@/lib/utils";
import { User } from "lucide-react";

interface CharacterAnalysisProps {
  imageUrl: string;
  name: string;
  traits: {
    title: string;
    value: string;
  }[];
}

export function CharacterAnalysis({ imageUrl, name, traits }: CharacterAnalysisProps) {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-red-500/20 scrollbar-track-transparent">
      <div className={cn(
        "bg-black/50 backdrop-blur-xl rounded-lg",
        "border border-red-500/20",
        "p-6 space-y-6"
      )}>
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/50 to-purple-500/50 rounded-full blur-sm" />
            <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-red-500/50 relative">
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className={cn(
              "text-xl font-bold",
              "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent"
            )}>
              {name}
            </h3>
            <div className="flex items-center gap-2 text-red-400/80 text-sm">
              <User className="h-4 w-4" />
              <span>Character Analysis</span>
            </div>
          </div>
        </div>

        {/* Traits */}
        <div className="space-y-6">
          {traits.map((trait, index) => (
            <div 
              key={index}
              className={cn(
                "space-y-3 p-4 rounded-lg",
                "bg-gradient-to-r from-black/30 to-transparent",
                "border border-red-500/10",
                "transform transition-all duration-300 hover:scale-[1.02]",
                "hover:border-red-500/20"
              )}
            >
              <h4 className="text-sm font-medium text-red-400/80">
                {trait.title}
              </h4>
              <div className="space-y-2 text-white/90">
                {trait.value.split('\n').map((line, i) => (
                  <p key={i} className="pl-4 border-l border-red-500/20">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}