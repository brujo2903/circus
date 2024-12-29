export const OPENAI_CONFIG = {
  models: {
    chat: "gpt-4-0125-preview",
  },
  chatOptions: {
    temperature: 0.7,
    max_tokens: 150,
    presence_penalty: 0.6,
    frequency_penalty: 0.5
  },
  systemPrompts: {
    chat: (character: Character) => 
      `You are ${character.name}, a ${character.role}.
Personality: ${character.personality}
Speaking Style: ${character.speaking_style}
Background: ${character.background}

Guidelines:
- Stay in character consistently
- Keep responses concise (2-3 sentences)
- Use your defined speaking style
- Be engaging and theatrical
- Never break character or mention being AI`
  }
} as const;