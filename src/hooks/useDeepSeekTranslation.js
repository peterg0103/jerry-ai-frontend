import { useState, useEffect } from 'react';

export const useDeepSeekTranslation = (sourceTexts, targetLang) => {
  const [translatedTexts, setTranslatedTexts] = useState(sourceTexts);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!targetLang || targetLang === 'en') {
      setTranslatedTexts(sourceTexts);
      return;
    }

    setIsTranslating(true);

    fetch('https://jerry-ai-backend.onrender.com/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        texts: Object.values(sourceTexts),
        targetLang: targetLang
      })
    })
      .then(res => res.json())
      .then(data => {
        const keys = Object.keys(sourceTexts);
        const results = { ...sourceTexts };
        keys.forEach((key, index) => {
          results[key] = data.translations[index] || sourceTexts[key];
        });
        setTranslatedTexts(results);
        setIsTranslating(false);
      })
      .catch(err => {
        console.error('Translation error:', err);
        setIsTranslating(false);
      });
  }, [sourceTexts, targetLang]);

  return { translatedTexts, isTranslating };
};