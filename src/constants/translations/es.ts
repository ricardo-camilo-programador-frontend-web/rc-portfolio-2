import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | Ingeniero Frontend',
    desc: 'Ingeniero Frontend y especialista en Vue.js/TypeScript con más de 6 años de experiencia. Experto en Vue 3, React y Next.js.',
  },
  errorBoundary: { title: 'Algo salio mal.', retry: 'Intentar de nuevo' },
  nav: {
    work: 'Portafolio',
    about: 'Sobre mí',
    services: 'Servicios',
    career: 'Trayectoria',
    contact: 'Contacto',
    menu: 'Menú',
  },
  hero: {
    title: 'Ingeniero Frontend',
    subtitle: 'y especialista en Vue.js',
    desc: 'Más de 6 años transformando desafíos empresariales en soluciones digitales de alto impacto. Experto en Vue.js, TypeScript y arquitecturas de alto rendimiento.',
    cta: 'Iniciar conversación',
    badge: 'Disponible para freelance',
  },
  about: {
    quote: 'La excelencia técnica es el resultado de la intención y la ejecución impecable.',
    bio: 'Soy Ricardo Camilo, desarrollador frontend con más de 6 años de experiencia. Especializado en Vue.js y TypeScript, combino experiencia técnica sólida con disciplina excepcional para entregas de alta calidad.',
    details: 'Perfil DISC: Investigador — Enfoque en precisión técnica y soluciones escalables.',
    stats: { exp: '6+ años', projects: '20+ entregados', eng: 'Inglés C1' },
    statsLabels: { exp: 'Experiencia', projects: 'Hecho a mano', eng: 'Dominio' },
    portraitAlt: 'Retrato de Ricardo Camilo',
  },
  services: {
    s1: {
      title: 'Desarrollo Vue.js y React',
      desc: 'Aplicaciones robustas con Vue 3, Next.js y Nuxt. Código limpio, probado y listo para escalar.',
    },
    s2: {
      title: 'Modernización de sistemas heredados',
      desc: 'Experiencia en migración de sistemas heredados a stacks modernos como Vue 3 y TypeScript.',
    },
    s3: {
      title: 'Rendimiento y SEO',
      desc: 'Optimización extrema para garantizar carga instantánea y máxima visibilidad orgánica.',
    },
  },
  skills: { title: 'Tecnologías', subtitle: '& Herramientas' },
  work: {
    title: 'Trabajos',
    subtitle: 'Seleccionados',
    viewAll: 'Ver GitHub completo',
    viewProject: 'Ver Proyecto',
    viewFullSize: 'Ver tamaño completo',
    projectCategory: 'Categoría del proyecto',
    comingSoon: 'Próximamente',
  },
  career: {
    title: 'Trayectoria',
    subtitle: 'Profesional',
    present: 'Actualmente',
    timeline: [
      {
        id: 1,
        period: 'Nov 2025 — Presente',
        company: 'Consir Informática',
        role: 'Ingeniero Frontend',
        desc: 'Liderazgo técnico en la modernización de un sistema legado de gestión sindical hacia Vue.js 3 + TypeScript. Implementación de arquitectura basada en store con Pinia y PWA.',
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: 'Jul 2025 — Nov 2025',
        company: 'Consir Informática',
        role: 'Ingeniero Frontend Mid',
        desc: 'Ingeniería de sistemas corporativos escalables enfocada en Vue.js, TypeScript y mantenimiento de alto nivel.',
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: 'Ene 2025 — Jul 2025',
        company: 'Freelance Specialist',
        role: 'Consultor Frontend',
        desc: 'Liderazgo técnico en proyectos de alto impacto (Itu Pneus, RvOne, Cajuscript) con enfoque en conversión y rendimiento.',
        tags: ['Next.js 15', 'SEO', 'Consultoría'],
      },
      {
        id: 4,
        period: 'Oct 2021 — Dic 2024',
        company: 'Labi9 Tecnologia',
        role: 'Desarrollador Frontend',
        desc: '3+ años en el ecosistema fintech. Desarrollo de interfaces complejas con React, Qwik y Nuxt.',
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: 'Pasante Técnico',
        desc: 'Fundamentos en Ruby on Rails y JasperReports para logística.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: 'Reconocimiento',
    subtitle: 'y certificaciones',
    proficiency: 'Competencia en inglés',
    certificate: 'Certificado EF SET',
    level: 'C1 Avanzado',
  },
  cta: {
    title: 'Mejora tu',
    subtitle: 'Producto digital',
    desc: 'Listo para colaborar con marcas que buscan ingeniería elegante y diseño de clase mundial.',
    button: 'Enviar correo',
    whatsapp: 'WhatsApp',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    links: 'Enlaces del pie de página',
    github: 'Visitar perfil de GitHub',
    scrollTop: 'Volver al inicio de la página',
  },
}

export default translation
