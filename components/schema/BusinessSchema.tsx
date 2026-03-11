const SITE_URL = 'https://r3boot.in'

export default function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'R3BOOT',
    alternateName: 'R3BOOT Recovery Center',
    url: SITE_URL,
    logo: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1773062628/R3boot_Logo_za7ymb.png',
    description: "India's First Integrated Recovery Centre. Clinical physiotherapy, sports massage, and performance recovery in Dadar, Mumbai.",
    telephone: '+919702368612',
    email: 'info.r3boot@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palai Plaza, 203, Swami Gyan Jivandas Marg',
      addressLocality: 'Dadar East',
      addressRegion: 'Mumbai',
      postalCode: '400014',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0176,
      longitude: 72.8441,
    },
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI',
    openingHours: 'Mo-Su 09:00-20:00',
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919702368612',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'English, Hindi',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
