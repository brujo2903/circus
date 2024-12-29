import type { AgentProfile } from '../types';

export function validateProfile(profile: AgentProfile): string | null {
  if (!profile.name?.trim()) {
    return 'Name is required';
  }

  if (!profile.role?.trim()) {
    return 'Role is required';
  }

  if (!profile.personality?.trim()) {
    return 'Personality is required';
  }

  if (!profile.speakingStyle?.trim()) {
    return 'Speaking style is required';
  }

  if (!profile.background?.trim()) {
    return 'Background is required';
  }

  return null;
}