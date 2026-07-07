export interface ExperienceEntry {
  id: string | number;
  role: string;
  company: string;
  companyLink?: string;
  period: string;
  context: string;
  achievements: string[];
}
