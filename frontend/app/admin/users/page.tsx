"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { DEMO_USERS, User } from "@/data/users";

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filtered = DEMO_USERS.filter((u) => {
    const matchesSearch =
      search === "" ||
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.location.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    const matchesStatus = statusFilter === "all" || u.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <DashboardLayout
      role="admin"
      title="User Management"
      description="System directory of donors, recipient accounts, hospitals, and coordinators."
    >
      <div className="space-y-6">
        {/* Search & Filter Bar */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by name, email, or sub-city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3.5 text-xs sm:text-sm text-gray-900 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700 focus:border-red-500"
            >
              <option value="all">All Roles</option>
              <option value="donor">Donors</option>
              <option value="recipient">Recipients</option>
              <option value="hospital">Hospitals</option>
              <option value="admin">Admins</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50/50 py-2 px-3 text-xs text-gray-700 focus:border-red-500"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>

            <span className="text-xs text-gray-500 font-medium">
              Total: <strong>{filtered.length}</strong>
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5">User</th>
                  <th className="py-3.5 px-5">Role</th>
                  <th className="py-3.5 px-5">Sub-City</th>
                  <th className="py-3.5 px-5">Phone</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5">Registered</th>
                  <th className="py-3.5 px-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-3.5 px-5">
                      <div className="font-bold text-gray-900">{user.name}</div>
                      <div className="text-[11px] text-gray-400">{user.email}</div>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="capitalize font-semibold text-xs text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-md">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-5">{user.location}</td>
                    <td className="py-3.5 px-5 font-mono text-xs">{user.phone}</td>
                    <td className="py-3.5 px-5">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="py-3.5 px-5 text-gray-500 text-xs">{user.registeredDate}</td>
                    <td className="py-3.5 px-5">
                      <button
                        type="button"
                        onClick={() => setSelectedUser(user)}
                        className="text-xs font-semibold text-red-600 hover:text-red-700"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Modal Details */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-base font-bold text-gray-900">User Details ({selectedUser.id})</h3>
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-700 p-1"
                >
                  ✕
                </button>
              </div>
              <div className="text-xs space-y-2 text-gray-700">
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Role:</strong> <span className="capitalize font-bold">{selectedUser.role}</span></p>
                <p><strong>Location:</strong> {selectedUser.location} Sub-City</p>
                <p><strong>Status:</strong> {selectedUser.status}</p>
                {selectedUser.bloodType && <p><strong>Blood Group:</strong> {selectedUser.bloodType}</p>}
                {selectedUser.availability && <p><strong>Availability:</strong> {selectedUser.availability}</p>}
                {selectedUser.hospitalAddress && <p><strong>Address:</strong> {selectedUser.hospitalAddress}</p>}
              </div>
              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="rounded-xl bg-gray-100 hover:bg-gray-200 px-4 py-2 text-xs font-bold text-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
