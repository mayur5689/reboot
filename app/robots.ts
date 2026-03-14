import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/studio/'],
      },
    ],
    sitemap: 'https://www.r3boot.in/sitemap.xml',
  }
}
