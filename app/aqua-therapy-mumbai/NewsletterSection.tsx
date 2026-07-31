'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1781294394/EXTENDED_LONG-TERM_APPLICATIONS_sgyuig.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F0A24]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A24] via-[#0F0A24]/85 to-[#0F0A24]/40" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase mb-4 block">
            RECOVERY TIPS //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
            Don&apos;t let pain hold you back any longer.
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Get recovery tips and R3BOOT updates in your inbox. No spam, unsubscribe any time.
          </p>

          {submitted ? (
            <p className="text-[#A78BFA] font-bold text-[15px]">Thanks — noted. We will be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 bg-white/[0.08] border border-white/20 text-white placeholder:text-white/40 rounded-full px-5 py-3.5 text-[14px] outline-none focus:border-[#A78BFA] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
