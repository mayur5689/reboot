const SITE_URL = 'https://www.r3boot.in'

export default function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'PhysicalTherapist', 'HealthClub'],
    '@id': `${SITE_URL}/#organization`,
    name: 'R3boot | Integrated Recovery Center',
    legalName: 'R3boot Activelife Pvt Ltd',
    alternateName: 'R3BOOT Recovery Center',
    url: SITE_URL,
    logo: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1773062628/R3boot_Logo_za7ymb.png',
    description: "Dadar's integrated recovery centre. Clinical physiotherapy, contrast therapy (ice bath + infrared sauna), sports massage, clinical Pilates, and aquatic rehab in Dadar East, Mumbai.",
    telephone: '+919702368612',
    email: 'info.r3boot@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Palai Plaza, 203, Swami Gyan Jivandas Marg',
      addressLocality: 'Dadar East',
      addressRegion: 'Maharashtra',
      postalCode: '400014',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0165473,
      longitude: 72.8459274,
    },
    hasMap: 'https://maps.google.com/?cid=3927524433644528268',
    sameAs: [
      'https://maps.google.com/?cid=3927524433644528268',
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday'], opens: '08:00', closes: '16:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '14:00', closes: '21:00' },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Dadar' },
      { '@type': 'Place', name: 'Dadar East' },
      { '@type': 'Place', name: 'Bandra' },
      { '@type': 'Place', name: 'Andheri' },
      { '@type': 'Place', name: 'Thane' },
      { '@type': 'Place', name: 'Mumbai' },
      { '@type': 'Place', name: 'Worli' },
      { '@type': 'Place', name: 'Lower Parel' },
      { '@type': 'Place', name: 'Bandra Kurla Complex' },
      { '@type': 'Place', name: 'Matunga' },
      { '@type': 'Place', name: 'Sion' },
      { '@type': 'Place', name: 'Parel' },
      { '@type': 'Place', name: 'Wadala' },
      { '@type': 'Place', name: 'Mahim' },
      { '@type': 'Place', name: 'Shivaji Park' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '80',
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919702368612',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
