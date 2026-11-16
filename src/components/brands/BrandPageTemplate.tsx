import React from "react";
import { BrandDetail } from "@/data/brandsData";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandOverview } from "@/components/brands/BrandOverview";
import { BrandServices } from "@/components/brands/BrandServices";
import { BrandCommonProblems } from "@/components/brands/BrandCommonProblems";
import { BrandMaintenance } from "@/components/brands/BrandMaintenance";
import { BrandFaq } from "@/components/brands/BrandFaq";
import { RelatedBrands } from "@/components/brands/RelatedBrands";
import { BrandCta } from "@/components/brands/BrandCta";

interface BrandPageTemplateProps {
  brand: BrandDetail;
}

export function BrandPageTemplate({ brand }: BrandPageTemplateProps) {
  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://no1roservice.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "RO Brands",
        item: "https://no1roservice.in/brands",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: brand.canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Brand Hero */}
      <BrandHero
        brandName={brand.name}
        badge={brand.badge}
        tagline={brand.tagline}
        heroImage={brand.heroImage}
        heroImageAlt={brand.heroImageAlt}
      />

      {/* 2. Brand Overview & Tech */}
      <BrandOverview
        brandName={brand.name}
        overview={brand.overview}
        popularModels={brand.popularModels}
        filterSpecs={brand.filterSpecs}
      />

      {/* 3. Services Offered */}
      <BrandServices
        brandName={brand.name}
        services={brand.servicesOffered}
      />

      {/* 4. Common Problems & Symptoms */}
      <BrandCommonProblems
        brandName={brand.name}
        problems={brand.commonProblems}
      />

      {/* 5. Preventive Maintenance Best Practices */}
      <BrandMaintenance
        brandName={brand.name}
        guidance={brand.maintenanceGuidance}
      />

      {/* 6. Brand FAQ */}
      <BrandFaq brandName={brand.name} faqs={brand.faqs} />

      {/* 7. Related Brands */}
      <RelatedBrands relatedBrandIds={brand.relatedBrandIds} />

      {/* 8. Conversion CTA */}
      <BrandCta brandName={brand.name} />
    </>
  );
}
