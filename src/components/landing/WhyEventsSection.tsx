import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Shield, MessageSquare, Database, TrendingUp, DollarSign, Zap, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Users,
    text: "Attract hundreds of your exact ICP at once",
  },
  {
    icon: Shield,
    text: "Build trust, authority, and urgency in real time",
  },
  {
    icon: MessageSquare,
    text: "Generate sales conversations at scale",
  },
  {
    icon: Database,
    text: "Create content, audiences, and data you can reuse for months",
  },
];

const outcomes = [
  { icon: TrendingUp, text: "Feed your pipeline" },
  { icon: Users, text: "Grow your audience" },
  { icon: DollarSign, text: "Lower your future ad costs" },
  { icon: Zap, text: "Increase deal velocity" },
];

const WhyEventsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="why-events">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Events Are the Fastest Way to Grow Revenue
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Events compress months of marketing into days.
          </p>
        </div>
        
        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Single Event Outcomes */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              A single well-executed event can:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <outcome.icon className="w-6 h-6 text-primary" />
                <p className="text-sm font-medium text-center">{outcome.text}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              When done right, events are not marketing.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              They're revenue engines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEventsSection;
