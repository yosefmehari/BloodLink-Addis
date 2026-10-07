"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";

interface HospitalRequestItem {
  id: string;
  bloodType: string;
  units: number;
  urgency: string;
  requester: string;
  status: "Active" | "Under Review" | "Confirmed" | "Fulfilled";
  date: string;
}

const INITIAL_ITEMS: HospitalRequestItem[] = [
  {
    id: "REQ-001",
    bloodType: "O-",
    units: 2,
    urgency: "Emergency",
    requester: "Emergency ICU Ward",
    status: "Active",
    date: "15 mins ago",
  },
  {
    id: "REQ-002",
    bloodType: "A+",
    units: 3,
    urgency: "Urgent",
    requester: "Cardiovascular Surgery Unit",
    status: "Confirmed",
    date: "1 hour ago",
  },
  {
    id: "REQ-003",
    bloodType: "B+",
    units: 1,
    urgency: "Emergency",
    requester: "Maternity & Delivery Ward",
    status: "Under Review",
    date: "2 hours ago",
  },
  {
    id: "REQ-004",
    bloodType: "O+",
    units: 2,
    urgency: "Normal",
    requester: "Pediatric Orthopedics",
    status: "Fulfilled",
    date: "Yesterday",
  },
];

export default function HospitalRequestsPage() {
  const [items, setItems] = useState<HospitalRequestItem[]>(INITIAL_ITEMS);
  const [demoActionMessage, setDemoActionMessage] = useState<string | null>(null);

  const handleUpdateStatus = (id: string, newStatus: HospitalRequestItem["status"]) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    setDemoActionMessage(`Request ${id} status updated to "${newStatus}" (Demo simulation).`);
    setTimeout(() => setDemoActionMessage(null), 3000);
  };

  return (
    <DashboardLayout
      role="hospital"
      title="Hospital Blood Requests"
      description="Review clinical requisitions, confirm donor assignments, and update case statuses."
      actions={
        <Link
          href="/blood-requests/create"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <span>+ Create Hospital Requisition</span>
        </Link>
      }
    >
      <div className="space-y-6">
        {demoActionMessage && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-xs font-semibold text-blue-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span>{demoActionMessage}</span>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900">Hospital Inpatient Requests</h3>
            <span className="text-xs text-gray-500">Showing {items.length} records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-5">Request ID</th>
                  <th className="py-3 px-5">Blood Type</th>
                  <th className="py-3 px-5">Units</th>
                  <th className="py-3 px-5">Urgency</th>
                  <th className="py-3 px-5">Requester / Ward</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Submitted</th>
                  <th className="py-3 px-5">Demo Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5 font-mono font-bold text-gray-900">
                      {item.id}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center justify-center h-7 w-9 rounded-lg bg-red-100 text-red-700 font-extrabold text-xs">
                        {item.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-medium">
                      {item.units} Units
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={item.urgency} variant="urgency" />
                    </td>
                    <td className="py-3.5 px-5 font-medium text-gray-900">
                      {item.requester}
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="py-3.5 px-5 text-gray-400 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(item.id, "Confirmed")}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition"
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(item.id, "Under Review")}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 transition"
                        >
                          Review
                        </button>
                        <Link
                          href={`/blood-requests/${item.id}`}
                          className="px-2 py-1 rounded-md text-[11px] font-bold text-gray-600 hover:text-red-600 transition"
                        >
                          View
                        </Link>
                      </div>
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
