/* ----- Global Imports ----- */ 
import Link from "next/link";
import { sql } from "@vercel/postgres";

/* ----- Project Imports ----- */

export default async function UserPage() {
  const getUsers = await sql`SELECT pw9_users.id, pw9_users.username FROM pw9_users`;
  
  return (
    <div>
      <h2>This is the Users Page</h2>
      <div>
        {getUsers.rows.map((user) => { return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}><h3>{user.username}</h3></Link>
          </div>
        )
        })}
      </div>
    </div>
  );
}
