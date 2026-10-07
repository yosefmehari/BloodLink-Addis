"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { CURRENT_DEMO_HOSPITAL } from "@/data/users";

export default function HospitalProfilePage() {
  const [profile, setProfile] = useState({
    hospitalName: CURRENT_DEMO_HOSPITAL.name,
    email: CURRENT_DEMO_HOSPITAL.email,
    phone: CURRENT_DEMO_HOSPITAL.phone,
    location: CURRENT_DEMO_HOSPITAL.location,
    address: CURRENT_DEMO_HOSPITAL.hospitalAddress || "Zambia St, Kirkos Sub-City, Addis Ababa",
    contactPerson: CURRENT_DEMO_HOSPITAL.contactPerson || "Dr. Henok Solomon (Blood Bank Director)",
  });

  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout
      role="hospital"
      title="Hospital Facility Profile"
      description="Hospital accreditation, transfusion unit contacts, and clinical dispatch address."
    >
      <div className="max-w-3xl space-y-6">
        {saved && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Hospital profile updated successfully (Demo simulation).</span>
          </div>
        )}

        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Hospital / Blood Center Name
              </label>
              <input
                type="text"
                value={profile.hospitalName}
                onChange={(e) => setProfile({ ...profile, hospitalName: e.target.value })}
                className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Official Blood Bank Email
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
                  Emergency Phone / Hotline
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Sub-City Location
                </label>
                <select
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                >
                  {["Kirkos", "Bole", "Lideta", "Arada", "Piassa", "Yeka", "Kazanchis"].map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Contact Person / Chief Hematologist
                </label>
                <input
                  type="text"
                  value={profile.contactPerson}
                  onChange={(e) => setProfile({ ...profile, contactPerson: e.target.value })}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Physical Street Address / Building Wing
              </label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
              <button
                type="submit"
                className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Save Hospital Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
