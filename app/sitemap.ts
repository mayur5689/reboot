import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/sanity/lib/client'

const BASE_URL = 'https://www.r3boot.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const postSlugs = await getPostSlugs()
    blogPages = postSlugs.map(({ slug }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch {
    // Sanity unavailable at build time; blog posts omitted from sitemap
  }

  return [
    // Homepage
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core pages
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },

    // Service pages (core)
    {
      url: `${BASE_URL}/services/physiotherapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/hydrotherapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/contrast-therapy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/sports-massage`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/sports-psychology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/clinical-pilates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/counselling-mental-training`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // SEO landing pages (dedicated transactional pages)
    {
      url: `${BASE_URL}/sports-massage-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contrast-therapy-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Add future landing pages here as you build them:
    // physiotherapy-dadar-mumbai
    // hydrotherapy-sports-injury-mumbai
    // sports-psychology-mumbai

    // Blog posts (dynamic from Sanity)
    ...blogPages,
  ]
}
