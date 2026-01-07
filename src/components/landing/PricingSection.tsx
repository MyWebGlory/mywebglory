import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$9,000",
    description: "Perfect for smaller events and conferences up to 1,000 attendees.",
    icon: Zap,
    features: [
      "Single-channel ad campaigns",
      "Registration funnel setup",
      "Basic email reminder sequence",
      "Landing page design",
      "Weekly performance reports",
      "30-day campaign duration",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Scale",
    price: "$25,000",
    description: "For flagship events and conferences requiring maximum reach and results.",
    icon: Crown,
    features: [
      "Multi-channel campaigns (Meta, Google, LinkedIn)",
      "Complete marketing funnel system",
      "Advanced email & SMS sequences",
      "Retargeting & lookalike audiences",
      "Custom landing pages",
      "Real-time analytics dashboard",
      "Dedicated account strategist",
      "60-day campaign duration",
      "Post-event engagement campaigns",
    ],
    cta: "Let's Talk",
    popular: true,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your event. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary scale-[1.02]" 
                  : "bg-card border border-border hover:border-primary/30"
              } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.popular ? "bg-primary/20" : "bg-muted"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              
              <p className="text-muted-foreground mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full group py-6 text-lg ${
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90" 
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Need a custom solution? <a href="#" className="text-primary hover:underline">Contact us</a> for enterprise pricing.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
