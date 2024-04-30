/* ----- Third Party Imports ----- */ 

/* ----- Project Imports ----- */
import "@/styles/login.css";

function LoginLayout({ children }) {

  return (
    <>
      <main className="loginMainElement">
      {children}
      </main>
    </>
  );
};

export default LoginLayout;
