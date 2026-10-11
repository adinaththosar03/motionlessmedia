export type ServiceType = 'video' | 'social' | 'performance';

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  caseStudy: {
    client: string;
    result: string;
    highlight: string;
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  company: string;
  monthlyBudget: string;
  services: ServiceType[];
  notes: string;
}
