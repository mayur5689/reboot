import Image from 'next/image'

const AVATARS = [
  { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata' },
  { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal' },
  { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'Jugal' },
] as const

const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'

type Props = {
  /** Optional real patient line under the rating. Leave out for the badge only. */
  quote?: string
  author?: string
  /** Hero on a black background (desktop). Otherwise adapts to light/dark theme (mobile). */
  onDark?: boolean
  className?: string
}

/** Single quiet Google-reviews proof block for hero sections: avatars, stars, one patient line. */
export function HeroReviewProof({ quote, author, onDark = false, className = '' }: Props) {
  const strong = onDark ? 'text-white' : 'text-gray-900 dark:text-white'
  const muted = onDark ? 'text-white/50' : 'text-gray-500 dark:text-white/50'
  const ring = onDark ? 'border-black' : 'border-white dark:border-[#0A0A0A]'
  const rule = onDark ? 'border-white/10' : 'border-gray-200 dark:border-white/10'

  return (
    <figure className={`max-w-[520px] ${className}`}>
      <div className="flex items-center gap-3.5">
        <div className="flex items-center shrink-0" aria-hidden>
          {AVATARS.map((av, i) => (
            <div
              key={av.alt}
              className={`relative w-9 h-9 rounded-full border-2 ${ring} overflow-hidden shrink-0 ${i > 0 ? '-ml-2.5' : ''}`}
              style={{ zIndex: 3 - i }}
            >
              <Image src={av.src} alt="" fill sizes="36px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5" aria-hidden>
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d={STAR_PATH} />
                </svg>
              ))}
            </div>
            <span className={`${strong} font-bold text-[14px] tabular-nums`}>5.0</span>
          </div>
          <div className={`flex items-center gap-1.5 text-[12px] ${muted}`}>
            <span className="relative w-3.5 h-3.5 shrink-0">
              <Image src="/images/GOOGLE_LOGO.webp" alt="" fill sizes="14px" className="object-contain" />
            </span>
            <span>Rated 5.0 on Google by 500+ patients</span>
          </div>
        </div>
      </div>

      {quote && (
        <blockquote className={`mt-3.5 pl-3.5 border-l ${rule} text-[13px] leading-relaxed ${onDark ? 'text-white/65' : 'text-gray-600 dark:text-white/65'}`}>
          &ldquo;{quote}&rdquo;
          {author && <figcaption className={`mt-1 text-[12px] ${muted}`}>{author}, Google review</figcaption>}
        </blockquote>
      )}
    </figure>
  )
}
