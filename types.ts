
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SiteSettings {
  companyName: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  representative: string;
}

export interface SiteContent {
  settings: SiteSettings;
  services: Service[];
  projects: Project[];
}
