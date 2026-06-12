import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export { urlFor } from './image'

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      excerpt,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title
    }`
  )
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      body,
      excerpt,
      metaDescription,
      publishedAt,
      "author": author->name,
      "authorImage": author->image,
      "categories": categories[]->title,
      faqs
    }`,
    { slug }
  )
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    `*[_type == "post"] { "slug": slug.current }`
  )
}
