"use server";

/* ----- Third Party Imports ----- */
import { sql } from "@vercel/postgres";

async function GetBio({params}) {
  const userbio = await sql`SELECT * FROM pw9_users WHERE id=${params.user_id}`;
  return userbio.rows[0].bio;
}

export default GetBio;