"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type RoleOption = "donor" | "recipient" | "hospital";

const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"] as const;
const LOCATIONS = [
  "Bole",
  "Kazanchis",
  "Piassa",
  "Lideta",
  "Arada",
  "Yeka",
  "Kirkos",
  "Other",
] as const;

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<RoleOption>("donor");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    location: "Bole",
    // Donor specific
    bloodType: "O+",
    availability: "Available",
    // Hospital specific
    orgName: "",
    contactPerson: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (selectedRole === "hospital" && !formData.orgName.trim()) {
      setError("Please specify the hospital / blood center organization name.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 rounded-3xl border border-gray-200/90 bg-white p-8 sm:p-10 shadow-xs">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-3xl font-black text-red-600">BloodLink</span>
              <span className="text-2xl font-bold text-gray-900">Addis</span>
            </Link>
            <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Create an Account
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
              Join the Addis Ababa blood donation & request coordination network.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center space-y-4 py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Registration Simulated Successfully!
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                Welcome to BloodLink Addis as a <strong>{selectedRole}</strong>. This is a frontend prototype. You can now access your dashboard.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href={`/${selectedRole}`}
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
                >
                  Go to {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Dashboard
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-800">
                  {error}
                </div>
              )}

              {/* Role Selector Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  I Want to Register As:
                </label>
                <div className="grid grid-cols-3 gap-2 rounded-2xl bg-gray-100 p-1.5">
                  {(["donor", "recipient", "hospital"] as RoleOption[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRole(r)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all ${
                        selectedRole === r
                          ? "bg-white text-red-600 shadow-xs"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {r === "hospital" ? "Hospital" : r}
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-gray-400">
                  *Admin registration is restricted and cannot be created publicly.
                </p>
              </div>

              {/* Common Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abebe Kebede"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+251 9..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Sub-City Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Role-Specific Fields */}
              {selectedRole === "donor" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-red-50/50 border border-red-100">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-red-950 mb-1">
                      Blood Group <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.bloodType}
                      onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                      className="block w-full rounded-xl border border-red-200 bg-white py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                    >
                      {BLOOD_TYPES.map((bt) => (
                        <option key={bt} value={bt}>
                          {bt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-red-950 mb-1">
                      Initial Availability
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="block w-full rounded-xl border border-red-200 bg-white py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                    >
                      <option value="Available">Available to Donate</option>
                      <option value="Busy">Currently Busy</option>
                      <option value="Unavailable">Temporarily Unavailable</option>
                    </select>
                  </div>
                </div>
              )}

              {selectedRole === "hospital" && (
                <div className="space-y-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-950 mb-1">
                      Hospital / Center Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zewditu Memorial Hospital"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="block w-full rounded-xl border border-blue-200 bg-white py-2.5 px-3.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-950 mb-1">
                      Contact Person / Department
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Blood Bank Coordinator"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="block w-full rounded-xl border border-blue-200 bg-white py-2.5 px-3.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>
              )}

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
              </div>

              {/* Medical Notice */}
              <p className="text-[11px] text-gray-500 leading-relaxed">
                By registering, you acknowledge that BloodLink Addis is a coordination platform. Medical screening, compatibility testing, and donation procedures are conducted exclusively by authorized healthcare centers.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-xl bg-red-600 py-3.5 px-4 text-sm font-semibold text-white shadow-xs hover:bg-red-700 active:scale-[0.99] disabled:opacity-60 transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {isSubmitting ? "Creating Account..." : `Register as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`}
              </button>

              <div className="text-center text-xs text-gray-500 pt-1">
                Already registered?{" "}
                <Link href="/login" className="font-bold text-red-600 hover:text-red-700">
                  Log in
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
