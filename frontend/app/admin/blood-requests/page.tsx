"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_REQUESTS } from "@/data/bloodRequests";

export default function AdminBloodRequestsPage() {
  const [search, setSearch] = useState("");
  const [urgencyFilter, setUrgencyFilter] = useState("all");
  const [bloodTypeFilter, setBloodTypeFilter] = useState("all");

  const filtered = DEMO_REQUESTS.filter((req) => {
    const matchesSearch =
      search === "" ||
      req.hospital.toLowerCase().includes(search.toLowerCase()) ||
      req.location.toLowerCase().includes(search.toLowerCase()) ||
      req.id.toLowerCase().includes(search.toLowerCase());
    const matchesUrgency = urgencyFilter === "all" || req.urgency === urgencyFilter;
    const matchesBt = bloodTypeFilter === "all" || req.bloodType === bloodTypeFilter;
    return matchesSearch && matchesUrgency && matchesBt;
  });

  return (
    <DashboardLayout
      role="admin"
      title="Global Blood Requests"
      description="Manage all published, emergency, and fulfilled blood requests city-wide."
      actions={
        <Link
          href="/blood-requests/create"
          className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <span>+ Create Request</span>
        </Link>
      }
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search by ID, hospital, sub-city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-900 focus:border-red-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={urgencyFilter}
              onChange={(e) => setUrgencyFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700"
            >
              <option value="all">All Urgencies</option>
              <option value="Emergency">Emergency</option>
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
            </select>

            <select
              value={bloodTypeFilter}
              onChange={(e) => setBloodTypeFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700"
            >
              <option value="all">All Blood Types</option>
              {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>

            <span className="text-xs text-gray-500 font-medium">
              Showing <strong>{filtered.length}</strong>
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">ID</th>
                  <th className="py-3.5 px-5">Blood Group</th>
                  <th className="py-3.5 px-5">Units</th>
                  <th className="py-3.5 px-5">Hospital Facility</th>
                  <th className="py-3.5 px-5">Sub-City</th>
                  <th className="py-3.5 px-5">Urgency</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Created</th>
                  <th className="py-3.5 px-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5 font-mono font-bold text-gray-900">{req.id}</td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center justify-center h-7 w-9 rounded-lg bg-red-100 text-red-700 font-extrabold text-xs">
                        {req.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-bold text-gray-900">{req.units}</td>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">{req.hospital}</td>
                    <td className="py-3.5 px-5">{req.location}</td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={req.urgency} variant="urgency" />
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="py-3.5 px-5 text-gray-500 text-xs">{req.createdAt}</td>
                    <td className="py-3.5 px-5">
                      <Link
                        href={`/blood-requests/${req.id}`}
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                      >
                        Inspect →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
