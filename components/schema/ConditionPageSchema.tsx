import { PHYSIO_SESSION_MINUTES, PHYSIO_SESSION_PRICE } from '@/lib/physio/pricing'

const SITE_URL = 'https://www.r3boot.in'

type Props = {
  /** Page path, e.g. /services/physiotherapy/back-pain */
  path: string
  /** Same string as the page <title>. */
  title: string
  description: string
  /** Condition name as patients say it, e.g. "Back pain". */
  condition: string
  /** Other names people search for: "Lower back pain", "Sciatica", "Slipped disc". */
  alternateNames?: string[]
  /** Body area, e.g. "Lumbar spine". */
  anatomy?: string
  /** Hero image path or URL. */
  image?: string
  /**
   * Only set when a named clinician has actually reviewed the page.
   * Never fill this in as a placeholder.
   */
  reviewedBy?: { name: string; jobTitle: string; date: string }
  /** ISO date of the last real content change. Bump it when the copy changes, not on every deploy. */
  dateModified?: string
}

/** Last substantive update of the condition page copy (Nov 2026 rebuild). */
const CONTENT_UPDATED = '2026-11-11'

/**
 * Structured data for a physiotherapy condition page: MedicalWebPage about a MedicalCondition,
 * plus the bookable Service with its price. Pair with FAQSchema and BreadcrumbSchema.
 */
export default function ConditionPageSchema({
  path,
  title,
  description,
  condition,
  alternateNames = [],
  anatomy,
  image,
  reviewedBy,
  dateModified = CONTENT_UPDATED,
}: Props) {
  const url = `${SITE_URL}${path}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : undefined

  const graph = [
    {
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'en-IN',
      dateModified,
      specialty: 'https://schema.org/Physiotherapy',
      ...(imageUrl ? { primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl } } : {}),
      about: { '@id': `${url}#condition` },
      mainEntity: { '@id': `${url}#service` },
      ...(reviewedBy
        ? {
            lastReviewed: reviewedBy.date,
            reviewedBy: { '@type': 'Person', name: reviewedBy.name, jobTitle: reviewedBy.jobTitle },
          }
        : {}),
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${url}#condition`,
      name: condition,
      ...(alternateNames.length ? { alternateName: alternateNames } : {}),
      ...(anatomy ? { associatedAnatomy: { '@type': 'AnatomicalStructure', name: anatomy } } : {}),
      possibleTreatment: { '@type': 'PhysicalTherapy', name: 'Physiotherapy' },
      relevantSpecialty: 'https://schema.org/Physiotherapy',
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `Physiotherapy for ${condition.toLowerCase()}`,
      serviceType: 'Physiotherapy',
      description,
      url,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'City', name: 'Mumbai' },
      offers: {
        '@type': 'Offer',
        price: PHYSIO_SESSION_PRICE,
        priceCurrency: 'INR',
        description: `${PHYSIO_SESSION_MINUTES}-minute physiotherapy session. First visit includes assessment and treatment.`,
        availability: 'https://schema.org/InStock',
      },
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
