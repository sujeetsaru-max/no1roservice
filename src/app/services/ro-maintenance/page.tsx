import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesDataMap } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

const service = servicesDataMap["ro-maintenance"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: {
    canonical: service.canonical,
  },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: service.canonical,
    siteName: "No.1 RO Service",
    type: "website",
    images: [
      {
        url: service.heroImage,
        alt: service.heroImageAlt,
      },
    ],
  },
};

export default function RoMaintenancePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
