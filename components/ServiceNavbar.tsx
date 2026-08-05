'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, ChevronDown } from 'lucide-react'
import { services } from '@/lib/services'

interface NavLink {
  label: string
  href: string
  isScroll?: boolean
}

interface ServiceNavbarProps {
  phoneNumber?: string
  phoneDisplay?: string
  navLinks?: NavLink[]
  /** Top promo ribbon — e.g. Free consultation + Call now */
  showPromoRibbon?: boolean
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function ServiceNavbar({
  phoneNumber = '919702368612',
  phoneDisplay = '+91 97023 68612',
  navLinks = DEFAULT_NAV_LINKS,
  showPromoRibbon = false,
}: ServiceNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll?: boolean) => {
    if (!isScroll) return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = showPromoRibbon ? 116 : 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div
        className={
          showPromoRibbon
            ? 'sticky top-0 z-[100]'
            : 'fixed top-0 left-0 right-0 z-[100]'
        }
      >
        {showPromoRibbon && (
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1a0850] via-[#513394] to-[#7B5FCA] text-white">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-banner-sweep" />
            <div className="flex w-max animate-marquee py-2.5 text-[12px] sm:text-[13px] font-semibold tracking-wide hover:[animation-play-state:paused]">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  className="flex shrink-0 items-center gap-8 sm:gap-12 px-6 sm:px-10"
                  aria-hidden={dup === 1 || undefined}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] shrink-0" />
                    Free consultation — Aqua Therapy
                  </span>
                  <span className="text-white/30" aria-hidden>
                    ◆
                  </span>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi R3BOOT, I want a free consultation for Aqua Therapy.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    WhatsApp us now
                  </a>
                  <span className="text-white/30" aria-hidden>
                    ◆
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] shrink-0" />
                    Physio-supervised aqua treadmill at R3BOOT Dadar
                  </span>
                  <span className="text-white/30" aria-hidden>
                    ◆
                  </span>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi R3BOOT, I want a free consultation for Aqua Therapy.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    Book via WhatsApp
                  </a>
                  <span className="text-white/30" aria-hidden>
                    ◆
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <nav
          className="relative"
          style={{ background: 'rgba(7, 5, 18, 0.92)', backdropFilter: 'blur(14px)' }}
        >
          {/* Subtle bottom glow line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #7B5FCA44 30%, #C2185B33 60%, #FF6B3544 80%, transparent 100%)',
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 h-[70px] flex items-center justify-between">
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
              {navLinks.map((link) =>
                link.href === '/services' ? (
                  <div
                    key={link.label}
                    className="relative h-[70px] flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 text-white/70 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div
                          className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-2"
                          style={{ background: 'rgba(12, 9, 24, 0.98)', backdropFilter: 'blur(14px)' }}
                        >
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-colors group"
                            >
                              <p className="text-white text-[14px] font-bold group-hover:text-[#A78BFA] transition-colors">{service.title}</p>
                              <p className="text-white/40 text-[12px] leading-snug mt-0.5 line-clamp-1">{service.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isScroll)}
                    className="text-white/70 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Right — theme toggle + phone + CTA */}
            <div className="hidden lg:flex items-center gap-7">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <a
                href={`tel:+${phoneNumber}`}
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] font-medium transition-colors duration-200"
              >
                <PhoneIcon className="w-4 h-4" />
                {phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi R3BOOT, I want to book a session.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#513394] hover:bg-[#412975] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#513394]/25"
              >
                Book Now
              </a>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex lg:hidden items-center gap-1">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Open navigation menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

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
              width={150}
              height={49}
              className="h-12 w-auto"
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
          <nav className="flex-1 flex flex-col justify-center px-6 overflow-y-auto py-4">
            {navLinks.map((link, i) =>
              link.href === '/services' ? (
                <div key={link.label} className="border-b border-white/[0.06]">
                  <button
                    onClick={() => setIsMobileServicesOpen((open) => !open)}
                    className="group flex items-center gap-4 py-[18px] w-full text-left"
                  >
                    <span className="text-[#513394] text-[10px] font-black tracking-widest w-5 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-white text-[1.75rem] font-black tracking-tight leading-none group-active:text-[#A78BFA] transition-colors duration-150">
                      {link.label}
                    </span>
                    <ChevronRightIcon
                      className={`w-4 h-4 text-white/15 ml-auto shrink-0 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="pb-4 pl-9 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => {
                            setIsMobileServicesOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                          className="py-2.5 text-white/70 active:text-[#A78BFA] text-[15px] font-semibold transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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
