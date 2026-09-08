export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  summary: string;
  yearsExperience: number;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  context?: string;
  bullets: string[];
}

export interface Story {
  slug: string;
  kicker: string;
  headline: string;
  dek: string;
  company: string;
  dateline: string;
  tags: string[];
  body: string[];
  artSeed: number;
  featured?: boolean;
}

export interface Highlight {
  figure: string;
  label: string;
  detail: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dateRange: string;
}
