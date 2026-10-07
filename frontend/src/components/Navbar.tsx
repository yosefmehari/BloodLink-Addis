import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-red-600">BloodLink</span>
          <span className="text-xl font-bold text-gray-800">Addis</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="#how-it-works" className="hover:text-red-600 transition">
            How It Works
          </Link>
          <Link href="#blood-types" className="hover:text-red-600 transition">
            Blood Types
          </Link>
          <Link href="#emergency" className="hover:text-red-600 transition">
            Emergency
          </Link>
          <Link href="/donor" className="hover:text-red-600 transition">
            Donors
          </Link>
        </nav>
        <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}