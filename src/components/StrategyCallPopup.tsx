import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const StrategyCallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const hasTriggered = useRef(false);
  const lastScrollY = useRef(0);
  const CALENDLY_URL = "https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316";

  // Single persisted iframe – created once, moved between containers
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const preloadSlotRef = useRef<HTMLDivElement>(null);
  const popupSlotRef = useRef<HTMLDivElement>(null);

  // Create the iframe once on mount and park it in the hidden preload slot
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = CALENDLY_URL;
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '400');
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('title', 'Schedule a call');
    iframe.className = 'w-full rounded-xl min-h-[350px]';
    iframe.style.display = 'block';
    iframeRef.current = iframe;
    preloadSlotRef.current?.appendChild(iframe);
    return () => { iframe.remove(); };
  }, []);

  // Move the iframe into the popup slot when visible, back to preload when hidden
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    if (isVisible && popupSlotRef.current) {
      popupSlotRef.current.appendChild(iframe);
    } else if (!isVisible && preloadSlotRef.current) {
      preloadSlotRef.current.appendChild(iframe);
    }
  }, [isVisible]);

  const showPopup = () => {
    if (!hasTriggered.current && !isDismissed) {
      console.log("🚀 POPUP TRIGGERED!");
      hasTriggered.current = true;
      setIsVisible(true);
    }
  };
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    
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
  return <>
      {/* Hidden preload slot – iframe lives here until popup opens */}
      <div
        ref={preloadSlotRef}
        aria-hidden="true"
        style={{ position: 'fixed', left: -9999, top: -9999, width: 1, height: 1, overflow: 'hidden', pointerEvents: 'none', opacity: 0 }}
      />

      {/* Popup modal - only shown when triggered */}
      {isVisible && !isDismissed && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 py-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={handleDismiss} />
      
      {/* Popup */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in overflow-hidden">
        {/* Close button - sticky positioning */}
        <button onClick={handleDismiss} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-20 bg-card/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-muted">
          <X className="w-5 h-5" />
        </button>
        {/* Header */}
        <div className="p-4 pb-3 text-center border-b border-border shrink-0">
          <p className="text-primary font-medium mb-1 text-sm">⚡ Special Offer For You...</p>
          <h3 className="text-xl md:text-2xl font-bold mb-1">
            Your Competitors Are Already Booking Calls 🚀
          </h3>
          <p className="text-muted-foreground text-sm">While you're thinking about it, other brands are filling their events with clients.<span className="text-foreground font-medium"> Don't let them get ahead.</span>
          </p>
          <p className="text-xs text-primary mt-1">
            🎯 Free 30-min strategy call • 🔥 Limited spots this week
          </p>
        </div>
        {/* Calendly Embed slot – iframe is moved here from preload when popup opens */}
        <div className="p-2 flex-1 min-h-0 overflow-auto">
          <div ref={popupSlotRef} style={{ width: '100%' }} />
        </div>
        {/* Footer */}
        <div className="p-3 border-t border-border text-center shrink-0">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
            <Link to="/contact" onClick={handleDismiss}>
              View All Contact Options →
            </Link>
          </Button>
        </div>
      </div>
    </div>}
  </>;
};
export default StrategyCallPopup;