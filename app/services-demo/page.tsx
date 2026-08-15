'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services'

// ─── Problem filter config ────────────────────────────────────────────────────

const PROBLEMS = [
  { id: 'back', label: 'Back & Neck Pain', slugs: ['physiotherapy', 'clinical-pilates', 'sports-massage', 'aqua-therapy'] },
  { id: 'injury', label: 'Sports Injury', slugs: ['physiotherapy', 'sports-massage', 'contrast-therapy', 'aqua-therapy'] },
  { id: 'surgery', label: 'Post Surgery', slugs: ['physiotherapy', 'aqua-therapy', 'clinical-pilates'] },
  { id: 'recovery', label: 'Muscle Recovery', slugs: ['contrast-therapy', 'sports-massage', 'aqua-therapy'] },
  { id: 'performance', label: 'Peak Performance', slugs: ['clinical-pilates', 'mental-training'] },
  { id: 'mental', label: 'Mental Strength', slugs: ['mental-training'] },
]

// ─── Per-service metadata not in services.ts ─────────────────────────────────

const META: Record<string, { duration: string; forWho: string; popular?: boolean }> = {
  'physiotherapy':             { duration: '45 - 60 min', forWho: 'Injuries · Pain · Rehab', popular: true },
  'clinical-pilates':          { duration: '45 - 60 min', forWho: 'Core · Posture · Strength' },
  'contrast-therapy':          { duration: '60 - 90 min', forWho: 'Athletes · Deep Recovery', popular: true },
  'aqua-therapy':              { duration: '45 min',      forWho: 'Joint Pain · Low Impact' },
  'sports-massage':            { duration: '45 - 60 min', forWho: 'Muscle Tension · Athletes' },
  'mental-training':           { duration: '50 min',      forWho: 'Performance · Counselling' },
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '50,000+', label: 'Recoveries' },
  { value: '6',       label: 'Therapies' },
  { value: '5★',      label: 'Google Rating' },
  { value: '7 Days',  label: 'Open Every Week' },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How many sessions will I need?',
    a: 'It depends on your condition and goals. Acute injuries typically respond in 4 - 8 sessions. Chronic conditions or surgical rehab may need 12 - 20 sessions. Your therapist will give you a realistic timeline at your first assessment.',
  },
  {
    q: 'Do I need a doctor referral to book?',
    a: 'No referral needed. Walk in or book directly via WhatsApp. If you have recent scans or reports, bring them - they help your therapist get straight to treatment.',
  },
  {
    q: 'Can I combine multiple services in one visit?',
    a: 'Yes. Many clients pair physiotherapy with sports massage, or contrast therapy after a clinical pilates session. Our team will suggest the best combination for your recovery stage.',
  },
  {
    q: 'Is aqua therapy suitable if I cannot swim?',
    a: 'Absolutely. Aqua therapy is performed in shallow water with a therapist present at all times. No swimming ability required.',
  },
  {
    q: 'What should I wear / bring for my first session?',
    a: 'Comfortable, loose clothing you can move in. For contrast therapy, bring a swimsuit and towel. We provide robes and all equipment.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesDemoPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activeProblem = PROBLEMS.find(p => p.id === activeFilter)
  const isHighlighted = (slug: string) =>
    !activeProblem || activeProblem.slugs.includes(slug)

  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: 'var(--font-branding), sans-serif', background: '#FAF9F6' }}
    >

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: '#0D0B12' }} className="pt-32 pb-16 px-5">
        <div className="max-w-5xl mx-auto">

          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-5"
            style={{ color: '#8B6FBD' }}
          >
            R3BOOT RECOVERY CENTER · DADAR, MUMBAI
          </span>

          <h1
            className="font-black leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', color: '#FAF9F6' }}
          >
            What are you<br />
            <span style={{ color: '#513394' }}>recovering from?</span>
          </h1>

          <p className="text-lg mb-10 max-w-xl" style={{ color: '#8A8690', lineHeight: 1.6 }}>
            Pick your goal below. We'll highlight the right therapy for you.
          </p>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {PROBLEMS.map(p => {
              const active = activeFilter === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveFilter(active ? null : p.id)}
                  className="rounded-full text-sm font-semibold px-5 py-2.5 transition-all duration-200"
                  style={{
                    background: active ? '#513394' : 'transparent',
                    color: active ? '#FAF9F6' : '#8A8690',
                    border: `1.5px solid ${active ? '#513394' : '#2E2A38'}`,
                  }}
                >
                  {p.label}
                </button>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: '#2E2A38' }}>
            {STATS.map(s => (
              <div key={s.label} className="py-6 px-5" style={{ background: '#0D0B12' }}>
                <p
                  className="font-black leading-none mb-1"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#FAF9F6' }}
                >
                  {s.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#6B6080' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">

          {activeFilter && (
            <p className="text-sm font-semibold mb-8" style={{ color: '#513394' }}>
              Showing {activeProblem?.slugs.length} services for&nbsp;
              <span className="underline underline-offset-4">{activeProblem?.label}</span>
              {' - '}
              <button
                onClick={() => setActiveFilter(null)}
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Clear filter
              </button>
            </p>
          )}

          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const meta = META[service.slug] ?? { duration: '45 min', forWho: '' }
              const highlighted = isHighlighted(service.slug)
              const isEven = i % 2 === 0

              return (
                <article
                  key={service.slug}
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 24,
                    opacity: highlighted ? 1 : 0.25,
                    transform: highlighted ? 'none' : 'scale(0.98)',
                    boxShadow: highlighted
                      ? '0 2px 40px 0 rgba(81,51,148,0.07)'
                      : 'none',
                  }}
                >
                  {/* Desktop: horizontal layout */}
                  <div className="hidden md:flex" style={{ minHeight: 320 }}>

                    {/* Image side */}
                    <div
                      className="relative shrink-0"
                      style={{
                        width: '42%',
                        order: isEven ? 0 : 1,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        style={{ borderRadius: isEven ? '24px 0 0 24px' : '0 24px 24px 0' }}
                      />
                      {meta.popular && (
                        <span
                          className="absolute top-4 left-4 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                          style={{ background: '#513394', color: '#FAF9F6' }}
                        >
                          Most Popular
                        </span>
                      )}
                    </div>

                    {/* Content side */}
                    <div
                      className="flex flex-col justify-center p-10"
                      style={{ flex: 1, order: isEven ? 1 : 0 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[10px] font-black tracking-[0.35em] uppercase px-3 py-1 rounded-full"
                          style={{ background: '#F0EBF9', color: '#513394' }}
                        >
                          {service.category}
                        </span>
                        <span className="text-xs font-medium" style={{ color: '#9B96A4' }}>
                          {meta.duration}
                        </span>
                      </div>

                      <h2
                        className="font-black leading-tight mb-3"
                        style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1A1818' }}
                      >
                        {service.title}
                      </h2>

                      <p className="text-sm mb-5 leading-relaxed" style={{ color: '#6B6566', maxWidth: 420 }}>
                        {service.description}
                      </p>

                      {/* Benefits pills */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {service.benefits.slice(0, 3).map(b => (
                          <span
                            key={b}
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{ background: '#F5F3F9', color: '#3D2D72' }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105"
                          style={{ background: '#513394', color: '#FAF9F6' }}
                        >
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                        <a
                          href="https://wa.me/919702368612"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all hover:opacity-80"
                          style={{ border: '1.5px solid #D4CDDF', color: '#513394' }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: stacked layout */}
                  <div className="md:hidden">
                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '24px 24px 0 0' }}
                      />
                      {meta.popular && (
                        <span
                          className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ background: '#513394', color: '#FAF9F6' }}
                        >
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full"
                          style={{ background: '#F0EBF9', color: '#513394' }}
                        >
                          {service.category}
                        </span>
                        <span className="text-xs" style={{ color: '#9B96A4' }}>{meta.duration}</span>
                      </div>
                      <h2 className="font-black text-2xl mb-2" style={{ color: '#1A1818' }}>
                        {service.title}
                      </h2>
                      <p className="text-sm mb-5 leading-relaxed" style={{ color: '#6B6566' }}>
                        {service.description}
                      </p>
                      <div className="flex gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="flex-1 text-center font-bold text-sm py-3 rounded-full"
                          style={{ background: '#513394', color: '#FAF9F6' }}
                        >
                          Learn More
                        </Link>
                        <a
                          href="https://wa.me/919702368612"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center font-semibold text-sm py-3 rounded-full"
                          style={{ border: '1.5px solid #D4CDDF', color: '#513394' }}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D0B12' }} className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: '#513394' }}>
            QUICK COMPARISON
          </p>
          <h2
            className="font-black mb-10"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FAF9F6', lineHeight: 1.1 }}
          >
            Not sure which therapy<br />is right for you?
          </h2>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-left text-sm border-collapse" style={{ minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #2E2A38' }}>
                  {['Therapy', 'Best For', 'Duration', 'Intensity'].map(h => (
                    <th key={h} className="pb-4 pr-6 font-semibold text-xs uppercase tracking-widest" style={{ color: '#6B6080' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Physiotherapy',      best: 'Pain, Injuries, Rehab',        dur: '45 - 60 min', intensity: 'Low - High' },
                  { name: 'Clinical Pilates',    best: 'Core, Posture, Prevention',    dur: '45 - 60 min', intensity: 'Low - Medium' },
                  { name: 'Contrast Therapy',    best: 'Recovery, Circulation',        dur: '60 - 90 min', intensity: 'Medium' },
                  { name: 'Aqua Therapy',        best: 'Joint Pain, Post Surgery',     dur: '45 min',      intensity: 'Low' },
                  { name: 'Sports Massage',      best: 'Muscle Tension, Performance',  dur: '45 - 60 min', intensity: 'Medium - High' },
                  { name: 'Mental Training',     best: 'Pressure, Anxiety, Focus',     dur: '50 min',      intensity: 'Low' },
                  { name: 'Sports Psychology',   best: 'Performance Anxiety, Goals',   dur: '50 min',      intensity: 'Low' },
                ].map((row, i) => (
                  <tr
                    key={row.name}
                    style={{ borderBottom: '1px solid #1E1B25', background: i % 2 === 0 ? 'transparent' : '#0A0812' }}
                  >
                    <td className="py-4 pr-6 font-bold" style={{ color: '#FAF9F6' }}>{row.name}</td>
                    <td className="py-4 pr-6" style={{ color: '#8A8690' }}>{row.best}</td>
                    <td className="py-4 pr-6 whitespace-nowrap" style={{ color: '#8A8690' }}>{row.dur}</td>
                    <td className="py-4" style={{ color: '#8A8690' }}>{row.intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 pt-8" style={{ borderTop: '1px solid #2E2A38' }}>
            <p className="text-sm mb-5" style={{ color: '#6B6080' }}>
              Still unsure? WhatsApp us and we'll recommend the right therapy for your situation.
            </p>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold px-7 py-4 rounded-full transition-all hover:scale-105"
              style={{ background: '#25D366', color: '#FFFFFF' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get a Free Recommendation
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: '#FAF9F6' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: '#513394' }}>
            FAQ
          </p>
          <h2
            className="font-black mb-10"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#1A1818', lineHeight: 1.1 }}
          >
            Questions we hear<br />every day
          </h2>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const open = openFaq === i
              return (
                <div
                  key={i}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    background: open ? '#FFFFFF' : '#F2EFF9',
                    borderRadius: 16,
                    border: open ? '1.5px solid #D4CDDF' : '1.5px solid transparent',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left px-6 py-5"
                  >
                    <span className="font-bold text-base pr-4" style={{ color: '#1A1818' }}>
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: open ? '#513394' : '#E0D9EF',
                        transform: open ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? '#FAF9F6' : '#513394'} strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6566' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-5 text-center"
        style={{ background: '#513394' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: '#FAF9F6', lineHeight: 1.1 }}
          >
            Ready to R3BOOT<br />your body?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(250,249,246,0.65)', lineHeight: 1.6 }}>
            Book via WhatsApp in 30 seconds. No forms, no waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ background: '#FAF9F6', color: '#513394', fontSize: '1rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="tel:+919702368612"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(250,249,246,0.35)', color: '#FAF9F6', fontSize: '1rem' }}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ─────────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-3"
        style={{ background: 'linear-gradient(to top, #0D0B12 60%, transparent)' }}
      >
        <a
          href="https://wa.me/919702368612"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full font-black py-4 rounded-2xl transition-all active:scale-95"
          style={{ background: '#25D366', color: '#FFFFFF', fontSize: '1rem' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book Session via WhatsApp
        </a>
      </div>

    </main>
  )
}
