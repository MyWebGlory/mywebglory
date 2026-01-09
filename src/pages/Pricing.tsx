import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  Crown, 
  Rocket, 
  Building2,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  BarChart3,
  Video,
  Megaphone,
  Settings,
  Shield,
  Clock,
  DollarSign,
  Award
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PlanData {
  name: string;
  price: string;
  duration: string;
  icon: typeof Zap;
  popular: boolean;
  hasAds: boolean;
  costPerRegistrant: number;
  cta: string;
  tagline: string;
}

const plans: PlanData[] = [
  {
    name: "Event Launch Engine",
    price: "$9,000",
    duration: "30–45 days",
    icon: Zap,
    popular: false,
    hasAds: false,
    costPerRegistrant: 19,
    cta: "Get Started",
    tagline: "Test the waters"
  },
  {
    name: "Event Revenue System",
    price: "$25,000",
    duration: "60–75 days",
    icon: Crown,
    popular: true,
    hasAds: true,
    costPerRegistrant: 19,
    cta: "Most Popular",
    tagline: "Real pipeline"
  },
  {
    name: "Event Authority Flywheel",
    price: "$50,000",
    duration: "90 days",
    icon: Rocket,
    popular: false,
    hasAds: true,
    costPerRegistrant: 19,
    cta: "Go All In",
    tagline: "Full domination"
  },
  {
    name: "Enterprise / Custom",
    price: "Let's Talk",
    duration: "Flexible",
    icon: Building2,
    popular: false,
    hasAds: true,
    costPerRegistrant: 19,
    cta: "Contact Us",
    tagline: "Tailored solutions"
  },
];

interface ComparisonCategory {
  name: string;
  icon: typeof Settings;
  features: {
    name: string;
    tooltip?: string;
    values: (string | boolean | null)[];
  }[];
}

const comparisonData: ComparisonCategory[] = [
  {
    name: "Strategy & Research",
    icon: Target,
    features: [
      { name: "Client intake form", values: ["1", "1", "1", "Unlimited"] },
      { name: "Strategy call", values: ["90 min", "2 hours", "Weekly sync", "Dedicated PM"] },
      { name: "Market & ICP analysis", values: [true, true, true, true] },
      { name: "Competitor event analysis", values: [false, true, true, true] },
      { name: "Offer restructuring", values: [false, false, true, true] },
      { name: "Advanced segmentation", values: [false, false, true, true] },
    ]
  },
  {
    name: "Branding & Messaging",
    icon: Megaphone,
    features: [
      { name: "Messaging document", values: ["Basic PDF", "Full doc", "Premium system", "Custom"] },
      { name: "Event narrative", values: ["1", "Full positioning", "Long-term positioning", "Complete rebrand"] },
      { name: "Authority content angles", values: [false, "Speaker framing", "Full authority", "Multi-speaker"] },
    ]
  },
  {
    name: "Operations",
    icon: Settings,
    features: [
      { name: "Slack + ClickUp setup", values: [false, true, "Premium workspace", "White-label"] },
      { name: "Structured workflows", values: [false, true, true, true] },
      { name: "Weekly sync calls", values: [false, false, true, "Daily available"] },
      { name: "Dedicated project manager", values: [false, false, false, true] },
    ]
  },
  {
    name: "Acquisition Channels",
    icon: TrendingUp,
    features: [
      { name: "Number of channels", values: ["1", "Up to 3", "Up to 6", "Unlimited"] },
      { name: "Organic social posts", values: ["5", "12", "25", "Custom"] },
      { name: "Story frames", values: ["10", "20", "40", "Unlimited"] },
      { name: "DM/outreach scripts", values: [false, true, true, true] },
      { name: "Forum/community activation", values: [false, false, true, true] },
    ]
  },
  {
    name: "Paid Advertising",
    icon: DollarSign,
    features: [
      { name: "Ad account setup", values: ["1 account", "Full setup", "Multi-platform", "Enterprise"] },
      { name: "Creative rounds", values: ["1", "Up to 3", "Unlimited", "Unlimited"] },
      { name: "Number of creatives", values: ["Up to 3", "Up to 10", "Up to 30", "Unlimited"] },
      { name: "Video creatives", values: ["1", "Included", "UGC + AI", "Full production"] },
      { name: "Targeting setup", values: ["1 audience", "ICP + Lookalike", "Broad + LAL + Retargeting", "Custom audiences"] },
      { name: "Optimization cycles", values: ["None", "Iterative", "Unlimited", "Continuous"] },
    ]
  },
  {
    name: "Landing Page & Conversion",
    icon: BarChart3,
    features: [
      { name: "Landing pages", values: ["1", "1", "1", "Multiple"] },
      { name: "Optimization cycles", values: ["Single delivery", "3 cycles", "Up to 10", "Unlimited"] },
      { name: "Heatmaps & monitoring", values: [false, true, true, true] },
      { name: "A/B testing", values: [false, false, true, true] },
    ]
  },
  {
    name: "CRM & Lead Management",
    icon: Users,
    features: [
      { name: "CRM setup", values: [false, true, "Advanced", "Enterprise"] },
      { name: "Lead tagging system", values: [false, "Basic tags", "Lead scoring", "Custom pipeline"] },
      { name: "Sales handoff system", values: [false, false, true, true] },
      { name: "Pipeline visibility", values: [false, true, true, "Real-time dashboard"] },
    ]
  },
  {
    name: "Communication & Reminders",
    icon: Mail,
    features: [
      { name: "Pre-event emails", values: ["3", "5", "6", "Custom sequence"] },
      { name: "Reminder emails", values: ["2", "3", "4", "Unlimited"] },
      { name: "Post-event emails", values: ["1", "3", "5", "Nurture sequence"] },
      { name: "SMS reminders", values: ["2", "4", "6", "Custom"] },
      { name: "Phone calls", values: [false, "Up to 1,000", "Up to 3,000", "Dedicated team"] },
    ]
  },
  {
    name: "Post-Event Content",
    icon: Video,
    features: [
      { name: "Short clips", values: [false, "5", "15", "Full content plan"] },
      { name: "Long-form videos", values: [false, false, "3", "Unlimited"] },
      { name: "Authority posts", values: [false, "1 recap", "3 posts", "Ongoing"] },
      { name: "Weeks of post-activity", values: [false, "1 week", "Multi-week", "Continuous"] },
    ]
  },
  {
    name: "Reporting & Analytics",
    icon: BarChart3,
    features: [
      { name: "Attendee list", values: [true, true, true, true] },
      { name: "Performance summary", values: ["Basic", "Detailed", "Full funnel", "Executive dashboard"] },
      { name: "Channel breakdown", values: [true, true, true, true] },
      { name: "ROI analysis", values: [false, true, true, "Custom metrics"] },
      { name: "Strategic debrief", values: [false, false, true, true] },
    ]
  },
];

interface PerformanceMetric {
  name: string;
  icon: typeof Users;
  values: ([number, number] | string | null)[];
  highlight?: boolean;
}

const performanceData: PerformanceMetric[] = [
  { name: "Qualified Registrants", icon: Users, values: [[200, 350], [450, 800], [900, 1600], "Custom"] },
  { name: "Attendance Rate", icon: Target, values: ["45–55%", "50–60%", "55–65%", "Optimized"] },
  { name: "Live Attendees", icon: Users, values: [[90, 190], [225, 480], [495, 1040], "Scaled"] },
  { name: "Qualified Leads", icon: Target, values: [[15, 40], [40, 90], [120, 250], "Custom goals"] },
  { name: "New Followers", icon: TrendingUp, values: [[150, 350], [400, 800], [900, 1600], "Brand growth"] },
  { name: "Emails Collected", icon: Mail, values: [[200, 350], [450, 800], [900, 1600], "List building"] },
  { name: "SMS Collected", icon: MessageSquare, values: [[160, 280], [420, 640], [800, 1400], "Direct line"] },
  { name: "Booked Calls", icon: Phone, values: [[8, 20], [40, 80], [120, 240], "Pipeline"] },
  { name: "Sales Conversations", icon: Users, values: [null, [25, 60], [80, 180], "Qualified"] },
  { name: "Estimated New Clients", icon: Award, values: [null, [6, 18], [15, 45], "Growth target"], highlight: true },
];

const Pricing = () => {
  const [globalAdSpend, setGlobalAdSpend] = useState(10000);

  const getScaledValue = (baseValue: [number, number] | string | null, planIndex: number, costPerRegistrant: number): string => {
    if (baseValue === null) return "—";
    if (typeof baseValue === "string") return baseValue;
    
    const plan = plans[planIndex];
    
    if (!plan.hasAds || globalAdSpend === 0) {
      return `${baseValue[0].toLocaleString()}–${baseValue[1].toLocaleString()}`;
    }
    
    const adsRegistrants = Math.round(globalAdSpend / costPerRegistrant);
    const scaleFactor = 1 + (adsRegistrants / baseValue[0]) * 0.5;
    
    const scaled: [number, number] = [
      Math.round(baseValue[0] * scaleFactor),
      Math.round(baseValue[1] * scaleFactor)
    ];
    
    return `${scaled[0].toLocaleString()}–${scaled[1].toLocaleString()}`;
  };

  const formatValue = (value: string | boolean | null): React.ReactNode => {
    if (value === null) return <span className="text-muted-foreground">—</span>;
    if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
    return <span className="text-sm">{value}</span>;
  };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              
              <span className="inline-block text-primary font-semibold tracking-wide uppercase text-sm px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Investment Plans
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Choose Your{" "}
              <span className="text-gradient">Revenue Engine</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              <span className="text-foreground font-medium">While your competitors settle for basic events,</span> every dollar you invest today compounds into pipeline, authority, and long-term brand value.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              These aren't costs — <span className="text-primary font-semibold">they're multipliers</span>.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span>Performance Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Fast Implementation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Scalable Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOMO Banner */}
      <section className="py-6 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 border-y border-primary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-foreground font-semibold">
              ⚡ <span className="text-primary">Your competitors are already booking their spots.</span> We only take <span className="text-primary">4 clients per month</span> to ensure quality delivery
            </p>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Secure Your Spot <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plan Cards Overview - Simplified without sliders */}
      <section className="py-16 relative">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? "border-primary bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-lg shadow-primary/20" 
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-primary/20" : "bg-muted"
                }`}>
                  <plan.icon className={`w-7 h-7 ${plan.popular ? "text-primary" : "text-foreground"}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${
                    plan.popular 
                      ? "bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent animate-gradient-x" 
                      : ""
                  }`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Let's Talk" && (
                    <span className="text-muted-foreground text-sm"> /event</span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {plan.duration}
                </p>
                
                <div className="flex flex-col gap-2">
                  <Button 
                    asChild 
                    className={`w-full group ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    <Link to="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="ghost"
                    size="sm"
                    className="w-full text-muted-foreground hover:text-foreground"
                  >
                    <a href="#comparison">
                      Compare All Features
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Think <span className="text-primary">Investment</span>, Not Expense
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A $25,000 investment that generates 10+ new clients paying $5,000–$50,000 each isn't a cost — 
              <span className="text-foreground font-medium"> it's a 10x–20x return engine</span>. 
              <span className="text-primary font-medium"> While others experiment, you execute.</span> Plus, every event builds retargetable audiences, email lists, and brand authority that compound for years.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Immediate Pipeline</h3>
                <p className="text-sm text-muted-foreground">Qualified leads and booked calls from day one of your event — results your competitors can only dream of</p>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Audience Assets</h3>
                <p className="text-sm text-muted-foreground">Email lists, SMS lists, and retargeting pools you own forever — assets your competitors have to rebuild every time</p>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Authority Positioning</h3>
                <p className="text-sm text-muted-foreground">Brand authority that makes future sales easier and cheaper — while competitors struggle to be heard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results Table with Ad Spend Slider */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expected <span className="text-gradient">Performance Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Real numbers based on our track record. <span className="text-foreground font-medium">Results your competitors can only dream of.</span>
            </p>
            
            {/* Single Ad Spend Slider */}
            <div className="max-w-md mx-auto p-6 bg-card rounded-xl border border-border mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-left">
                  <span className="text-sm font-semibold text-foreground">Ad Budget Projection</span>
                  <p className="text-xs text-muted-foreground">Adjust to see scaled performance</p>
                </div>
                <span className="text-2xl font-bold text-primary">
                  ${globalAdSpend.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[globalAdSpend]}
                onValueChange={(value) => setGlobalAdSpend(value[0])}
                min={0}
                max={50000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$0</span>
                <span>$50,000</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-foreground font-bold w-64">Metric</TableHead>
                  {plans.map((plan, i) => (
                    <TableHead 
                      key={i} 
                      className={`text-center min-w-32 ${plan.popular ? "bg-primary/10" : ""}`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <plan.icon className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={`text-xs font-medium ${plan.popular ? "text-primary" : "text-muted-foreground"}`}>
                          {plan.name.split(" ")[0]}
                        </span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((metric, index) => (
                  <TableRow 
                    key={index} 
                    className={`border-border ${metric.highlight ? "bg-primary/5" : ""}`}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <metric.icon className={`w-4 h-4 ${metric.highlight ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={metric.highlight ? "text-primary font-bold" : ""}>
                          {metric.name}
                        </span>
                      </div>
                    </TableCell>
                    {metric.values.map((value, i) => (
                      <TableCell 
                        key={i} 
                        className={`text-center ${plans[i].popular ? "bg-primary/5" : ""} ${metric.highlight ? "font-bold text-primary" : ""}`}
                      >
                        {getScaledValue(value, i, plans[i].costPerRegistrant)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            * Results vary based on industry, offer, and execution. These are projected ranges based on historical performance.
          </p>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-16 bg-muted/30" id="comparison">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Feature <span className="text-primary">Comparison</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every detail of what's included in each plan. No hidden fees, no surprises. <span className="text-foreground font-medium">See exactly why competitors can't match our value.</span>
            </p>
          </div>
          
          <div className="overflow-x-auto">
            {comparisonData.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <div className="flex items-center gap-3 mb-4 px-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="text-foreground font-bold w-64">Feature</TableHead>
                        {plans.map((plan, i) => (
                          <TableHead 
                            key={i} 
                            className={`text-center min-w-32 ${plan.popular ? "bg-primary/10" : ""}`}
                          >
                            <span className={`text-xs font-semibold ${plan.popular ? "text-primary" : "text-muted-foreground"}`}>
                              {plan.price}
                            </span>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.features.map((feature, featureIndex) => (
                        <TableRow key={featureIndex} className="border-border">
                          <TableCell className="font-medium text-sm">{feature.name}</TableCell>
                          {feature.values.map((value, i) => (
                            <TableCell 
                              key={i} 
                              className={`text-center ${plans[i].popular ? "bg-primary/5" : ""}`}
                            >
                              {formatValue(value)}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Transparency: What's <span className="text-destructive">Not Included</span>
              </h2>
              <p className="text-muted-foreground">
                We believe in complete clarity. Here's what you'll need to budget separately.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-destructive" />
                  Media & Ad Spend
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>Ad spend budget (paid separately to platforms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>Influencer fees or affiliate payouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>UGC actor/editor costs (we coordinate, you pay)</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-destructive" />
                  Sales & Beyond
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>Sales closing (we generate leads, you close)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>Ongoing monthly management beyond scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span>Community management after event</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Turn Events Into{" "}
              <span className="text-gradient">Revenue Engines</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-4">
              <span className="text-foreground font-medium">Don't let competitors fill the room while you wait.</span> Book a strategy call and let's design your custom event marketing system.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              No pressure, just clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
                <Link to="/contact">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ⚡ Only 4 spots available this month
              </p>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              We promise ICP-aligned attendees, sales-ready leads, and authority — not revenue guarantees. 
              That keeps us premium and accountable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Pricing;
