function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z" />
    </svg>
  )
}

export type StickyPriceTier = {
  label: string
  price: string
  featured?: boolean
}

type MobileStickyCtaProps = {
  tiers?: StickyPriceTier[]
  note?: string
  phone?: string
  whatsapp?: string
}

const DEFAULT_PHONE = '+919702368612'

export function MobileStickyCta({
  tiers = [],
  note,
  phone = DEFAULT_PHONE,
  whatsapp = DEFAULT_PHONE,
}: MobileStickyCtaProps) {
  const telHref = `tel:${phone}`
  const waHref = `https://wa.me/${whatsapp.replace(/^\+/, '')}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gray-200 dark:border-white/[0.09] px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          {tiers.length > 0 && (
            <div
              className="flex items-stretch shrink-0 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.1]"
              aria-label="Session pricing"
              title={note}
            >
              {tiers.map((tier, i) => (
                <div key={`${tier.label}-${tier.price}`} className="contents">
                  {i > 0 && <div className="w-px bg-gray-200 dark:bg-white/[0.1]" />}
                  <div
                    className={`px-2.5 py-1.5 text-center ${
                      tier.featured ? 'bg-[#513394]/[0.07] dark:bg-[#513394]/20' : ''
                    }`}
                  >
                    <p
                      className={`text-[8px] font-black uppercase tracking-[0.1em] leading-none mb-1 whitespace-nowrap ${
                        tier.featured
                          ? 'text-[#513394] dark:text-[#A78BFA]'
                          : 'text-gray-400 dark:text-white/40'
                      }`}
                    >
                      {tier.label}
                    </p>
                    <p className="text-[14px] font-black text-gray-900 dark:text-white leading-none tabular-nums whitespace-nowrap">
                      {tier.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <a
            href={telHref}
            className="flex-1 min-w-0 flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-xl h-11 text-[14px] tracking-wide transition-colors"
          >
            <PhoneIcon className="w-4 h-4 shrink-0" />
            Call
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="WhatsApp"
            className={`flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-xl h-11 text-[14px] tracking-wide hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors ${
              tiers.length > 0 ? 'w-11 shrink-0' : 'flex-1'
            }`}
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0 text-[#25D366]" />
            {tiers.length === 0 && <span>WhatsApp</span>}
          </a>
        </div>
      </div>
    </div>
  )
}
