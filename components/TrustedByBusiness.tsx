"use client";

import Image from 'next/image'
import { useTheme } from 'next-themes'

const companies = [
  { name: "Republic", logo: "/images/company/Republic-logo.png" },
  { name: "Wow Entrepreneurs", logo: "/images/company/Wow-Entrepreneurs-Logo-PNG.png" },
  { name: "Deccan", logo: "/images/company/Deccan-Business-PNG-300x104.png" },
  { name: "RD Times", logo: "/images/company/RD-Times-Business-PNG-5.png" },
  { name: "Logo 1", logo: "/images/company/images1.svg" },
  { name: "Logo 2", logo: "/images/company/images2.svg" },
  { name: "Logo 3", logo: "/images/company/images3.svg" },
  { name: "Logo 4", logo: "/images/company/images4.svg" },
  { name: "Logo 5", logo: "/images/company/images5.svg" },
  { name: "Logo 6", logo: "/images/company/images6.svg" },
]

export default function TrustedByBusiness() {
  const { theme } = useTheme();
  // Duplicate for seamless scroll
  const scrollList = [...companies, ...companies];

  return (
    <section className="py-12 bg-[#F5F5F3] dark:bg-[#0A0A0A] overflow-hidden border-b border-gray-100/50 dark:border-white/5 -mb-20 transition-colors duration-500">
      <div className="relative flex overflow-hidden">
        {/* Rolling container */}
        <div className="flex gap-6 animate-marquee py-4 whitespace-nowrap min-w-full">
          {scrollList.map((company, index) => (
            <div
              key={index}
              className="flex-none bg-[#E6E4FF] dark:bg-[#1A1A1A] px-8 py-5 rounded-2xl flex items-center justify-center min-w-[200px] md:min-w-[240px] transition-all duration-300 hover:bg-white dark:hover:bg-white/10 group border border-transparent dark:border-white/5"
            >
              <div className={`relative w-36 h-10 md:w-40 md:h-12 transition-all duration-500 group-hover:grayscale-0 opacity-60 group-hover:opacity-100 ${theme === 'dark' ? 'brightness-0 invert' : 'grayscale'}`}>
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
