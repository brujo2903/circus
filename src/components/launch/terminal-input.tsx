import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface TerminalInputProps {
  fileValue: string;
  nameValue: string;
  onFileChange: (file: File | null) => void;
  onNameChange: (value: string) => void;
  disabled?: boolean;
}

export function TerminalInput({
  fileValue,
  nameValue,
  onFileChange,
  onNameChange,
  disabled
}: TerminalInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(file);
  };

  return (
    <div className="flex justify-center space-x-4">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />

      {/* File Input Display */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={disabled}
        className={cn(
          "flex-1 relative",
          "bg-black/50 border border-red-500/20 rounded-lg",
          "h-12",
          "focus:outline-none focus:border-red-500/40",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "hover:bg-black/60 hover:border-red-500/30",
          "group"
        )}
      >
        <div className="absolute inset-0 flex items-center px-4">
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors">
            <Upload className="h-4 w-4" />
            <span>Image File</span>
          </div>
          {fileValue && (
            <span className="ml-4 text-white/80 truncate">
              {fileValue}
            </span>
          )}
        </div>
      </button>

      {/* Name Input */}
      <input
        type="text"
        value={nameValue}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Character Name"
        disabled={disabled}
        className={cn(
          "flex-1 h-12",
          "bg-black/50 border border-red-500/20 rounded-lg",
          "px-4",
          "text-white placeholder:text-white/60",
          "focus:outline-none focus:border-red-500/40",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "hover:border-red-500/30"
        )}
      />
    </div>
  );
}