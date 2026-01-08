import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Users, TrendingDown, CalendarX, Repeat } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Low Attendance",
    description: "Empty seats and wasted investment on events nobody shows up to.",
  },
  {
    icon: TrendingDown,
    title: "Poor Lead Quality",
    description: "Attendees who will never buy — wrong titles, wrong companies, wrong intent.",
  },
  {
    icon: CalendarX,
    title: "No Post-Event Follow-Up",
    description: "Leads go cold because there's no system to convert attention into pipeline.",
  },
  {
    icon: Repeat,
    title: "No System, Just One-Offs",
    description: "Each event starts from zero. No compounding, no flywheel, no leverage.",
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Most Events Fail.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            They attract the wrong people — or no one converts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl bg-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
