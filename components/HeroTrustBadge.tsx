export type TrustBadgeIcon =
  | 'google'
  | 'clock'
  | 'user'
  | 'shield'
  | 'years'
  | 'check'
  | 'athletes'
  | 'droplet'
  | 'flame'
  | 'clipboard'
  | 'target'

export type TrustBadgeItem = {
  icon: TrustBadgeIcon
  value: string
  label: string
  description: string
  /** Show 5 yellow stars under the value (typically for Google Reviews). */
  stars?: boolean
}

export function Icon({ type, className = 'w-[18px] h-[18px]' }: { type: TrustBadgeIcon; className?: string }) {
  switch (type) {
    case 'google':
      return (
        <svg className={className} viewBox="0 0 48 48" aria-hidden>
          <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
          <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
          <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
          <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
        </svg>
      )
    case 'clock':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'user':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    case 'shield':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'years':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case 'check':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m7-4a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'athletes':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case 'droplet':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5c-3.5 4.2-6 7.3-6 10.2a6 6 0 0012 0c0-2.9-2.5-6-6-10.2z" />
        </svg>
      )
    case 'flame':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.5 2.5-1.5 3.5-1.5 5.5S12 12 12 12s1.5-1.5 1.5-3.5S12 5.5 12 3zM8.5 9.5C7 11.5 6 13.2 6 15a6 6 0 0012 0c0-1.8-1-3.5-2.5-5.5" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    case 'target':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      )
    default:
      return null
  }
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mt-1.5 mb-1.5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-[#FACC15]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function BadgeCell({
  item,
  index,
}: {
  item: TrustBadgeItem
  index: number
}) {
  const isGoogle = item.icon === 'google'
  const valueSize =
    item.value.length > 12 ? 'text-[18px] lg:text-[20px]' : item.value.length > 8 ? 'text-[20px]' : 'text-[22px]'

  return (
    <div
      className={`relative flex flex-col items-center text-center px-3 py-4 ${
        index % 2 === 1 ? 'border-l border-white/[0.12]' : ''
      } ${index >= 2 ? 'border-t border-white/[0.12] md:border-t-0' : ''} ${
        index > 0 ? 'md:border-l md:border-white/[0.12]' : ''
      }`}
    >
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center mb-2.5 border border-white/[0.1] ${
          isGoogle ? '' : 'text-[#A78BFA]'
        }`}
        style={{
          background: isGoogle
            ? 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.45) 70%)'
            : 'radial-gradient(circle at 50% 40%, rgba(167,139,250,0.16) 0%, rgba(0,0,0,0.45) 70%)',
          boxShadow: isGoogle
            ? '0 0 14px rgba(66,133,244,0.22), inset 0 1px 0 rgba(255,255,255,0.08)'
            : '0 0 16px rgba(167,139,250,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <Icon type={item.icon} />
      </div>
      <p className={`text-white font-black leading-none tracking-tight ${valueSize} ${item.stars ? '' : 'mb-1.5'}`}>
        {item.value}
      </p>
      {item.stars ? <Stars /> : null}
      <p className="text-white text-[12px] font-bold leading-none mb-1">{item.label}</p>
      <p className="text-white/40 text-[11px] leading-snug">{item.description}</p>
    </div>
  )
}

/** Compact glass trust bar for service heroes. Pass exactly 4 items for best layout. */
export function HeroTrustBadge({
  items,
  className = '',
}: {
  items: TrustBadgeItem[]
  className?: string
}) {
  const cells = items.slice(0, 4)

  return (
    <div className={`relative z-20 mt-10 mb-7 lg:mb-8 ${className || 'px-12 lg:px-16 xl:px-20'}`}>
      <div
        className="relative rounded-2xl border border-white/[0.12] overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(28,24,40,0.58) 0%, rgba(16,14,24,0.7) 100%)',
          backdropFilter: 'blur(18px) saturate(1.3)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
          boxShadow:
            '0 16px 40px rgba(0,0,0,0.35), 0 8px 24px rgba(81,51,148,0.28), 0 0 0 1px rgba(255,255,255,0.04) inset',
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-10 rounded-full blur-2xl opacity-60"
          style={{ background: 'radial-gradient(ellipse at center, rgba(123,95,202,0.45) 0%, transparent 70%)' }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4">
          {cells.map((item, i) => (
            <BadgeCell key={`${item.label}-${item.value}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Shared Google Reviews cell used across most service pages. */
export const googleReviewsBadge: TrustBadgeItem = {
  icon: 'google',
  value: '5.0',
  label: 'Google Reviews',
  description: '500+ Happy Clients',
  stars: true,
}

export const serviceTrustBadges: Record<string, TrustBadgeItem[]> = {
  'sports-psychology': [
    googleReviewsBadge,
    {
      icon: 'clock',
      value: '50 Min',
      label: 'Focused Sessions',
      description: 'Quality time. Real results.',
    },
    {
      icon: 'user',
      value: 'Specialist-Led',
      label: 'Mental Performance',
      description: 'Expert care. Measurable impact.',
    },
    {
      icon: 'shield',
      value: 'Confidential',
      label: 'Private Sessions',
      description: 'Your privacy. Our priority.',
    },
  ],
  physiotherapy: [
    googleReviewsBadge,
    {
      icon: 'years',
      value: '15+ Years',
      label: 'Clinical Experience',
      description: 'Evidence-led care you can trust.',
    },
    {
      icon: 'user',
      value: 'Physio-Led',
      label: 'Supervised Care',
      description: 'Qualified specialists every session.',
    },
    {
      icon: 'target',
      value: 'Root Cause',
      label: 'Treatment Approach',
      description: 'Fix the problem, not just pain.',
    },
  ],
  'aqua-therapy': [
    googleReviewsBadge,
    {
      icon: 'years',
      value: '15+ Years',
      label: 'Clinical Experience',
      description: 'Trusted aquatic rehab protocols.',
    },
    {
      icon: 'user',
      value: 'Physio-Led',
      label: 'One-to-One Care',
      description: 'Guided sessions, never unsupervised.',
    },
    {
      icon: 'droplet',
      value: 'Private Chamber',
      label: 'Dedicated Session',
      description: 'Low-impact recovery in water.',
    },
  ],
  'sports-massage': [
    googleReviewsBadge,
    {
      icon: 'athletes',
      value: '1000+',
      label: 'Athletes Treated',
      description: 'Performance-driven bodywork.',
    },
    {
      icon: 'check',
      value: 'Certified',
      label: 'Specialist Therapists',
      description: 'Cupping Level 1 & 2 trained.',
    },
    {
      icon: 'clipboard',
      value: 'Clinical Care',
      label: 'Not Spa Relaxation',
      description: 'Targeted recovery for training load.',
    },
  ],
  'clinical-pilates': [
    googleReviewsBadge,
    {
      icon: 'clock',
      value: '45–60 Min',
      label: 'Session Length',
      description: 'Structured, progressive sessions.',
    },
    {
      icon: 'user',
      value: 'Physio-Led',
      label: 'Clinical Pilates',
      description: 'Prescribed, not generic classes.',
    },
    {
      icon: 'target',
      value: 'Reformers',
      label: 'Mat + Equipment',
      description: 'Built around your assessment.',
    },
  ],
  'contrast-therapy': [
    googleReviewsBadge,
    {
      icon: 'years',
      value: '15+ Years',
      label: 'Clinical Experience',
      description: 'Protocols built for recovery.',
    },
    {
      icon: 'user',
      value: 'Physio-Led',
      label: 'Supervised Sessions',
      description: 'Guided heat and cold cycles.',
    },
    {
      icon: 'flame',
      value: 'Day & Night',
      label: 'Cycle Protocols',
      description: 'Matched to your training day.',
    },
  ],
  'athlete-screening': [
    googleReviewsBadge,
    {
      icon: 'clipboard',
      value: 'Full Body',
      label: 'MSK Assessment',
      description: 'History, gait, and special tests.',
    },
    {
      icon: 'user',
      value: 'Clinician-Led',
      label: 'Performance Screen',
      description: 'Not a generic fitness check.',
    },
    {
      icon: 'target',
      value: 'Clear Plan',
      label: 'Risk + Action Report',
      description: 'What to fix before it becomes injury.',
    },
  ],
}

export function getServiceTrustBadges(slug: string): TrustBadgeItem[] {
  return serviceTrustBadges[slug] ?? [
    googleReviewsBadge,
    {
      icon: 'clock',
      value: '45–60 Min',
      label: 'Session Length',
      description: 'Structured clinical care.',
    },
    {
      icon: 'user',
      value: 'Specialist-Led',
      label: 'Expert Team',
      description: 'Qualified practitioners.',
    },
    {
      icon: 'check',
      value: 'Results-Focused',
      label: 'Clear Outcomes',
      description: 'Built around your goals.',
    },
  ]
}
