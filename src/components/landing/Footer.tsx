import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const EMAIL = "gabriel@mywebglory.com";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-12 pb-8 bg-background relative z-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:flex-1">
            <img src={logoFull} alt="MyWebGlory" className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground">
              Event marketing that delivers real attendees, not just registrations.
            </p>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-colors text-sm">
                {EMAIL}
              </a>
            </div>
          </div>
          
          {/* All Links - Grid Layout */}
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3 text-sm text-muted-foreground md:pt-2">
            <Link to="/event-marketing" className="hover:text-foreground transition-colors">Event Marketing</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy & Legal</Link>
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">How We Work</Link>
            <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyWebGlory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
