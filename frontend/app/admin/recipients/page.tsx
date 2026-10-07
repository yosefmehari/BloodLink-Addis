"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_USERS } from "@/data/users";

export default function AdminRecipientsPage() {
  const [search, setSearch] = useState("");

  const recipients = DEMO_USERS.filter((u) => u.role === "recipient");

  const filtered = recipients.filter(
    (r) =>
      search === "" ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout
      role="admin"
      title="Recipient Registry"
      description="Patients, families, and authorized medical advocates who requested blood units."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search recipient name or sub-city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-900 focus:border-red-500"
            />
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Total registered: <strong>{filtered.length}</strong>
          </span>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">Recipient / Requester</th>
                  <th className="py-3.5 px-5">Sub-City Location</th>
                  <th className="py-3.5 px-5">Phone Contact</th>
                  <th className="py-3.5 px-5">Active Requests</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Registered Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5 font-bold text-gray-900">
                      {r.name}
                      <span className="block text-[11px] font-normal text-gray-400">{r.email}</span>
                    </td>
                    <td className="py-3.5 px-5">{r.location}</td>
                    <td className="py-3.5 px-5 font-mono text-xs">{r.phone}</td>
                    <td className="py-3.5 px-5 font-bold text-red-600">
                      {r.activeRequestsCount || 0}
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={r.status} />
                    </td>
                    <td className="py-3.5 px-5 text-gray-500 text-xs">{r.registeredDate}</td>
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
