import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50/80 text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 1. Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-black text-red-600">BloodLink</span>
              <span className="text-xl font-bold text-gray-900">Addis</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 max-w-sm">
              Connecting blood donors with people who need blood across Addis Ababa.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
              <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
              <span>Dedicated to saving lives in Addis Ababa</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/blood-requests"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Blood Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/#blood-types"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Blood Types
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Get Involved */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/register"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link
                  href="/blood-requests/create"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Request Blood
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="transition-colors hover:text-red-600 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Important Information / Disclaimer */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Important Notice
            </h3>
            <div className="mt-4 rounded-xl border border-gray-200/90 bg-white p-4 shadow-2xs">
              <div className="flex items-start gap-2.5">
                <svg
                  className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <p className="text-xs leading-relaxed text-gray-600">
                  BloodLink Addis is a coordination platform. Donor eligibility, blood
                  compatibility, screening, and donation decisions are handled by
                  qualified healthcare professionals and blood centers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Bottom Section */}
        <div className="mt-12 border-t border-gray-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 BloodLink Addis. All rights reserved.</p>
          <p className="text-gray-500">Built to help connect people with blood donors.</p>
        </div>
      </div>
    </footer>
  );
}
