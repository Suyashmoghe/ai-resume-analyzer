export default function Signup() {
  return (
    <main className="px-4 flex items-center min-h-screen justify-center bg-slate-50">
      <div className="w-full max-w-md rounded-xl bg-white shadow-sm p-8">
        <h1 className="text-center mb-2 text-3xl font-bold text-slate-900">
          Create your Account
        </h1>
        <p className="mb-8 text-slate-500 text-center">
          sign up to start analyzing your resume
        </p>
        <form className="flex flex-col gap-5 px-5">
          <div>
            <label htmlFor="name" className="mb-2 text-sm font-medium block">
              Full Name{" "}
            </label>
            <input
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="mail" className="mb-3 text-sm font-medium block">
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 border border-slate-300 outline-none rounded-lg hover:border-blue-500"
              type="email"
              id="mail"
              placeholder="Enter your mail"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-medium text-sm block mb-3"
            >
              Password
            </label>
            <input
              className="w-full outline-none px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500"
              type="password"
              id="password"
              placeholder="create a password"
            />
          </div>
          <button
            className="w-full rounded-lg bg-blue-600 py-3 text-white px-4 font-semibold hover:bg-blue-700"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
