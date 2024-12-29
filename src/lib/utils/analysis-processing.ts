import { extractSection } from './text-processing';
import type { AnalysisResult } from '../types';

export function processAnalysisResponse(analysis: string): AnalysisResult {
  return {
    traits: [
      {
        title: "Visual Characteristics",
        value: extractSection(analysis, "Visual Characteristics")
      },
      {
        title: "Personality Traits",
        value: extractSection(analysis, "Personality Traits")
      },
      {
        title: "Communication Style",
        value: extractSection(analysis, "Communication Style")
      }
    ]
  };
}