import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatarsSocialProof from "@/assets/avatars-social-proof.png";
import NetworkBackground from "./NetworkBackground";

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
  const eventsCount = useCounter(50, 2000, 1500);
  const attendeesCount = useCounter(40, 2000, 1700);
  const showRate = useCounter(60, 2000, 1900);

  // Booking notification state
  const [showBookingNotif, setShowBookingNotif] = useState(false);

  // Play ting sound
  const playTingSound = () => {
    if (typeof window === 'undefined') return; // SSR guard
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

  // Show booking notification: first at 30-60s, then 5min wait, then 30-60s again, repeat
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR guard
    
    let timeoutId: number;
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

  return (
    <section className="relative overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.2)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.15)_0%,transparent_50%)]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl gpu-accelerated"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl gpu-accelerated"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl gpu-accelerated"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transform: 'translateZ(0)' }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── ABOVE-FOLD PANEL: exactly viewport height, content nudged slightly below center ── */}
      <div className="relative z-10 h-screen min-h-[640px] flex flex-col items-center justify-center pt-14 sm:pt-16 overflow-hidden">
        {/* Interconnected System Network — scoped to this panel so viewBox maps 1:1 to viewport */}
        <div className="absolute inset-0 opacity-55 pointer-events-none">
          <NetworkBackground />
        </div>
      <div className="container relative z-10 px-4 sm:px-6 text-center">
        {/* Live Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">#1 Event Marketing Agency for Premium Events</span>
        </motion.div>
        
        {/* Main Headline with Glow */}
        <div className="relative">
          <motion.div 
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Fill Every Seat,
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With the Right People.
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[660px] mx-auto mb-6 sm:mb-8 px-2 text-center leading-snug"
          style={{ wordBreak: 'break-word' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We build complete virtual event marketing systems that attract only your ideal clients and make your brand the talk of your industry.
        </motion.p>
        
        {/* Social Proof Bar */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Animated Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
            <span className="ml-2 text-xs sm:text-sm text-muted-foreground">4.9/5</span>
          </div>
          
          {/* Divider - hidden on mobile */}
          <div className="hidden md:block w-px h-5 bg-border" />
          
          {/* Real Avatar Photos */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <img src={avatarsSocialProof} alt="Happy event organizers" className="h-6 sm:h-7 md:h-8 object-contain" />
            <span className="text-xs sm:text-sm text-muted-foreground">40+ Event Organizers Trust Us</span>
          </motion.div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
        >
          {/* Event Marketing Button (Left) */}
          <Button asChild size="lg" variant="outline" className="group border-primary/50 hover:bg-primary/10 px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
            <Link to="/event-marketing">
              Why Market My Event?
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* Main CTA with Glow */}
          <div className="relative group w-full sm:w-auto">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur opacity-40"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Button asChild size="lg" className="relative group bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
              <Link to="/contact">
                I Book a Free Strategy Call
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Animated Stats */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.div 
            className="flex flex-col items-center min-w-[80px]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">{eventsCount}+</span>
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground/70">Events Marketed</span>
          </motion.div>
          
          <div className="w-px h-6 sm:h-8 bg-border/50" />
          
          <motion.div 
            className="flex flex-col items-center min-w-[80px]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">{attendeesCount}K+</span>
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground/70">Attendees Reached</span>
          </motion.div>
          
          <div className="w-px h-6 sm:h-8 bg-border/50" />
          
          <motion.div 
            className="flex flex-col items-center min-w-[80px]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/70 mr-1" />
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">{showRate}%</span>
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground/70">Average Show Rate</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator — inline, just below stats */}
        <motion.div
          className="flex justify-center mt-5 sm:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.5 },
            y: { delay: 2, duration: 1.5, repeat: Infinity }
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-muted-foreground/50 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

      </div>
      </div>{/* end above-fold panel */}

      {/* ── BELOW-FOLD PANEL: logos + scarcity badge ── */}
      <div className="relative z-10 py-14 sm:py-20">
        <div className="container px-4 sm:px-6">

          {/* Client Logo Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full pb-2 sm:pb-4"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground/50 text-center mb-5 font-medium">
              Brands that trust us to fill their events
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
              <div className="flex items-center" style={{ animation: 'marquee 60s linear infinite', width: 'max-content' }}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 shrink-0">
                    <img src="/images/client-logos/kornit-digital.png" alt="Kornit Digital" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" />
                    <img src="/images/client-logos/konnections.png" alt="Kornit Konnections" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" />
                    <img src="/images/client-logos/rxvp-logo.png" alt="RXVP" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" />
                    <img src="/images/client-logos/bill-and-melinda-gates-foundation.png" alt="Bill & Melinda Gates Foundation" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" />
                    <img src="/images/client-logos/cbhn-white.png" alt="CBHN" className="h-6 sm:h-8 object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale-[0.4] hover:grayscale-0 brightness-110" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-6 sm:mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              </motion.div>
              <span className="text-xs sm:text-sm font-medium">
                Limited to <span className="text-primary font-bold">4 clients</span> per month
              </span>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* ...existing code... */}
      
    </section>
  );
};

export default HeroSection;
