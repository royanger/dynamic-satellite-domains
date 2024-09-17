import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/']);

export default clerkMiddleware(
  (auth, req: NextRequest) => {
    console.log('middleware')
    if (!isPublicRoute(req)) {
      auth().protect();
    }
    // })
    // }, 
  },
  (req: NextRequest) => {
    console.log('HOST', req.nextUrl.host)
    console.log('middleware isSat', req.nextUrl.host !== process.env.NEXT_PUBLIC_ROOT_DOMAIN)
    return ({
      isSatellite: req.nextUrl.host !== process.env.NEXT_PUBLIC_ROOT_DOMAIN,
      domain: req.nextUrl.host
      // signInUrl: 'https://primary.dev/sign-in',
      // Or, in development:
      // signInUrl: 'http://localhost:3000/sign-in',
      // signUpUrl: 'http://localhost:3000/sign-up',
      // domain: 'https://primary.dev',
      // Or, in development:

      // domain: "https://royanger.info",
    })
  })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
