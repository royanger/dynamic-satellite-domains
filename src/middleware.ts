import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware((auth, req: NextRequest) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
})
// }, {
// (req: NextRequest) => {
// console.log('HOST', req.nextUrl.host)
// return ({
// isSatellite: true,
// signInUrl: 'https://primary.dev/sign-in',
// Or, in development:
// signInUrl: 'http://localhost:3000/sign-in',
// signUpUrl: 'http://localhost:3000/sign-up',
// domain: 'https://primary.dev',
// Or, in development:

// domain: "https://royanger.info",
// })
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
