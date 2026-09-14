export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location?: string;
  points: string[];
  technologies: string[];
  keyImpact: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  title?: string;
  tagline: string;
  period: string;
  date?: string;
  category?: string;
  image?: string;
  technologies: string[];
  overview: string;
  description?: string;
  problem: string;
  problemSolved?: string;
  solution: string;
  keyFeatures: string[];
  features?: string[];
  architecture: string[];
  contribution: string;
  githubUrl?: string;
  liveUrl?: string;
  imageFallbackLabel: string;
  imageCandidatePaths: string[];
  accentColor: string;
  isMern?: boolean;
}

export interface AdditionalProjectItem {
  id: string;
  title: string;
  name?: string;
  category: string;
  date: string;
  period?: string;
  image?: string;
  tagline?: string;
  technologies: string[];
  description: string;
  features?: string[];
  problemSolved?: string;
  githubUrl?: string;
  liveUrl?: string;
  isMern?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  score: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Core';
    context?: string;
  }[];
}

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    location: string;
    social: {
      platform: string;
      url: string;
      label: string;
    }[];
    summary: string;
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  additionalProjects: AdditionalProjectItem[];
  education: EducationItem[];
  skills: SkillCategory[];
}
