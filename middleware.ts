import { NextRequest, NextResponse } from 'next/server';

const pages = [
  '/landingpages/page1',
  '/landingpages/page2',
  '/landingpages/page3',
  // ...
];

const COOKIE_NAME = 'landing-page'

export function middleware(request: NextRequest) {
  
  if (request.nextUrl.pathname === '/') {
    let cookie = request.cookies.get(COOKIE_NAME);
    const _page = pages[Math.floor(Math.random() * pages.length)];

    if(!cookie) {
      return NextResponse.rewrite(new URL(_page as string, request.url))
    }

    return NextResponse.rewrite(new URL(`/landingpages/${cookie}` as string, request.url))
  }
  if(request.nextUrl.pathname.match('login') || request.nextUrl.pathname.match('pric')) {
    return NextResponse.redirect(new URL('404', request.url))
  }
  return NextResponse.next()
}
