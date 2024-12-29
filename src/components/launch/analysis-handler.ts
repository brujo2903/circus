import { useState } from 'react';
import { analyzeCharacter } from '@/lib/character-analysis';
import { storeCharacterAnalysis } from '@/lib/character/storage';

interface Analysis {
  traits: Array<{
    title: string;
    value: string;
  }>;
}

export function useAnalysisHandler() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleAnalyze = async (imageUrl: string, name: string) => {
    if (!imageUrl || !name.trim() || isAnalyzing) {
      setError('Please provide both an image and a name.');
      return null;
    }

    setIsAnalyzing(true);
    setError('');

    try {
      const result = await analyzeCharacter(imageUrl, name);
      
      const storedCharacter = await storeCharacterAnalysis(name, imageUrl, result);
      
      setAnalysis(result);
      return storedCharacter;
      
    } catch (error: any) {
      console.error('Analysis error:', error);
      setError(error.message);
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysis(null);
    setError('');
  };

  return {
    isAnalyzing,
    error,
    analysis,
    handleAnalyze,
    clearAnalysis
  };
}