"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_DONATIONS } from "@/data/donations";

export default function DonorDonationsPage() {
  return (
    <DashboardLayout
      role="donor"
      title="Donation History"
      description="Track your past donations and upcoming scheduled hospital appointments."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">Recorded Donation Sessions</h3>
            <span className="text-xs text-gray-500 font-medium">
              Total Recorded: {DEMO_DONATIONS.length}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4 sm:px-6">Donation ID</th>
                  <th className="py-3 px-4 sm:px-6">Date</th>
                  <th className="py-3 px-4 sm:px-6">Hospital / Center</th>
                  <th className="py-3 px-4 sm:px-6">Blood Type</th>
                  <th className="py-3 px-4 sm:px-6">Units</th>
                  <th className="py-3 px-4 sm:px-6">Status</th>
                  <th className="py-3 px-4 sm:px-6">Medical Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {DEMO_DONATIONS.map((don) => (
                  <tr key={don.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-semibold text-gray-900">
                      {don.id}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-900 whitespace-nowrap">
                      {don.date}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-900">
                      {don.hospital}
                      <span className="block text-[11px] text-gray-400">
                        {don.donationLocation}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      <span className="inline-flex items-center justify-center h-6 w-8 rounded-md bg-red-100 text-red-700 font-extrabold text-xs">
                        {don.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">
                      {don.units} {don.units === 1 ? "Unit" : "Units"}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      <StatusBadge status={don.status} />
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-gray-500 text-xs max-w-xs truncate">
                      {don.notes || "—"}
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
