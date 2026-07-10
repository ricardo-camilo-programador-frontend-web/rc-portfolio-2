import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Рикардо Камило | Фронтенд-инженер',
    desc: 'Фронтенд-инженер и специалист по Vue.js/TypeScript с более чем 6-летним опытом. Эксперт в Vue 3, React и Next.js.',
  },
  nav: {
    work: 'Портфолио',
    about: 'Обо мне',
    services: 'Услуги',
    career: 'Карьера',
    contact: 'Контакты',
    menu: 'Меню',
  },
  hero: {
    title: 'Фронтенд-инженер',
    subtitle: 'и специалист по Vue.js',
    desc: 'Более 6 лет опыта превращения бизнес-задач в цифровые решения с высоким воздействием. Эксперт в Vue.js, TypeScript и архитектурах экстремальной производительности.',
    cta: 'Связаться',
    badge: 'Доступен для фриланса',
  },
  about: {
    quote: 'Техническое совершенство — результат намерения и безупречного исполнения.',
    bio: 'Я Рикардо Камило, фронтенд-разработчик с более чем 6-летним опытом. Специализируюсь на Vue.js и TypeScript, сочетаю прочные технические знания с исключительной дисциплиной для доставки высококачественных решений.',
    details:
      'Профиль DISC: Исследователь — фокус на технической точности и масштабируемых решениях.',
    stats: { exp: '6+ лет', projects: '20+ выполнено', eng: 'Английский C1' },
  },
  services: {
    s1: {
      title: 'Разработка на Vue.js и React',
      desc: 'Надежные приложения на Vue 3, Next.js и Nuxt. Чистый код, протестирован и готов к масштабированию.',
    },
    s2: {
      title: 'Модернизация устаревших систем',
      desc: 'Экспертиза в миграции устаревших систем на современные стеки, такие как Vue 3 и TypeScript.',
    },
    s3: {
      title: 'Производительность и SEO',
      desc: 'Экстремальная оптимизация для мгновенной загрузки и максимальной органической видимости.',
    },
  },
  skills: { title: 'Технологии', subtitle: 'и инструменты' },
  work: {
    title: 'Избранные',
    subtitle: 'работы',
    viewAll: 'Посмотреть полный GitHub',
    viewProject: 'Посмотреть проект',
    viewFullSize: 'Полный размер',
    projectCategory: 'Категория проекта',
    comingSoon: 'Скоро',
  },
  career: {
    title: 'Профессиональная',
    subtitle: 'карьера',
    present: 'Сейчас',
    timeline: [
      {
        id: 1,
        period: 'Ноябрь 2025 — Настоящее время',
        company: 'Consir Informática',
        role: 'Frontend Engineer',
        desc: 'Техническое руководство по модернизации унаследованной системы управления профсоюзом на Vue.js 3 + TypeScript. Реализация архитектуры на основе store с Pinia и PWA.',
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: 'Июль 2025 — Ноябрь 2025',
        company: 'Consir Informática',
        role: 'Frontend Engineer Middle',
        desc: 'Масштабируемая инженерия корпоративных систем с фокусом на Vue.js, TypeScript и высокоуровневое обслуживание.',
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: 'Январь 2025 — Июль 2025',
        company: 'Freelance Specialist',
        role: 'Frontend консультант',
        desc: 'Техническое руководство в проектах с высоким влиянием (Itu Pneus, RvOne, Cajuscript) с фокусом на конверсию и производительность.',
        tags: ['Next.js 15', 'SEO', 'Консалтинг'],
      },
      {
        id: 4,
        period: 'Октябрь 2021 — Декабрь 2024',
        company: 'Labi9 Tecnologia',
        role: 'Frontend разработчик',
        desc: '3+ года в экосистеме финтеха. Разработка сложных интерфейсов с React, Qwik и Nuxt.',
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: 'Технический стажёр',
        desc: 'Основы Ruby on Rails и JasperReports для логистики.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: 'Признание',
    subtitle: 'и сертификаты',
    proficiency: 'Владение английским',
    certificate: 'Сертификат EF SET',
    level: 'C1 Продвинутый',
  },
  cta: {
    title: 'Улучшите ваш',
    subtitle: 'цифровой продукт',
    desc: 'Готов к сотрудничеству с брендами, ищущими элегантную инженерию и дизайн мирового класса.',
    button: 'Написать мне',
    whatsapp: 'WhatsApp',
  },
}

export default translation
