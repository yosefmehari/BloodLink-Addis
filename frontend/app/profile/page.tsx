"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CURRENT_DEMO_DONOR, type User } from "@/data/users";

export default function ProfilePage() {
  const [profile, setProfile] = useState<{
    name: string;
    email: string;
    phone: string;
    location: string;
    bloodType: NonNullable<User["bloodType"]>;
    availability: NonNullable<User["availability"]>;
  }>({
    name: CURRENT_DEMO_DONOR.name,
    email: CURRENT_DEMO_DONOR.email,
    phone: CURRENT_DEMO_DONOR.phone,
    location: CURRENT_DEMO_DONOR.location,
    bloodType: (CURRENT_DEMO_DONOR.bloodType as NonNullable<User["bloodType"]>) || "O+",
    availability: (CURRENT_DEMO_DONOR.availability as NonNullable<User["availability"]>) || "Available",
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              User Profile
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your personal details and donation preferences.
            </p>
          </div>
          <Link
            href="/donor"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-2"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {saved && (
          <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Profile changes saved successfully (Demo simulation).</span>
          </div>
        )}

        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-xs">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <div className="h-16 w-16 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl font-black shadow-md shadow-red-600/30">
                {profile.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-xs text-gray-500">
                  Role: <span className="font-semibold text-red-600">Registered Donor</span> • Sub-City: {profile.location}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  Location / Sub-City
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
                  <option value="Available">Available to Donate</option>
                  <option value="Busy">Temporarily Busy</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="submit"
                className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
