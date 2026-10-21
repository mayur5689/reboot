export type TeamDepartment =
  | 'counselling'
  | 'physiotherapy'
  | 'sports-massage'
  | 'leadership'

export type TeamExperienceEntry = {
  role: string
  organisation: string
  period: string
  highlights?: string[]
}

export type TeamMemberProfile = {
  slug: string
  name: string
  title: string
  department: TeamDepartment
  image: string
  /** When true, UI may show initials over the placeholder image */
  imagePlaceholder?: boolean
  headline: string
  summary: string
  yearsLabel?: string
  qualifications: string[]
  expertise: string[]
  /** Conditions, goals, or client types they work with */
  focusAreas: string[]
  experience: TeamExperienceEntry[]
  memberships?: string[]
  languages?: string[]
  relatedServiceHref?: string
  relatedServiceLabel?: string
  metaTitle?: string
  metaDescription?: string
}

export const TEAM_DEPARTMENT_LABELS: Record<TeamDepartment, string> = {
  counselling: 'Sports Psychology & Counselling',
  physiotherapy: 'Physiotherapy',
  'sports-massage': 'Sports Massage',
  leadership: 'Leadership',
}
