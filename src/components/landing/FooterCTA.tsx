import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";

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
      <footer className="mt-24 border-t border-border pt-12 pb-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <img src={logoFull} alt="MyWebGlory" className="h-8 mb-4" />
              <p className="text-sm text-muted-foreground">
                Event marketing that delivers real attendees, not just registrations.
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/event-marketing" className="hover:text-foreground transition-colors">Event Marketing</Link>
                <Link to="/ads-acquisition" className="hover:text-foreground transition-colors">Ads & Acquisition</Link>
                <Link to="/offers" className="hover:text-foreground transition-colors">Offers</Link>
              </nav>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
                <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
                <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
                <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
                <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy & Legal</Link>
              </nav>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2026 MyWebGlory. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
