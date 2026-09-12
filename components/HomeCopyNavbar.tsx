"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
]

const connectLinks = [
  { href: '/contact', label: 'Contact Us' },
  { href: '/partnerships', label: 'Affiliate Partnerships' },
  { href: '/employee-wellness', label: 'Employee Wellness' },
]

type MobileNavItem =
  | { href: string; label: string }
  | { label: string; children: typeof connectLinks }

export default function HomeCopyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isConnectOpen, setIsConnectOpen] = useState(false)
  const [isMobileConnectOpen, setIsMobileConnectOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldBeSolid = isScrolled || isConnectOpen

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${shouldBeSolid
        ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-xl'
        : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent py-6'
        }`}>
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-3 items-center">

          {/* Left: hamburger + thin nav links */}
          <div className="flex items-center gap-9">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-300 ${shouldBeSolid ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            <div className={`hidden lg:flex items-center gap-9 text-[20px] font-semibold tracking-wide transition-colors duration-300 ${shouldBeSolid ? 'text-gray-700 dark:text-white/80' : 'text-white/85'}`}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:opacity-70 transition-opacity">
                  {link.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsConnectOpen(true)}
                onMouseLeave={() => setIsConnectOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsConnectOpen(true)}
                  className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                  aria-expanded={isConnectOpen}
                  aria-haspopup="menu"
                >
                  Connect
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isConnectOpen ? 'rotate-180' : ''}`} />
                </button>

                {isConnectOpen && (
                  <div className="absolute top-full left-0 pt-4 z-50">
                    <div className="min-w-[260px] rounded-2xl bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-white/10 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {connectLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 rounded-xl text-[16px] font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#513394] dark:hover:text-[#A78BFA] transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Center: logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={shouldBeSolid ? '/images/r3boot-logo-navbar-v2.png' : '/images/r3boot-logo-white-purple.png'}
              alt="R3BOOT Logo"
              width={160}
              height={52}
              className={`h-[34px] w-auto transition-all duration-300 ${shouldBeSolid && theme === 'light' ? 'brightness-0' : ''}`}
              priority
            />
          </Link>

          {/* Right: theme toggle + pill CTA */}
          <div className="flex items-center justify-end gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`hidden sm:flex p-2.5 rounded-full transition-all duration-300 ${shouldBeSolid ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <a
              href={`https://wa.me/919702368612?text=${encodeURIComponent('Hi R3BOOT, I want to book a session.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-1 sm:gap-2 whitespace-nowrap text-white font-semibold px-3.5 py-2 text-[12px] sm:px-7 sm:py-3.5 sm:text-[17px] rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#513394' }}
              >
                Book Now
                <svg className="hidden sm:block w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] flex flex-col animate-in fade-in duration-300">
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/r3boot-logo-mobile-menu.png"
                alt="R3BOOT Logo"
                width={150}
                height={49}
                className="h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mx-6 h-px bg-white/[0.07]" />

          <nav className="flex-1 flex flex-col justify-center px-6">
            {([
              { href: '/', label: 'Home' },
              ...navLinks,
              { label: 'Connect', children: connectLinks },
            ] as MobileNavItem[]).map((item, i) =>
              'children' in item ? (
                <div key={item.label} className="border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setIsMobileConnectOpen((open) => !open)}
                    className="group flex items-center gap-4 py-[18px] w-full text-left animate-in fade-in slide-in-from-left-4 fill-mode-both"
                    style={{ animationDelay: `${i * 55}ms`, animationDuration: '350ms' }}
                    aria-expanded={isMobileConnectOpen}
                  >
                    <span className="text-[#513394] text-[10px] font-black tracking-widest w-5 shrink-0">0{i + 1}</span>
                    <span className="text-white text-[1.75rem] font-black tracking-tight leading-none group-active:text-[#A78BFA] transition-colors duration-150">
                      {item.label}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-white/15 ml-auto shrink-0 transition-transform duration-200 ${isMobileConnectOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileConnectOpen && (
                    <div className="pb-4 pl-9 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2.5 text-white/70 text-[17px] font-semibold hover:text-[#A78BFA] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-4 py-[18px] border-b border-white/[0.06] last:border-0 animate-in fade-in slide-in-from-left-4 fill-mode-both"
                  style={{ animationDelay: `${i * 55}ms`, animationDuration: '350ms' }}
                >
                  <span className="text-[#513394] text-[10px] font-black tracking-widest w-5 shrink-0">0{i + 1}</span>
                  <span className="text-white text-[1.75rem] font-black tracking-tight leading-none group-active:text-[#A78BFA] transition-colors duration-150">
                    {item.label}
                  </span>
                  <svg className="w-4 h-4 text-white/15 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )
            )}
          </nav>

          <div className="px-6 pb-10 pt-4 space-y-3 animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: '320ms', animationDuration: '350ms' }}>
            <div className="h-px bg-white/[0.07] mb-5" />
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-white/[0.07] border border-white/10 text-white font-bold text-[15px] active:scale-95 transition-transform"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            )}
            <a
              href="tel:+919702368612"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-bold text-[17px] active:scale-95 transition-transform"
              style={{ backgroundColor: '#513394' }}
            >
              Call to Book
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-white/[0.07] border border-white/10 text-white font-bold text-[15px] active:scale-95 transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </>
  )
}
