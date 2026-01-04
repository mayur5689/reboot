"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { services } from '@/lib/services'

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md py-3 shadow-xl'
      : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}>
      <div className="container mx-auto px-6 lg:px-8 transition-all duration-300 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`flex items-center transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
          <Image
            src="/images/REBOOT FINAL LOGO_1.png"
            alt="R3BOOT Logo"
            width={140}
            height={45}
            className={`h-11 w-auto transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
            priority
          />
        </Link>

        {/* Navigation Links - Centered */}
        <div className={`hidden lg:flex items-center space-x-10 font-medium text-[15px] tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
          <Link href="/" className="hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>

          {/* Services with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link href="/services" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity py-2">
              Services <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Mega Menu Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[900px]">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 grid grid-cols-3 gap-x-8 gap-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#513394]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[#513394]">
                        {getServiceIcon(service.title)}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-sm mb-1">{service.title}</h3>
                        <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">{service.description}</p>
                      </div>
                    </Link>
                  ))}

                  <div className="col-span-3 mt-4 pt-6 border-t border-gray-100 flex justify-center">
                    <Link
                      href="/services"
                      className="bg-[#513394] text-white px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      View All Our Services
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
        <div className="flex items-center gap-5">
          {/* WhatsApp Icon */}
          <Link href="https://wa.me/yournumber" target="_blank" className={`hidden sm:flex transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
            } hover:opacity-70`}>
            <WhatsAppIcon className="w-7 h-7" />
          </Link>

          {/* CTA Button */}
          <button
            className="hidden sm:block text-white font-semibold px-6 py-2.5 text-sm rounded-full transition-all hover:opacity-90 shadow-lg shadow-[#513394]/20"
            style={{ backgroundColor: '#513394' }}
          >
            Join us today
          </button>

          {/* Mobile Menu Button */}
          <button className={`lg:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  )
}

// Helper to get icons for the mega menu
function getServiceIcon(title: string) {
  switch (title) {
    case "Physiotherapy": return <PathologyIcon />;
    case "Hydrotherapy": return <WaterIcon />;
    case "Clinical Pilates": return <PilatesIcon />;
    case "Contrast Therapy": return <ContrastIcon />;
    case "Sports Massage": return <MassageIcon />;
    case "Deep Tissue Massage": return <DeepMassageIcon />;
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
