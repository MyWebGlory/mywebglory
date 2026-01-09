import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Target,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Bell,
  Database,
  Video,
  Mail,
  Phone,
  BarChart3,
  Calendar,
  MessageSquare,
  AlertTriangle,
  XCircle,
  CheckCircle,
  Sparkles,
  Crown,
  Rocket,
  Building2,
  GraduationCap,
  Briefcase,
  Home,
  DollarSign,
  Heart,
  Scale,
  ArrowRight,
  Play,
} from "lucide-react";

// ============================================
// SECTION 1: Hero - The Tunnel Entrance
// ============================================
const HeroTunnel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const tunnelScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const tunnelOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] md:h-[150vh] bg-background overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Perspective grid converging to center */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
          }}
        />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/80 pointer-events-none" />

        {/* Tunnel rings */}
        <motion.div
          style={{ scale: tunnelScale, opacity: tunnelOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-primary/20 rounded-full"
              style={{
                width: `${(i + 1) * 80}px`,
                height: `${(i + 1) * 80}px`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1 + i * 0.05, 0.3 + i * 0.05, 0.1 + i * 0.05],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Center glow layers */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute w-16 h-16 bg-primary/40 rounded-full blur-xl animate-pulse" />
          <div className="absolute w-8 h-8 bg-primary rounded-full blur-lg" />
        </motion.div>

        {/* Floating particles - more on desktop */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i < 20 ? 'w-1 h-1' : i < 35 ? 'w-0.5 h-0.5' : 'w-1.5 h-1.5'} ${i % 3 === 0 ? 'bg-primary/80' : i % 3 === 1 ? 'bg-primary/40' : 'bg-primary/60'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.9, 0.1],
              scale: [1, 1.5 + Math.random(), 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Spark bursts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full hidden md:block"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}

        {/* Hero text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 text-center px-4"
        >
          {/* Two-line headline */}
          <div className="mb-6 md:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2"
            >
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground tracking-wider uppercase">
                What Is
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-gradient tracking-tight">
                EVENT MARKETING
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-2"
            >
              ?
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-md md:max-w-2xl mx-auto px-4"
          >
            Scroll to enter the system that transforms events into revenue
            machines
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-8 md:mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary"
            >
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 md:w-1.5 md:h-3 bg-primary rounded-full mt-1.5 md:mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
};

// ============================================
// SECTION 2: The Reality Check (Sticky Section)
// ============================================
const RealityCheck = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const myths = [
    "Event marketing is not hosting a webinar.",
    "It's not filling a Zoom room.",
    "And it's definitely not 'brand awareness'.",
  ];

  const strikeProgress1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const strikeProgress2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const strikeProgress3 = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const truthOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const truthY = useTransform(scrollYProgress, [0.5, 0.65], [50, 0]);

  const strikeProgresses = [strikeProgress1, strikeProgress2, strikeProgress3];

  return (
  <section ref={ref} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background pulse */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Myths with strike-through */}
          <div className="space-y-8 mb-16">
            {myths.map((myth, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <p className="text-2xl md:text-4xl font-light text-muted-foreground">
                  {myth}
                </p>
                <motion.div
                  className="absolute top-1/2 left-0 h-1 bg-destructive/70 origin-left"
                  style={{
                    scaleX: strikeProgresses[i],
                    width: "100%",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* The truth */}
          <motion.div
            style={{ opacity: truthOpacity, y: truthY }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight pl-6">
              Event marketing is the{" "}
              <span className="text-gradient">fastest way</span> to turn
              attention into trust, trust into conversations, and conversations
              into <span className="text-gradient">revenue</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 3: The Marketplace (3D Card Stack)
// ============================================
const MarketplaceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Users,
      text: "Your ideal buyers gather",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Crown,
      text: "Your authority compounds",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      text: "Your pipeline accelerates",
      color: "from-orange-500 to-red-500",
    },
  ];

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i === 0 ? -200 : i === 2 ? 200 : 0,
      y: i === 1 ? -200 : 100,
      rotateY: i === 0 ? 45 : i === 2 ? -45 : 0,
      rotateX: i === 1 ? 45 : 0,
      scale: 0.5,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.3,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-muted-foreground text-lg md:text-xl mb-4">
            When done properly, an event becomes a
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-gradient">
            MARKETPLACE
          </h2>
        </motion.div>

        {/* 3D Cards */}
        <div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 from-primary/30 to-primary/10" />
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center text-xl md:text-2xl text-muted-foreground mt-20 max-w-3xl mx-auto"
        >
          This is why the{" "}
          <span className="text-foreground font-semibold">
            most profitable companies on the planet
          </span>{" "}
          rely on events — online or offline — to grow.
        </motion.p>
      </div>
    </section>
  );
};

// ============================================
// SECTION 4: Why Events Are Powerful (Scroll Tunnel)
// ============================================
const WhyPowerfulSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const benefits = [
    {
      icon: Clock,
      title: "They compress time",
      description:
        "Months of content, emails, and ads condensed into hours",
    },
    {
      icon: Shield,
      title: "They create trust at scale",
      description: "People see you live. No filters. No edits.",
    },
    {
      icon: Zap,
      title: "They trigger urgency and FOMO",
      description: '"If I don\'t show up, I miss it."',
    },
    {
      icon: Database,
      title: "They generate first-party data",
      description: "Emails, phones, intent, behavior, questions",
    },
    {
      icon: Video,
      title: "They multiply content",
      description: "One event becomes weeks of clips, posts, ads, retargeting",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 bg-background overflow-hidden"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            WHY EVENTS ARE{" "}
            <span className="text-gradient">SO POWERFUL</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Events do something no other channel can:
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    → {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 5: The Results Cascade
// ============================================
const ResultsCascade = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { icon: Target, text: "Fill your pipeline" },
    { icon: Clock, text: "Shorten sales cycles" },
    { icon: TrendingUp, text: "Reduce future acquisition costs" },
    { icon: Crown, text: "Position you as the reference in your market" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 bg-background overflow-hidden"
    >
      {/* Falling particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
            }}
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-xl text-muted-foreground mb-4">
            A single well-executed event can:
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            TRANSFORM YOUR BUSINESS
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -100, rotateX: -45 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-card/80 to-card/40 border border-border/50 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <result.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-xl md:text-2xl font-medium text-foreground">
                  {result.text}
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.7, type: "spring" }}
                  className="ml-auto"
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 6: Who This Is For (Reveal Cards)
// ============================================
const WhoIsForSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const criteria = [
    { icon: DollarSign, text: "Sell high-ticket offers" },
    { icon: Shield, text: "Need trust before purchase" },
    { icon: Target, text: "Want qualified leads, not volume" },
    { icon: Crown, text: "Care about authority and long-term leverage" },
  ];

  const industries = [
    { icon: Building2, name: "SaaS & Tech" },
    { icon: Briefcase, name: "Agencies" },
    { icon: GraduationCap, name: "Education" },
    { icon: BarChart3, name: "B2B Products" },
    { icon: Home, name: "Real Estate" },
    { icon: DollarSign, name: "Finance" },
    { icon: Heart, name: "Healthcare" },
    { icon: Scale, name: "Professional Services" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            WHO EVENT MARKETING IS{" "}
            <span className="text-gradient">FOR</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Event marketing works best for businesses that:
          </p>
        </motion.div>

        {/* Criteria cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group"
              style={{ perspective: "1000px" }}
            >
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm flex items-center gap-4 group-hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {item.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Typical Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  type: "spring",
                }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-card/30 border border-border/30 flex flex-col items-center gap-3 hover:border-primary/50 transition-all"
              >
                <industry.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <p className="text-xl md:text-2xl text-foreground">
              If your offer requires{" "}
              <span className="font-bold">explanation</span>,{" "}
              <span className="font-bold">proof</span>, or{" "}
              <span className="font-bold">credibility</span> —
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gradient mt-4">
              event marketing outperforms everything else.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 7: The System (Connected Nodes) - STICKY SCROLL
// ============================================
const SystemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const nodes = [
    { icon: Target, title: "Deep ICP understanding" },
    { icon: Sparkles, title: "Clear event angle" },
    { icon: TrendingUp, title: "Strategic acquisition" },
    { icon: BarChart3, title: "Conversion-focused paths" },
    { icon: Database, title: "CRM tracking" },
    { icon: Bell, title: "Reminder systems" },
    { icon: MessageSquare, title: "Post-event follow-up" },
  ];

  // Title transforms - appear immediately, visible from start
  const titleScale = useTransform(scrollYProgress, [0, 0.02], [0.95, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.01], [0.8, 1]);

  // Node visibility based on scroll - appear much faster
  const getNodeOpacity = (index: number) => {
    const start = 0.01 + index * 0.06;
    const end = start + 0.05;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  const getNodeScale = (index: number) => {
    const start = 0.01 + index * 0.06;
    const end = start + 0.05;
    return useTransform(scrollYProgress, [start, end], [0.5, 1]);
  };

  const getNodeY = (index: number) => {
    const start = 0.05 + index * 0.08;
    const end = start + 0.06;
    return useTransform(scrollYProgress, [start, end], [30, 0]);
  };

  // Connection line progress
  const getLineProgress = (index: number) => {
    const start = 0.06 + index * 0.08;
    const end = start + 0.05;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  // Closing text - appears after all nodes
  const closingOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.7, 0.8], [30, 0]);

  // Center glow intensity
  const glowScale = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 1.5]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0.2, 0.6, 0.4]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-background"
    >
      {/* Sticky container - everything stays fixed while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Central glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          style={{ scale: glowScale, opacity: glowOpacity }}
        />

        {/* Electric spark effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Rotating connection circle */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          {/* Title - Fixed in center, doesn't move */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-4">
              Real event marketing is not one action.
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              IT'S A <span className="text-gradient">SYSTEM</span>
            </h2>
          </div>

          {/* Nodes in circular/grid layout - centered, elements appear on scroll */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
            {/* Desktop: Circular layout */}
            <div className="hidden md:block relative h-[350px] w-full">
              {nodes.map((node, i) => {
                const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      x,
                      y,
                      opacity: getNodeOpacity(i),
                      scale: getNodeScale(i),
                    }}
                  >
                    {/* Connection line to center */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-primary/60 to-transparent origin-left"
                      style={{
                        width: `${radius - 50}px`,
                        rotate: `${180 + (angle * 180) / Math.PI}deg`,
                        scaleX: getLineProgress(i),
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-card to-card/50 border-2 border-primary/40 flex flex-col items-center justify-center p-3 cursor-pointer group"
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <node.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary mb-1.5 relative z-10" />
                      <span className="text-[10px] lg:text-xs text-center font-medium text-muted-foreground relative z-10 leading-tight">
                        {node.title}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center hub */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                style={{ opacity: titleOpacity }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
            </div>

            {/* Mobile: Grid layout - centered */}
            <div className="md:hidden grid grid-cols-2 gap-3 px-2 w-full max-w-sm mx-auto">
              {nodes.map((node, i) => (
                <motion.div
                  key={i}
                  style={{
                    opacity: getNodeOpacity(i),
                    scale: getNodeScale(i),
                    y: getNodeY(i),
                  }}
                  className="relative"
                >
                  <div className="p-4 rounded-xl bg-card/50 border border-primary/30 flex flex-col items-center gap-2">
                    <node.icon className="w-6 h-6 text-primary" />
                    <span className="text-xs text-center font-medium text-muted-foreground">
                      {node.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing statement - appears after all nodes */}
          <motion.p
            style={{ opacity: closingOpacity, y: closingY }}
            className="text-center text-lg md:text-xl lg:text-2xl text-muted-foreground mt-12 md:mt-16 max-w-2xl mx-auto px-4"
          >
            The event itself is just one moment in a{" "}
            <span className="text-foreground font-semibold">
              much bigger pipeline
            </span>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 8: Why Most Events Fail (Glitch Section)
// ============================================
const FailureSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const failures = [
    { mistake: "No clear ICP", result: "wrong audience" },
    { mistake: "No acquisition strategy", result: "low registrations" },
    { mistake: "No reminders", result: "poor attendance" },
    { mistake: "No qualification", result: "bad leads" },
    { mistake: "No post-event system", result: "zero ROI" },
    { mistake: "No reuse", result: "wasted content and data" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 bg-background overflow-hidden"
    >
      {/* Warning background */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-background to-background" />

      {/* Glitch lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-destructive/30 w-full"
          style={{ top: `${15 + i * 18}%` }}
          animate={{
            x: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ x: [0, -3, 3, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            WHY MOST EVENTS <span className="text-destructive">FAIL</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Most events fail because of structural mistakes.
          </p>
        </motion.div>

        {/* Failures grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {failures.map((failure, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                x: [0, -2, 2, 0],
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex items-center gap-4 hover:bg-destructive/10 transition-colors">
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">
                    {failure.mistake}
                  </span>
                  <span className="text-muted-foreground"> → </span>
                  <span className="text-destructive">{failure.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              In other words:
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              Most events are built as <span className="text-destructive">moments</span>.
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-2">
              Profitable events are built as{" "}
              <span className="text-gradient">systems</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SECTION 9: The Real Gains (Timeline)
// ============================================
const GainsTimeline = () => {
  const ref = useRef<HTMLDivElement>(null);

  const gains = {
    shortTerm: {
      title: "Short-term",
      color: "from-green-500 to-emerald-500",
      items: ["Qualified leads", "Sales conversations", "Immediate pipeline"],
    },
    midTerm: {
      title: "Mid-term",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Email & SMS lists",
        "Retargeting audiences",
        "Social growth",
        "Content library",
      ],
    },
    longTerm: {
      title: "Long-term",
      color: "from-purple-500 to-pink-500",
      items: [
        "Authority in your niche",
        "Lower CAC",
        "Faster deal closing",
        "Predictable demand",
      ],
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen py-32 bg-background">
      {/* Horizon gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            THE REAL <span className="text-gradient">GAINS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Of Event Marketing
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(gains).map(([key, gain], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />
              )}

              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${gain.color} mx-auto flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-xl">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">
                  {gain.title}
                </h3>
              </div>

              <div className="space-y-3">
                {gain.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/30"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center text-xl md:text-2xl text-muted-foreground mt-20 max-w-3xl mx-auto"
        >
          This is why companies that master events{" "}
          <span className="text-foreground font-semibold">
            don't stop at one
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
};

// ============================================
// SECTION 10: Final CTA (The Portal) - STICKY SCROLL
// ============================================
const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Portal ring expansions - de-zoom from huge (start early)
  const ring1Scale = useTransform(scrollYProgress, [0, 0.08], [5, 1]);
  const ring2Scale = useTransform(scrollYProgress, [0, 0.1], [6, 1]);
  const ring3Scale = useTransform(scrollYProgress, [0, 0.12], [7, 1]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);

  // Glow intensity - de-zoom
  const glowScale = useTransform(scrollYProgress, [0, 0.1], [8, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 0.5]);

  // Title reveal - massive de-zoom from front
  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.16], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0.08, 0.16], [6, 1]);

  // Subtitle reveal - de-zoom
  const subtitleOpacity = useTransform(scrollYProgress, [0.16, 0.24], [0, 1]);
  const subtitleScale = useTransform(scrollYProgress, [0.16, 0.24], [5, 1]);

  // Growth lever text - de-zoom
  const leverOpacity = useTransform(scrollYProgress, [0.24, 0.32], [0, 1]);
  const leverScale = useTransform(scrollYProgress, [0.24, 0.32], [6, 1]);

  // Badges intro text
  const badgeIntroOpacity = useTransform(scrollYProgress, [0.32, 0.40], [0, 1]);
  const badgeIntroScale = useTransform(scrollYProgress, [0.32, 0.40], [5, 1]);

  // Badges reveal - staggered de-zoom
  const badge1Opacity = useTransform(scrollYProgress, [0.40, 0.48], [0, 1]);
  const badge1Scale = useTransform(scrollYProgress, [0.40, 0.48], [6, 1]);
  const badge2Opacity = useTransform(scrollYProgress, [0.48, 0.56], [0, 1]);
  const badge2Scale = useTransform(scrollYProgress, [0.48, 0.56], [6, 1]);
  const badge3Opacity = useTransform(scrollYProgress, [0.56, 0.64], [0, 1]);
  const badge3Scale = useTransform(scrollYProgress, [0.56, 0.64], [6, 1]);

  // Final text - de-zoom
  const finalTextOpacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);
  const finalTextScale = useTransform(scrollYProgress, [0.64, 0.74], [5, 1]);

  // CTAs - de-zoom
  const ctaOpacity = useTransform(scrollYProgress, [0.74, 0.85], [0, 1]);
  const ctaScale = useTransform(scrollYProgress, [0.74, 0.85], [5, 1]);

  const badgeScales = [badge1Scale, badge2Scale, badge3Scale];
  const badgeOpacities = [badge1Opacity, badge2Opacity, badge3Opacity];

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Animated portal rings - de-zoom from huge */}
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-2 border-primary/20"
          style={{ scale: ring1Scale, opacity: ringOpacity }}
        />
        <motion.div
          className="absolute w-[220px] h-[220px] md:w-[450px] md:h-[450px] rounded-full border-2 border-primary/30"
          style={{ scale: ring2Scale, opacity: ringOpacity }}
        />
        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full border-2 border-primary/40"
          style={{ scale: ring3Scale, opacity: ringOpacity }}
        />

        {/* Central glow - de-zoom */}
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-primary/20 blur-3xl"
          style={{ scale: glowScale, opacity: glowOpacity }}
        />
        <motion.div
          className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full bg-primary/30 blur-2xl"
          style={{ scale: glowScale, opacity: glowOpacity }}
        />

        {/* Energy particles being absorbed */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * 2 * Math.PI;
          const startX = Math.cos(angle) * 400;
          const startY = Math.sin(angle) * 400;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{ left: "50%", top: "50%" }}
              animate={{
                x: [startX, 0],
                y: [startY, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeIn",
              }}
            />
          );
        })}

        {/* Rotating outer ring */}
        <motion.div
          className="absolute w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full border border-primary/20 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary/60 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 45}deg) translateX(275px) translateY(-50%)`,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-primary/40 to-transparent origin-bottom"
              style={{
                height: "50vh",
                transform: `rotate(${i * 60}deg)`,
              }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Title - de-zoom from huge */}
            <motion.h2
              style={{ opacity: titleOpacity, scale: titleScale }}
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8"
            >
              THE <span className="text-gradient">BOTTOM LINE</span>
            </motion.h2>

            {/* Subtitle - de-zoom */}
            <motion.p
              style={{ opacity: subtitleOpacity, scale: subtitleScale }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 md:mb-6"
            >
              Event marketing is not a tactic.
            </motion.p>

            {/* Growth lever - de-zoom */}
            <motion.p
              style={{ opacity: leverOpacity, scale: leverScale }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8"
            >
              It's a <span className="text-gradient">growth lever</span>.
            </motion.p>

            {/* Badges intro - de-zoom */}
            <motion.p
              style={{ opacity: badgeIntroOpacity, scale: badgeIntroScale }}
              className="text-base md:text-lg text-foreground mb-4"
            >
              When engineered correctly, it becomes:
            </motion.p>

            {/* Badges - staggered de-zoom */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              {["A lead machine", "A sales accelerator", "An authority amplifier"].map(
                (item, i) => (
                  <motion.span
                    key={i}
                    style={{ opacity: badgeOpacities[i], scale: badgeScales[i] }}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-primary/20 text-primary font-medium text-sm md:text-base border border-primary/30"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </div>

            {/* Final text - de-zoom */}
            <motion.p
              style={{ opacity: finalTextOpacity, scale: finalTextScale }}
              className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4"
            >
              Most companies never experience this — not because events don't
              work, but because they never build the{" "}
              <span className="text-foreground font-semibold">system</span> behind
              them.
            </motion.p>

            {/* CTAs - de-zoom */}
            <motion.div
              style={{ opacity: ctaOpacity, scale: ctaScale }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            >
              <Link to="/how-it-works">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-lg blur opacity-40"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Button
                    size="lg"
                    className="relative text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto"
                  >
                    <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    See How We Work
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// GLOBAL VISUAL EFFECTS
// ============================================
const NoiseOverlay = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

const AmbientOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
      animate={{
        x: [0, -80, 0],
        y: [0, -60, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  </div>
);

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const EventMarketing = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global ambient effects */}
      <NoiseOverlay />
      <AmbientOrbs />
      
      <Navbar />

      <main className="relative z-10">
        <HeroTunnel />
        <RealityCheck />
        <MarketplaceSection />
        <WhyPowerfulSection />
        <ResultsCascade />
        <WhoIsForSection />
        <SystemSection />
        <FailureSection />
        <GainsTimeline />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default EventMarketing;
