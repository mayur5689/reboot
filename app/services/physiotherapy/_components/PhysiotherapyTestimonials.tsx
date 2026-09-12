'use client'

import Image from 'next/image'

export type Testimonial = {
  name: string
  meta: string
  ago: string
  avatar: string
  quote: string
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
    </svg>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="w-[360px] lg:w-[400px] flex-shrink-0 bg-[#161616] border border-white/[0.07] rounded-3xl p-6 lg:p-7 flex flex-col min-h-[380px] mr-5 lg:mr-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <GoogleLogo className="w-7 h-7 flex-shrink-0" />
          <span className="text-white font-bold text-[15px]">Google Review</span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#222] rounded-full px-3 py-1.5">
          {[...Array(5)].map((_, j) => (
            <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-white font-bold text-[13px] ml-0.5">5.0</span>
        </div>
      </div>

      <div className="h-px bg-white/[0.07] mb-5" />

      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight">{testimonial.name}</p>
          <p className="text-white/40 text-[12px]">{testimonial.meta}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-5">
        <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-white/35 text-[12px]">{testimonial.ago}</span>
      </div>

      <blockquote className="text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5 line-clamp-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-white/35 text-[12px]">Verified Google Review</span>
      </div>
    </figure>
  )
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const duplicated = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent sm:w-32" />

      <div
        className="flex w-max animate-marquee-left py-1 hover:[animation-play-state:paused]"
        style={{ '--duration': '70s' } as React.CSSProperties}
      >
        {duplicated.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}
