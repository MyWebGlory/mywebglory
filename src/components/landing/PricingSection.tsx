import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const COST_PER_REGISTRANT = 19;

const basePricingPlans = [
  {
    name: "Event Launch Engine",
    price: "$9,000",
    duration: "30–45 days",
    description: "For companies testing events or running them inconsistently. Validate demand and fill seats.",
    icon: Zap,
    features: [
      "1 event positioning & ICP definition",
      "1 conversion-focused landing page",
      "6 emails (3 pre-event, 2 reminder, 1 replay)",
      "4 SMS reminders",
      "5 promotional social posts",
      "CRM integration & lead capture",
      "Event branding & main visual",
      "Basic analytics & attendance tracking",
    ],
    baseResults: {
      registrants: { min: 150, max: 300 },
      attendanceRate: "35–45%",
      liveAttendees: "50–120",
    },
    hasAds: false,
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Event Revenue System",
    price: "$25,000",
    duration: "60–75 days",
    description: "For companies that want pipeline + sales, not just visibility. Turn events into revenue assets.",
    icon: Crown,
    features: [
      "Event positioning + offer alignment",
      "1 high-converting landing page",
      "11 emails (5 pre, 3 reminder, 3 post-event)",
      "6 SMS reminders",
      "10 social posts (pre + post event)",
      "Lead scoring & attendee segmentation",
      "Sales-ready tagging & lead routing",
      "5 short video clips + 1 SEO blog article",
      "Full analytics with CTA tracking",
    ],
    baseResults: {
      registrants: { min: 400, max: 700 },
      attendanceRate: "40–55%",
      liveAttendees: "160–350",
    },
    hasAds: true,
    cta: "Let's Talk",
    popular: true,
  },
  {
    name: "Event Authority Flywheel",
    price: "$49,000",
    duration: "90 days",
    description: "For companies serious about authority, pipeline, and long-term leverage. Build FOMO and deal flow.",
    icon: Rocket,
    features: [
      "Full 3-event series strategy",
      "3 high-converting landing pages",
      "39 emails across all events",
      "15 SMS reminders total",
      "20 social posts",
      "Advanced segmentation & lead scoring",
      "Sales handoff + calling coordination",
      "15 video clips + 3 SEO blog articles",
      "Event-to-revenue attribution reporting",
    ],
    baseResults: {
      registrants: { min: 1200, max: 2000 },
      attendanceRate: "45–60%",
      liveAttendees: "550–1,200",
    },
    hasAds: true,
    cta: "Apply Now",
    popular: false,
  },
];

const formatNumber = (num: number) => {
  return num.toLocaleString();
};

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [adSpend, setAdSpend] = useState(10000);

  const calculateRegistrants = (baseMin: number, baseMax: number, hasAds: boolean) => {
    if (!hasAds) {
      return { min: baseMin, max: baseMax };
    }
    const adRegistrants = Math.floor(adSpend / COST_PER_REGISTRANT);
    return {
      min: baseMin + adRegistrants,
      max: baseMax + adRegistrants,
    };
  };

  const calculateLiveAttendees = (registrantsMin: number, registrantsMax: number, attendanceRate: string) => {
    const rates = attendanceRate.replace('%', '').split('–').map(Number);
    const minRate = rates[0] / 100;
    const maxRate = rates[1] / 100;
    const min = Math.floor(registrantsMin * minRate);
    const max = Math.floor(registrantsMax * maxRate);
    return `${formatNumber(min)}–${formatNumber(max)}`;
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

        {/* Ad Spend Selector */}
        <div className={`max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-card border border-border ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-lg">Ad Budget Simulator</h3>
              <p className="text-sm text-muted-foreground">See how ad spend affects your registrants</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">${formatNumber(adSpend)}</span>
              <p className="text-xs text-muted-foreground">ad spend</p>
            </div>
          </div>
          <Slider
            value={[adSpend]}
            onValueChange={(value) => setAdSpend(value[0])}
            min={3000}
            max={50000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>$3,000</span>
            <span>$50,000</span>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            ~{formatNumber(Math.floor(adSpend / COST_PER_REGISTRANT))} additional registrants at ${COST_PER_REGISTRANT}/registrant
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {basePricingPlans.map((plan, i) => {
            const registrants = calculateRegistrants(
              plan.baseResults.registrants.min,
              plan.baseResults.registrants.max,
              plan.hasAds
            );
            const liveAttendees = plan.hasAds 
              ? calculateLiveAttendees(registrants.min, registrants.max, plan.baseResults.attendanceRate)
              : plan.baseResults.liveAttendees;

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
                
                {/* Assured Results - Between title and price */}
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
                  <ul className="space-y-1.5">
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      <span className={plan.hasAds ? "transition-all duration-300" : ""}>
                        {formatNumber(registrants.min)}–{formatNumber(registrants.max)} qualified registrants
                      </span>
                    </li>
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      {plan.baseResults.attendanceRate} attendance rate
                    </li>
                    <li className={`text-sm font-medium flex items-center gap-2 ${
                      plan.popular ? "text-foreground" : "text-foreground/90"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                      <span className={plan.hasAds ? "transition-all duration-300" : ""}>
                        {liveAttendees} live attendees
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{plan.duration}</p>
                
                <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                      <span className="text-foreground/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-3 rounded-lg bg-muted/30 border border-border/50 mb-6">
                  <p className="text-xs text-muted-foreground">
                    {plan.hasAds ? (
                      <>
                        <span className="font-medium text-foreground/80">Ad spend separate.</span> Use the slider above to see projected results.
                      </>
                    ) : (
                      <span className="font-medium text-foreground/80">No ads included in this package.</span>
                    )}
                  </p>
                </div>
                
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
