import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Shield, MessageSquare, Database, TrendingUp, DollarSign, Zap, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Users,
    text: "Attract hundreds of your exact ICP at once",
  },
  {
    icon: Shield,
    text: "Build trust, authority, and urgency in real time",
  },
  {
    icon: MessageSquare,
    text: "Generate sales conversations at scale",
  },
  {
    icon: Database,
    text: "Create content, audiences, and data you can reuse for months",
  },
];

const outcomes = [
  { icon: TrendingUp, text: "Feed your pipeline" },
  { icon: Users, text: "Grow your audience" },
  { icon: DollarSign, text: "Lower your future ad costs" },
  { icon: Zap, text: "Increase deal velocity" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const WhyEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="why-events">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4"
          >
            <Rocket className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Why Events Are the Fastest Way to Grow Revenue
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Events compress months of marketing into days.
          </motion.p>
        </motion.div>
        
        {/* Main Benefits */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: "hsl(var(--primary) / 0.6)",
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <benefit.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <p className="text-foreground font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Single Event Outcomes */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-lg text-muted-foreground">
              A single well-executed event can:
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 cursor-pointer"
              >
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  <outcome.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <p className="text-sm font-medium text-center">{outcome.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement */}
          <motion.div 
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
          >
            {/* Animated shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.p 
              className="text-xl md:text-2xl font-bold text-foreground mb-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              When done right, events are not marketing.
            </motion.p>
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-primary relative z-10"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4, type: "spring" }}
            >
              They're revenue engines.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEventsSection;