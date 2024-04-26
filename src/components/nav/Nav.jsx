/* ----- Global Imports ----- */ 
import Link from "next/link";

/* ----- Project Imports ----- */
import "@/components/nav/nav.css";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link className="navLinks" href="/" >Home</Link>
      <Link className="navLinks" href="/faq" >FAQ</Link>
      <Link className="navLinks" href="/users" >Users</Link>
      <Link className="navLinks" href="/recent" >Recent</Link>
    </nav>
  );
}
