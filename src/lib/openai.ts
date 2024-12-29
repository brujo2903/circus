import OpenAI from 'openai';

// Note: In production, this should be an environment variable
const OPENAI_API_KEY = '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';

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});