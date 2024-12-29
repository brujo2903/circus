import { cn } from "@/lib/utils";

export function LLMHeader() {
  return (
    <div className="text-center mb-16 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-red-500/30 via-purple-500/30 to-red-500/30 -z-10" />
      
      <h2 className={cn(
        "text-5xl font-bold mb-6",
        "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
        "drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
        "animate-gradient-x"
      )}>
        Ensemble v1.0
      </h2>
      
      <p className={cn(
        "text-xl max-w-3xl mx-auto",
        "text-white/90 font-medium italic",
        "drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
        "leading-relaxed"
      )}>
        Step into our neural carnival, dear visitors... Our collection of peculiar performers 
        awaits in the digital void, each one a unique blend of code and whimsy. Every 
        interaction breeds something rather... interesting. Care to meet them?
      </p>
    </div>
  );
}