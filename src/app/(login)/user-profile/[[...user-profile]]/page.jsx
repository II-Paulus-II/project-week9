/* ----- Third Party Imports ----- */
import { UserProfile } from "@clerk/nextjs";

function UserProfilePage() {
  return <UserProfile path="/user-profile" routing="path" />;
}

export default UserProfilePage;