import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | フロントエンドエンジニア',
    desc: '6 年以上の経験を持つフロントエンドエンジニアおよび Vue.js/TypeScript スペシャリスト。Vue 3、React、Next.js のエキスパート。',
  },
  nav: {
    work: 'ポートフォリオ',
    about: '概要',
    services: 'サービス',
    career: '経歴',
    contact: '連絡先',
    menu: 'メニュー',
  },
  hero: {
    title: 'フロントエンドエンジニア',
    subtitle: 'および Vue.js スペシャリスト',
    desc: 'ビジネスの課題を影響力の大きいデジタルソリューションに変換する 6 年以上の経験。Vue.js、TypeScript、極限のパフォーマンスアーキテクチャのエキスパート。',
    cta: '相談する',
    badge: 'フリーランス案件対応可能',
  },
  about: {
    quote: '技術的卓越性は、意図と完璧な実行の結果である。',
    bio: 'Ricardo Camilo と申します。6 年以上の経験を持つフロントエンドデベロッパーです。Vue.js と TypeScript を専門とし、確かな技術的専門知識と並外れた規律を組み合わせて、高品質なソリューションを提供します。',
    details: 'DISC プロファイル：調査官タイプ—技術的な精度とスケーラブルなソリューションに注力。',
    stats: { exp: '6 年以上', projects: '20+ 納品済み', eng: '英語 C1' },
  },
  services: {
    s1: {
      title: 'Vue.js および React 開発',
      desc: 'Vue 3、Next.js、Nuxt を使用した堅牢なアプリケーション。クリーンでテスト済みのコード、スケール対応可能。',
    },
    s2: {
      title: 'レガシーシステムの近代化',
      desc: 'レガシーシステムを Vue 3 や TypeScript などのモダンなスタックに移行する専門知識。',
    },
    s3: {
      title: 'パフォーマンスと SEO',
      desc: '即時読み込みと最大のオーガニック可視性を確保する極限の最適化。',
    },
  },
  skills: { title: 'テクノロジー', subtitle: '& ツール' },
  work: {
    title: '厳選された',
    subtitle: '作品',
    viewAll: '完全な GitHub を表示',
    viewProject: 'プロジェクトを見る',
    viewFullSize: 'フルサイズ表示',
    projectCategory: 'プロジェクトカテゴリ',
    comingSoon: '近日公開',
    viewFullSize: 'フルサイズ表示',
    projectCategory: 'プロジェクトカテゴリ',
  },
  career: {
    title: '職歴',
    subtitle: '経歴',
    present: '現在',
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
    title: '表彰',
    subtitle: 'および認定資格',
    proficiency: '英語力',
    certificate: 'EF SET 認定証',
    level: 'C1 上級',
  },
  cta: {
    title: 'デジタルプロダクトを',
    subtitle: 'アップグレード',
    desc: 'エレガントなエンジニアリングとワールドクラスのデザインを求めるブランドとの協力準備ができています。',
    button: 'メールを送信',
    whatsapp: 'WhatsApp で連絡',
  },
}

export default translation
