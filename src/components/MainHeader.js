

/* ----- Project Imports ----- */
import Nav from "@/components/Nav";
import LoginManager from "@/components/LoginManager"

export default function MainHeader() {

  return (
    <div className="mainheader" >
      <LoginManager />
      <Nav />
      <p>This is my main header.</p>
    </div>
  );
}
