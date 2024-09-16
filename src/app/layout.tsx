import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
// import { headers } from 'next/headers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get the current host/domain
  // const headersList = headers()
  // const host = headersList.get('x-forwarded-host')

  // set the sign-in and sign-up URLs
  // const primarySignInUrl = 'http://localhost:3000/sign-in'
  // const primarySignUpUrl = 'https://localhost:3000/sign-up'

  // const satellites = ['http://royanger.work']

  return (
    <ClerkProvider
    // isSatellite={host !== process.env.NEXT_PUBLIC_ROOT_DOMAIN}
    // domain={host!}
    // allowedRedirectOrigins={satellites}
    >
      <html lang='en'>
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
