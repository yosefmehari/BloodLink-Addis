import Link from "next/link";

const BLOOD_GROUPS = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"] as const;

export default function BloodTypes() {
  return (
    <section
      id="blood-types"
      aria-labelledby="blood-types-heading"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            Supported Blood Groups
          </span>
          <h2
            id="blood-types-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Blood Types
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Select a blood type to find relevant blood requests or connect with
            potential donors across Addis Ababa.
          </p>
        </div>

        {/* Blood Types Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 sm:gap-6">
          {BLOOD_GROUPS.map((type) => (
            <Link
              key={type}
              href={`/blood-requests?bloodType=${encodeURIComponent(type)}`}
              aria-label={`View requests for blood type ${type}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg hover:shadow-red-950/5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              {/* Top row: Blood drop icon and badge */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 border border-red-100 group-hover:bg-red-600 transition-colors duration-200">
                  <svg
                    className="h-5 w-5 fill-current text-red-600 group-hover:text-white transition-colors duration-200"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-red-600 transition-colors">
                  Blood Group
                </span>
              </div>

              {/* Middle: Blood type label */}
              <div className="mt-6 my-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 group-hover:text-red-700 transition-colors">
                  {type}
                </span>
              </div>

              {/* Bottom action: View requests */}
              <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-600 group-hover:text-red-600 transition-colors">
                <span>View requests</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
