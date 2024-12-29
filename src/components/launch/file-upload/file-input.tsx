import { useRef } from 'react';
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FileUploadProps } from './types';

interface FileInputProps extends FileUploadProps {
  value: string;
}

export function FileInput({ value, onFileSelect, disabled }: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
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
          {value && (
            <span className="ml-4 text-white/80 truncate">
              {value}
            </span>
          )}
        </div>
      </button>
    </>
  );
}