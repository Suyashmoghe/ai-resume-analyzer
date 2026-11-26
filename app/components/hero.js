import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-8 py-20 text-center">
      <h1 className="font-bold text-3xl text-slate-900 md:text-5xl">
        Build a Resume That Gets You Hired
      </h1>
      <p className="mt-6 tx-lg text-slate-600">
        Analyze your resume, improve your ATS score, and discover how well your
        skills match your dream job.
      </p>
      <Link
        href="/signup"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 inline-block text-white hover:bg-blue-700"
      >
        Get Started
      </Link>
    </section>
  );
}
