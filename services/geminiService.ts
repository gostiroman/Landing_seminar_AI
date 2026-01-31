import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors on load if missing
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateHealthcareResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "API Key не найден. Пожалуйста, настройте ключ для демонстрации ИИ.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Вы — опытный помощник организатора здравоохранения в РФ. Вы помогаете писать официальные письма, анализировать приказы, составлять формулы Excel и готовить протоколы совещаний. Отвечай кратко, профессионально, используя деловой стиль общения. Используй форматирование Markdown.",
        temperature: 0.7,
      }
    });

    return response.text || "Не удалось получить ответ от модели.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при обращении к ИИ. Попробуйте позже.";
  }
};