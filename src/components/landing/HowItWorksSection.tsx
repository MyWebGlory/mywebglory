import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Lightbulb, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "We learn your event, audience, and mission. No fluff—just a razor-focused strategy session to find your North-Star.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Setup",
    description: "We architect your custom marketing system—precision ads, funnels, emails, and automations tailored to dominate your market.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description: "Campaigns go live. We monitor, test, and optimize in real-time for maximum ROI—keeping your budget lean and results mean.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Deliver Attendees",
    description: "Watch your registration count climb. Our reminder sequences ensure attendees actually show up—turning signups into impact.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" id="process">
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">The Process</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Architect Your Event's Triumph
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven four-step process that consistently delivers sold-out events. Data-driven with razor-sharp precision.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div className="text-6xl font-bold text-muted/30 mb-4">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-all hover:scale-110 hover:bg-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
