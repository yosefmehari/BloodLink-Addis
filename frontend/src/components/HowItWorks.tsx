export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request Blood",
      description:
        "A person or authorized requester creates a blood request with the required blood type, hospital, location, urgency, and other relevant information.",
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      highlight: "Quick submission form",
    },
    {
      number: "02",
      title: "Connect With Donors",
      description:
        "Potential donors can discover relevant requests and respond if they are available.",
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
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.059 2.772m0 0a5.97 5.97 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      highlight: "City-wide notification",
    },
    {
      number: "03",
      title: "Donate Safely",
      description:
        "The hospital or blood center handles donor screening, compatibility testing, and the actual blood donation process.",
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
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      highlight: "Certified medical screening",
    },
  ];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="py-16 sm:py-24 bg-gray-50/70 border-t border-b border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            Simple 3-Step Process
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            How BloodLink Addis Works
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            The platform helps connect people who need blood with potential donors
            while authorized hospitals and blood centers handle medical screening and
            all donation procedures safely.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-14 sm:mt-18">
          {/* Desktop Visual Connector Line */}
          <div
            className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-red-200 z-0"
            aria-hidden="true"
          />

          {/* Cards List */}
          <ol className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step) => (
              <li key={step.number} className="h-full">
                <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-950/5">
                  <div>
                    {/* Top row: Icon and Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 border border-red-100 group-hover:bg-red-100/70 transition-colors">
                        {step.icon}
                      </div>
                      <span className="text-3xl font-black tracking-tight text-gray-200 group-hover:text-red-500/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Highlight Tag */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>{step.highlight}</span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
