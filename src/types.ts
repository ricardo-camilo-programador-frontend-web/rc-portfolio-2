export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: Array<string>
  link: string
  metrics?: string
  comingSoon?: boolean
  year?: string
}

export interface Skill {
  name: string
  level: number
  icon: string
  category: 'Frontend' | 'Backend' | 'Tools'
}

export interface Testimonial {
  author: string
  role: string
  content: string
  avatar: string
}

export interface Character {
  name: string
  archetype: string
  level: number
  hp: number
  maxHp: number
  xp: number
  stats: {
    strength: number
    intelligence: number
    charisma: number
    luck: number
  }
  inventory: Array<string>
}

export interface TimelineItem {
  id: number
  period: string
  company: string
  role: string
  desc: string
  tags: Array<string>
}

export interface Language {
  code: string
  name: string
  flag?: string
}

export interface Translation {
  lang: string
  direction: 'ltr' | 'rtl'
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    contact: string
  }
  hero: {
    role: string
    cta: string
  }
  projects: {
    title: string
    subtitle: string
    viewAll: string
    comingSoon: string
  }
  skills: {
    title: string
    subtitle: string
  }
  experience: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    email: string
    copyEmail: string
    emailCopied: string
  }
  footer: {
    built: string
    with: string
    in: string
  }
}

export interface NavItem {
  label: string
  href: string
  icon?: string
}
