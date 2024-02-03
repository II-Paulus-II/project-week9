/* ----- Global Imports ----- */ 
import { sql } from "@vercel/postgres";

export default async function UserPage({params}) {
  const user = await sql`SELECT pw9_users.username FROM pw9_users WHERE pw9_users.id = ${params.user_id}`;

  return (
    <div>
      <h2>This is the Individual Users Page</h2>
      <p>Their Username is {`${user.rows[0].username}`}</p>
    </div>
  );
}
