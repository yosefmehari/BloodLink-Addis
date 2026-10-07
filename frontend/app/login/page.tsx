"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoMessage, setDemoMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setDemoMessage("Please provide both email and password.");
      return;
    }

    setIsSubmitting(true);
    setDemoMessage(null);

    // Simulate demo login
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoMessage("Logged in successfully! Redirecting to donor dashboard...");
      setTimeout(() => {
        router.push("/donor");
      }, 700);
    }, 500);
  };

  const handleQuickLogin = (role: "donor" | "recipient" | "hospital" | "admin") => {
    setIsSubmitting(true);
    setDemoMessage(`Signing in as Demo ${role}...`);
    setTimeout(() => {
      router.push(`/${role}`);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 rounded-3xl border border-gray-200/90 bg-white p-8 sm:p-10 shadow-xs">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-3xl font-black text-red-600">BloodLink</span>
              <span className="text-2xl font-bold text-gray-900">Addis</span>
            </Link>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
              Welcome Back
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
              Sign in to manage requests, donations, and notifications.
            </p>
          </div>

          {/* Feedback message */}
          {demoMessage && (
            <div
              className={`rounded-xl p-3 text-xs font-semibold ${
                demoMessage.includes("success") || demoMessage.includes("Signing in")
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {demoMessage}
            </div>
          )}

          {/* Form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-3 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="login-password"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setDemoMessage("Demo notice: Password recovery is simulated for prototype.")
                  }
                  className="text-xs font-semibold text-red-600 hover:text-red-700"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-gray-50/40 py-3 px-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-xl bg-red-600 py-3 px-4 text-sm font-semibold text-white shadow-xs hover:bg-red-700 active:scale-[0.99] disabled:opacity-60 transition focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {isSubmitting ? "Signing In..." : "Login"}
            </button>
          </form>

          {/* Quick Demo Sign-in Shortcuts */}
          <div className="pt-4 border-t border-gray-100">
            <span className="block text-center text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
              Quick Demo Access
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickLogin("donor")}
                className="py-2 px-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 font-semibold text-gray-800 transition text-center"
              >
                Donor Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("recipient")}
                className="py-2 px-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 font-semibold text-gray-800 transition text-center"
              >
                Recipient Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("hospital")}
                className="py-2 px-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 font-semibold text-gray-800 transition text-center"
              >
                Hospital Demo
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("admin")}
                className="py-2 px-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 font-semibold text-gray-800 transition text-center"
              >
                Admin Demo
              </button>
            </div>
          </div>

          {/* Bottom link */}
          <div className="text-center text-xs text-gray-500 pt-2">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-bold text-red-600 hover:text-red-700">
              Create account
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
