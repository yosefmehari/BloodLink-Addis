"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_REQUESTS, BloodRequest } from "@/data/bloodRequests";

interface RecipientRequestItem extends BloodRequest {
  extendedStatus: "Active" | "Pending" | "Fulfilled" | "Cancelled";
}

const RECIPIENT_DEMO_ITEMS: RecipientRequestItem[] = [
  {
    ...DEMO_REQUESTS[0],
    extendedStatus: "Active",
  },
  {
    ...DEMO_REQUESTS[1],
    extendedStatus: "Pending",
  },
  {
    ...DEMO_REQUESTS[2],
    extendedStatus: "Fulfilled",
  },
  {
    ...DEMO_REQUESTS[3],
    extendedStatus: "Cancelled",
  },
];

export default function RecipientRequestsPage() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = RECIPIENT_DEMO_ITEMS.filter(
    (item) => statusFilter === "All" || item.extendedStatus === statusFilter
  );

  return (
    <DashboardLayout
      role="recipient"
      title="My Blood Requests"
      description="Manage and track the fulfillment of requests you submitted across Addis Ababa."
      actions={
        <Link
          href="/blood-requests/create"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <span>+ Create New Request</span>
        </Link>
      }
    >
      <div className="space-y-6">
        {/* Filter bar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-gray-500">Filter Status:</span>
            {["All", "Active", "Pending", "Fulfilled", "Cancelled"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  statusFilter === st
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing {filtered.length} requests
          </span>
        </div>

        {/* Requests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((req) => (
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
                        {req.units} units required • ID: {req.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <StatusBadge status={req.extendedStatus} />
                    <StatusBadge status={req.urgency} variant="urgency" />
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-600 line-clamp-2 leading-relaxed bg-gray-50 p-3 rounded-xl">
                  {req.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">Created {req.createdAt}</span>
                <Link
                  href={`/blood-requests/${req.id}`}
                  className="rounded-lg bg-gray-100 hover:bg-gray-200 px-3 py-1.5 font-semibold text-gray-800 transition"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
