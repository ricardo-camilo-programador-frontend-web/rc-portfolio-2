
export interface Project {
  id: string;
  title: string;
  category: 'React' | 'Vue' | 'Next.js' | 'Mobile';
  description: string;
  image: string;
  tags: string[];
  link: string;
  metrics?: string;
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

// Added missing Character interface to fix import error in CharacterSheet.tsx
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