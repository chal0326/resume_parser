import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  const isAuthPage = req.nextUrl.pathname === '/login' || 
                    req.nextUrl.pathname === '/register';
  const isHomePage = req.nextUrl.pathname === '/';

  if (!session && !isAuthPage && !isHomePage) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (session && (isAuthPage || isHomePage)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};