export interface TeamMember {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  description?: string;
  email?: string;
  phone?: string;
  fax?: string;
  expertise?: string[];
  languages?: string[];
  education?: string[];
  experience?: string[];
}
