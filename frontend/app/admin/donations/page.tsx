"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_DONATIONS } from "@/data/donations";

export default function AdminDonationsPage() {
  return (
    <DashboardLayout
      role="admin"
      title="Donation Operations Log"
      description="All completed, scheduled, and cancelled transfusion events across partner hospitals."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">Transfusion History & Intake Records</h3>
            <span className="text-xs text-gray-500 font-medium">Logged: {DEMO_DONATIONS.length} sessions</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">Session ID</th>
                  <th className="py-3.5 px-5">Donor</th>
                  <th className="py-3.5 px-5">Blood Type</th>
                  <th className="py-3.5 px-5">Hospital Facility</th>
                  <th className="py-3.5 px-5">Request Code</th>
                  <th className="py-3.5 px-5">Date</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Clinical Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {DEMO_DONATIONS.map((don) => (
                  <tr key={don.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5 font-mono font-bold text-gray-900">{don.id}</td>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">{don.donorName}</td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center justify-center h-6 w-8 rounded-md bg-red-100 text-red-700 font-extrabold text-xs">
                        {don.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-5">{don.hospital}</td>
                    <td className="py-3.5 px-5 font-mono text-xs text-gray-500">{don.requestId}</td>
                    <td className="py-3.5 px-5 text-gray-700">{don.date}</td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={don.status} />
                    </td>
                    <td className="py-3.5 px-5 text-xs text-gray-500">{don.notes}</td>
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
