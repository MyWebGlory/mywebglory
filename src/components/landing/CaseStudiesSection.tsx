import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, DollarSign, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Tech Conference 2024",
    category: "Technology",
    stats: [
      { icon: Users, value: 12500, suffix: "+", label: "Registrations" },
      { icon: TrendingUp, value: 89, suffix: "%", label: "Show Rate" },
      { icon: DollarSign, value: 4.2, suffix: "x", label: "ROAS" },
    ],
    description: "Drove massive registrations for a flagship tech conference using multi-channel paid campaigns.",
  },
  {
    title: "Finance Summit",
    category: "Finance",
    stats: [
      { icon: Users, value: 3200, suffix: "+", label: "Registrations" },
      { icon: TrendingUp, value: 92, suffix: "%", label: "Show Rate" },
      { icon: DollarSign, value: 6.8, suffix: "x", label: "ROAS" },
    ],
    description: "High-value B2B event targeting C-suite executives with precision LinkedIn campaigns.",
  },
  {
    title: "Marketing Masterclass",
    category: "Education",
    stats: [
      { icon: Users, value: 8400, suffix: "+", label: "Registrations" },
      { icon: TrendingUp, value: 86, suffix: "%", label: "Show Rate" },
      { icon: DollarSign, value: 5.1, suffix: "x", label: "ROAS" },
    ],
    description: "Virtual workshop series that scaled from 500 to 8,400 attendees in just 3 months.",
  },
];

function AnimatedNumber({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, isVisible]);
  
  return (
    <span>
      {typeof value === "number" && value % 1 !== 0 
        ? (count / 10).toFixed(1) 
        : count.toLocaleString()}
      {suffix}
    </span>
  );
}

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
  hidden: { opacity: 0, y: 80, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="results">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4"
          >
            <Award className="w-7 h-7 text-primary" />
          </motion.div>
          <motion.span 
            className="block text-primary font-medium tracking-wide uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Proven Results
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mt-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Data That Drives Wins
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Real events. Unstoppable results. See what's possible when bold vision meets flawless execution.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.span 
                className="relative z-10 text-xs font-medium text-primary uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
              >
                {study.category}
              </motion.span>
              <h3 className="relative z-10 text-2xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
              
              <div className="relative z-10 space-y-4 mb-6">
                {study.stats.map((stat, j) => (
                  <motion.div 
                    key={j} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + j * 0.1 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <stat.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isInView} />
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">
                {study.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/case-studies">
            <Button variant="outline" size="lg" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;