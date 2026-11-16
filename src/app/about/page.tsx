import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutApproach } from "@/components/about/AboutApproach";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { ServiceValuesSection } from "@/components/about/ServiceValuesSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about No.1 RO Service, our practical approach to RO care, our mission, vision, and core service values for domestic and commercial water purifiers.",
  alternates: {
    canonical: "https://no1roservice.in/about",
  },
  openGraph: {
    title: "About Us | No.1 RO Service",
    description:
      "Helping you make every drop count. Learn about our practical approach to RO water purifier care.",
    url: "/about",
    siteName: "No.1 RO Service",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutApproach />
      <MissionVisionSection />
      <ServiceValuesSection />
      <AboutCtaSection />
    </>
  );
}
