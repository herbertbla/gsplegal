export interface TeamMember {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  position: string;
  positionEn?: string;
  imageUrl: string;
  description?: string;
  email?: string;
  phone?: string;
  fax?: string;
  expertise?: string[];
  expertiseEn?: string[];
  languages?: string[];
  languagesEn?: string[];
  education?: string[];
  educationEn?: string[];
  experience?: string[];
  experienceEn?: string[];
}
