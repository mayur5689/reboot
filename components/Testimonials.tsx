"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  avatar: string;
  quote: string;
};

const ALL_REVIEWS: Testimonial[] = [
  {
    name: "Namrata Doshi",
    avatar: "/images/Customer_Review/Namrata Doshi.png",
    quote: "I had an excellent experience at this sports recovery centre. The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. The therapists are supportive and motivating, creating a positive environment that really helps with recovery. The facilities are clean, modern, and well-equipped. A big thank you to their expertise and encouragement. I would highly recommend R3boot to everyone."
  },
  {
    name: "Sonal Malik",
    avatar: "/images/Customer_Review/Sonal Malik.png",
    quote: "I recently tried Pilates and posture correction at Reboot Recovery Centre, Dadar, and it was genuinely impressive. Since the centre has just opened, everything feels fresh, well-designed, and thoughtfully run. The Pilates sessions were highly personalized, with clear focus on alignment, core strength, and correcting long-standing posture issues. The therapist took time to understand my problem areas rather than rushing through a routine. I’ve already noticed better posture and reduced stiffness. This has definitely built my confidence to try their other therapies like hydro recovery. Highly recommend for anyone serious about long-term physical wellness."
  },
  {
    name: "Chandrakant Chande",
    avatar: "/images/Customer_Review/Namrata Doshi.png",
    quote: "Reboot team was wonderful. Navigated me through the entire contrast therapy experience with great insights. My body also feels lighter and better. Would definately recommend this place for someone looking for a good recovery and rehabilitation place. Team and entire set up is fantastic. Our entire set up is fantastic."
  },
  {
    name: "JugalKishore Shah",
    avatar: "/images/Customer_Review/JugalKishore Shah.png",
    quote: "Excellent idea brought in reallity. People will love to take benifit of it. Very professonally done. Keep it up and maintain high standard of services."
  },
  {
    name: "Dharmesh Thakkar",
    avatar: "/images/Customer_Review/Sonal Malik.png",
    quote: "I had an amazing experience at R3boot. The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the red sauna session left me feeling completely rejuvenated. The facility is spotless, well-equipped, and thoughtfully designed for total recovery. The team is professional, courteous, and clearly knows their craft."
  },
  {
    name: "Arjun",
    avatar: "/images/Customer_Review/Arjun.png",
    quote: "Wonderful experience. It's one of those places you actually wait to visit again because the first time was so amazing. Highly recommended !!"
  }
];

function Row({ items, direction }: { items: Testimonial[]; direction: "left" | "right" }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  }, []);

  // Create multiple copies for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={marqueeRef}
        className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          '--duration': '80s',
          display: 'flex',
          width: 'fit-content',
        } as React.CSSProperties}
      >
        {duplicatedItems.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="w-[360px] sm:w-[420px] max-w-full mr-4 sm:mr-6 flex-shrink-0 rounded-2xl border border-gray-200 dark:border-white/5 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#1A1A1A] dark:via-[#1A1A1A] dark:to-[#1A1A1A] shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow duration-300"
          >
            <blockquote className="text-gray-700 dark:text-gray-300 text-[13px] sm:text-[14px] leading-relaxed line-clamp-6 italic">&quot;{t.quote}&quot;</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover border border-gray-100 dark:border-white/10"
              />
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                <div className="flex gap-0.5 text-yellow-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Customer Reviews" className="pb-24 pt-10 bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="w-full">
        <Row items={ALL_REVIEWS} direction="right" />
      </div>
    </section>
  );
}