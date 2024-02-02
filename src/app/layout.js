/* ----- Global Imports ----- */ 
import Link from "next/link";
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */
import "./globals.css";

export const metadata = {
  title: "Frenemies",
  description: "Friendly anti-social social media website",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <ClerkProvider>
    <html lang="en">
      {userId && <UserButton afterSignOutUrl="/" />}
      {!userId && <Link href="/sign-in">Sign In</Link>}
      <body>{children}</body>
    </html>
    </ClerkProvider>
  );
};
