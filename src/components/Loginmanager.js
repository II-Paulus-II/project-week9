/* ----- Global Imports ----- */ 
import Link from "next/link";
import { headers } from "next/headers";
import { usePathname } from 'next/navigation';
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import Username from "@/components/Username";

export default async function LoginManager() {
  const { userId } = auth();
  const user = await currentUser();

  // go and get the user profile from our db
  const userCheck = await sql`SELECT * FROM pw9_users WHERE clerk_user_id = ${userId}`;

  const headersList = headers();
  console.log("my headers are ", headersList);
  const pathname = headersList.get('next-url');
  console.log("my path is ", pathname);

  let signingIn = false;
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    signingIn = true;
  }

  return (
    <div>
    {userId && <UserButton afterSignOutUrl="/" />}
    {!userId && !signingIn && <Link href="/sign-in">Sign In</Link>}
    {userId && userCheck.rowCount === 0 && <Username />}
    </div>
  );
}