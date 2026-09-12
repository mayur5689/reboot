'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Neurological Physiotherapy',
    description: 'Helps improve mobility, balance, coordination and function in conditions affecting the nervous and neuromuscular system.',
    treats: ['Stroke', 'Spinal Cord Injuries', 'Traumatic Brain Injury', 'Multiple Sclerosis', 'Sciatica', "Parkinson's Disease"],
    image: 'https://images.unsplash.com/photo-1631217314830-d0989a01cbc0?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'Orthopedic / Musculoskeletal Physiotherapy',
    description: 'Focused on restoring movement and function by treating injuries and conditions of muscles, joints, bones, ligaments, and tendons.',
    treats: ['Back & Neck Pain', 'Sports Injuries', 'Joint Pain (Shoulder, Knee, Hip)', 'Post-Surgical Rehabilitation', 'Sprains, Strains & Tendon Injuries'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    title: 'Cardiopulmonary Physiotherapy',
    description: 'Supports recovery and improves quality of life for individuals with heart and lung conditions.',
    treats: ['Cardiac Rehabilitation', 'Chronic Obstructive Pulmonary Disease (COPD)', 'Post-Operative Cardiac Care', 'Breathing & Endurance Training'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'Pediatric Physiotherapy',
    description: 'Specializes in infants, children and adolescents to support physical development and treat conditions affecting movement.',
    treats: ['Cerebral Palsy', 'Developmental Delays', 'Birth Defects', 'Post-Surgical Pediatric Rehab', 'Muscle Weakness & Coordination Issues'],
    image: 'https://images.unsplash.com/photo-1576091160588-112fa5dbb7d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '05',
    title: 'Geriatric Physiotherapy',
    description: 'Improves mobility, reduces pain and enhances independence in older adults with age-related conditions.',
    treats: ['Arthritis', 'Osteoporosis', 'Balance & Gait Problems', 'Fall Prevention', 'Post-Surgical Geriatric Rehab'],
    image: 'https://images.unsplash.com/photo-1576091160597-112fa5dbb7d1?auto=format&fit=crop&w=800&q=80',
  },
]

export function PhysiotherapyServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = triggerRefs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.5 }
    )

    triggerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const active = services[activeIndex]

  return (
    <section className="relative bg-[#0A0A0A]">
      {/* Sticky composition: H1 + image/text stay put while scrolling */}
      <div className="sticky top-20 z-20 bg-[#0A0A0A] pb-10 lg:pb-12">
        {/* Header */}
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-8 lg:pt-10 pb-6 lg:pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#513394]/20 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
              <span className="text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">Patients We Treat</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 sm:whitespace-nowrap">
              Specialist Care. <span className="text-[#A78BFA]">Stronger Recovery.</span>
            </h2>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mx-auto max-w-4xl">
              <span className="block sm:whitespace-nowrap">
                At R3BOOT, our physiotherapists bring advanced expertise across a wide range of sub-specialities
              </span>
              <span className="block sm:whitespace-nowrap">
                to help you move better, feel better, and live better.
              </span>
            </p>
          </div>
        </div>

        {/* Image + text — stays fixed; content swaps on scroll */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D0D0D] aspect-[4/5] max-h-[min(56vh,480px)] w-full shadow-2xl order-2 lg:order-1">
              <Image
                key={activeIndex}
                src={active?.image}
                alt={active?.title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div key={activeIndex} className="space-y-4 order-1 lg:order-2">
              <p className="text-[#A78BFA] text-xs sm:text-sm font-black tracking-widest uppercase">
                {active?.number} — SERVICE
              </p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
                {active?.title}
              </h3>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
                {active?.description}
              </p>
              <div className="pt-2">
                <p className="text-[#A78BFA] text-xs font-black tracking-widest uppercase mb-3">
                  We treat:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active?.treats.map((treat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#513394] flex-shrink-0 mt-2" />
                      <span className="text-gray-300 text-sm lg:text-base leading-snug">{treat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invisible scroll track — drives service swaps */}
      <div className="relative" aria-hidden>
        {services.map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) triggerRefs.current[idx] = el
            }}
            className="h-[70vh]"
          />
        ))}
      </div>
    </section>
  )
}
