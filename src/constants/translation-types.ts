export interface TranslationContent {
  seo: { title: string; desc: string }
  nav: { work: string; about: string; services: string; career: string; contact: string }
  hero: { title: string; subtitle: string; desc: string; cta: string; badge: string }
  about: {
    quote: string
    bio: string
    details: string
    stats: { exp: string; projects: string; eng: string }
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
    comingSoon: string
  }
  career: { title: string; subtitle: string; present: string }
  certs: {
    title: string
    subtitle: string
    proficiency: string
    certificate: string
    level: string
  }
  cta: { title: string; subtitle: string; desc: string; button: string; whatsapp: string }
}
