const SITE_URL = 'https://r3boot.in'

type ServiceSchemaProps = {
  serviceName: string
  description: string
  serviceUrl?: string
}

export default function ServiceSchema({
  serviceName,
  description,
  serviceUrl,
}: ServiceSchemaProps) {
  const url = serviceUrl ?? SITE_URL
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
