export interface ExperienceLink {
  label: string;
  href: string;
}

// A bullet can be prefixed with a bold client name, e.g. "VM Design: ...".
export type ExperienceAchievement = string | { label: string; text: string };

export interface ExperienceEntry {
  id: string | number;
  role: string;
  company?: string;
  period: string;
  employment: string;
  context: string;
  team?: string;
  stack: string[];
  // Rendered as a separate line of links under `context`.
  links?: ExperienceLink[];
  achievements: ExperienceAchievement[];
}
