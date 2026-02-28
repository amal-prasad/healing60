export interface Therapist {
  id: string;
  name: string;
  title: string;
  specialization: string;
  quote: string;
  image: string;
  credentials: string[];
  yearsExperience: number;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  symptoms: string[];
  approach: string[];
  whatToExpect: string[];
  faq: { question: string; answer: string }[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface CorporateService {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SiteSettings {
  clinicName: string;
  tagline: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  mapUrl: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  stats: {
    livesTouched: number;
    rating: number;
    yearsExperience: number;
  };
}
