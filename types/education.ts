export interface EducationEntry {
  id: string | number;
  institution: string;
  credential: string;
  period: string;
  note?: string;
  description?: string;
  details?: string[];
}

export interface CertificateEntry {
  id: string | number;
  name: string;
  issuer?: string;
  period?: string;
}
