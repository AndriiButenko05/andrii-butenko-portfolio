export interface Project {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  live: string;
  gradientColors?: [string, string];
  icon: string;
}
