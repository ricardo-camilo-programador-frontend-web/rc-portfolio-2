import type { LanguageCode } from '../constants/languages'

export interface Translation {
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
  work: { title: string; subtitle: string; viewAll: string; comingSoon: string }
  career: { title: string; subtitle: string; present: string }
  certs: { title: string; subtitle: string }
  cta: { title: string; subtitle: string; desc: string; button: string; whatsapp: string }
}

export const TRANSLATIONS: Record<LanguageCode, Translation> = {
  en: {
    seo: {
      title: 'Ricardo Camilo | Frontend Engineer',
      desc: 'Frontend Engineer & Vue.js/TypeScript Specialist with 6+ years of experience. Expert in Vue 3, React, and Next.js.',
    },
    nav: {
      work: 'Portfolio',
      about: 'About',
      services: 'Services',
      career: 'Career',
      contact: 'Contact',
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
    work: {
      title: 'Selected',
      subtitle: 'Works',
      viewAll: 'View Full GitHub',
      comingSoon: 'Coming Soon',
    },
    career: { title: 'Professional', subtitle: 'History', present: 'Present' },
    certs: { title: 'Recognition', subtitle: '& Certifications' },
    cta: {
      title: 'Upgrade your',
      subtitle: 'Digital Product',
      desc: 'Ready to collaborate with brands seeking elegant engineering and world-class design.',
      button: 'Email Me',
      whatsapp: 'WhatsApp Me',
    },
  },
  pt: {
    seo: {
      title: 'Ricardo Camilo | Desenvolvedor Frontend Pleno',
      desc: 'Desenvolvedor Frontend Pleno & Especialista Vue.js/TypeScript com 6+ anos de experiência. Expert em Vue 3, React e Next.js.',
    },
    nav: {
      work: 'Portfolio',
      about: 'Sobre',
      services: 'Serviços',
      career: 'Carreira',
      contact: 'Contato',
    },
    hero: {
      title: 'Desenvolvedor Frontend Pleno',
      subtitle: '& Especialista Vue.js',
      desc: '6+ anos transformando desafios de negócios em soluções digitais de alto impacto. Especialista em Vue.js, TypeScript e arquiteturas de performance extrema.',
      cta: 'Iniciar Conversa',
      badge: 'Disponível para Freelance',
    },
    about: {
      quote: 'Excelência técnica é o resultado de intenção e execução impecável.',
      bio: 'Sou Ricardo Camilo, Desenvolvedor Front-end Pleno com 6+ anos de experiência. Especialista em Vue.js e TypeScript, combino expertise técnica sólida com disciplina excepcional para entregas de qualidade.',
      details: 'Perfil DISC: Investigador — Foco em precisão técnica e soluções escaláveis.',
      stats: { exp: '6+ Anos', projects: '20+ Entregues', eng: 'Inglês C1' },
    },
    services: {
      s1: {
        title: 'Desenvolvimento Vue.js & React',
        desc: 'Aplicações robustas com Vue 3, Next.js e Nuxt. Código limpo, testado e pronto para escala.',
      },
      s2: {
        title: 'Modernização de Sistemas Legados',
        desc: 'Expertise em migrar sistemas legados para stacks modernos como Vue 3 e TypeScript.',
      },
      s3: {
        title: 'Performance & SEO',
        desc: 'Otimização extrema para garantir carregamento instantâneo e visibilidade orgânica máxima.',
      },
    },
    work: {
      title: 'Trabalhos',
      subtitle: 'Selecionados',
      viewAll: 'Ver GitHub Completo',
      comingSoon: 'Em Breve',
    },
    career: { title: 'Histórico', subtitle: 'Profissional', present: 'Atualmente' },
    certs: { title: 'Reconhecimento', subtitle: '& Certificações' },
    cta: {
      title: 'Eleve o nível do seu',
      subtitle: 'Produto Digital',
      desc: 'Pronto para colaborar com marcas que buscam engenharia elegante e design de classe mundial.',
      button: 'Enviar E-mail',
      whatsapp: 'Conversar no WhatsApp',
    },
  },
  es: {
    seo: {
      title: 'Ricardo Camilo | Ingeniero Frontend',
      desc: 'Ingeniero Frontend y especialista en Vue.js/TypeScript con más de 6 años de experiencia. Experto en Vue 3, React y Next.js.',
    },
    nav: {
      work: 'Portafolio',
      about: 'Sobre mí',
      services: 'Servicios',
      career: 'Trayectoria',
      contact: 'Contacto',
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
    work: {
      title: 'Trabajos',
      subtitle: 'Seleccionados',
      viewAll: 'Ver GitHub completo',
      comingSoon: 'Próximamente',
    },
    career: { title: 'Trayectoria', subtitle: 'Profesional', present: 'Actualmente' },
    certs: { title: 'Reconocimiento', subtitle: 'y certificaciones' },
    cta: {
      title: 'Mejora tu',
      subtitle: 'Producto digital',
      desc: 'Listo para colaborar con marcas que buscan ingeniería elegante y diseño de clase mundial.',
      button: 'Enviar correo',
      whatsapp: 'WhatsApp',
    },
  },
  zh: {
    seo: {
      title: 'Ricardo Camilo | 前端工程师',
      desc: '拥有 6 年以上经验的前端工程师和 Vue.js/TypeScript 专家。精通 Vue 3、React 和 Next.js。',
    },
    nav: { work: '作品集', about: '关于', services: '服务', career: '经历', contact: '联系' },
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
    work: { title: '精选', subtitle: '作品', viewAll: '查看完整 GitHub', comingSoon: '即将推出' },
    career: { title: '职业', subtitle: '经历', present: '至今' },
    certs: { title: '认可', subtitle: '和认证' },
    cta: {
      title: '升级您的',
      subtitle: '数字产品',
      desc: '准备与寻求优雅工程和世界一流设计的品牌合作。',
      button: '给我发电子邮件',
      whatsapp: 'WhatsApp 联系我们',
    },
  },
  fr: {
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
    work: {
      title: 'Travaux',
      subtitle: 'Sélectionnés',
      viewAll: 'Voir GitHub complet',
      comingSoon: 'Bientôt',
    },
    career: { title: 'Parcours', subtitle: 'Professionnel', present: 'Actuellement' },
    certs: { title: 'Reconnaissance', subtitle: 'et certifications' },
    cta: {
      title: 'Améliorez votre',
      subtitle: 'Produit digital',
      desc: 'Prêt à collaborer avec des marques recherchant une ingénierie élégante et un design de classe mondiale.',
      button: "M'envoyer un email",
      whatsapp: 'WhatsApp',
    },
  },
  de: {
    seo: {
      title: 'Ricardo Camilo | Frontend-Ingenieur',
      desc: 'Frontend-Ingenieur und Vue.js/TypeScript-Spezialist mit über 6 Jahren Erfahrung. Experte für Vue 3, React und Next.js.',
    },
    nav: {
      work: 'Portfolio',
      about: 'Über',
      services: 'Dienstleistungen',
      career: 'Karriere',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Frontend-Ingenieur',
      subtitle: 'und Vue.js-Spezialist',
      desc: 'Über 6 Jahre Erfahrung darin, geschäftliche Herausforderungen in digitale Lösungen mit hoher Wirkung zu verwandeln. Experte für Vue.js, TypeScript und extreme Performance-Architekturen.',
      cta: 'Gespräch führen',
      badge: 'Verfügbar für Freelance',
    },
    about: {
      quote: 'Technische Exzellenz ist das Ergebnis von Absicht und makelloser Ausführung.',
      bio: 'Ich bin Ricardo Camilo, Frontend-Entwickler mit über 6 Jahren Erfahrung. Ich spezialisiere mich auf Vue.js und TypeScript und kombiniere fundierte technische Expertise mit außergewöhnlicher Disziplin für hochwertige Lösungen.',
      details:
        'DISC-Profil: Investigator — Fokus auf technische Präzision und skalierbare Lösungen.',
      stats: { exp: '6+ Jahre', projects: '20+ geliefert', eng: 'Englisch C1' },
    },
    services: {
      s1: {
        title: 'Vue.js & React Entwicklung',
        desc: 'Robuste Anwendungen mit Vue 3, Next.js und Nuxt. Sauberer Code, getestet und bereit für Skalierung.',
      },
      s2: {
        title: 'Modernisierung von Legacy-Systemen',
        desc: 'Expertise in der Migration von Legacy-Systemen auf moderne Stacks wie Vue 3 und TypeScript.',
      },
      s3: {
        title: 'Performance & SEO',
        desc: 'Extreme Optimierung für sofortiges Laden und maximale organische Sichtbarkeit.',
      },
    },
    work: {
      title: 'Ausgewählte',
      subtitle: 'Arbeiten',
      viewAll: 'Vollständiges GitHub anzeigen',
      comingSoon: 'Demnächst',
    },
    career: { title: 'Beruflicher', subtitle: 'Werdegang', present: 'Aktuell' },
    certs: { title: 'Anerkennung', subtitle: 'und Zertifizierungen' },
    cta: {
      title: 'Verbessern Sie Ihr',
      subtitle: 'digitales Produkt',
      desc: 'Bereit zur Zusammenarbeit mit Marken, die elegante Technik und Weltklasse-Design suchen.',
      button: 'E-Mail senden',
      whatsapp: 'WhatsApp',
    },
  },
  ja: {
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
    work: {
      title: '厳選された',
      subtitle: '作品',
      viewAll: '完全な GitHub を表示',
      comingSoon: '近日公開',
    },
    career: { title: '職歴', subtitle: '経歴', present: '現在' },
    certs: { title: '表彰', subtitle: 'および認定資格' },
    cta: {
      title: 'デジタルプロダクトを',
      subtitle: 'アップグレード',
      desc: 'エレガントなエンジニアリングとワールドクラスのデザインを求めるブランドとの協力準備ができています。',
      button: 'メールを送信',
      whatsapp: 'WhatsApp で連絡',
    },
  },
  ar: {
    seo: {
      title: 'ريكاردو كاميلو | مهندس واجهة أمامية',
      desc: 'مهندس واجهة أمامية ومتخصص في Vue.js/TypeScript مع أكثر من 6 سنوات من الخبرة. خبير في Vue 3 و React و Next.js.',
    },
    nav: {
      work: 'معرض الأعمال',
      about: 'حول',
      services: 'الخدمات',
      career: 'المسار المهني',
      contact: 'اتصل بي',
    },
    hero: {
      title: 'مهندس واجهة أمامية',
      subtitle: 'ومتخصص في Vue.js',
      desc: 'أكثر من 6 سنوات من الخبرة في تحويل تحديات الأعمال إلى حلول رقمية عالية التأثير. خبير في Vue.js و TypeScript وهندسة الأداء العالي.',
      cta: 'لنتحدث',
      badge: 'متاح للعمل الحر',
    },
    about: {
      quote: 'التميز التقني هو نتيجة النية والتنفيذ impeccable.',
      bio: 'أنا ريكاردو كاميلو، مطور واجهة أمامية مع أكثر من 6 سنوات من الخبرة. متخصص في Vue.js و TypeScript، أجمع بين الخبرة التقنية الصلبة والانضباط الاستثنائي لتقديم حلول عالية الجودة.',
      details: 'ملف DISC: الباحث — التركيز على الدقة التقنية والحلول القابلة للتوسع.',
      stats: { exp: '6+ سنوات', projects: '20+ مشروع مُسلم', eng: 'إنجليزي C1' },
    },
    services: {
      s1: {
        title: 'تطوير Vue.js و React',
        desc: 'تطبيقات قوية مع Vue 3 و Next.js و Nuxt. كود نظيف ومختبر وجاهز للتوسع.',
      },
      s2: {
        title: 'تحديث الأنظمة القديمة',
        desc: 'خبرة في نقل الأنظمة القديمة إلى تقنيات حديثة مثل Vue 3 و TypeScript.',
      },
      s3: {
        title: 'الأداء وتحسين محركات البحث',
        desc: 'تحسين شديد لضمان التحميل الفوري والحد الأقصى من الرؤية العضوية.',
      },
    },
    work: { title: 'أعمال', subtitle: 'مختارة', viewAll: 'عرض GitHub كامل', comingSoon: 'قريباً' },
    career: { title: 'المسار', subtitle: 'المهني', present: 'حالياً' },
    certs: { title: 'التقدير', subtitle: 'والشهادات' },
    cta: {
      title: 'طوّر',
      subtitle: 'منتجك الرقمي',
      desc: 'مستعد للتعاون مع العلامات التجارية التي تبحث عن هندسة أنيقة وتصميم عالمي المستوى.',
      button: 'أرسل لي بريدًا إلكترونيًا',
      whatsapp: 'واتساب',
    },
  },
  ru: {
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
    work: {
      title: 'Избранные',
      subtitle: 'работы',
      viewAll: 'Посмотреть полный GitHub',
      comingSoon: 'Скоро',
    },
    career: { title: 'Профессиональная', subtitle: 'карьера', present: 'Сейчас' },
    certs: { title: 'Признание', subtitle: 'и сертификаты' },
    cta: {
      title: 'Улучшите ваш',
      subtitle: 'цифровой продукт',
      desc: 'Готов к сотрудничеству с брендами, ищущими элегантную инженерию и дизайн мирового класса.',
      button: 'Написать мне',
      whatsapp: 'WhatsApp',
    },
  },
  it: {
    seo: {
      title: 'Ricardo Camilo | Ingegnere Frontend',
      desc: 'Ingegnere Frontend e specialista Vue.js/TypeScript con oltre 6 anni di esperienza. Esperto in Vue 3, React e Next.js.',
    },
    nav: {
      work: 'Portfolio',
      about: 'Chi sono',
      services: 'Servizi',
      career: 'Carriera',
      contact: 'Contatti',
    },
    hero: {
      title: 'Ingegnere Frontend',
      subtitle: 'e specialista Vue.js',
      desc: 'Oltre 6 anni di esperienza nel trasformare le sfide aziendali in soluzioni digitali ad alto impatto. Esperto in Vue.js, TypeScript e architetture a prestazioni estreme.',
      cta: 'Parliamo',
      badge: 'Disponibile per freelance',
    },
    about: {
      quote: "L'eccellenza tecnica è il risultato di intenzione ed esecuzione impeccabile.",
      bio: 'Sono Ricardo Camilo, sviluppatore Frontend con oltre 6 anni di esperienza. Specializzato in Vue.js e TypeScript, combino solida competenza tecnica con disciplina eccezionale per fornire soluzioni di alta qualità.',
      details: 'Profilo DISC: Investigatore — Focus su precisione tecnica e soluzioni scalabili.',
      stats: { exp: '6+ anni', projects: '20+ consegnati', eng: 'Inglese C1' },
    },
    services: {
      s1: {
        title: 'Sviluppo Vue.js e React',
        desc: 'Applicazioni robuste con Vue 3, Next.js e Nuxt. Codice pulito, testato e pronto per scalare.',
      },
      s2: {
        title: 'Modernizzazione sistemi legacy',
        desc: 'Competenza nella migrazione di sistemi legacy a stack moderni come Vue 3 e TypeScript.',
      },
      s3: {
        title: 'Prestazioni e SEO',
        desc: 'Ottimizzazione estrema per caricamento istantaneo e massima visibilità organica.',
      },
    },
    work: {
      title: 'Lavori',
      subtitle: 'Selezionati',
      viewAll: 'Vedi GitHub completo',
      comingSoon: 'Prossimamente',
    },
    career: { title: 'Carriera', subtitle: 'Professionale', present: 'Attualmente' },
    certs: { title: 'Riconoscimenti', subtitle: 'e certificazioni' },
    cta: {
      title: 'Migliora il tuo',
      subtitle: 'Prodotto digitale',
      desc: 'Pronto a collaborare con brand che cercano ingegneria elegante e design di livello mondiale.',
      button: 'Inviami email',
      whatsapp: 'WhatsApp',
    },
  },
  hi: {
    seo: {
      title: 'रिकार्डो कामिलो | फ्रंटएंड इंजीनियर',
      desc: '6+ वर्षों के अनुभव के साथ फ्रंटएंड इंजीनियर और Vue.js/TypeScript विशेषज्ञ। Vue 3, React और Next.js में विशेषज्ञ।',
    },
    nav: {
      work: 'पोर्टफोलियो',
      about: 'के बारे में',
      services: 'सेवाएं',
      career: 'कैरियर',
      contact: 'संपर्क',
    },
    hero: {
      title: 'फ्रंटएंड इंजीनियर',
      subtitle: 'और Vue.js विशेषज्ञ',
      desc: 'व्यापार चुनौतियों को उच्च-प्रभाव डिजिटल समाधानों में बदलने का 6+ वर्षों का अनुभव। Vue.js, TypeScript और चरम प्रदर्शन वास्तुकला में विशेषज्ञ।',
      cta: 'बात करें',
      badge: 'फ्रीलांस के लिए उपलब्ध',
    },
    about: {
      quote: 'तकनीकी उत्कृष्टता इरादे और दोषरहित निष्पादन का परिणाम है।',
      bio: 'मैं रिकार्डो कामिलो हूं, 6+ वर्षों के अनुभव के साथ फ्रंटएंड डेवलपर। मैं Vue.js और TypeScript में विशेषज्ञ हूं, उच्च-गुणवत्ता वाले समाधान प्रदान करने के लिए ठोस तकनीकी विशेषज्ञता और असाधारण अनुशासन को जोड़ता हूं।',
      details: 'DISC प्रोफ़ाइल: जांचकर्ता — तकनीकी सटीकता और स्केलेबल समाधानों पर ध्यान।',
      stats: { exp: '6+ वर्ष', projects: '20+ वितरित', eng: 'अंग्रेजी C1' },
    },
    services: {
      s1: {
        title: 'Vue.js और React विकास',
        desc: 'Vue 3, Next.js और Nuxt के साथ मजबूत एप्लिकेशन। साफ कोड, परीक्षण और स्केल के लिए तैयार।',
      },
      s2: {
        title: 'लीगेसी सिस्टम आधुनिकीकरण',
        desc: 'लीगेसी सिस्टम को Vue 3 और TypeScript जैसे आधुनिक स्टैक में माइग्रेट करने में विशेषज्ञता।',
      },
      s3: {
        title: 'प्रदर्शन और SEO',
        desc: 'तत्काल लोडिंग और अधिकतम जैविक दृश्यता सुनिश्चित करने के लिए चरम अनुकूलन।',
      },
    },
    work: { title: 'चयनित', subtitle: 'कार्य', viewAll: 'पूर्ण GitHub देखें', comingSoon: 'जल्द आ रहा है' },
    career: { title: 'व्यावसायिक', subtitle: 'इतिहास', present: 'वर्तमान' },
    certs: { title: 'मान्यता', subtitle: 'और प्रमाणपत्र' },
    cta: {
      title: 'अपने',
      subtitle: 'डिजिटल उत्पाद को अपग्रेड करें',
      desc: 'ऐसे ब्रांड्स के साथ सहयोग करने के लिए तैयार जो सुरुचिपूर्ण इंजीनियरिंग और विश्व-स्तरीय डिजाइन की तलाश कर रहे हैं।',
      button: 'मुझे ईमेल करें',
      whatsapp: 'WhatsApp',
    },
  },
  bn: {
    seo: {
      title: 'রিকার্ডো কামিলো | ফ্রন্টএন্ড ইঞ্জিনিয়ার',
      desc: '৬+ বছরের অভিজ্ঞতার সাথে ফ্রন্টএন্ড ইঞ্জিনিয়ার এবং Vue.js/TypeScript বিশেষজ্ঞ। Vue 3, React এবং Next.js-এ বিশেষজ্ঞ।',
    },
    nav: {
      work: 'পোর্টফোলিও',
      about: 'সম্পর্কে',
      services: 'সেবাসমূহ',
      career: 'ক্যারিয়ার',
      contact: 'যোগাযোগ',
    },
    hero: {
      title: 'ফ্রন্টএন্ড ইঞ্জিনিয়ার',
      subtitle: 'এবং Vue.js বিশেষজ্ঞ',
      desc: 'ব্যবসায়িক চ্যালেঞ্জগুলিকে উচ্চ-প্রভাব ডিজিটাল সমাধানে রূপান্তর করার ৬+ বছরের অভিজ্ঞতা। Vue.js, TypeScript এবং চরম পারফরম্যান্স আর্কিটেকচারে বিশেষজ্ঞ।',
      cta: 'কথা বলা',
      badge: 'ফ্রিল্যান্সের জন্য উপলব্ধ',
    },
    about: {
      quote: 'প্রযুক্তিগত উৎকর্ষতা হলো ইচ্ছা এবং নিখুঁত বাস্তবায়নের ফলাফল।',
      bio: 'আমি রিকার্ডো কামিলো, ৬+ বছরের অভিজ্ঞতার সাথে ফ্রন্টএন্ড ডেভেলপার। আমি Vue.js এবং TypeScript-এ বিশেষজ্ঞ, উচ্চ-গুণমানের সমাধান প্রদানের জন্য কঠোর প্রযুক্তিগত দক্ষতা এবং অসাধারণ শৃঙ্খলা একত্রিত করি।',
      details: 'DISC প্রোফাইল: অনুসন্ধানকারী — প্রযুক্তিগত নির্ভুলতা এবং স্কেলেবল সমাধানে ফোকাস।',
      stats: { exp: '৬+ বছর', projects: '২০+ ডেলিভারি', eng: 'ইংরেজি C1' },
    },
    services: {
      s1: {
        title: 'Vue.js এবং React ডেভেলপমেন্ট',
        desc: 'Vue 3, Next.js এবং Nuxt দিয়ে শক্তিশালী অ্যাপ্লিকেশন। পরিষ্কার কোড, পরীক্ষিত এবং স্কেলের জন্য প্রস্তুত।',
      },
      s2: {
        title: 'লেগ্যাসি সিস্টেম আধুনিকীকরণ',
        desc: 'Vue 3 এবং TypeScript-এর মতো আধুনিক স্ট্যাকে লেগ্যাসি সিস্টেম মাইগ্রেট করার বিশেষজ্ঞতা।',
      },
      s3: {
        title: 'পারফরম্যান্স এবং SEO',
        desc: 'তাৎক্ষণিক লোডিং এবং সর্বোচ্চ অর্গানিক দৃশ্যমানতা নিশ্চিত করার জন্য চরম অপ্টিমাইজেশন।',
      },
    },
    work: {
      title: 'নির্বাচিত',
      subtitle: 'কাজ',
      viewAll: 'সম্পূর্ণ GitHub দেখুন',
      comingSoon: 'শীঘ্রই আসছে',
    },
    career: { title: 'পেশাদার', subtitle: 'ইতিহাস', present: 'বর্তমান' },
    certs: { title: 'স্বীকৃতি', subtitle: 'এবং সার্টিফিকেশন' },
    cta: {
      title: 'আপনার',
      subtitle: 'ডিজিটাল পণ্য আপগ্রেড করুন',
      desc: 'এমন ব্র্যান্ডগুলোর সাথে সহযোগিতা করতে প্রস্তুত যারা মার্জিত ইঞ্জিনিয়ারিং এবং বিশ্ব-মানের ডিজাইন খুঁজছে।',
      button: 'আমাকে ইমেইল করুন',
      whatsapp: 'WhatsApp',
    },
  },
  ko: {
    seo: {
      title: 'Ricardo Camilo | 프론트엔드 엔지니어',
      desc: '6 년 이상의 경력을 가진 프론트엔드 엔지니어 및 Vue.js/TypeScript 전문가. Vue 3, React 및 Next.js 전문가.',
    },
    nav: {
      work: '포트폴리오',
      about: '소개',
      services: '서비스',
      career: '경력',
      contact: '연락처',
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
    work: { title: '선택된', subtitle: '작업', viewAll: '전체 GitHub 보기', comingSoon: '곧 출시' },
    career: { title: '전문', subtitle: '이력', present: '현재' },
    certs: { title: '인정', subtitle: '및 자격증' },
    cta: {
      title: '디지털 제품을',
      subtitle: '업그레이드',
      desc: '우아한 엔지니어링과 세계적 수준의 디자인을 찾는 브랜드와 협력할 준비가 되었습니다.',
      button: '이메일 보내기',
      whatsapp: 'WhatsApp',
    },
  },
  id: {
    seo: {
      title: 'Ricardo Camilo | Insinyur Frontend',
      desc: 'Insinyur Frontend & Spesialis Vue.js/TypeScript dengan pengalaman 6+ tahun. Ahli dalam Vue 3, React, dan Next.js.',
    },
    nav: {
      work: 'Portofolio',
      about: 'Tentang',
      services: 'Layanan',
      career: 'Karier',
      contact: 'Kontak',
    },
    hero: {
      title: 'Insinyur Frontend',
      subtitle: '& Spesialis Vue.js',
      desc: '6+ tahun pengalaman mengubah tantangan bisnis menjadi solusi digital berdampak tinggi. Ahli dalam Vue.js, TypeScript, dan arsitektur performa ekstrem.',
      cta: 'Mari Bicara',
      badge: 'Tersedia untuk Freelance',
    },
    about: {
      quote: 'Keunggulan teknis adalah hasil dari niat dan eksekusi yang sempurna.',
      bio: 'Saya Ricardo Camilo, Pengembang Frontend dengan pengalaman 6+ tahun. Saya mengkhususkan diri dalam Vue.js dan TypeScript, menggabungkan keahlian teknis yang solid dengan disiplin luar biasa untuk memberikan solusi berkualitas tinggi.',
      details:
        'Profil DISC: Investigator — Fokus pada presisi teknis dan solusi yang dapat diskalakan.',
      stats: { exp: '6+ Tahun', projects: '20+ Dikirimkan', eng: 'Bahasa Inggris C1' },
    },
    services: {
      s1: {
        title: 'Pengembangan Vue.js & React',
        desc: 'Aplikasi yang kuat dengan Vue 3, Next.js, dan Nuxt. Kode bersih, teruji, dan siap untuk skala.',
      },
      s2: {
        title: 'Modernisasi Sistem Legacy',
        desc: 'Keahlian dalam memigrasikan sistem legacy ke stack modern seperti Vue 3 dan TypeScript.',
      },
      s3: {
        title: 'Performa & SEO',
        desc: 'Optimasi ekstrem untuk memastikan pemuatan instan dan visibilitas organik maksimal.',
      },
    },
    work: {
      title: 'Karya',
      subtitle: 'Pilihan',
      viewAll: 'Lihat GitHub Lengkap',
      comingSoon: 'Segera',
    },
    career: { title: 'Riwayat', subtitle: 'Profesional', present: 'Saat Ini' },
    certs: { title: 'Pengakuan', subtitle: '& Sertifikasi' },
    cta: {
      title: 'Tingkatkan',
      subtitle: 'Produk Digital Anda',
      desc: 'Siap berkolaborasi dengan merek yang mencari rekayasa elegan dan desain kelas dunia.',
      button: 'Email Saya',
      whatsapp: 'WhatsApp',
    },
  },
  mr: {
    seo: {
      title: 'रिकार्डो कामिलो | फ्रंटएंड इंजिनिअर',
      desc: '६+ वर्षांच्या अनुभवासह फ्रंटएंड इंजिनिअर आणि Vue.js/TypeScript विशेषज्ञ. Vue 3, React आणि Next.js मध्ये विशेषज्ञ.',
    },
    nav: { work: 'पोर्टफोलिओ', about: 'बद्दल', services: 'सेवा', career: 'कारकीर्द', contact: 'संपर्क' },
    hero: {
      title: 'फ्रंटएंड इंजिनिअर',
      subtitle: 'आणि Vue.js विशेषज्ञ',
      desc: 'व्यवसायिक आव्हानांना उच्च-प्रभाव डिजिटल उपायांमध्ये रूपांतरित करण्याचा ६+ वर्षांचा अनुभव. Vue.js, TypeScript आणि अत्यंत कार्यक्षम आर्किटेक्चरमध्ये विशेषज्ञ.',
      cta: 'संवाद साधा',
      badge: 'फ्रीलान्ससाठी उपलब्ध',
    },
    about: {
      quote: 'तांत्रिक उत्कृष्टता हे इरादा आणि दोषरहित अंमलबजावणीचे परिणाम आहे.',
      bio: 'मी रिकार्डो कामिलो, ६+ वर्षांच्या अनुभवासह फ्रंटएंड डेव्हलपर. मी Vue.js आणि TypeScript मध्ये विशेषज्ञ आहे, उच्च-गुणवत्तेचे उपाय प्रदान करण्यासाठी कसोटीने तांत्रिक विशेषज्ञता आणि असाधारण शिस्ताचे संयोजन करतो.',
      details: 'DISC प्रोफाइल: संशोधक — तांत्रिक अचूकता आणि स्केलेबल सोल्यूशन्सवर लक्ष केंद्रित.',
      stats: { exp: '६+ वर्षे', projects: '२०+ वितरित', eng: 'इंग्रजी C1' },
    },
    services: {
      s1: {
        title: 'Vue.js आणि React विकास',
        desc: 'Vue 3, Next.js आणि Nuxt सह मजबूत अॅप्लिकेशन्स. स्वच्छ कोड, चाचणी केलेले आणि स्केलसाठी तयार.',
      },
      s2: {
        title: 'लेगसी सिस्टम आधुनिकीकरण',
        desc: 'Vue 3 आणि TypeScript सारख्या आधुनिक स्टॅकमध्ये लेगसी सिस्टम मायग्रेट करण्याचे विशेषज्ञ.',
      },
      s3: {
        title: 'कार्यक्षमता आणि SEO',
        desc: 'त्वरित लोडिंग आणि कमाल सेंद्रिय दृश्यमानता सुनिश्चित करण्यासाठी अत्यंत ऑप्टिमायझेशन.',
      },
    },
    work: { title: 'निवडक', subtitle: 'कामे', viewAll: 'पूर्ण GitHub पहा', comingSoon: 'लवकरच' },
    career: { title: 'व्यावसायिक', subtitle: 'इतिहास', present: 'वर्तमान' },
    certs: { title: 'मान्यता', subtitle: 'आणि प्रमाणपत्रे' },
    cta: {
      title: 'आपले',
      subtitle: 'डिजिटल उत्पादन अपग्रेड करा',
      desc: 'अशा ब्रँड्ससह सहयोग करण्यासाठी तयार जे सुंदर इंजिनिअरिंग आणि जागतिक-स्तरीय डिझाइन शोधत आहेत.',
      button: 'मला ईमेल करा',
      whatsapp: 'WhatsApp',
    },
  },
  te: {
    seo: {
      title: 'రికార్డో కామిలో | ఫ్రంట్‌ఎండ్ ఇంజనీర్',
      desc: '6+ సంవత్సరాల అనుభవంతో ఫ్రంట్‌ఎండ్ ఇంజనీర్ మరియు Vue.js/TypeScript నిపుణుడు. Vue 3, React మరియు Next.js లో నిపుణుడు.',
    },
    nav: { work: 'పోర్ట్‌ఫోలియో', about: 'గురించి', services: 'సేవలు', career: 'కెరీర్', contact: 'సంప్రదించండి' },
    hero: {
      title: 'ఫ్రంట్‌ఎండ్ ఇంజనీర్',
      subtitle: 'మరియు Vue.js నిపుణుడు',
      desc: 'వ్యాపార సవాళ్లను అధిక-ప్రభావ డిజిటల్ పరిష్కారాలుగా మార్చడంలో 6+ సంవత్సరాల అనుభవం. Vue.js, TypeScript మరియు అత్యంత పనితీరు ఆర్కిటెక్చర్‌లలో నిపుణుడు.',
      cta: 'మాట్లాడుదాం',
      badge: 'ఫ్రీలాన్స్‌కు అందుబాటులో',
    },
    about: {
      quote: 'సాంకేతిక ఉత్కృష్టత అనేది ఉద్దేశం మరియు ఖచ్చితమైన అమలు ఫలితం.',
      bio: 'నేను రికార్డో కామిలో, 6+ సంవత్సరాల అనుభవంతో ఫ్రంట్‌ఎండ్ డెవలపర్. నేను Vue.js మరియు TypeScript లో నిపుణుడిని, అధిక-నాణ్యత పరిష్కారాలను అందించడానికి ఘనమైన సాంకేతిక నిపుణుడిని మరియు అసాధారణమైన శిక్షణతో కలిపి ఉన్నాను.',
      details: 'DISC ప్రొఫైల్: ఇన్వెస్టిగేటర్ — సాంకేతిక ఖచ్చితత్వం మరియు స్కేలబుల్ పరిష్కారాలపై దృష్టి.',
      stats: { exp: '6+ సంవత్సరాలు', projects: '20+ డెలివరీలు', eng: 'ఇంగ్లీష్ C1' },
    },
    services: {
      s1: {
        title: 'Vue.js మరియు React అభివృద్ధి',
        desc: 'Vue 3, Next.js మరియు Nuxt తో బలమైన అప్లికేషన్లు. శుభ్రమైన కోడ్, పరీక్షించబడింది మరియు స్కేల్ కోసం సిద్ధంగా ఉంది.',
      },
      s2: {
        title: 'లెగసీ సిస్టమ్ ఆధునీకరణ',
        desc: 'Vue 3 మరియు TypeScript వంటి ఆధునిక స్టాక్‌లకు లెగసీ సిస్టమ్‌లను మైగ్రేట్ చేయడంలో నిపుణుడు.',
      },
      s3: {
        title: 'పనితీరు మరియు SEO',
        desc: 'తక్షణ లోడింగ్ మరియు గరిష్ట సేంద్రీయ దృశ్యమానతను నిర్ధారించడానికి అత్యంత ఆప్టిమైజేషన్.',
      },
    },
    work: {
      title: 'ఎంపిక చేసిన',
      subtitle: 'పనులు',
      viewAll: 'పూర్తి GitHub చూడండి',
      comingSoon: 'త్వరలో',
    },
    career: { title: 'వృత్తిపరమైన', subtitle: 'చరిత్ర', present: 'ప్రస్తుతం' },
    certs: { title: 'గుర్తింపు', subtitle: 'మరియు ధృవీకరణలు' },
    cta: {
      title: 'మీ',
      subtitle: 'డిజిటల్ ఉత్పత్తిని అప్‌గ్రేడ్ చేయండి',
      desc: 'అందమైన ఇంజనీరింగ్ మరియు ప్రపంచ-తరగతి డిజైన్ కోసం బ్రాండ్‌లతో సహకరించడానికి సిద్ధంగా ఉంది.',
      button: 'నాకు ఇమెయిల్ చేయండి',
      whatsapp: 'WhatsApp',
    },
  },
  ta: {
    seo: {
      title: 'ரிகார்டோ கமிலோ | ஃப்ரண்ட்எண்ட் பொறியாளர்',
      desc: '6+ ஆண்டுகள் அனுபவத்துடன் ஃப்ரண்ட்எண்ட் பொறியாளர் மற்றும் Vue.js/TypeScript நிபுணர். Vue 3, React மற்றும் Next.js இல் நிபுணர்.',
    },
    nav: {
      work: 'போர்ட்ஃபோலியோ',
      about: 'பற்றி',
      services: 'சேவைகள்',
      career: 'பணி',
      contact: 'தொடர்பு',
    },
    hero: {
      title: 'ஃப்ரண்ட்எண்ட் பொறியாளர்',
      subtitle: 'மற்றும் Vue.js நிபுணர்',
      desc: 'வணிக சவால்களை உயர்-தாக்க டிஜிட்டல் தீர்வுகளாக மாற்றுவதில் 6+ ஆண்டுகள் அனுபவம். Vue.js, TypeScript மற்றும் தீவிர செயல்திறன் கட்டமைப்புகளில் நிபுணர்.',
      cta: 'பேசலாம்',
      badge: 'ஃப்ரீலான்ஸிற்கு கிடைக்கும்',
    },
    about: {
      quote: 'தொழில்நுட்ப சிறந்தது என்பது நோக்கம் மற்றும் குற்றமற்ற செயல்பாட்டின் விளைவாகும்.',
      bio: 'நான் ரிகார்டோ கமிலோ, 6+ ஆண்டுகள் அனுபவத்துடன் ஃப்ரண்ட்எண்ட் டெவலப்பர். நான் Vue.js மற்றும் TypeScript இல் நிபுணத்துவம் பெற்றவன், உயர்-தரமான தீர்வுகளை வழங்க திடமான தொழில்நுட்ப நிபுணத்துவம் மற்றும் விதிவிலக்கான ஒழுக்கத்தை இணைக்கிறேன்.',
      details: 'DISC சுயவிவரம்: விசாரணையாளர் — தொழில்நுட்ப துல்லியம் மற்றும் அளவிடக்கூடிய தீர்வுகளில் கவனம்.',
      stats: { exp: '6+ ஆண்டுகள்', projects: '20+ விநியோகிக்கப்பட்டது', eng: 'ஆங்கிலம் C1' },
    },
    services: {
      s1: {
        title: 'Vue.js மற்றும் React மேம்பாடு',
        desc: 'Vue 3, Next.js மற்றும் Nuxt உடன் வலிமையான பயன்பாடுகள். சுத்தமான குறியீடு, சோதிக்கப்பட்டது மற்றும் அளவிட தயாராக உள்ளது.',
      },
      s2: {
        title: 'பழைய அமைப்பு நவீனமயமாக்கல்',
        desc: 'Vue 3 மற்றும் TypeScript போன்ற நவீன ஸ்டேக்குகளுக்கு பழைய அமைப்புகளை இடம்பெயர்ப்பதில் நிபுணத்துவம்.',
      },
      s3: {
        title: 'செயல்திறன் மற்றும் SEO',
        desc: 'உடனடி ஏற்றம் மற்றும் அதிகபட்ச கரிம தெரிவுநிலையை உறுதி செய்ய தீவிர உகப்பாக்கம்.',
      },
    },
    work: {
      title: 'தேர்ந்தெடுக்கப்பட்ட',
      subtitle: 'பணிகள்',
      viewAll: 'முழு GitHub ஐப் பார்க்கவும்',
      comingSoon: 'விரைவில்',
    },
    career: { title: 'தொழில்முறை', subtitle: 'வரலாறு', present: 'தற்போது' },
    certs: { title: 'அங்கீகாரம்', subtitle: 'மற்றும் சான்றிதழ்கள்' },
    cta: {
      title: 'உங்கள்',
      subtitle: 'டிஜிட்டல் தயாரிப்பை மேம்படுத்தவும்',
      desc: 'நவீன பொறியியல் மற்றும் உலக-தரம் வாய்ந்த வடிவமைப்பைத் தேடும் பிராண்டுகளுடன் ஒத்துழைக்க தயாராக உள்ளது.',
      button: 'எனக்கு மின்னஞ்சல் அனுப்பவும்',
      whatsapp: 'WhatsApp',
    },
  },
  tr: {
    seo: {
      title: 'Ricardo Camilo | Frontend Mühendisi',
      desc: '6+ yıl deneyimli Frontend Mühendisi ve Vue.js/TypeScript Uzmanı. Vue 3, React ve Next.js konusunda uzman.',
    },
    nav: {
      work: 'Portfolyo',
      about: 'Hakkımda',
      services: 'Hizmetler',
      career: 'Kariyer',
      contact: 'İletişim',
    },
    hero: {
      title: 'Frontend Mühendisi',
      subtitle: 've Vue.js Uzmanı',
      desc: 'İş zorluklarını yüksek etkili dijital çözümlere dönüştürmede 6+ yıl deneyim. Vue.js, TypeScript ve uç performans mimarilerinde uzman.',
      cta: 'Konuşalım',
      badge: 'Freelance için Müsait',
    },
    about: {
      quote: 'Teknik mükemmellik, niyet ve kusursuz yürütmenin sonucudur.',
      bio: 'Ben Ricardo Camilo, 6+ yıl deneyimli Frontend Geliştirici. Vue.js ve TypeScript konusunda uzmanım, yüksek kaliteli çözümler sunmak için sağlam teknik uzmanlığı olağanüstü disiplinle birleştiriyorum.',
      details:
        'DISC Profili: Araştırmacı — Teknik hassasiyet ve ölçeklenebilir çözümlere odaklanma.',
      stats: { exp: '6+ Yıl', projects: '20+ Teslim Edildi', eng: 'İngilizce C1' },
    },
    services: {
      s1: {
        title: 'Vue.js ve React Geliştirme',
        desc: 'Vue 3, Next.js ve Nuxt ile sağlam uygulamalar. Temiz kod, test edilmiş ve ölçeğe hazır.',
      },
      s2: {
        title: 'Eski Sistem Modernizasyonu',
        desc: 'Eski sistemleri Vue 3 ve TypeScript gibi modern yığınlarla geçiş konusunda uzmanlık.',
      },
      s3: {
        title: 'Performans ve SEO',
        desc: 'Anında yükleme ve maksimum organik görünürlük sağlamak için uç optimizasyon.',
      },
    },
    work: {
      title: 'Seçilmiş',
      subtitle: 'Çalışmalar',
      viewAll: "Tam GitHub'ı Görüntüle",
      comingSoon: 'Çok Yakında',
    },
    career: { title: 'Profesyonel', subtitle: 'Geçmiş', present: 'Şu Anda' },
    certs: { title: 'Tanınma', subtitle: 've Sertifikalar' },
    cta: {
      title: 'Dijital',
      subtitle: 'Ürününüzü Yükseltin',
      desc: 'Zarif mühendislik ve dünya standartlarında tasarım arayan markalarla işbirliği yapmaya hazır.',
      button: 'Bana E-posta Gönder',
      whatsapp: 'WhatsApp',
    },
  },
  vi: {
    seo: {
      title: 'Ricardo Camilo | Kỹ sư Frontend',
      desc: 'Kỹ sư Frontend & Chuyên gia Vue.js/TypeScript với hơn 6 năm kinh nghiệm. Chuyên gia về Vue 3, React và Next.js.',
    },
    nav: {
      work: 'Portfolio',
      about: 'Giới thiệu',
      services: 'Dịch vụ',
      career: 'Sự nghiệp',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Kỹ sư Frontend',
      subtitle: 'và Chuyên gia Vue.js',
      desc: 'Hơn 6 năm kinh nghiệm biến các thách thức kinh doanh thành giải pháp số có tác động cao. Chuyên gia về Vue.js, TypeScript và kiến trúc hiệu suất cực cao.',
      cta: 'Nói chuyện',
      badge: 'Có sẵn cho Freelance',
    },
    about: {
      quote: 'Sự xuất sắc về kỹ thuật là kết quả của ý định và thực hiện hoàn hảo.',
      bio: 'Tôi là Ricardo Camilo, Nhà phát triển Frontend với hơn 6 năm kinh nghiệm. Tôi chuyên về Vue.js và TypeScript, kết hợp chuyên môn kỹ thuật vững vàng với kỷ luật phi thường để cung cấp giải pháp chất lượng cao.',
      details:
        'Hồ sơ DISC: Nhà điều tra — Tập trung vào độ chính xác kỹ thuật và giải pháp có thể mở rộng.',
      stats: { exp: '6+ năm', projects: '20+ đã bàn giao', eng: 'Tiếng Anh C1' },
    },
    services: {
      s1: {
        title: 'Phát triển Vue.js & React',
        desc: 'Ứng dụng mạnh mẽ với Vue 3, Next.js và Nuxt. Mã sạch, đã kiểm tra và sẵn sàng mở rộng.',
      },
      s2: {
        title: 'Hiện đại hóa hệ thống legacy',
        desc: 'Chuyên môn di chuyển hệ thống legacy sang các stack hiện đại như Vue 3 và TypeScript.',
      },
      s3: {
        title: 'Hiệu suất & SEO',
        desc: 'Tối ưu hóa cực cao đảm bảo tải ngay lập tức và hiển thị hữu cơ tối đa.',
      },
    },
    work: {
      title: 'Công trình',
      subtitle: 'Chọn lọc',
      viewAll: 'Xem GitHub đầy đủ',
      comingSoon: 'Sắp ra mắt',
    },
    career: { title: 'Lịch sử', subtitle: 'Nghề nghiệp', present: 'Hiện tại' },
    certs: { title: 'Công nhận', subtitle: 'và Chứng chỉ' },
    cta: {
      title: 'Nâng cấp',
      subtitle: 'Sản phẩm số của bạn',
      desc: 'Sẵn sàng hợp tác với các thương hiệu tìm kiếm kỹ thuật thanh lịch và thiết kế đẳng cấp thế giới.',
      button: 'Gửi email cho tôi',
      whatsapp: 'WhatsApp',
    },
  },
  ur: {
    seo: {
      title: 'رکارڈو کامیلو | فرنٹ اینڈ انجینئر',
      desc: '6+ سال کے تجربے کے ساتھ فرنٹ اینڈ انجینئر اور Vue.js/TypeScript ماہر۔ Vue 3, React اور Next.js میں ماہر۔',
    },
    nav: {
      work: 'پورٹ فولیو',
      about: 'کے بارے میں',
      services: 'خدمات',
      career: 'کیریئر',
      contact: 'رابطہ',
    },
    hero: {
      title: 'فرنٹ اینڈ انجینئر',
      subtitle: 'اور Vue.js ماہر',
      desc: 'کاروباری چیلنجوں کو اعلیٰ اثر ڈیجیٹل حل میں تبدیل کرنے کا 6+ سال کا تجربہ۔ Vue.js, TypeScript اور انتہائی کارکردگی کی تعمیر میں ماہر۔',
      cta: 'بات کریں',
      badge: 'فری لانس کے لیے دستیاب',
    },
    about: {
      quote: 'تکنیکی بہترین ارادے اور بے عیب عملدرآمد کا نتیجہ ہے۔',
      bio: 'میں رکارڈو کامیلو ہوں، 6+ سال کے تجربے کے ساتھ فرنٹ اینڈ ڈیولپر۔ میں Vue.js اور TypeScript میں مہارت رکھتا ہوں، اعلیٰ معیار کے حل فراہم کرنے کے لیے ٹھوس تکنیکی مہارت اور غیر معمولی نظم و ضبط کو یکجا کرتا ہوں۔',
      details: 'DISC پروفائل: محقق — تکنیکی درستگی اور اسکیل ایبل حل پر توجہ۔',
      stats: { exp: '6+ سال', projects: '20+ ڈیلیورڈ', eng: 'انگریزی C1' },
    },
    services: {
      s1: {
        title: 'Vue.js اور React ڈیولپمنٹ',
        desc: 'Vue 3, Next.js اور Nuxt کے ساتھ مضبوط ایپلی کیشنز۔ صاف ستھرا کوڈ، ٹیسٹ شدہ اور اسکیل کے لیے تیار۔',
      },
      s2: {
        title: 'لیگیسی سسٹم کی جدیدیت',
        desc: 'لیگیسی سسٹمز کو Vue 3 اور TypeScript جیسے جدید اسٹیک میں منتقل کرنے میں مہارت۔',
      },
      s3: {
        title: 'کارکردگی اور SEO',
        desc: 'فوری لوڈنگ اور زیادہ سے زیادہ نامیاتی نمائش کو یقینی بنانے کے لیے انتہائی اصلاح۔',
      },
    },
    work: { title: 'منتخب', subtitle: 'کام', viewAll: 'مکمل GitHub دیکھیں', comingSoon: 'جلد ہی' },
    career: { title: 'پیشہ ورانہ', subtitle: 'تاریخ', present: 'موجودہ' },
    certs: { title: 'شناخت', subtitle: 'اور سرٹیفکیٹس' },
    cta: {
      title: 'اپنے',
      subtitle: 'ڈیجیٹل پروڈکٹ کو اپ گریڈ کریں',
      desc: 'ایسی برانڈز کے ساتھ تعاون کرنے کے لیے تیار جو خوبصورت انجینئرنگ اور عالمی معیار کا ڈیزائن تلاش کر رہی ہیں۔',
      button: 'مجھے ای میل کریں',
      whatsapp: 'WhatsApp',
    },
  },
}
