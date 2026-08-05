/**
 * Links design system — compact Linktree scale.
 * Base unit: 8px. Everything should feel ~15% smaller than a "zoomed" UI.
 */
export const linksTokens = {
  // Surfaces
  bg: '#F3F4F6',
  bgDesktop: '#C8C8C8',
  surface: '#FFFFFF',
  ink: '#1A1A1A',
  inkSecondary: '#4B5563',
  inkMuted: '#9CA3AF',
  inkFaint: '#D1D5DB',
  accent: '#A78BBE',
  accentDeep: '#8B6FA8',
  accentLogo: '#C474FB',
  focus: '#8B5CF6',

  // Radii — one system
  radiusContainer: 32,
  radiusCard: 18,
  radiusPill: 9999,

  // Shadows — almost sit on the surface
  shadowCard: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)',
  shadowCardHover: '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.06)',
  shadowContainer: '0 8px 30px rgba(0,0,0,0.08)',
  shadowChrome: '0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.06)',

  // Layout
  containerMax: 480,
  padX: 40,
  padTop: 20,
  padBottom: 28,

  // Vertical rhythm (exact)
  logoToTitle: 32,
  titleToBio: 18,
  bioToSocial: 28,
  socialToLinks: 34,
  linkGap: 14,
  linksToCta: 48,

  // Type — compact
  titleSize: 17,
  titleWeight: 700,
  titleTracking: '-0.01em',
  bioSize: 13,
  bioWeight: 500,
  cardTitleSize: 15,
  cardTitleWeight: 600,
  cardSubSize: 12,
  cardSubWeight: 400,

  // Components — compact
  logoSize: 88,
  cardHeight: 72,
  iconCircle: 48,
  iconGlyph: 18,
  socialGlyph: 20,
  socialHit: 40,
  socialGap: 18,
  chromeButton: 40,
  moreSize: 14,
} as const;
