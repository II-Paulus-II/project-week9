/* ----- Global Imports ----- */ 
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import Username from "@/components/Username";
import GetPath from "@/lib/Getpath";

export default async function LoginManager() {
  const { userId } = auth();
  const user = await currentUser();
  //const path = GetPath();
  //console.log("my path is ", path);

  // go and get the user profile from our db
  const userCheck = await sql`SELECT * FROM pw9_users WHERE clerk_user_id = ${userId}`;

  return (
    <div>
    {userId && <UserButton afterSignOutUrl="/" />}
    {!userId && <Link href="/sign-in">Sign In</Link>}
    {userId && userCheck.rowCount === 0 && <Username />}
    </div>
  );
}
