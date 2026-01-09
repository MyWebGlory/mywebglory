import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Building2, Target, Zap, BarChart3, Rocket, TrendingUp, Award, Lightbulb, Globe, Mail, Phone, MessageSquare, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Import Kornit assets
import kornitEventBanner from "@/assets/case-studies/kornit/event-banner.png";
import kornitEventPanel from "@/assets/case-studies/kornit/event-panel.png";
import kornitEmailMarketing from "@/assets/case-studies/kornit/email-marketing.png";
import kornitSocialPosts from "@/assets/case-studies/kornit/social-posts.png";
import kornitEventBanners from "@/assets/case-studies/kornit/event-banners.png";
import kornitSignatureBanners from "@/assets/case-studies/kornit/signature-banners.png";
import kornitClientComment1 from "@/assets/case-studies/kornit/client-comment-1.png";
import kornitClientComment2 from "@/assets/case-studies/kornit/client-comment-2.png";
import kornitClientComment3 from "@/assets/case-studies/kornit/client-comment-3.png";

// Types
interface SlideContent {
  title: string;
  points: string[];
  image?: string;
  imageAlt?: string;
}

interface ResultMetric {
  label: string;
  value: string;
  icon?: React.ElementType;
}

interface CaseStudyData {
  id: string;
  clientName: string;
  clientLogo?: string;
  industry: string;
  offerChosen: string;
  duration: string;
  boldOutcome: string;
  slides: {
    context: SlideContent;
    challenge: SlideContent;
    strategy: SlideContent;
    system: SlideContent;
    execution: SlideContent & { images?: string[] };
    results: { 
      metrics: ResultMetric[];
      highlights: string[];
    };
    longTermImpact: SlideContent;
    takeaway: { 
      insights: string[]; 
      quote?: { text: string; author: string };
      clientComments?: string[];
    };
  };
}

// Kornit Digital Case Study
const kornitCaseStudy: CaseStudyData = {
  id: "kornit-digital",
  clientName: "Kornit Digital",
  industry: "Apparel / Printing Technology",
  offerChosen: "Event Dominance — $50k",
  duration: "8 weeks (Sep–Oct 2025)",
  boldOutcome: "1,208 total registrations. Authority secured.",
  slides: {
    context: {
      title: "Context",
      points: [
        "Kornit Digital launched Evolve Summit 2025, their first large-scale virtual event under the Konnections brand.",
        "Objective: Build awareness, trust, and engagement for Kornit's innovative ecosystem — from zero.",
        "We engineered a full event system in just 8 weeks, turning a completely new brand identity into a recognized industry touchpoint.",
        "Global apparel producers, brands, and supply-chain innovators had never encountered 'Kornit Konnections' before.",
        "The goal: generate high-quality, revenue-ready registrations with authority and FOMO baked into every step."
      ],
      image: kornitEventBanner,
      imageAlt: "Kornit Konnections Evolve Summit 2025 Event Banner"
    },
    challenge: {
      title: "The Challenge",
      points: [
        "Launching a large-scale event from scratch is brutal.",
        "No organic traffic. No historical event data.",
        "Audience: cold, highly specialized — apparel decorators, print-on-demand operators, brand decision-makers.",
        "Timeline: 8 weeks — aggressive, high-stakes.",
        "The challenge was to build a full-funnel system, create content assets, coordinate partners, and drive registrations without losing quality."
      ]
    },
    strategy: {
      title: "The Strategy",
      points: [
        "Deep ICP analysis → messaging library tailored to apparel industry pain points",
        "Event positioning → clear, benefit-driven narrative that resonated with decision-makers",
        "Acquisition plan → organic + Meta ads + email campaigns working in sync",
        "Partner engagement → toolkits, trackable links, QR codes for amplification",
        "Post-event leverage → clips, recordings, highlights for ongoing content"
      ]
    },
    system: {
      title: "The System",
      points: [
        "Landing page → high-converting, fully branded experience",
        "CRM integration → lead qualification & segmentation from day one",
        "Reminder & activation flows → email, SMS, and phone outreach",
        "Ads → Meta campaigns with lookalike audiences and iterative creative testing",
        "Organic → social posts, stories, community activations",
        "Partner toolkit → dozens of trackable links, assets, QR codes",
        "Slack, ClickUp, Drive → efficient coordination with partners fully integrated"
      ],
      image: kornitEventPanel,
      imageAlt: "Live event panel with engaged audience discussion"
    },
    execution: {
      title: "Execution",
      points: [
        "Graphic design: banners, PDFs, slides — all premium quality",
        "Social media posts & stories — consistent, branded content",
        "Event videos & trailers — high-energy, attention-grabbing",
        "Meta Ads campaign → multiple creative rounds, targeting cold and lookalike audiences",
        "Emails → to existing leads + ad-generated leads",
        "Calls & SMS → high-touch activation for high-value registrants",
        "Post-production: session recordings, clips, highlight reels"
      ],
      images: [kornitSocialPosts, kornitEventBanners, kornitSignatureBanners, kornitEmailMarketing]
    },
    results: {
      metrics: [
        { label: "Total Registrations", value: "1,208", icon: Users },
        { label: "Paid Ad Registrations", value: "528", icon: Target },
        { label: "Live Attendance", value: "~503", icon: Calendar },
        { label: "Emails Sent", value: "4,438", icon: Mail },
        { label: "SMS Sent", value: "18,840+", icon: MessageSquare },
        { label: "Phone Outreach", value: "2,044", icon: Phone },
        { label: "Geographic Reach", value: "64 countries", icon: Globe },
        { label: "US Audience", value: "73%", icon: Users }
      ],
      highlights: [
        "Meta Ads CPR: $9.50 — top-quartile B2B performance",
        "CTR: 2.33% — well above industry average (1-1.5%)",
        "AI & UGC creatives drove 75% of ad registrations",
        "Multi-touch flows (email + SMS + phone) significantly boosted show-up rate"
      ]
    },
    longTermImpact: {
      title: "Long-term Impact",
      points: [
        "Partners engaged with trackable assets, building long-term network visibility",
        "Hundreds of video assets, clips, and session recordings → repurposable content library",
        "Email/SMS lists → ready for future campaigns and nurturing",
        "Authority established in apparel and printing ecosystem",
        "Proven system → scalable blueprint for future Kornit events"
      ]
    },
    takeaway: {
      insights: [
        "8 weeks from zero to 1,208 registrations proves the power of a fully orchestrated system.",
        "Integration of creative, ads, reminders, partners, and post-production maximizes pipeline and authority.",
        "The winning formula: human + automation + ICP precision.",
        "Future Kornit events can scale faster using this blueprint."
      ],
      clientComments: [kornitClientComment1, kornitClientComment2, kornitClientComment3]
    }
  }
};

// All case studies (Kornit is the real one, others are placeholders for structure)
const caseStudies: CaseStudyData[] = [
  kornitCaseStudy
];

// Slide icon mapping
const slideIcons = {
  context: Building2,
  challenge: Target,
  strategy: Zap,
  system: BarChart3,
  execution: Rocket,
  results: TrendingUp,
  longTermImpact: Award,
  takeaway: Lightbulb
};

// Hero Section
const CaseStudiesHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Case Studies
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How Events Become{" "}
            <span className="text-primary">Revenue Systems</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real events. Real businesses. Real pipelines.
            <br />
            Each case study shows how we engineered demand, authority, and results.
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Story Slide Component
const StorySlide = ({ 
  slideNumber, 
  type, 
  content, 
  caseStudy 
}: { 
  slideNumber: number; 
  type: keyof typeof slideIcons; 
  content: CaseStudyData['slides'][keyof CaseStudyData['slides']];
  caseStudy: CaseStudyData;
}) => {
  const Icon = slideIcons[type];
  
  const renderContent = () => {
    if (type === 'results') {
      const resultsContent = content as CaseStudyData['slides']['results'];
      return (
        <div className="space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {resultsContent.metrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-primary/10 rounded-xl p-3 sm:p-4 text-center"
                >
                  {MetricIcon && (
                    <MetricIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
                  )}
                  <div className="text-lg sm:text-2xl font-bold text-primary mb-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Performance Highlights */}
          <div className="bg-card/50 rounded-xl p-4 sm:p-6 border border-border/50">
            <h4 className="text-sm font-semibold mb-3 text-primary">Performance Highlights</h4>
            <ul className="space-y-2">
              {resultsContent.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    
    if (type === 'takeaway') {
      const takeawayContent = content as CaseStudyData['slides']['takeaway'];
      return (
        <div className="space-y-6">
          {/* Key Insights */}
          <div className="space-y-3">
            {takeawayContent.insights.map((insight, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm sm:text-base text-foreground/90 border-l-2 border-primary pl-4"
              >
                {insight}
              </motion.p>
            ))}
          </div>
          
          {/* Client Comments */}
          {takeawayContent.clientComments && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-primary">What the Client Said</h4>
              <div className="grid grid-cols-1 gap-3">
                {takeawayContent.clientComments.map((comment, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <img 
                      src={comment} 
                      alt={`Client testimonial ${idx + 1}`}
                      className="rounded-lg border border-border/50 shadow-sm max-w-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg font-medium text-center pt-4 border-t border-border/50"
          >
            When you work with us, your success doesn't just happen.
            <br />
            <span className="text-primary">It runs through MWG.</span>
          </motion.p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/how-it-works">
                See How This Applies to You
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      );
    }

    if (type === 'execution') {
      const execContent = content as SlideContent & { images?: string[] };
      return (
        <div className="space-y-4">
          <ul className="space-y-2">
            {execContent.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground/80">{point}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Execution Images Grid */}
          {execContent.images && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {execContent.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg overflow-hidden border border-border/50"
                >
                  <img 
                    src={img} 
                    alt={`Execution asset ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Default content rendering for other slide types
    const slideContent = content as SlideContent;
    return (
      <div className="space-y-4">
        <ul className="space-y-2 sm:space-y-3">
          {slideContent.points.map((point, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">{point}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* Slide Image */}
        {slideContent.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 rounded-xl overflow-hidden border border-border/50 shadow-lg"
          >
            <img 
              src={slideContent.image} 
              alt={slideContent.imageAlt || "Case study visual"}
              className="w-full h-auto"
            />
          </motion.div>
        )}
      </div>
    );
  };
  
  const getSlideTitle = () => {
    if (type === 'results') return 'Results';
    if (type === 'takeaway') return 'Key Takeaway';
    if (type === 'longTermImpact') return 'Long-term Impact';
    return (content as SlideContent).title;
  };
  
  return (
    <div className="relative min-h-[500px] sm:min-h-[550px] flex flex-col justify-start px-4 sm:px-8 py-6 overflow-y-auto">
      {/* Large slide number watermark */}
      <div className="absolute top-2 right-4 sm:top-4 sm:right-8 text-[60px] sm:text-[100px] font-bold text-primary/5 select-none pointer-events-none">
        {String(slideNumber).padStart(2, '0')}
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">{getSlideTitle()}</h3>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

// Horizontal Story Band with Carousel
const HorizontalStoryBand = ({ caseStudy }: { caseStudy: CaseStudyData }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const slideTypes: (keyof typeof slideIcons)[] = [
    'context', 'challenge', 'strategy', 'system', 
    'execution', 'results', 'longTermImpact', 'takeaway'
  ];
  
  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slideTypes.map((type, index) => (
            <CarouselItem key={type} className="pl-0 basis-full">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl mx-2 sm:mx-4">
                <StorySlide
                  slideNumber={index + 1}
                  type={type}
                  content={caseStudy.slides[type]}
                  caseStudy={caseStudy}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-4 px-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 h-10 w-10" />
          
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {slideTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
          
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 h-10 w-10" />
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 mx-4 h-1 bg-border/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: '12.5%' }}
            animate={{ width: `${((current + 1) / slideTypes.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Carousel>
    </div>
  );
};

// Case Header
const CaseHeader = ({ 
  caseStudy, 
  onExplore,
  isExpanded 
}: { 
  caseStudy: CaseStudyData; 
  onExplore: () => void;
  isExpanded: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Client Logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center border border-border/50 overflow-hidden">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              K
            </span>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{caseStudy.clientName}</h2>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                {caseStudy.industry}
              </span>
              <span className="text-xs text-muted-foreground">
                {caseStudy.offerChosen}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {caseStudy.duration}
            </p>
          </div>
        </div>
        
        <Button 
          onClick={onExplore}
          variant={isExpanded ? "secondary" : "default"}
          className="group sm:self-start"
        >
          {isExpanded ? "Collapse" : "Explore Case"}
          <ChevronRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
        </Button>
      </div>
      
      <p className="text-lg sm:text-xl font-medium text-primary">
        {caseStudy.boldOutcome}
      </p>
    </motion.div>
  );
};

// Case Module
const CaseModule = ({ caseStudy, index }: { caseStudy: CaseStudyData; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First case expanded by default
  const moduleRef = useRef<HTMLDivElement>(null);
  
  const handleExplore = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && moduleRef.current) {
      setTimeout(() => {
        moduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };
  
  return (
    <motion.div
      ref={moduleRef}
      id={caseStudy.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="scroll-mt-24"
    >
      <div className="bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 sm:p-8">
        <CaseHeader 
          caseStudy={caseStudy} 
          onExplore={handleExplore}
          isExpanded={isExpanded}
        />
        
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-6 border-t border-border/50">
            <HorizontalStoryBand caseStudy={caseStudy} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Build Your{" "}
          <span className="text-primary">Revenue System</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Every case study started with a conversation. Let's explore what's possible for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <Link to="/how-it-works">
              See How We Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Book Strategy Call</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

// Main Page Component
const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <CaseStudiesHero />
        
        {/* Case Studies List */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-8 sm:space-y-12">
              {caseStudies.map((caseStudy, index) => (
                <CaseModule 
                  key={caseStudy.id} 
                  caseStudy={caseStudy} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
