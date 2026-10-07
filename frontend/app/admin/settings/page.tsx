"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function AdminSettingsPage() {
  const [platformName, setPlatformName] = useState("BloodLink Addis");
  const [supportEmail, setSupportEmail] = useState("support@bloodlink-addis.et");
  const [emergencyHotline, setEmergencyHotline] = useState("+251 11 600 0000");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [autoMatchingNotice, setAutoMatchingNotice] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <DashboardLayout
      role="admin"
      title="System & Platform Settings"
      description="Configure city network parameters, notification dispatch preferences, and administration profiles."
    >
      <div className="max-w-4xl space-y-8">
        {saved && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Settings saved successfully in demo mode.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          {/* 1. General Settings */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-gray-900 border-b pb-3">
              General Platform Settings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Platform Name
                </label>
                <input
                  type="text"
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Official Support Email
                </label>
                <input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Emergency Dispatch Telephone Hotline
                </label>
                <input
                  type="text"
                  value={emergencyHotline}
                  onChange={(e) => setEmergencyHotline(e.target.value)}
                  className="block w-full rounded-xl border border-gray-200 py-2.5 px-3.5 text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>
          </div>

          {/* 2. Notification Preferences */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-gray-900 border-b pb-3">
              Notification & Emergency Broadcast Preferences
            </h3>

            <div className="space-y-4 text-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500"
                />
                <div>
                  <strong className="text-gray-900 block font-bold">Email Notifications</strong>
                  <span className="text-xs text-gray-500">Send urgent blood request notices to subscribed healthcare partners.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={smsAlerts}
                  onChange={(e) => setSmsAlerts(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500"
                />
                <div>
                  <strong className="text-gray-900 block font-bold">SMS Emergency Alerts</strong>
                  <span className="text-xs text-gray-500">Trigger immediate SMS broadcast to donors in the same sub-city during triage code red.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoMatchingNotice}
                  onChange={(e) => setAutoMatchingNotice(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-red-600 focus:ring-red-500"
                />
                <div>
                  <strong className="text-gray-900 block font-bold">Community Coordination Disclaimers</strong>
                  <span className="text-xs text-gray-500">Require all requesters to acknowledge hospital screening protocols before publishing.</span>
                </div>
              </label>
            </div>
          </div>

          {/* 3. System Information */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-gray-900 border-b pb-3">
              System & Environment Information
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-400 block font-bold">Runtime</span>
                <strong className="text-gray-900 text-sm">Next.js 16 (App Router)</strong>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-400 block font-bold">Frontend Mode</span>
                <strong className="text-gray-900 text-sm">Prototype / Demo</strong>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-400 block font-bold">Target Region</span>
                <strong className="text-gray-900 text-sm">Addis Ababa, ET</strong>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-400 block font-bold">Status</span>
                <strong className="text-emerald-700 text-sm">Operational</strong>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-xs hover:bg-red-700 transition"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
