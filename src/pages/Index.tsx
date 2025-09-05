import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PlatformAvailability from "@/components/PlatformAvailability";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <PlatformAvailability />
        <FeaturesShowcase />
        {/* <Team /> */}
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
