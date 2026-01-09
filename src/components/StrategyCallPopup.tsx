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
    if (!hasTriggered.current && !isDismissed) {
      console.log("🚀 POPUP TRIGGERED!");
      hasTriggered.current = true;
      setIsVisible(true);
    }
  };
  useEffect(() => {
    // TEMPORARY: Clear sessionStorage for testing - REMOVE THIS IN PRODUCTION
    sessionStorage.removeItem("popup-dismissed");
    console.log("📋 Popup component mounted, sessionStorage cleared for testing");

    // STRATEGY 1: Fallback timer - show after 2 minutes
    const timer = setTimeout(() => {
      console.log("⏰ Timer triggered!");
      showPopup();
    }, 120000);

    // STRATEGY 2: Exit intent - mouse leaves viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left at the top of the page
      if (e.clientY <= 5) {
        console.log("🖱️ Exit intent detected! clientY:", e.clientY);
        showPopup();
      }
    };

    // STRATEGY 3: Scroll up detection - user scrolling back up quickly
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY.current > 300 && currentScrollY < lastScrollY.current - 150) {
        console.log("📜 Scroll up detected!");
        showPopup();
      }
      lastScrollY.current = currentScrollY;
    };

    // STRATEGY 4: Visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        console.log("👁️ Tab switch detected!");
        showPopup();
      }
    };

    // Add event listeners
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isDismissed]);
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("popup-dismissed", "true");
  };
  if (isDismissed || !isVisible) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={handleDismiss} />
      
      {/* Popup */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-3xl animate-scale-in overflow-hidden">
        {/* Close button */}
        <button onClick={handleDismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
          <X className="w-5 h-5" />
        </button>
        
        {/* Header */}
        <div className="p-6 pb-4 text-center border-b border-border">
          <p className="text-primary font-medium mb-2">⚡ Special Offer For You...</p>
          <h3 className="text-2xl font-bold mb-2">
            Your Competitors Are Already Booking Calls 🚀
          </h3>
          <p className="text-muted-foreground">While you're thinking about it, other brands are filling their events with clients.<span className="text-foreground font-medium"> Don't let them get ahead.</span>
          </p>
          <p className="text-sm text-primary mt-2">
            🎯 Free 30-min strategy call • 🔥 Limited spots this week
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="p-2">
          <iframe src="https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316" width="100%" height="500" frameBorder="0" title="Schedule a call" className="w-full rounded-xl" />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border text-center">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
            <Link to="/contact" onClick={handleDismiss}>
              View All Contact Options →
            </Link>
          </Button>
        </div>
      </div>
    </div>;
};
export default StrategyCallPopup;