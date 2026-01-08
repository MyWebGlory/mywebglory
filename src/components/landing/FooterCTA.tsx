import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const CALENDLY_URL = "https://calendly.com/gabriel-ageron/mywebglory";
const EMAIL = "gabriel@mywebglory.com";

const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Dominate Your Next Event?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            We do everything. You just gotta ask. Let's architect a marketing system that delivers 
            real attendees—not just registrations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 px-8 py-6 text-lg animate-pulse-glow">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Build My Empire
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-colors">
              {EMAIL}
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            30-minute strategy session • No obligation • Custom roadmap for your event's triumph
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 border-t border-border pt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logoFull} alt="MyWebGlory" className="h-8" />
            
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#process" className="hover:text-foreground transition-colors">Process</a>
              <a href="#results" className="hover:text-foreground transition-colors">Results</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
            
            <div className="text-sm text-muted-foreground">
              © 2025 MyWebGlory. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
