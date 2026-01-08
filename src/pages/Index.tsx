import { useParallax } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import PricingSection from "@/components/landing/PricingSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  useParallax();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
