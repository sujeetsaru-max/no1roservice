/**
 * Centralized Endpoints Registry for Future Laravel REST API
 */
export const API_ENDPOINTS = {
  // Health & System
  health: "/health",
  
  // Bookings & Service Requests
  bookings: {
    create: "/bookings",
    track: (idOrTrackingNumber: string) => `/bookings/track/${idOrTrackingNumber}`,
    cancel: (id: string | number) => `/bookings/${id}/cancel`,
    slots: "/bookings/available-slots",
  },

  // Service Catalog
  services: {
    list: "/services",
    detail: (slug: string) => `/services/${slug}`,
    categories: "/services/categories",
  },

  // RO AMC Plans
  amc: {
    plans: "/amc-plans",
    detail: (id: string | number) => `/amc-plans/${id}`,
    subscribe: "/amc-plans/subscribe",
  },

  // Brands & Spares Catalog
  brands: {
    list: "/brands",
    detail: (slug: string) => `/brands/${slug}`,
    spares: (brandSlug: string) => `/brands/${brandSlug}/spare-parts`,
  },

  // Coverage & Locations
  locations: {
    cities: "/locations/cities",
    areas: (citySlug: string) => `/locations/cities/${citySlug}/areas`,
    checkPincode: (pincode: string) => `/locations/check-pincode/${pincode}`,
  },

  // Technicians
  technicians: {
    checkAvailability: "/technicians/availability",
  },

  // Contact & Inquiries
  contact: {
    submit: "/inquiries",
    requestCallback: "/inquiries/callback",
  },
} as const;
