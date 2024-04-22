/* ----- Third Party Imports ----- */ 

/* ----- Project Imports ----- */
import "@/styles/login.css";


export default function RootLayout({ children }) {

  return (
    <>
      <main className="loginMainElement">
      {children}
      </main>
    </>
  );
};
