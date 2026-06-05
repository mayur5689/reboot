import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  if (host === 'r3boot.in') {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = 'www.r3boot.in'
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl.toString(), { status: 301 })
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
