
import { GoogleGenAI } from "@google/genai";

const RICARDO_PROFILE = `
Ricardo Camilo:
- Formação: Bacharel em Gestão da Tecnologia da Informação pela FATEC Jaú (2017 - 2023).
- Cargo Atual: Desenvolvedor Frontend Pleno na Consir Informática (Jul 2025 - Presente).
- Freelancer Sênior (Jan 2025 - Jul 2025): Especialista em Frontend. Projetos de alto impacto como RvOne (Next.js 13), Itu Pneus (Next.js 15) e CRM Médico para Dra. Adriana Rezende.
- Experiência: 4 anos de experiência consolidada.
- Histórico Profissional: 
  1. Consir Informática (Pleno): Jul 2025 - Presente.
  2. Freelancer Sênior: Jan 2025 - Jul 2025.
  3. Labi9.com: Jan 2021 - Dez 2024 (4 anos).
  4. SIALOG Software: 2019 (Estagiário).
- Stack: React, Next.js, Vue.js, Nuxt.js, Angular, TypeScript, NestJS.
- Idiomas: Português (Nativo), Inglês (C1), Italiano (Básico), Espanhol (Intermediário).
- Contato: +55 (14) 99676-5389 | ricardo.camilo.dev@gmail.com
- LinkedIn: https://www.linkedin.com/in/ricardo-camilo-programador-frontend-web-developer/
- GitHub: https://github.com/ricardo564
- Perfil DISC: Investigador (Focado, Estratégico, Perfeccionista, Técnico).
`;

export const askCamiloAI = async (query: string, history: {role: 'user' | 'bot', text: string}[], lang: string = 'pt') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const formattedHistory = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model' as const,
    parts: [{ text: msg.text }]
  }));

  const systemInstructions = {
    pt: "Você é o Camilo AI. Responda em Português Brasileiro de forma técnica, estratégica e vendedora.",
    en: "You are Camilo AI. Respond in English with a professional, technical, and persuasive tone.",
    it: "Sei Camilo AI. Rispondi in Italiano con un tono professionale, tecnico e persuasivo.",
    es: "Eres Camilo AI. Responde en Español con un tono profesional, técnico y persuasivo."
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...formattedHistory, { role: 'user', parts: [{ text: query }] }],
    config: {
      systemInstruction: `${systemInstructions[lang as keyof typeof systemInstructions] || systemInstructions.en}\n\nContexto sobre Ricardo:\n${RICARDO_PROFILE}`,
      temperature: 0.7,
    }
  });
  return response.text;
};
