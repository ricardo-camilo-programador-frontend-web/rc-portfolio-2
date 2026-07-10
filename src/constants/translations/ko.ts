import type { TranslationContent } from '../translation-types'

const translation: TranslationContent = {
  seo: {
    title: 'Ricardo Camilo | 프론트엔드 엔지니어',
    desc: '6 년 이상의 경력을 가진 프론트엔드 엔지니어 및 Vue.js/TypeScript 전문가. Vue 3, React 및 Next.js 전문가.',
  },
  errorBoundary: { title: '문제가 발생했습니다.', retry: '다시 시도' },
  nav: {
    work: '포트폴리오',
    about: '소개',
    services: '서비스',
    career: '경력',
    contact: '연락처',
    menu: '메뉴',
  },
  hero: {
    title: '프론트엔드 엔지니어',
    subtitle: '및 Vue.js 전문가',
    desc: '비즈니스 과제를 영향력 있는 디지털 솔루션으로 전환하는 6 년 이상의 경험. Vue.js, TypeScript 및 극한의 성능 아키텍처 전문가.',
    cta: '대화하기',
    badge: '프리랜스 가능',
  },
  about: {
    quote: '기술적 우수성은 의도와 완벽한 실행의 결과입니다.',
    bio: '6 년 이상의 경력을 가진 프론트엔드 개발자 Ricardo Camilo 입니다. Vue.js 와 TypeScript 를 전문으로 하며, 견고한 기술 전문성과 뛰어난 규율을 결합하여 고품질 솔루션을 제공합니다.',
    details: 'DISC 프로필: 조사관형 — 기술적 정밀성과 확장 가능한 솔루션에 중점.',
    stats: { exp: '6+ 년', projects: '20+ 완료', eng: '영어 C1' },
    statsLabels: { exp: '경험', projects: '수작업', eng: '숙련도' },
    portraitAlt: '리카르도 카밀로 초상',
  },
  services: {
    s1: {
      title: 'Vue.js 및 React 개발',
      desc: 'Vue 3, Next.js 및 Nuxt 를 사용한 강력한 애플리케이션. 깔끔한 코드, 테스트 완료 및 확장 준비됨.',
    },
    s2: {
      title: '레거시 시스템 현대화',
      desc: 'Vue 3 및 TypeScript 와 같은 최신 스택으로 레거시 시스템 마이그레이션 전문.',
    },
    s3: {
      title: '성능 및 SEO',
      desc: '즉시 로딩 및 최대 유기적 가시성을 보장하는 극한의 최적화.',
    },
  },
  skills: { title: '기술', subtitle: '스택' },
  work: {
    title: '선택된',
    subtitle: '작업',
    viewAll: '전체 GitHub 보기',
    viewProject: '프로젝트 보기',
    viewFullSize: '전체 크기 보기',
    projectCategory: '프로젝트 카테고리',
    comingSoon: '곧 출시',
  },
  career: {
    title: '전문',
    subtitle: '이력',
    present: '현재',
    timeline: [
      {
        id: 1,
        period: '2025년 11월 — 현재',
        company: 'Consir Informática',
        role: '프론트엔드 엔지니어',
        desc: '레거시 노동조합 관리 시스템의 Vue.js 3 + TypeScript로의 현대화에서 기술 리더십. Pinia 및 PWA를 사용한 스토어 기반 아키텍처 구현.',
        tags: ['Vue 3', 'TypeScript', 'Pinia', 'PWA'],
      },
      {
        id: 2,
        period: '2025년 7월 — 2025년 11월',
        company: 'Consir Informática',
        role: '미드 프론트엔드 엔지니어',
        desc: 'Vue.js, TypeScript 및 고수준 유지보수에 중점을 둔 확장 가능한 엔터프라이즈 시스템 엔지니어링.',
        tags: ['Vue.js', 'TypeScript', 'Enterprise'],
      },
      {
        id: 3,
        period: '2025년 1월 — 2025년 7월',
        company: 'Freelance Specialist',
        role: '프론트엔드 컨설턴트',
        desc: '전환 및 성능에 중점을 둔 고영향력 프로젝트(Itu Pneus, RvOne, Cajuscript)에서의 기술 리더십.',
        tags: ['Next.js 15', 'SEO', '컨설팅'],
      },
      {
        id: 4,
        period: '2021년 10월 — 2024년 12월',
        company: 'Labi9 Tecnologia',
        role: '프론트엔드 개발자',
        desc: '핀테크 생태계에서 3년 이상. React, Qwik, Nuxt로 복잡한 인터페이스 개발.',
        tags: ['React', 'Nuxt', 'Fintech'],
      },
      {
        id: 5,
        period: '2019',
        company: 'SIALOG Software',
        role: '기술 인턴',
        desc: '물류를 위한 Ruby on Rails 및 JasperReports 기초.',
        tags: ['Ruby on Rails', 'Git'],
      },
    ],
  },
  certs: {
    title: '인정',
    subtitle: '및 자격증',
    proficiency: '영어 능력',
    certificate: 'EF SET 인증서',
    level: 'C1 고급',
  },
  cta: {
    title: '디지털 제품을',
    subtitle: '업그레이드',
    desc: '우아한 엔지니어링과 세계적 수준의 디자인을 찾는 브랜드와 협력할 준비가 되었습니다.',
    button: '이메일 보내기',
    whatsapp: 'WhatsApp',
  },
  footer: {
    rights: '모든 권리 보유.',
    links: '푸터 링크',
    github: 'GitHub 프로필 방문',
    scrollTop: '페이지 맨 위로 이동',
  },
}

export default translation
