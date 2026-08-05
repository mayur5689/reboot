'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { HomepageCopyCtaCard } from './HomepageCopyCta'
import { Reveal, Stagger, StaggerItem, fadeUp } from '@/components/motion/Reveal'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
]

const services = [
  { label: 'Physiotherapy', href: '/services/physiotherapy' },
  { label: 'Contrast Therapy', href: '/services/contrast-therapy' },
  { label: 'Aqua Therapy', href: '/services/aqua-therapy' },
  { label: 'Clinical Pilates', href: '/services/clinical-pilates' },
  { label: 'Sports Massage', href: '/services/sports-massage' },
  { label: 'Sports Psychology & Counselling', href: '/services/sports-psychology' },
]

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/r3boot.in' },
  { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61583158809554' },
]

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2">
      <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]" />
      <span className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#A78BFA]">
        {children}
      </span>
    </div>
  )
}

export default function HomepageCopyFooter() {
  return (
    <>
      <HomepageCopyCtaCard />

      <footer className="relative border-t border-white/[0.06] bg-[#0A0A0A] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(81,51,148,0.12),_transparent_55%)]" />

        <div className="relative container mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Stagger className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mb-16 lg:grid-cols-12 lg:gap-12">
            <StaggerItem variants={fadeUp} className="space-y-6 lg:col-span-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/REBOOT FINAL LOGO_1.png"
                  alt="R3BOOT Logo"
                  width={160}
                  height={54}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
                India&apos;s first integrated recovery centre in Dadar, Mumbai —
                physiotherapy, contrast therapy, aqua rehab, and sports recovery under one roof.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>Palai Plaza, 203, Swami Gyan Jivandas Marg</p>
                <p>Dadar East, Mumbai - 400 014</p>
                <p className="pt-2">
                  <a href="tel:+919702368612" className="font-semibold text-white transition-colors hover:text-[#A78BFA]">
                    +91 9702368612
                  </a>
                </p>
                <p>
                  <a href="mailto:info.r3boot@gmail.com" className="transition-colors hover:text-[#A78BFA]">
                    info.r3boot@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-[#A78BFA] hover:text-[#A78BFA]"
                    aria-label={social.name}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem variants={fadeUp} className="lg:col-span-2 lg:col-start-7">
              <ColLabel>Explore</ColLabel>
              <ul className="space-y-3 text-sm font-medium text-white/65">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem variants={fadeUp} className="lg:col-span-3">
              <ColLabel>Services</ColLabel>
              <ul className="space-y-3 text-sm font-medium text-white/65">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </Stagger>

          <Reveal className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/40 sm:flex-row">
            <p>© 2025 R3BOOT. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  )
}
