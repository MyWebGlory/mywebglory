import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Crown, Repeat, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "ICP Targeting",
    description: "We find and attract the exact decision-makers who can buy from you.",
  },
  {
    icon: Crown,
    title: "Authority Positioning",
    description: "Your events build reputation, not just attendance lists.",
  },
  {
    icon: Repeat,
    title: "Conversion & Follow-Up",
    description: "Systems that turn attendees into pipeline — automatically.",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="solution">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We Don't "Promote Events".
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build event marketing systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
