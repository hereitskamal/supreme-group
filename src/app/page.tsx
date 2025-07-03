import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}
