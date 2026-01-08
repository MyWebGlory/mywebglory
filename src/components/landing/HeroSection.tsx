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
  
  // Random viewer count for FOMO
  const [viewerCount, setViewerCount] = useState(() => Math.floor(Math.random() * 5) + 3); // Start between 3-7
  const [isIncreasing, setIsIncreasing] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newCount = Math.max(1, Math.min(12, prev + change)); // Keep between 1-12
        if (newCount > prev) {
          setIsIncreasing(true);
          setTimeout(() => setIsIncreasing(false), 2000);
        }
        return newCount;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);
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
      
      {/* Live Viewers FOMO Pill */}
      <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
        <div className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-500 ${
          isIncreasing 
            ? 'bg-primary/20 border-primary/50 shadow-primary/20 scale-105' 
            : 'bg-background/80 border-border/50'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isIncreasing ? 'bg-primary' : 'bg-green-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isIncreasing ? 'bg-primary' : 'bg-green-500'}`}></span>
          </span>
          <span className={`text-xs transition-colors duration-500 ${isIncreasing ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{viewerCount} viewing now</span>
        </div>
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