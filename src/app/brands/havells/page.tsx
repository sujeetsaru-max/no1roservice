import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brandsDataMap } from "@/data/brandsData";
import { BrandPageTemplate } from "@/components/brands/BrandPageTemplate";

const brand = brandsDataMap["havells"];

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  alternates: {
    canonical: brand.canonical,
  },
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    url: brand.canonical,
    siteName: "No.1 RO Service",
    type: "website",
    images: [
      {
        url: brand.heroImage,
        alt: brand.heroImageAlt,
      },
    ],
  },
};

export default function HavellsBrandPage() {
  if (!brand) notFound();
  return <BrandPageTemplate brand={brand} />;
}
