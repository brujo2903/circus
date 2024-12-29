import { Link } from 'react-router-dom';
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LearnMoreSection() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Animated glow effect */}
          <div 
            className={cn(
              "absolute inset-0 blur-[100px]",
              "bg-gradient-to-r from-red-500/30 via-purple-500/30 to-red-500/30",
              "animate-pulse-smooth",
              "-z-10"
            )} 
          />

          <h2 className={cn(
            "text-5xl font-bold mb-8",
            "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
            "drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]",
            "animate-gradient-x"
          )}>
            Want to learn more?
          </h2>

          <p className={cn(
            "text-xl mb-12",
            "text-white/80 font-medium italic",
            "leading-relaxed"
          )}>
            Step behind the curtain and discover the secrets of our digital circus...
            Our documentation reveals the magic that powers our spectacular show.
          </p>

          <Button
            size="lg"
            asChild
            className={cn(
              "relative overflow-hidden group",
              "bg-gradient-to-r from-red-500 to-red-600",
              "hover:from-red-600 hover:to-red-700",
              "transition-all duration-300",
              "text-lg px-8 py-6",
              "shadow-[0_0_25px_rgba(239,68,68,0.5)]",
              "hover:shadow-[0_0_35px_rgba(239,68,68,0.6)]",
              "transform hover:scale-105"
            )}
          >
            <Link to="/docs">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 font-semibold tracking-wide">
                <FileText className="h-5 w-5 transform group-hover:rotate-6 transition-transform duration-300" />
                <span>Read Documentation</span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}