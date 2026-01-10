import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Sparkles, CalendarX, StopCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Users,
    title: "Attract the wrong audience",
    description: "Wrong titles, wrong companies, wrong intent.",
  },
  {
    icon: Sparkles,
    title: "Rely on hope instead of systems",
    description: "No repeatable process, just wishful thinking.",
  },
  {
    icon: Target,
    title: "No real acquisition strategy",
    description: "Random promotion with no targeting precision.",
  },
  {
    icon: CalendarX,
    title: "Stop at 'attendance'",
    description: "No post-event monetization or follow-up.",
  },
  {
    icon: StopCircle,
    title: "End the moment the event is over",
    description: "No system to capture long-term value.",
  },
];

const results = [
  "Low attendance",
  "Poor lead quality",
  "No post-event follow-up",
  "No system, just one-off events",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const shakeVariants = {
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.5 }
  }
};

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      {/* Animated Warning Background */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-destructive/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        {/* Header with dramatic entrance */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.8, repeat: 2 }}
            >
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-destructive"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            But Most Events Fail
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Not because events don't work — but because they're built backwards.
          </motion.p>
        </motion.div>

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground">Most events:</p>
        </motion.div>
        
        {/* Problems Grid with staggered animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "hsl(var(--destructive) / 0.6)",
                y: -5,
              }}
              className="relative p-5 rounded-2xl bg-card border border-destructive/20 transition-colors duration-300 cursor-pointer group"
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3"
                whileHover={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <problem.icon className="w-5 h-5 text-destructive" />
              </motion.div>
              <h3 className="text-base font-bold mb-1 group-hover:text-destructive transition-colors">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
              
              {/* Animated border glow on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-destructive/0 pointer-events-none"
                whileHover={{ borderColor: "hsl(var(--destructive) / 0.4)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Results Box with dramatic reveal */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        >
          <motion.div 
            className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30 relative overflow-hidden"
            whileHover={{ borderColor: "hsl(var(--destructive) / 0.5)" }}
          >
            {/* Pulsing warning effect */}
            <motion.div 
              className="absolute inset-0 bg-destructive/5"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <motion.p 
              className="text-center text-lg font-bold text-destructive mb-4 relative z-10"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: [0.9, 1.1, 1] } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Result:
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-3 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {results.map((result, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-2 text-muted-foreground"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-destructive"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <span className="text-sm">{result}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link to="/event-marketing">
            <Button variant="outline" size="lg" className="group">
              Learn More About Event Marketing
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;