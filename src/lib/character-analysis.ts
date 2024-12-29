import { analyzeImage } from './openai/vision';
import { processAnalysisResponse } from './utils/analysis-processing';
import type { AnalysisResult } from './types';

export async function analyzeCharacter(
  imageUrl: string,
  name: string
): Promise<AnalysisResult> {
  if (!imageUrl || !name.trim()) {
    throw new Error('Image and name are required');
  }

  try {
    const analysis = await analyzeImage(imageUrl, name, {
      maxRetries: 3,
      retryDelay: 1000
    });
    
    const result = processAnalysisResponse(analysis);
    
    // Validate analysis result
    if (!result.traits.every(trait => trait.value)) {
      throw new Error('Failed to generate complete character analysis');
    }
    
    return result;
  } catch (error: any) {
    console.error('Character analysis error:', error);
    const message = error.response?.data?.error?.message || 
                   error.message || 
                   'Failed to analyze character. Please try again.';
    throw new Error(message);
  }
}