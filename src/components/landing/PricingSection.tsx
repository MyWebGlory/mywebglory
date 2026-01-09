import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, ArrowRight, Zap, Crown, Rocket, ChevronDown, ChevronUp, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCategory {
  title: string;
  items: string[];
}

interface PerformanceData {
  registrants: [number, number];
  attendanceRate: [number, number];
  liveAttendees: [number, number];
  qualifiedLeads: [number, number];
  followers: [number, number];
  emails: [number, number];
  sms: [number, number];
  bookedCalls: [number, number];
  warmLeads?: [number, number];
  salesConversations?: [number, number];
  estimatedClients?: [number, number];
  longTerm: string[];
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
  performance: PerformanceData;
  costPerRegistrant: number;
  cta: string;
  popular: boolean;
  hasAds: boolean;
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
    performance: {
      registrants: [200, 350],
      attendanceRate: [45, 55],
      liveAttendees: [90, 190],
      qualifiedLeads: [15, 40],
      followers: [150, 350],
      emails: [200, 350],
      sms: [160, 280],
      bookedCalls: [8, 20],
      warmLeads: [5, 15],
      longTerm: [
        "Retargetable audience for next event",
        "Email list growth for content + upsells",
        "Improved funnel data for optimization",
      ],
    },
    costPerRegistrant: 19,
    cta: "Get Started",
    popular: false,
    hasAds: false,
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
    performance: {
      registrants: [450, 800],
      attendanceRate: [50, 60],
      liveAttendees: [225, 480],
      qualifiedLeads: [40, 90],
      followers: [400, 800],
      emails: [450, 800],
      sms: [420, 640],
      bookedCalls: [40, 80],
      salesConversations: [25, 60],
      estimatedClients: [6, 18],
      longTerm: [
        "Retargetable pools + lookalikes",
        "Email list for evergreen campaigns",
        "Stronger authority positioning",
        "Better data for future ads optimization",
      ],
    },
    costPerRegistrant: 19,
    cta: "Let's Talk",
    popular: true,
    hasAds: true,
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
    performance: {
      registrants: [900, 1600],
      attendanceRate: [55, 65],
      liveAttendees: [495, 1040],
      qualifiedLeads: [120, 250],
      followers: [900, 1600],
      emails: [900, 1600],
      sms: [800, 1400],
      bookedCalls: [120, 240],
      salesConversations: [80, 180],
      estimatedClients: [15, 45],
      longTerm: [
        "Evergreen retargeting pools",
        "Increased organic reach",
        "LOIs for future events",
        "Brand authority → easier sales",
      ],
    },
    costPerRegistrant: 19,
    cta: "Apply Now",
    popular: false,
    hasAds: true,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to middle plan
  const [adSpends, setAdSpends] = useState<{ [key: number]: number }>({
    0: 0,
    1: 5000,
    2: 15000,
  });
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const handleAdSpendChange = (planIndex: number, value: number[]) => {
    setAdSpends(prev => ({ ...prev, [planIndex]: value[0] }));
  };

  const getScaledPerformance = (plan: PricingPlan, index: number) => {
    const adSpend = adSpends[index] || 0;
    const perf = plan.performance;
    
    // Calculate additional registrants from ad spend
    const adsRegistrants = plan.hasAds && adSpend > 0 ? Math.round(adSpend / plan.costPerRegistrant) : 0;
    
    // Scale all metrics based on additional registrants
    const scaleFactor = adsRegistrants > 0 ? 1 + (adsRegistrants / perf.registrants[0]) * 0.5 : 1;
    
    const scale = (range: [number, number]): [number, number] => {
      if (!plan.hasAds) return range;
      return [
        Math.round(range[0] * scaleFactor),
        Math.round(range[1] * scaleFactor)
      ];
    };
    
    return {
      registrants: scale(perf.registrants),
      attendanceRate: perf.attendanceRate,
      liveAttendees: scale(perf.liveAttendees),
      qualifiedLeads: scale(perf.qualifiedLeads),
      followers: scale(perf.followers),
      emails: scale(perf.emails),
      sms: scale(perf.sms),
      bookedCalls: scale(perf.bookedCalls),
      warmLeads: perf.warmLeads ? scale(perf.warmLeads) : undefined,
      salesConversations: perf.salesConversations ? scale(perf.salesConversations) : undefined,
      estimatedClients: perf.estimatedClients ? scale(perf.estimatedClients) : undefined,
      longTerm: perf.longTerm,
    };
  };

  const formatRange = (range: [number, number]) => `${range[0].toLocaleString()}–${range[1].toLocaleString()}`;

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

  const plan = pricingPlans[selectedPlan];
  const scaledPerf = getScaledPerformance(plan, selectedPlan);
  const previewFeatures = getPreviewFeatures(plan);

  return (
    <section className="py-24 relative" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <span className="block text-primary font-medium tracking-wide uppercase text-sm">Our Offers</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Event Marketing Systems
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Price per event — ad spend not included
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto border-2 rounded-2xl overflow-hidden transition-colors duration-300 ${
          plan.popular ? "border-primary" : "border-border"
        } ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Tab Buttons - Connected to card below */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((p, i) => {
              const isSelected = selectedPlan === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedPlan(i);
                    setShowAllFeatures(false);
                  }}
                  className={`relative p-3 md:p-6 transition-all duration-200 ${
                    isSelected 
                      ? "bg-card ring-2 ring-primary/30 shadow-lg" 
                      : "bg-muted/50 hover:bg-muted/70 border border-border/30"
                  } ${i === 0 ? "rounded-t-xl md:rounded-t-none md:rounded-tl-xl" : ""} ${i === 2 ? "md:rounded-tr-xl" : ""}`}
                >
                  {p.popular && (
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 hidden md:block">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex md:flex-col items-center md:text-center gap-3 md:gap-2 md:pt-2">
                    {p.popular && (
                      <span className="md:hidden bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider absolute top-1 right-2">
                        Popular
                      </span>
                    )}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected && p.popular ? "bg-primary/20" : isSelected ? "bg-muted" : "bg-muted/50"
                    }`}>
                      <p.icon className={`w-5 h-5 md:w-6 md:h-6 ${
                        isSelected && p.popular ? "text-primary" : isSelected ? "text-foreground" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex flex-col items-start md:items-center">
                      <h3 className={`text-sm md:text-lg font-bold ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                        {p.name}
                      </h3>
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className={`font-bold ${
                          p.popular 
                            ? "text-xl md:text-3xl bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent animate-gradient-x" 
                            : `text-lg md:text-2xl ${isSelected ? "text-foreground" : "text-muted-foreground"}`
                        } ${!isSelected && !p.popular ? "opacity-60" : ""}`}>
                          {p.price}
                        </span>
                        <span className={`text-xs md:text-sm ${isSelected ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                          /event · {p.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Content Card - Connected to selected tab */}
          <div 
            key={selectedPlan}
            className="bg-card p-8 border-t border-border/50 animate-fade-in"
          >
            {/* Purpose & Focus */}
            <div className="mb-6">
              <p className="text-foreground/90 text-base leading-relaxed mb-2">{plan.purpose}</p>
              <p className="text-sm text-muted-foreground">
                Focus: {plan.acquisitionFocus}
              </p>
            </div>
            
            {/* Your Investment Returns - Comprehensive Results Box */}
            <div className={`mb-6 p-6 rounded-xl ${
              plan.popular 
                ? "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30" 
                : "bg-gradient-to-br from-muted/80 to-muted/40 border border-border"
            }`}>
              {/* Header with Ad Spend Slider */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h4 className={`text-lg font-bold mb-1 ${plan.popular ? "text-primary" : "text-foreground"}`}>
                    Your Investment Returns
                  </h4>
                  <p className="text-xs text-muted-foreground">Expected performance outcomes</p>
                </div>
                
                {/* Ad Spend Slider - Only for plans with ads */}
                {plan.hasAds && (
                  <div className="sm:w-48">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-muted-foreground">Ad Budget</span>
                      <span className={`text-sm font-semibold ${plan.popular ? "text-primary" : "text-foreground"}`}>
                        ${adSpends[selectedPlan].toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[adSpends[selectedPlan] || 0]}
                      onValueChange={(value) => handleAdSpendChange(selectedPlan, value)}
                      min={0}
                      max={50000}
                      step={1000}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {/* Results Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Audience Growth */}
                <div className="space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? "text-primary" : "text-secondary"}`}>
                    📈 Audience Growth
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Qualified Registrants</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.registrants)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Attendance Rate</span>
                      <span className="text-sm font-semibold text-foreground">{scaledPerf.attendanceRate[0]}–{scaledPerf.attendanceRate[1]}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Live Attendees</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.liveAttendees)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">New Followers</span>
                      <span className="text-sm font-semibold text-foreground">+{formatRange(scaledPerf.followers)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Lead Capture */}
                <div className="space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? "text-primary" : "text-secondary"}`}>
                    🎯 Lead Capture
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Qualified Leads</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.qualifiedLeads)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Emails Collected</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.emails)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">SMS Collected</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.sms)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Conversion Pipeline */}
                <div className="space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? "text-primary" : "text-secondary"}`}>
                    💼 Conversion Pipeline
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Booked Calls</span>
                      <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.bookedCalls)}</span>
                    </div>
                    {scaledPerf.warmLeads && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Warm Leads</span>
                        <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.warmLeads)}</span>
                      </div>
                    )}
                    {scaledPerf.salesConversations && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Sales Conversations</span>
                        <span className="text-sm font-semibold text-foreground">{formatRange(scaledPerf.salesConversations)}</span>
                      </div>
                    )}
                    {scaledPerf.estimatedClients && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Est. New Clients</span>
                        <span className={`text-sm font-bold ${plan.popular ? "text-primary" : "text-secondary"}`}>{formatRange(scaledPerf.estimatedClients)}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Long-Term Value */}
                <div className="space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? "text-primary" : "text-secondary"}`}>
                    🚀 Long-Term Value
                  </p>
                  <ul className="space-y-1.5">
                    {scaledPerf.longTerm.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Features with fade and see more */}
            <div className="relative mb-4">
              {!showAllFeatures ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-2">
                    <Check className={`w-4 h-4 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                    How We Do It
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-3 flex items-center gap-2">
                    <Check className={`w-4 h-4 ${plan.popular ? "text-primary" : "text-secondary"}`} />
                    How We Do It
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <X className="w-4 h-4 text-destructive/60" />
                      Not Included
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1.5">
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
              className={`w-full group py-6 text-lg ${
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
        </div>
        
        <p className="text-center text-muted-foreground mt-12 text-sm max-w-xl mx-auto">
          We promise ICP-aligned attendees, sales-ready leads, and authority — not revenue guarantees. That keeps us premium and accountable.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
