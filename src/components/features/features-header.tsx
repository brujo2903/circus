import { cn } from "@/lib/utils";

export function FeaturesHeader() {
  return (
    <div className="text-center mb-20 relative">
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 blur-[120px] bg-gradient-to-r from-red-500/40 via-purple-500/40 to-red-500/40 -z-10 animate-pulse" />
      
      <h2 className={cn(
        "text-6xl font-bold mb-8",
        "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
        "drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]",
        "animate-gradient-x"
      )}>
        What is CircusLLM?
      </h2>
      
      <p className={cn(
        "text-2xl max-w-4xl mx-auto",
        "text-white/90 font-medium italic",
        "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
        "leading-relaxed"
      )}>
        Step into the greatest show in AI - where digital dreams dance with reality,
        and every line of code tells a story of wonder and imagination.
      </p>
    </div>
  );
}