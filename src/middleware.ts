import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Always normalize to trailing slash
  if (!request.nextUrl.pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname += '/';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};
