export default function Features() {
  return (
    <section className="px-8 ">
      <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
        Everything you need to improve your Resume
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold">ATS Score Analysis</h3>
          <p className="text-slate-600">
            {" "}
            Check how well your resume performs against ATS requirements and
            identify areas that need improvement.
          </p>
        </div>
        <div className="bg-white p-6 shadow-sm rounded-xl">
          <h3 className="font-semibold mb-3 text-xl">Resume Imrpovement</h3>
          <p className="text-slate-600">
            Discover your Resume's strengths, weaknesses, and suggestions to
            make it better.
          </p>
        </div>
        <div className="bg-white shadow-sm p-6">
          <h3 className="font-semibold text-xl mb-3">
            Job Description Matching
          </h3>
          <p className="text-slate-600">
            Compare your resume with a job description and find the skills you
            are missing.
          </p>
        </div>
      </div>
    </section>
  );
}
