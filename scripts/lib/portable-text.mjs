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

export function buildBody(sections) {
  const out = []
  for (const s of sections) {
    if (s.type === 'p') out.push(p(s.text))
    else if (s.type === 'h2') out.push(h2(s.text))
    else if (s.type === 'h3') out.push(h3(s.text))
    else if (s.type === 'quote') out.push(quote(s.text))
    else if (s.type === 'ul') out.push(...bullets(s.items))
    else if (s.type === 'rich') out.push(strongP(s.parts))
  }
  return out
}
