

/* ----- Project Imports ----- */
import Nav from "@/components/nav/Nav";
import LoginManager from "@/components/loginmanager/LoginManager"

export default function MainHeader() {

  return (
    <div className="mainheader" >
      <LoginManager />
      <Nav />
      <p>This is my main header.</p>
    </div>
  );
}
