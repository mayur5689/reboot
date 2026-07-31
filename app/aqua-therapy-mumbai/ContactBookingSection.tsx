'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { Mail, Phone, MapPin, Droplets } from 'lucide-react'

const HOURS = [
  { day: 'Mon – Tue', time: '8:00 am – 9:00 pm' },
  { day: 'Wed', time: '8:00 am – 4:00 pm' },
  { day: 'Thu – Sat', time: '8:00 am – 9:00 pm' },
  { day: 'Sun', time: '2:00 pm – 9:00 pm' },
]

const RECOVERY_OPTIONS = [
  { id: 'post-surgery', label: 'Post surgery — Knee / hip / shoulder' },
  { id: 'arthritis', label: 'Arthritis — Joint pain & stiffness' },
  { id: 'acl-sports', label: 'ACL / sports — Ligament or muscle' },
  { id: 'back-spine', label: 'Back or spine — Pain or mobility' },
]

const START_OPTIONS = [
  { id: 'this-week', label: 'This week' },
  { id: 'this-month', label: 'This month' },
  { id: '1-2-months', label: 'In 1–2 months' },
  { id: 'exploring', label: 'Just exploring' },
]

const CALL_TIME_OPTIONS = [
  { id: 'morning', label: 'Morning (9 am – 12 pm)' },
  { id: 'afternoon', label: 'Afternoon (12 pm – 4 pm)' },
  { id: 'evening', label: 'Evening (6 pm – 9 pm)' },
  { id: 'anytime', label: 'Anytime works' },
]

const CONTACT_CHIPS = [
  {
    icon: Mail,
    label: 'Email Us Today',
    value: 'info@r3boot.in',
    highlight: false,
    href: 'mailto:info@r3boot.in',
  },
  {
    icon: Phone,
    label: 'Call Or Text',
    value: '+91 97023 68612',
    highlight: true,
    href: 'tel:+919702368612',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'R3BOOT, Dadar East',
    highlight: false,
    href: 'https://maps.google.com/?cid=3927524433644528268',
  },
]

function QuestionLabel({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-2">
      <span className="w-6 h-6 rounded-full bg-[#513394] text-white text-[12px] font-black flex items-center justify-center shrink-0">
        {n}
      </span>
      <span className="text-[14px] font-bold text-gray-900 dark:text-white">{children}</span>
    </div>
  )
}

export function ContactBookingSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [recovery, setRecovery] = useState('')
  const [startWhen, setStartWhen] = useState('')
  const [callTime, setCallTime] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const recoveryLabel = RECOVERY_OPTIONS.find((o) => o.id === recovery)?.label
    const startLabel = START_OPTIONS.find((o) => o.id === startWhen)?.label
    const callLabel = CALL_TIME_OPTIONS.find((o) => o.id === callTime)?.label

    const lines = [
      `Hi R3BOOT, I want a free consultation for Aqua Therapy.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      recoveryLabel && `Recovering from: ${recoveryLabel}`,
      startLabel && `Want to start: ${startLabel}`,
      callLabel && `Best time to call: ${callLabel}`,
    ].filter(Boolean)
    const url = `https://wa.me/919702368612?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const fieldClass =
    'w-full bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] rounded-xl px-4 py-3 text-[14px] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-[#513394] focus:ring-2 focus:ring-[#513394]/15 transition-colors'

  return (
    <section id="contact" className="pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 lg:pb-10 bg-[#F3F4F6] dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/[0.08] shadow-sm p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14">
            <div className="lg:col-span-6 flex flex-col">
              <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-[#513394] dark:text-[#A78BFA] uppercase bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mb-5 w-fit">
                <Droplets className="w-3.5 h-3.5" strokeWidth={2.5} />
                Contact Us
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                One message away from{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">starting your recovery.</span>
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                Ready to take control of your recovery? Our team is here to answer your questions,
                understand your condition, and guide you to a personalised aqua therapy plan.
              </p>

              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.08] mt-auto">
                <div className="grid grid-cols-2 bg-[#F3F4F6] dark:bg-white/[0.04] px-5 py-3.5">
                  <span className="font-black text-gray-900 dark:text-white text-[14px]">Day</span>
                  <span className="font-black text-gray-900 dark:text-white text-[14px]">Schedule</span>
                </div>
                {HOURS.map((h, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 px-5 py-3.5 ${
                      i > 0 ? 'border-t border-gray-100 dark:border-white/[0.06]' : ''
                    } ${i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-[#FAFAFA] dark:bg-white/[0.02]'}`}
                  >
                    <span className="text-gray-600 dark:text-gray-300 text-[14px]">{h.day}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-[14px]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[1.75rem] bg-[#F8F5FF] dark:bg-white/[0.04] border border-[#513394]/15 dark:border-white/[0.08] p-7 lg:p-8 xl:p-9 h-full">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2 text-center sm:text-left">
                  Book An Appointment
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed mb-7 text-center sm:text-left">
                  Answer a few quick questions and we&apos;ll confirm on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        required
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91"
                        required
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-white/[0.08] pt-5 space-y-5">
                    <div>
                      <QuestionLabel n={1}>What are you recovering from?</QuestionLabel>
                      <select
                        value={recovery}
                        onChange={(e) => setRecovery(e.target.value)}
                        required
                        className={fieldClass}
                      >
                        <option value="">Select an option</option>
                        {RECOVERY_OPTIONS.map((o) => (
                          <option key={o.id} value={o.id}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <QuestionLabel n={2}>When would you like to start?</QuestionLabel>
                      <select
                        value={startWhen}
                        onChange={(e) => setStartWhen(e.target.value)}
                        required
                        className={fieldClass}
                      >
                        <option value="">Select an option</option>
                        {START_OPTIONS.map((o) => (
                          <option key={o.id} value={o.id}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <QuestionLabel n={3}>What&apos;s the best time to call you?</QuestionLabel>
                      <select
                        value={callTime}
                        onChange={(e) => setCallTime(e.target.value)}
                        required
                        className={fieldClass}
                      >
                        <option value="">Select an option</option>
                        {CALL_TIME_OPTIONS.map((o) => (
                          <option key={o.id} value={o.id}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#513394] hover:bg-[#603eb0] text-white font-black py-4 rounded-xl transition-all hover:scale-[1.01] text-[15px] tracking-wide"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-10">
            {CONTACT_CHIPS.map((c, i) => {
              const Icon = c.icon
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 rounded-2xl border px-5 py-5 transition-all ${
                    c.highlight
                      ? 'bg-[#513394] border-[#513394] hover:bg-[#603eb0]'
                      : 'bg-white dark:bg-white/[0.03] border-gray-100 dark:border-white/[0.08] hover:border-[#513394]/30'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      c.highlight ? 'bg-white/20' : 'bg-[#513394]'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-bold text-[15px] leading-tight mb-0.5 ${
                        c.highlight ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {c.label}
                    </p>
                    <p
                      className={`text-[13px] truncate ${
                        c.highlight ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {c.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
