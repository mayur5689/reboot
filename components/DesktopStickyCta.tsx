import type { StickyPriceTier } from '@/components/MobileStickyCta'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

type DesktopStickyCtaProps = {
  tiers: StickyPriceTier[]
  note?: string
  phone?: string
  whatsapp?: string
}

const DEFAULT_PHONE = '+919702368612'

export function DesktopStickyCta({
  tiers,
  note,
  phone = DEFAULT_PHONE,
  whatsapp = DEFAULT_PHONE,
}: DesktopStickyCtaProps) {
  if (tiers.length === 0) return null

  const telHref = `tel:${phone}`
  const waHref = `https://wa.me/${whatsapp.replace(/^\+/, '')}`

  return (
    <aside
      className="hidden md:block fixed bottom-6 right-6 z-50 w-[300px]"
      aria-label="Session pricing"
    >
      <div className="rounded-2xl border border-gray-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#121218]/95 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.22)] p-4">
        <div className="flex items-stretch rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.1] mb-2.5">
          {tiers.map((tier, i) => (
            <div key={`${tier.label}-${tier.price}`} className="contents">
              {i > 0 && <div className="w-px bg-gray-200 dark:bg-white/[0.1]" />}
              <div
                className={`flex-1 px-3 py-2.5 text-center ${
                  tier.featured ? 'bg-[#513394]/[0.07] dark:bg-[#513394]/20' : ''
                }`}
              >
                <p
                  className={`text-[9px] font-black uppercase tracking-[0.14em] leading-none mb-1.5 ${
                    tier.featured
                      ? 'text-[#513394] dark:text-[#A78BFA]'
                      : 'text-gray-400 dark:text-white/35'
                  }`}
                >
                  {tier.label}
                </p>
                <p className="text-[20px] font-black text-gray-900 dark:text-white leading-none tabular-nums">
                  {tier.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {note ? (
          <p className="text-center text-[11px] text-gray-500 dark:text-white/40 font-medium mb-3 leading-snug">
            {note}
          </p>
        ) : null}
        <div className="flex gap-2">
          <a
            href={telHref}
            className="flex-1 flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-xl py-2.5 text-[13px] tracking-wide transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Call
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-xl py-2.5 text-[13px] tracking-wide hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </aside>
  )
}
