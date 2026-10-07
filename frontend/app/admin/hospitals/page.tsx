"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_USERS, User } from "@/data/users";

export default function AdminHospitalsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewHospital, setViewHospital] = useState<User | null>(null);

  const hospitals = DEMO_USERS.filter((u) => u.role === "hospital");

  const filtered = hospitals.filter((h) => {
    const matchesSearch =
      search === "" ||
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || h.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout
      role="admin"
      title="Partner Hospitals & Centers"
      description="Authorized blood transfusion facilities, hospital contacts, and verification status."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search hospital name or sub-city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-900 focus:border-red-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
            <span className="text-xs text-gray-500">Total: {filtered.length}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">Hospital Facility</th>
                  <th className="py-3.5 px-5">Sub-City</th>
                  <th className="py-3.5 px-5">Contact Person</th>
                  <th className="py-3.5 px-5">Phone / Email</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Active Requests</th>
                  <th className="py-3.5 px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((h) => (
                  <tr key={h.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5">
                      <strong className="text-gray-900 block font-bold">{h.name}</strong>
                      <span className="text-[11px] text-gray-400">{h.hospitalAddress}</span>
                    </td>
                    <td className="py-3.5 px-5">{h.location}</td>
                    <td className="py-3.5 px-5 font-medium text-gray-800">{h.contactPerson}</td>
                    <td className="py-3.5 px-5 font-mono text-xs text-gray-500">
                      <div>{h.phone}</div>
                      <div className="text-[11px] text-gray-400">{h.email}</div>
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={h.status} />
                    </td>
                    <td className="py-3.5 px-5 font-bold text-gray-900">
                      {h.activeRequestsCount || 0}
                    </td>
                    <td className="py-3.5 px-5">
                      <button
                        type="button"
                        onClick={() => setViewHospital(h)}
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {viewHospital && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-base font-bold text-gray-900">{viewHospital.name}</h3>
                <button
                  type="button"
                  onClick={() => setViewHospital(null)}
                  className="text-gray-400 hover:text-gray-700 p-1"
                >
                  ✕
                </button>
              </div>
              <div className="text-xs space-y-2 text-gray-700">
                <p><strong>Sub-City:</strong> {viewHospital.location}</p>
                <p><strong>Address:</strong> {viewHospital.hospitalAddress}</p>
                <p><strong>Contact Person:</strong> {viewHospital.contactPerson}</p>
                <p><strong>Hotline:</strong> {viewHospital.phone}</p>
                <p><strong>Email:</strong> {viewHospital.email}</p>
                <p><strong>Status:</strong> {viewHospital.status}</p>
                <p><strong>Accreditation:</strong> Verified Addis Ababa Blood Bank Partner</p>
              </div>
              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={() => setViewHospital(null)}
                  className="rounded-xl bg-gray-100 hover:bg-gray-200 px-4 py-2 text-xs font-bold text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
