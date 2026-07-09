import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | Ingénieur Frontend',
    desc: "Ingénieur Frontend et spécialiste Vue.js/TypeScript avec plus de 6 ans d'expérience. Expert en Vue 3, React et Next.js.",
  },
  nav: {
    work: 'Portfolio',
    about: 'À propos',
    services: 'Services',
    career: 'Parcours',
    contact: 'Contact',
    menu: 'Menu',
  },
  hero: {
    title: 'Ingénieur Frontend',
    subtitle: 'et spécialiste Vue.js',
    desc: "Plus de 6 ans d'expérience à transformer les défis commerciaux en solutions numériques à fort impact. Expert en Vue.js, TypeScript et architectures de performance extrême.",
    cta: 'Discutons',
    badge: 'Disponible pour freelance',
  },
  about: {
    quote: "L'excellence technique est le résultat de l'intention et de l'exécution impeccable.",
    bio: "Je suis Ricardo Camilo, développeur Frontend avec plus de 6 ans d'expérience. Je suis spécialisé en Vue.js et TypeScript, alliant expertise technique solide et discipline exceptionnelle pour des livrables de haute qualité.",
    details:
      'Profil DISC : Investigateur — Accent sur la précision technique et les solutions évolutives.',
    stats: { exp: '6+ ans', projects: '20+ livrés', eng: 'Anglais C1' },
  },
  services: {
    s1: {
      title: 'Développement Vue.js & React',
      desc: 'Applications robustes avec Vue 3, Next.js et Nuxt. Code propre, testé et prêt à scaler.',
    },
    s2: {
      title: 'Modernisation de systèmes legacy',
      desc: 'Expertise en migration de systèmes legacy vers des stacks modernes comme Vue 3 et TypeScript.',
    },
    s3: {
      title: 'Performance & SEO',
      desc: 'Optimisation extrême pour un chargement instantané et une visibilité organique maximale.',
    },
  },
  skills: { title: 'Technologies', subtitle: '& Outils' },
  work: {
    title: 'Travaux',
    subtitle: 'Sélectionnés',
    viewAll: 'Voir GitHub complet',
    viewProject: 'Voir le Projet',
    viewFullSize: 'Voir en taille réelle',
    projectCategory: 'Catégorie du projet',
    comingSoon: 'Bientôt',
    viewFullSize: 'Voir en taille réelle',
    projectCategory: 'Catégorie du projet',
  },
  career: {
    title: 'Parcours',
    subtitle: 'Professionnel',
    present: 'Actuellement',
    timeline: [
      {
        id: 1,
        period: 'Nov 2025 — Présent',
        company: 'Consir Informática',
        role: 'Ingénieur Frontend',
        desc: "Direction technique dans la modernisation d'un système legacy de gestion syndicale vers Vue.js 3 + TypeScript. Mise en œuvre d'une architecture basée sur les stores avec Pinia et PWA.",
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: 'Jul 2025 — Nov 2025',
        company: 'Consir Informática',
        role: 'Ingénieur Frontend Intermédiaire',
        desc: "Ingénierie de systèmes d'entreprise évolutifs axée sur Vue.js, TypeScript et la maintenance de haut niveau.",
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: 'Jan 2025 — Jul 2025',
        company: 'Freelance Specialist',
        role: 'Consultant Frontend',
        desc: 'Direction technique sur des projets à fort impact (Itu Pneus, RvOne, Cajuscript) axée sur la conversion et la performance.',
        tags: ['Next.js 15', 'SEO', 'Consulting'],
      },
      {
        id: 4,
        period: 'Oct 2021 — Déc 2024',
        company: 'Labi9 Tecnologia',
        role: 'Développeur Frontend',
        desc: "3+ ans dans l'écosystème fintech. Développement d'interfaces complexes avec React, Qwik et Nuxt.",
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: 'Stagiaire Technique',
        desc: 'Fondamentaux en Ruby on Rails et JasperReports pour la logistique.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: 'Reconnaissance',
    subtitle: 'et certifications',
    proficiency: 'Compétence en anglais',
    certificate: 'Certificat EF SET',
    level: 'C1 Avancé',
  },
  cta: {
    title: 'Améliorez votre',
    subtitle: 'Produit digital',
    desc: 'Prêt à collaborer avec des marques recherchant une ingénierie élégante et un design de classe mondiale.',
    button: "M'envoyer un email",
    whatsapp: 'WhatsApp',
  },
}

export default translation
