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
      url: `${BASE_URL}/services/clinical-pilates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
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
    {
      url: `${BASE_URL}/sports-massage-runners-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/clinical-pilates-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ice-bath-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/physiotherapy-dadar-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pain + sports massage landing pages
    {
      url: `${BASE_URL}/back-pain-sports-massage-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/knee-pain-sports-massage-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/neck-shoulder-pain-sports-massage-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Location + sports massage landing pages
    {
      url: `${BASE_URL}/sports-massage-dadar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sports-massage-bandra`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/sports-massage-lower-parel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Clinical Pilates pain pages
    {
      url: `${BASE_URL}/back-pain-clinical-pilates-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/scoliosis-pilates-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/post-surgery-pilates-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Clinical Pilates location pages
    {
      url: `${BASE_URL}/clinical-pilates-dadar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/clinical-pilates-bandra`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/clinical-pilates-worli`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Blog posts (dynamic from Sanity)
    ...blogPages,
  ]
}
