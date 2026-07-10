export interface TranslationContent {
  seo: { title: string; desc: string }
  errorBoundary: { title: string; retry: string }
  nav: {
    work: string
    about: string
    services: string
    career: string
    contact: string
    menu: string
  }
  a11y: {
    skipToContent: string
    selectLanguage: string
    languageSelection: string
  }
  hero: { title: string; subtitle: string; desc: string; cta: string; badge: string }
  about: {
    quote: string
    bio: string
    details: string
    stats: { exp: string; projects: string; eng: string }
    statsLabels: { exp: string; projects: string; eng: string }
    portraitAlt: string
  }
  services: {
    s1: { title: string; desc: string }
    s2: { title: string; desc: string }
    s3: { title: string; desc: string }
  }
  skills: { title: string; subtitle: string }
  work: {
    title: string
    subtitle: string
    viewAll: string
    viewProject: string
    viewFullSize: string
    projectCategory: string
    comingSoon: string
  }
  career: {
    title: string
    subtitle: string
    present: string
    timeline: Array<{
      id: number
      period: string
      company: string
      role: string
      desc: string
      tags: Array<string>
    }>
  }
  certs: {
    title: string
    subtitle: string
    proficiency: string
    certificate: string
    level: string
  }
  cta: { title: string; subtitle: string; desc: string; button: string; whatsapp: string }
  footer: { rights: string; links: string; github: string; scrollTop: string }
}

export interface NavCopy {
  work: string
  about: string
  services: string
  career: string
  contact: string
}
