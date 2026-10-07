import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { CURRENT_DEMO_HOSPITAL } from "@/data/users";
import { DEMO_REQUESTS } from "@/data/bloodRequests";
import { DEMO_DONATIONS } from "@/data/donations";

export default function HospitalDashboardPage() {
  const hospital = CURRENT_DEMO_HOSPITAL;
  const hospitalRequests = DEMO_REQUESTS.slice(0, 4);
  const scheduledAppointments = DEMO_DONATIONS.filter((d) => d.status === "Scheduled");

  return (
    <DashboardLayout
      role="hospital"
      title="Hospital Blood Bank Dashboard"
      description="Manage hospital transfusion inventory requests, donor appointments, and verified screenings."
      actions={
        <Link
          href="/blood-requests/create"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
        >
          <span>+ Post Hospital Request</span>
        </Link>
      }
    >
      <div className="space-y-8">
        {/* Hospital Facility Banner */}
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Certified Healthcare Partner
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">
                  {hospital.name}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  📍 {hospital.hospitalAddress} • Contact: {hospital.contactPerson}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/hospital/requests"
                className="rounded-xl bg-red-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Manage Requests
              </Link>
              <Link
                href="/hospital/donations"
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Screening Queue
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Active Requests"
            value="3"
            subtext="Open emergency & planned requests"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            }
          />
          <StatCard
            label="Pending Donor Responses"
            value="8"
            badge="Action Needed"
            subtext="Donors awaiting screening confirmation"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
          />
          <StatCard
            label="Scheduled Donations"
            value={scheduledAppointments.length}
            subtext="Appointments set for next 48 hrs"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            }
          />
          <StatCard
            label="Completed Donations"
            value="42"
            subtext="Successfully collected blood units"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Requests & Upcoming Appointments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">Hospital Emergency & Active Requests</h3>
              <Link href="/hospital/requests" className="text-xs font-bold text-red-600 hover:text-red-700">
                View All →
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {hospitalRequests.map((req) => (
                <div key={req.id} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-red-100 text-red-700 font-extrabold flex items-center justify-center text-sm">
                      {req.bloodType}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-gray-500">{req.id}</span>
                        <StatusBadge status={req.urgency} variant="urgency" />
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {req.units} units needed • {req.createdAt}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blood-requests/${req.id}`}
                    className="text-xs font-semibold text-gray-700 hover:text-red-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-white transition"
                  >
                    View Case
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">Upcoming Donor Screenings</h3>
            <div className="space-y-3">
              {scheduledAppointments.map((app) => (
                <div key={app.id} className="p-3.5 rounded-xl border border-gray-100 bg-gray-50 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-gray-900">{app.donorName}</strong>
                    <span className="font-extrabold text-red-600">{app.bloodType}</span>
                  </div>
                  <p className="text-gray-500">Date: {app.date}</p>
                  <p className="text-gray-500">{app.donationLocation}</p>
                  <div className="pt-1.5 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-700 font-semibold">Appointment Confirmed</span>
                    <span className="font-mono text-gray-400">{app.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
