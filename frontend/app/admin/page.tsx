import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_USERS } from "@/data/users";
import { DEMO_REQUESTS } from "@/data/bloodRequests";
import { DEMO_DONATIONS } from "@/data/donations";

export default function AdminDashboardPage() {
  const recentUsers = DEMO_USERS.slice(0, 5);
  const recentRequests = DEMO_REQUESTS.slice(0, 5);
  const recentDonations = DEMO_DONATIONS.slice(0, 4);

  return (
    <DashboardLayout
      role="admin"
      title="Admin System Control"
      description="Network coordination overview for all Addis Ababa sub-cities and participating health institutions."
      actions={
        <Link
          href="/admin/reports"
          className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <span>View Detailed Reports →</span>
        </Link>
      }
    >
      <div className="space-y-8">
        {/* 6 Key Stat Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard
            label="Total Users"
            value="1,245"
            badge="+12%"
            subtext="All portal accounts"
          />
          <StatCard
            label="Donors"
            value="860"
            subtext="Registered donors"
          />
          <StatCard
            label="Recipients"
            value="345"
            subtext="Patient families"
          />
          <StatCard
            label="Hospitals"
            value="14"
            badge="Addis"
            subtext="Active centers"
          />
          <StatCard
            label="Active Requests"
            value={DEMO_REQUESTS.length}
            badge="Live"
            subtext="Open blood needs"
          />
          <StatCard
            label="Donations"
            value="428"
            subtext="Verified matches"
          />
        </div>

        {/* Middle Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Blood Requests */}
          <div className="lg:col-span-7 rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">Recent Blood Requests</h3>
                <p className="text-xs text-gray-500">Live city-wide emergency and hospital requests</p>
              </div>
              <Link href="/admin/blood-requests" className="text-xs font-bold text-red-600 hover:text-red-700">
                View All ({DEMO_REQUESTS.length}) →
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {recentRequests.map((req) => (
                <div key={req.id} className="p-4 flex items-center justify-between gap-3 hover:bg-gray-50/50 transition">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      {req.bloodType}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-xs text-gray-900 font-bold">{req.hospital}</strong>
                        <StatusBadge status={req.urgency} variant="urgency" />
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        📍 {req.location} • {req.units} units • {req.createdAt}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blood-requests/${req.id}`}
                    className="text-xs font-semibold text-gray-700 hover:text-red-600 px-3 py-1.5 rounded-lg border border-gray-200 bg-white transition"
                  >
                    Details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Registrations */}
          <div className="lg:col-span-5 rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">Recent Registrations</h3>
                <p className="text-xs text-gray-500">Latest accounts joined</p>
              </div>
              <Link href="/admin/users" className="text-xs font-bold text-red-600 hover:text-red-700">
                All Users →
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {recentUsers.map((u) => (
                <div key={u.id} className="p-3.5 sm:p-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-gray-100 text-gray-700 font-bold flex items-center justify-center text-xs shrink-0">
                      {u.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <strong className="text-xs text-gray-900 font-bold truncate block">{u.name}</strong>
                      <span className="text-[11px] text-gray-500 capitalize">{u.role} • {u.location}</span>
                    </div>
                  </div>
                  <StatusBadge status={u.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Row: Recent Donation Sessions Log */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900">Hospital Intake & Transfusion Sessions</h3>
              <p className="text-xs text-gray-500">Monitored donation completion events</p>
            </div>
            <Link href="/admin/donations" className="text-xs font-bold text-red-600 hover:text-red-700">
              View All History →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-5">ID</th>
                  <th className="py-3 px-5">Donor</th>
                  <th className="py-3 px-5">Blood Type</th>
                  <th className="py-3 px-5">Hospital</th>
                  <th className="py-3 px-5">Date</th>
                  <th className="py-3 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {recentDonations.map((don) => (
                  <tr key={don.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3 px-5 font-mono font-bold text-gray-900">{don.id}</td>
                    <td className="py-3 px-5 font-semibold text-gray-900">{don.donorName}</td>
                    <td className="py-3 px-5">
                      <span className="inline-flex items-center justify-center h-6 w-8 rounded-md bg-red-100 text-red-700 font-extrabold text-xs">
                        {don.bloodType}
                      </span>
                    </td>
                    <td className="py-3 px-5">{don.hospital}</td>
                    <td className="py-3 px-5 text-gray-500">{don.date}</td>
                    <td className="py-3 px-5">
                      <StatusBadge status={don.status} />
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
