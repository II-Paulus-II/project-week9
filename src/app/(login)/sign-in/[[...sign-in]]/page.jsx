/* ----- Third Party Imports ----- */
import { SignIn } from "@clerk/nextjs";
 
function SignInPage() {
  return <SignIn  signUpUrl="/sign-up" afterSignInUrl="/" />;
}

export default SignInPage;
