import { NextRequest, NextResponse } from 'next/server'

const KEY = process.env.INDEXNOW_KEY!
const HOST = 'www.r3boot.in'
const BASE_URL = 'https://www.r3boot.in'

const PATHS = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/services/physiotherapy',
  '/services/sports-massage',
  '/services/clinical-pilates',
  '/sports-massage-mumbai',
  '/contrast-therapy-mumbai',
  '/aqua-therapy-mumbai',
  '/aqua-therapy-dadar',
  '/aqua-therapy-bandra',
  '/aqua-therapy-lower-parel',
  '/aqua-therapy-worli',
  '/aqua-therapy-andheri',
  '/sports-massage-runners-mumbai',
  '/clinical-pilates-mumbai',
  '/ice-bath-mumbai',
  '/infrared-sauna-mumbai',
  '/cold-plunge-mumbai',
  '/contrast-therapy-dadar',
  '/contrast-therapy-bandra',
  '/contrast-therapy-lower-parel',
  '/contrast-therapy-andheri',
  '/contrast-therapy-worli',
  '/physiotherapy-dadar-mumbai',
  '/back-pain-sports-massage-mumbai',
  '/knee-pain-sports-massage-mumbai',
  '/neck-shoulder-pain-sports-massage-mumbai',
  '/sports-massage-dadar',
  '/sports-massage-bandra',
  '/sports-massage-lower-parel',
  '/back-pain-clinical-pilates-mumbai',
  '/scoliosis-pilates-mumbai',
  '/post-surgery-pilates-mumbai',
  '/physiotherapy-for-back-pain-mumbai',
  '/sports-injury-physiotherapy-dadar-mumbai',
  '/physiotherapy-for-knee-pain-mumbai',
  '/post-surgery-physiotherapy-mumbai',
  '/physiotherapy-for-neck-pain-mumbai',
  '/physiotherapy-mumbai',
  '/clinical-pilates-dadar',
  '/clinical-pilates-bandra',
  '/clinical-pilates-worli',
]

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-indexnow-secret')
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const urlList = PATHS.map(path => `${BASE_URL}${path}`)

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
