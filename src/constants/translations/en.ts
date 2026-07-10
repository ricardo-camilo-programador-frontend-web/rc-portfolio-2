import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | Frontend Engineer',
    desc: 'Frontend Engineer & Vue.js/TypeScript Specialist with 6+ years of experience. Expert in Vue 3, React, and Next.js.',
  },
  errorBoundary: { title: 'Something went wrong.', retry: 'Try again' },
  nav: {
    work: 'Portfolio',
    about: 'About',
    services: 'Services',
    career: 'Career',
    contact: 'Contact',
    menu: 'Menu',
  },
  a11y: {
    skipToContent: 'Skip to main content',
    selectLanguage: 'Select language',
    languageSelection: 'Language selection',
  },
  hero: {
    title: 'Frontend Engineer',
    subtitle: '& Vue.js Specialist',
    desc: '6+ years of experience turning business challenges into high-impact digital solutions. Expert in Vue.js, TypeScript, and extreme performance architectures.',
    cta: "Let's Talk",
    badge: 'Available for Freelance',
  },
  about: {
    quote: 'Technical excellence is the result of intention and flawless execution.',
    bio: 'I am Ricardo Camilo, Frontend Developer with 6+ years of experience. I specialize in Vue.js and TypeScript, combining solid technical expertise with exceptional discipline to deliver high-quality solutions.',
    details: 'DISC Profile: Investigator — Focus on technical precision and scalable solutions.',
    stats: { exp: '6+ Years', projects: '20+ Delivered', eng: 'English C1' },
    statsLabels: { exp: 'Experience', projects: 'Handcrafted', eng: 'Proficiency' },
    portraitAlt: 'Ricardo Camilo Portrait',
  },
  services: {
    s1: {
      title: 'Vue.js & React Development',
      desc: 'Robust applications with Vue 3, Next.js, and Nuxt. Clean code, tested and ready for scale.',
    },
    s2: {
      title: 'Legacy System Modernization',
      desc: 'Expertise in migrating legacy systems to modern stacks like Vue 3 and TypeScript.',
    },
    s3: {
      title: 'Performance & SEO',
      desc: 'Extreme optimization ensuring instant loading and maximum organic visibility.',
    },
  },
  skills: { title: 'Tech', subtitle: 'Stack' },
  work: {
    title: 'Selected',
    subtitle: 'Works',
    viewAll: 'View Full GitHub',
    viewProject: 'View Project',
    viewFullSize: 'View full size',
    projectCategory: 'Category',
    comingSoon: 'Coming Soon',
  },
  career: {
    title: 'Professional',
    subtitle: 'History',
    present: 'Present',
    timeline: [
      {
        id: 1,
        period: 'Nov 2025 — Present',
        company: 'Consir Informática',
        role: 'Frontend Engineer',
        desc: 'Technical leadership in modernizing a legacy union management system to Vue.js 3 + TypeScript. Implementing store-based architecture with Pinia and PWA.',
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: 'Jul 2025 — Nov 2025',
        company: 'Consir Informática',
        role: 'Mid Frontend Engineer',
        desc: 'Scalable enterprise systems engineering focused on Vue.js, TypeScript and high-level maintenance.',
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: 'Jan 2025 — Jul 2025',
        company: 'Freelance Specialist',
        role: 'Frontend Consultant',
        desc: 'Technical leadership on high-impact projects (Itu Pneus, RvOne, Cajuscript) focused on conversion and performance.',
        tags: ['Next.js 15', 'SEO', 'Consultancy'],
      },
      {
        id: 4,
        period: 'Oct 2021 — Dec 2024',
        company: 'Labi9 Tecnologia',
        role: 'Frontend Developer',
        desc: '3+ years in fintech ecosystem. Complex interface development with React, Qwik and Nuxt.',
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: 'Tech Intern',
        desc: 'Foundations in Ruby on Rails and JasperReports for logistics.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: 'Recognition',
    subtitle: '& Certifications',
    proficiency: 'English Proficiency',
    certificate: 'EF SET Certificate',
    level: 'C1 Advanced',
  },
  cta: {
    title: 'Upgrade your',
    subtitle: 'Digital Product',
    desc: 'Ready to collaborate with brands seeking elegant engineering and world-class design.',
    button: 'Email Me',
    whatsapp: 'WhatsApp Me',
  },
  footer: {
    rights: 'All rights reserved.',
    links: 'Footer links',
    github: 'Visit GitHub profile',
    scrollTop: 'Scroll to top of page',
  },
}

export default translation
