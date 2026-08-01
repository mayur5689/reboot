'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Phone, MapPin, Droplets } from 'lucide-react'

const HOURS = [
  { day: 'Mon – Tue', time: '8:00 am – 9:00 pm' },
  { day: 'Wed', time: '8:00 am – 4:00 pm' },
  { day: 'Thu – Sat', time: '8:00 am – 9:00 pm' },
  { day: 'Sun', time: '2:00 pm – 9:00 pm' },
]

const RECOVERY_OPTIONS = [
  { id: 'acl-knee', label: 'ACL tear / Knee replacement' },
  { id: 'back-disc', label: 'Back pain or disc issue' },
  { id: 'hip-shoulder', label: 'Hip or shoulder pain' },
  { id: 'other', label: 'Other' },
]

const START_OPTIONS = [
  { id: 'immediately', label: 'Immediately' },
  { id: 'this-week', label: 'This week' },
  { id: 'this-month', label: 'This month' },
  { id: 'exploring', label: 'Just exploring' },
]

const CALL_TIME_OPTIONS = [
  { id: 'morning', label: 'Morning — 9am–12pm' },
  { id: 'afternoon', label: 'Afternoon — 12pm–4pm' },
  { id: 'evening', label: 'Evening — 6pm–9pm' },
  { id: 'anytime', label: 'Anytime' },
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
  const router = useRouter()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [recovery, setRecovery] = useState('')
  const [startWhen, setStartWhen] = useState('')
  const [callTime, setCallTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    const trimmedName = name.trim()
    const digitsOnly = phone.replace(/\D/g, '')

    if (!trimmedName) {
      setError('Please enter your name.')
      return
    }
    if (!digitsOnly) {
      setError('Please enter your phone number.')
      return
    }
    if (digitsOnly.length < 10) {
      setError('Please enter a valid phone number (at least 10 digits).')
      return
    }
    if (!recovery || !startWhen || !callTime) {
      setError('Please answer all questions.')
      return
    }

    setLoading(true)

    const recoveryLabel = RECOVERY_OPTIONS.find((o) => o.id === recovery)?.label ?? recovery
    const startLabel = START_OPTIONS.find((o) => o.id === startWhen)?.label ?? startWhen
    const callLabel = CALL_TIME_OPTIONS.find((o) => o.id === callTime)?.label ?? callTime

    const message = [
      'Aqua Therapy free consultation request',
      `Recovering from: ${recoveryLabel}`,
      `Want to start: ${startLabel}`,
      `Best time to call: ${callLabel}`,
    ].join('\n')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          phone: digitsOnly,
          subject: 'Aqua Therapy Free Consultation',
          message,
          source: 'aqua-therapy-mumbai',
          recovery: recoveryLabel,
          startWhen: startLabel,
          callTime: callLabel,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to send. Please try again.')
      }

      router.push('/aqua-therapy-mumbai/thank-you')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const fieldClass =
    'w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/[0.1] rounded-xl px-4 py-3.5 text-[15px] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-[#513394] focus:ring-2 focus:ring-[#513394]/15 transition-colors disabled:opacity-60'
  const selectClass = `${fieldClass} appearance-none cursor-pointer pr-10 bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat`
  const selectChevron =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")"

  return (
    <section id="contact" className="pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 bg-[#F3F4F6] dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] sm:rounded-[2rem] bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/[0.08] shadow-sm p-5 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
            {/* Left copy + hours — after form on mobile */}
            <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
              <span className="hidden lg:inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-[#513394] dark:text-[#A78BFA] uppercase bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mb-5 w-fit">
                <Droplets className="w-3.5 h-3.5" strokeWidth={2.5} />
                Free Consultation
              </span>

              <h2 className="hidden lg:block text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                Book your{' '}
                <span className="text-[#513394] dark:text-[#8B5CF6]">free consultation</span>
              </h2>

              <p className="hidden lg:block text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                Tell us what you&apos;re recovering from. We&apos;ll get back to you within 24 hours
                and guide you to the right aqua therapy plan.
              </p>

              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.08] mt-2 lg:mt-auto">
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

            {/* Form — first on mobile, wider on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="rounded-[1.5rem] sm:rounded-[1.75rem] bg-[#F8F5FF] dark:bg-white/[0.04] border border-[#513394]/15 dark:border-white/[0.08] p-5 sm:p-7 lg:p-8 xl:p-9 h-full">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                  Get a free consultation
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed mb-6">
                  No charge to talk it through. Fill this in and we&apos;ll reach out within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        required
                        minLength={2}
                        autoComplete="name"
                        disabled={loading}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 12))}
                        placeholder="10-digit mobile number"
                        required
                        inputMode="numeric"
                        pattern="[0-9]{10,12}"
                        minLength={10}
                        maxLength={12}
                        autoComplete="tel"
                        disabled={loading}
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
                        disabled={loading}
                        className={selectClass}
                        style={{ backgroundImage: selectChevron }}
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
                        disabled={loading}
                        className={selectClass}
                        style={{ backgroundImage: selectChevron }}
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
                        disabled={loading}
                        className={selectClass}
                        style={{ backgroundImage: selectChevron }}
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

                  {error && (
                    <p className="text-red-600 dark:text-red-400 text-[14px] font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#513394] hover:bg-[#603eb0] disabled:opacity-60 disabled:hover:scale-100 text-white font-black py-4 rounded-xl transition-all hover:scale-[1.01] text-[15px] tracking-wide"
                  >
                    {loading ? 'Sending…' : 'Get Free Consultation'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
            {CONTACT_CHIPS.map((c, i) => {
              const Icon = c.icon
              return (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 rounded-2xl border px-5 py-4 sm:py-5 transition-all ${
                    c.highlight
                      ? 'bg-[#513394] border-[#513394] hover:bg-[#603eb0]'
                      : 'bg-white dark:bg-white/[0.03] border-gray-100 dark:border-white/[0.08] hover:border-[#513394]/30'
                  }`}
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 ${
                      c.highlight ? 'bg-white/20' : 'bg-[#513394]'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-bold text-[14px] sm:text-[15px] leading-tight mb-0.5 ${
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
