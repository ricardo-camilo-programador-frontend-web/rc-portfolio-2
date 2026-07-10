import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | Ingegnere Frontend',
    desc: 'Ingegnere Frontend e specialista Vue.js/TypeScript con oltre 6 anni di esperienza. Esperto in Vue 3, React e Next.js.',
  },
  errorBoundary: { title: 'Qualcosa e andato storto.', retry: 'Riprova' },
  nav: {
    work: 'Portfolio',
    about: 'Chi sono',
    services: 'Servizi',
    career: 'Carriera',
    contact: 'Contatti',
    menu: 'Menu',
  },
  hero: {
    title: 'Ingegnere Frontend',
    subtitle: 'e specialista Vue.js',
    desc: 'Oltre 6 anni di esperienza nel trasformare le sfide aziendali in soluzioni digitali ad alto impatto. Esperto in Vue.js, TypeScript e architetture a prestazioni estreme.',
    cta: 'Parliamo',
    badge: 'Disponibile per freelance',
  },
  about: {
    quote: "L'eccellenza tecnica è il risultato di intenzione ed esecuzione impeccabile.",
    bio: 'Sono Ricardo Camilo, sviluppatore Frontend con oltre 6 anni di esperienza. Specializzato in Vue.js e TypeScript, combino solida competenza tecnica con disciplina eccezionale per fornire soluzioni di alta qualità.',
    details: 'Profilo DISC: Investigatore — Focus su precisione tecnica e soluzioni scalabili.',
    stats: { exp: '6+ anni', projects: '20+ consegnati', eng: 'Inglese C1' },
    statsLabels: { exp: 'Esperienza', projects: 'Artigianale', eng: 'Competenza' },
    portraitAlt: 'Ritratto di Ricardo Camilo',
  },
  services: {
    s1: {
      title: 'Sviluppo Vue.js e React',
      desc: 'Applicazioni robuste con Vue 3, Next.js e Nuxt. Codice pulito, testato e pronto per scalare.',
    },
    s2: {
      title: 'Modernizzazione sistemi legacy',
      desc: 'Competenza nella migrazione di sistemi legacy a stack moderni come Vue 3 e TypeScript.',
    },
    s3: {
      title: 'Prestazioni e SEO',
      desc: 'Ottimizzazione estrema per caricamento istantaneo e massima visibilità organica.',
    },
  },
  skills: { title: 'Tecnologie', subtitle: '& Strumenti' },
  work: {
    title: 'Lavori',
    subtitle: 'Selezionati',
    viewAll: 'Vedi GitHub completo',
    viewProject: 'Vedi Progetto',
    viewFullSize: 'Vedi dimensione intera',
    projectCategory: 'Categoria del progetto',
    comingSoon: 'Prossimamente',
  },
  career: {
    title: 'Carriera',
    subtitle: 'Professionale',
    present: 'Attualmente',
    timeline: [
      {
        id: 1,
        period: 'Nov 2025 — Presente',
        company: 'Consir Informática',
        role: 'Ingegnere Frontend',
        desc: 'Leadership tecnico nella modernizzazione di un sistema legacy di gestione sindacale verso Vue.js 3 + TypeScript. Implementazione di architettura basata su store con Pinia e PWA.',
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: 'Lug 2025 — Nov 2025',
        company: 'Consir Informática',
        role: 'Ingegnere Frontend Mid',
        desc: 'Ingegneria di sistemi enterprise scalabili focalizzata su Vue.js, TypeScript e manutenzione di alto livello.',
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: 'Gen 2025 — Lug 2025',
        company: 'Freelance Specialist',
        role: 'Consulente Frontend',
        desc: 'Leadership tecnico su progetti ad alto impatto (Itu Pneus, RvOne, Cajuscript) focalizzato su conversione e performance.',
        tags: ['Next.js 15', 'SEO', 'Consulenza'],
      },
      {
        id: 4,
        period: 'Ott 2021 — Dic 2024',
        company: 'Labi9 Tecnologia',
        role: 'Sviluppatore Frontend',
        desc: "3+ anni nell'ecosistema fintech. Sviluppo di interfacce complesse con React, Qwik e Nuxt.",
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: 'Tirocinante Tecnico',
        desc: 'Fondamenti in Ruby on Rails e JasperReports per la logistica.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: 'Riconoscimenti',
    subtitle: 'e certificazioni',
    proficiency: 'Competenza in inglese',
    certificate: 'Certificato EF SET',
    level: 'C1 Avanzato',
  },
  cta: {
    title: 'Migliora il tuo',
    subtitle: 'Prodotto digitale',
    desc: 'Pronto a collaborare con brand che cercano ingegneria elegante e design di livello mondiale.',
    button: 'Inviami email',
    whatsapp: 'WhatsApp',
  },
  footer: {
    rights: 'Tutti i diritti riservati.',
    links: 'Link footer',
    github: 'Visita il profilo GitHub',
    scrollTop: 'Torna in cima alla pagina',
  },
}

export default translation
