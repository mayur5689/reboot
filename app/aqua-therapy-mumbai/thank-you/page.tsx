import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceNavbar from '@/components/ServiceNavbar'

export const metadata: Metadata = {
  title: 'Thank You | Aqua Therapy Consultation | R3BOOT',
  description: 'Thanks for submitting your aqua therapy consultation request. We will reach out within 24 hours.',
  robots: { index: false, follow: false },
}

const WHATSAPP_URL =
  'https://wa.me/919702368612?text=' +
  encodeURIComponent('Hi R3BOOT, I just submitted the aqua therapy consultation form and wanted to connect on WhatsApp.')

export default function AquaTherapyThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] dark:bg-[#0A0A0A]">
      <ServiceNavbar showPromoRibbon />

      <section className="flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-lg rounded-[1.75rem] sm:rounded-[2rem] bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/[0.08] shadow-sm p-8 sm:p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-[#513394] flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
            Thank you for submitting the form
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            We will reach out to you within 24 hours.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe57] text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-[1.01] text-[15px] tracking-wide"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Connect on WhatsApp
          </a>

          <p className="mt-6">
            <Link
              href="/aqua-therapy-mumbai"
              className="text-[14px] font-bold text-[#513394] dark:text-[#A78BFA] hover:underline underline-offset-4"
            >
              Back to Aqua Therapy
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
