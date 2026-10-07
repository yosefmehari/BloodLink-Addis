"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { CURRENT_DEMO_DONOR, type User } from "@/data/users";

export default function DonorProfilePage() {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    phone: string;
    bloodType: NonNullable<User["bloodType"]>;
    location: string;
    availability: NonNullable<User["availability"]>;
  }>({
    name: CURRENT_DEMO_DONOR.name,
    email: CURRENT_DEMO_DONOR.email,
    phone: CURRENT_DEMO_DONOR.phone,
    bloodType: (CURRENT_DEMO_DONOR.bloodType as NonNullable<User["bloodType"]>) || "O+",
    location: CURRENT_DEMO_DONOR.location,
    availability: (CURRENT_DEMO_DONOR.availability as NonNullable<User["availability"]>) || "Available",
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout
      role="donor"
      title="Donor Profile & Preferences"
      description="Update your contact details, blood group, and readiness to donate."
    >
      <div className="max-w-3xl space-y-6">
        {saved && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Donor profile updated successfully (Demo simulation).</span>
          </div>
        )}

        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Sub-City Location
                </label>
                <select
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                >
                  {["Bole", "Kirkos", "Yeka", "Lideta", "Arada", "Piassa", "Kazanchis"].map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Blood Group
                </label>
                <select
                  value={profile.bloodType}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      bloodType: e.target.value as NonNullable<User["bloodType"]>,
                    })
                  }
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                >
                  {["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map((bt) => (
                    <option key={bt} value={bt}>
                      {bt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Availability Status
                </label>
                <select
                  value={profile.availability}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      availability: e.target.value as NonNullable<User["availability"]>,
                    })
                  }
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                >
                  <option value="Available">Available (Ready to respond)</option>
                  <option value="Busy">Temporarily Busy</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
              <button
                type="submit"
                className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
