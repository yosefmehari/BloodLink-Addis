import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBloodRequestById } from "@/data/bloodRequests";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BloodRequestDetailPage({ params }: PageProps) {
  const { id } = await params;
  const request = getBloodRequestById(id);

  if (!request) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50/50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-xs">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
              Blood request not found
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Sorry, we couldn&apos;t find the requested blood request. It may have expired or been removed.
            </p>
            <div className="mt-6">
              <Link
                href="/blood-requests"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-red-700 active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                <span>Back to Blood Requests</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation & Demo Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <Link
              href="/blood-requests"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <span>Back to Blood Requests</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>Demo Request • Sample Data</span>
            </span>
          </div>

          {/* Main Card */}
          <article className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-xs">
            {/* Header / Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                {/* Prominent Blood Group Badge */}
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-md shadow-red-600/30">
                  <span className="text-2xl sm:text-3xl font-black">
                    {request.bloodType}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Request ID
                    </span>
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-mono font-semibold text-gray-700">
                      {request.id}
                    </span>
                  </div>
                  <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                    Blood Request Details
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Posted {request.createdAt}
                  </p>
                </div>
              </div>

              {/* Status and Urgency Indicators */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2">
                {/* Urgency Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                    request.urgency === "Emergency"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : request.urgency === "Urgent"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      request.urgency === "Emergency"
                        ? "bg-red-600"
                        : request.urgency === "Urgent"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <span>Urgency: {request.urgency}</span>
                </span>

                {/* Status Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Status: {request.status}</span>
                </span>
              </div>
            </div>

            {/* Structured Details Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Units Needed */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Units Needed
                </span>
                <p className="mt-1 text-2xl font-black text-gray-900">
                  {request.units} {request.units === 1 ? "Unit" : "Units"}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Standard whole blood units required
                </p>
              </div>

              {/* Hospital */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Hospital / Healthcare Facility
                </span>
                <p className="mt-1 text-lg font-bold text-gray-900 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-red-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                  <span>{request.hospital}</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Authorized medical institution
                </p>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5 md:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Location & Sub-City
                </span>
                <p className="mt-1 text-base font-bold text-gray-900 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-red-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
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
                  <span>{request.location} Sub-City, Addis Ababa, Ethiopia</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Medical Description & Case Note
              </span>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                {request.description}
              </p>
            </div>

            {/* Safety & Medical Disclaimer */}
            <div className="mt-8 rounded-2xl border border-red-100 bg-red-50/50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div className="text-xs leading-relaxed text-gray-600">
                  <p className="font-bold text-gray-900 mb-0.5">
                    Coordination & Safety Policy
                  </p>
                  BloodLink Addis is a coordination platform. Donor eligibility, blood
                  compatibility, screening, and donation decisions are handled by
                  qualified healthcare professionals and blood centers.
                </div>
              </div>
            </div>

            {/* Respond Action Area */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-600">
                  Want to help this patient?
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Sign in to respond to this request.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-red-600/30 transition-all hover:bg-red-700 active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  <svg
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                  <span>Respond as Donor</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
