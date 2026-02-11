
import { GoogleGenAI } from "@google/genai";

const RICARDO_PROFILE = `
Ricardo Camilo Dos Santos Damaceno:
- Especialidade: Desenvolvedor Frontend Sênior.
- Experiência: 4+ anos (React, Vue.js, JavaScript, TypeScript).
- Foco: Performance, interfaces de alto impacto, resultados de negócio (fintechs e investimentos).
- Conquistas: Sites 40% mais rápidos, processos 60% mais eficientes.
- Local: Jaú-SP (atendimento remoto e presencial).
- Hobbies: Novels chinesas, mangás, 5 gatos (Hercules, Johan, Lady, Princesa, Aladin).
`;

// Fix: Updated to follow Gemini SDK best practices, including systemInstruction and history support
export const askCamiloAI = async (query: string, history: {role: 'user' | 'bot', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Map local history roles to Gemini API roles ('user' or 'model')
  const formattedHistory = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model' as const,
    parts: [{ text: msg.text }]
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...formattedHistory,
      { role: 'user', parts: [{ text: query }] }
    ],
    config: {
      systemInstruction: `Aja como Camilo AI, o assistente virtual do Ricardo Camilo. Use o perfil abaixo para responder dúvidas sobre ele de forma profissional, simpática e criativa. Mantenha as respostas curtas.\n\nPerfil:\n${RICARDO_PROFILE}`,
      temperature: 0.7,
    }
  });
  
  return response.text;
};