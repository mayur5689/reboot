import Link from 'next/link'

export const PHYSIO_CONDITIONS = [
  {
    href: '/services/physiotherapy/back-pain',
    label: 'Back Pain',
    detail: 'Disc bulge, sciatica, desk-posture pain',
  },
  {
    href: '/services/physiotherapy/knee-pain',
    label: 'Knee Pain',
    detail: "Runner's knee, ligament injury, arthritis",
  },
  {
    href: '/services/physiotherapy/neck-pain',
    label: 'Neck Pain',
    detail: 'Stiff neck, cervical disc, posture strain',
  },
  {
    href: '/services/physiotherapy/shoulder-pain',
    label: 'Shoulder Pain',
    detail: 'Frozen shoulder, rotator cuff, impingement',
  },
  {
    href: '/services/physiotherapy/sports-injuries',
    label: 'Sports Injuries',
    detail: 'Sprains, strains, return to sport',
  },
  {
    href: '/services/physiotherapy/post-surgery',
    label: 'Post-Surgery Rehab',
    detail: 'ACL, knee and hip replacement recovery',
  },
] as const

type Props = {
  eyebrow?: string
  heading?: string
  subheading?: string
  className?: string
  /** hrefs to leave out, e.g. the current page */
  exclude?: string[]
}

/** Condition entry points for physiotherapy. Used high on the hub and on location pages. */
export function PhysioConditionGrid({
  eyebrow = 'Find your condition',
  heading = 'What brings you in?',
  subheading = 'Pick the closest match to see how we assess and treat it.',
  className = '',
  exclude = [],
}: Props) {
  return (
    <section
      id="conditions"
      aria-labelledby="physio-conditions-heading"
      className={`py-12 sm:py-16 bg-white dark:bg-[#0A0A0A] ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-6 sm:mb-8">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-3 block">
            {eyebrow}
          </span>
          <h2
            id="physio-conditions-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2"
          >
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{subheading}</p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PHYSIO_CONDITIONS.filter((c) => !exclude.includes(c.href)).map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-[#F8F9FA] dark:bg-white/[0.04] p-4 sm:p-5 transition-colors hover:border-[#513394]/40 dark:hover:border-[#A78BFA]/40"
              >
                <span className="min-w-0">
                  <span className="block font-black text-[15px] sm:text-[17px] text-gray-900 dark:text-white leading-snug group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">
                    {c.label}
                  </span>
                  <span className="mt-1 block text-[12px] sm:text-sm text-gray-500 dark:text-gray-400 leading-snug">
                    {c.detail}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 mt-0.5 text-[#513394] dark:text-[#A78BFA] transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
