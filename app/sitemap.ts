import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/sanity/lib/client";
import { services } from "@/lib/services";

const BASE_URL = "https://www.r3boot.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/services`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    { url: `${BASE_URL}/privacy`, lastModified: new Date() },
    { url: `${BASE_URL}/terms`, lastModified: new Date() },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const postSlugs = await getPostSlugs();
    blogPages = postSlugs.map(({ slug }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
    }));
  } catch {
    // Sanity unavailable; sitemap still returns static + service URLs
  }

  return [...staticPages, ...servicePages, ...blogPages];
}
