/**
 * Links design system — matching the R3BOOT bio-link mock.
 * Soft lavender canvas, floating white cards, brand purple accents.
 */
export const linksTokens = {
  // Surfaces
  bg: '#F8F9FE',
  surface: '#FFFFFF',
  ink: '#1A1A2E',
  inkSecondary: '#6B7280',
  inkMuted: '#9CA3AF',
  inkFaint: '#D1D5DB',
  accent: '#7048C6',
  accentDeep: '#513394',
  accentSoft: '#EDE7FA',
  accentLogo: '#C4B5FD',
  focus: '#7048C6',

  // Radii
  radiusContainer: 32,
  radiusCard: 22,
  radiusPill: 9999,

  // Shadows
  shadowCard: '0 4px 16px rgba(81, 51, 148, 0.08), 0 1px 3px rgba(0,0,0,0.04)',
  shadowCardHover: '0 8px 24px rgba(81, 51, 148, 0.12), 0 2px 6px rgba(0,0,0,0.05)',
  shadowChrome: '0 1px 3px rgba(81, 51, 148, 0.08), 0 0 0 1px rgba(81, 51, 148, 0.06)',

  // Layout
  containerMax: 430,
  padX: 28,
  padTop: 16,
  padBottom: 32,

  // Vertical rhythm
  logoToTitle: 20,
  titleToBio: 8,
  bioToPhone: 18,
  phoneToSocial: 22,
  socialToLinks: 28,
  linkGap: 14,
  linksToBanner: 22,

  // Type
  titleSize: 22,
  titleWeight: 800,
  titleTracking: '-0.03em',
  bioSize: 14,
  bioWeight: 500,
  cardTitleSize: 15,
  cardTitleWeight: 700,
  cardSubSize: 12,
  cardSubWeight: 400,

  // Components
  logoSize: 108,
  cardHeight: 76,
  iconCircle: 46,
  iconGlyph: 18,
  socialGlyph: 18,
  socialHit: 44,
  socialGap: 14,
  chromeButton: 40,
} as const;
