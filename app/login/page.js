export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl shadow-sm bg-white p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>
        <p className="text-slate-900 mb-8 text-center">
          Login to continue to your account
        </p>
        <form className="flex flex-col gap-5 px-5">
          <div>
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 outline-none border border-slate-300 rounded-lg focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter your mail"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="rounded-lg w-full px-4 py-3 outline-none focus:border-blue-500 border border-slate-300"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-blue-600 px-4 text-white font-semibold py-3 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
