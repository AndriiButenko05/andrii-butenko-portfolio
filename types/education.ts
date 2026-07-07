export interface EducationEntry {
  id: string | number;
  institution: string;
  credential: string;
  period: string;
}

export interface CertificateEntry {
  id: string | number;
  name: string;
  issuer: string;
  period?: string;
}
