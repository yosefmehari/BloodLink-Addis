"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  bloodType: string;
  units: number | string;
  hospital: string;
  location: string;
  urgency: string;
  description: string;
}

interface FormErrors {
  bloodType?: string;
  units?: string;
  hospital?: string;
  location?: string;
  urgency?: string;
}

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
const URGENCIES = ["Normal", "Urgent", "Emergency"] as const;

export default function CreateBloodRequestPage() {
  const [formData, setFormData] = useState<FormData>({
    bloodType: "",
    units: "1",
    hospital: "",
    location: "",
    urgency: "Normal",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.bloodType) {
      newErrors.bloodType = "Please select a blood type.";
    }

    const unitsNum = Number(formData.units);
    if (!formData.units || isNaN(unitsNum) || unitsNum < 1) {
      newErrors.units = "Units needed must be at least 1.";
    }

    if (!formData.hospital.trim()) {
      newErrors.hospital = "Hospital or healthcare facility is required.";
    }

    if (!formData.location) {
      newErrors.location = "Please select a location or sub-city.";
    }

    if (!formData.urgency) {
      newErrors.urgency = "Please select an urgency level.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate brief local UI state transition (no API/network calls)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      bloodType: "",
      units: "1",
      hospital: "",
      location: "",
      urgency: "Normal",
      description: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation & Demo Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <Link
              href="/blood-requests"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <span>Back to Blood Requests</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span>Demo Form • Frontend Preview</span>
            </span>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Request Blood
            </h1>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              Provide the details needed to help connect your request with potential donors.
            </p>
          </div>

          {/* Form Card or Success Confirmation */}
          {isSubmitted ? (
            /* Success State */
            <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-xs text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900">
                Blood request submitted successfully.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
                This is currently a demo. Your request will be connected to the BloodLink
                backend later.
              </p>

              {/* Submission Summary Box */}
              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/70 p-5 text-left text-xs sm:text-sm">
                <span className="block font-bold text-gray-400 uppercase tracking-wider text-[11px] mb-3">
                  Submitted Request Summary (Demo)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <span className="text-gray-500 block">Blood Type</span>
                    <strong className="text-red-600 font-extrabold text-base">
                      {formData.bloodType}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Units</span>
                    <strong className="text-gray-900 font-bold text-base">
                      {formData.units} Units
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Urgency</span>
                    <strong className="text-gray-900 font-bold text-base">
                      {formData.urgency}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Location</span>
                    <strong className="text-gray-900 font-bold text-base">
                      {formData.location}
                    </strong>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200/60">
                  <span className="text-gray-500 block">Hospital</span>
                  <strong className="text-gray-900 font-semibold">
                    {formData.hospital}
                  </strong>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/blood-requests"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
                >
                  <span>View All Requests</span>
                </Link>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Create Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Form Container */
            <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-xs">
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Blood Type & Units Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Blood Type */}
                  <div>
                    <label
                      htmlFor="blood-type"
                      className="block text-sm font-bold text-gray-900 mb-1.5"
                    >
                      Blood Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="blood-type"
                      name="bloodType"
                      value={formData.bloodType}
                      aria-invalid={!!errors.bloodType}
                      aria-describedby={errors.bloodType ? "bloodType-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, bloodType: e.target.value });
                        if (errors.bloodType) setErrors({ ...errors, bloodType: undefined });
                      }}
                      className={`block w-full rounded-xl border py-3 px-3.5 text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                        errors.bloodType
                          ? "border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-red-500/20"
                      }`}
                    >
                      <option value="">Select blood type</option>
                      {BLOOD_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.bloodType && (
                      <p id="bloodType-error" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.bloodType}
                      </p>
                    )}
                  </div>

                  {/* Units Needed */}
                  <div>
                    <label
                      htmlFor="units-needed"
                      className="block text-sm font-bold text-gray-900 mb-1.5"
                    >
                      Units Needed <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="units-needed"
                      name="units"
                      type="number"
                      min="1"
                      placeholder="2"
                      value={formData.units}
                      aria-invalid={!!errors.units}
                      aria-describedby={errors.units ? "units-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, units: e.target.value });
                        if (errors.units) setErrors({ ...errors, units: undefined });
                      }}
                      className={`block w-full rounded-xl border py-3 px-3.5 text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                        errors.units
                          ? "border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-red-500/20"
                      }`}
                    />
                    {errors.units && (
                      <p id="units-error" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.units}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Hospital & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Hospital */}
                  <div>
                    <label
                      htmlFor="hospital"
                      className="block text-sm font-bold text-gray-900 mb-1.5"
                    >
                      Hospital / Center <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="hospital"
                      name="hospital"
                      type="text"
                      placeholder="Enter hospital or blood center"
                      value={formData.hospital}
                      aria-invalid={!!errors.hospital}
                      aria-describedby={errors.hospital ? "hospital-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, hospital: e.target.value });
                        if (errors.hospital) setErrors({ ...errors, hospital: undefined });
                      }}
                      className={`block w-full rounded-xl border py-3 px-3.5 text-sm transition-colors placeholder:text-gray-400 focus:outline-hidden focus:ring-2 ${
                        errors.hospital
                          ? "border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-red-500/20"
                      }`}
                    />
                    {errors.hospital && (
                      <p id="hospital-error" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.hospital}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-bold text-gray-900 mb-1.5"
                    >
                      Location / Sub-City <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      aria-invalid={!!errors.location}
                      aria-describedby={errors.location ? "location-error" : undefined}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: undefined });
                      }}
                      className={`block w-full rounded-xl border py-3 px-3.5 text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                        errors.location
                          ? "border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-red-500/20"
                      }`}
                    >
                      <option value="">Select location</option>
                      {LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p id="location-error" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Urgency */}
                <div>
                  <label
                    htmlFor="urgency"
                    className="block text-sm font-bold text-gray-900 mb-1.5"
                  >
                    Urgency Level <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    aria-invalid={!!errors.urgency}
                    aria-describedby={errors.urgency ? "urgency-error" : undefined}
                    onChange={(e) => {
                      setFormData({ ...formData, urgency: e.target.value });
                      if (errors.urgency) setErrors({ ...errors, urgency: undefined });
                    }}
                    className={`block w-full rounded-xl border py-3 px-3.5 text-sm transition-colors focus:outline-hidden focus:ring-2 ${
                      errors.urgency
                        ? "border-red-400 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 bg-white text-gray-900 focus:border-red-500 focus:ring-red-500/20"
                    }`}
                  >
                    {URGENCIES.map((urg) => (
                      <option key={urg} value={urg}>
                        {urg}
                      </option>
                    ))}
                  </select>
                  {errors.urgency && (
                    <p id="urgency-error" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.urgency}
                    </p>
                  )}
                </div>

                {/* Row 4: Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold text-gray-900 mb-1.5"
                  >
                    Additional Information <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Provide any additional information about the blood request..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="block w-full rounded-xl border border-gray-200 bg-white py-3 px-3.5 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Please avoid submitting sensitive confidential patient data.
                  </p>
                </div>

                {/* Safety & Medical Notice */}
                <div className="rounded-2xl border border-gray-200/90 bg-gray-50/70 p-4">
                  <div className="flex items-start gap-2.5">
                    <svg
                      className="h-5 w-5 text-red-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                    <p className="text-xs leading-relaxed text-gray-600">
                      BloodLink Addis is a coordination platform. Donor eligibility, blood
                      compatibility, screening, and donation decisions are handled by
                      qualified healthcare professionals and blood centers.
                    </p>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
                  <Link
                    href="/blood-requests"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-400"
                  >
                    Cancel
                  </Link>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-red-600/30 transition hover:bg-red-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit Blood Request</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
