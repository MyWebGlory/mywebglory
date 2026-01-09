import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Target,
  Sparkles,
  Map,
  MessageSquare,
  Rocket,
  Layers,
  Bell,
  Infinity as InfinityIcon,
  BarChart3,
  Crown,
  ArrowRight,
  Calendar,
  CheckCircle,
  XCircle,
  Users,
  Clock,
  Shield,
  Zap,
  Mail,
  Phone,
  TrendingUp,
  Lock,
  Play,
  ChevronDown,
} from "lucide-react";

// ============ SECTION 1: HERO TUNNEL ============
const HeroTunnel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ringScale1 = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const ringScale2 = useTransform(scrollYProgress, [0, 1], [1.2, 18]);
  const ringScale3 = useTransform(scrollYProgress, [0, 1], [1.4, 22]);
  const ringScale4 = useTransform(scrollYProgress, [0, 1], [1.6, 25]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Generate tunnel particles
  const tunnelParticles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 60,
    distance: 100 + Math.random() * 400,
    size: 2 + Math.random() * 4,
    speed: 0.5 + Math.random() * 1.5,
    delay: Math.random() * 2,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] bg-background overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Perspective Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 100%),
                repeating-linear-gradient(
                  90deg,
                  hsl(var(--primary) / 0.03) 0px,
                  transparent 1px,
                  transparent 80px
                ),
                repeating-linear-gradient(
                  0deg,
                  hsl(var(--primary) / 0.03) 0px,
                  transparent 1px,
                  transparent 80px
                )
              `,
              transform: "perspective(500px) rotateX(60deg)",
              transformOrigin: "center bottom",
            }}
          />
        </div>

        {/* Tunnel Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[ringScale1, ringScale2, ringScale3, ringScale4].map((scale, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                scale,
                opacity: ringOpacity,
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                borderColor: `hsl(var(--primary) / ${0.4 - i * 0.08})`,
                boxShadow: `0 0 ${30 + i * 10}px hsl(var(--primary) / ${0.2 - i * 0.04}), inset 0 0 ${20 + i * 5}px hsl(var(--primary) / ${0.1 - i * 0.02})`,
              }}
            />
          ))}
        </div>

        {/* Converging Particles */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ y: particleY }}
        >
          {tunnelParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary"
              style={{
                width: particle.size,
                height: particle.size,
                left: `calc(50% + ${Math.cos((particle.angle * Math.PI) / 180) * particle.distance}px)`,
                top: `calc(50% + ${Math.sin((particle.angle * Math.PI) / 180) * particle.distance}px)`,
              }}
              animate={{
                x: [0, -Math.cos((particle.angle * Math.PI) / 180) * particle.distance * 0.8],
                y: [0, -Math.sin((particle.angle * Math.PI) / 180) * particle.distance * 0.8],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.2],
              }}
              transition={{
                duration: 3 / particle.speed,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeIn",
              }}
            />
          ))}
        </motion.div>

        {/* Central Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">HOW WE WORK</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Great events don't happen by chance.
              <br />
              <span className="text-foreground font-semibold">They are engineered.</span>
            </p>
          </motion.div>

          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-sm md:text-base font-medium">
              Limited to <span className="text-primary font-bold">4 clients</span> per month
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm text-muted-foreground">Scroll to enter</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ SECTION 2: THE PROMISE ============
const ThePromise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lines = [
    "What you're about to read is not a checklist.",
    "It's the exact system we use to turn events into pipeline, clients, and authority.",
    "And it's the reason we limit ourselves to 4 clients per month.",
  ];

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          {lines.map((line, i) => (
            <PromiseLine key={i} text={line} index={i} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      {/* Ambient Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

const PromiseLine = ({
  text,
  index,
  scrollProgress,
}: {
  text: string;
  index: number;
  scrollProgress: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`text-2xl md:text-4xl lg:text-5xl font-medium leading-tight ${
        index === 2 ? "text-primary" : "text-foreground"
      }`}
    >
      {text}
    </motion.div>
  );
};

// ============ SECTION 3: WHY DIFFERENT ============
const WhyDifferent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Why Our Process Is <span className="text-gradient">Different</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* The Wrong Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-destructive/30 bg-destructive/5 relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-1/2 left-0 right-0 h-1 bg-destructive/50 origin-left"
              />
              <XCircle className="w-12 h-12 text-destructive mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-muted-foreground line-through decoration-destructive/50 decoration-2">
                Most agencies start with execution
              </h3>
              <p className="text-muted-foreground">
                They jump into tactics without understanding your market, your audience, or your goals.
              </p>
            </div>
          </motion.div>

          {/* The Right Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-primary/50 bg-primary/5 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ boxShadow: ["0 0 20px hsl(var(--primary) / 0.2)", "0 0 40px hsl(var(--primary) / 0.3)", "0 0 20px hsl(var(--primary) / 0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CheckCircle className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We start with <span className="text-primary">understanding</span>
              </h3>
              <p className="text-muted-foreground">
                Before we write a word, design a page, or launch an ad, we immerse ourselves in your business.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            Your success does not come from "doing more".
            <br />
            <span className="text-foreground font-semibold">
              It comes from doing the right things, in the right order, for the right audience.
            </span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mt-6">That's what we do.</p>
        </motion.div>
      </div>
    </section>
  );
};

// ============ STEP CARD COMPONENT ============
interface StepProps {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "highlight" | "warning";
}

const StepSection = ({ number, title, subtitle, icon, children, variant = "default" }: StepProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const borderColor = variant === "highlight" ? "border-primary/50" : variant === "warning" ? "border-yellow-500/50" : "border-border";
  const bgGlow = variant === "highlight" ? "bg-primary/5" : variant === "warning" ? "bg-yellow-500/5" : "bg-card/50";

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Step Number + Icon */}
          <motion.div
            className="relative"
            style={{ y: parallaxY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative"
            >
              {/* Large Step Number */}
              <div className="text-[150px] md:text-[200px] lg:text-[250px] font-bold text-primary/10 leading-none select-none">
                {number}
              </div>

              {/* Floating Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  {icon}
                </div>
              </motion.div>

              {/* Orbit Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/60"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 60 * Math.PI) / 180) * 80,
                      Math.cos(((i * 60 + 360) * Math.PI) / 180) * 80,
                    ],
                    y: [
                      Math.sin((i * 60 * Math.PI) / 180) * 80,
                      Math.sin(((i * 60 + 360) * Math.PI) / 180) * 80,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`p-8 md:p-10 rounded-3xl border ${borderColor} ${bgGlow} backdrop-blur-sm`}>
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">
                Step {number}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
              <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ ANIMATED LIST ITEM ============
const AnimatedListItem = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3"
    >
      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{children}</span>
    </motion.div>
  );
};

// ============ STEP 1: DEEP IMMERSION ============
const Step1DeepImmersion = () => (
  <StepSection
    number="01"
    title="Deep Immersion"
    subtitle="This is where everything begins."
    icon={<Target className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We study:</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Your business model",
            "Your offer",
            "Your market",
            "Your competitors",
            "Your ICP, pain points, objections",
            "Your goals for the event",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">This happens through:</h4>
        <div className="space-y-2">
          {[
            "Structured intake forms",
            "Strategy calls with you and your team",
            "Independent market research on our side",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={0.6 + i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 mt-6"
      >
        <p className="text-sm text-yellow-200">
          <strong>We don't guess. We verify.</strong>
          <br />
          This is the step most competitors skip. It's also why their events underperform.
        </p>
      </motion.div>
    </div>
  </StepSection>
);

// ============ STEP 2: BRANDING & MESSAGING ============
const Step2Branding = () => (
  <StepSection
    number="02"
    title="Branding & Messaging Alignment"
    subtitle="Once we understand your market, we define how you show up."
    icon={<Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
    variant="highlight"
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We build a clear messaging framework:</h4>
        <div className="space-y-2">
          {[
            "Tone of voice",
            "Wording that resonates",
            "Angles that connect with your ICP",
            "Positioning that creates authority and desire",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">This ensures that:</h4>
        <div className="space-y-2">
          {[
            "Your ads speak the right language",
            "Your landing page converts",
            "Your event feels inevitable to attend",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={0.4 + i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="border-l-4 border-primary pl-4 mt-6 italic text-muted-foreground"
      >
        "People don't register for events because of topics. They register because the message hits something personal."
      </motion.blockquote>
    </div>
  </StepSection>
);

// ============ STEP 3: PIPELINE & STRATEGY ============
const Step3Pipeline = () => (
  <StepSection
    number="03"
    title="Pipeline & Strategy Design"
    subtitle="Now we design the full system."
    icon={<Map className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We map:</h4>
        <div className="space-y-2">
          {[
            "The entire acquisition funnel",
            "The conversion paths",
            "The reminder and activation logic",
            "The post-event monetization and follow-up",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30"
      >
        <Lock className="w-6 h-6 text-primary flex-shrink-0" />
        <p className="text-sm font-medium">Nothing is left to chance. The event becomes a mechanism.</p>
      </motion.div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">At this stage, we know:</h4>
        <div className="space-y-2">
          {[
            "Where your attendees come from",
            "How they register",
            "How they are qualified",
            "How they are converted into leads, conversations, or clients",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={0.6 + i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>
    </div>
  </StepSection>
);

// ============ STEP 4: COMMUNICATION SETUP ============
const Step4Communication = () => (
  <StepSection
    number="04"
    title="Communication & Execution Setup"
    subtitle="Execution without structure creates chaos."
    icon={<MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We set up:</h4>
        <div className="space-y-2">
          {[
            "Communication channels (Slack, ClickUp, Drive)",
            "Clear workflows",
            "Roles and responsibilities",
            "Feedback loops",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground">
        We integrate with your team — or run independently if needed — while keeping everything streamlined and efficient.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-4"
      >
          {[
            { label: "Less back-and-forth", IconComp: Zap },
            { label: "Clear visibility", IconComp: TrendingUp },
            { label: "Fast execution", IconComp: Rocket },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20"
            >
              <item.IconComp className="w-5 h-5 text-primary mb-2 mx-auto" />
              <span className="text-xs font-medium">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </StepSection>
);

// ============ STEP 5: ACQUISITION ============
const Step5Acquisition = () => {
  const adChannels = [
    { name: "Meta Ads", icon: "🔵", color: "from-blue-600 to-blue-400" },
    { name: "Google Ads", icon: "🔴", color: "from-red-500 to-yellow-500" },
    { name: "LinkedIn Ads", icon: "🔷", color: "from-blue-700 to-blue-500" },
    { name: "TikTok Ads", icon: "⬛", color: "from-gray-900 to-pink-500" },
    { name: "YouTube Ads", icon: "▶️", color: "from-red-600 to-red-400" },
    { name: "X (Twitter) Ads", icon: "✖️", color: "from-gray-800 to-gray-600" },
  ];

  const organicChannels = [
    { name: "Email Marketing", icon: "📧", color: "from-green-500 to-emerald-400" },
    { name: "Organic Social", icon: "📱", color: "from-pink-500 to-rose-400" },
    { name: "Content Marketing", icon: "📝", color: "from-purple-500 to-violet-400" },
    { name: "SEO", icon: "🔍", color: "from-orange-500 to-amber-400" },
    { name: "Partnerships", icon: "🤝", color: "from-teal-500 to-cyan-400" },
    { name: "Referrals", icon: "🎯", color: "from-indigo-500 to-blue-400" },
  ];

  return (
    <StepSection
      number="05"
      title="Acquisition (Organic + Paid)"
      subtitle="This is where momentum starts."
      icon={<Rocket className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
      variant="highlight"
    >
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">Paid Channels:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {adChannels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`p-3 rounded-xl bg-gradient-to-r ${channel.color} text-white text-center font-medium text-sm flex items-center justify-center gap-2`}
              >
                <span>{channel.icon}</span>
                <span>{channel.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Organic Channels:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {organicChannels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`p-3 rounded-xl bg-gradient-to-r ${channel.color} text-white text-center font-medium text-sm flex items-center justify-center gap-2`}
              >
                <span>{channel.icon}</span>
                <span>{channel.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">For ads, we handle:</h4>
          <div className="space-y-2">
            {[
              "Account and sub-account setup",
              "Creative strategy",
              "Static, video, UGC, or AI-based creatives",
              "ICP targeting, lookalikes, retargeting",
              "Testing, learning, and optimization",
            ].map((item, i) => (
              <AnimatedListItem key={i} delay={0.4 + i * 0.1}>
                {item}
              </AnimatedListItem>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="p-4 rounded-xl bg-primary/20 border border-primary/40 text-center"
        >
          <p className="font-bold text-lg">
            We don't run ads.
            <br />
            <span className="text-primary">We run acquisition systems.</span>
          </p>
        </motion.div>
      </div>
    </StepSection>
  );
};

// ============ STEP 6: CONVERSION ============
const Step6Conversion = () => (
  <StepSection
    number="06"
    title="Conversion Infrastructure"
    subtitle="Traffic without conversion is wasted money."
    icon={<Layers className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
    variant="warning"
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We build:</h4>
        <div className="space-y-2">
          {[
            "High-converting event landing pages or forms",
            "Branded, frictionless registration paths",
            "Continuous optimization based on behavior and data",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">Every improvement cycle increases:</h4>
        <div className="grid grid-cols-3 gap-3">
          {["Registrations", "Lead Quality", "Show-up Rate"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20"
            >
              <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
              <span className="text-xs font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-lg font-medium"
      >
        This is where mediocre events become <span className="text-primary">profitable ones</span>.
      </motion.p>
    </div>
  </StepSection>
);

// ============ STEP 7: REMINDERS ============
const Step7Reminders = () => (
  <StepSection
    number="07"
    title="Reminders & Activation"
    subtitle="Attendance is engineered."
    icon={<Bell className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We maximize show-up through:</h4>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { IconComp: Mail, label: "Email Flows" },
            { IconComp: MessageSquare, label: "SMS Sequences" },
            { IconComp: Phone, label: "Phone Campaigns" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            >
              <item.IconComp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">Attendees feel:</h4>
        <div className="space-y-2">
          {["Expected", "Important", "Invested"].map((item, i) => (
            <AnimatedListItem key={i} delay={0.4 + i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 text-center"
      >
        <motion.span
          className="text-5xl font-bold text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          2×
        </motion.span>
        <p className="text-sm text-muted-foreground mt-2">
          This alone can double attendance compared to standard events.
        </p>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Most competitors ignore this step. We obsess over it.
        </p>
      </motion.div>
    </div>
  </StepSection>
);

// ============ STEP 8: POST-EVENT ============
const Step8PostEvent = () => (
  <StepSection
    number="08"
    title="Post-Event Leverage"
    subtitle="The event does not end when it ends."
    icon={<InfinityIcon className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
    variant="highlight"
  >
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3">We:</h4>
        <div className="space-y-2">
          {[
            "Activate post-event email and SMS flows",
            "Drive attendees into your ecosystem",
            "Extract highlights, insights, and authority content",
            "Turn one event into weeks of momentum",
          ].map((item, i) => (
            <AnimatedListItem key={i} delay={i * 0.1}>
              {item}
            </AnimatedListItem>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">Your event becomes:</h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Content",
            "Social Proof",
            "Retargeting Fuel",
            "Authority Capital",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
              className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center"
            >
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </StepSection>
);

// ============ STEP 9: ANALYTICS ============
const Step9Analytics = () => (
  <StepSection
    number="09"
    title="Analytics & Strategic Debrief"
    subtitle="We track everything that matters."
    icon={<BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-primary" />}
  >
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {[
          "Acquisition Performance",
          "Attendance",
          "Lead Quality",
          "Funnel Efficiency",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center"
          >
            <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2" />
            <span className="text-xs font-medium">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 rounded-xl bg-primary/10 border border-primary/30"
      >
        <p className="text-center">
          <span className="font-bold">You don't just get results.</span>
          <br />
          <span className="text-muted-foreground">You get clarity.</span>
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-lg"
      >
        This data <span className="text-primary font-semibold">compounds over time</span> and makes every future event stronger.
      </motion.p>
    </div>
  </StepSection>
);

// ============ SCARCITY SECTION ============
const ScarcitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Why We're Selective
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Why We Limit Ourselves to{" "}
            <span className="text-gradient">4 Clients</span> Per Month
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { IconComp: Target, label: "Focus" },
              { IconComp: Zap, label: "Precision" },
              { IconComp: Crown, label: "Obsession with Detail" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="p-6 rounded-2xl bg-card/50 border border-border"
              >
                <item.IconComp className="w-8 h-8 text-primary mb-3 mx-auto" />
                <span className="text-xl font-bold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            We don't scale by taking more clients.
            <br />
            <span className="text-foreground font-semibold">We scale by making our clients win harder.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/20 border border-primary/40"
          >
            <Crown className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">
              Your event becomes one of our <span className="text-primary font-bold">priorities</span> — not a line item.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ THE TRUTH SECTION ============
const TheTruth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            The <span className="text-gradient">Truth</span>
          </h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground"
            >
              Your competitors are running events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <span className="text-xl text-muted-foreground">Some are filling rooms.</span>
              <span className="hidden md:block text-muted-foreground">•</span>
              <span className="text-xl font-bold text-primary">Very few are building systems.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-2 gap-6 mt-12"
            >
              {/* Winners */}
              <div className="p-8 rounded-2xl bg-primary/10 border border-primary/30">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-4">Those who do will:</h4>
                <div className="space-y-3 text-left">
                  {["Capture attention", "Build authority", "Own the market"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <XCircle className="w-10 h-10 text-muted-foreground mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-4 text-muted-foreground">The others will:</h4>
                <p className="text-muted-foreground italic">
                  Wonder why their events "didn't work".
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ FINAL CTA ============
const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Portal particles
  const portalParticles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 40,
    distance: 150 + Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 bg-gradient-to-b from-background via-primary/10 to-background overflow-hidden"
    >
      {/* Portal Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/40"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 30}deg) translateX(250px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Converging Particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {portalParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [
                Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
                0,
              ],
              y: [
                Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
                0,
              ],
              opacity: [0, 1, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Next Step
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">Begin</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            When you're ready, we're ready.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                <Button
                  size="lg"
                  className="relative text-lg px-8 py-6 bg-primary hover:bg-primary/90"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Apply for a Strategy Call
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>

            <Link to="/event-marketing">
              <Button
                size="lg"
                variant="outline"
                className="group text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                What Is Event Marketing
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ MAIN PAGE ============
const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <HeroTunnel />
      <ThePromise />
      <WhyDifferent />

      {/* All 9 Steps */}
      <div className="relative">
        {/* Vertical Progress Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

        <Step1DeepImmersion />
        <Step2Branding />
        <Step3Pipeline />
        <Step4Communication />
        <Step5Acquisition />
        <Step6Conversion />
        <Step7Reminders />
        <Step8PostEvent />
        <Step9Analytics />
      </div>

      <ScarcitySection />
      <TheTruth />
      <FinalCTA />

      <Footer />
    </div>
  );
};

export default HowItWorks;
