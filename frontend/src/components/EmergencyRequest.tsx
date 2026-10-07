import Link from "next/link";

export default function EmergencyRequest() {
  return (
    <section
      id="emergency"
      aria-labelledby="emergency-heading"
      className="py-12 sm:py-16 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 p-6 sm:p-10 lg:p-12 shadow-2xl border border-red-900/30">
          {/* Subtle background glow elements */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-600/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Heading and explanation */}
            <div className="lg:col-span-7">
              {/* Emergency indicator badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold text-red-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                <span>Emergency Assistance Available</span>
              </div>

              {/* Main Headline */}
              <h2
                id="emergency-heading"
                className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Need Blood Urgently?
              </h2>

              {/* Supporting Message */}
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-300 max-w-2xl">
                Create a blood request in just a few clicks so potential donors and
                participating healthcare centers across Addis Ababa can discover your
                need and reach out to help immediately.
              </p>

              {/* Trust & reassurance items */}
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-red-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Direct donor discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-red-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Coverage across all 11 sub-cities</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-red-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>100% Free public service</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actions & Emergency Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xs">
                {/* Visual blood-drop header */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-md shadow-red-600/40">
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Fast Action Network
                    </h3>
                    <p className="text-xs text-gray-400">
                      Choose an option to proceed quickly
                    </p>
                  </div>
                </div>

                {/* Two Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    href="/blood-requests/create"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-red-600/30 transition-all duration-150 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/40 active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                    <span>Request Blood</span>
                  </Link>

                  <Link
                    href="/blood-requests"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white transition-all duration-150 hover:bg-white/20 hover:border-white/30 active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    <span>Find Blood</span>
                  </Link>
                </div>

                {/* Subtext info */}
                <p className="mt-3.5 text-center text-xs text-gray-400">
                  Requests are broadcasted immediately to matching blood groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
