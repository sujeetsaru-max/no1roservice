export type LocationType =
  | "state"
  | "union-territory"
  | "city"
  | "district"
  | "locality";

export type PublicationStatus = "published" | "draft" | "review" | "archived";

export interface LocationRecord {
  id: string;
  name: string;
  type: LocationType;
  slug: string;
  parentSlug?: string;
  pathSegments: string[];
  path: string;
  status: PublicationStatus;
  stateName: string;
  cityName?: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  introduction: string;
  waterQualityNote: string;
  serviceAvailability: {
    status: "active" | "limited" | "planning";
    label: string;
    description: string;
  };
  coverageLocalities?: string[];
  keyServices: {
    title: string;
    description: string;
    href: string;
  }[];
  localContext: {
    residentialNeeds: string;
    commercialNeeds: string;
    commonPurifierTypes: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLocationIds: string[];
  lastReviewedDate: string;
}

export const locationsData: LocationRecord[] = [
  // 1. DELHI (Union Territory / NCT)
  {
    id: "delhi",
    name: "Delhi",
    type: "union-territory",
    slug: "delhi",
    pathSegments: ["delhi"],
    path: "/locations/delhi",
    status: "published",
    stateName: "Delhi",
    metaTitle: "RO Water Purifier Service & Repair in Delhi",
    metaDescription:
      "Reliable RO water purifier repair, installation, and filter replacement services across Delhi. Expert troubleshooting for all major purifier brands.",
    canonical: "https://no1roservice.in/locations/delhi",
    h1: "RO Water Purifier Service & Repair in Delhi",
    introduction:
      "Delhi's diverse residential and commercial areas depend on a combination of municipal river supply, Ranney wells, and groundwater sources. Whether you reside in an apartment complex, builder floor, or independent bungalow, maintaining optimal drinking water purification requires regular servicing suited to local raw water conditions.",
    waterQualityNote:
      "Water supplies in Delhi vary considerably across zones. While central and river-fed zones receive treated municipal water, southern, western, and outer sectors frequently rely on groundwater with elevated Total Dissolved Solids (TDS) and mineral hardness. Regular pre-filter inspection and timely membrane checks are essential to prevent premature scaling.",
    serviceAvailability: {
      status: "active",
      label: "Active Service Coverage",
      description:
        "Coordinated doorstep service available across major South, East, West, North, and Central Delhi localities.",
    },
    coverageLocalities: [
      "Hauz Khas",
      "Saket",
      "Vasant Kunj",
      "Dwarka",
      "Rohini",
      "Janakpuri",
      "Lajpat Nagar",
      "Mayur Vihar",
      "Pitampura",
      "Greater Kailash",
    ],
    keyServices: [
      {
        title: "RO Purifier Repair",
        description:
          "Troubleshooting motor hums, electrical SMPS failures, water leaks, and auto-cutoff faults.",
        href: "/services/ro-repair",
      },
      {
        title: "Filter Cartridge Replacement",
        description:
          "Replacing external spun candles, sediment blocks, and activated carbon cartridges.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "Installing high-rejection 75/80 GPD TFC membranes with matched capillary flow restrictors.",
        href: "/services/membrane-replacement",
      },
      {
        title: "Installation & Relocation",
        description:
          "Proper wall mounting, diverter plumbing, and reject line routing for new or shifted units.",
        href: "/services/ro-installation",
      },
    ],
    localContext: {
      residentialNeeds:
        "High demand for multi-stage RO+UV purifiers in high-rise apartments and builder floors, with frequent external pre-filter changes required due to periodic municipal line rust.",
      commercialNeeds:
        "Light commercial purifiers (25 to 50 LPH) supporting offices, clinics, tuition centers, and cafes requiring consistent drinking water flow.",
      commonPurifierTypes:
        "Wall-mounted domestic RO+UV+UF systems, mineral controller units, and under-the-sink configurations in modular kitchens.",
    },
    faqs: [
      {
        question: "How frequently should RO pre-filters be replaced in Delhi?",
        answer:
          "Due to intermittent municipal water pressure and pipeline maintenance sediment, external spun pre-filters in Delhi typically need replacement every 3 to 4 months to prevent internal inline filters from clogging.",
      },
      {
        question: "Do you service all major RO purifier brands across Delhi?",
        answer:
          "Yes, we provide independent service, maintenance, and compatible filter replacements for Kent, Aquaguard, Pureit, Livpure, AO Smith, Blue Star, LG, Havells, Whirlpool, and Panasonic systems.",
      },
      {
        question: "Can an RO purifier handle high TDS borewell water in outer Delhi sectors?",
        answer:
          "Yes. High-TDS borewell water (above 1,000 ppm) requires a high-rejection Thin-Film Composite (TFC) membrane paired with a heavy-duty booster pump and an anti-scalant dosing stage to maintain safe drinking water.",
      },
      {
        question: "How can I book an RO service appointment in Delhi?",
        answer:
          "You can submit a service request through our website booking form with your locality, brand name, and reported issue. Our coordination team will confirm service scheduling with you.",
      },
    ],
    relatedLocationIds: ["delhi-hauz-khas", "noida", "ghaziabad"],
    lastReviewedDate: "2026-11-14",
  },

  // 2. UTTAR PRADESH (State)
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    type: "state",
    slug: "uttar-pradesh",
    pathSegments: ["uttar-pradesh"],
    path: "/locations/uttar-pradesh",
    status: "published",
    stateName: "Uttar Pradesh",
    metaTitle: "RO Water Purifier Service & Support in Uttar Pradesh",
    metaDescription:
      "Professional RO water purifier repair, maintenance, and filter replacement support across key urban centers in Uttar Pradesh.",
    canonical: "https://no1roservice.in/locations/uttar-pradesh",
    h1: "RO Water Purifier Service & Support in Uttar Pradesh",
    introduction:
      "Uttar Pradesh encompasses a diverse geographical landscape where residential colonies, industrial zones, and growing suburban developments rely on varied groundwater aquifers and canal supplies. Ensuring safe, pure drinking water requires multi-stage filtration systems maintained in accordance with regional water conditions.",
    waterQualityNote:
      "Groundwater across many parts of Western Uttar Pradesh exhibits elevated mineral hardness, dissolved calcium and magnesium salts, and variable sediment levels. Reverse Osmosis with adequate pre-filtration is widely adopted across urban households to reduce heavy TDS to palatable, healthy drinking standards.",
    serviceAvailability: {
      status: "active",
      label: "Active in Selected Urban Centers",
      description:
        "Currently operational across key National Capital Region districts including Noida and Ghaziabad, with service expansion planned for additional cities.",
    },
    coverageLocalities: [
      "Noida",
      "Ghaziabad",
      "Greater Noida",
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Raj Nagar Extension",
    ],
    keyServices: [
      {
        title: "RO Repair & Diagnostics",
        description:
          "Diagnosing booster pump degradation, SMPS transformer failure, and automatic cutoff malfunctions.",
        href: "/services/ro-repair",
      },
      {
        title: "Sediment & Carbon Filter Replacement",
        description:
          "Replacing worn spun candles, inline sediment filters, and high-adsorption carbon blocks.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "Installing 75, 80, and 100 GPD high-recovery membranes with flow restrictor matching.",
        href: "/services/membrane-replacement",
      },
      {
        title: "System Maintenance & Health Checks",
        description:
          "TDS calibration, internal sanitization, pressure audits, and leak prevention.",
        href: "/services/ro-maintenance",
      },
    ],
    localContext: {
      residentialNeeds:
        "High reliance on deep borewell aquifers in suburban apartment developments necessitates durable multi-stage RO units with robust pre-filtration stages.",
      commercialNeeds:
        "Offices, educational institutions, and commercial establishments require regular sanitization and high-capacity membrane upkeep.",
      commonPurifierTypes:
        "Multi-stage Mineral RO systems with TDS controllers, alkaline mineralizers, and high-recovery membranes.",
    },
    faqs: [
      {
        question: "Which cities in Uttar Pradesh do you currently cover?",
        answer:
          "We currently provide coordinated RO service in key Western Uttar Pradesh urban hubs including Noida, Greater Noida, and Ghaziabad. Coverage for additional cities is under structured planning.",
      },
      {
        question: "Why is water hardness an issue for RO purifiers in Western UP?",
        answer:
          "High levels of dissolved calcium and magnesium in local groundwater accelerate scale formation across membrane surfaces. Regular pre-filter maintenance and appropriate flow restrictor sizing are essential to protect the membrane.",
      },
      {
        question: "Can technicians handle high-rise apartment installations in UP?",
        answer:
          "Yes, technicians are experienced in navigating high-pressure apartment plumbing lines, installing pressure-reducing valves (PRVs) where needed, and setting up secure wall mountings.",
      },
    ],
    relatedLocationIds: ["noida", "ghaziabad", "delhi"],
    lastReviewedDate: "2026-11-14",
  },

  // 3. NOIDA (City)
  {
    id: "noida",
    name: "Noida",
    type: "city",
    slug: "noida",
    pathSegments: ["noida"],
    path: "/locations/noida",
    status: "published",
    stateName: "Uttar Pradesh",
    cityName: "Noida",
    metaTitle: "RO Water Purifier Service & Repair in Noida",
    metaDescription:
      "Fast, reliable RO water purifier repair, filter replacement, and maintenance in Noida sectors. Support for Kent, Aquaguard, Pureit, Livpure, and all brands.",
    canonical: "https://no1roservice.in/locations/noida",
    h1: "RO Water Purifier Service & Repair in Noida",
    introduction:
      "Noida's modern sectors and high-rise group housing societies present unique water filtration demands. With incoming water often combining Ganga canal supplies with deep borewell groundwater, water hardness and TDS levels can fluctuate across seasons, requiring attentive RO purifier maintenance.",
    waterQualityNote:
      "Many Noida sectors experience raw water TDS between 600 and 1,400 ppm when groundwater is blended into the supply. High mineral hardness frequently leads to scaling on membrane sheets and booster pump valves. Timely pre-filter changes and annual membrane servicing are crucial to ensure pure, soft-tasting drinking water.",
    serviceAvailability: {
      status: "active",
      label: "Active Sector-Wise Coverage",
      description:
        "Doorstep technician service available across Sectors 15 through 150, Noida Expressway societies, and Central Noida residential sectors.",
    },
    coverageLocalities: [
      "Sector 62",
      "Sector 50",
      "Sector 74",
      "Sector 76",
      "Sector 78",
      "Sector 120",
      "Sector 128",
      "Sector 137",
      "Sector 18",
      "Sector 37",
    ],
    keyServices: [
      {
        title: "RO Repair & Troubleshooting",
        description:
          "Fixing booster pump vibration, auto-cutoff float issues, water leakage, and power SMPS trips.",
        href: "/services/ro-repair",
      },
      {
        title: "Filter Cartridge Replacement",
        description:
          "Replacing clogged external sediment candles, inline pre-carbon blocks, and taste polishers.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "Replacing scaled membranes with high-rejection 75/80 GPD TFC elements for proper TDS reduction.",
        href: "/services/membrane-replacement",
      },
      {
        title: "RO Installation & Society Relocation",
        description:
          "Safe wall mounting on kitchen tiles, under-sink setups, and diverter valve connections.",
        href: "/services/ro-installation",
      },
    ],
    localContext: {
      residentialNeeds:
        "Apartment residents in Noida require regular spun filter changes every 3 months due to sediment settling in society overhead distribution tanks.",
      commercialNeeds:
        "IT parks and corporate facilities across Sectors 62, 127, and 135 require ongoing preventative maintenance for staff drinking water stations.",
      commonPurifierTypes:
        "Under-the-sink RO units with pressure tanks and modern wall-mounted RO+UV systems with active copper or mineralizer cartridges.",
    },
    faqs: [
      {
        question: "Why do RO filters clog quickly in Noida high-rise apartments?",
        answer:
          "Society overhead storage tanks can accumulate rust, silt, and fine pipe scale, which quickly coats the external spun polypropylene filter candle. Changing this candle every 3 months protects the expensive internal filters and RO membrane.",
      },
      {
        question: "What is the typical TDS reading for purified water in Noida?",
        answer:
          "Purified RO drinking water in Noida should ideally measure between 80 and 150 ppm TDS with a clean, balanced taste. If your purifier outputs water above 250 ppm, the RO membrane may require testing or replacement.",
      },
      {
        question: "Can your technicians service under-sink RO models in Noida modular kitchens?",
        answer:
          "Yes, we specialize in servicing compact under-sink RO units, checking pressurized storage tanks, dedicated chrome sink faucets, and inline filter modules.",
      },
      {
        question: "How quickly can service be scheduled in Noida?",
        answer:
          "Once you submit your booking with your sector details and purifier symptoms, our coordination team reviews technician availability and confirms convenient appointment slots.",
      },
    ],
    relatedLocationIds: ["noida-sector-62", "ghaziabad", "delhi"],
    lastReviewedDate: "2026-11-14",
  },

  // 4. GHAZIABAD (City)
  {
    id: "ghaziabad",
    name: "Ghaziabad",
    type: "city",
    slug: "ghaziabad",
    pathSegments: ["ghaziabad"],
    path: "/locations/ghaziabad",
    status: "published",
    stateName: "Uttar Pradesh",
    cityName: "Ghaziabad",
    metaTitle: "RO Water Purifier Service & Repair in Ghaziabad",
    metaDescription:
      "Expert RO water purifier repair, maintenance, and filter replacement in Ghaziabad. Coverage for Indirapuram, Vaishali, Vasundhara, and Raj Nagar.",
    canonical: "https://no1roservice.in/locations/ghaziabad",
    h1: "RO Water Purifier Service & Repair in Ghaziabad",
    introduction:
      "Ghaziabad comprises a mix of established residential colonies, bustling townships, and expansive high-rise developments such as Indirapuram, Vaishali, and Crossings Republik. Given the high reliance on deep borewells and varying municipal supplies, dependable water purifiers are a daily household necessity.",
    waterQualityNote:
      "Groundwater across Ghaziabad often features high Total Dissolved Solids (frequently ranging from 800 to 1,600+ ppm) and noticeable mineral hardness. Without adequate multi-stage filtration and timely pre-filter maintenance, booster pumps can suffer strain and membranes can foul rapidly.",
    serviceAvailability: {
      status: "active",
      label: "Active City-Wide Coverage",
      description:
        "Doorstep service available across Indirapuram, Vaishali, Vasundhara, Crossings Republik, Raj Nagar Extension, and Kaushambi.",
    },
    coverageLocalities: [
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Kaushambi",
      "Siddharth Vihar",
      "Govindpuram",
    ],
    keyServices: [
      {
        title: "RO Repair & Diagnostics",
        description:
          "Resolving pump pressure issues, SMPS power adapter trips, continuous reject drainage, and leaks.",
        href: "/services/ro-repair",
      },
      {
        title: "Pre-Filter & Carbon Change",
        description:
          "Replacing heavy-sediment external candles, inline pre-carbon blocks, and taste polishing filters.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "Installing high-grade 75/80 GPD TFC membranes suited to handle high-mineral water.",
        href: "/services/membrane-replacement",
      },
      {
        title: "Periodic Tune-Up & Sanitization",
        description:
          "Comprehensive health audits, tank cleaning, TDS calibration, and pressure testing.",
        href: "/services/ro-maintenance",
      },
    ],
    localContext: {
      residentialNeeds:
        "High-density apartment complexes in Indirapuram and Raj Nagar Extension require frequent sediment filter inspections due to heavy mineral sediment in groundwater.",
      commercialNeeds:
        "Small businesses, private clinics, and local eateries require regular sanitization and timely consumable replacement to maintain hygienic drinking water.",
      commonPurifierTypes:
        "High-recovery Mineral RO systems with 7 to 10 liter storage tanks and TDS balance valves.",
    },
    faqs: [
      {
        question: "Why does my RO membrane in Ghaziabad require replacement every 12–18 months?",
        answer:
          "High incoming TDS and mineral hardness in Ghaziabad groundwater cause accelerated mineral scale (calcium/magnesium carbonate) deposition on membrane pores, requiring more frequent servicing than in low-TDS river water areas.",
      },
      {
        question: "Do you service residential societies in Indirapuram and Vaishali?",
        answer:
          "Yes, we provide coordinated technician service across all major societies in Indirapuram, Vaishali, Vasundhara, and Raj Nagar Extension.",
      },
      {
        question: "What should I do if my purifier's reject water is running continuously?",
        answer:
          "Continuous reject water discharge is usually caused by a stuck auto shut-off valve (ASV) or a failing solenoid valve (SV) that doesn't seal when the storage tank is full. A technician can inspect and replace the faulty valve.",
      },
    ],
    relatedLocationIds: ["noida", "delhi", "uttar-pradesh"],
    lastReviewedDate: "2026-11-14",
  },

  // 5. HAUZ KHAS (Locality in Delhi)
  {
    id: "delhi-hauz-khas",
    name: "Hauz Khas",
    type: "locality",
    slug: "hauz-khas",
    parentSlug: "delhi",
    pathSegments: ["delhi", "hauz-khas"],
    path: "/locations/delhi/hauz-khas",
    status: "published",
    stateName: "Delhi",
    cityName: "Delhi",
    metaTitle: "RO Water Purifier Service & Repair in Hauz Khas, Delhi",
    metaDescription:
      "Doorstep RO purifier repair, filter replacement, and maintenance in Hauz Khas, South Delhi. Servicing Kent, Aquaguard, Pureit, AO Smith, and all brands.",
    canonical: "https://no1roservice.in/locations/delhi/hauz-khas",
    h1: "RO Water Purifier Service & Repair in Hauz Khas",
    introduction:
      "Hauz Khas is one of South Delhi's premier residential and cultural neighborhoods, featuring independent houses, designer apartments, cafes, and boutique commercial establishments. Residents expect high-quality drinking water and dependable maintenance for their premium water purifiers.",
    waterQualityNote:
      "Water supply in Hauz Khas blends municipal line water with local South Delhi booster infrastructure. While TDS is generally moderate compared to outer sectors, seasonal pipeline maintenance and storage tank sediment make regular sediment pre-filter changes essential for consistent taste.",
    serviceAvailability: {
      status: "active",
      label: "Active Locality Coverage",
      description:
        "Fast doorstep service across Hauz Khas Enclave, Hauz Khas Village, Mayfair Gardens, and adjoining South Delhi pockets.",
    },
    coverageLocalities: [
      "Hauz Khas Enclave",
      "Hauz Khas Village",
      "Mayfair Gardens",
      "Padmini Enclave",
      "Kaushalya Park",
      "Sarvapriya Vihar",
    ],
    keyServices: [
      {
        title: "RO Repair & Diagnostics",
        description:
          "Troubleshooting internal leaks, booster pump noise, and power adapter failures.",
        href: "/services/ro-repair",
      },
      {
        title: "Filter Cartridge Replacement",
        description:
          "Replacing spun sediment candles, inline carbon blocks, and post-carbon taste enhancers.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "High-rejection 75/80 GPD TFC membrane replacement with calibrated TDS testing.",
        href: "/services/membrane-replacement",
      },
      {
        title: "Under-Sink Purifier Installation",
        description:
          "Specialized under-counter mounting, faucet installation, and leak-free plumbing.",
        href: "/services/ro-installation",
      },
    ],
    localContext: {
      residentialNeeds:
        "High concentration of modular under-sink purifiers, hot-and-ambient units, and premium stainless-steel tank systems requiring careful handling and genuine-compatible cartridges.",
      commercialNeeds:
        "Boutique cafes, art studios, and design offices requiring periodic commercial water filter tune-ups and sanitization.",
      commonPurifierTypes:
        "AO Smith Green RO, Kent Grand Plus, Aquaguard Active Copper, and under-the-counter purifiers.",
    },
    faqs: [
      {
        question: "Can you service under-counter RO systems in Hauz Khas apartments?",
        answer:
          "Yes. Our technicians are experienced in handling compact under-sink filtration manifolds, pressurized storage tanks, and countertop faucets common in modern Hauz Khas kitchens.",
      },
      {
        question: "How do I book an RO service visit in Hauz Khas?",
        answer:
          "Submit your request through our online booking page specifying your address in Hauz Khas, your purifier brand, and the reported issue. We coordinate appointment slots directly.",
      },
      {
        question: "Do you supply compatible filters for premium brands like AO Smith and Kent in Hauz Khas?",
        answer:
          "Yes, we carry high-grade, certified food-grade compatible cartridges, membranes, and replacement fittings for all popular brands.",
      },
    ],
    relatedLocationIds: ["delhi", "noida", "ghaziabad"],
    lastReviewedDate: "2026-11-14",
  },

  // 6. SECTOR 62 NOIDA (Locality in Noida)
  {
    id: "noida-sector-62",
    name: "Sector 62 Noida",
    type: "locality",
    slug: "sector-62",
    parentSlug: "noida",
    pathSegments: ["noida", "sector-62"],
    path: "/locations/noida/sector-62",
    status: "published",
    stateName: "Uttar Pradesh",
    cityName: "Noida",
    metaTitle: "RO Water Purifier Service & Repair in Sector 62 Noida",
    metaDescription:
      "Doorstep RO purifier repair, maintenance, and filter replacement in Sector 62 Noida. Serving Rajat Vihar, designer societies, and commercial institutions.",
    canonical: "https://no1roservice.in/locations/noida/sector-62",
    h1: "RO Water Purifier Service & Repair in Sector 62 Noida",
    introduction:
      "Sector 62 is a prominent institutional, commercial, and residential hub in Central Noida, home to established residential societies (like Rajat Vihar and multiple high-rise complexes) along with institutional campuses and IT parks. Reliable water purification is indispensable for both family households and commercial workspaces.",
    waterQualityNote:
      "Sector 62 receives water through central overhead distribution reservoirs with variable ground-source blending. Tap water can carry fine suspended silt from overhead lines and moderate-to-high dissolved mineral hardness, making routine pre-candle inspection vital to protect purifier components.",
    serviceAvailability: {
      status: "active",
      label: "Active Locality Coverage",
      description:
        "Dedicated doorstep service covering residential societies, institutional campuses, and commercial offices across Sector 62.",
    },
    coverageLocalities: [
      "Rajat Vihar",
      "Kailash Dham",
      "Shakti Kunj",
      "Meghdootam",
      "Stellar IT Park Area",
      "Institutional Area Blocks A–C",
    ],
    keyServices: [
      {
        title: "RO Repair & Troubleshooting",
        description:
          "Troubleshooting booster pumps, SMPS adapters, solenoid valves, and auto-cutoff floats.",
        href: "/services/ro-repair",
      },
      {
        title: "Filter Cartridge Replacement",
        description:
          "Replacing choked external spun candles, sediment cartridges, and activated carbon blocks.",
        href: "/services/filter-replacement",
      },
      {
        title: "RO Membrane Replacement",
        description:
          "Installing 75/80 GPD TFC RO membranes with proper flow restrictor matching.",
        href: "/services/membrane-replacement",
      },
      {
        title: "Commercial RO Maintenance",
        description:
          "Service for 25 to 50 LPH commercial purifiers in office spaces and institutional kitchens.",
        href: "/services/ro-maintenance",
      },
    ],
    localContext: {
      residentialNeeds:
        "Apartment families in Sector 62 require timely external spun filter changes every 3 months to prevent mud deposits from choking internal carbon blocks.",
      commercialNeeds:
        "IT offices, corporate branches, and institutes require routine sanitization and filter servicing for office water dispensers.",
      commonPurifierTypes:
        "Wall-mounted domestic RO+UV purifiers (Kent, Pureit, Aquaguard) and light commercial RO systems.",
    },
    faqs: [
      {
        question: "How quickly can a technician visit my society in Sector 62 Noida?",
        answer:
          "We coordinate daily technician schedules across Sector 62 societies. Once you share your society details and service needs, our team confirms a convenient appointment time.",
      },
      {
        question: "Can you replace pre-filter candles for Rajat Vihar and nearby Sector 62 societies?",
        answer:
          "Yes, we supply and replace standard 10-inch spun polypropylene pre-filters, inline carbon blocks, and RO membranes for all domestic purifier models in the area.",
      },
      {
        question: "Do you maintain commercial water purifiers in Sector 62 office buildings?",
        answer:
          "Yes, we provide maintenance and filter replacement for 25 to 50 LPH commercial RO systems operating in office pantries and corporate facilities.",
      },
    ],
    relatedLocationIds: ["noida", "ghaziabad", "delhi"],
    lastReviewedDate: "2026-11-14",
  },

  // 7. GURUGRAM (Draft record - to demonstrate publication lifecycle)
  {
    id: "gurugram",
    name: "Gurugram",
    type: "city",
    slug: "gurugram",
    pathSegments: ["gurugram"],
    path: "/locations/gurugram",
    status: "draft",
    stateName: "Haryana",
    cityName: "Gurugram",
    metaTitle: "RO Water Purifier Service in Gurugram (Draft)",
    metaDescription: "Draft record for Gurugram RO service planning.",
    canonical: "https://no1roservice.in/locations/gurugram",
    h1: "RO Water Purifier Service in Gurugram",
    introduction: "Draft location profile pending service coverage validation.",
    waterQualityNote: "Water quality data pending validation.",
    serviceAvailability: {
      status: "planning",
      label: "Service Planning",
      description: "Coverage verification in progress.",
    },
    keyServices: [],
    localContext: {
      residentialNeeds: "Pending assessment.",
      commercialNeeds: "Pending assessment.",
      commonPurifierTypes: "Pending assessment.",
    },
    faqs: [],
    relatedLocationIds: [],
    lastReviewedDate: "2026-11-14",
  },

  // 8. FARIDABAD (Review record - to demonstrate publication lifecycle)
  {
    id: "faridabad",
    name: "Faridabad",
    type: "city",
    slug: "faridabad",
    pathSegments: ["faridabad"],
    path: "/locations/faridabad",
    status: "review",
    stateName: "Haryana",
    cityName: "Faridabad",
    metaTitle: "RO Water Purifier Service in Faridabad (Review)",
    metaDescription: "Review record for Faridabad RO service planning.",
    canonical: "https://no1roservice.in/locations/faridabad",
    h1: "RO Water Purifier Service in Faridabad",
    introduction: "Profile currently under editorial review.",
    waterQualityNote: "Water quality data under review.",
    serviceAvailability: {
      status: "planning",
      label: "Review Stage",
      description: "Editorial validation in progress.",
    },
    keyServices: [],
    localContext: {
      residentialNeeds: "Pending review.",
      commercialNeeds: "Pending review.",
      commonPurifierTypes: "Pending review.",
    },
    faqs: [],
    relatedLocationIds: [],
    lastReviewedDate: "2026-11-14",
  },
];

// Helper Query Functions
export function getAllLocations(): LocationRecord[] {
  return locationsData;
}

export function getPublishedLocations(): LocationRecord[] {
  return locationsData.filter((loc) => loc.status === "published");
}

export function getLocationByPathSegments(
  segments: string[]
): LocationRecord | undefined {
  const targetPath = "/" + ["locations", ...segments].join("/");
  return locationsData.find(
    (loc) => loc.path === targetPath && loc.status === "published"
  );
}

export function getLocationById(id: string): LocationRecord | undefined {
  return locationsData.find((loc) => loc.id === id);
}

export function getPublishedChildLocations(
  parentId: string
): LocationRecord[] {
  return locationsData.filter(
    (loc) =>
      loc.status === "published" &&
      (loc.parentSlug === parentId ||
        (loc.cityName && loc.cityName.toLowerCase() === parentId.toLowerCase() && loc.id !== parentId) ||
        (loc.stateName && loc.stateName.toLowerCase().replace(/\s+/g, "-") === parentId.toLowerCase() && loc.type === "city"))
  );
}
