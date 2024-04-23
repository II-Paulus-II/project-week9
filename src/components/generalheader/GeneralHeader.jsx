/* ----- Third Party Imports ----- */

/* ----- Project Imports ----- */
import Nav from "@/components/nav/Nav";
import LoginManager from "@/components/loginmanager/LoginManager"

export default function GeneralHeader() {

  return (
    <div className="generalheader" >
      <LoginManager />
      <Nav />
      <p>This is my general header component.</p>
    </div>
  );
}
