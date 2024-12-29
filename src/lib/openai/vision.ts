import { openai } from './client';
import { OPENAI_CONFIG } from './config';

interface ImageAnalysisOptions {
  maxRetries?: number;
  retryDelay?: number;
}

export async function analyzeImage(
  imageUrl: string,
  name: string,
  options: ImageAnalysisOptions = { maxRetries: 3, retryDelay: 1000 }
): Promise<string> {
  // Convert data URL to base64 if needed
  const base64Image = imageUrl.startsWith('data:image/')
    ? imageUrl.split(',')[1]
    : imageUrl;

  // Validate base64 image
  if (!base64Image || base64Image.length === 0) {
    throw new Error('Invalid image data');
  }

  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= (options.maxRetries || 1); attempt++) {
    try {
      const response = await openai.chat.completions.create({
        model: OPENAI_CONFIG.models.vision,
        messages: [
          {
            role: "system",
            content: OPENAI_CONFIG.systemPrompts.analysis
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Analyze this character named ${name}.`
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`
                }
              }
            ]
          }
        ],
        max_tokens: OPENAI_CONFIG.maxTokens.analysis,
        temperature: OPENAI_CONFIG.temperature
      });

      const analysis = response.choices[0].message.content;
      if (!analysis) {
        throw new Error('Failed to generate character analysis');
      }

      return analysis;
    } catch (error: any) {
      lastError = error;
      console.error('Vision API error:', error);
      
      const isRetryableError = error.status === 429 || error.status >= 500;
      if (isRetryableError && attempt < (options.maxRetries || 1)) {
        await new Promise(resolve => setTimeout(resolve, options.retryDelay));
        continue;
      }
      
      throw error;
    }
  }

  throw lastError || new Error('Failed to analyze character');
}