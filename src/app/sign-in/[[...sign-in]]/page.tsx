import { SignIn } from "@clerk/nextjs";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


// get the current host/domain
const headersList = headers()
const host = headersList.get('x-forwarded-host')


if (host !== process.env.NEXT_PUBLIC_ROOT_DOMAIN) redirect(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!)

export default function SignInPage() {
  return <SignIn />
}
