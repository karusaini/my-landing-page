import BrandsSection from "@/components/BrandsSection";
import FutureSection from "@/components/FutureSection";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <BrandsSection />
      <FutureSection />
    </div>
  );
}
