"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_USERS } from "@/data/users";

export default function AdminDonorsPage() {
  const [bloodTypeFilter, setBloodTypeFilter] = useState("All");
  const [search, setSearch] = useState("");

  const donors = DEMO_USERS.filter((u) => u.role === "donor");

  const filtered = donors.filter((d) => {
    const matchesBt = bloodTypeFilter === "All" || d.bloodType === bloodTypeFilter;
    const matchesSearch =
      search === "" ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase());
    return matchesBt && matchesSearch;
  });

  return (
    <DashboardLayout
      role="admin"
      title="Donor Registry"
      description="Registered blood donors, blood group distribution, and readiness in Addis Ababa."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search donor name or sub-city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-900 focus:border-red-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={bloodTypeFilter}
              onChange={(e) => setBloodTypeFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700"
            >
              <option value="All">All Blood Types</option>
              {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
            <span className="text-xs text-gray-500">Showing {filtered.length} donors</span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">Donor Name</th>
                  <th className="py-3.5 px-5">Blood Group</th>
                  <th className="py-3.5 px-5">Sub-City</th>
                  <th className="py-3.5 px-5">Availability</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Total Donations</th>
                  <th className="py-3.5 px-5">Last Donation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5">
                      <strong className="text-gray-900 block font-bold">{d.name}</strong>
                      <span className="text-[11px] text-gray-400">{d.phone}</span>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center justify-center h-7 w-9 rounded-lg bg-red-100 text-red-700 font-extrabold text-xs">
                        {d.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-5">{d.location}</td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={d.availability || "Available"} />
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={d.status} />
                    </td>
                    <td className="py-3.5 px-5 font-bold text-gray-900">
                      {d.totalDonations || 0}
                    </td>
                    <td className="py-3.5 px-5 text-gray-500 text-xs">
                      {d.lastDonationDate || "Never"}
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
