import Link from "next/link";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { CURRENT_DEMO_DONOR } from "@/data/users";
import { DEMO_REQUESTS } from "@/data/bloodRequests";
import { DEMO_DONATIONS } from "@/data/donations";
import { DEMO_NOTIFICATIONS } from "@/data/notifications";

export default function DonorDashboardPage() {
  const donor = CURRENT_DEMO_DONOR;
  const recommendedRequests = DEMO_REQUESTS.slice(0, 3);
  const upcomingDonation = DEMO_DONATIONS.find((d) => d.status === "Scheduled");
  const recentNotifications = DEMO_NOTIFICATIONS.filter(
    (n) => n.role === "donor" || n.role === "all"
  ).slice(0, 2);

  return (
    <DashboardLayout
      role="donor"
      title="Donor Dashboard"
      description="Manage your blood donor availability, upcoming appointments, and community requests."
    >
      <div className="space-y-8">
        {/* Welcome Card & Profile Summary */}
        <div className="rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-rose-50/60 to-white p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white font-black text-2xl shadow-md shadow-red-600/30">
                {donor.bloodType}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Voluntary Donor
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-0.5">
                  Welcome back, {donor.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-600 font-medium">
                  <span>📍 Sub-City: <strong>{donor.location}</strong></span>
                  <span>•</span>
                  <span>Blood Type: <strong className="text-red-600">{donor.bloodType}</strong></span>
                  <span>•</span>
                  <StatusBadge status={donor.availability || "Available"} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/donor/requests"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Find Blood Requests
              </Link>
              <Link
                href="/donor/profile"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            label="Requests Responded"
            value="6"
            subtext="Voluntary responses to emergency alerts"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            }
          />
          <StatCard
            label="Donations Completed"
            value={donor.totalDonations || 4}
            badge="Verified"
            subtext="Successfully completed hospital donations"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            label="Last Donation"
            value={donor.lastDonationDate || "Nov 14, 2025"}
            subtext="Eligible for donation at any certified center"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            }
          />
        </div>

        {/* Two-Column Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Recommended Requests */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Recommended Blood Requests</h3>
                <p className="text-xs text-gray-500">Based on your blood group ({donor.bloodType}) and location ({donor.location})</p>
              </div>
              <Link href="/donor/requests" className="text-xs font-bold text-red-600 hover:text-red-700">
                View all ({DEMO_REQUESTS.length}) →
              </Link>
            </div>

            <div className="space-y-3">
              {recommendedRequests.map((req) => (
                <div
                  key={req.id}
                  className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-2xs hover:border-red-200 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white font-black text-base">
                      {req.bloodType}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-gray-900">{req.hospital}</h4>
                        <StatusBadge status={req.urgency} variant="urgency" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        📍 {req.location} Sub-City • {req.units} units required • {req.createdAt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/blood-requests/${req.id}`}
                      className="rounded-xl border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/blood-requests/${req.id}`}
                      className="rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 transition"
                    >
                      Respond
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Upcoming Donation & Notifications */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Donation Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                Upcoming Appointment
              </h3>
              {upcomingDonation ? (
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">{upcomingDonation.date}</span>
                    <StatusBadge status="Scheduled" />
                  </div>
                  <p className="font-semibold text-gray-800">{upcomingDonation.hospital}</p>
                  <p className="text-gray-500">{upcomingDonation.donationLocation}</p>
                  <div className="pt-2 border-t border-emerald-100/80 text-[11px] text-emerald-800">
                    Medical screening takes ~20 mins. Please bring national ID.
                  </div>
                </div>
              ) : (
                <p className="text-xs text-gray-500">No scheduled appointments.</p>
              )}
            </div>

            {/* Notifications Widget */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Recent Alerts
                </h3>
                <Link href="/donor/notifications" className="text-xs font-semibold text-red-600 hover:text-red-700">
                  All Alerts
                </Link>
              </div>

              <div className="space-y-3">
                {recentNotifications.map((notif) => (
                  <div key={notif.id} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                    <strong className="text-gray-900 block font-bold">{notif.title}</strong>
                    <p className="text-gray-600 mt-1 line-clamp-2">{notif.message}</p>
                    <span className="text-[10px] text-gray-400 mt-2 block">{notif.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
