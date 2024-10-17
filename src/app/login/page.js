import Link from "next/link";

export default function page() {
  return (
    <div>
      <form>
        <input type="username" placeholder="e.g. Matin" />
        <input type="password" placeholder="*******" />
        <button>Login</button>
      </form>
      <p>
        New user?{" "}
        <Link href={"/signup"} className="text-blue-500">
          Create user
        </Link>
      </p>
    </div>
  );
}
