import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [stage, setStage] = useState<'initial' | 'loaded' | 'fadeOut'>('initial');

  useEffect(() => {
    // Use RAF for smoother animation timing
    let rafId: number;
    
    // Initial load animation
    rafId = requestAnimationFrame(() => {
      setStage('loaded');
    });

    // Fade out timing
    const fadeOutTimer = setTimeout(() => {
      setStage('fadeOut');
    }, 2000);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        "transform-gpu", // Use GPU acceleration
        "transition-[opacity,visibility] duration-1000 ease-out",
        stage === 'fadeOut' ? "opacity-0 invisible" : "opacity-100 visible"
      )}
    >
      {/* Background with optimized loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://imgur.com/LW08sa5.jpg")',
          willChange: 'transform', // Optimize for animations
        }}
      >
        {/* Overlay with optimized blur */}
        <div 
          className={cn(
            "absolute inset-0",
            "bg-black/80 backdrop-blur-[8px]",
            "transition-opacity duration-700 ease-out",
            stage === 'initial' ? "opacity-0" : "opacity-100"
          )}
        />
      </div>

      {/* Content Container */}
      <div 
        className={cn(
          "relative h-full",
          "flex items-center justify-center",
          "transform-gpu", // Use GPU acceleration
          "transition-transform duration-700 ease-out",
          stage === 'initial' ? "translate-y-4" : "translate-y-0"
        )}
      >
        {/* Glow Effect */}
        <div 
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r from-red-500/30 via-purple-500/30 to-red-500/30",
            "blur-[100px] opacity-50",
            "transition-opacity duration-1000",
            stage === 'initial' ? "opacity-0" : "opacity-50"
          )}
        />

        {/* Main Content */}
        <div className="relative space-y-8 text-center">
          {/* Circus Tent Emoji */}
          <div 
            className={cn(
              "transform-gpu", // Use GPU acceleration
              "transition-all duration-700 ease-out",
              stage === 'initial' ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}
          >
            <span className={cn(
              "inline-block text-[120px]",
              "filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
              "animate-[pulse_2s_ease-in-out_infinite]", // Smoother pulse animation
              "will-change-[transform,opacity]" // Optimize specific properties
            )}>
              🎪
            </span>
          </div>

          {/* Text Content */}
          <div 
            className={cn(
              "space-y-4",
              "transform-gpu", // Use GPU acceleration
              "transition-all duration-700 delay-200 ease-out",
              stage === 'initial' ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <h2 className={cn(
              "text-3xl font-bold",
              "bg-gradient-to-r from-red-300 via-white to-red-300",
              "bg-clip-text text-transparent",
              "animate-[gradient-x_3s_ease-in-out_infinite]", // Smoother gradient animation
              "will-change-[background-position]"
            )}>
              Welcome to the Show
            </h2>

            {/* Loading Dots */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-red-500"
                  style={{
                    animation: 'bounce 1.5s ease-in-out infinite',
                    animationDelay: `${i * 0.15}s`,
                    willChange: 'transform',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}