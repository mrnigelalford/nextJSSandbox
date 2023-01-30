import { NextRequest, NextResponse } from 'next/server'

const pages = [
  '/landingpages/page1',
  '/landingpages/page2',
  '/landingpages/page3',
  // ...
];

const COOKIE_NAME = 'landing-page'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const _page = pages[Math.floor(Math.random() * pages.length)];
    const landingPage = request.cookies.get(COOKIE_NAME) || _page;

    if (!request.cookies.get(COOKIE_NAME)) {
      request.cookies.set(COOKIE_NAME, _page)
    }

    return NextResponse.rewrite(new URL(landingPage, request.url))
  }
  if(request.nextUrl.pathname.match('login') || request.nextUrl.pathname.match('pric')) {
    return NextResponse.redirect(new URL('404', request.url))
  }
  return NextResponse.next()
}
