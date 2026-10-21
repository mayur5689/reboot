import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Languages,
  Sparkles,
  Target,
} from 'lucide-react'
import type { TeamMemberProfile } from '@/lib/team/types'
import { TEAM_DEPARTMENT_LABELS } from '@/lib/team/types'
import { getTeamMembersByDepartment } from '@/lib/team'

function initialsFromName(name: string): string {
  return name
    .replace(/^Dr\.\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}

type Props = {
  member: TeamMemberProfile
}

export function TeamMemberProfileView({ member }: Props) {
  const peers = getTeamMembersByDepartment(member.department).filter((p) => p.slug !== member.slug)

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* Hero */}
      <section className="pt-20 lg:pt-24 pb-12 lg:pb-16 border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[#513394] dark:hover:text-[#A78BFA]">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/about#team-section" className="hover:text-[#513394] dark:hover:text-[#A78BFA]">Team</Link>
            <span aria-hidden>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{member.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,380px)_1fr] gap-10 lg:gap-16 items-start">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full rounded-[2rem] overflow-hidden shadow-2xl bg-[#513394]/10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 380px, 90vw"
              />
              {member.imagePlaceholder ? (
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-br from-[#513394]/80 to-[#1a0a3d]/90"
                  aria-hidden
                >
                  <span className="text-white/90 font-black text-6xl tracking-tight">
                    {initialsFromName(member.name)}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="space-y-6 lg:pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#513394]/10 text-[#513394] dark:text-[#A78BFA] font-semibold text-xs tracking-widest uppercase">
                {TEAM_DEPARTMENT_LABELS[member.department]}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.05]">
                {member.name}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-[#513394] dark:text-[#A78BFA]">
                {member.title}
              </p>
              {member.yearsLabel ? (
                <p className="text-gray-600 dark:text-gray-400 text-lg">{member.yearsLabel}</p>
              ) : null}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                {member.headline}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {member.summary}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {member.relatedServiceHref ? (
                  <Link
                    href={member.relatedServiceHref}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#513394] text-white font-bold hover:bg-[#41297a] transition-colors shadow-lg shadow-[#513394]/20"
                  >
                    Book {member.relatedServiceLabel ?? 'a session'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : null}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  Contact R3BOOT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <ProfileBlock
              icon={<GraduationCap className="w-5 h-5" />}
              title="Qualifications"
              items={member.qualifications}
            />
            <ProfileBlock
              icon={<Sparkles className="w-5 h-5" />}
              title="Expertise"
              items={member.expertise}
            />
            <ProfileBlock
              icon={<Target className="w-5 h-5" />}
              title="What they help with"
              items={member.focusAreas}
            />
            {member.memberships?.length ? (
              <ProfileBlock
                icon={<Award className="w-5 h-5" />}
                title="Memberships & highlights"
                items={member.memberships}
              />
            ) : null}
            {member.languages?.length ? (
              <ProfileBlock
                icon={<Languages className="w-5 h-5" />}
                title="Languages"
                items={member.languages}
              />
            ) : null}
          </div>
        </div>
      </section>

      {member.experience.length > 0 ? (
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#0D0D0D]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#513394]/15 flex items-center justify-center text-[#513394] dark:text-[#A78BFA]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
            <ul className="space-y-8 max-w-3xl">
              {member.experience.map((entry, i) => (
                <li
                  key={i}
                  className="relative pl-8 border-l-2 border-[#513394]/30 dark:border-[#A78BFA]/30"
                >
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#513394] dark:bg-[#A78BFA] ring-4 ring-white dark:ring-[#0D0D0D]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#513394] dark:text-[#A78BFA] mb-1">
                    {entry.period}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{entry.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{entry.organisation}</p>
                  {entry.highlights?.map((h, j) => (
                    <p key={j} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#513394] dark:text-[#A78BFA] flex-shrink-0 mt-0.5" />
                      {h}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {peers.length > 0 ? (
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-white/10">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              More from {TEAM_DEPARTMENT_LABELS[member.department]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {peers.slice(0, 3).map((peer) => (
                <Link
                  key={peer.slug}
                  href={`/team/${peer.slug}`}
                  className="group flex gap-4 p-4 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#513394]/40 dark:hover:border-[#A78BFA]/40 transition-colors"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#513394]/10">
                    <Image src={peer.image} alt="" fill className="object-cover object-top" sizes="64px" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 dark:text-white group-hover:text-[#513394] dark:group-hover:text-[#A78BFA] transition-colors truncate">
                      {peer.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{peer.title}</p>
                    <span className="text-xs font-bold text-[#513394] dark:text-[#A78BFA] mt-2 inline-flex items-center gap-1">
                      Know more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}

function ProfileBlock({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-[1.75rem] border border-gray-200 dark:border-white/10 p-8 bg-white dark:bg-[#111] shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#513394]/10 flex items-center justify-center text-[#513394] dark:text-[#A78BFA]">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#513394] dark:text-[#A78BFA] flex-shrink-0 mt-1" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TeamMemberPersonSchema({ member }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    description: member.summary,
    image: member.image.startsWith('/') ? `https://www.r3boot.in${member.image}` : member.image,
    worksFor: {
      '@type': 'Organization',
      name: 'R3BOOT Integrated Recovery',
      url: 'https://www.r3boot.in',
    },
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
