export const siteConfig = {
  // Official Brand Identity
  name: "No.1 RO Service",
  shortName: "No.1 RO",
  domain: "No1ROService.in",
  website: "https://no1roservice.in",
  tagline: "Your Trusted Partner for Pure Water.",
  positioning:
    "A professional RO water purifier repair, installation, maintenance, AMC and spare parts service company.",
  description:
    "Professional RO water purifier repair, installation, maintenance, filter replacement, AMC plans, and quality spare parts service.",
  url:
    process.env.NODE_ENV === "production"
      ? "https://no1roservice.in"
      : process.env.NEXT_PUBLIC_APP_URL || "https://no1roservice.in",

  // Configurable Contact & Support (Only populated if configured)
  support: {
    phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "",
    whatsapp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || "",
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
    address: process.env.NEXT_PUBLIC_SUPPORT_ADDRESS || "",
    workingHours: process.env.NEXT_PUBLIC_WORKING_HOURS || "8:00 AM - 8:00 PM (Monday to Sunday)",
  },

  // Verified & Neutral Highlights (No unsupported claims)
  highlights: [
    "Experienced & Skilled Service Technicians",
    "Quality Filter & Spare Parts Replacements",
    "Clear, Upfront & Transparent Service Pricing",
    "Convenient Doorstep Service Scheduling",
    "Comprehensive Annual Maintenance Contracts (AMC)",
  ],

  // Core Service Categories
  serviceCategories: [
    { id: "ro-repair", label: "RO Repair", slug: "ro-repair" },
    { id: "ro-installation", label: "RO Installation", slug: "ro-installation" },
    { id: "ro-maintenance", label: "RO Maintenance", slug: "ro-maintenance" },
    { id: "filter-replacement", label: "Filter Replacement", slug: "filter-replacement" },
    { id: "membrane-replacement", label: "RO Membrane Replacement", slug: "membrane-replacement" },
  ],
};
