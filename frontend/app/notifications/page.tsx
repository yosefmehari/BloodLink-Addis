"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationItem from "@/components/dashboard/NotificationItem";
import { DEMO_NOTIFICATIONS, NotificationItemData } from "@/data/notifications";

export default function NotificationsPage() {
  const [items, setItems] = useState<NotificationItemData[]>(DEMO_NOTIFICATIONS);
  const [filterRole, setFilterRole] = useState<string>("all");

  const toggleRead = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: !item.read } : item))
    );
  };

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const filteredItems = items.filter(
    (item) => filterRole === "all" || item.role === filterRole || item.role === "all"
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Notifications Center
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Stay informed on blood requests, appointments, and coordination updates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={markAllRead}
              className="text-xs font-semibold text-gray-600 hover:text-red-600 border border-gray-200 rounded-xl px-3.5 py-2 bg-white transition"
            >
              Mark all as read
            </button>
            <Link
              href="/donor"
              className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl px-3.5 py-2 hover:bg-red-100 transition"
            >
              Dashboard →
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {["all", "donor", "recipient", "hospital", "admin"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setFilterRole(r)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold capitalize transition-all ${
                filterRole === r
                  ? "bg-red-600 text-white shadow-xs"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {r === "all" ? "All Notifications" : `${r} Alerts`}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((notif) => (
              <NotificationItem
                key={notif.id}
                notification={notif}
                onToggleRead={toggleRead}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-sm text-gray-500">
              No notifications found for this category.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
