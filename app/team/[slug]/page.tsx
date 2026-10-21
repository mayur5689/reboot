import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import {
  TeamMemberPersonSchema,
  TeamMemberProfileView,
} from '@/components/team/TeamMemberProfileView'
import { getAllTeamMemberSlugs, getTeamMemberBySlug } from '@/lib/team'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllTeamMemberSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) return {}

  return {
    title: member.metaTitle ?? `${member.name} | R3BOOT Team`,
    description: member.metaDescription ?? member.summary,
    alternates: { canonical: `/team/${slug}` },
    openGraph: {
      title: member.metaTitle ?? member.name,
      description: member.metaDescription ?? member.headline,
      images: member.image.startsWith('/') ? [{ url: member.image }] : undefined,
    },
  }
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) notFound()

  return (
    <>
      <TeamMemberProfileView member={member} />
      <TeamMemberPersonSchema member={member} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.r3boot.in' },
          { name: 'Team', url: 'https://www.r3boot.in/about' },
          { name: member.name, url: `https://www.r3boot.in/team/${slug}` },
        ]}
      />
    </>
  )
}
