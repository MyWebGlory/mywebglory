import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Video, Mic, MessageSquare, Monitor, Presentation } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Virtual Event Floating Icons */}
      <div className="absolute top-20 left-[15%] text-primary/30 animate-float" style={{ animationDelay: "0s" }}>
        <Video className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute top-32 right-[20%] text-secondary/40 animate-float" style={{ animationDelay: "-1.5s" }}>
        <Users className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="absolute bottom-40 left-[10%] text-accent/30 animate-float" style={{ animationDelay: "-2s" }}>
        <Mic className="w-6 h-6 md:w-10 md:h-10" />
      </div>
      <div className="absolute top-1/3 right-[8%] text-primary/20 animate-float" style={{ animationDelay: "-3.5s" }}>
        <Monitor className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <div className="absolute bottom-32 right-[15%] text-secondary/30 animate-float" style={{ animationDelay: "-4s" }}>
        <MessageSquare className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute top-1/2 left-[5%] text-accent/25 animate-float" style={{ animationDelay: "-2.5s" }}>
        <Presentation className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      
      {/* Connection Lines Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="15%" y1="15%" x2="80%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "3s" }} />
        <line x1="10%" y1="60%" x2="85%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "-1s" }} />
        <line x1="20%" y1="80%" x2="90%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "-2s" }} />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Participant Dots Animation */}
      <div className="absolute top-[20%] left-[25%] w-3 h-3 bg-primary/50 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
      <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-secondary/50 rounded-full animate-ping" style={{ animationDuration: "2.5s", animationDelay: "-0.5s" }} />
      <div className="absolute bottom-[35%] left-[20%] w-2 h-2 bg-accent/50 rounded-full animate-ping" style={{ animationDuration: "3s", animationDelay: "-1s" }} />
      <div className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: "2.2s", animationDelay: "-1.5s" }} />
      
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
          Fill Every Seat,
          <br />
          <span className="text-gradient">With the Right People.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          We build premium events that attract only your ideal clients, generate high-quality leads, and make your brand the one everyone talks about.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-pulse-glow">
            Apply for an Event Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
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
