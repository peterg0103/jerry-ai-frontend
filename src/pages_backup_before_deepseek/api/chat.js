import OpenAI from 'openai';

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com',
  dangerouslyAllowBrowser: true  // For development only
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, chatHistory } = req.body;

  try {
    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `You are Jerry's AI, a helpful assistant for Jerry's AI website. 
          
          BUSINESS RULES:
          - For questions about App Development, Web Development, Education, Digital Marketing, CyberSecurity, Voice Translator, Add Banner, Analyse Data → DO NOT provide coding solutions.
          - Instead respond: "That's a great question about our [Service Name] service! For a full solution, you'll need to subscribe. Please visit our Services page to subscribe."
          - For general questions: Be friendly and helpful.`
        },
        ...chatHistory,
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error('DeepSeek API error:', error);
    res.status(500).json({ error: 'AI service temporarily unavailable' });
  }
}