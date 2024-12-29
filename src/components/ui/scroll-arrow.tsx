import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollArrow() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <ChevronDown 
        className={cn(
          "h-8 w-8 text-white opacity-80",
          "animate-[bounce_2s_ease-in-out_infinite]", // Slower, smoother bounce
          "filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
          "transition-opacity duration-300",
          "hover:opacity-100"
        )}
      />
    </div>
  );
}