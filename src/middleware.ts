import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|.*\\..*).*)'],
}
