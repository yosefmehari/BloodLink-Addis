import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  REQUESTS_BY_BLOOD_TYPE,
  REQUESTS_BY_URGENCY,
  DONATIONS_BY_MONTH,
  DONORS_BY_BLOOD_TYPE,
  REQUESTS_BY_LOCATION,
} from "@/data/reports";

export default function AdminReportsPage() {
  return (
    <DashboardLayout
      role="admin"
      title="System Analytics & Reports"
      description="Aggregated platform trends across blood groups, sub-city demographics, and fulfillment metrics."
    >
      <div className="space-y-8">
        {/* Banner */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span>
              <strong>Demonstration Analytics:</strong> Visual representations below are generated from sample pilot datasets.
            </span>
          </div>
          <span className="font-bold text-amber-700">Addis Ababa Metropolitan Network</span>
        </div>

        {/* Row 1: Requests by Blood Type & Requests by Urgency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requests by Blood Type */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Requests by Blood Type</h3>
                <p className="text-xs text-gray-500">Distribution of patient unit needs</p>
              </div>
              <span className="text-xs font-bold text-red-600">Total: 150 units</span>
            </div>

            <div className="space-y-3">
              {REQUESTS_BY_BLOOD_TYPE.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-800">{item.label}</span>
                    <span className="text-gray-500">
                      {item.count} requests ({item.percentage}%)
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-600 transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requests by Urgency */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Requests by Urgency Level</h3>
                <p className="text-xs text-gray-500">Triage severity breakdown</p>
              </div>
              <span className="text-xs font-bold text-gray-700">100% Breakdown</span>
            </div>

            <div className="space-y-4 pt-2">
              {REQUESTS_BY_URGENCY.map((item) => (
                <div key={item.label} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/60 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-gray-900">{item.label}</span>
                    <span className="text-gray-600">{item.count} cases ({item.percentage}%)</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color || "bg-red-600"}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Donations by Month & Donors by Blood Group */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donations Growth by Month */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Completed Donations by Month</h3>
                <p className="text-xs text-gray-500">Monthly hospital collection volume</p>
              </div>
              <span className="text-xs font-bold text-emerald-700">Trending Upward</span>
            </div>

            <div className="grid grid-cols-6 gap-2 items-end h-44 pt-6 pb-2">
              {DONATIONS_BY_MONTH.map((item) => {
                const heightPercent = Math.round((item.count / 80) * 100);
                return (
                  <div key={item.label} className="flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[11px] font-bold text-gray-700">{item.count}</span>
                    <div
                      className="w-full rounded-t-lg bg-red-600/90 hover:bg-red-700 transition"
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="text-[10px] text-gray-400 font-medium truncate w-full text-center">
                      {item.label.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donors by Blood Type */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900">Donor Pool by Blood Group</h3>
                <p className="text-xs text-gray-500">Registry breakdown (1,195 verified donors)</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {DONORS_BY_BLOOD_TYPE.map((item) => (
                <div key={item.label} className="p-3 rounded-2xl border border-gray-100 bg-gray-50/70 text-center">
                  <span className="text-lg font-black text-red-600 block">{item.label}</span>
                  <strong className="text-xs text-gray-900 block mt-1">{item.count} Donors</strong>
                  <span className="text-[10px] text-gray-400">{item.percentage}% of pool</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Sub-City Location Distribution */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="text-base font-bold text-gray-900">Request Distribution by Addis Sub-City</h3>
              <p className="text-xs text-gray-500">Geographic concentration of blood requests</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {REQUESTS_BY_LOCATION.map((loc) => (
              <div key={loc.label} className="p-3.5 rounded-2xl border border-gray-100 bg-gray-50 text-center">
                <span className="text-xs font-bold text-gray-500 uppercase block">{loc.label}</span>
                <span className="text-xl font-black text-gray-900 block mt-1">{loc.count}</span>
                <span className="text-[10px] text-gray-400">{loc.percentage}% of total</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
