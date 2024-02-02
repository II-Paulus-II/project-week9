/* ----- Global Imports ----- */ 
import Link from "next/link";
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import Username from "@/components/Username";
import "./globals.css";

export const metadata = {
  title: "Frenemies",
  description: "Friendly anti-social social media website",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();
  const user = await currentUser();

  // go and get the user profile from our db
  const userCheck = await sql`SELECT * FROM pw9_users WHERE clerk_user_id = ${userId}`;

  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      {userId && <UserButton afterSignOutUrl="/" />}
      {!userId && <Link href="/sign-in">Sign In</Link>}
      {userId && userCheck.rowCount === 0 && <Username />}
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
};
