import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const accessToken = request.cookies.get('sb-access-token')?.value;
    if (!accessToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // Optionally, verify token with Supabase here
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}; 