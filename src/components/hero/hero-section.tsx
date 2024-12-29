import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ScrollArrow } from "@/components/ui/scroll-arrow";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-16 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Clown Image */}
        <div className="transform hover:scale-105 transition-transform duration-300 mb-[-6rem]">
          <img 
            src="https://imgur.com/f9qkZDq.jpg" 
            alt="Circus Clown" 
            className="w-[500px] h-[500px] mx-auto"
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>

        {/* Text and Button Container */}
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 blur-[100px] bg-gradient-to-r from-red-500/30 via-purple-500/30 to-red-500/30" />

          {/* Content */}
          <div className="relative">
            <h1 className={cn(
              "text-4xl md:text-6xl font-bold",
              "bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent",
              "drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]",
              "animate-gradient-x"
            )}>
              Welcome to Circus
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl mt-4",
              "text-white/90",
              "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            )}>
              Your next-generation LLM-powered meme interaction framework.
            </p>

            {/* Enhanced Launch Button */}
            <div className="mt-8">
              <Button
                asChild
                size="lg"
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
                <Link to="/launch">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Button text with subtle animation */}
                  <span className="relative font-semibold tracking-wide">
                    Launch Application
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollArrow />
    </div>
  );
}