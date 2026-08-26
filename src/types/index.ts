export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  short: string;
  description: string;
  specs: ProductSpec[];
  features: string[];
  applications: string[];
  industries: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  location?: string;
  date?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface IndustryItem {
  title: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  iconName: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  altPhones: string[];
  whatsapp: string;
  email: string;
  altEmail: string;
  address: string;
  hours: string;
  mapCoords: string;
  mapLink: string;
  mapEmbed: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
}
