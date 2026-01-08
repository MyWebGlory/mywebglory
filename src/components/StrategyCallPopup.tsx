import { useState, useEffect } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/gabriel-ageron/mywebglory";

const StrategyCallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed in this session
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
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
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Icon */}
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-center mb-3">
          Ready to Fill Every Seat?
        </h3>
        <p className="text-muted-foreground text-center mb-6">
          Get a free 30-minute strategy call. We'll map out exactly how to attract your ideal clients to your next event.
        </p>
        
        {/* CTA */}
        <Button 
          asChild
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90 py-6 text-lg group"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          No obligation • Custom roadmap for your event
        </p>
      </div>
    </div>
  );
};

export default StrategyCallPopup;
