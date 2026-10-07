"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-red-600">BloodLink</span>
          <span className="text-xl font-bold text-gray-800">Addis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/blood-requests" className="hover:text-red-600 transition">
            Blood Requests
          </Link>
          <Link href="/#how-it-works" className="hover:text-red-600 transition">
            How It Works
          </Link>
          <Link href="/#blood-types" className="hover:text-red-600 transition">
            Blood Types
          </Link>
          <Link href="/#emergency" className="hover:text-red-600 transition">
            Emergency
          </Link>
          <Link href="/donor" className="hover:text-red-600 transition">
            Donors
          </Link>
        </nav>

        {/* Desktop Auth CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-red-500"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer/Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
            <Link
              href="/blood-requests"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              Blood Requests
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              How It Works
            </Link>
            <Link
              href="/#blood-types"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              Blood Types
            </Link>
            <Link
              href="/#emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              Emergency
            </Link>
            <Link
              href="/donor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              Donor Portal
            </Link>
            <Link
              href="/hospital"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
            >
              Hospital Portal
            </Link>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-red-600 font-semibold text-white shadow-sm hover:bg-red-700 transition"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}