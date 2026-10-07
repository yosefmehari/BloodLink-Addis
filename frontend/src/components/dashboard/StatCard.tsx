import React from "react";

export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  badge?: string;
  icon?: React.ReactNode;
}

export default function StatCard({
  label,
  value,
  subtext,
  badge,
  icon,
}: StatCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md hover:shadow-red-950/5">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {label}
          </span>
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
              {icon}
            </div>
          )}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 group-hover:text-red-700 transition-colors">
            {value}
          </span>
          {badge && (
            <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              {badge}
            </span>
          )}
        </div>
      </div>

      {subtext && (
        <p className="mt-3 text-xs text-gray-500 border-t border-gray-100 pt-3">
          {subtext}
        </p>
      )}
    </article>
  );
}
