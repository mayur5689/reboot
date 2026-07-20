/** Build Sanity portable text blocks from a simple content array. */
function key() {
  return Math.random().toString(36).slice(2, 14)
}

function span(text, marks = []) {
  return { _type: 'span', _key: key(), text, marks }
}

function block(style, children, markDefs = []) {
  return { _type: 'block', _key: key(), style, children, markDefs }
}

function p(text) {
  return block('normal', [span(text)])
}

function h2(text) {
  return block('h2', [span(text)])
}

function h3(text) {
  return block('h3', [span(text)])
}

function quote(text) {
  return block('blockquote', [span(text)])
}

function strongP(parts) {
  /** parts: [{ t, strong?, link? }] */
  const markDefs = []
  const children = parts.map((part) => {
    const marks = []
    if (part.strong) marks.push('strong')
    if (part.link) {
      const linkKey = key()
      markDefs.push({
        _key: linkKey,
        _type: 'link',
        href: part.link,
      })
      marks.push(linkKey)
    }
    return span(part.t, marks)
  })
  return block('normal', children, markDefs)
}

function bullets(items) {
  return items.map((text) => ({
    _type: 'block',
    _key: key(),
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    children: [span(text)],
    markDefs: [],
  }))
}

/** Question-style H2 + direct-answer bullets + optional follow-up paragraphs. */
export function qaSection(question, items, paragraphs = []) {
  const out = [h2(question), ...bullets(items)]
  for (const text of paragraphs) out.push(p(text))
  return out
}

/** Semrush-style paragraph snippet: H2 question → 40–60 word answer → optional context paragraphs. */
export function snippetSection(question, snippet, paragraphs = []) {
  const out = [h2(question), p(snippet)]
  for (const text of paragraphs) out.push(p(text))
  return out
}

export function blogTable(caption, headers, rows) {
  return {
    _type: 'blogTable',
    _key: key(),
    caption,
    headers,
    rows: rows.map((cells) => ({ _type: 'row', _key: key(), cells })),
  }
}

export function relatedReading(links, title = 'Related reading') {
  const parts = []
  links.forEach((item, i) => {
    if (i > 0) parts.push({ t: ' · ' })
    parts.push({ t: item.t, link: item.link })
  })
  return [h2(title), strongP(parts)]
}

/** Clinical summary opening (replaces generic "Quick answer" for authority-led posts). */
export function clinicalSummary(snippetAnswer, paragraphs = []) {
  const out = [h2('Clinical summary'), p(snippetAnswer)]
  for (const text of paragraphs) out.push(p(text))
  return out
}

/** Named expert blockquote with optional heading and attribution. */
export function expertBlock({
  name,
  credential,
  text,
  label = 'Clinical perspective',
  showHeading = false,
  showAttribution = false,
}) {
  const out = []
  if (showHeading && label && name) out.push(h3(`${label}: ${name}`))
  out.push(quote(text))
  if (showAttribution && name && credential) out.push(p(`${name}, ${credential}`))
  return out
}

/** Research paragraph with optional inline links via rich parts. */
export function researchNote(parts) {
  return [h3('What the research shows'), strongP(parts)]
}

export function buildBody(sections) {
  const out = []
  for (const s of sections) {
    if (s.type === 'p') out.push(p(s.text))
    else if (s.type === 'h2') out.push(h2(s.text))
    else if (s.type === 'h3') out.push(h3(s.text))
    else if (s.type === 'quote') out.push(quote(s.text))
    else if (s.type === 'ul') out.push(...bullets(s.items))
    else if (s.type === 'rich') out.push(strongP(s.parts))
    else if (s.type === 'related') out.push(...relatedReading(s.links, s.title))
    else if (s.type === 'qa') out.push(...qaSection(s.question, s.bullets, s.paragraphs ?? []))
    else if (s.type === 'clinicalSummary')
      out.push(...clinicalSummary(s.snippet, s.paragraphs ?? []))
    else if (s.type === 'expert') out.push(...expertBlock(s))
    else if (s.type === 'research') out.push(...researchNote(s.parts))
    else if (s.type === 'snippet') {
      out.push(...snippetSection(s.question, s.snippet, s.paragraphs ?? []))
      if (s.research) out.push(...researchNote(s.research))
      if (s.expert) out.push(...expertBlock(s.expert))
    } else if (s.type === 'table') out.push(blogTable(s.caption, s.headers, s.rows))
  }
  return out
}
