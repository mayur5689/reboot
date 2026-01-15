"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '@/lib/services'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const isHome = pathname === '/'
  const shouldBeSolid = !isHome || isScrolled || isServicesOpen

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${shouldBeSolid
        ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-xl'
        : 'bg-gradient-to-b from-black/80 via-black/10 to-transparent py-5'
        }`}>
        <div className="container mx-auto px-6 lg:px-8 transition-all duration-300 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`flex items-center transition-all duration-300 ${shouldBeSolid ? 'py-1.5' : 'py-3'}`}>
            <Image
              src="/images/REBOOT FINAL LOGO_1.png"
              alt="R3BOOT Logo"
              width={160}
              height={50}
              className={`h-12 w-auto transition-all duration-300 ${shouldBeSolid && theme === 'light' ? 'brightness-0' : ''}`}
              priority
            />
          </Link>

          {/* Navigation Links - Centered */}
          <div className={`hidden lg:flex items-center space-x-12 font-bold text-[17px] tracking-wide transition-colors duration-300 ${shouldBeSolid ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>

            {/* Services with Mega Menu */}
            <div
              className="static h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity py-2">
                Services <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Menu Dropdown - Full Width */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-[#1A1A1A] border-t border-gray-100 dark:border-white/5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                  {/* Extra large Connection Bridge to prevent losing hover */}
                  <div className="absolute -top-12 left-0 w-full h-12 bg-transparent" />

                  <div className="container mx-auto px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 group"
                        >
                          <div className="w-11 h-11 rounded-xl bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                            {getServiceIcon(service.title)}
                          </div>
                          <div className="pt-1">
                            <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors">{service.title}</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight line-clamp-2">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer Action */}
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
                        Can&apos;t find what you&apos;re looking for? Explore our recovery services.
                      </p>
                      <Link
                        href="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="bg-[#513394] text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#412975] transition-all flex items-center gap-2 shadow-lg shadow-[#513394]/20 hover:scale-105 active:scale-95"
                      >
                        Explore All Solutions
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
            <Link href="/blog" className="hover:opacity-70 transition-opacity">
              Blog
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-3 rounded-full transition-all duration-300 ${shouldBeSolid ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            )}

            {/* CTA Button */}
            <Link href="/contact">
              <button
                className="hidden sm:block text-white font-semibold px-6 py-2.5 text-sm rounded-full transition-all hover:opacity-90 shadow-lg shadow-[#513394]/20"
                style={{ backgroundColor: '#513394' }}
              >
                Join us today
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden focus:outline-none transition-colors duration-300 ${shouldBeSolid ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white dark:bg-[#0A0A0A] animate-in slide-in-from-top duration-700 ease-in-out lg:hidden flex flex-col">
          {/* Header in Menu */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50 dark:border-white/5">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/REBOOT FINAL LOGO_1.png"
                alt="R3BOOT Logo"
                width={120}
                height={40}
                className={`h-10 w-auto transition-all duration-300 ${theme === 'dark' ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-900 dark:text-white p-2 hover:rotate-90 transition-transform duration-300"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 py-12 px-6">
            <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-[#1A1A1A] dark:text-white tracking-tight uppercase animate-in fade-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors">About</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors">Services</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors">Contact</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors">Blog</Link>
            </nav>

            <div className="mt-12 w-full max-w-xs flex flex-col gap-6 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <Link href="https://wa.me/919702368612" target="_blank" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
                <span className="text-lg font-bold">WhatsApp Us</span>
              </Link>
              <Link href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="w-full text-white font-bold py-5 rounded-full shadow-2xl text-lg tracking-wide transform active:scale-95 transition-all"
                  style={{ backgroundColor: '#513394' }}
                >
                  Join us today
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Helper to get icons for the mega menu
function getServiceIcon(title: string) {
  switch (title) {
    case "Hydrotherapy": return <WaterIcon />;
    case "Clinical Pilates": return <PilatesIcon />;
    case "Contrast Therapy": return <ContrastIcon />;
    case "Sports Massage": return <MassageIcon />;
    case "Sports Psychology": return <BrainIcon />;
    case "Counselling & Mental Training": return <MentalIcon />;
    default: return <PathologyIcon />;
  }
}

// Service Icons
function PathologyIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 14c1.49 0 2-1 2-2V7l-9-5-9 5v5c0 1 1 2 2 2" />
      <path d="M12 22v-9" />
      <path d="M5 14v7c0 1 1 1 1 1h12c1 0 1-1 1-1v-7" />
    </svg>
  )
}

function WaterIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5L12 2 8l-4 7.5C2.1 11.1 2 13 2 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}

function PilatesIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <path d="M6 22l6-5 6 5M12 11v6l-5 4M12 17l5 4" />
    </svg>
  )
}

function ContrastIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10" />
    </svg>
  )
}

function MassageIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM17 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      <path d="M3 21c3-3 7-3 10 0M11 13c3-3 7-3 10 0" />
    </svg>
  )
}

function DeepMassageIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="15" rx="2" />
      <path d="M17 2v5M7 2v5M2 12h20" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A5 5 0 0 1 12 7c0 5-2.5 7-2.5 10a2.5 2.5 0 0 1-5 0c0-3 2.5-5 2.5-10A5 5 0 0 1 9.5 2z" />
      <path d="M14.5 2A5 5 0 0 0 12 7c0 5 2.5 7 2.5 10a2.5 2.5 0 0 0 5 0c0-3-2.5-5-2.5-10A5 5 0 0 0 14.5 2z" />
    </svg>
  )
}

function MentalIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
