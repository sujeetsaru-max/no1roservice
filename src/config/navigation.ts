import { routes } from "./routes";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const headerNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  {
    label: "RO Services",
    href: routes.services.index,
    children: [
      {
        label: "RO Repair",
        href: routes.services.repair,
        description: "Diagnostics, pump troubleshooting & leakage fix",
      },
      {
        label: "RO Installation",
        href: routes.services.installation,
        description: "Doorstep installation & relocation service",
      },
      {
        label: "RO Maintenance",
        href: routes.services.maintenance,
        description: "Periodic tune-up, sanitization & TDS testing",
      },
      {
        label: "Filter Replacement",
        href: routes.services.filterReplacement,
        description: "Sediment, pre-carbon & post-carbon candle change",
      },
      {
        label: "RO Membrane Replacement",
        href: routes.services.membraneReplacement,
        description: "High-grade 75/100 GPD TFC membrane replacement",
      },
    ],
  },
  { label: "AMC Plans", href: routes.amcPlans },
  { label: "RO Brands", href: routes.brands },
  { label: "Service Areas", href: routes.serviceAreas },
  { label: "Contact Us", href: routes.contact },
];

export const footerQuickLinks = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label: "RO Services", href: routes.services.index },
  { label: "AMC Plans", href: routes.amcPlans },
  { label: "RO Brands", href: routes.brands },
  { label: "Contact Us", href: routes.contact },
];

export const footerOurServices = [
  { label: "RO Repair", href: routes.services.repair },
  { label: "RO Installation", href: routes.services.installation },
  { label: "RO Maintenance", href: routes.services.maintenance },
  { label: "Filter Replacement", href: routes.services.filterReplacement },
  { label: "Membrane Replacement", href: routes.services.membraneReplacement },
];
