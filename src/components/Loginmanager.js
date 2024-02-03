/* ----- Global Imports ----- */ 
import Link from "next/link";
//import { NextRequest, NextResponse } from "next/server";
import { ClerkProvider, UserButton, auth, currentUser, clerkClient, getAuth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */

export default async function LoginManager() {
  const { userId } = auth();
  const user = await currentUser();

  //Insert New User into database
  const userCheck = await sql`SELECT * FROM pw9_users WHERE clerk_user_id = ${userId}`;
  if(user && userCheck.rowCount === 0) {
    const makeUser = await sql`INSERT INTO pw9_users (clerk_user_id, username) VALUES (${userId}, ${user.username})`;
  }

  //HouseKeeping 
  //First Make sure that Clerk isn't storing first names and last names
  //Second make sure that our database username is the same as clerks username.                
  if(userId) {
    const params = { firstName: '', lastName: '' };
    const fixClerkUser = await clerkClient.users.updateUser(userId, params);
    const userName = await sql`SELECT pw9_users.username FROM pw9_users WHERE clerk_user_id = ${userId}`;
    if(userName !== user.username) {
      const updateUser = await sql`UPDATE pw9_users SET username = ${user.username} WHERE clerk_user_id = ${userId}`;
    }
  }

  return (
    <div>
    {userId && <UserButton afterSignOutUrl="/" userProfileMode="navigation" userProfileUrl="/user-profile" />}
    {!userId && <Link href="/sign-in">Sign In</Link>}
    </div>
  );
}
