import React from 'react'

function Login() {
  return (
    <div className="rounded-lg border text-card-foreground mx-auto max-w-[400px] shadow-lg bg-white">
      <div className="flex flex-col p-6 space-y-2 pb-5">
        <h3 className="whitespace-nowrap tracking-tight text-3xl font-bold">
          Login
        </h3>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <form>
        <div className="p-6 space-y-4 pt-5">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full relative bg-[#7c6923] text-white"
            type="submit"
          >
            Login
            <span className="absolute inset-0 translate-x-2 translate-y-2 -z-1 rotate-3 bg-[#7c6923] bg-opacity-25 blur rounded-lg scale-105"></span>
          </button>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <a className="underline" href="#" rel="ugc">
              {" "}
              Sign up{" "}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login