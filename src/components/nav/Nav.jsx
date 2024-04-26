/* ----- Global Imports ----- */ 
import Link from "next/link";

/* ----- Project Imports ----- */
import "@/components/nav/nav.css";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link class="navLinks" href="/" >Home</Link>
      <Link class="navLinks" href="/faq" >FAQ</Link>
      <Link class="navLinks" href="/users" >Users</Link>
      <Link class="navLinks" href="/recent" >Recent</Link>
    </nav>
  );
}
