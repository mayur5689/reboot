type PortableTextBlock = {
  _type?: string
  style?: string
  children?: { text?: string }[]
}

/** URL-safe id shared by TOC links and in-article heading anchors. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/** Pull H2 headings from Sanity portable text for auto TOC (no extra CMS field). */
export function extractH2Headings(
  body: PortableTextBlock[] | null | undefined,
  options?: { skipQuickAnswer?: boolean }
): { id: string; text: string }[] {
  if (!body?.length) return []

  return body
    .filter((block) => block._type === 'block' && block.style === 'h2')
    .map((block) => {
      const text = block.children?.map((c) => c.text ?? '').join('') ?? ''
      return { text, id: slugifyHeading(text) }
    })
    .filter((h) => h.text.length > 0)
    .filter((h) => !(options?.skipQuickAnswer !== false && h.text === 'Quick answer'))
}
