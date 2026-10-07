import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { CURRENT_DEMO_RECIPIENT } from "@/data/users";
import { DEMO_REQUESTS } from "@/data/bloodRequests";

export default function RecipientDashboardPage() {
  const recipient = CURRENT_DEMO_RECIPIENT;
  // Requests associated with recipient
  const myRequests = DEMO_REQUESTS.slice(0, 3);

  return (
    <DashboardLayout
      role="recipient"
      title="Recipient Dashboard"
      description="Track your requested blood units, voluntary donor responses, and hospital statuses."
      actions={
        <Link
          href="/blood-requests/create"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
          <span>Create Request</span>
        </Link>
      }
    >
      <div className="space-y-8">
        {/* Welcome Card */}
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Patient / Family Requester
              </span>
              <h2 className="text-2xl font-black text-gray-900 mt-1">
                Hello, {recipient.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Location: <strong>{recipient.location} Sub-City, Addis Ababa</strong> • Phone: {recipient.phone}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/blood-requests/create"
                className="rounded-xl bg-red-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                + Post New Blood Request
              </Link>
              <Link
                href="/recipient/requests"
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                View All My Requests
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            label="Active Requests"
            value="2"
            badge="Live"
            subtext="Currently broadcasted to Addis donors"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            }
          />
          <StatCard
            label="Pending Responses"
            value="3"
            subtext="Donors waiting for hospital pre-screening"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
          />
          <StatCard
            label="Completed Requests"
            value="1"
            subtext="Successfully matched & transfused"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* My Current Requests Table */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900">Your Active Blood Requests</h3>
              <p className="text-xs text-gray-500">Track incoming donor responses and verification</p>
            </div>
            <Link href="/blood-requests/create" className="text-xs font-bold text-red-600 hover:text-red-700">
              + New Request
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-5">ID</th>
                  <th className="py-3 px-5">Blood Type</th>
                  <th className="py-3 px-5">Units</th>
                  <th className="py-3 px-5">Hospital</th>
                  <th className="py-3 px-5">Urgency</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {myRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5 font-mono font-semibold text-gray-900">
                      {req.id}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center justify-center h-7 w-9 rounded-lg bg-red-100 text-red-700 font-extrabold text-xs">
                        {req.bloodType}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-medium">
                      {req.units} Units
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-gray-900">
                      {req.hospital}
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={req.urgency} variant="urgency" />
                    </td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="py-3.5 px-5">
                      <Link
                        href={`/blood-requests/${req.id}`}
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                      >
                        View Details →
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
