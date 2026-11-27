import Link from "next/link";

export default function Dashboard() {
  //max-w-6xl is 1152px
  //max-w-3xl is 768px
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <Link href="/dashboard"></Link>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Welocome to your Dashboard
        </h1>
        <p className="mt-2 text-slate-600">
          Manage your Resumes and improve your chances of getting hired
        </p>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/upload"
            className="block rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Upload Resume
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Upload Resume and get an AI-powered analysis
            </p>
          </Link>
          <Link
            href="/analysis"
            className="block rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Resume Analysis
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Check ATS score, strengths, and weaknesses
            </p>
          </Link>
          <Link
            href="/job-matcher"
            className="block rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Job description Matcher
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              compare your resume with a job description
            </p>
          </Link>
          <Link
            href="/history"
            className="block rounded-xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Analysis history
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              View previously analyzed resumes.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
