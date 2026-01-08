import { useState, useEffect } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StrategyCallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

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
      <div className={`relative bg-card border border-border rounded-2xl shadow-2xl w-full animate-scale-in ${showCalendly ? "max-w-3xl" : "max-w-md"}`}>
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>
        
        {showCalendly ? (
          <div className="p-2">
            <iframe
              src="https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316"
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a call"
              className="w-full rounded-xl"
            />
          </div>
        ) : (
          <div className="p-8">
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
            
            {/* CTAs */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 py-6 text-lg group"
                onClick={() => setShowCalendly(true)}
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="w-full py-6"
              >
                <Link to="/contact" onClick={handleDismiss}>
                  View All Contact Options
                </Link>
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              No obligation • Custom roadmap for your event
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyCallPopup;
