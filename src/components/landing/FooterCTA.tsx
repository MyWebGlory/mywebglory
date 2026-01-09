import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section className="py-24 relative overflow-hidden" ref={ref}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4">
              <Flame className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Dominate Your Next Event?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              We do everything. You just gotta ask. Let's architect a marketing system that delivers 
              real attendees—not just registrations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 px-8 py-6 text-lg animate-pulse-glow">
                <Link to="/contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Build My Empire
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              30-minute strategy session • No obligation • Custom roadmap for your event's triumph
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default FooterCTA;
