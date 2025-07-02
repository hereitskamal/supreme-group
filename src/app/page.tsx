import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";

export default function HomePage() {

  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </main>
  );
}