import { useCallback } from 'react';
import { cn } from "@/lib/utils";
import type { DropzoneProps } from './types';

export function Dropzone({ onFileSelect, onDrop, disabled, children }: DropzoneProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled) return;

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onDrop(file);
    }
  }, [disabled, onDrop]);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        "relative min-h-[200px]",
        "bg-black/50 rounded-lg",
        "border-2 border-dashed border-red-500/20",
        "flex items-center justify-center",
        "transition-all duration-200",
        "group",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      {children}
    </div>
  );
}