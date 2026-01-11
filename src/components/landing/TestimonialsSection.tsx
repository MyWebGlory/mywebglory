import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "MyWebGlory transformed our event marketing. We went from struggling to fill seats to selling out in 3 weeks. Their systems just work.",
    name: "Sarah Chen",
    title: "VP of Events",
    company: "TechForward Inc.",
    avatar: "SC",
  },
  {
    quote: "The ROI was incredible. For every dollar we spent, we got $6 back in ticket sales. Plus, our show rate jumped from 60% to 91%.",
    name: "Marcus Johnson",
    title: "Conference Director",
    company: "Finance Leaders Summit",
    avatar: "MJ",
  },
  {
    quote: "They don't just run ads—they build complete systems. The email sequences alone were worth the investment. Absolutely recommend.",
    name: "Emily Rodriguez",
    title: "Marketing Lead",
    company: "Growth Academy",
    avatar: "ER",
  },
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

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      {/* Animated background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating quote marks */}
      <motion.div 
        className="absolute top-20 left-[10%] opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Quote className="w-24 h-24 text-primary" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-[10%] opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <Quote className="w-20 h-20 text-secondary" />
      </motion.div>
      
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
            <MessageCircle className="w-7 h-7 text-primary" />
          </motion.div>
          <motion.span 
            className="block text-primary font-medium tracking-wide uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mt-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Voices of Triumph
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Don't take our word for it. Here's what event organizers say about their path to dominance.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer group"
            >
              {/* Animated quote icon */}
              <motion.div
                initial={{ opacity: 0.2, scale: 0.8 }}
                whileHover={{ opacity: 0.4, scale: 1 }}
                className="absolute top-6 right-6"
              >
                <Quote className="w-8 h-8 text-primary/20" />
              </motion.div>
              
              {/* Stars with stagger animation */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      delay: 0.5 + i * 0.1 + j * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-foreground/90 mb-6 leading-relaxed italic"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                "{testimonial.quote}"
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
              
              {/* Subtle glow on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* See Case Studies CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Want to see the full story behind these results?
          </p>
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/case-studies">
              See Our Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;