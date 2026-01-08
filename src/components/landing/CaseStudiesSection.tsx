import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { TrendingUp, Users, DollarSign } from "lucide-react";

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

const CaseStudiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="results">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Proven Results</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Data That Drives Wins
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real events. Unstoppable results. See what's possible when bold vision meets flawless execution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {study.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{study.title}</h3>
              
              <div className="space-y-4 mb-6">
                {study.stats.map((stat, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
