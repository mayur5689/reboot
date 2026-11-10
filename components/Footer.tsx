'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

type FooterLink = { label: string; href: string };
type FooterGroup = { title: string; links: FooterLink[] };

/*
 * Every link stays in the HTML on mobile (collapsed groups use CSS, not
 * conditional rendering), so crawlers still see the full internal link set.
 */
const GROUPS: FooterGroup[] = [
  {
    title: 'Physiotherapy',
    links: [
      { label: 'Physiotherapy Mumbai', href: '/services/physiotherapy' },
      { label: 'Physiotherapy Dadar', href: '/physiotherapy-dadar-mumbai' },
      { label: 'Physiotherapy Lower Parel', href: '/physiotherapy-lower-parel' },
      { label: 'Back Pain', href: '/services/physiotherapy/back-pain' },
      { label: 'Neck Pain', href: '/services/physiotherapy/neck-pain' },
      { label: 'Knee Pain', href: '/services/physiotherapy/knee-pain' },
      { label: 'Shoulder Pain', href: '/services/physiotherapy/shoulder-pain' },
      { label: 'Sports Injuries', href: '/services/physiotherapy/sports-injuries' },
      { label: 'Post-Surgery Rehab', href: '/services/physiotherapy/post-surgery' },
      { label: 'Athlete Screening', href: '/services/athlete-screening' },
    ],
  },
  {
    title: 'Recovery',
    links: [
      { label: 'Contrast Therapy Mumbai', href: '/services/contrast-therapy' },
      { label: 'Contrast Therapy Dadar', href: '/contrast-therapy-dadar' },
      { label: 'Contrast Therapy Bandra', href: '/contrast-therapy-bandra' },
      { label: 'Contrast Therapy Lower Parel', href: '/contrast-therapy-lower-parel' },
      { label: 'Contrast Therapy Andheri', href: '/contrast-therapy-andheri' },
      { label: 'Contrast Therapy Worli', href: '/contrast-therapy-worli' },
      { label: 'Ice Bath Mumbai', href: '/ice-bath-mumbai' },
      { label: 'Cold Plunge Mumbai', href: '/cold-plunge-mumbai' },
      { label: 'Infrared Sauna Mumbai', href: '/infrared-sauna-mumbai' },
      { label: 'Compression Therapy', href: '/services/compression-therapy' },
      { label: 'Aqua Therapy', href: '/services/aqua-therapy' },
    ],
  },
  {
    title: 'Pilates and Massage',
    links: [
      { label: 'Pilates', href: '/services/clinical-pilates' },
      { label: 'Pilates Lower Parel', href: '/pilates-lower-parel' },
      { label: 'Reformer Pilates Lower Parel', href: '/reformer-pilates-lower-parel' },
      { label: 'Sports Massage Mumbai', href: '/services/sports-massage' },
      { label: 'Sports Massage Dadar', href: '/sports-massage-dadar' },
      { label: 'Mental Training', href: '/services/mental-training' },
    ],
  },
  {
    title: 'R3BOOT',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Affiliate Partnerships', href: '/partnerships' },
      { label: 'Employee Wellness', href: '/employee-wellness' },
    ],
  },
];

const CLINICS = [
  { name: 'Dadar East', address: 'Palai Plaza, 203, Swami Gyan Jivandas Marg, Mumbai 400014' },
  { name: 'Lower Parel', address: 'Lodha Signet, A-303, Senapati Bapat Marg, Mumbai 400013' },
];

const SOCIAL = [
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/r3boot.in' },
  { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61583158809554' },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-white/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Footer: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="relative bg-gradient-to-br from-[#1A0B3B] via-[#2D1B5A] to-[#3B1F75] dark:bg-none dark:bg-[#0A0A0A] text-white pt-12 md:pt-16 pb-24 md:pb-12 overflow-visible border-t border-white/5 transition-colors duration-300">
      {/* Background pattern: light mode (purple theme) only */}
      <div className="absolute inset-0 opacity-20 pointer-events-none dark:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#513394,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-10 md:mb-16">
          {/* Brand and contact */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block" aria-label="R3BOOT home">
              <Image src="/images/REBOOT FINAL LOGO_1.png" alt="R3BOOT" width={180} height={60} className="h-11 md:h-14 w-auto" />
            </Link>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-1 gap-5">
              {CLINICS.map((c) => (
                <div key={c.name}>
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#A78BFA] mb-1.5">{c.name}</p>
                  <p className="text-[14px] leading-snug text-white/75">{c.address}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 text-[15px] font-medium">
              <a href="tel:+919702368612" className="text-white hover:text-[#A78BFA] transition-colors">
                +91 97023 68612
              </a>
              <a href="mailto:info.r3boot@gmail.com" className="text-white/75 hover:text-white transition-colors">
                info.r3boot@gmail.com
              </a>
            </div>
          </div>

          {/* Link groups: accordions on mobile, columns on desktop */}
          <nav aria-label="Footer" className="lg:col-span-9 grid md:grid-cols-4 md:gap-8 border-t border-white/10 md:border-0">
            {GROUPS.map((g) => {
              const isOpen = open === g.title;
              const id = `footer-${g.title.toLowerCase().replace(/[^a-z]+/g, '-')}`;
              return (
                <div key={g.title} className="border-b border-white/10 md:border-0">
                  <button
                    type="button"
                    className="md:hidden w-full flex items-center justify-between py-4 text-left text-[15px] font-semibold"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? null : g.title)}
                  >
                    {g.title}
                    <Chevron open={isOpen} />
                  </button>
                  <p className="hidden md:block text-[12px] font-bold uppercase tracking-[0.14em] text-[#A78BFA] mb-4">{g.title}</p>
                  <ul id={id} className={`${isOpen ? 'grid' : 'hidden'} md:grid grid-cols-1 gap-y-1 md:gap-y-2.5 pb-4 md:pb-0`}>
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="block py-1.5 md:py-0 text-[15px] md:text-[14px] text-white/80 hover:text-[#A78BFA] transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-5 text-[13px] text-white/55">
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#A78BFA] hover:border-[#A78BFA] transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>
            © {new Date().getFullYear()} R3BOOT · Designed and managed by Valmiki Media
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
