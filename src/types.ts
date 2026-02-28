export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  metrics?: string;
  comingSoon?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Character {
  name: string;
  archetype: string;
  level: number;
  hp: number;
  maxHp: number;
  xp: number;
  stats: {
    strength: number;
    intelligence: number;
    charisma: number;
    luck: number;
  };
  inventory: string[];
}

export interface TimelineItem {
  id: number;
  period: string;
  company: string;
  role: string;
  desc: string;
  tags: string[];
}
