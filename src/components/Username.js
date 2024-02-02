/* ----- Project Imports ----- */
import Adduser from "@/lib/Adduser";

export default function Username() {

  return (
    <div>
      <h2>Choose Username</h2>
      <form action={Adduser}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
