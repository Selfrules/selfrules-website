import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/trpc') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  return handleI18nRouting(request);
}
