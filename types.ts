
export interface CompanyInfo {
  name: string;
  ceo: string;
  establishment: string;
  address: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  brands: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  period: string;
  client: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface SiteConfig {
  primaryColor: string;
  secondaryColor: string;
  heroTitle: string;
  heroSubTitle: string;
  aboutText: string;
}

export interface SiteData {
  company: CompanyInfo;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  config: SiteConfig;
}
