import { useParallax } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  useParallax();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
