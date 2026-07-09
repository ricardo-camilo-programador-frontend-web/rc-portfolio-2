import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | 前端工程师',
    desc: '拥有 6 年以上经验的前端工程师和 Vue.js/TypeScript 专家。精通 Vue 3、React 和 Next.js。',
  },
  nav: {
    work: '作品集',
    about: '关于',
    services: '服务',
    career: '经历',
    contact: '联系',
    menu: '菜单',
  },
  hero: {
    title: '前端工程师',
    subtitle: '和 Vue.js 专家',
    desc: '6 年以上将业务挑战转化为高影响力数字解决方案的经验。精通 Vue.js、TypeScript 和极致性能架构。',
    cta: '联系我们',
    badge: '可接自由职业项目',
  },
  about: {
    quote: '技术卓越源于用心和完美的执行。',
    bio: '我是 Ricardo Camilo，拥有 6 年以上经验的前端开发人员。我专注于 Vue.js 和 TypeScript，将扎实的技术专长与非凡的纪律性相结合，提供高质量的解决方案。',
    details: 'DISC _profile：研究者——专注于技术精确性和可扩展解决方案。',
    stats: { exp: '6+ 年', projects: '20+ 已交付', eng: '英语 C1' },
  },
  services: {
    s1: {
      title: 'Vue.js 和 React 开发',
      desc: '使用 Vue 3、Next.js 和 Nuxt 构建强大的应用程序。代码干净、经过测试、随时可扩展。',
    },
    s2: {
      title: '遗留系统现代化',
      desc: '擅长将遗留系统迁移到 Vue 3 和 TypeScript 等现代技术栈。',
    },
    s3: { title: '性能和 SEO', desc: '极致优化，确保即时加载和最大有机可见度。' },
  },
  skills: { title: '技术', subtitle: '栈' },
  work: {
    title: '精选',
    subtitle: '作品',
    viewAll: '查看完整 GitHub',
    viewProject: '查看项目',
    viewFullSize: '查看全尺寸',
    projectCategory: '项目类别',
    comingSoon: '即将推出',
    viewFullSize: '查看全尺寸',
    projectCategory: '项目分类',
  },
  career: {
    title: '职业',
    subtitle: '经历',
    present: '至今',
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
        desc: '3+ years in fintech ecosystem. Complex interfaces with React, Qwik and Nuxt.',
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
    title: '认可',
    subtitle: '和认证',
    proficiency: '英语水平',
    certificate: 'EF SET 证书',
    level: 'C1 高级',
  },
  cta: {
    title: '升级您的',
    subtitle: '数字产品',
    desc: '准备与寻求优雅工程和世界一流设计的品牌合作。',
    button: '给我发电子邮件',
    whatsapp: 'WhatsApp 联系我们',
  },
}

export default translation
