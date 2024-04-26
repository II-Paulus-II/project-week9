/* ----- Third Party Imports ----- */

/* ----- Project Imports ----- */
import Nav from "@/components/nav/Nav";
import LoginManager from "@/components/loginmanager/LoginManager"
import "@/components/generalheader/generalheader.css";

export default function GeneralHeader() {

  return (
    <header className="generalHeader" >
      <Nav />
      <LoginManager />
    </header>
  );
}
