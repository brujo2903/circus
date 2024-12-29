import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { circusRoles } from '@/lib/constants/circus-roles';

interface RoleSelectProps {
  value: string;
  onChange: (role: typeof circusRoles[number]) => void;
}

export function RoleSelect({ value, onChange }: RoleSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedRole = circusRoles.find(role => role.value === value);

  return (
    <div className="relative">
      {/* Selected Value Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full text-left",
          "bg-black/30 rounded-lg",
          "px-4 py-3",
          "text-white",
          "border border-red-500/20",
          "focus:outline-none focus:border-red-500/40",
          "transition-colors",
          "flex items-center justify-between"
        )}
      >
        <span className={selectedRole ? "text-white" : "text-white/40"}>
          {selectedRole?.label || "Select a circus role..."}
        </span>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isOpen && "transform rotate-180"
        )} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={cn(
          "absolute z-50 w-full mt-2",
          "bg-black/90 backdrop-blur-xl",
          "border border-red-500/20 rounded-lg",
          "shadow-xl",
          "max-h-[300px] overflow-y-auto"
        )}>
          {circusRoles.map((role) => (
            <button
              key={role.value}
              type="button"
              onClick={() => {
                onChange(role);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left p-4",
                "transition-colors",
                "hover:bg-red-500/20",
                "border-b border-red-500/10 last:border-0",
                "group",
                value === role.value && "bg-red-500/10"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-red-400">
                  {role.label}
                </span>
                {value === role.value && (
                  <Check className="h-4 w-4 text-red-400" />
                )}
              </div>
              <p className="mt-1 text-sm text-white/60 group-hover:text-white/80">
                {role.description}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}