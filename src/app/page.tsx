"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="flex w-full flex-col justify-center px-8 py-16 md:w-[53%] md:px-20 lg:px-28">
        <div className="mx-auto w-full max-w-md">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-lg">
              P
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Coming Soon
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-500">
            We&apos;re building a smarter way to access investment data.
            Be the first to know when we launch.
          </p>

          {/* Email Capture Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Notify Me
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-400">
            No spam. We&apos;ll only send you launch updates.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="relative hidden md:flex md:w-[47%] md:flex-col md:items-center md:justify-center"
        style={{
          backgroundImage: "url('/sidebar-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-12 text-center text-white">
          <h2 className="text-3xl font-bold leading-snug lg:text-4xl">
            Smart Data,
            <br />
            Smarter Investments
          </h2>
        </div>

        {/* Bottom brand */}
        <p className="absolute bottom-8 z-10 text-sm font-medium tracking-widest text-white/70">
          PEVio
        </p>
      </div>
    </div>
  );
}
