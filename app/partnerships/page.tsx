'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  Award,
  Brain,
  CalendarDays,
  Dumbbell,
  Flame,
  Footprints,
  GraduationCap,
  Megaphone,
  Package,
  Phone,
  Route,
  Share2,
  Shuffle,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { partnershipsFaqs } from '@/lib/faqs/partnerships'
import { B2BHero } from '@/components/B2BHero'

const gaps = [
  {
    icon: AlertTriangle,
    title: 'Overuse injuries go untreated',
    body: 'Shoulders, knees and backs break down quietly until members disappear.',
  },
  {
    icon: Route,
    title: 'No structured recovery pathway',
    body: "There's a workout plan, but rarely a recovery plan alongside it.",
  },
  {
    icon: Shuffle,
    title: 'Fragmented, uncoordinated care',
    body: 'A random physio, a masseuse, maybe a psychologist — none of them talking to each other.',
  },
  {
    icon: TrendingDown,
    title: 'Injury becomes churn',
    body: 'An unmanaged injury is one of the most common reasons a member quietly cancels.',
  },
]

const whyPartner = [
  { icon: Users, title: 'Retain members longer', body: 'Manage injuries before they turn into cancellations.' },
  { icon: TrendingUp, title: 'New revenue stream', body: 'Earn on every referral you send, at no cost to set up.' },
  { icon: Award, title: 'Elevate your positioning', body: "A clinical-grade recovery amenity your competitors don't have." },
  { icon: Brain, title: 'Specialist access', body: 'Sports psychology and mental performance for competitive members.' },
  { icon: Zap, title: 'Zero operational load', body: 'We run recovery. You keep training and community.' },
  { icon: Dumbbell, title: 'Built for your crowd', body: 'Already trusted by athletes and everyday members alike.' },
]

const models = [
  {
    icon: Share2,
    number: '01',
    title: 'Referral Partnership',
    badge: 'Easiest to start',
    tagline: 'Send us your members. We handle the rest — no cost or effort on your end.',
    fit: 'Best if you want zero setup and a payout on every converted referral.',
    points: [
      'Partner gets a unique referral code or QR — easy for front desk or trainers to hand out on the spot.',
      'Every referral is tracked from intake through to booking.',
      'Monthly reconciliation and payout, with a simple report of referrals sent vs. converted.',
      'Referred members get priority booking slots and discounts depending on agreement.',
    ],
    note: 'A flat, one-time commission per converted referral, paid on first purchase only — not on renewals. Ask our team for the current rate card.',
  },
  {
    icon: Megaphone,
    number: '02',
    title: 'Co-Branded Programs',
    tagline: 'Joint content and expertise — both brands visible, both benefiting.',
    fit: 'Best if you want recovery content and guest sessions inside your community.',
    points: [
      'Co-branded Instagram series — recovery tips filmed with your trainers or coaches, cross-posted on both accounts.',
      'One-off guest expert sessions for your members or team.',
      'A co-branded mobility and recovery guide handed out to your members.',
    ],
    note: 'No fixed fee. Cost, format and scheduling are agreed per activation. A single workshop is the easiest place to start.',
  },
  {
    icon: Package,
    number: '03',
    title: 'Bundled Recovery Packages',
    tagline: 'R3BOOT services, built directly into your membership.',
    fit: 'Best if you want recovery as a paid amenity inside your own tiers.',
    points: [
      'A R3BOOT service built directly into your premium membership tier.',
      'A standalone recovery add-on you sell alongside your own membership.',
      'A one-time founding-member bundle for your top clients or athletes.',
    ],
    note: 'A volume-dependent discount off our rate card. You price the bundle into your membership — the margin is yours. Simpler alternative: a flat 10–15% member discount instead of a wholesale rate.',
  },
  {
    icon: CalendarDays,
    number: '04',
    title: 'Combined Events',
    tagline: 'Recovery, live at your event.',
    fit: 'Best if you run race days, tournaments, or pre-season camps.',
    points: [
      'On-site recovery stations — ice bath, compression, massage — at your tournaments or race days.',
      'Pre-season screening days: movement assessments and injury-risk screening at your facility.',
      'Co-hosted panels or webinars on recovery and performance for your community.',
      'A branded recovery lounge sponsorship at your flagship events.',
    ],
    note: 'Pricing is scoped per event based on scale, duration and number of specialists needed — from a single recovery station to a full lounge.',
  },
]

const facilityTypes = [
  {
    icon: Dumbbell,
    title: 'Gyms & Fitness Centres',
    body: 'In-club recovery corners, injury-prevention screenings, and referral pathways for members hitting plateaus.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814104/IMAGE_1_tx6oms.webp',
    imageAlt: 'Member training with dumbbells in a commercial gym',
  },
  {
    icon: Trophy,
    title: 'Combat Sports Gyms',
    body: 'Joint care and injury rehab for strikers and grapplers, plus recovery support around weight management.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814115/image_2_finecb.webp',
    imageAlt: 'Fighter wrapping hands in a combat sports gym',
  },
  {
    icon: Flame,
    title: 'Functional Fitness Boxes',
    body: 'Recovery protocols and mobility work for the overuse and joint strain of high-intensity training.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814122/image_3_l0wrv7.webp',
    imageAlt: 'Athlete resting after a session in a functional fitness box',
  },
  {
    icon: GraduationCap,
    title: 'Sports Academies',
    body: 'Structured youth athlete injury management, return-to-play screening, and sports psychology.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814128/image_4_zhqw7w.webp',
    imageAlt: 'Young cricketer walking into indoor academy nets',
  },
  {
    icon: Users,
    title: 'Multi-Sport Social Clubs',
    body: 'Targeted care for overuse injuries — elbows, shoulders, knees — plus contrast therapy after tournaments.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814134/image_5_kifmtz.webp',
    imageAlt: 'Players walking off a tennis court at a multi-sport social club',
  },
  {
    icon: Footprints,
    title: 'Run Clubs',
    body: 'Pre/post-run recovery stations, physio for shin splints and IT band issues, aqua therapy for high mileage.',
    image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786814143/image_6_ouad02.webp',
    imageAlt: 'Run club group on an early morning sea-face road',
  },
]

const businessTypes = [
  'Gym / Fitness Centre',
  'Combat Sports Gym',
  'Functional Fitness Box',
  'Sports Academy',
  'Multi-Sport Social Club',
  'Run Club',
  'Personal Trainer / Coach',
  'Doctor / Specialist',
  'Other',
]

export default function PartnershipsPage() {
  const [activeFacility, setActiveFacility] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    businessType: businessTypes[0],
    model: models[0].title,
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.name} (${formData.business})`,
          email: formData.email,
          phone: formData.phone,
          subject: `Partnership Inquiry - ${formData.businessType} - ${formData.model}`,
          message: formData.message || `Interested in ${formData.model}.`,
          source: 'partnerships',
        }),
      })
      if (response.ok) {
        setStatus('success')
        setStatusMessage('Thank you! Our team will review your application and reach out within 2 business days.')
        setFormData({
          name: '',
          business: '',
          businessType: businessTypes[0],
          model: models[0].title,
          email: '',
          phone: '',
          message: '',
        })
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Failed to send application')
      }
    } catch (error: any) {
      setStatus('error')
      setStatusMessage(error.message || 'Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <B2BHero
        eyebrow="Recovery · Performance · Partnership"
        title={
          <>
            Your members train hard.
            <br />
            Who helps them <span className="text-[#A78BFA]">recover</span>?
          </>
        }
        body="Most gyms have no plan for when the body breaks down. That gap costs you members."
        image={{
          src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786809752/AFFILATE_PARTENRSHIP_PAGE_daccqs.webp',
          alt: 'R3BOOT partnership program — recovery for gyms, clubs, and academies',
          position: 'object-[62%_center]',
        }}
        primary={{ href: '#partner-form', label: 'Become a Partner' }}
        secondary={{ href: '#facility-types', label: 'How It Fits You' }}
        trustLabel="Trusted by gyms, clubs & academies"
        trustItems={[
          { value: '15', label: 'Specialists' },
          { value: '7', label: 'Services' },
          { value: '1000+', label: 'Athletes treated' },
        ]}
      />

      {/* THE GAP — problem, 4 equal cards is the right shape here */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D0D] border-y border-gray-100 dark:border-white/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              WHAT&apos;S MISSING //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              An unmanaged injury is a <span className="text-[#513394] dark:text-[#8B5CF6]">cancellation</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {gaps.map((gap, i) => (
              <div
                key={i}
                className="flex flex-col p-6 lg:p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5">
                  <gap.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">{gap.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{gap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER — compact rows, not another 6-card wall */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
            <div className="lg:sticky lg:top-32">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHY PARTNER //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-5">
                A premium amenity, <span className="text-[#513394] dark:text-[#8B5CF6]">zero build cost</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                India&apos;s first integrated recovery centre — not a spa, not a physio clinic, but both. We run the recovery side. You keep training and community.
              </p>
              <a
                href="#partner-form"
                className="inline-flex items-center gap-2.5 text-[#513394] dark:text-[#A78BFA] font-bold hover:gap-3.5 transition-all"
              >
                Become a partner
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {whyPartner.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-[15px] mb-1 leading-snug">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY TYPES — one photo, list swaps it */}
      <section id="facility-types" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 lg:mb-14 max-w-2xl">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                BUILT FOR YOUR FACILITY //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
One partnership, <span className="text-[#513394] dark:text-[#8B5CF6]">flexed for you</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl lg:sticky lg:top-28 bg-[#111]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={facilityTypes[activeFacility].image}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={facilityTypes[activeFacility].image}
                      alt={facilityTypes[activeFacility].imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/15 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-[11px] font-black tracking-[0.22em] uppercase text-white/55 mb-1.5">
                    Built for
                  </p>
                  <p className="text-white font-black text-2xl sm:text-3xl leading-tight">
                    {facilityTypes[activeFacility].title}
                  </p>
                </div>
              </div>

              <div role="listbox" aria-label="Facility types" className="flex flex-col">
                {facilityTypes.map((type, i) => {
                  const Icon = type.icon
                  const isActive = activeFacility === i
                  return (
                    <button
                      key={type.title}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveFacility(i)}
                      onFocus={() => setActiveFacility(i)}
                      onClick={() => setActiveFacility(i)}
                      className={`text-left flex items-start gap-4 px-4 sm:px-5 py-5 sm:py-6 transition-colors border-b border-gray-100 dark:border-white/[0.08] ${
                        isActive
                          ? 'bg-[#513394]/[0.06] dark:bg-[#8B5CF6]/10'
                          : 'hover:bg-gray-50 dark:hover:bg-white/[0.03]'
                      } ${i === 0 ? 'border-t border-gray-100 dark:border-white/[0.08]' : ''}`}
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#513394] text-white'
                            : 'bg-[#513394]/10 dark:bg-[#8B5CF6]/20 text-[#513394] dark:text-[#A78BFA]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="font-black text-gray-900 dark:text-white text-lg sm:text-xl mb-1.5 leading-snug">{type.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">{type.body}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER FORM */}
      <section id="partner-form" className="py-10 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-3 sm:mb-4 block">
                GET STARTED //
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3 sm:mb-4">
                Let&apos;s design a partnership <span className="text-[#513394] dark:text-[#8B5CF6]">built around your members</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                Referral, co-branded, bundled, or on-site — tell us about your facility and we&apos;ll shape it around what fits.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden mb-5 sm:mb-8">
                <Image
                  src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1786809752/AFFILATE_PARTENRSHIP_PAGE_daccqs.webp"
                  alt="R3BOOT recovery centre — partner intake and consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-[13px] sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Prefer to talk it through first? Reach Amar Jaiswal at{' '}
                  <a href="tel:+918433543454" className="font-bold text-[#513394] dark:text-[#A78BFA]">
                    +91 84335 43454
                  </a>
                </p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-[#F8F9FA] dark:bg-[#1A1A1A] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-10 shadow-lg sm:shadow-xl border border-gray-100 dark:border-white/5 space-y-4 sm:space-y-6"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Business / Facility Name</label>
                <input
                  type="text"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Iron Works Gym"
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Facility Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                >
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Partnership Model</label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                >
                  {models.map((model) => (
                    <option key={model.title} value={model.title}>{model.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@ironworksgym.com"
                  className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Tell us about your facility (optional)</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Roughly how many members/clients do you have?"
                className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-[2rem] px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-600 dark:text-green-400 font-bold">
                <CheckCircle2 className="shrink-0 w-5 h-5" />
                {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-600 dark:text-red-400 font-bold">
                <AlertCircle className="shrink-0 w-5 h-5" />
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#513394] hover:bg-[#412975] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 sm:py-5 rounded-xl sm:rounded-full shadow-lg shadow-[#513394]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
            </motion.form>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={partnershipsFaqs}
        locations={[
          { name: 'Dadar East (Flagship)', query: '19.0165473,72.8459274' },
          { name: 'Lower Parel', query: '19.0031084,72.8293157' },
        ]}
      />

      <section className="py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5 max-w-2xl mx-auto leading-tight">
            Looking for team recovery,{' '}
            <span className="text-white/45">not a facility partnership?</span>
          </h2>
          <p className="text-lg text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Explore Employee Wellness Programs for corporate recovery benefits and gift vouchers.
          </p>
          <Link
            href="/employee-wellness"
            className="inline-flex items-center gap-2.5 bg-white text-[#513394] font-black px-8 py-4 rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            Explore Employee Wellness
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
