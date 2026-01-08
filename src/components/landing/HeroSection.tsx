import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import avatarsSocialProof from "@/assets/avatars-social-proof.png";

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  return count;
};
const HeroSection = () => {
  const eventsCount = useCounter(150, 2000, 500);
  const attendeesCount = useCounter(50, 2000, 700);
  const showRate = useCounter(60, 2000, 900);
  
  // Random viewer count for FOMO with gradual changes
  const [viewerCount, setViewerCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Booking notification state
  const [showBookingNotif, setShowBookingNotif] = useState(false);
  
  // Play ting sound
  const playTingSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1100, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };
  
  // Show counter after 10s delay
  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setViewerCount(Math.floor(Math.random() * 6) + 3);
      setIsVisible(true);
    }, 10000);
    return () => clearTimeout(showTimeout);
  }, []);
  
  // Show booking notification: first at 30-60s, then 5min wait, then 30-60s again, repeat
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isFirstShow = true;
    
    const showNotification = () => {
      setShowBookingNotif(true);
      playTingSound();
      
      // Hide after 10s
      setTimeout(() => {
        setShowBookingNotif(false);
      }, 10000);
    };
    
    const scheduleNext = () => {
      if (isFirstShow) {
        // First show: random 30-60s
        const randomDelay = Math.floor(Math.random() * 30000) + 30000;
        timeoutId = setTimeout(() => {
          showNotification();
          isFirstShow = false;
          
          // After first show, wait 5 min then schedule random 30-60s
          timeoutId = setTimeout(() => {
            scheduleNext();
          }, 300000); // 5 minutes
        }, randomDelay);
      } else {
        // Subsequent shows: random 30-60s
        const randomDelay = Math.floor(Math.random() * 30000) + 30000;
        timeoutId = setTimeout(() => {
          showNotification();
          
          // Wait 5 min then schedule next
          timeoutId = setTimeout(() => {
            scheduleNext();
          }, 300000); // 5 minutes
        }, randomDelay);
      }
    };
    
    scheduleNext();
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  // Update counter every 30s with gradual changes
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setViewerCount(prev => {
        // Random change between -3 and +3
        const change = Math.floor(Math.random() * 7) - 3;
        const newCount = prev + change;
        
        // Keep between 1 and 12
        const clampedCount = Math.max(1, Math.min(12, newCount));
        
        // Track if increasing for animation
        setIsIncreasing(clampedCount > prev);
        
        return clampedCount;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [isVisible]);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.15)_0%,transparent_50%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
      animationDelay: "-3s"
    }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="12%" y1="18%" x2="88%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{
        animationDuration: "3s"
      }} />
        <line x1="8%" y1="55%" x2="90%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{
        animationDuration: "4s",
        animationDelay: "-1s"
      }} />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Virtual Event Elements - Distant from center */}
      {/* Floating video play button - top left */}
      <div className="absolute top-[12%] left-[8%] opacity-20 animate-float" style={{ animationDuration: "6s" }}>
        <div className="w-12 h-12 rounded-xl bg-primary/30 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary/60 border-b-[6px] border-b-transparent ml-1" />
        </div>
      </div>
      
      {/* Floating chat bubble - top right */}
      <div className="absolute top-[15%] right-[6%] opacity-15 animate-float" style={{ animationDuration: "7s", animationDelay: "-2s" }}>
        <div className="w-14 h-10 rounded-lg bg-secondary/30 backdrop-blur-sm border border-secondary/20 flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse" style={{ animationDuration: "1.5s" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse" style={{ animationDuration: "1.5s", animationDelay: "0.2s" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse" style={{ animationDuration: "1.5s", animationDelay: "0.4s" }} />
        </div>
      </div>
      
      {/* Floating screen share icon - bottom left */}
      <div className="absolute bottom-[18%] left-[5%] opacity-20 animate-float" style={{ animationDuration: "8s", animationDelay: "-3s" }}>
        <div className="w-16 h-12 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/15 flex items-center justify-center">
          <div className="w-8 h-5 rounded border border-accent/40 flex items-center justify-center">
            <div className="w-3 h-3 border-t-2 border-r-2 border-accent/50 rotate-[-45deg]" />
          </div>
        </div>
      </div>
      
      {/* Floating participant grid - bottom right */}
      <div className="absolute bottom-[22%] right-[7%] opacity-15 animate-float" style={{ animationDuration: "9s", animationDelay: "-1s" }}>
        <div className="grid grid-cols-2 gap-1 p-2 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/15">
          <div className="w-4 h-4 rounded bg-primary/30" />
          <div className="w-4 h-4 rounded bg-primary/40" />
          <div className="w-4 h-4 rounded bg-primary/35" />
          <div className="w-4 h-4 rounded bg-primary/25" />
        </div>
      </div>
      
      {/* Floating microphone - left side */}
      <div className="absolute top-[45%] left-[3%] opacity-15 animate-float" style={{ animationDuration: "5s", animationDelay: "-4s" }}>
        <div className="w-8 h-12 flex flex-col items-center">
          <div className="w-6 h-8 rounded-t-full bg-secondary/30 border border-secondary/20" />
          <div className="w-2 h-3 bg-secondary/25" />
          <div className="w-6 h-1 rounded-full bg-secondary/20" />
        </div>
      </div>
      
      {/* Floating calendar/event icon - right side */}
      <div className="absolute top-[50%] right-[4%] opacity-20 animate-float" style={{ animationDuration: "7s", animationDelay: "-5s" }}>
        <div className="w-10 h-12 rounded-lg bg-accent/25 backdrop-blur-sm border border-accent/20 flex flex-col">
          <div className="h-3 bg-accent/30 rounded-t-lg" />
          <div className="flex-1 p-1 grid grid-cols-3 gap-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-sm bg-accent/40" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Animated Particles - Reduced */}
      <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{
      animationDuration: "3s"
    }} />
      <div className="absolute bottom-[35%] right-[20%] w-1.5 h-1.5 bg-secondary/40 rounded-full animate-ping" style={{
      animationDuration: "4s",
      animationDelay: "-1.5s"
    }} />
      
      <div className="container relative z-10 px-4 md:px-6 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">#1 Event Marketing Agency for Premium Events</span>
        </div>
        
        {/* Main Headline with Glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 -z-10" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Fill Every Seat,
            <br />
            <span className="text-gradient">With the Right People.</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          We market premium events that attract only your ideal clients, generate high-quality leads, and make your brand the one everyone talks about.
        </p>
        
        {/* Social Proof Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 animate-fade-in" style={{
        animationDelay: "0.15s"
      }}>
          {/* Animated Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star, index) => <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-scale-in" style={{
            animationDelay: `${0.3 + index * 0.1}s`
          }} />)}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-border" />
          
          {/* Real Avatar Photos - Smaller */}
          <div className="flex items-center gap-3">
            <img src={avatarsSocialProof} alt="Happy event organizers" className="h-7 md:h-8 object-contain animate-scale-in" style={{
            animationDelay: "0.5s"
          }} />
            <span className="text-sm text-muted-foreground">150+ Event Organizers Trust Us</span>
          </div>
        </div>
        
        {/* CTA Button with Enhanced Glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-40 group-hover:opacity-70 transition duration-500" />
            <Button asChild size="lg" className="relative group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Link to="/contact">
                Apply for an Event Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Animated Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">{eventsCount}+</span>
            </div>
            <span className="text-xs text-muted-foreground/70">Events Marketed</span>
          </div>
          
          <div className="w-px h-8 bg-border/50 hidden md:block" />
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">{attendeesCount}K+</span>
            </div>
            <span className="text-xs text-muted-foreground/70">Attendees Reached</span>
          </div>
          
          <div className="w-px h-8 bg-border/50 hidden md:block" />
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-muted-foreground/70 mr-1" />
              <span className="text-2xl md:text-3xl font-medium text-muted-foreground">{showRate}%</span>
            </div>
            <span className="text-xs text-muted-foreground/70">Average Show Rate</span>
          </div>
        </div>
      </div>
      
      {/* FOMO Elements Container */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2">
        {/* Booking Notification */}
        {showBookingNotif && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md bg-background/90 border border-border/50 shadow-xl">
              <span className="text-xl">🎉</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Someone just booked a call</span>
                <span className="text-xs text-muted-foreground">A few seconds ago</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Live Viewers Pill */}
        {isVisible && (
          <div className="animate-fade-in">
            <div 
              className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-500 bg-background/80 border-border/50 ${
                isIncreasing ? 'shadow-green-500/30' : ''
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 ${
                  isIncreasing ? 'animate-pulse' : ''
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-green-500 ${
                  isIncreasing ? 'animate-pulse' : ''
                }`}></span>
              </span>
              <span className="text-xs text-muted-foreground">{viewerCount} viewing now</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default HeroSection;