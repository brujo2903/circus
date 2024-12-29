import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden group",
        "bg-white/10 backdrop-blur-sm border-red-900/20 hover:border-red-500/50",
        "transition-all duration-300 hover:transform hover:-translate-y-1",
        "shadow-[0_0_15px_rgba(255,255,255,0.1)]"
      )}
    >
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
        "bg-gradient-to-t",
        gradient
      )} />
      
      <div className="relative p-6 space-y-4">
        <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-red-400" />
        </div>
        
        <h3 className="text-lg font-semibold text-red-300">
          {title}
        </h3>
        
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}