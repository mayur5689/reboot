const SITE_URL = 'https://www.r3boot.in'

export default function LowerParelBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'PhysicalTherapist', 'HealthClub'],
    '@id': `${SITE_URL}/#organization-lower-parel`,
    name: 'R3boot | Integrated Recovery Center - Lower Parel',
    legalName: 'R3boot Activelife Pvt Ltd',
    alternateName: 'R3BOOT Recovery Center Lower Parel',
    url: SITE_URL,
    logo: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1773062628/R3boot_Logo_za7ymb.png',
    description: 'R3boot Lower Parel. Clinical physiotherapy, contrast therapy (ice bath + infrared sauna), sports massage, clinical Pilates, and counselling in Lower Parel, Mumbai.',
    telephone: '+919702368612',
    email: 'info.r3boot@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lodha Signet, A-303, Senapati Bapat Marg, West',
      addressLocality: 'Lower Parel',
      addressRegion: 'Maharashtra',
      postalCode: '400013',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0031084,
      longitude: 72.8267492,
    },
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:15', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday'], opens: '07:15', closes: '15:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '15:30', closes: '21:00' },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Lower Parel' },
      { '@type': 'Place', name: 'Prabhadevi' },
      { '@type': 'Place', name: 'Worli' },
      { '@type': 'Place', name: 'Bandra Kurla Complex' },
      { '@type': 'Place', name: 'Mumbai' },
    ],
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
