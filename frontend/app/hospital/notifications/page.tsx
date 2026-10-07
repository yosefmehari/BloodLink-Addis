"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import NotificationItem from "@/components/dashboard/NotificationItem";
import { DEMO_NOTIFICATIONS, NotificationItemData } from "@/data/notifications";

export default function HospitalNotificationsPage() {
  const [items, setItems] = useState<NotificationItemData[]>(
    DEMO_NOTIFICATIONS.filter((n) => n.role === "hospital" || n.role === "all")
  );

  const toggleRead = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: !item.read } : item))
    );
  };

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  return (
    <DashboardLayout
      role="hospital"
      title="Hospital Notifications"
      description="Incoming emergency requisitions, donor appointment confirmations, and lab status alerts."
      actions={
        <button
          type="button"
          onClick={markAllRead}
          className="text-xs font-semibold text-gray-700 hover:text-red-600 border border-gray-200 bg-white rounded-xl px-3 py-1.5 transition"
        >
          Mark all as read
        </button>
      }
    >
      <div className="space-y-3 max-w-4xl">
        {items.map((notif) => (
          <NotificationItem
            key={notif.id}
            notification={notif}
            onToggleRead={toggleRead}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
