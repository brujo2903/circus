import { useState } from 'react';

export function useFileHandler() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(file.type)) {
        console.error('Invalid file type');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const result = e.target.result as string;
          // Validate data URL format
          if (result.startsWith('data:image/')) {
            setImageUrl(result);
          } else {
            console.error('Invalid image data');
          }
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading file');
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl('');
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setImageUrl('');
  };

  return {
    selectedFile,
    imageUrl,
    handleFileChange,
    clearFile
  };
}