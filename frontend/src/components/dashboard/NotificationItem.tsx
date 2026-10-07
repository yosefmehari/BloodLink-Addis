import React from "react";
import Link from "next/link";
import { NotificationItemData } from "@/data/notifications";

export interface NotificationItemProps {
  notification: NotificationItemData;
  onToggleRead?: (id: string) => void;
}

export default function NotificationItem({
  notification,
  onToggleRead,
}: NotificationItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "alert":
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        );
      case "appointment":
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
        );
      case "status":
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
        notification.read
          ? "bg-white border-gray-200/80"
          : "bg-red-50/30 border-red-200 shadow-2xs"
      }`}
    >
      <div className="shrink-0">{getIcon()}</div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4
            className={`text-sm font-bold truncate ${
              notification.read ? "text-gray-900" : "text-red-950 font-extrabold"
            }`}
          >
            {notification.title}
          </h4>
          <span className="text-[11px] text-gray-400 shrink-0">
            {notification.timestamp}
          </span>
        </div>

        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {notification.message}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-gray-100/80">
          {notification.link ? (
            <Link
              href={notification.link}
              className="font-semibold text-red-600 hover:text-red-700 transition"
            >
              View details →
            </Link>
          ) : (
            <span className="text-gray-400">System Notification</span>
          )}

          {onToggleRead && (
            <button
              type="button"
              onClick={() => onToggleRead(notification.id)}
              className="text-gray-400 hover:text-gray-700 font-medium text-[11px]"
            >
              {notification.read ? "Mark unread" : "Mark as read"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
