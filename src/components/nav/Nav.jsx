/* ----- Global Imports ----- */ 
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link href="/faq" >FAQ</Link>
      <Link href="/users" >Users</Link>
      <Link href="/recent" >Recent</Link>
    </nav>
  );
}
