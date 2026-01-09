import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import { 
  Zap, Users, TrendingUp, Clock, Shield, Target, 
  AlertTriangle, X, Check, ArrowRight, Building2, 
  GraduationCap, Briefcase, Home, DollarSign, Heart,
  Scale, Database, Mail, Phone, Video, BarChart3,
  Calendar, Bell, UserCheck, Repeat, Crown, Rocket,
  ChevronDown, Sparkles, Globe, MessageSquare
} from "lucide-react";

// ============================================
// SECTION 1: HERO - THE TUNNEL ENTRANCE
// ============================================
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const tunnelScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const tunnelOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const title = "WHAT IS EVENT MARKETING?";
  
  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Tunnel Grid Effect */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: tunnelScale, opacity: tunnelOpacity }}
        >
          {/* Concentric tunnel rings */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-primary/20 rounded-lg"
              style={{
                width: `${(i + 1) * 12}%`,
                height: `${(i + 1) * 12}%`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Glowing center */}
          <motion.div 
            className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/40 via-primary/10 to-transparent blur-2xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Main Title */}
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {title.split("").map((letter, i) => (
              <motion.span
                key={i}
                className={`text-4xl md:text-6xl lg:text-8xl font-black ${letter === " " ? "w-4 md:w-8" : ""}`}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Scroll to enter the journey
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-primary animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />
      </div>
    </div>
  );
};

// ============================================
// SECTION 2: THE REALITY CHECK - STICKY STRIKE-THROUGH
// ============================================
const RealityCheckSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const myths = [
    "Event marketing is not hosting a webinar.",
    "It's not filling a Zoom room.",
    "And it's definitely not \"brand awareness\"."
  ];

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Myths with strike-through */}
          <div className="space-y-8 mb-16">
            {myths.map((myth, i) => {
              const start = i * 0.2;
              const end = start + 0.15;
              const strikeProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
              const opacity = useTransform(scrollYProgress, [end, end + 0.1], [1, 0.3]);
              
              return (
                <motion.div key={i} className="relative" style={{ opacity }}>
                  <p className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                    {myth}
                  </p>
                  <motion.div 
                    className="absolute left-0 top-1/2 h-1 bg-destructive"
                    style={{ 
                      scaleX: strikeProgress,
                      width: "100%",
                      transformOrigin: "left"
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* The Truth */}
          <motion.div
            className="space-y-6"
            style={{
              opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
              y: useTransform(scrollYProgress, [0.6, 0.8], [50, 0])
            }}
          >
            <Sparkles className="w-12 h-12 mx-auto text-primary" />
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Event marketing is the <span className="text-primary">fastest way</span> to turn 
              <span className="text-gradient"> attention into trust</span>, trust into 
              <span className="text-gradient"> conversations</span>, and conversations into 
              <span className="text-primary"> revenue</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SECTION 3: THE MARKETPLACE - 3D CARD STACK
// ============================================
const MarketplaceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { icon: Users, text: "Your ideal buyers gather", color: "from-blue-500 to-cyan-500" },
    { icon: Crown, text: "Your authority compounds", color: "from-primary to-orange-500" },
    { icon: Rocket, text: "Your pipeline accelerates", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold mb-4">WHEN DONE PROPERLY</p>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            An event becomes a <span className="text-gradient">marketplace</span>
          </h2>
        </motion.div>

        {/* 3D Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 perspective-1000">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ 
                opacity: 0, 
                rotateY: i === 0 ? -45 : i === 2 ? 45 : 0,
                rotateX: 15,
                x: i === 0 ? -100 : i === 2 ? 100 : 0,
                y: 100,
                scale: 0.8
              }}
              animate={isInView ? { 
                opacity: 1, 
                rotateY: 0, 
                rotateX: 0,
                x: 0,
                y: 0,
                scale: 1
              } : {}}
              transition={{ 
                duration: 1,
                delay: i * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl`}>
                <div className="absolute inset-0 rounded-2xl bg-card/90 m-[2px]" />
                <div className="relative z-10 text-center">
                  <card.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p className="text-xl md:text-2xl font-bold">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-xl md:text-2xl text-muted-foreground mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          This is why the <span className="text-foreground font-semibold">most profitable companies on the planet</span> rely on events — online or offline — to grow.
        </motion.p>
      </div>
    </section>
  );
};

// ============================================
// SECTION 4: WHY EVENTS ARE POWERFUL - HORIZONTAL REVEAL
// ============================================
const PowerSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const powers = [
    { icon: Clock, title: "They compress time", desc: "Months of content, emails, and ads condensed into hours" },
    { icon: Shield, title: "They create trust at scale", desc: "People see you live. No filters. No edits." },
    { icon: Zap, title: "They trigger urgency and FOMO", desc: "\"If I don't show up, I miss it.\"" },
    { icon: Database, title: "They generate first-party data", desc: "Emails, phones, intent, behavior, questions" },
    { icon: Repeat, title: "They multiply content", desc: "One event becomes weeks of clips, posts, ads, retargeting" }
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-5xl font-black text-center mb-16"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
            }}
          >
            Events do something <span className="text-primary">no other channel can</span>
          </motion.h2>

          <div className="relative h-[300px] flex items-center justify-center">
            {powers.map((power, i) => {
              const start = 0.1 + i * 0.15;
              const peak = start + 0.075;
              const end = start + 0.15;
              
              const scale = useTransform(scrollYProgress, 
                [start, peak, end], 
                [0.5, 1, 0.5]
              );
              const opacity = useTransform(scrollYProgress, 
                [start, peak, end], 
                [0, 1, 0]
              );
              const x = useTransform(scrollYProgress, 
                [start, peak, end], 
                [200, 0, -200]
              );

              return (
                <motion.div
                  key={i}
                  className="absolute w-full max-w-2xl mx-auto text-center"
                  style={{ scale, opacity, x }}
                >
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl">
                    <power.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{power.title}</h3>
                    <p className="text-lg text-muted-foreground">→ {power.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// SECTION 5: THE RESULTS CASCADE
// ============================================
const ResultsCascadeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { icon: Target, text: "Fill your pipeline" },
    { icon: Clock, text: "Shorten sales cycles" },
    { icon: TrendingUp, text: "Reduce future acquisition costs" },
    { icon: Crown, text: "Position you as the reference in your market" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            A single well-executed event can:
          </h2>
        </motion.div>

        {/* Cascading results */}
        <div className="max-w-3xl mx-auto space-y-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: -100, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <div className="flex items-center gap-6 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <result.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-xl md:text-2xl font-semibold">{result.text}</p>
                <Check className="w-6 h-6 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 6: WHO THIS IS FOR - REVEAL CARDS
// ============================================
const WhoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    { icon: DollarSign, text: "Sell high-ticket offers" },
    { icon: Shield, text: "Need trust before purchase" },
    { icon: UserCheck, text: "Want qualified leads, not volume" },
    { icon: Crown, text: "Care about authority and long-term leverage" }
  ];

  const industries = [
    { icon: Globe, name: "SaaS & Tech" },
    { icon: Briefcase, name: "Agencies" },
    { icon: GraduationCap, name: "Education & Coaching" },
    { icon: Building2, name: "B2B Products" },
    { icon: Home, name: "Real Estate" },
    { icon: DollarSign, name: "Finance" },
    { icon: Heart, name: "Healthcare" },
    { icon: Scale, name: "Professional Services" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold mb-4">WHO IS THIS FOR?</p>
          <h2 className="text-3xl md:text-5xl font-black">
            Event marketing works best for businesses that:
          </h2>
        </motion.div>

        {/* Criteria cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries grid */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl text-muted-foreground mb-8">Typical industries:</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.05 }}
              className="p-4 bg-card/50 border border-border rounded-lg text-center hover:bg-card hover:border-primary/50 transition-all cursor-default"
            >
              <industry.icon className="w-8 h-8 mx-auto mb-2 text-primary/80" />
              <p className="text-sm font-medium">{industry.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            <span className="text-muted-foreground">Any business where decisions are not impulsive.</span>
            <br /><br />
            If your offer requires <span className="text-primary font-semibold">explanation</span>, <span className="text-primary font-semibold">proof</span>, or <span className="text-primary font-semibold">credibility</span> —
            <br />
            <span className="text-foreground font-bold">event marketing outperforms everything else.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 7: THE SYSTEM - CONNECTED NODES
// ============================================
const SystemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    { icon: Target, label: "Deep ICP understanding" },
    { icon: Zap, label: "Clear event angle" },
    { icon: TrendingUp, label: "Strategic acquisition" },
    { icon: ArrowRight, label: "Conversion-focused paths" },
    { icon: Database, label: "CRM & lead tracking" },
    { icon: Bell, label: "Reminder systems" },
    { icon: MessageSquare, label: "Post-event follow-up" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold mb-4">THE FULL PICTURE</p>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Real event marketing is not one action.<br />
            <span className="text-gradient">It's a system.</span>
          </h2>
        </motion.div>

        {/* Connected nodes */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {nodes.map((_, i) => {
              if (i === nodes.length - 1) return null;
              return (
                <motion.line
                  key={i}
                  x1={`${((i % 4) + 0.5) * 25}%`}
                  y1={`${Math.floor(i / 4) * 50 + 25}%`}
                  x2={`${(((i + 1) % 4) + 0.5) * 25}%`}
                  y2={`${Math.floor((i + 1) / 4) * 50 + 25}%`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                />
              );
            })}
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                className={`${i === nodes.length - 1 ? "md:col-start-2 md:col-span-2" : ""}`}
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: [0, 0.5, 0.3] } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  />
                  
                  <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <node.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="font-semibold">{node.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center text-xl text-muted-foreground mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          The event itself is just <span className="text-foreground font-semibold">one moment</span> in a much bigger pipeline.
        </motion.p>
      </div>
    </section>
  );
};

// ============================================
// SECTION 8: WHY MOST EVENTS FAIL - GLITCH/WARNING
// ============================================
const FailSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const failures = [
    { mistake: "No clear ICP", result: "wrong audience" },
    { mistake: "No acquisition strategy", result: "low registrations" },
    { mistake: "No reminders", result: "poor attendance" },
    { mistake: "No qualification", result: "bad leads" },
    { mistake: "No post-event system", result: "zero ROI" },
    { mistake: "No reuse", result: "wasted content and data" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Warning gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      {/* Animated warning lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-destructive/50"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={isInView ? { 
              x: [-2, 2, -2, 2, 0],
              transition: { delay: 0.5, duration: 0.4 }
            } : {}}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-destructive" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Why Most Events <span className="text-destructive">Fail</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Most events don't fail because of the speaker or the topic.<br />
            They fail because of <span className="text-destructive font-semibold">structural mistakes</span>.
          </p>
        </motion.div>

        {/* Failure grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {failures.map((failure, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { 
                opacity: 1, 
                x: 0,
              } : {}}
              transition={{ 
                delay: i * 0.1,
                duration: 0.4
              }}
              whileHover={{ 
                x: [-2, 2, -2, 0],
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="p-4 bg-card/50 border border-destructive/30 rounded-lg hover:border-destructive/60 transition-colors">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">{failure.mistake}</span>
                    <span className="text-muted-foreground"> → </span>
                    <span className="text-destructive">{failure.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Truth */}
        <motion.div
          className="text-center max-w-2xl mx-auto p-8 bg-card border border-border rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl">
            In other words:
          </p>
          <p className="text-2xl md:text-3xl font-bold mt-4">
            <span className="text-muted-foreground">Most events are built as</span> moments.
            <br />
            <span className="text-primary">Profitable events are built as</span> systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 9: THE REAL GAINS - TIMELINE
// ============================================
const GainsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeframes = [
    {
      label: "Short-term",
      color: "from-green-500 to-emerald-500",
      gains: ["Qualified leads", "Sales conversations", "Immediate pipeline"]
    },
    {
      label: "Mid-term",
      color: "from-blue-500 to-cyan-500",
      gains: ["Email & SMS lists", "Retargeting audiences", "Social growth", "Content library"]
    },
    {
      label: "Long-term",
      color: "from-primary to-orange-500",
      gains: ["Authority in your niche", "Lower CAC", "Faster deal closing", "Predictable demand"]
    }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold mb-4">THE REAL GAINS</p>
          <h2 className="text-3xl md:text-5xl font-black">
            What you <span className="text-gradient">actually get</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-primary -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-24">
            {timeframes.map((timeframe, i) => (
              <motion.div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.3, duration: 0.6 }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${timeframe.color} text-white font-bold mb-4`}>
                    {timeframe.label}
                  </div>
                  <div className="space-y-2">
                    {timeframe.gains.map((gain, j) => (
                      <motion.p
                        key={j}
                        className="text-lg md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: i * 0.3 + j * 0.1 + 0.3 }}
                      >
                        <Check className="w-5 h-5 text-green-500 inline mr-2" />
                        {gain}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${timeframe.color} border-4 border-background shadow-lg hidden md:block`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.3 + 0.2, type: "spring" }}
                />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.p
          className="text-center text-xl text-muted-foreground mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          This is why companies that master events <span className="text-foreground font-semibold">don't stop at one</span>.
        </motion.p>
      </div>
    </section>
  );
};

// ============================================
// SECTION 10: FINAL CTA - THE PORTAL
// ============================================
const FinalCTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Portal effect background */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
        
        {/* Animated rings */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
            style={{
              width: `${(i + 1) * 20}%`,
              height: `${(i + 1) * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Event marketing is not a tactic.<br />
            <span className="text-gradient">It's a growth lever.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            When engineered correctly, it becomes:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["A lead machine", "A sales accelerator", "An authority amplifier"].map((item, i) => (
              <motion.span
                key={i}
                className="px-6 py-3 bg-card border border-primary/30 rounded-full text-lg font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            Most companies never experience this —<br />
            not because events don't work,<br />
            but because they never build the <span className="text-foreground font-semibold">system</span> behind them.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 group">
              <Link to="/how-it-works">
                See How We Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 group">
              <Link to="/contact">
                Book a Strategy Call
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* FOMO element */}
          <motion.p
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Your competitors are already booking their spots
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const EventMarketing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <RealityCheckSection />
        <MarketplaceSection />
        <PowerSection />
        <ResultsCascadeSection />
        <WhoSection />
        <SystemSection />
        <FailSection />
        <GainsSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventMarketing;
