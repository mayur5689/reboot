import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'

// ─── Per-service data maps ───────────────────────────────────────────────────

const FOR_YOU_IF: Record<string, string[]> = {
  'physiotherapy': ['Back or neck pain', 'Sports injury', 'Post-surgery rehab', 'Chronic pain', 'Poor posture', 'Limited mobility'],
  'clinical-pilates': ['Weak core', 'Recurring back pain', 'Scoliosis', 'Poor posture', 'Injury prevention', 'Post-pregnancy recovery'],
  'contrast-therapy': ['Heavy training week', 'Muscle soreness', 'Low energy or burnout', 'Stress and poor sleep', 'Want faster recovery'],
  'counselling-mental-training': ['Pre-competition nerves', 'Returning from injury', 'Performance plateau', 'Motivation loss', 'Want a mental edge'],
  'aqua-therapy': ['Knee or hip pain', 'Cannot do high-impact exercise', 'Arthritis or joint stiffness', 'Post-surgery recovery', 'Elderly or sedentary'],
  'sports-massage': ['Tight muscles after training', 'Upcoming race or event', 'Poor flexibility', 'Recurring muscle knots', 'Training every day'],
  'mental-training': ['Choking under pressure', 'Fear of failure', 'Returning from injury mentally', 'Pre-competition anxiety', 'Burnout or motivation loss', 'Want elite mindset'],
}

const SESSION_META: Record<string, { duration: string; sessions: string }> = {
  'physiotherapy':             { duration: '45 - 60 min', sessions: '4 - 12 sessions typical' },
  'clinical-pilates':          { duration: '45 - 60 min', sessions: '6 - 20 sessions typical' },
  'contrast-therapy':          { duration: '60 - 90 min', sessions: 'Single session or package' },
  'counselling-mental-training': { duration: '50 min',    sessions: '4 - 8 sessions typical' },
  'aqua-therapy':              { duration: '45 min',      sessions: '6 - 12 sessions typical' },
  'sports-massage':            { duration: '45 - 60 min', sessions: 'Single session or package' },
  'mental-training':           { duration: '50 min',      sessions: '4 - 8 sessions typical' },
}

const FAQS: Record<string, { q: string; a: string }[]> = {
  'physiotherapy': [
    { q: 'Do I need a doctor referral?', a: 'No referral needed. Book directly. If you have recent scans or reports, bring them - they help your physiotherapist get straight to treatment.' },
    { q: 'How many sessions will I need?', a: 'Acute injuries typically respond in 4 - 8 sessions. Chronic conditions or post-surgical rehab usually need 10 - 20. Your physiotherapist gives you a realistic timeline after the first assessment.' },
    { q: 'What should I wear?', a: 'Loose, comfortable clothing you can move in. Shorts for lower-body complaints, sleeveless top for shoulder or neck issues.' },
    { q: 'Will treatment be painful?', a: 'Some manual therapy causes temporary discomfort. Your therapist works within your tolerance. Mild soreness the next day is normal and means treatment is working.' },
    { q: 'Is there parking nearby?', a: 'Yes. Paid parking is available within 2 minutes of the clinic. We are also a 5-minute walk from Dadar station.' },
  ],
  'clinical-pilates': [
    { q: 'Is Clinical Pilates the same as a regular Pilates class?', a: 'No. Clinical Pilates is prescribed and supervised by a physiotherapist after a detailed assessment. Every exercise targets your specific condition - not a general group program.' },
    { q: 'I have never done Pilates. Can I start?', a: 'Yes. Your first session is an assessment. Exercises are designed to match exactly where your body is right now.' },
    { q: 'How many sessions before I see results?', a: 'Most clients notice improved stability and reduced pain within 4 - 6 sessions. Significant strength and postural changes typically develop over 10 - 16 sessions.' },
    { q: 'Can I do this after surgery?', a: 'Yes, with medical clearance. Clinical Pilates is one of the safest forms of post-surgical rehabilitation because exercises are fully customised to your recovery stage.' },
    { q: 'What equipment is used?', a: 'R3BOOT uses both mat-based exercises and the Reformer machine, depending on your program.' },
  ],
  'contrast-therapy': [
    { q: 'How cold is the ice bath?', a: 'Typically 8 - 12°C. Most first-timers are surprised how manageable it becomes after the first 30 seconds. Our team guides you through breathing techniques that make it significantly easier.' },
    { q: 'How often should I do contrast therapy?', a: 'During heavy training: 1 - 2 times per week. For general wellness: once a week is sufficient.' },
    { q: 'Are there any conditions where I should avoid this?', a: 'Avoid if you have uncontrolled high blood pressure, heart conditions, Raynaud\'s disease, open wounds, or are pregnant. When in doubt, consult your doctor first.' },
    { q: 'What should I bring?', a: 'A swimsuit and towel. We provide robes, slippers, and all equipment. Arrive hydrated. Avoid a heavy meal 2 hours before.' },
    { q: 'Can I do this alone or is staff present?', a: 'Staff are present throughout every contrast therapy session. You are never left alone during the ice bath phase.' },
  ],
  'aqua-therapy': [
    { q: 'Do I need to know how to swim?', a: 'No. Aqua therapy is performed in a supervised shallow pool with a therapist present. Swimming ability is not required.' },
    { q: 'How is this different from swimming for exercise?', a: 'Aqua therapy is a structured, therapist-guided rehab program. Water buoyancy reduces joint load by up to 90%, allowing movement and strengthening impossible or painful on land.' },
    { q: 'What conditions benefit most?', a: 'Osteoarthritis, post-joint replacement, spinal conditions, neurological rehab, and any condition where land-based exercise causes pain.' },
    { q: 'What should I wear?', a: 'A comfortable swimsuit. We provide towels. If you have a wound, brace, or prosthesis, let us know when booking.' },
    { q: 'How many sessions do I need?', a: 'A typical course is 6 - 12 sessions. Most clients notice reduced pain and improved movement within the first 3 - 4 sessions.' },
  ],
  'sports-massage': [
    { q: 'Is sports massage only for athletes?', a: 'No. Sports massage is for anyone with muscle tension, restricted movement, or recovery needs - athletes, desk workers, runners, and anyone with chronic stiffness.' },
    { q: 'How much pressure is used?', a: 'Medium to deep pressure. You can always ask your therapist to adjust. Some areas feel intense but should not be sharply painful.' },
    { q: 'Before or after training?', a: 'Pre-event massage is lighter and activating (15 - 30 min). Recovery massage is deeper and best done 24 - 48 hours after intense training, not immediately after.' },
    { q: 'How often should I book?', a: 'During heavy training: weekly or fortnightly. For maintenance: monthly is sufficient for most people.' },
    { q: 'Will I be sore after?', a: 'Mild soreness for 24 - 48 hours after a deep massage is normal and temporary. Staying hydrated and doing light movement helps it resolve faster.' },
  ],
  'counselling-mental-training': [
    { q: 'Is this only for professional athletes?', a: 'No. Mental training helps anyone who performs under pressure - competitive athletes, coaches, students, and professionals in high-stakes roles.' },
    { q: 'How many sessions do I need?', a: 'Most clients notice meaningful shifts in 4 - 6 sessions. A complete program for return-to-sport or sustained performance change is typically 8 - 12 sessions.' },
    { q: 'Are sessions confidential?', a: 'Yes. All counselling and mental training sessions are completely confidential.' },
    { q: 'Can this run alongside physical rehabilitation?', a: 'Yes - and it often produces better outcomes when combined. R3BOOT coordinates your mental and physical recovery simultaneously.' },
    { q: 'What is the difference between this and sports psychology?', a: 'Counselling addresses emotional challenges like injury anxiety and burnout. Sports psychology focuses on performance skills like focus and mental routines. Both are available at R3BOOT.' },
  ],
  'mental-training': [
    { q: 'What is covered under this service?', a: 'Sports psychology and counselling are combined into one mental performance service — focus and competition skills plus emotional support for injury anxiety, burnout, and motivation.' },
    { q: 'What does a session look like?', a: 'Structured conversation, mental skills training (visualisation, focus techniques, self-talk), and goal-setting work. Practical and performance-focused - not traditional open-ended therapy.' },
    { q: 'Can this help with performance anxiety?', a: 'Yes. Managing competition anxiety is one of the core areas. Most athletes see measurable improvement in composure and consistency within 4 - 6 sessions.' },
    { q: 'Can this run alongside physiotherapy?', a: 'Yes. Mental sessions are often coordinated with rehab so you rebuild trust in your body while physical recovery continues.' },
    { q: 'Is this available for youth athletes?', a: 'Yes. Mental skills training is particularly valuable for young athletes navigating competitive pressure, identity, and performance expectations.' },
  ],
}

const TESTIMONIALS: Record<string, { name: string; quote: string; avatar: string }[]> = {
  'contrast-therapy': [
    { name: 'Chandrakant Chande', avatar: '/images/Customer_Review/Namrata Doshi.png', quote: 'The team navigated me through the entire contrast therapy experience with great insights. My body feels lighter and better. Highly recommend for anyone looking for good recovery and rehabilitation.' },
    { name: 'Dharmesh Thakkar', avatar: '/images/Customer_Review/Sonal Malik.png', quote: 'The ice water treatment helped relieve my body stiffness tremendously. The sauna session left me completely rejuvenated. Spotless facility, professional team.' },
    { name: 'Namrata Doshi', avatar: '/images/Customer_Review/Namrata Doshi.png', quote: 'Highly professional and genuinely caring. Facilities are clean, modern, and well-equipped. Highly recommend R3BOOT to everyone.' },
  ],
  '_default': [
    { name: 'Namrata Doshi', avatar: '/images/Customer_Review/Namrata Doshi.png', quote: 'Highly professional and genuinely caring team. From the assessment to the recovery plan, everything was clearly explained and tailored to my needs.' },
    { name: 'Sonal Malik', avatar: '/images/Customer_Review/Sonal Malik.png', quote: 'Sessions were highly personalised with clear focus on my specific problem areas. I have already noticed better posture and reduced stiffness. Highly recommend.' },
    { name: 'JugalKishore Shah', avatar: '/images/Customer_Review/JugalKishore Shah.png', quote: 'Excellent concept executed very professionally. The standard of services is high. Keep it up.' },
  ],
}

const TEAM = [
  {
    name: 'Dr. Hiral Parikh',
    role: 'Lead Physiotherapist',
    credentials: ['15+ yrs experience', 'BPT - D.Y. Patil College', 'Sports Rehab Specialist'],
    image: '/images/trainer2/Trainers/HIRAL.webp',
    bio: 'Leads physiotherapy services at R3BOOT with expertise in sports rehabilitation and post-surgical recovery.',
  },
  {
    name: 'Dr. Vaishali Vijay Rauniyar',
    role: 'Physiotherapist',
    credentials: ['4+ yrs experience', 'Dry Needling Certified', 'Aquatic Rehab Certified', 'Sports & Orthopaedic Rehab'],
    image: '/images/trainer2/Trainers/Dr. Vaishali Vijay Rauniyar.webp',
    bio: 'Dual-certified in Dry Needling and Aquatic Rehabilitation - treatment approaches most Mumbai clinics do not offer.',
  },
]

// ─── Metadata ────────────────────────────────────────────────────────────────

interface PageProps { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} in Mumbai | R3BOOT Dadar`,
    description: `${service.description} Expert ${service.title.toLowerCase()} at R3BOOT Recovery Clinic, Dadar, Mumbai.`,
    alternates: { canonical: `/services/${slug}` },
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Stars() {
  return (
    <span className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ServiceDemoPage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) notFound()

  const forYouIf = FOR_YOU_IF[slug] ?? FOR_YOU_IF['physiotherapy']
  const meta     = SESSION_META[slug] ?? { duration: '45 - 60 min', sessions: '...' }
  const faqs     = FAQS[slug] ?? FAQS['physiotherapy']
  const testimonials = TESTIMONIALS[slug] ?? TESTIMONIALS['_default']
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3)

  const B = 'var(--font-branding), sans-serif' // brand font shorthand

  return (
    <main style={{ fontFamily: B, background: '#FAF9F6' }}>

      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <section style={{ background: '#0D0B12' }} className="pt-28 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 mb-8 transition-opacity hover:opacity-70"
            style={{ color: '#8B80A0', fontSize: 13, fontWeight: 600 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">

            {/* Left: text */}
            <div className="pb-12 lg:pb-16">
              {/* Category badge */}
              <span
                className="inline-block text-xs font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{ background: 'rgba(81,51,148,0.25)', color: '#C4AEFF', border: '1px solid rgba(81,51,148,0.5)' }}
              >
                {service.category}
              </span>

              {/* Title */}
              <h1
                className="font-black leading-[1.0] tracking-tight mb-4"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', color: '#FAF9F6' }}
              >
                {service.title}
              </h1>

              {/* Tagline */}
              {service.tagline && (
                <p
                  className="font-bold italic mb-4"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: '#8B5CF6' }}
                >
                  {service.tagline}
                </p>
              )}

              {/* Description */}
              <p
                className="mb-8 leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', color: '#9B96A8', maxWidth: 480 }}
              >
                {service.description}
              </p>

              {/* Quick meta pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: '⏱', text: meta.duration },
                  { icon: '📍', text: 'Dadar, Mumbai' },
                  { icon: '⭐', text: '5.0 Google Rating' },
                  { icon: '📅', text: 'Open 7 days' },
                ].map(item => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full"
                    style={{ background: '#1A1525', color: '#8B80A0' }}
                  >
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 font-black px-7 py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: '#25D366', color: '#FFF', fontSize: 15 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+919702368612"
                  className="inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-2xl transition-all hover:bg-white/10"
                  style={{ border: '1.5px solid rgba(250,249,246,0.15)', color: '#FAF9F6', fontSize: 15 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.13 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Call Us
                </a>
              </div>
            </div>

            {/* Right: service image */}
            <div
              className="hidden lg:block relative"
              style={{ height: 460 }}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: '24px 24px 0 0' }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, #0D0B12 0%, transparent 40%)' }}
                />
              </div>
            </div>
          </div>

          {/* Mobile: image strip */}
          <div className="lg:hidden mt-8 -mx-5 relative" style={{ height: 240 }}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #0D0B12 0%, transparent 50%)' }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. FOR YOU IF ─────────────────────────────────────────────── */}
      <section className="py-12 px-5" style={{ background: '#F2EEF9' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-sm uppercase tracking-[0.25em] mb-5" style={{ color: '#513394' }}>
            This therapy is right for you if...
          </p>
          <div className="flex flex-wrap gap-3">
            {forYouIf.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm"
                style={{ background: '#EDE6F8', color: '#3D2D72' }}
              >
                <span style={{ color: '#513394' }}>
                  <CheckIcon />
                </span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DESCRIPTION + PROCESS ──────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Description */}
            <div className="lg:col-span-5">
              <p className="font-black text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#513394' }}>
                About This Service
              </p>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
              >
                What is<br />{service.title}?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6B6566', lineHeight: 1.8 }}>
                {service.fullDescription}
              </p>

              {/* No referral badge */}
              <div
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl"
                style={{ background: '#F2EEF9', border: '1px solid #DDD5F0' }}
              >
                <span className="text-lg">✅</span>
                <div>
                  <p className="font-black text-sm" style={{ color: '#1A1818' }}>No referral needed</p>
                  <p className="text-xs" style={{ color: '#8B80A0' }}>Book directly · Results in {meta.sessions}</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="lg:col-span-7">
              <p className="font-black text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#513394' }}>
                What Happens in a Session
              </p>
              <h2
                className="font-black leading-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
              >
                Step by step
              </h2>

              <div className="flex flex-col gap-0">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-5 relative">
                    {/* Vertical line */}
                    {i < service.process.length - 1 && (
                      <div
                        className="absolute left-5 top-12"
                        style={{ bottom: 0, width: 2, background: '#EDE6F8' }}
                      />
                    )}
                    {/* Step number */}
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm z-10"
                      style={{ background: '#513394', color: '#FAF9F6', marginTop: 2 }}
                    >
                      {i + 1}
                    </div>
                    {/* Content */}
                    <div className="pb-8">
                      <h4 className="font-bold text-base mb-1" style={{ color: '#1A1818' }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6566' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BENEFITS ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#FAF9F6' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#513394' }}>
            Key Benefits
          </p>
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
          >
            What you gain from<br />every session
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: '#FFFFFF', border: '1px solid #EDE6F8' }}
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: '#F2EEF9', color: '#513394' }}
                >
                  <CheckIcon />
                </div>
                <p className="font-semibold text-sm leading-snug pt-1.5" style={{ color: '#1A1818' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. YOUR THERAPISTS ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#0D0B12' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8B5CF6' }}>
            Your Team
          </p>
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FAF9F6' }}
          >
            Treated by certified<br />specialists, not general staff
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map(member => (
              <div
                key={member.name}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ background: '#1A1525', border: '1px solid rgba(139,92,246,0.15)' }}
              >
                {/* Photo */}
                <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base mb-0.5" style={{ color: '#FAF9F6' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: '#8B80A0' }}>
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.credentials.map(c => (
                      <span
                        key={c}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(81,51,148,0.3)', color: '#C4AEFF' }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B6580' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#513394' }}>
            Client Results
          </p>
          <h2
            className="font-black leading-tight mb-12"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
          >
            Real people,<br />real outcomes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col p-6 rounded-2xl"
                style={{ background: '#FAF9F6', border: '1px solid #EDE6F8' }}
              >
                <Stars />
                <p
                  className="flex-1 text-sm leading-relaxed my-4"
                  style={{ color: '#4A4550' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #EDE6F8' }}>
                  <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <span className="font-bold text-sm" style={{ color: '#1A1818' }}>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SUB-SERVICES (physio only) ─────────────────────────────── */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="py-16 lg:py-24 px-5" style={{ background: '#FAF9F6' }}>
          <div className="max-w-6xl mx-auto">
            <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#513394' }}>
              Specialisations
            </p>
            <h2
              className="font-black leading-tight mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
            >
              Which type of {service.title}<br />do you need?
            </h2>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {service.subServices.map((sub, i) => (
                <div
                  key={i}
                  className="shrink-0 w-72 lg:w-auto flex flex-col rounded-2xl overflow-hidden"
                  style={{ background: '#FFFFFF', border: '1px solid #EDE6F8' }}
                >
                  {sub.image && (
                    <div className="relative w-full" style={{ height: 160 }}>
                      <Image src={sub.image} alt={sub.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-black text-base mb-2" style={{ color: '#1A1818' }}>
                      {sub.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6566' }}>
                      {sub.description}
                    </p>
                    <a
                      href="https://wa.me/919702368612"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 transition-opacity hover:opacity-70"
                      style={{ color: '#513394' }}
                    >
                      Book this
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. FAQ ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#513394' }}>
            FAQ
          </p>
          <h2
            className="font-black leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#1A1818' }}
          >
            Questions we hear<br />every day
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{ background: '#FAF9F6', border: '1.5px solid #EDE6F8' }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none"
                  style={{ color: '#1A1818' }}
                >
                  <span className="font-bold text-base pr-4">{faq.q}</span>
                  {/* Plus icon that rotates on open */}
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#EDE6F8] text-[#513394] group-open:rotate-45 group-open:bg-[#513394] group-open:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </summary>
                <p
                  className="px-6 pb-6 text-sm leading-relaxed"
                  style={{ color: '#6B6566' }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. OTHER SERVICES ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 px-5" style={{ background: '#0D0B12' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8B5CF6' }}>
            Explore More
          </p>
          <h2
            className="font-black leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FAF9F6' }}
          >
            Other ways we can<br />help you recover
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map(s => (
              <Link
                key={s.slug}
                href={`/services-demo/${s.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                style={{ background: '#1A1525', border: '1px solid rgba(139,92,246,0.12)' }}
              >
                <div className="relative w-full" style={{ height: 180 }}>
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1A1525 0%, transparent 60%)' }} />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: 'rgba(81,51,148,0.6)', color: '#C4AEFF' }}
                  >
                    {s.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-base mb-1 group-hover:text-[#A78BFA] transition-colors" style={{ color: '#FAF9F6' }}>
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#6B6580' }}>
                    {s.description}
                  </p>
                  <span
                    className="text-xs font-black uppercase tracking-widest flex items-center gap-1.5"
                    style={{ color: '#8B5CF6' }}
                  >
                    View service
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. BOOK NOW ──────────────────────────────────────────────── */}
      <section className="py-20 px-5" style={{ background: '#513394' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: '#FAF9F6' }}
          >
            Ready to start<br />your recovery?
          </h2>
          <p className="text-base mb-3" style={{ color: 'rgba(250,249,246,0.65)', lineHeight: 1.6 }}>
            {meta.sessions} · {meta.duration} per session · Dadar, Mumbai
          </p>
          <p className="text-sm font-semibold mb-10" style={{ color: 'rgba(250,249,246,0.45)' }}>
            Book via WhatsApp in 30 seconds. No forms, no waiting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95"
              style={{ background: '#FAF9F6', color: '#513394', fontSize: '1rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="tel:+919702368612"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(250,249,246,0.3)', color: '#FAF9F6', fontSize: '1rem' }}
            >
              Call Us
            </a>
          </div>

          <p className="mt-8 text-xs font-semibold" style={{ color: 'rgba(250,249,246,0.35)' }}>
            📍 R3BOOT Recovery Center, Dadar, Mumbai &nbsp;·&nbsp; Open 7 days a week
          </p>
        </div>
      </section>

      {/* ── 11. STICKY MOBILE BAR ─────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div
          className="px-4 pt-3 pb-3"
          style={{ background: 'linear-gradient(to top, #0D0B12 70%, transparent)' }}
        >
          <div className="flex gap-3">
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 font-black py-3.5 rounded-xl active:scale-95 transition-transform"
              style={{ background: '#25D366', color: '#FFF', fontSize: 14 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="tel:+919702368612"
              className="inline-flex items-center justify-center px-5 rounded-xl font-bold active:scale-95 transition-transform"
              style={{ background: '#1A1525', color: '#FAF9F6', fontSize: 14, border: '1.5px solid rgba(250,249,246,0.12)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.13 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </main>
  )
}

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}
