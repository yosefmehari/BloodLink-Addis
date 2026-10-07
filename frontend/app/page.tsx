import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencyRequest from "@/components/EmergencyRequest";
import HowItWorks from "@/components/HowItWorks";
import BloodTypes from "@/components/BloodTypes";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EmergencyRequest />
        <HowItWorks />
        <BloodTypes />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}
