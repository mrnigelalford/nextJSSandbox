import { NextRequest, NextResponse } from 'next/server'

const pages = [
  '/intro/page1',
  '/intro/page2',
  '/intro/page3',
  // ...
];

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/intro') {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    console.log('beast: ', randomPage)

    return NextResponse.redirect(new URL(randomPage, request.url))
  }
  return NextResponse.next()
}
