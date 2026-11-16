import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h1 className="text-2xl font-bold text-blue-600">ResumeAI</h1>
      <div className="flex items-center gap-6">
        <Link href="/login" className="text-slate-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
