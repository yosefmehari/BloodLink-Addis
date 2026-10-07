export default function Statistics() {
  const stats = [
    {
      label: "Blood Donors",
      value: "--",
      badge: "Coming Soon",
      description: "Registered voluntary blood donors ready to respond in Addis Ababa.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      label: "Blood Requests",
      value: "--",
      badge: "Coming Soon",
      description: "Emergency and scheduled requests posted by hospitals and families.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      label: "Successful Donations",
      value: "--",
      badge: "Coming Soon",
      description: "Completed donor matches verified by medical blood centers.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
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
      ),
    },
    {
      label: "Partner Hospitals",
      value: "--",
      badge: "Coming Soon",
      description: "Participating healthcare centers across all Addis sub-cities.",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="statistics"
      aria-labelledby="statistics-heading"
      className="py-16 sm:py-24 bg-gray-50/70 border-t border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            Network Overview
          </span>
          <h2
            id="statistics-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Platform Statistics
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Real-time metrics tracking donor registrations, active blood requests,
            and successful healthcare connections across Addis Ababa will be
            displayed here as the network launches.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1 text-xs font-medium text-gray-500 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>Live platform metrics will populate upon launch</span>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-950/5"
            >
              <div>
                {/* Top Row: Icon and Status Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 border border-red-100 group-hover:bg-red-100/70 transition-colors">
                    {stat.icon}
                  </div>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
                    {stat.badge}
                  </span>
                </div>

                {/* Metric Value */}
                <div className="mt-6">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 group-hover:text-red-600 transition-colors">
                    {stat.value}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="mt-3 text-base sm:text-lg font-bold text-gray-900">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-medium text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span>Pending live data</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
