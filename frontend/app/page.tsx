import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-24 text-center sm:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            BloodLink Addis
          </h1>

          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            Connecting blood donors with people who need blood across Addis Ababa.
          </p>
        </section>
      </main>
    </div>
  );
}
