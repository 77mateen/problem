import Link from "next/link";

export default function page() {
  return (
    <div>
      <form>
        <input type="username" placeholder="e.g. mateen" />
        <input type="email" placeholder="matin@gmail.com" />
        <input type="password" placeholder="********" />
        <button>Register</button>
      </form>

      <p>
        Already a user?{" "}
        <Link href={"/login"} className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
}
