import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { RoleSelect } from './role-select';
import { circusRoles } from '@/lib/constants/circus-roles';
import type { AgentProfile } from '@/lib/types';

interface AgentFormProps {
  onSubmit: (profile: AgentProfile) => Promise<void>;
  isLoading: boolean;
}

export function AgentForm({ onSubmit, isLoading }: AgentFormProps) {
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [personality, setPersonality] = useState('');
  const [speakingStyle, setSpeakingStyle] = useState('');
  const [background, setBackground] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // Reset form when character is created
  useEffect(() => {
    const handleCreated = () => {
      setName('');
      setSelectedRole('');
      setPersonality('');
      setSpeakingStyle('');
      setBackground('');
      setImageUrl('');
      setFile(null);
    };

    window.addEventListener('character-created', handleCreated);
    return () => window.removeEventListener('character-created', handleCreated);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoleSelect = (role: typeof circusRoles[number]) => {
    setSelectedRole(role.value);
    setPersonality(role.defaultPersonality);
    setSpeakingStyle(role.defaultStyle);
    setBackground(role.defaultBackground);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const role = circusRoles.find(r => r.value === selectedRole);
    if (!role) return;

    await onSubmit({
      name: name.trim(),
      role: role.label,
      personality,
      speakingStyle,
      background,
      imageUrl
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-white/80 mb-2">Character Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                "w-full bg-black/30 rounded-lg",
                "px-4 py-3",
                "text-white",
                "border border-red-500/20",
                "focus:outline-none focus:border-red-500/40",
                "transition-colors"
              )}
              placeholder="Enter character name..."
              required
            />
          </div>

          {/* Role Select */}
          <div>
            <label className="block text-white/80 mb-2">Circus Role</label>
            <RoleSelect
              value={selectedRole}
              onChange={handleRoleSelect}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-white/80 mb-2">Character Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={cn(
                "w-full bg-black/30 rounded-lg",
                "px-4 py-3",
                "text-white",
                "border border-red-500/20",
                "focus:outline-none focus:border-red-500/40",
                "transition-colors",
                "file:mr-4 file:py-2 file:px-4",
                "file:rounded-full file:border-0",
                "file:text-sm file:font-semibold",
                "file:bg-red-500/20 file:text-red-400",
                "hover:file:bg-red-500/30"
              )}
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Personality */}
          <div>
            <label className="block text-white/80 mb-2">Personality</label>
            <textarea
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              className={cn(
                "w-full bg-black/30 rounded-lg",
                "px-4 py-3",
                "text-white",
                "border border-red-500/20",
                "focus:outline-none focus:border-red-500/40",
                "transition-colors",
                "h-[100px] resize-none"
              )}
              placeholder="Describe the character's personality..."
              required
            />
          </div>

          {/* Speaking Style */}
          <div>
            <label className="block text-white/80 mb-2">Speaking Style</label>
            <textarea
              value={speakingStyle}
              onChange={(e) => setSpeakingStyle(e.target.value)}
              className={cn(
                "w-full bg-black/30 rounded-lg",
                "px-4 py-3",
                "text-white",
                "border border-red-500/20",
                "focus:outline-none focus:border-red-500/40",
                "transition-colors",
                "h-[100px] resize-none"
              )}
              placeholder="Describe how the character speaks..."
              required
            />
          </div>

          {/* Background */}
          <div>
            <label className="block text-white/80 mb-2">Background</label>
            <textarea
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className={cn(
                "w-full bg-black/30 rounded-lg",
                "px-4 py-3",
                "text-white",
                "border border-red-500/20",
                "focus:outline-none focus:border-red-500/40",
                "transition-colors",
                "h-[100px] resize-none"
              )}
              placeholder="Describe the character's background story..."
              required
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={cn(
          "w-full bg-red-500/20 hover:bg-red-500/30",
          "text-red-400 font-medium",
          "rounded-lg px-6 py-3",
          "transition-colors duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "mt-8"
        )}
      >
        {isLoading ? 'Creating Character...' : 'Create Character'}
      </button>
    </form>
  );
}