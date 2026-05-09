import { GoogleGenAI } from '@google/genai'

const RICARDO_PROFILE = `
Ricardo Camilo:
- Formação: Bacharel em Gestão da Tecnologia da Informação pela FATEC Jaú (2017 - 2023).
- Cargo Atual: Desenvolvedor Frontend Pleno na Consir Informática (Jul 2025 - Presente). Focado em Vue.js, TypeScript e sistemas corporativos escaláveis.
- Experiência Freelance (Jan 2025 - Jul 2025): Especialista em Frontend. Projetos de alto impacto: 
  1. Itu Pneus (Next.js 15, SEO, Performance Lighthouse 90+).
  2. RvOne - Edifício Canada (Next.js 13, SSR, SEO Avançado).
  3. Dra. Adriana Rezende (MVP de formulários médicos, Automação de PDF, Next.js).
  4. Cajuscript (Automação de busca empresarial com Google Search API).
- Experiência Anterior: Labi9 Tecnologia da Informação (Out 2021 - Dez 2024, 3 anos e 3 meses). Atuou com React, Vue, Qwik, Nuxt, Astro e Tailwind CSS. Mentorado por desenvolvedores seniores em um ambiente de fintech e investimentos.
- Estágios: SIALOG Software (Ruby on Rails, 2019), Delamanoinfo (Hardware/TI, 2018).
- Especialidades: Clean Code (Boy Scout Rule), Performance Web, Acessibilidade (WCAG), SEO, Arquitetura Escalável.
- Idiomas: Português (Nativo), Inglês (C1 - EF SET 66/100), Italiano (Básico), Espanhol (Intermediário).
- Localização: Jaú, SP - Brasil.
- Perfil DISC: Investigador (Preciso, Técnico, Analítico, Perfeccionista).
`

export const askCamiloAI = async (
  query: string,
  history: Array<{ role: 'user' | 'bot'; text: string }>,
  lang: string = 'pt',
) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY ?? '' })
  const formattedHistory = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : ('model' as const),
    parts: [{ text: msg.text }],
  }))

  const systemInstructions = {
    pt: 'Você é o Camilo AI. Responda em Português Brasileiro de forma técnica, estratégica e vendedora. Seu objetivo é convencer recrutadores e clientes de que Ricardo é o melhor engenheiro frontend para projetos premium.',
    en: 'You are Camilo AI. Respond in English with a professional, technical, and persuasive tone. Your goal is to convince recruiters and clients that Ricardo is the best frontend engineer for premium projects.',
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...formattedHistory, { role: 'user', parts: [{ text: query }] }],
    config: {
      systemInstruction: `${systemInstructions[lang as keyof typeof systemInstructions] || systemInstructions.en}\n\nContexto sobre Ricardo:\n${RICARDO_PROFILE}`,
      temperature: 0.7,
    },
  })
  return response.text
}
