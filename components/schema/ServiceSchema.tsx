const SITE_URL = 'https://www.r3boot.in'

type ServiceSchemaProps = {
  serviceName: string
  description: string
  serviceUrl?: string
  areaServed?: string
}

export default function ServiceSchema({
  serviceName,
  description,
  serviceUrl,
  areaServed = 'Mumbai',
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
      '@type': 'Place',
      name: areaServed,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
