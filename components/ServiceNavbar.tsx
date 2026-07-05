'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavLink {
  label: string
  href: string
  isScroll?: boolean
}

interface ServiceNavbarProps {
  phoneNumber?: string
  phoneDisplay?: string
  bookingHref?: string
  navLinks?: NavLink[]
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services', isScroll: true },
  { label: 'Benefits', href: '#benefits', isScroll: true },
  { label: 'Protocol', href: '#protocol', isScroll: true },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function ServiceNavbar({
  phoneNumber = '919702368612',
  phoneDisplay = '+91 97023 68612',
  bookingHref = '/contact',
  navLinks = DEFAULT_NAV_LINKS,
}: ServiceNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll?: boolean) => {
    if (!isScroll) return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{ background: 'rgba(7, 5, 18, 0.92)', backdropFilter: 'blur(14px)' }}
      >
        {/* Subtle bottom glow line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #7B5FCA44 30%, #C2185B33 60%, #FF6B3544 80%, transparent 100%)',
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/REBOOT FINAL LOGO_1.png"
              alt="R3BOOT Recovery Centre"
              width={140}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isScroll)}
                className="text-white/70 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — phone + CTA */}
          <div className="hidden lg:flex items-center gap-7">
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] font-medium transition-colors duration-200"
            >
              <PhoneIcon className="w-4 h-4" />
              {phoneDisplay}
            </a>
            <Link
              href={bookingHref}
              className="bg-[#513394] hover:bg-[#412975] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#513394]/25"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white/80 hover:text-white p-1 transition-colors"
            aria-label="Open navigation menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[200] lg:hidden flex flex-col animate-in slide-in-from-right duration-300"
          style={{ background: '#07050F' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/images/REBOOT FINAL LOGO_1.png"
              alt="R3BOOT"
              width={110}
              height={36}
              className="h-9 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="mx-6 h-px bg-white/[0.07]" />

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center px-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href, link.isScroll)
                  setIsMobileMenuOpen(false)
                }}
                className="group flex items-center gap-4 py-[18px] border-b border-white/[0.06] last:border-0"
              >
                <span className="text-[#513394] text-[10px] font-black tracking-widest w-5 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-white text-[1.75rem] font-black tracking-tight leading-none group-active:text-[#A78BFA] transition-colors duration-150">
                  {link.label}
                </span>
                <ChevronRightIcon className="w-4 h-4 text-white/15 ml-auto shrink-0" />
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-10 pt-4 space-y-3">
            <div className="h-px bg-white/[0.07] mb-5" />
            <a
              href={`tel:+${phoneNumber}`}
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-bold text-[16px] bg-[#513394] active:scale-95 transition-transform"
            >
              <PhoneIcon className="w-5 h-5" />
              Call to Book
            </a>
          </div>
        </div>
      )}
    </>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
