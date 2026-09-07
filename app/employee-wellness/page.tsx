'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  PartyPopper,
  Award,
  CalendarHeart,
  Sparkles,
  Ticket,
  Wallet,
  ClipboardCheck,
  Building2,
  UserRound,
  Phone,
} from 'lucide-react'
import { FAQSection } from '@/components/faq-section'
import { employeeWellnessFaqs } from '@/lib/faqs/employee-wellness'
import { B2BHero } from '@/components/B2BHero'

const journey = [
  {
    side: 'Employer',
    icon: Building2,
    title: 'Issue the benefit',
    body: 'Pick fully paid vouchers, a discount card, or both. We agree denominations, rates, and who is covered.',
  },
  {
    side: 'Employee',
    icon: Ticket,
    title: 'Receive the voucher',
    body: 'HR shares a code, PDF, or physical card. The employee books a session at Dadar East or Lower Parel.',
  },
  {
    side: 'Clinic',
    icon: UserRound,
    title: 'Redeem on the floor',
    body: 'Reception checks the voucher. Fully paid visits close at ₹0. Discount visits apply the % off, then the employee pays the rest.',
  },
  {
    side: 'HR',
    icon: ClipboardCheck,
    title: 'See what was used',
    body: 'You get a simple redemption report — who came, which service, funded vs discounted — not a spreadsheet chase.',
  },
]

const services = [
  'Physiotherapy',
  'Contrast therapy',
  'Clinical pilates',
  'Sports massage',
  'Aqua therapy',
  'Sports psychology',
  'Athlete assessment',
]

const occasions = [
  {
    icon: Award,
    title: 'Appraisals & promotions',
    body: 'A fully paid recovery session as the gift that lands when someone gets promoted — not another hamper.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Colleagues celebrating a promotion in a modern Mumbai office',
  },
  {
    icon: Sparkles,
    title: 'Work anniversaries',
    body: 'Mark tenure with a voucher they will actually use. One session, prepaid, redeemable at either clinic.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'A thoughtful work-anniversary gift on an office desk',
  },
  {
    icon: PartyPopper,
    title: 'Festive gifting',
    body: 'Diwali, year-end, or a team offsite. Issue a batch of funded vouchers and we handle redemption.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Festive wrapped gifts with warm lighting',
  },
  {
    icon: CalendarHeart,
    title: 'Wellness days',
    body: 'A standing discount card for the rest of the year, so extra visits stay cheap enough to book.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Person recovering in a calm spa and wellness setting',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell us the team',
    body: 'Headcount, budget, and whether you want fully paid sessions, a discount card, or a mix.',
  },
  {
    number: '02',
    title: 'We set the rules',
    body: 'Denominations, discount %, validity, and which services are in scope. You approve before anything goes to staff.',
  },
  {
    number: '03',
    title: 'Staff start booking',
    body: 'Employees redeem at either clinic. You get usage back in a format finance can actually read.',
  },
]

const teamSizes = ['1-25', '26-100', '101-300', '300+']
const planOptions = [
  { value: 'funded', label: 'Employer-paid vouchers' },
  { value: 'discount', label: 'Discount voucher cards' },
  { value: 'both', label: 'Both' },
  { value: 'unsure', label: 'Not sure yet' },
]

export default function EmployeeWellnessPage() {
  const [activeOccasion, setActiveOccasion] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    teamSize: teamSizes[0],
    plan: 'both',
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
    const planLabel = planOptions.find((p) => p.value === formData.plan)?.label ?? formData.plan
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.name} (${formData.company})`,
          email: formData.email,
          phone: formData.phone,
          subject: `Employee Wellness Inquiry - ${planLabel} - Team ${formData.teamSize}`,
          message: formData.message || 'No additional message provided.',
          source: 'employee-wellness',
        }),
      })
      if (response.ok) {
        setStatus('success')
        setStatusMessage('Thank you. We will reply within 2 business days with a plan for your team.')
        setFormData({ name: '', company: '', teamSize: teamSizes[0], plan: 'both', email: '', phone: '', message: '' })
      } else {
        const data = await response.json()
        throw new Error(data.message || 'Failed to send request')
      }
    } catch (error: any) {
      setStatus('error')
      setStatusMessage(error.message || 'Something went wrong. Please try again later.')
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      <B2BHero
        eyebrow="Employee Wellness · Mumbai"
        title={
          <>
            Recovery your company{' '}
            <span className="text-[#A78BFA]">pays for</span>
            {' '}— or discounts
          </>
        }
        body="Two ways to run it: fully paid vouchers so staff pay nothing, or a discount card they use when they still pay."
        image={{
          src: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1786809604/Corporate_wellness_t2cw4h.webp',
          alt: 'R3BOOT employee wellness — employer-paid recovery vouchers and discount cards',
          position: 'object-[58%_center]',
        }}
        primary={{ href: '#wellness-form', label: 'Get a Plan for Your Team' }}
        secondary={{ href: '#how-it-works', label: 'How It Works' }}
        trustLabel="Built for teams in Mumbai"
        trustItems={[
          { value: '2', label: 'Voucher models' },
          { value: '7', label: 'Services' },
          { value: '2', label: 'Clinics' },
        ]}
      />

      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              FROM DESK TO CLINIC //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              What actually{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">happens</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-6xl mx-auto">
            {journey.map((item, i) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[12px] font-black tracking-[0.14em] uppercase text-gray-400">
                    {String(i + 1).padStart(2, '0')} · {item.side}
                  </span>
                </div>
                <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2.5">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] dark:bg-[#0D0D0D] border-y border-gray-100 dark:border-white/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                NOT A GYM PASS //
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-5 leading-tight">
                A voucher for treatment, not another unused membership
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-5">
                Gym perks fail because they ask tired people to show up and figure it out. This benefit is a booked hour with a clinician — useful when someone has a stiff back, a race coming up, or a gift they will actually redeem.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08]">
                <Wallet className="w-5 h-5 mt-0.5 text-[#513394] dark:text-[#A78BFA] shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Fully paid visits never hit the employee&apos;s card. Discount visits show the reduced amount at reception. Either way, the company controls the cost.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 sm:p-8 rounded-[1.75rem] bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08]">
                <p className="text-[11px] font-black tracking-[0.22em] uppercase text-gray-400 mb-4">Redeemable on</p>
                <div className="flex flex-wrap gap-2.5">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2.5 rounded-full bg-[#F8F9FA] dark:bg-white/[0.05] border border-gray-100 dark:border-white/[0.08] text-sm font-bold text-gray-800 dark:text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 lg:mb-14 max-w-2xl">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
                WHEN COMPANIES USE IT //
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                Funded vouchers for occasions.{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">Discount cards for everyday.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-stretch">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden w-full shadow-2xl bg-[#111] aspect-[4/5] lg:aspect-auto lg:h-full">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={occasions[activeOccasion].image}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={occasions[activeOccasion].image}
                      alt={occasions[activeOccasion].imageAlt}
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
                    {occasions[activeOccasion].title}
                  </p>
                </div>
              </div>

              <div role="listbox" aria-label="When companies use it" className="flex flex-col lg:h-full">
                {occasions.map((occ, i) => {
                  const Icon = occ.icon
                  const isActive = activeOccasion === i
                  return (
                    <button
                      key={occ.title}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveOccasion(i)}
                      onFocus={() => setActiveOccasion(i)}
                      onClick={() => setActiveOccasion(i)}
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
                        <h3 className="font-black text-gray-900 dark:text-white text-lg sm:text-xl mb-1.5 leading-snug">{occ.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">{occ.body}</p>
                      </div>
                    </button>
                  )
                })}
                <a
                  href="#wellness-form"
                  className="inline-flex items-center gap-2.5 text-[#513394] dark:text-[#A78BFA] font-bold mt-auto pt-6 px-1 hover:gap-3.5 transition-all"
                >
                  Ask about voucher pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-[#F8F9FA] dark:bg-[#0D0D0D] border-y border-gray-100 dark:border-white/[0.06]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              HOW IT WORKS //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Set up in <span className="text-[#513394] dark:text-[#8B5CF6]">three steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col p-6 lg:p-7 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] overflow-hidden"
              >
                <div className="absolute -top-4 -right-2 text-[5.5rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] font-black text-sm mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wellness-form" className="py-10 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-3 sm:mb-4 block">
                GET STARTED //
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3 sm:mb-4">
                Get a plan for <span className="text-[#513394] dark:text-[#8B5CF6]">your team</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                Fully paid vouchers, a discount card, or both. Tell us the company and we&apos;ll shape denominations and rates around your budget. Redeem at Dadar East or Lower Parel.
              </p>

              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden mb-5 sm:mb-8">
                <Image
                  src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1786809604/Corporate_wellness_t2cw4h.webp"
                  alt="R3BOOT employee wellness — recovery sessions for teams"
                  fill
                  className="object-cover object-[58%_center]"
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
                  <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Team Size</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                  >
                    {teamSizes.map((size) => (
                      <option key={size} value={size}>{size} employees</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Plan</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all appearance-none"
                  >
                    {planOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
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
                  <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@acmecorp.com"
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#513394] dark:focus:ring-[#A78BFA] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 sm:ml-4">Anything else? (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Fully paid Diwali vouchers plus a 20% staff discount card"
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
                  'Request a Plan'
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <FAQSection faqs={employeeWellnessFaqs} layout="grid" />

      <section className="py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5 max-w-2xl mx-auto leading-tight">
            Run a gym, club, or practice{' '}
            <span className="text-white/45">instead?</span>
          </h2>
          <p className="text-lg text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Explore Affiliate Partnerships and earn referral credit for every client you send our way.
          </p>
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2.5 bg-white text-[#513394] font-black px-8 py-4 rounded-full hover:scale-105 transition-all shadow-2xl"
          >
            Explore Partnerships
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
