export interface SkillGroup {
  id: string | number;
  label: string;
  items: string[];
  // Rendered after a semicolon, e.g. practices or working-knowledge items.
  extra?: string[];
}
