import type { TeamDepartment, TeamMemberProfile } from './types'
import { counsellingTeamMembers } from './members/counselling'

const allMembers: TeamMemberProfile[] = [...counsellingTeamMembers]

const bySlug = new Map(allMembers.map((m) => [m.slug, m]))

export function getTeamMemberBySlug(slug: string): TeamMemberProfile | undefined {
  return bySlug.get(slug)
}

export function getAllTeamMemberSlugs(): string[] {
  return allMembers.map((m) => m.slug)
}

export function getTeamMembersByDepartment(department: TeamDepartment): TeamMemberProfile[] {
  return allMembers.filter((m) => m.department === department)
}

export function getAllTeamMembers(): TeamMemberProfile[] {
  return allMembers
}

/** Resolve profile URL when a card only has a slug */
export function teamMemberProfilePath(slug: string): string {
  return `/team/${slug}`
}
