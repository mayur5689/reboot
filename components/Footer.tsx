'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'YouTube', icon: FaYoutube, href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1A0B3B] via-[#2D1B5A] to-[#3B1F75] dark:bg-none dark:bg-[#0A0A0A] text-white pt-16 pb-12 overflow-visible border-t border-white/5 transition-colors duration-300">
      {/* Background Pattern: Only visible in light mode (purple theme) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none dark:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#513394,transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(167,139,250,0.03)_25%,transparent_25%,transparent_50%,rgba(167,139,250,0.03)_50%,rgba(167,139,250,0.03)_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
      </div>


      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          {/* Left Column: Brand & Contact */}
          <div className="lg:w-1/4 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-5xl font-black tracking-tighter text-white group-hover:text-[#A78BFA] transition-colors">R3BOOT</span>
            </Link>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#A78BFA]">Contact Information</h4>
              <div className="text-white/80 text-base space-y-2 font-medium">
                <p>909, Mayuresh Cosmos, Plot No. 37, Sector-11</p>
                <p>Airoli, Navi Mumbai - 400 708</p>
              </div>
              <div className="text-white/80 text-base space-y-2 pt-2 font-medium">
                <p>Phone: <a href="tel:+912241632222" className="hover:text-white transition-colors underline decoration-[#513394] underline-offset-4">+91-22-41632222</a></p>
                <p>Email: <a href="mailto:info@r3boot.com" className="hover:text-white transition-colors underline decoration-[#513394] underline-offset-4">info@r3boot.com</a></p>
              </div>
            </div>
          </div>

          {/* Right Section: Multi-column links with vertical dividers */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Column 1: Services 1 */}
            <div className="space-y-4 border-l border-white/20 pl-8 pb-6 lg:pb-0">
              <ul className="space-y-4 text-base font-semibold text-white/90">
                <li><Link href="/services#ice-bath" className="hover:text-[#A78BFA] transition-colors">Ice Bath Recovery</Link></li>
                <li><Link href="/services#compression" className="hover:text-[#A78BFA] transition-colors">Compression Therapy</Link></li>
                <li><Link href="/services#red-light" className="hover:text-[#A78BFA] transition-colors">Red Light Therapy</Link></li>
                <li><Link href="/services#percussive" className="hover:text-[#A78BFA] transition-colors">Percussive Therapy</Link></li>
              </ul>
            </div>

            {/* Column 2: Services 2 */}
            <div className="space-y-4 border-l border-white/20 pl-8 pb-6 lg:pb-0">
              <ul className="space-y-4 text-base font-semibold text-white/90">
                <li><Link href="/services#sauna" className="hover:text-[#A78BFA] transition-colors">Infrared Sauna</Link></li>
                <li><Link href="/services#massage" className="hover:text-[#A78BFA] transition-colors">Sport Massage</Link></li>
                <li><Link href="/services#physiotherapy" className="hover:text-[#A78BFA] transition-colors">Physiotherapy</Link></li>
                <li><Link href="/services#cryotherapy" className="hover:text-[#A78BFA] transition-colors">Cryotherapy</Link></li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div className="space-y-4 border-l border-white/20 lg:border-r border-white/20 pl-8 pb-6 lg:pb-0">
              <ul className="space-y-4 text-base font-semibold text-white/90">
                <li><Link href="/" className="hover:text-[#A78BFA] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#A78BFA] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#A78BFA] transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-[#A78BFA] transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-10 mb-12">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} className="text-white/60 hover:text-white transition-all duration-300 hover:scale-125 group relative">
              <span className="sr-only">{social.name}</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#A78BFA] transition-colors">
                <social.icon size={20} className="group-hover:text-[#A78BFA] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white/40 uppercase tracking-[0.25em] font-bold">
          <p>© 2025 R3BOOT. All rights reserved.</p>
          <div className="flex gap-12">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-2">
            Designed & Managed by Roger
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
