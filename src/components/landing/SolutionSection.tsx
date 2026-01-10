import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Crown, Rocket, Zap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Target,
    title: "Sniper ICP Targeting",
    description: "We find and attract the exact decision-makers who can buy from you.",
  },
  {
    icon: Crown,
    title: "Authority Positioning",
    description: "Your events build reputation, not just attendance lists.",
  },
  {
    icon: Rocket,
    title: "Conversion-Focused Funnels",
    description: "Every step designed to move prospects toward a buying decision.",
  },
  {
    icon: Zap,
    title: "High Show-Up Activation",
    description: "Systems that maximize attendance and engagement.",
  },
  {
    icon: TrendingUp,
    title: "Post-Event Authority & Pipeline",
    description: "Turn one event into months of momentum and revenue.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8, rotateY: -20 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="solution">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      {/* Floating sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Sparkles className="w-4 h-4 text-primary/40" />
        </motion.div>
      ))}
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-6"
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
            <Crown className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Difference
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We don't "promote events."
          </motion.p>
          <motion.p 
            className="text-xl font-semibold text-primary"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
          >
            We engineer end-to-end event marketing systems:
          </motion.p>
        </motion.div>
        
        {/* Solutions Grid */}
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative p-6 rounded-2xl bg-card border border-primary/20 text-center cursor-pointer group"
            >
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto relative z-10"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <solution.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2 relative z-10 group-hover:text-primary transition-colors">{solution.title}</h3>
              <p className="text-muted-foreground text-sm relative z-10">{solution.description}</p>
              
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.4)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 80 }}
        >
          <motion.div 
            className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
            />
            
            {/* Floating particles inside */}
            <motion.div 
              className="absolute top-4 left-4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-4 right-4 w-3 h-3 bg-secondary/30 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl font-bold text-foreground mb-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              The event is just the trigger.
            </motion.p>
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-primary relative z-10"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            >
              The system is what makes money.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Link to="/how-it-works">
            <Button variant="outline" size="lg" className="group">
              See How We Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;