import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50/60 via-white to-white py-12 md:py-20 lg:py-24">
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-red-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-rose-50/70 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Location & Network Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/90 px-3.5 py-1.5 text-xs font-semibold text-red-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
              </span>
              <span className="tracking-wide uppercase text-[11px] font-bold">
                Addis Ababa Emergency Network
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-[1.12]">
              Every Donation Can{" "}
              <span className="relative whitespace-nowrap text-red-600">
                Save a Life.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl lg:mx-0 leading-relaxed">
              Connect with blood donors and help people in Addis Ababa find the
              blood they need.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 lg:justify-start">
              <Link
                href="/recipient"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-red-600/25 transition-all duration-150 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                <span>Find Blood</span>
              </Link>

              <Link
                href="/register?role=donor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition-all duration-150 hover:border-red-600 hover:text-red-600 active:scale-[0.99] focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span>Become a Donor</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-gray-900">
                  10+
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Sub-Cities Covered
                </span>
              </div>
              <div className="flex flex-col border-x border-gray-100 px-3">
                <span className="text-xl sm:text-2xl font-black text-red-600">
                  24/7
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Emergency Matching
                </span>
              </div>
              <div className="flex flex-col pl-3">
                <span className="text-xl sm:text-2xl font-black text-gray-900">
                  100%
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Free Community Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Area (CSS & SVG bespoke healthcare composition) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 shadow-xl shadow-red-950/5">
                {/* Header of the visual card */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white shadow-sm shadow-red-600/30">
                      <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        Live Donor Dispatch
                      </h3>
                      <p className="text-xs text-gray-500">
                        Addis Ababa Central Hub
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>

                {/* Blood Group Availability Grid */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2.5">
                    <span>Compatible Blood Groups</span>
                    <span className="text-red-600">Urgent Demand</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { type: "O-", label: "Universal", urgent: true },
                      { type: "O+", label: "High Demand", urgent: true },
                      { type: "A+", label: "Available", urgent: false },
                      { type: "B+", label: "Available", urgent: false },
                    ].map((blood) => (
                      <div
                        key={blood.type}
                        className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-transform ${
                          blood.urgent
                            ? "border border-red-200 bg-red-50/70"
                            : "border border-gray-100 bg-gray-50/70"
                        }`}
                      >
                        <span
                          className={`text-base font-extrabold ${
                            blood.urgent ? "text-red-600" : "text-gray-800"
                          }`}
                        >
                          {blood.type}
                        </span>
                        <span className="text-[10px] text-gray-500 mt-0.5">
                          {blood.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Hospital Request Notice */}
                <div className="mt-5 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50/60 to-rose-50/40 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">
                          Tikur Anbessa Hospital
                        </span>
                        <span className="text-[11px] font-medium text-gray-500">
                          Just now
                        </span>
                      </div>
                      <p className="mt-1 text-gray-600">
                        Urgent need for <strong className="text-red-700">O-Negative</strong> blood units in Emergency Ward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Impact Mini-Stat */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium text-gray-700">
                      Addis Ababa Donor Registry
                    </span>
                  </div>
                  <span className="font-bold text-red-600">Enrolling Now</span>
                </div>
              </div>

              {/* Floating Badge (Subtle accent) */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-lg">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-gray-900">Bole • Kirkos • Yeka</p>
                  <p className="text-gray-500">Fast local connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
