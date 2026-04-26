import { useState, useEffect } from "react";

export const useDeepSeekTranslation = (sourceTexts, targetLang) => {
  const [translatedTexts, setTranslatedTexts] = useState(sourceTexts);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!targetLang || targetLang === "en") {
      setTranslatedTexts(sourceTexts);
      return;
    }

    const translateTexts = async () => {
      setIsTranslating(true);
      
      try {
        const translations = await Promise.all(
          sourceTexts.map(async (text) => {
            if (!text || text.trim() === "") return text;
            
            const response = await fetch(
              `https://lingva.ml/api/v1/en/${targetLang}/${encodeURIComponent(text)}`
            );
            const data = await response.json();
            return data.translation || text;
          })
        );
        
        setTranslatedTexts(translations);
      } catch (error) {
        console.error("Translation error:", error);
        setTranslatedTexts(sourceTexts);
      } finally {
        setIsTranslating(false);
      }
    };

    translateTexts();
  }, [sourceTexts, targetLang]);

  return { translatedTexts, isTranslating };
};
