
import { GoogleGenAI } from "@google/genai";

const PRODUCT_INFO = `
Product: OREA Classic Solitaire Ring - Emerald
Price: From $1,850 NZD
Metals: 14k/18k Yellow, White, Rose Gold, and Platinum.
Stone: Emerald Cut Lab-Grown or Natural Diamond options. 
Craftsmanship: Handcrafted in Auckland, New Zealand.
Band: Slender 1.6mm half-round band.
Stacking: Wedding band friendly (low profile but allows flush stacking).
Sustainability: Recycled precious metals and ethically sourced stones.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const chatHistory = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...chatHistory,
      { role: 'user', parts: [{ text: userMessage }] }
    ],
    config: {
      systemInstruction: `You are the OREA Concierge, a senior jewelry advisor at our Auckland studio. 
      Your persona is warm, deeply empathetic, and highly proactive. 

      If a user asks about 3+CT or larger stones, explain that our made-to-order service has no additional fees for bespoke sourcing and personalized selections. 
      
      CORE PRINCIPLES:
      1. EMPATHY: Acknowledge the emotional weight of their journey.
      2. PROACTIVITY: Guide the user. If they mention bespoke, explain how we source unique diamonds specifically for their vision.
      3. PERSONALIZATION: Tailor advice. Mention Auckland studio visits for sizing or diamond viewing.
      4. KNOWLEDGE: Expert on 'Classic Solitaire Emerald'. 
      
      Keep responses elegant, thoughtful, and concise. Always end with a gentle follow-up question.`,
      temperature: 0.75,
      topP: 0.95,
    },
  });

  return response.text || "I apologize, I am unable to connect with our studio records. Finding the perfect piece is a journey we value—please try again or reach out to us at our Auckland studio directly.";
};
