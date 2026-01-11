import { useParallax } from "@/hooks/useScrollAnimation";
import SEO, { localBusinessSchema } from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhyEventsSection from "@/components/landing/WhyEventsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import PricingSection from "@/components/landing/PricingSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import BlogBanner from "@/components/landing/BlogBanner";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useParallax();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="MyWebGlory | Event Marketing Agency - Fill Events & Generate Revenue"
        description="Transform your events into revenue machines. MyWebGlory delivers end-to-end event marketing with proven systems for acquisition, show-up rates, and pipeline generation. Limited to 4 clients/month."
        canonicalUrl="/"
        structuredData={localBusinessSchema}
      />
      <Navbar />
      <HeroSection />
      <WhyEventsSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogBanner />
      <Footer />
    </div>
  );
};

export default Index;
