import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { services } from '@/lib/services'
import { FAQSection } from '@/components/faq-section'
import ServiceSchema from '@/components/schema/ServiceSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import { sportsPsychologyFaqs } from '@/lib/faqs/sports-psychology'
import { HeroTrustBadge, serviceTrustBadges } from '@/components/HeroTrustBadge'
import { HeroSlider } from '@/app/services-demo/contrast-therapy/HeroSlider'
import { TeamSectionDemo, type TeamMember } from '@/app/services-demo/contrast-therapy/TeamSectionDemo'
import { TestimonialsCarousel } from './TestimonialsCarousel'
import { LocationSection } from './LocationSection'
import { PainPointsSection } from './PainPointsSection'
import { ComparisonSection } from './ComparisonSection'
import { WhoWeHelpSection } from './WhoWeHelpSection'
import {
  ClipboardCheck,
  Target,
  Activity,
  TrendingUp,
  Brain,
  HeartHandshake,
  Clock,
  User,
  Shield,
  Zap,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sports Psychology & Counselling in Mumbai | R3BOOT Dadar',
  description:
    'Integrated sports psychology and counselling in Mumbai. Performance skills, injury psychology, focus under pressure, and mental training at R3BOOT Dadar.',
  keywords: [
    'sports psychology mumbai',
    'sports counselling mumbai',
    'mental training athletes mumbai',
    'performance anxiety counselling',
    'sports psychologist dadar',
  ],
  alternates: { canonical: '/services/sports-psychology' },
}

const otherServices = services.filter((s) => s.slug !== 'sports-psychology').slice(0, 4)

const heroSlides = [
  {
    src: '/images/hero/r3boot-counselling.png',
    alt: 'Sports psychology and counselling session at R3BOOT Mumbai',
  },
  {
    src: '/images/service/Services_image/Sports_Pyscology.webp',
    alt: 'Sports psychology mental performance training',
  },
  {
    src: '/images/service/Services_image/Counselling & Mental Training-1.webp',
    alt: 'Counselling and mental training at R3BOOT',
  },
]

const teamMembers: TeamMember[] = [
  {
    name: 'Parinaaz Irani',
    role: 'Sports Counselling & Mental Performance',
    credentials: 'Sport & Performance Psychologist',
    experience: 'Athlete Mental Health Specialist',
    description:
      'Specialises in athlete mental health and mindset training. Helps athletes build mental resilience, emotional regulation, and focus under pressure, across competition prep and return-from-injury work.',
    image: '/images/trainer2/Trainers/Parinaaz Irani.webp',
    stats: { years: 'Mental', rating: '5.0 ★', yearsLabel: 'Focus', ratingLabel: 'Rating' },
  },
  {
    name: 'Alkesh Kubadia',
    role: 'Co-Founder | Psychology & Strategy',
    credentials: "Master's in Psychology",
    experience: 'Systems & Client Experience Lead',
    description:
      'Brings psychology training and decades of entrepreneurial experience to R3BOOT. Oversees strategy, operations, and ethical client experience across mental and physical recovery services.',
    image: '/images/trainer2/Trainers/Alkesh Kubadia (Behavioral Therapist).webp',
    stats: { years: 'Psych', rating: '5.0 ★', yearsLabel: 'Background', ratingLabel: 'Rating' },
  },
]

const testimonials = [
  {
    name: 'Namrata Doshi',
    meta: 'Local Guide · 12 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote:
      'The team is highly professional, knowledgeable, and genuinely caring. From the initial assessment to the recovery plan, everything was clearly explained and tailored to my needs. Highly recommend R3BOOT.',
  },
  {
    name: 'Chandrakant Chande',
    meta: 'Local Guide · 24 reviews',
    ago: '2 months ago',
    avatar: '/images/Customer_Review/Namrata Doshi.png',
    quote:
      'Reboot team was wonderful. Navigated me through the entire experience with great insights. My body also feels lighter and better. Would definitely recommend this place for someone looking for good recovery.',
  },
  {
    name: 'Sonal Malik',
    meta: 'Google User · 6 reviews',
    ago: '4 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote:
      'The Pilates sessions were highly personalized, with clear focus on alignment and core strength. I have already noticed better posture and reduced stiffness. Highly recommend for anyone serious about long-term physical wellness.',
  },
  {
    name: 'Dharmesh Thakkar',
    meta: 'Google User · 8 reviews',
    ago: '3 months ago',
    avatar: '/images/Customer_Review/Sonal Malik.png',
    quote:
      'The deep tissue massage, cupping therapy, and ice water treatment helped relieve my body stiffness tremendously, while the sauna session left me feeling completely rejuvenated. Professional and well-equipped.',
  },
  {
    name: 'JugalKishore Shah',
    meta: 'Google User · 3 reviews',
    ago: '5 months ago',
    avatar: '/images/Customer_Review/JugalKishore Shah.png',
    quote:
      'Excellent idea brought into reality. People will love to take benefit of it. Very professionally done. Keep it up and maintain high standard of services.',
  },
  {
    name: 'Arjun',
    meta: 'Google User · 5 reviews',
    ago: '1 month ago',
    avatar: '/images/Customer_Review/Arjun.png',
    quote:
      'Wonderful experience. It is one of those places you actually wait to visit again because the first time was so amazing. Highly recommended!',
  },
]

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

export default function SportsPsychologyPage() {
  return (
    <main className="psych-page min-h-screen bg-white dark:bg-[#0A0A0A]">

      {/* ─── DESKTOP HERO ─── */}
      <section className="hidden md:flex flex-col bg-black overflow-hidden pt-20 lg:pt-24" style={{ minHeight: '92vh' }}>
        <div className="relative flex flex-1 flex-col">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/r3boot-counselling.png"
            alt="Sports Psychology and Counselling at R3BOOT Mumbai"
            fill
            className="object-cover"
            style={{ objectPosition: '45% center' }}
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 18%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.15) 55%, transparent 68%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[34%] pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)' }}
        />

        <div className="relative z-10 flex flex-1 flex-col justify-center px-12 lg:px-16 xl:px-20 max-w-[54%]">
          <p className="text-[#A78BFA] text-[11px] font-black tracking-[0.25em] uppercase mb-4">
            Sports Psychology&nbsp;&nbsp;•&nbsp;&nbsp;Counselling&nbsp;&nbsp;•&nbsp;&nbsp;Corporate Training
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white tracking-tight leading-[1.04] mb-4">
            Mental Training in <span className="text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-[16px] text-white/55 max-w-md leading-relaxed mb-7">
            Pressure, focus, injury psychology, and mental training: one integrated service for athletes and high performers at R3BOOT Dadar.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center gap-2.5 bg-[#513394] hover:bg-[#603eb0] text-white font-black px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] text-[14px] tracking-wide shadow-lg shadow-[#513394]/30"
            >
              <PhoneIcon className="w-4 h-4" />
              Book Your Session
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white hover:bg-white/[0.07] font-bold px-7 py-3.5 rounded-full transition-all text-[14px] tracking-wide"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.855L0 24l6.335-1.502A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.38l-.36-.214-3.732.885.916-3.629-.235-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <HeroTrustBadge items={serviceTrustBadges['sports-psychology']} />
        </div>
      </section>

      {/* ─── MOBILE HERO ─── */}
      <section className="md:hidden pt-20 pb-0 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5">
          <HeroSlider slides={heroSlides} />

          <div className="inline-flex items-center gap-2 bg-[#513394]/10 dark:bg-[#513394]/20 rounded-full px-4 py-2 mt-5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]" />
            <span className="text-[#513394] dark:text-[#A78BFA] text-[11px] font-black tracking-[0.3em] uppercase">
              Mental Training
            </span>
          </div>

          <h1 className="text-[2rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-3">
            Mental Training in{' '}
            <span className="text-[#513394] dark:text-[#A78BFA]">Mumbai</span>
          </h1>

          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Performance skills and counselling in one service. Manage pressure, rebuild trust after injury, and train the mental side at R3BOOT Dadar.
          </p>

          <HeroTrustBadge items={serviceTrustBadges['sports-psychology']} className="px-0" />
        </div>
      </section>

      <PainPointsSection />

      {/* ─── WHAT TO EXPECT ─── */}
      <section id="session" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              YOUR SESSION //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              What to expect at{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">R3BOOT</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              A typical session is 50 minutes. Most programs run 4–8 sessions; deeper return-to-sport or performance blocks often extend to 8–12.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                number: '01',
                title: 'Assessment & Goal Setting',
                body: 'Map the mental blocks, performance triggers, and emotional load. Align goals with your training calendar or rehab stage.',
              },
              {
                icon: Target,
                number: '02',
                title: 'Skill Building & Practice',
                body: 'Apply mental techniques (imagery, focus, self-talk, emotional regulation) and rehearse them in scenarios that match your sport.',
              },
              {
                icon: Activity,
                number: '03',
                title: 'Integration with Training & Recovery',
                body: 'Carry tools into practice, competition, physiotherapy, or recovery work. Where useful, the mental plan is coordinated with your physical recovery team.',
              },
              {
                icon: TrendingUp,
                number: '04',
                title: 'Review & Refine',
                body: 'Track composure, consistency, and confidence. Adjust the program as pressure increases or as you return to full performance.',
              },
            ].map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col aspect-square p-6 lg:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] group hover:border-[#513394]/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -top-4 -right-2 text-[5.5rem] lg:text-[6rem] font-black text-gray-100 dark:text-white/[0.035] leading-none select-none pointer-events-none">
                    {step.number}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-11 h-11 rounded-xl bg-[#513394]/10 dark:bg-[#8B5CF6]/20 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] mb-5 group-hover:bg-[#513394] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-black text-gray-900 dark:text-white text-base lg:text-[17px] mb-3 leading-snug">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <WhoWeHelpSection />

      {/* ─── METHODOLOGY ─── */}
      <section id="methodology" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#513394]/40 dark:bg-[#A78BFA]/40" />
              <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase">METHODOLOGY</span>
              <span className="w-8 h-px bg-[#513394]/40 dark:bg-[#A78BFA]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
              One plan.{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">Delivered together.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              One plan, whether you are training, recovering from injury, or managing pressure at work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start max-w-7xl mx-auto">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] w-full shadow-2xl lg:sticky lg:top-28">
              <Image
                src="https://res.cloudinary.com/dj7bot2uc/image/upload/v1785886347/METHODOLOGY_image_s0edmh.webp"
                alt="Sports psychology and counselling at R3BOOT Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl pl-3 pr-4 py-2.5 shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-[#513394]/10 flex items-center justify-center text-[#513394] shrink-0">
                  <Brain className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] text-[#513394] uppercase leading-none mb-1">Performance + Counselling</p>
                  <p className="text-gray-900 font-bold text-[13px] leading-none">Mental Performance</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex flex-col gap-2">
                  {['Specialist-Led Mental Performance', 'Confidential 50-Min Sessions'].map((point) => (
                    <div key={point} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#513394]/30 border border-[#A78BFA]/50 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#C4B5FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-[15px] sm:text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-gray-100 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] overflow-hidden mb-8 sm:mb-10">
                {[
                  { icon: Clock, value: '50 Min', label: 'Session' },
                  { icon: User, value: 'Specialist-Led', label: 'Delivered By' },
                  { icon: Shield, value: 'Confidential', label: 'Private' },
                  { icon: Users, value: 'Integrated', label: 'Care Format' },
                ].map((stat, i) => {
                  const StatIcon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-2.5 px-3.5 sm:px-4 py-4 min-w-0
                        ${i % 2 === 1 ? 'border-l border-gray-100 dark:border-white/[0.08]' : ''}
                        ${i >= 2 ? 'border-t border-gray-100 dark:border-white/[0.08] lg:border-t-0' : ''}
                        ${i > 0 ? 'lg:border-l lg:border-gray-100 dark:lg:border-white/[0.08]' : ''}`}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#513394]/8 dark:bg-[#8B5CF6]/15 flex items-center justify-center text-[#513394] dark:text-[#A78BFA] shrink-0">
                        <StatIcon className="w-4 h-4" strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-900 dark:text-white font-black text-[13px] leading-tight truncate">{stat.value}</p>
                        <p className="text-gray-400 dark:text-white/40 text-[10px] font-bold uppercase tracking-wide mt-0.5 truncate">{stat.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col">
                {[
                  {
                    icon: Brain,
                    title: 'Sports Psychology',
                    body: 'Build the mental tools that hold under pressure: focus routines, visualisation, self-talk, composure, and competition-day preparation. Practical, future-oriented, and designed for sport.',
                    light: '#513394', dark: '#A78BFA',
                    bgLight: 'rgba(81,51,148,0.08)', bgDark: 'rgba(167,139,250,0.14)',
                    borderLight: 'rgba(81,51,148,0.35)', borderDark: 'rgba(167,139,250,0.45)',
                  },
                  {
                    icon: HeartHandshake,
                    title: 'Counselling & Mental Training',
                    body: 'Address the emotional load that training alone cannot fix: injury anxiety, burnout, motivation loss, and learning to trust your body again while physical rehab continues.',
                    light: '#0D9488', dark: '#2DD4BF',
                    bgLight: 'rgba(13,148,136,0.08)', bgDark: 'rgba(45,212,191,0.14)',
                    borderLight: 'rgba(13,148,136,0.35)', borderDark: 'rgba(45,212,191,0.45)',
                  },
                  {
                    icon: Zap,
                    title: 'Skills you can use the same week',
                    body: 'Visualisation, focus cues, self-talk, and pre-competition routines are practised, not only discussed. Mental work has to survive the warm-up, not just the consulting room.',
                    light: '#B45309', dark: '#FBBF24',
                    bgLight: 'rgba(180,83,9,0.08)', bgDark: 'rgba(251,191,36,0.14)',
                    borderLight: 'rgba(180,83,9,0.35)', borderDark: 'rgba(251,191,36,0.45)',
                  },
                  {
                    icon: Activity,
                    title: 'Coordinated with physical rehab',
                    body: 'If you are recovering from injury, mental sessions sit alongside physiotherapy so you rebuild trust in your body while tissue heals. Same centre. Same plan.',
                    light: '#0369A1', dark: '#38BDF8',
                    bgLight: 'rgba(3,105,161,0.08)', bgDark: 'rgba(56,189,248,0.14)',
                    borderLight: 'rgba(3,105,161,0.35)', borderDark: 'rgba(56,189,248,0.45)',
                  },
                ].map((phase, idx, arr) => {
                  const Icon = phase.icon
                  const isLast = idx === arr.length - 1
                  return (
                    <div
                      key={phase.title}
                      className="flex gap-4 sm:gap-6"
                      style={{
                        '--pc': phase.light,
                        '--pcd': phase.dark,
                        '--pbg': phase.bgLight,
                        '--pbgd': phase.bgDark,
                        '--pbd': phase.borderLight,
                        '--pbdd': phase.borderDark,
                      } as React.CSSProperties}
                    >
                      <div className="flex flex-col items-center shrink-0 w-12 sm:w-16">
                        <span className="text-[10px] font-black tracking-widest rounded-full px-2 sm:px-2.5 py-1 leading-none mb-2 sm:mb-2.5 bg-[var(--pbg)] dark:bg-[var(--pbgd)] text-[var(--pc)] dark:text-[var(--pcd)]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[1.5px] flex items-center justify-center shrink-0 border-[var(--pbd)] dark:border-[var(--pbdd)] bg-[var(--pbg)] dark:bg-[var(--pbgd)]">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--pc)] dark:text-[var(--pcd)]" strokeWidth={1.75} />
                        </div>
                        {!isLast && (
                          <div className="w-[1.5px] flex-1 min-h-[20px] my-1 [background:repeating-linear-gradient(to_bottom,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_3px,transparent_3px,transparent_8px)] dark:[background:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_3px,transparent_3px,transparent_8px)]" />
                        )}
                      </div>

                      <div className={`flex-1 min-w-0 ${isLast ? 'pb-0' : 'pb-5 sm:pb-6'}`}>
                        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-[var(--pbd)] dark:hover:border-[var(--pbdd)] transition-all duration-300">
                          <h3 className="text-[15px] sm:text-base font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">{phase.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-[13px] sm:text-sm leading-relaxed">{phase.body}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      <ComparisonSection />

      {/* ─── WHO IS IT FOR ─── */}
      <section className="py-12 sm:py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              WHO IT IS FOR //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Built for people who{' '}
              <span className="text-[#513394] dark:text-[#8B5CF6]">perform under pressure.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Whether you need sharper competition skills or space to work through the emotional side of sport and recovery, this page is the single entry point for mental performance at R3BOOT Dadar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {[
              {
                label: 'Competitive Athletes',
                tag: 'PERFORMANCE //',
                description: 'Pressure, focus, choke under load, and competition-day preparation: mental tools designed for sport.',
                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785885841/WIIF_IMAGE_1_czfezq.webp',
                points: ['Performance anxiety', 'Focus & routines', 'Competition mindset'],
              },
              {
                label: 'Youth Athletes',
                tag: 'YOUTH //',
                description: 'Build composure, confidence, and habits early, before pressure becomes the default setting.',
                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785885843/WIIF_IMAGE_2_q7enzn.webp',
                points: ['Confidence building', 'Pressure skills', 'Goal setting'],
              },
              {
                label: 'Return-from-Injury',
                tag: 'REHAB //',
                description: 'Body healed, mind still guarded. Rebuild trust in your movement while physical rehab continues.',
                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785885843/WIIF_IMAGE_3_xllvuq.webp',
                points: ['Injury psychology', 'Return-to-sport trust', 'Mind–body connection'],
              },
              {
                label: 'High-Pressure Professionals',
                tag: 'PRESSURE //',
                description: 'Coaches, performers, and anyone who performs under load, including students and high-stakes roles.',
                image: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1785885843/WIIF_IMAGE_4_tvrmw5.webp',
                points: ['Emotional regulation', 'Burnout & motivation', 'Composure under load'],
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden aspect-square sm:aspect-[16/10] shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 sm:from-black/90 sm:via-black/40" />
                <div className="absolute inset-0 bg-[#513394]/0 group-hover:bg-[#513394]/30 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 md:p-10">
                  <span className="hidden sm:block text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1.5 sm:mb-3 tracking-tight leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-white/70 text-[13px] sm:text-sm leading-relaxed mb-3 sm:mb-5 max-w-lg line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.points.map((pt) => (
                      <span key={pt} className="bg-white/15 backdrop-blur-sm text-white text-[11px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-8">
            Often paired with{' '}
            <Link href="/services/physiotherapy" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">
              physiotherapy
            </Link>{' '}
            and{' '}
            <Link href="/contrast-therapy-mumbai" className="text-[#513394] dark:text-[#C4B5FD] font-bold hover:underline underline-offset-4">
              contrast therapy
            </Link>{' '}
            for stage-wise return to performance.
          </p>
        </div>
      </section>

      <TeamSectionDemo members={teamMembers} />

      {/* MOBILE: Google Review cards */}
      <section className="md:hidden py-10 bg-white dark:bg-[#0A0A0A]">
        <div className="px-5 mb-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase block mb-2">Patient Stories</span>
          <h2 className="text-[26px] font-extrabold text-gray-900 dark:text-white leading-tight">What clients say</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((r) => (
            <figure key={r.name + r.ago} className="flex-shrink-0 w-[85vw] snap-start bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/[0.07] shadow-sm dark:shadow-none rounded-3xl p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                    <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.6 7.3 6.3 14.7z"/>
                    <path fill="#FBBC05" d="M24 46c5.6 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.9 0-10.9-4-12.7-9.5l-7 5.4C7.5 41.8 15.2 46 24 46z"/>
                    <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.4-2.3 4.4-4.3 5.8l6.7 5.5C42.1 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
                  </svg>
                  <span className="text-gray-900 dark:text-white font-bold text-[15px]">Google Review</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-[#222] rounded-full px-3 py-1.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-900 dark:text-white font-bold text-[13px] ml-0.5">5.0</span>
                </div>
              </div>

              <div className="h-px bg-gray-100 dark:bg-white/[0.07] mb-4" />

              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={r.avatar} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] leading-tight">{r.name}</p>
                  <p className="text-gray-400 dark:text-white/40 text-[12px]">{r.meta}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mb-4">
                <svg className="w-3.5 h-3.5 text-gray-400 dark:text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 dark:text-white/35 text-[12px]">{r.ago}</span>
              </div>

              <blockquote className="text-gray-600 dark:text-white/80 text-[15px] leading-relaxed italic flex-grow mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-400 dark:text-white/35 text-[12px]">Verified Google Review</span>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* DESKTOP: testimonials marquee */}
      <section className="hidden md:block py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">PATIENT STORIES //</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">What clients say</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <LocationSection />
      <FAQSection faqs={sportsPsychologyFaqs} layout="grid" />

      {/* ─── CTA: MOBILE ─── */}
      <section className="md:hidden bg-white dark:bg-[#0A0A0A] pt-10 pb-28">
        <div className="px-4">
          <div
            className="relative rounded-3xl overflow-hidden px-6 pt-7 pb-6"
            style={{ background: 'linear-gradient(135deg, #2a0d6e 0%, #1a0850 55%, #110638 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none" style={{ background: '#7c3aed' }} />
            <div className="relative">
              <h2 className="text-[26px] font-black text-white leading-tight tracking-tight mb-2">
                Book a mental performance session in{' '}
                <span className="text-[#A78BFA]">Mumbai</span>
              </h2>
              <p className="text-white/55 text-[13px] leading-relaxed mb-5">
                R3BOOT, Dadar. Open Monday to Saturday. Tell us whether you need competition skills, counselling support, or both. We will guide the first step.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919702368612"
                  className="flex items-center justify-center gap-2 bg-white text-[#513394] font-black rounded-full py-3.5 text-[15px] tracking-wide"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call to Book
                </a>
                <a
                  href="https://wa.me/919702368612"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/25 text-white font-bold rounded-full py-3.5 text-[15px] tracking-wide"
                >
                  WhatsApp
                </a>
              </div>
              <p className="text-center text-white/30 text-[10px] tracking-[0.2em] uppercase mt-4">
                Dadar, Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA: DESKTOP ─── */}
      <section className="hidden md:block py-16 lg:py-20 bg-[#513394] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Book a session in{' '}
            <span className="text-white/45">Mumbai</span>
          </h2>
          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto leading-relaxed">
            R3BOOT, Dadar. Sports psychology and counselling as one service. Open Monday to Saturday.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="tel:+919702368612"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#513394] font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-2xl text-base tracking-wide"
            >
              <PhoneIcon className="w-4 h-4" />
              Call to Book
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all text-base tracking-wide"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-white/35 mt-8 font-bold tracking-widest text-xs uppercase">Dadar, Mumbai</p>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA] dark:bg-[#0D0D0D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#513394] dark:text-[#A78BFA] uppercase mb-4 block">
              KEEP EXPLORING //
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Other Ways to <span className="text-[#513394] dark:text-[#8B5CF6]">Recover</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white dark:bg-white/5 p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-transparent dark:border-white/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] mb-6 shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between w-full bg-[#513394]/10 group-hover:bg-[#513394] text-[#513394] group-hover:text-white rounded-full p-1 transition-all duration-300">
                      <span className="text-[13px] font-black pl-5">EXPLORE</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-t border-gray-200 dark:border-white/[0.09] px-4 pt-3 pb-5">
          <div className="flex gap-3">
            <a
              href="tel:+919702368612"
              className="flex-1 flex items-center justify-center gap-2 bg-[#513394] hover:bg-[#603eb0] text-white font-black rounded-xl py-3.5 text-[14px] tracking-wide transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Call
            </a>
            <a
              href="https://wa.me/919702368612"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-xl py-3.5 text-[14px] tracking-wide hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <ServiceSchema
        serviceName="Sports Psychology & Counselling"
        description="Integrated sports psychology and counselling for athletes and high performers in Mumbai. Performance skills, injury psychology, and mental training at R3BOOT Dadar."
        serviceUrl="https://www.r3boot.in/services/sports-psychology"
      />
      <FAQSchema faqs={sportsPsychologyFaqs} />
    </main>
  )
}
