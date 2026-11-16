import React from "react";
import { ServiceDetail } from "@/data/servicesData";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceIncludes } from "@/components/services/ServiceIncludes";
import { ServiceWhenNeeded } from "@/components/services/ServiceWhenNeeded";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceCta } from "@/components/services/ServiceCta";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* 1. Service Hero */}
      <ServiceHero
        eyebrow={service.eyebrow}
        h1={service.h1}
        description={service.heroDescription}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
      />

      {/* 2. Service Overview */}
      <ServiceOverview
        heading={service.overviewHeading}
        paragraphs={service.overviewParagraphs}
        highlights={service.overviewHighlights}
      />

      {/* 3. Common Problems / Requirements */}
      <ServiceProblems
        heading={service.problemsHeading}
        intro={service.problemsIntro}
        problems={service.problems}
      />

      {/* 4. What the Service Includes */}
      <ServiceIncludes
        heading={service.includesHeading}
        intro={service.includesIntro}
        includedItems={service.includedItems}
      />

      {/* 5. When Do You Need This Service? */}
      <ServiceWhenNeeded
        heading={service.whenNeededHeading}
        intro={service.whenNeededIntro}
        signs={service.whenNeededSigns}
      />

      {/* 6. Related Services */}
      <RelatedServices relatedServiceIds={service.relatedServiceIds} />

      {/* 7. FAQ Section */}
      <ServiceFaq faqs={service.faqs} serviceTitle={service.h1} />

      {/* 8. Final CTA */}
      <ServiceCta />
    </>
  );
}
