import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Lightbulb, Rocket, Trophy, Cog, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We learn your event, audience, and mission. No fluff, just a razor-focused strategy session to find your North-Star.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Setup",
    description: "We architect your custom marketing system, precision ads, funnels, emails, and automations tailored to dominate your market.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description: "Campaigns go live. We monitor, test, and optimize in real-time for maximum ROI, keeping your budget lean and results mean.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Deliver Attendees",
    description: "Watch your registration count climb. Our reminder sequences ensure attendees actually show up, turning signups into impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="process">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            <Cog className="w-7 h-7 text-primary" />
          </motion.div>
          <motion.span 
            className="block text-primary font-medium tracking-wide uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Process
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mt-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Architect Your Event's Triumph
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A proven four-step process that consistently delivers sold-out events. Data-driven with razor-sharp precision.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Animated Connection Line */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Animated dots on the line */}
          {isInView && (
            <motion.div 
              className="hidden lg:block absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full -translate-y-1/2"
              initial={{ left: "0%" }}
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="relative cursor-pointer"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Number Badge with glow */}
                  <motion.div 
                    className="text-6xl font-bold text-muted/30 mb-4"
                    whileHover={{ scale: 1.1, color: "hsl(var(--primary) / 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon with animations */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    >
                      <step.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-3"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector arrow for large screens */}
                {i < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 text-primary/30"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/how-it-works">
            <Button variant="outline" size="lg" className="group">
              Explore Our Full Process
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;