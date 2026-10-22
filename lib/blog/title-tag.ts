const BRAND_SUFFIX = ' | R3BOOT'

/** Editorial headline for H1. Strip a trailing brand so H1 is not the SERP title. */
export function blogHeadline(raw: string | null | undefined): string {
  if (!raw) return 'R3BOOT Blog'
  return raw.replace(/\s*\|\s*R3BOOT.*$/i, '').trim() || raw.trim()
}

function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text
  const sliced = text.slice(0, max)
  const space = sliced.lastIndexOf(' ')
  return (space > 18 ? sliced.slice(0, space) : sliced).trim()
}

/**
 * SERP <title> must differ from H1. Use the clause before a colon when it is
 * a useful short title, then always append the brand.
 */
export function blogTitleTag(raw: string | null | undefined): string {
  const headline = blogHeadline(raw)
  const colon = headline.indexOf(':')
  let lead = headline

  if (colon >= 18 && colon <= 48) {
    lead = headline.slice(0, colon).trim()
  } else if (lead.length + BRAND_SUFFIX.length > 60) {
    lead = truncateAtWord(lead, 60 - BRAND_SUFFIX.length)
  }

  const tag = `${lead}${BRAND_SUFFIX}`
  if (tag === headline) {
    return `${lead} | Recovery Blog`
  }
  return tag
}
