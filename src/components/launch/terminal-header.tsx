import { cn } from "@/lib/utils";

interface TerminalHeaderProps {
  onClear?: () => void;
}

export function TerminalHeader({ onClear }: TerminalHeaderProps) {
  return (
    <div className="relative border-b border-red-500/20">
      {/* Dots */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>

      {/* Title */}
      <div className="flex items-center justify-center py-4">
        <div className="text-red-400 text-sm font-mono">
          CircusLLM v1.0
        </div>
      </div>

      {/* Clear Button */}
      {onClear && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <button 
            onClick={onClear}
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}