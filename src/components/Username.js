import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Username() {
  const { userId } = auth();
  console.log("my user id is ", userId );

  async function addUser(formData) {
    "use server";
    const username = formData.get("username");
    
    await sql`INSERT INTO pw9_users (clerk_user_id, username) VALUES (${userId}, ${username})`;
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div>
      <h2>Choose Username</h2>
      <form action={addUser}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
