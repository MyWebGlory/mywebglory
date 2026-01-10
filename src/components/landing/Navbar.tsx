import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "What's Event Marketing?", href: "/event-marketing" },
    { label: "How We Work", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
  ];

  const allPages = [
    { label: "Event Marketing", href: "/event-marketing" },
    { label: "How We Work", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy & Legal", href: "/privacy" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Links to home */}
          <Link to="/" className="flex items-center">
            <img src={logoIcon} alt="MyWebGlory" className="h-10 md:hidden" />
            <img src={logoFull} alt="MyWebGlory" className="h-8 hidden md:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Book a Call
              </Link>
            </Button>
            
            {/* More Menu (Burger) */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="More pages"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl py-2 animate-fade-in z-50">
                  <div className="px-3 py-2 border-b border-border mb-1">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">All Pages</span>
                  </div>
                  {allPages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsMoreMenuOpen(false)}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="container px-4 py-6 flex flex-col gap-2">
              <div className="pb-2 mb-2 border-b border-border">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigate</span>
              </div>
              {allPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {page.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
