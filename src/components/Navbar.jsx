import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="py-4 px-16 flex justify-between">
      <h1>LOGO</h1>
      <Link href={"/signup"}>
        <button className="font-bold bg-zinc-50 text-slate-950 px-3 py-1 rounded-md">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
