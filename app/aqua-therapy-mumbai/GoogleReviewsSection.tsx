'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TestimonialsCarousel, type Testimonial } from './TestimonialsCarousel'
import { Reveal, easeOut } from '@/components/motion/Reveal'

export const googleReviews: Testimonial[] = [
  {
    name: 'Vishal Kadam',
    meta: 'Local Guide · 10 reviews',
    ago: '3 days ago',
    avatar: '/images/Customer_Review/Vishal Kadam.svg',
    rating: 5,
    quote:
      'An outstanding recovery center with a compassionate and knowledgeable team. The staff genuinely cares about every individual, and the supportive environment makes a real difference. Highly recommend R3boot | Integrated Recovery Center to anyone looking for quality recovery services',
  },
  {
    name: 'Chirag Kenia',
    meta: 'Local Guide · 39 reviews',
    ago: '5 days ago',
    avatar: '/images/Customer_Review/Chirag Kenia.svg',
    rating: 5,
    quote:
      'R3boot, thank you so much the session was very good. Thanks for arranging staff with experience relevant to the requirment and not just a masseuse. Amazing facilities and good care for cleanness and hygiene.',
  },
  {
    name: 'Yogesh Bhatte',
    meta: 'Local Guide · 20 reviews',
    ago: '1 week ago',
    avatar: '/images/Customer_Review/Yogesh Bhatte.svg',
    rating: 5,
    quote:
      'R3boot offers an outstanding wellness experience. The Pilates sessions are expertly guided, and the contrast therapy is a fantastic addition for recovery and relaxation. The studio is clean, modern, and welcoming, with a team that genuinely cares about your wellbeing. I always leave feeling stronger, refreshed, and re-energized. Highly recommend!',
  },
  {
    name: 'Sonia Chhoda',
    meta: 'Local Guide · 53 reviews',
    ago: '1 week ago',
    avatar: '/images/Customer_Review/Sonia Chhoda.svg',
    rating: 4,
    quote:
      'Got the sports massage done .. very happy with the masseuse and with the overall experience - dry cupping and oil massage. The center is very clean and neat too. Looking forward to try the other therapies here.',
  },
  {
    name: 'Hemant Kadam',
    meta: 'Local Guide · 6 reviews',
    ago: '3 weeks ago',
    avatar: '/images/Customer_Review/Hemant Kadam.svg',
    rating: 5,
    quote:
      "I had an appointment at R3boot for a sports massage, and the experience exceeded my expectations. The therapist was extremely knowledgeable and skilled. Before starting, he took the time to assess my condition and understand where I was experiencing tightness and discomfort. Based on his assessment, he recommended adding cupping therapy to the session. It turned out to be one of the best decisions—I felt a noticeable difference in my muscle tightness, mobility, and overall recovery afterward. What I appreciated most was that the recommendation felt personalized rather than routine. The therapist clearly knew what he was doing and explained everything along the way. If you're looking for a place that genuinely focuses on recovery and has highly skilled therapists, I would 100% recommend R3boot. I'll definitely be coming back for future recovery sessions!",
  },
  {
    name: 'Chandrakant Chande',
    meta: 'Local Guide · 24 reviews',
    ago: '2 months ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    rating: 5,
    quote: 'Reboot team was wonderful. Navigated me through the entire contrast therapy experience with great insights. My body also feels lighter and better. Would definitely recommend this place for someone looking for good recovery.',
  },
  {
    name: 'Dharmesh Thakkar',
    meta: 'Google User · 8 reviews',
    ago: '3 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    rating: 5,
    quote: 'The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the sauna session left me feeling completely rejuvenated. Professional and well-equipped.',
  },
  {
    name: 'Namrata Doshi',
    meta: 'Local Guide · 12 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    rating: 5,
    quote: 'The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. Highly recommend R3BOOT.',
  },
  {
    name: 'Sonal Malik',
    meta: 'Google User · 6 reviews',
    ago: '4 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    rating: 5,
    quote: 'The Pilates sessions were highly personalized, with clear focus on alignment and core strength. I have already noticed better posture and reduced stiffness. Highly recommend for anyone serious about long-term physical wellness.',
  },
  {
    name: 'JugalKishore Shah',
    meta: 'Google User · 3 reviews',
    ago: '5 months ago',
    avatar: '/images/Customer_Review/JugalKishore Shah.png',
    rating: 5,
    quote: 'Excellent idea brought into reality. People will love to take benefit of it. Very professionally done. Keep it up and maintain high standard of services.',
  },
  {
    name: 'Arjun',
    meta: 'Google User · 5 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Arjun.png',
    rating: 5,
    quote: 'Wonderful experience. It is one of those places you actually wait to visit again because the first time was so amazing. Highly recommended!',
  },
]

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z" />
    </svg>
  )
}

function MobileReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="flex-shrink-0 w-[82vw] max-w-[340px] snap-center bg-[#161616] border border-white/[0.07] rounded-3xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <GoogleLogo className="w-7 h-7 flex-shrink-0" />
          <span className="text-white font-bold text-[15px]">Google Review</span>
        </div>
        {(() => {
          const score = Math.max(0, Math.min(5, review.rating ?? 5))
          return (
            <div className="flex items-center gap-1.5 bg-[#222] rounded-full px-3 py-1.5">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className={`w-3.5 h-3.5 ${j < score ? 'fill-yellow-400' : 'fill-white/20'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white font-bold text-[13px] ml-0.5">{score.toFixed(1)}</span>
            </div>
          )
        })()}
      </div>

      <div className="h-px bg-white/[0.07] mb-4" />

      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
          {review.avatar.endsWith('.svg') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" />
          ) : (
            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
          )}
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight">{review.name}</p>
          <p className="text-white/40 text-[12px]">{review.meta}</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-4">
        <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-white/35 text-[12px]">{review.ago}</span>
      </div>

      <blockquote className="text-white/80 text-[15px] leading-relaxed italic mb-5 line-clamp-5">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="text-white/35 text-[12px]">Verified Google Review</span>
      </div>
    </figure>
  )
}

export function GoogleReviewsSection({
  testimonials = googleReviews,
}: {
  testimonials?: Testimonial[]
}) {
  return (
    <>
      {/* MOBILE: Google Review cards */}
      <section className="md:hidden pt-10 pb-10 bg-[#0A0A0A]">
        <Reveal className="px-5 mb-5">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#A78BFA] uppercase block mb-2">Patient Stories</span>
          <h2 className="text-3xl font-black text-white leading-[1.1] tracking-tight">What clients say</h2>
        </Reveal>
        <div className="flex gap-4 overflow-x-auto px-5 pb-1 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((r, i) => (
            <motion.div
              key={`${r.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: Math.min(i, 3) * 0.1, duration: 0.5, ease: easeOut }}
              className="flex-shrink-0"
            >
              <MobileReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESKTOP: continuously moving testimonials marquee */}
      <Reveal
        as="section"
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
        }}
        className="hidden md:block pt-6 lg:pt-8 pb-16 lg:pb-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      >
        <div className="w-full overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0A0A0A] sm:w-40 lg:w-44" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0A0A0A] sm:w-40 lg:w-44" />
          <TestimonialsCarousel testimonials={testimonials} showEdgeFade={false} />
        </div>
      </Reveal>
    </>
  )
}
