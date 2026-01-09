import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Target, Sparkles, CalendarX, StopCircle } from "lucide-react";

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

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-destructive">
            But Most Events Fail
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not because events don't work — but because they're built backwards.
          </p>
        </div>

        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <p className="text-lg text-muted-foreground">Most events:</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`relative p-5 rounded-2xl bg-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-base font-bold mb-1">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Results Box */}
        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30">
            <p className="text-center text-lg font-bold text-destructive mb-4">Result:</p>
            <div className="grid grid-cols-2 gap-3">
              {results.map((result, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;