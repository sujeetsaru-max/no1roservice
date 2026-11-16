import React from "react";
import { LocationRecord, getPublishedChildLocations } from "@/data/locationsData";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationOverview } from "@/components/locations/LocationOverview";
import { LocationServices } from "@/components/locations/LocationServices";
import { LocationCoverage } from "@/components/locations/LocationCoverage";
import { LocationFaq } from "@/components/locations/LocationFaq";
import { RelatedLocations } from "@/components/locations/RelatedLocations";
import { LocationCta } from "@/components/locations/LocationCta";

interface LocationPageTemplateProps {
  location: LocationRecord;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  // Get any published child locations (e.g. localities in Delhi or sectors in Noida)
  const childLocations = getPublishedChildLocations(location.id);

  // Construct JSON-LD Breadcrumbs
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://no1roservice.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://no1roservice.in/locations",
    },
  ];

  if (location.parentSlug) {
    breadcrumbElements.push({
      "@type": "ListItem",
      position: 3,
      name: location.parentSlug.replace("-", " "),
      item: `https://no1roservice.in/locations/${location.parentSlug}`,
    });
    breadcrumbElements.push({
      "@type": "ListItem",
      position: 4,
      name: location.name,
      item: location.canonical,
    });
  } else {
    breadcrumbElements.push({
      "@type": "ListItem",
      position: 3,
      name: location.name,
      item: location.canonical,
    });
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbElements,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Location Hero */}
      <LocationHero location={location} />

      {/* 2. Water Quality & Regional Overview */}
      <LocationOverview location={location} />

      {/* 3. RO Services Available */}
      <LocationServices
        locationName={location.name}
        services={location.keyServices}
      />

      {/* 4. Localities / Sectors Coverage Reach */}
      <LocationCoverage
        location={location}
        childLocations={childLocations}
      />

      {/* 5. Location FAQ */}
      <LocationFaq locationName={location.name} faqs={location.faqs} />

      {/* 6. Related Nearby Locations */}
      <RelatedLocations relatedLocationIds={location.relatedLocationIds} />

      {/* 7. Conversion CTA */}
      <LocationCta locationName={location.name} />
    </>
  );
}
