import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}
