export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName?: string;
}

export interface ServiceDetail {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  estimatedDuration: string;
  features: string[];
  warrantyDays: number;
  isActive: boolean;
}

export interface AMCPlan {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  pricePerYear: number;
  durationMonths: number;
  visitsIncluded: number;
  filterReplacementIncluded: boolean;
  membraneReplacementIncluded: boolean;
  electricalPartsCovered: boolean;
  features: string[];
  isPopular?: boolean;
}
