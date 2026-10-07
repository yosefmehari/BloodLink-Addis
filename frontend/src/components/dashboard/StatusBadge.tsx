export interface StatusBadgeProps {
  status: string;
  variant?: "status" | "urgency";
}

export default function StatusBadge({ status, variant = "status" }: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  let styles = "bg-gray-100 text-gray-700 border-gray-200";
  let dotColor = "bg-gray-400";

  if (variant === "urgency") {
    if (normalized === "emergency") {
      styles = "bg-red-50 text-red-700 border-red-200";
      dotColor = "bg-red-600";
    } else if (normalized === "urgent") {
      styles = "bg-amber-50 text-amber-700 border-amber-200";
      dotColor = "bg-amber-500";
    } else {
      styles = "bg-blue-50 text-blue-700 border-blue-200";
      dotColor = "bg-blue-500";
    }
  } else {
    // Status variant
    if (normalized === "active" || normalized === "completed" || normalized === "available") {
      styles = "bg-emerald-50 text-emerald-700 border-emerald-200";
      dotColor = "bg-emerald-500";
    } else if (normalized === "pending" || normalized === "scheduled" || normalized === "busy") {
      styles = "bg-amber-50 text-amber-700 border-amber-200";
      dotColor = "bg-amber-500";
    } else if (normalized === "cancelled" || normalized === "suspended" || normalized === "unavailable") {
      styles = "bg-rose-50 text-rose-700 border-rose-200";
      dotColor = "bg-rose-500";
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${styles}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
      <span>{status}</span>
    </span>
  );
}
