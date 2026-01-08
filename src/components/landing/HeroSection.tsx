import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Video, Mic, MessageSquare, Monitor, Presentation, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

// Avatar data for floating participants
const floatingAvatars = [
  { id: 1, top: "18%", left: "12%", delay: "0s", size: "w-10 h-10 md:w-14 md:h-14" },
  { id: 2, top: "25%", right: "18%", delay: "-1.5s", size: "w-8 h-8 md:w-12 md:h-12" },
  { id: 3, bottom: "35%", left: "8%", delay: "-2.5s", size: "w-12 h-12 md:w-16 md:h-16" },
  { id: 4, top: "40%", right: "10%", delay: "-3.5s", size: "w-9 h-9 md:w-12 md:h-12" },
  { id: 5, bottom: "28%", right: "22%", delay: "-4s", size: "w-10 h-10 md:w-14 md:h-14" },
  { id: 6, top: "55%", left: "18%", delay: "-1s", size: "w-8 h-8 md:w-10 md:h-10" },
];

// Avatar stack for social proof
const avatarStack = [
  { id: 1, gradient: "from-primary to-secondary" },
  { id: 2, gradient: "from-secondary to-accent" },
  { id: 3, gradient: "from-accent to-primary" },
  { id: 4, gradient: "from-primary to-accent" },
];

const HeroSection = () => {
  const eventsCount = useCounter(500, 2000, 500);
  const attendeesCount = useCounter(50, 2000, 700);
  const showRate = useCounter(95, 2000, 900);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.15)_0%,transparent_50%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating Participant Avatars */}
      {floatingAvatars.map((avatar) => (
        <div
          key={avatar.id}
          className={`absolute ${avatar.size} rounded-full animate-float bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-white/10 flex items-center justify-center`}
          style={{
            top: avatar.top,
            left: avatar.left,
            right: avatar.right,
            bottom: avatar.bottom,
            animationDelay: avatar.delay,
          }}
        >
          <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50" />
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </div>
      ))}
      
      {/* Virtual Event Floating Icons - Reduced and repositioned */}
      <div className="absolute top-16 left-[22%] text-primary/25 animate-float" style={{ animationDelay: "0s" }}>
        <Video className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="absolute bottom-48 left-[5%] text-accent/25 animate-float" style={{ animationDelay: "-2s" }}>
        <Mic className="w-5 h-5 md:w-7 md:h-7" />
      </div>
      <div className="absolute top-1/3 right-[5%] text-primary/20 animate-float" style={{ animationDelay: "-3.5s" }}>
        <Monitor className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <div className="absolute bottom-36 right-[8%] text-secondary/25 animate-float" style={{ animationDelay: "-4s" }}>
        <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      
      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="12%" y1="18%" x2="88%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "3s" }} />
        <line x1="8%" y1="35%" x2="90%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "-1s" }} />
        <line x1="18%" y1="55%" x2="82%" y2="28%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "-2s" }} />
        <line x1="22%" y1="72%" x2="78%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "4.5s", animationDelay: "-0.5s" }} />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated Particles */}
      <div className="absolute top-[15%] left-[30%] w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
      <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-secondary/60 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "-0.5s" }} />
      <div className="absolute bottom-[40%] left-[25%] w-1.5 h-1.5 bg-accent/60 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "-1s" }} />
      <div className="absolute bottom-[30%] right-[30%] w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDuration: "2.2s", animationDelay: "-1.5s" }} />
      <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-secondary/50 rounded-full animate-ping" style={{ animationDuration: "2.8s", animationDelay: "-2s" }} />
      
      <div className="container relative z-10 px-4 md:px-6 text-center">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Trusted by Leading Event Organizers</span>
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
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          We market premium events that attract only your ideal clients, generate high-quality leads, and make your brand the one everyone talks about.
        </p>
        
        {/* Social Proof Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          {/* Animated Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-foreground">4.9/5</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-border" />
          
          {/* Avatar Stack */}
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {avatarStack.map((avatar, index) => (
                <div
                  key={avatar.id}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatar.gradient} border-2 border-background flex items-center justify-center animate-scale-in`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s`, zIndex: avatarStack.length - index }}
                >
                  <Users className="w-4 h-4 text-white/80" />
                </div>
              ))}
              <div
                className="w-9 h-9 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-semibold text-muted-foreground animate-scale-in"
                style={{ animationDelay: "0.8s" }}
              >
                +500
              </div>
            </div>
            <span className="ml-3 text-sm text-muted-foreground">Event Organizers Trust Us</span>
          </div>
        </div>
        
        {/* CTA Button with Enhanced Glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-foreground">{eventsCount}+</span>
            </div>
            <span className="text-sm text-muted-foreground">Events Marketed</span>
          </div>
          
          <div className="w-px h-10 bg-border hidden md:block" />
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-foreground">{attendeesCount}K+</span>
            </div>
            <span className="text-sm text-muted-foreground">Attendees Reached</span>
          </div>
          
          <div className="w-px h-10 bg-border hidden md:block" />
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
              <span className="text-2xl md:text-3xl font-bold text-foreground">{showRate}%</span>
            </div>
            <span className="text-sm text-muted-foreground">Average Show Rate</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
