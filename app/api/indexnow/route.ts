import { NextRequest, NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'

const KEY = process.env.INDEXNOW_KEY!
const HOST = 'www.r3boot.in'
const BASE_URL = 'https://www.r3boot.in'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-indexnow-secret')
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const sitemapEntries = await sitemap()
  const urlList = sitemapEntries.map(entry => entry.url)

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList,
    }),
  })

  return NextResponse.json({
    status: res.status,
    message: res.status === 200 ? 'submitted' : 'failed',
    urlsSubmitted: urlList.length,
  })
}
