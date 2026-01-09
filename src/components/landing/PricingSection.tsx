import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, ArrowRight, Zap, Crown, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Event Launch",
    subtitle: "Foundation",
    price: "$9,000",
    priceNote: "per event",
    description: "Test your event with solid fundamentals, quality leads, and controlled acquisition.",
    acquisitionFocus: "Organic + light paid",
    icon: Zap,
    features: [
      "Deep study & strategy (intake, ICP, funnel design)",
      "Messaging & positioning document",
      "1 channel acquisition (organic or light ads)",
      "Up to 3 static creatives or 1 video",
      "1 high-converting landing page",
      "6 emails + 2 SMS reminders",
      "Basic thank-you & replay sequence",
      "Performance summary & attendance report",
    ],
    notIncluded: [
      "CRM setup",
      "Lead qualification",
      "Phone calls",
      "Post-production content",
    ],
    baseRegistrants: [150, 300],
    attendanceRate: [0.35, 0.45] as [number, number],
    costPerRegistrant: 35,
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Event Growth",
    subtitle: "Pipeline",
    price: "$25,000",
    priceNote: "per event",
    description: "Generate sales-ready leads and build real pipeline from your events.",
    acquisitionFocus: "Multi-channel organic + ads",
    icon: Crown,
    features: [
      "Everything in Event Launch",
      "Competitor analysis & CTA strategy",
      "Slack + ClickUp workspace setup",
      "Up to 3 channels (organic + ads)",
      "Up to 10 creatives with optimization",
      "Landing page with 3 optimization cycles",
      "CRM setup + lead tagging & scoring",
      "Up to 1,000 phone calls + setter script",
      "11 emails + 4 SMS reminders",
      "5 short clips + 1 recap post",
    ],
    notIncluded: [
      "Sales closing",
      "Unlimited creatives",
      "Affiliate management",
    ],
    baseRegistrants: [400, 700],
    attendanceRate: [0.40, 0.55] as [number, number],
    costPerRegistrant: 22,
    cta: "Let's Talk",
    popular: true,
  },
  {
    name: "Event Dominance",
    subtitle: "Authority",
    price: "$50,000",
    priceNote: "per event",
    description: "Maximum reach, authority, FOMO, and deal flow. Full-scale multi-channel domination.",
    acquisitionFocus: "Ads-driven multi-channel",
    icon: Rocket,
    features: [
      "Everything in Event Growth",
      "Full business immersion & offer restructuring",
      "Premium brand & messaging system",
      "Up to 6 channels with outreach",
      "Up to 30 creatives (static, video, UGC, AI)",
      "Unlimited optimization cycles",
      "Landing page with 10 optimization cycles",
      "Advanced CRM + lead scoring + sales handoff",
      "Up to 3,000 phone calls",
      "15 emails + 6 SMS reminders",
      "15 short clips + 3 long-form videos",
      "Post-event authority engine (weeks of content)",
    ],
    notIncluded: [
      "Ad spend",
      "Sales closing",
      "Influencer fees",
    ],
    baseRegistrants: [800, 1500],
    attendanceRate: [0.45, 0.60] as [number, number],
    costPerRegistrant: 11,
    cta: "Apply Now",
    popular: false,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [adSpends, setAdSpends] = useState<{ [key: number]: number }>({
    0: 0,
    1: 5000,
    2: 15000,
  });
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const handleAdSpendChange = (planIndex: number, value: number[]) => {
    setAdSpends(prev => ({ ...prev, [planIndex]: value[0] }));
  };

  const getResults = (plan: typeof pricingPlans[0], index: number) => {
    const adSpend = adSpends[index] || 0;
    const adsRegistrants = adSpend > 0 ? Math.round(adSpend / plan.costPerRegistrant) : 0;
    
    const totalLow = plan.baseRegistrants[0] + Math.round(adsRegistrants * 0.85);
    const totalHigh = plan.baseRegistrants[1] + Math.round(adsRegistrants * 1.15);
    
    const attendeesLow = Math.round(totalLow * plan.attendanceRate[0]);
    const attendeesHigh = Math.round(totalHigh * plan.attendanceRate[1]);
    
    return {
      registrants: `${totalLow.toLocaleString()}–${totalHigh.toLocaleString()} qualified registrants`,
      attendanceRate: `${Math.round(plan.attendanceRate[0] * 100)}–${Math.round(plan.attendanceRate[1] * 100)}% attendance rate`,
      attendees: `${attendeesLow.toLocaleString()}–${attendeesHigh.toLocaleString()} live attendees`,
    };
  };

  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Our Offers</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Event Marketing Systems
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ICP-aligned attendees. Sales-ready leads. Authority & repeatability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {pricingPlans.map((plan, i) => {
            const results = getResults(plan, i);
            const visibleFeatures = showAllFeatures ? plan.features : plan.features.slice(0, 3);
            
            return (
              <div
                key={i}
                className={`relative p-8 rounded-2xl transition-all duration-300 flex flex-col ${
                  plan.popular 
                    ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary lg:scale-[1.02]" 
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
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                </div>
                
                <div className="mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{plan.priceNote}</p>
                <p className="text-xs text-muted-foreground/70 mb-4 font-light">{plan.acquisitionFocus}</p>
                
                <p className="text-muted-foreground mb-5 text-sm">{plan.description}</p>
                
                {/* Assured Results with Ad Spend Slider */}
                <div className={`mb-5 p-4 rounded-xl ${
                  plan.popular 
                    ? "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20" 
                    : "bg-muted/50 border border-border"
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    plan.popular ? "text-primary" : "text-secondary"
                  }`}>
                    ✓ Minimum Results
                  </p>
                  
                  <ul className="space-y-1.5 mb-4">
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      {results.registrants}
                    </li>
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      {results.attendanceRate}
                    </li>
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      {results.attendees}
                    </li>
                  </ul>
                  
                  {/* Ad Spend Slider inside results box */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground font-light">Ad spend</span>
                      <span className="text-sm font-medium text-foreground">
                        {adSpends[i] === 0 ? "$0" : `$${adSpends[i].toLocaleString()}`}
                      </span>
                    </div>
                    <Slider
                      value={[adSpends[i] || 0]}
                      onValueChange={(value) => handleAdSpendChange(i, value)}
                      min={0}
                      max={50000}
                      step={1000}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground font-light mt-2">
                      Results scale with your budget.
                    </p>
                  </div>
                </div>
                
                {/* Features with fade and see more */}
                <div className="relative mb-6 flex-1">
                  <ul className="space-y-3">
                    {visibleFeatures.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {!showAllFeatures && plan.features.length > 3 && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                  )}
                </div>
                
                {plan.features.length > 3 && (
                  <button
                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 font-light"
                  >
                    {showAllFeatures ? (
                      <>
                        See less <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        See more <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>
                )}
                
                <Button 
                  asChild
                  className={`w-full group py-6 text-lg mt-auto ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-muted-foreground mt-12 text-sm max-w-xl mx-auto">
          We promise ICP-aligned attendees, sales-ready leads, and authority — not revenue guarantees. That keeps us premium and accountable.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
