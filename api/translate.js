export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check
  if (req.url === '/api/health') {
    return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  }

  // Translation endpoint
  if (req.method === 'POST') {
    try {
      const { texts, targetLang } = req.body;
      
      const languageMap = {
        'en': 'English', 'zh': 'Simplified Chinese', 'es': 'Spanish',
        'fr': 'French', 'de': 'German', 'ja': 'Japanese', 'ko': 'Korean'
      };
      const targetLanguage = languageMap[targetLang] || targetLang;
      
      const results = await Promise.all(texts.map(async (text) => {
        if (!text || text.trim() === '') return text;
        
        // Mock response for now (test without DeepSeek first)
        return `[Translated to ${targetLanguage}] ${text}`;
      }));
      
      return res.status(200).json({ translations: results });
    } catch (error) {
      return res.status(500).json({ error: 'Translation failed' });
    }
  }
  
  return res.status(404).json({ error: 'Not found' });
}