import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: 'YOUR_GEMINI_API_KEY', // Replace with your actual Gemini API key
});

export async function fetchQuestion(level: number) {
  const prompt = `
Generate one multiple choice finance quiz question (4 options), specify the correct answer index (0–3) and a short explanation. Format JSON:
{"question": "...", "options": ["...","...","...","..."], "correctIndex": 2, "explanation": "..."}
`.trim();

  const result = await ai.models.generateContent({
    model: 'gemini-1.5-flash',
    contents: prompt,
  });

  const response = await result.response;
  const text = await response.text();
  return JSON.parse(text);
}
