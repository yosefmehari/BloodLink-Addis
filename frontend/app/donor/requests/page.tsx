"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_REQUESTS } from "@/data/bloodRequests";

export default function DonorRequestsPage() {
  const [filterUrgency, setFilterUrgency] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");

  const filteredRequests = DEMO_REQUESTS.filter((req) => {
    const matchesUrgency = filterUrgency === "All" || req.urgency === filterUrgency;
    const matchesLocation = filterLocation === "All" || req.location === filterLocation;
    return matchesUrgency && matchesLocation;
  });

  return (
    <DashboardLayout
      role="donor"
      title="Matching Blood Requests"
      description="Requests in Addis Ababa matching voluntary blood donation needs."
    >
      <div className="space-y-6">
        {/* Filter bar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">
                Urgency
              </label>
              <select
                value={filterUrgency}
                onChange={(e) => setFilterUrgency(e.target.value)}
                className="rounded-xl border border-gray-200 bg-gray-50/50 py-1.5 px-3 text-xs text-gray-900 focus:border-red-500"
              >
                <option value="All">All Urgencies</option>
                <option value="Emergency">Emergency</option>
                <option value="Urgent">Urgent</option>
                <option value="Normal">Normal</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">
                Sub-City
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="rounded-xl border border-gray-200 bg-gray-50/50 py-1.5 px-3 text-xs text-gray-900 focus:border-red-500"
              >
                <option value="All">All Locations</option>
                <option value="Bole">Bole</option>
                <option value="Kirkos">Kirkos</option>
                <option value="Lideta">Lideta</option>
                <option value="Arada">Arada</option>
                <option value="Piassa">Piassa</option>
                <option value="Yeka">Yeka</option>
              </select>
            </div>
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing <strong>{filteredRequests.length}</strong> matching requests
          </span>
        </div>

        {/* Requests List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-2xs hover:border-red-200 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white font-black text-lg">
                      {req.bloodType}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{req.hospital}</h3>
                      <span className="text-xs text-gray-500">
                        📍 {req.location} Sub-City • ID: {req.id}
                      </span>
                    </div>
                  </div>
                  <StatusBadge status={req.urgency} variant="urgency" />
                </div>

                <div className="mt-4 p-3 rounded-xl bg-gray-50 text-xs text-gray-700">
                  <span className="font-semibold text-gray-900 block mb-1">
                    Units required: {req.units} {req.units === 1 ? "unit" : "units"}
                  </span>
                  <p className="line-clamp-2 text-gray-600">{req.description}</p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">{req.createdAt}</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/blood-requests/${req.id}`}
                    className="rounded-lg border border-gray-200 px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/blood-requests/${req.id}`}
                    className="rounded-lg bg-red-600 px-3 py-1.5 font-semibold text-white hover:bg-red-700 transition"
                  >
                    Respond
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
