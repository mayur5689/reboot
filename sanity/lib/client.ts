import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import env from '../../config/env'

export interface SanityPost {
    _id: string
    title: string
    slug: { current: string }
    mainImage?: SanityImageSource
    publishedAt: string
    excerpt?: string
    body?: unknown[]
    faqs?: unknown[]
    author?: string
    authorImage?: SanityImageSource
    categories?: string[]
}

export interface SanityPostSummary {
    _id: string
    title: string
    slug: { current: string }
    mainImage?: SanityImageSource
    publishedAt: string
    excerpt?: string
    author?: string
    categories?: string[]
}

export const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

// Helper function to fetch all posts
export async function getAllPosts(): Promise<SanityPostSummary[]> {
    return client.fetch<SanityPostSummary[]>(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      "author": author->name,
      "categories": categories[]->title
    }
  `)
}

// Lightweight fetch for sitemap: only post slugs
export async function getPostSlugs(): Promise<{ slug: string }[]> {
    return client.fetch(`
    *[_type == "post" && defined(slug.current)] { "slug": slug.current }
  `)
}

// Helper function to fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
    return client.fetch<SanityPost | null>(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      excerpt,
      faqs,
      "author": author->name,
      "authorImage": author->image,
      "categories": categories[]->title
    }
  `, { slug })
}
