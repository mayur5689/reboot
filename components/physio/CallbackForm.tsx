'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

type Props = {
  /** Shown in the email subject and Sheet "source" column, e.g. "back-pain-hero". */
  source: string
  /** Options for the "what's bothering you" dropdown. "Other" is appended automatically. */
  concerns: string[]
  concernLabel?: string
  whatsappHref: string
  /** Single-clinic pages: skip the clinic dropdown and send this value instead. */
  fixedClinic?: string
  /** Drop the helper line under the title for a quieter form. */
  hideIntro?: boolean
}

const OTHER = 'Other'
const CLINICS = ['Dadar', 'Lower Parel', 'Either']

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

/** Accepts 10-digit Indian mobiles, with or without +91 / 0 prefix and spaces. */
function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '')
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits.length === 11 && digits.startsWith('0') ? digits.slice(1) : digits
  return /^[6-9]\d{9}$/.test(local) ? local : null
}

const fieldClass =
  // 16px minimum: iOS Safari auto-zooms the page when a focused input is smaller.
  'w-full h-12 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 text-[16px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#A78BFA] focus:bg-white/[0.09]'

export function CallbackForm({ source, concerns, concernLabel = "What's bothering you?", whatsappHref, fixedClinic, hideIntro }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [concern, setConcern] = useState('')
  const [other, setOther] = useState('')
  const [pickedClinic, setClinic] = useState('')
  const clinic = fixedClinic ?? pickedClinic
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    if (honeypot) return // bot

    const cleanPhone = normalisePhone(phone)
    if (name.trim().length < 2) return setError('Please enter your name.')
    if (!cleanPhone) return setError('Please enter a valid 10-digit mobile number.')
    if (!concern) return setError('Please choose what is bothering you.')
    if (concern === OTHER && other.trim().length < 2) return setError('Please describe the problem briefly.')

    const concernText = concern === OTHER ? `Other: ${other.trim()}` : concern
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: `+91 ${cleanPhone}`,
          subject: `Callback request (${source})`,
          recovery: concernText,
          message: `Callback request from ${source}. Concern: ${concernText}. Preferred clinic: ${clinic || 'Not specified'}.`,
          source,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      window.dataLayer?.push({ event: 'generate_lead', lead_source: source, lead_concern: concernText, lead_clinic: clinic || 'none' })
    } catch {
      setStatus('error')
      setError('Could not send right now. Please call or WhatsApp us instead.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-5 max-w-[520px]" role="status">
        <p className="text-white font-black text-lg mb-1">Thanks {name.trim().split(' ')[0]}, request received.</p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Our team will call you on +91 {normalisePhone(phone)} during clinic hours. Want a faster reply?
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/25 text-white font-bold px-5 py-2.5 rounded-full text-[13px] hover:bg-white/10 transition-colors"
        >
          Message us on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Request a callback"
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-[520px]"
    >
      <p className={`text-white font-bold text-[15px] ${hideIntro ? 'mb-3' : 'mb-0.5'}`}>Request a callback</p>
      {!hideIntro && <p className="text-white/50 text-[12px] mb-3">Leave your number and our team will call you back.</p>}

      <div className="grid grid-cols-2 gap-2.5">
        <label className="sr-only" htmlFor={`${source}-name`}>Name</label>
        <input
          id={`${source}-name`}
          className={fieldClass}
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
        />
        <label className="sr-only" htmlFor={`${source}-phone`}>Mobile number</label>
        <input
          id={`${source}-phone`}
          className={fieldClass}
          placeholder="Mobile number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={16}
        />
        <label className="sr-only" htmlFor={`${source}-concern`}>{concernLabel}</label>
        <select
          id={`${source}-concern`}
          className={`${fieldClass} appearance-none ${fixedClinic ? 'col-span-2' : ''} ${concern ? '' : 'text-white/40'}`}
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
        >
          <option value="" disabled className="text-gray-900">{concernLabel}</option>
          {[...concerns, OTHER].map((c) => (
            <option key={c} value={c} className="text-gray-900">{c}</option>
          ))}
        </select>
        {!fixedClinic && (
          <>
            <label className="sr-only" htmlFor={`${source}-clinic`}>Preferred clinic</label>
            <select
              id={`${source}-clinic`}
              className={`${fieldClass} appearance-none ${pickedClinic ? '' : 'text-white/40'}`}
              value={pickedClinic}
              onChange={(e) => setClinic(e.target.value)}
            >
              <option value="" className="text-gray-900">Preferred clinic</option>
              {CLINICS.map((c) => (
                <option key={c} value={c} className="text-gray-900">{c}</option>
              ))}
            </select>
          </>
        )}
        {concern === OTHER && (
          <>
            <label className="sr-only" htmlFor={`${source}-other`}>Describe the problem</label>
            <input
              id={`${source}-other`}
              className={`${fieldClass} col-span-2`}
              placeholder="Briefly, what is the problem?"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              maxLength={160}
              autoFocus
            />
          </>
        )}
        {/* Honeypot: hidden from people, bots fill it. */}
        <input
          tabIndex={-1}
          aria-hidden
          autoComplete="off"
          className="hidden"
          name="company"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {error && (
        <p className="text-[12px] text-red-300 mt-2.5" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-3 w-full h-12 rounded-xl bg-[#513394] hover:bg-[#603eb0] disabled:opacity-60 text-white font-bold text-[16px] transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Call me back'}
      </button>
    </form>
  )
}
