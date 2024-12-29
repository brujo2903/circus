import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FeatureCardProps } from "./types";

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden group",
        "bg-white/10 backdrop-blur-sm border-red-900/20 hover:border-red-500/50",
        "transition-all duration-500 hover:transform hover:-translate-y-2",
        "shadow-[0_0_15px_rgba(255,255,255,0.1)]"
      )}
    >
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "bg-gradient-to-t",
        gradient
      )} />
      
      <div className="relative p-8 space-y-6">
        <div className="h-14 w-14 rounded-full bg-red-500/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-7 w-7 text-red-400" />
        </div>
        
        <h3 className={cn(
          "text-xl font-semibold",
          "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
          "group-hover:animate-gradient-x"
        )}>
          {title}
        </h3>
        
        <p className="text-white/80 text-sm leading-relaxed font-light italic">
          {description}
        </p>
      </div>
    </Card>
  );
}