const SITE_URL = 'https://r3boot.in'

type ReviewItem = {
  name: string
  rating: number
  service: string
  date: string
  text: string
  avatar?: string
}

type ReviewSchemaProps = {
  reviews: ReviewItem[]
  aggregateRating?: number
  reviewCount?: number
}

export default function ReviewSchema({
  reviews,
  aggregateRating = 5,
  reviewCount = reviews.length,
}: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'R3BOOT',
    url: SITE_URL,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      datePublished: review.date,
      itemReviewed: {
        '@type': 'Service',
        name: review.service,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      reviewBody: review.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
