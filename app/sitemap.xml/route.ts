import { NextResponse } from "next/server";
import { getPostSlugs } from "@/sanity/lib/client";
import { services } from "@/lib/services";

const BASE_URL = "https://www.r3boot.in";

export async function GET() {
  const staticUrls = [
    "",
    "/about",
    "/services",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const urls: string[] = [
    ...staticUrls.map((path) => `${BASE_URL}${path}`),
    ...services.map((s) => `${BASE_URL}/services/${s.slug}`),
  ];

  try {
    const postSlugs = await getPostSlugs();
    postSlugs.forEach(({ slug }) => urls.push(`${BASE_URL}/blog/${slug}`));
  } catch {
    // If Sanity fails, sitemap still returns static + service URLs
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
