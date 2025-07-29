// src/services/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBQCKM-WlAkEEXAXLsgYkM9YgA8eYcuJHw';
const ai = new GoogleGenerativeAI(API_KEY);

// ✅ Export this type so others can use it
export type QuizData = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export async function fetchQuestion(level: number): Promise<QuizData> {
  const prompt = `
Generate one multiple-choice finance quiz question with 4 options. Include the correct answer index (0–3) and a short explanation.
Return ONLY valid JSON with this exact structure (no intro, no markdown):

{
  "question": "Your question here",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctIndex": 2,
  "explanation": "Short explanation here"
}
`.trim();

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);

    const rawText = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Gemini returned empty response');

    const jsonMatch = rawText.match(/\{[\s\S]*?\}/);
    if (!jsonMatch) throw new Error('No valid JSON found in response');

    const parsed: QuizData = JSON.parse(jsonMatch[0]);

    return parsed;
  } catch (err) {
    console.error('❌ Error fetching question:', err);
    throw err;
  }
}
