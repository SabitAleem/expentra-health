export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "accuracy" | "transparent" | "dedicated" | "flexible";
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  practice: string;
}

export interface BenefitItem {
  id: string;
  label: string;
}

export interface RcmStage {
  id: string;
  number: number;
  label: string;
  angle: number;
}
