type BlogPostingSchemaProps = {
  title: string
  description: string
  slug: string
  publishedAt: string
  authorName?: string
  imageUrl?: string
}

export default function BlogPostingSchema({
  title,
  description,
  slug,
  publishedAt,
  authorName,
  imageUrl,
}: BlogPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `https://www.r3boot.in/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: authorName
      ? { '@type': 'Person', name: authorName }
      : { '@type': 'Organization', name: 'R3BOOT' },
    publisher: {
      '@type': 'Organization',
      name: 'R3BOOT',
      url: 'https://www.r3boot.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.r3boot.in/logo.png',
      },
    },
    ...(imageUrl ? { image: [imageUrl] } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.r3boot.in/blog/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
