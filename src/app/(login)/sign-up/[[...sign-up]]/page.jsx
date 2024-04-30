/* ----- Third Party Imports ----- */
import { SignUp } from "@clerk/nextjs";
 
function SignUpPage() {
  return <SignUp signInUrl="/sign-in" />;
}


export default SignUpPage;