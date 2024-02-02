"use server";

/* ----- Global Imports ----- */
import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addUser(formData) {
  const { userId } = auth();
  const username = formData.get("username");
  
  await sql`INSERT INTO pw9_users (clerk_user_id, username) VALUES (${userId}, ${username})`;
  revalidatePath("/");
  redirect("/");
}