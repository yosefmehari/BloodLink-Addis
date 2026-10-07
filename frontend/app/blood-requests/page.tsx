"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { DEMO_REQUESTS, type BloodRequest } from "@/data/bloodRequests";

const BLOOD_TYPES = ["All", "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"] as const;
const URGENCIES = ["All", "Emergency", "Urgent", "Normal"] as const;
const LOCATIONS = [
  "All",
  "Bole",
  "Kazanchis",
  "Piassa",
  "Lideta",
  "Arada",
  "Yeka",
  "Kirkos",
] as const;

function BloodRequestsContent() {
  const searchParams = useSearchParams();
  const urlBloodType = searchParams.get("bloodType");
  const validUrlBloodType =
    urlBloodType && BLOOD_TYPES.includes(urlBloodType as (typeof BLOOD_TYPES)[number])
      ? urlBloodType
      : null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodTypeState, setSelectedBloodTypeState] = useState<string | null>(null);
  const [selectedUrgency, setSelectedUrgency] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [activeModalRequest, setActiveModalRequest] = useState<BloodRequest | null>(null);

  const selectedBloodType = selectedBloodTypeState ?? validUrlBloodType ?? "All";

  const filteredRequests = useMemo(() => {
    return DEMO_REQUESTS.filter((req) => {
      // Search matching (hospital or location or description)
      const matchesSearch =
        searchQuery.trim() === "" ||
        req.hospital.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        req.location.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        req.description.toLowerCase().includes(searchQuery.toLowerCase().trim());

      // Blood type filter
      const matchesBloodType =
        selectedBloodType === "All" || req.bloodType === selectedBloodType;

      // Urgency filter
      const matchesUrgency =
        selectedUrgency === "All" || req.urgency === selectedUrgency;

      // Location filter
      const matchesLocation =
        selectedLocation === "All" || req.location === selectedLocation;

      return matchesSearch && matchesBloodType && matchesUrgency && matchesLocation;
    });
  }, [searchQuery, selectedBloodType, selectedUrgency, selectedLocation]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedBloodTypeState("All");
    setSelectedUrgency("All");
    setSelectedLocation("All");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedBloodType !== "All" ||
    selectedUrgency !== "All" ||
    selectedLocation !== "All";

  return (
    <main className="flex-1 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Notice: Demo Data Banner */}
        <div className="mb-6 flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-2.5 text-xs text-amber-800">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-amber-500" />
            <span className="font-semibold">Sample Data:</span>
            <span>These are mock demo requests for interface preview purposes.</span>
          </div>
          <span className="hidden sm:inline-block font-medium text-amber-700">
            Addis Ababa Pilot
          </span>
        </div>

        {/* 1. Page Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-gray-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
              Urgent Directory
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Blood Requests
            </h1>
            <p className="mt-2 text-base text-gray-600 max-w-2xl leading-relaxed">
              Find active blood requests and help connect patients with potential donors.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              *BloodLink Addis does not guarantee blood availability or donor response time.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/blood-requests/create"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-red-600/30 transition-all hover:bg-red-700 hover:shadow-md active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <span>Request Blood</span>
            </Link>
          </div>
        </div>

        {/* 2. Search & Filters Bar */}
        <section
          aria-label="Search and filters"
          className="mt-8 rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4 items-end">
            {/* Search Input */}
            <div className="lg:col-span-5">
              <label
                htmlFor="search-requests"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  id="search-requests"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by hospital or location..."
                  className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search query"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-gray-400 hover:text-gray-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Blood Type Filter */}
            <div className="lg:col-span-2">
              <label
                htmlFor="filter-blood-type"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Blood Type
              </label>
              <select
                id="filter-blood-type"
                value={selectedBloodType}
                onChange={(e) => setSelectedBloodTypeState(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 px-3 text-sm text-gray-900 transition-colors focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
              >
                {BLOOD_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Blood Types" : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Urgency Filter */}
            <div className="lg:col-span-2">
              <label
                htmlFor="filter-urgency"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Urgency
              </label>
              <select
                id="filter-urgency"
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 px-3 text-sm text-gray-900 transition-colors focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
              >
                {URGENCIES.map((urg) => (
                  <option key={urg} value={urg}>
                    {urg === "All" ? "All Urgencies" : urg}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="lg:col-span-2">
              <label
                htmlFor="filter-location"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Location
              </label>
              <select
                id="filter-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 px-3 text-sm text-gray-900 transition-colors focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "All" ? "All Locations" : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset / Status Action */}
            <div className="lg:col-span-1 flex items-center justify-end">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="w-full lg:w-auto text-xs font-semibold text-red-600 hover:text-red-700 py-2.5 px-2 rounded-lg border border-red-200 bg-red-50/50 transition-colors text-center"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Result Count and Active Filters Bar */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
            <div>
              Showing <strong className="text-gray-900">{filteredRequests.length}</strong> of{" "}
              {DEMO_REQUESTS.length} requests
            </div>
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <span>Active filters:</span>
                {selectedBloodType !== "All" && (
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                    Type: {selectedBloodType}
                  </span>
                )}
                {selectedUrgency !== "All" && (
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                    Urgency: {selectedUrgency}
                  </span>
                )}
                {selectedLocation !== "All" && (
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                    Location: {selectedLocation}
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 3. Request List */}
        <section aria-label="Requests listing" className="mt-8">
          {filteredRequests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRequests.map((req) => (
                <article
                  key={req.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg hover:shadow-red-950/5"
                >
                  <div>
                    {/* Top row: Blood Group Badge + Urgency */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white font-extrabold text-lg shadow-sm shadow-red-600/30">
                          {req.bloodType}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-900">
                            {req.units} {req.units === 1 ? "unit" : "units"} needed
                          </span>
                          <span className="block text-[11px] text-gray-400">
                            ID: {req.id}
                          </span>
                        </div>
                      </div>

                      {/* Urgency Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          req.urgency === "Emergency"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : req.urgency === "Urgent"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            req.urgency === "Emergency"
                              ? "bg-red-600"
                              : req.urgency === "Urgent"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                          }`}
                        />
                        <span>{req.urgency}</span>
                      </span>
                    </div>

                    {/* Hospital & Location */}
                    <div className="mt-5 space-y-1.5">
                      <div className="flex items-start gap-2 text-sm font-bold text-gray-900">
                        <svg
                          className="h-4 w-4 text-red-600 shrink-0 mt-0.5"
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
                        <span className="line-clamp-1">{req.hospital}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <svg
                          className="h-3.5 w-3.5 text-gray-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
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
                        <span>Addis Ababa, {req.location} Sub-City</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-4 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {req.description}
                    </p>
                  </div>

                  {/* Card Footer: Timestamp + View Details */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{req.createdAt}</span>

                    <Link
                      href={`/blood-requests/${req.id}`}
                      className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold text-red-600 hover:bg-red-50 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      <span>View Details</span>
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* 4. Empty State */
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-2xs">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                No blood requests found.
              </h3>
              <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
                Try changing your search or filters to see available requests.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 5. Create Request CTA */}
        <section
          aria-labelledby="cta-heading"
          className="mt-14 rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-rose-50 to-white p-6 sm:p-10 shadow-xs"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                Need Blood?
              </span>
              <h2
                id="cta-heading"
                className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight"
              >
                Can&apos;t find what you need?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl">
                Create a blood request and provide the necessary information so voluntary
                donors in Addis Ababa can connect with you.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/blood-requests/create"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-red-600/30 hover:bg-red-700 transition-all active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
            </div>
          </div>
        </section>
      </div>

      {/* Details Modal */}
      {activeModalRequest && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white text-xl font-black">
                  {activeModalRequest.bloodType}
                </div>
                <div>
                  <h3 id="modal-title" className="text-lg font-bold text-gray-900">
                    Request Details ({activeModalRequest.id})
                  </h3>
                  <span className="text-xs text-gray-500">
                    Posted {activeModalRequest.createdAt}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalRequest(null)}
                aria-label="Close details"
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-5 space-y-4 text-sm text-gray-700">
              <div className="grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-4">
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold">
                    Units Needed
                  </span>
                  <p className="font-bold text-gray-900 mt-0.5">
                    {activeModalRequest.units} {activeModalRequest.units === 1 ? "Unit" : "Units"}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold">
                    Urgency Level
                  </span>
                  <p className="font-bold text-red-600 mt-0.5">
                    {activeModalRequest.urgency}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase font-bold">Hospital</span>
                <p className="font-semibold text-gray-900 mt-0.5">
                  {activeModalRequest.hospital}
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase font-bold">Location</span>
                <p className="text-gray-700 mt-0.5">
                  Addis Ababa, {activeModalRequest.location} Sub-City
                </p>
              </div>

              <div>
                <span className="text-xs text-gray-400 uppercase font-bold">
                  Medical Note / Description
                </span>
                <p className="mt-1 rounded-xl border border-gray-100 bg-gray-50 p-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                  {activeModalRequest.description}
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
                <strong>Notice:</strong> This is a sample request for interface preview.
                Live donor coordination and hospital contact will be activated once the
                backend is connected.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setActiveModalRequest(null)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Close
              </button>
              <Link
                href="/register?role=donor"
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Respond as Donor
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function LoadingFallback() {
  return (
    <div className="flex-1 py-16 text-center text-sm text-gray-500">
      Loading blood requests...
    </div>
  );
}

export default function BloodRequestsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <BloodRequestsContent />
      </Suspense>
      <Footer />
    </div>
  );
}
