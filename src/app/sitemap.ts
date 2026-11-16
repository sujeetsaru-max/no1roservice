import type { MetadataRoute } from "next";
import { servicesDataMap } from "@/data/servicesData";
import { brandsDataMap } from "@/data/brandsData";
import { getPublishedLocations } from "@/data/locationsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://no1roservice.in";
  const currentDate = new Date();

  // 1. Core Primary Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // 2. Individual Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(
    servicesDataMap
  ).map((service) => ({
    url: `${baseUrl}${service.href}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 3. Individual Brand Pages
  const brandRoutes: MetadataRoute.Sitemap = Object.values(brandsDataMap).map(
    (brand) => ({
      url: `${baseUrl}${brand.href}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  // 4. Published Locations Only (Strictly excludes drafts, reviews, and archives)
  const publishedLocations = getPublishedLocations();
  const locationRoutes: MetadataRoute.Sitemap = publishedLocations.map(
    (location) => ({
      url: `${baseUrl}${location.path}`,
      lastModified: new Date(location.lastReviewedDate),
      changeFrequency: "weekly",
      priority: 0.75,
    })
  );

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...locationRoutes,
  ];
}
