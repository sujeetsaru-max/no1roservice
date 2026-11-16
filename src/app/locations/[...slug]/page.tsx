import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocationByPathSegments,
  getPublishedLocations,
} from "@/data/locationsData";
import { LocationPageTemplate } from "@/components/locations/LocationPageTemplate";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const publishedLocations = getPublishedLocations();
  return publishedLocations.map((loc) => ({
    slug: loc.pathSegments,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocationByPathSegments(resolvedParams.slug);

  if (!location || location.status !== "published") {
    notFound();
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: location.canonical,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: location.canonical,
      siteName: "No.1 RO Service",
      type: "website",
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = getLocationByPathSegments(resolvedParams.slug);

  // Strict enforcement: Only published locations with confirmed content are displayed.
  // Drafts, review stages, archived profiles, or non-existent URLs return 404 notFound().
  if (!location || location.status !== "published") {
    notFound();
  }

  return <LocationPageTemplate location={location} />;
}
