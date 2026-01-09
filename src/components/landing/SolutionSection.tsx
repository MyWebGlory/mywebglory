import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Crown, Rocket, Zap, TrendingUp } from "lucide-react";

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

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="solution">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            We don't "promote events."
          </p>
          <p className="text-xl font-semibold text-primary">
            We engineer end-to-end event marketing systems:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              The event is just the trigger.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              The system is what makes money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
