import Image from 'next/image'
import { HeroTrustCarousel } from '@/components/HeroTrustCarousel'
import type { TrustBadgeItem } from '@/components/HeroTrustBadge'

const REVIEW_AVATARS = [
  { src: '/images/Customer_Review/Namrata Doshi.png', alt: 'Namrata' },
  { src: '/images/Customer_Review/Sonal Malik.png', alt: 'Sonal' },
  { src: '/images/Customer_Review/JugalKishore Shah.png', alt: 'Jugal' },
] as const

/** Mobile-only trust block: Google reviews card + horizontal badge carousel. */
export function MobileHeroTrust({ items }: { items: TrustBadgeItem[] }) {
  return (
    <>
      <div className="mt-5 bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl p-4 flex items-center gap-0">
        <div className="flex items-center shrink-0 pr-4">
          {REVIEW_AVATARS.map((av, i) => (
            <div
              key={av.alt}
              className={`relative w-12 h-12 rounded-full border-2 border-[#F8F9FA] dark:border-[#1A1A1A] overflow-hidden shrink-0 ${i > 0 ? '-ml-3' : ''}`}
              style={{ zIndex: 3 - i }}
            >
              <Image src={av.src} alt={av.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="w-px self-stretch bg-gray-200 dark:bg-white/10 shrink-0 mr-4" />

        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            <div className="relative w-5 h-5 shrink-0">
              <Image src="/images/GOOGLE_LOGO.webp" alt="Google" fill className="object-contain" />
            </div>
            <span className="text-gray-900 dark:text-white font-bold text-sm">Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-900 dark:text-white font-black text-xl">5.0</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">500+ happy clients</span>
        </div>
      </div>

      <HeroTrustCarousel items={items.slice(1)} />
    </>
  )
}
