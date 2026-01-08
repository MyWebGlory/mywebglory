import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StrategyCallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const hasTriggered = useRef(false);
  const lastScrollY = useRef(0);

  const showPopup = () => {
    if (!hasTriggered.current) {
      hasTriggered.current = true;
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // STRATEGY 1: Fallback timer - show after 25 seconds
    const timer = setTimeout(() => {
      showPopup();
    }, 25000);

    // STRATEGY 2: Exit intent - mouse leaves viewport at top
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    // STRATEGY 3: Scroll up detection - user scrolling back up quickly
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If user has scrolled down at least 500px and then scrolls up significantly
      if (lastScrollY.current > 500 && currentScrollY < lastScrollY.current - 200) {
        showPopup();
      }
      lastScrollY.current = currentScrollY;
    };

    // STRATEGY 4: Back button / beforeunload hint
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // This won't show our popup but we can try
      showPopup();
    };

    // STRATEGY 5: Visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        showPopup();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={handleDismiss}
      />
      
      {/* Popup */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-3xl animate-scale-in overflow-hidden">
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header */}
        <div className="p-6 pb-4 text-center border-b border-border">
          <p className="text-primary font-medium mb-2">⚡ Wait! Before you go...</p>
          <h3 className="text-2xl font-bold mb-2">
            Your Competitors Are Already Booking Calls 🚀
          </h3>
          <p className="text-muted-foreground">
            While you're thinking about it, other coaches and consultants are filling their events with premium clients. 
            <span className="text-foreground font-medium"> Don't let them get ahead.</span>
          </p>
          <p className="text-sm text-primary mt-2">
            🎯 Free 30-min strategy call • 🔥 Limited spots this week
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="p-2">
          <iframe
            src="https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316"
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule a call"
            className="w-full rounded-xl"
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border text-center">
          <Button 
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
          >
            <Link to="/contact" onClick={handleDismiss}>
              View All Contact Options →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategyCallPopup;
