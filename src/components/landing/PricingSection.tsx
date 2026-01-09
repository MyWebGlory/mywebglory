import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, ArrowRight, Zap, Crown, Rocket, ChevronDown, ChevronUp, X } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCategory {
  title: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  purpose: string;
  acquisitionFocus: string;
  icon: typeof Zap;
  featureCategories: FeatureCategory[];
  notIncluded: string[];
  baseRegistrants: [number, number];
  attendanceRate: [number, number];
  attendeesRange: [number, number];
  extraResult?: string;
  costPerRegistrant: number;
  cta: string;
  popular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Event Launch Engine",
    price: "$9,000",
    duration: "30–45 days",
    purpose: "🚀 Ready to test the waters? Launch your event with solid fundamentals, attract quality leads, and see what's possible!",
    acquisitionFocus: "Organic + light paid",
    icon: Zap,
    featureCategories: [
      {
        title: "🎯 Deep Study & Strategy",
        items: [
          "1 client intake form",
          "1 strategy call (90 min)",
          "Market + ICP analysis",
          "Event angle & offer alignment",
          "High-level funnel & pipeline design",
        ],
      },
      {
        title: "✨ Branding & Messaging",
        items: [
          "Messaging & positioning document (PDF)",
          "Tone, wording, ICP pain points",
          "1 event narrative",
        ],
      },
      {
        title: "📢 Acquisition Setup",
        items: [
          "1 channel only (chosen strategically)",
          "Organic acquisition plan OR light ads",
          "Ads: 1 ad account setup, 1 creative round, up to 3 static creatives OR 1 video, 1 targeting setup",
          "Organic: 5 social posts, 10 story frames, comment/engagement plan",
        ],
      },
      {
        title: "🎯 Event Conversion",
        items: [
          "1 branded, high-converting landing page",
          "Single delivery (no optimization cycles)",
        ],
      },
      {
        title: "📧 Communication & Reminders",
        items: [
          "6 emails (3 pre-event, 2 reminder, 1 post-event)",
          "2 SMS reminders",
          "No phone calls",
        ],
      },
      {
        title: "📊 Post-Event & Reporting",
        items: [
          "Basic thank-you & replay email",
          "Attendee list + performance summary",
          "Registrations & attendance rate tracking",
          "Acquisition channel breakdown",
        ],
      },
    ],
    notIncluded: [
      "CRM setup or integration",
      "Lead qualification",
      "Phone calls",
      "Advanced ads optimization",
      "Post-production content",
      "Sales closing",
      "Media buying budget",
    ],
    baseRegistrants: [150, 300],
    attendanceRate: [0.35, 0.45],
    attendeesRange: [50, 120],
    costPerRegistrant: 35,
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Event Revenue System",
    price: "$25,000",
    duration: "60–75 days",
    purpose: "💰 Time to turn events into real pipeline! Generate sales-ready leads and watch your revenue grow.",
    acquisitionFocus: "Multi-channel organic + ads",
    icon: Crown,
    featureCategories: [
      {
        title: "🎯 Deep Study & Strategy",
        items: [
          "Everything in $9k plan",
          "Competitor event analysis",
          "CTA & monetization strategy",
        ],
      },
      {
        title: "✨ Branding & Messaging",
        items: [
          "Full messaging & branding doc",
          "Event + offer positioning",
          "Speaker / brand authority framing",
        ],
      },
      {
        title: "🔧 Operations & Communication",
        items: [
          "Slack + ClickUp setup",
          "Structured workflows",
          "Shared Drive organization",
        ],
      },
      {
        title: "📢 Acquisition Setup",
        items: [
          "Up to 3 channels combined",
          "Organic + Ads strategy",
          "Ads: up to 3 creative rounds, up to 10 creatives (static + video), ICP targeting + 1 lookalike, iterative optimization",
          "Organic: 12 social posts, 20 story frames, DM/outreach strategy with scripts",
        ],
      },
      {
        title: "🎯 Event Conversion",
        items: [
          "1 landing page with 3 optimization cycles",
          "Heatmaps & engagement monitoring",
          "Conversion improvements",
        ],
      },
      {
        title: "🏷️ CRM & Lead Qualification",
        items: [
          "CRM setup or integration",
          "Lead tagging: Attended, Interested, Warm, Dead",
          "Pipeline visibility",
        ],
      },
      {
        title: "📧 Reminders & Activation",
        items: [
          "Up to 1,000 phone calls with custom script",
          "11 emails (5 pre-event, 3 reminder, 3 post-event)",
          "4 SMS reminders",
        ],
      },
      {
        title: "📊 Post-Event & Reporting",
        items: [
          "Lead follow-up flows & nurture emails",
          "5 short clips + 1 recap post",
          "Funnel analytics & lead quality breakdown",
          "Event performance report",
        ],
      },
    ],
    notIncluded: [
      "Sales closing",
      "Unlimited creatives",
      "Unlimited channels",
      "Affiliate program management",
      "Ongoing community management",
      "Media buying budget",
    ],
    baseRegistrants: [400, 700],
    attendanceRate: [0.40, 0.55],
    attendeesRange: [160, 350],
    extraResult: "Sales-ready leads identified",
    costPerRegistrant: 22,
    cta: "Let's Talk",
    popular: true,
  },
  {
    name: "Event Authority Flywheel",
    price: "$50,000",
    duration: "90 days",
    purpose: "👑 Go all in! Maximum reach, unstoppable authority, serious FOMO, and a pipeline that keeps flowing.",
    acquisitionFocus: "Full-scale, ads-driven, multi-channel domination",
    icon: Rocket,
    featureCategories: [
      {
        title: "🎯 Deep Study & Strategy",
        items: [
          "Full business immersion",
          "Offer restructuring if needed",
          "Advanced ICP & segmentation",
          "Event authority & FOMO strategy",
        ],
      },
      {
        title: "✨ Branding & Messaging",
        items: [
          "Premium brand & messaging system",
          "Event narrative + long-term positioning",
          "Authority content angles",
        ],
      },
      {
        title: "🔧 Operations & Team Integration",
        items: [
          "Premium ClickUp workspace",
          "MWG departments & workflows",
          "Weekly sync calls",
          "Full process streamlining",
        ],
      },
      {
        title: "📢 Acquisition Setup",
        items: [
          "Up to 6 channels (Organic + Ads + Outreach)",
          "Unlimited optimization cycles",
          "Up to 30 creatives (static, video, UGC, AI)",
          "Multiple targeting: Broad, Lookalike, Retargeting",
          "Continuous testing & scaling",
          "UGC actors/editors coordination (cost not included)",
          "Organic: 25 posts, 40 story frames, forum/community activation",
          "DM & email outreach campaigns",
        ],
      },
      {
        title: "🎯 Event Conversion",
        items: [
          "1 landing page with up to 10 optimization cycles",
          "UX, copy, conversion path testing",
          "Form vs page testing",
        ],
      },
      {
        title: "🏷️ CRM & Lead Qualification",
        items: [
          "Advanced CRM setup with custom pipeline stages",
          "Lead scoring system",
          "Sales handoff system",
        ],
      },
      {
        title: "📧 Reminders & Activation",
        items: [
          "Up to 3,000 phone calls",
          "15 emails (6 pre-event, 4 reminder, 5 post-event)",
          "6 SMS reminders",
        ],
      },
      {
        title: "🚀 Post-Event Authority Engine",
        items: [
          "15 short clips + 3 long-form videos",
          "3 authority posts",
          "Weeks of post-event activity",
          "Audience retention & FOMO building",
        ],
      },
      {
        title: "📊 Reporting",
        items: [
          "Full funnel analytics",
          "Acquisition ROI by channel",
          "Lead quality & pipeline impact",
          "Strategic debrief report",
        ],
      },
    ],
    notIncluded: [
      "Ad spend",
      "Sales closing",
      "Affiliate payout budgets",
      "Influencer fees",
      "Ongoing monthly management beyond event scope",
    ],
    baseRegistrants: [800, 1500],
    attendanceRate: [0.45, 0.60],
    attendeesRange: [360, 900],
    extraResult: "Strong pipeline + authority effect",
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

  const getResults = (plan: PricingPlan, index: number) => {
    const adSpend = adSpends[index] || 0;
    const adsRegistrants = adSpend > 0 ? Math.round(adSpend / plan.costPerRegistrant) : 0;
    
    const totalLow = plan.baseRegistrants[0] + Math.round(adsRegistrants * 0.85);
    const totalHigh = plan.baseRegistrants[1] + Math.round(adsRegistrants * 1.15);
    
    const attendeesLow = Math.round(totalLow * plan.attendanceRate[0]);
    const attendeesHigh = Math.round(totalHigh * plan.attendanceRate[1]);
    
    return {
      registrants: `${totalLow.toLocaleString()}–${totalHigh.toLocaleString()} qualified registrants`,
      attendanceRate: `${Math.round(plan.attendanceRate[0] * 100)}–${Math.round(plan.attendanceRate[1] * 100)}% attendance`,
      attendees: `${attendeesLow.toLocaleString()}–${attendeesHigh.toLocaleString()} live attendees`,
    };
  };

  // Get first 3 feature items across all categories for preview
  const getPreviewFeatures = (plan: PricingPlan) => {
    const allItems: { category: string; item: string }[] = [];
    for (const cat of plan.featureCategories) {
      for (const item of cat.items) {
        allItems.push({ category: cat.title, item });
        if (allItems.length >= 3) break;
      }
      if (allItems.length >= 3) break;
    }
    return allItems;
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
            Price per event — ad spend not included
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">
          {pricingPlans.map((plan, i) => {
            const results = getResults(plan, i);
            const previewFeatures = getPreviewFeatures(plan);
            
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
                
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">/ event</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{plan.duration}</p>
                
                <p className="text-foreground/90 mb-2 text-sm leading-relaxed">{plan.purpose}</p>
                <p className="text-xs text-muted-foreground mb-5 italic">
                  📍 Focus: {plan.acquisitionFocus}
                </p>
                
                {/* Assured Results with Ad Spend Slider */}
                <div className={`mb-5 p-4 rounded-xl ${
                  plan.popular 
                    ? "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20" 
                    : "bg-muted/50 border border-border"
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    plan.popular ? "text-primary" : "text-secondary"
                  }`}>
                    ✓ Minimum Results Guaranteed
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
                    {plan.extraResult && (
                      <li className={`text-sm font-medium flex items-center gap-2 ${
                        plan.popular ? "text-foreground" : "text-foreground/90"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-primary" : "bg-secondary"}`} />
                        {plan.extraResult}
                      </li>
                    )}
                  </ul>
                  
                  {/* Ad Spend Slider inside results box */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground font-light">💸 Ad spend</span>
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
                      Results scale with your budget ↑
                    </p>
                  </div>
                </div>
                
                {/* Features with fade and see more */}
                <div className="relative mb-4 flex-1">
                  {!showAllFeatures ? (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                        📦 What's Included
                      </p>
                      <ul className="space-y-2">
                        {previewFeatures.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                            <span className="text-foreground/90 text-sm">{feature.item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3">
                        📦 What's Included
                      </p>
                      <div className="space-y-4">
                        {plan.featureCategories.map((category, catIndex) => (
                          <div key={catIndex}>
                            <p className="text-xs font-semibold text-foreground/80 mb-2">{category.title}</p>
                            <ul className="space-y-1.5 pl-1">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2">
                                  <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                                  <span className="text-foreground/80 text-xs">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Not Included Section */}
                      <div className="mt-5 pt-4 border-t border-border/50">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          ❌ Not Included
                        </p>
                        <ul className="space-y-1.5">
                          {plan.notIncluded.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-destructive/60" />
                              <span className="text-muted-foreground text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                
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
                      See all features <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
                
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
