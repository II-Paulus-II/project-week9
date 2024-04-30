/* ----- Global Imports ----- */ 
import { sql } from "@vercel/postgres";
import { auth } from "@clerk/nextjs";

/* ----- Project Imports ----- */
//import DisplayBio from "@/components/displaybio/DisplayBio";
//import EditBio from "@/components/editbio/EditBio";
//import GetPosts from "@/components/getposts/GetPosts";
//import AddPost from "@/components/addpost/AddPost";

async function UserPage({params}) {
  const thisPageUser = await sql`SELECT * FROM pw9_users WHERE pw9_users.id=${params.user_id}`;
  const { userId } = auth();

  let isLoggedInUserPage = false;
  if(thisPageUser) {
    if(thisPageUser.rows[0].clerk_user_id === userId) {
      isLoggedInUserPage = true;
    }
  }

  // Change Structure of Individual User Page 
  // Display Bio on top
  // Display Posts next
  // Conditionally show link to edit posts and bio if it is your page

  return (
    <div>
      <h2>This is the Individual Users Page</h2>
      <p>Their Username is {`${thisPageUser.rows[0].username}`}</p>
      {/* {thisPageUser.rows[0].bio && <p></p> } */}
      {/* {isLoggedInUserPage && <EditBio params={params} />} */}
    </div>
  );
}

export default UserPage;
