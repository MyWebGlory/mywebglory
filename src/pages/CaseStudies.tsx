import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Building2, Target, Zap, BarChart3, Rocket, TrendingUp, Award, Lightbulb } from "lucide-react";
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

// Types
interface SlideContent {
  title: string;
  points: string[];
}

interface CaseStudyData {
  id: string;
  clientName: string;
  industry: string;
  offerChosen: string;
  boldOutcome: string;
  slides: {
    context: SlideContent;
    challenge: SlideContent;
    strategy: SlideContent;
    system: SlideContent;
    execution: SlideContent;
    results: { metrics: { label: string; value: string }[] };
    longTermImpact: SlideContent;
    takeaway: { insights: string[]; quote?: { text: string; author: string } };
  };
}

// Placeholder case studies data
const caseStudies: CaseStudyData[] = [
  {
    id: "case-1",
    clientName: "TechScale Solutions",
    industry: "B2B SaaS",
    offerChosen: "Event Dominance — $50k",
    boldOutcome: "1,200+ ICP registrants. Authority secured.",
    slides: {
      context: {
        title: "Context",
        points: [
          "Enterprise SaaS platform targeting CFOs at mid-market companies",
          "Strong product, but low market awareness in a crowded space",
          "Needed to establish thought leadership quickly",
          "Chose MWG to engineer a flagship industry event"
        ]
      },
      challenge: {
        title: "The Challenge",
        points: [
          "Fill 1,000+ seats with qualified decision-makers",
          "Position the brand as the category leader",
          "Generate pipeline worth 10x the investment",
          "Execute flawlessly with 8-week timeline"
        ]
      },
      strategy: {
        title: "The Strategy",
        points: [
          "Positioned event as 'The CFO Summit' — not a product pitch",
          "Targeted ICP through precision paid media",
          "Built authority through speaker curation",
          "Engineered every touchpoint for conversion"
        ]
      },
      system: {
        title: "The System",
        points: [
          "Multi-channel acquisition funnel",
          "Automated reminder & nurture sequences",
          "CRM integration for real-time lead scoring",
          "Post-event follow-up automation"
        ]
      },
      execution: {
        title: "Execution",
        points: [
          "42 unique ad creatives tested",
          "Landing page conversion rate: 34%",
          "3 reminder sequences with 89% open rate",
          "Day-of activation team of 12"
        ]
      },
      results: {
        metrics: [
          { label: "Registrants", value: "1,247" },
          { label: "Attendance Rate", value: "78%" },
          { label: "Qualified Leads", value: "412" },
          { label: "Pipeline Generated", value: "$2.4M" }
        ]
      },
      longTermImpact: {
        title: "Long-term Impact",
        points: [
          "12,000+ retargeting audience built",
          "47 content assets created",
          "Industry recognition as thought leader",
          "Foundation for quarterly event series"
        ]
      },
      takeaway: {
        insights: [
          "Events are not one-time marketing activities. They're system-building opportunities.",
          "The real ROI comes from what you build, not what you run."
        ],
        quote: {
          text: "MWG didn't just fill seats. They repositioned our entire brand.",
          author: "CMO, TechScale Solutions"
        }
      }
    }
  },
  {
    id: "case-2",
    clientName: "GrowthPath Advisory",
    industry: "Financial Services",
    offerChosen: "Pipeline Accelerator — $25k",
    boldOutcome: "340 HNW leads. $8M in AUM opportunities.",
    slides: {
      context: {
        title: "Context",
        points: [
          "Boutique wealth management firm targeting high-net-worth individuals",
          "Relied on referrals — needed scalable acquisition",
          "Wanted to host intimate, high-conversion events",
          "Partnered with MWG to build event-driven pipeline"
        ]
      },
      challenge: {
        title: "The Challenge",
        points: [
          "Attract HNW individuals without appearing salesy",
          "Convert attendees into qualified consultations",
          "Build repeatable event model",
          "Maintain exclusivity while scaling"
        ]
      },
      strategy: {
        title: "The Strategy",
        points: [
          "Positioned events as exclusive 'Wealth Strategy Dinners'",
          "Invitation-only model with qualification process",
          "Content focused on value, not product",
          "Post-event consultation pathway engineered"
        ]
      },
      system: {
        title: "The System",
        points: [
          "Qualification funnel for invitations",
          "Personalized follow-up sequences",
          "Consultation booking automation",
          "Long-term nurture for non-converters"
        ]
      },
      execution: {
        title: "Execution",
        points: [
          "6 intimate dinners across 3 months",
          "Average 28 qualified attendees per event",
          "92% consultation booking rate",
          "White-glove experience throughout"
        ]
      },
      results: {
        metrics: [
          { label: "Total Attendees", value: "168" },
          { label: "Consultations", value: "154" },
          { label: "New Clients", value: "47" },
          { label: "AUM Opportunity", value: "$8.2M" }
        ]
      },
      longTermImpact: {
        title: "Long-term Impact",
        points: [
          "Referral network activated through events",
          "Brand positioned as exclusive advisor",
          "Quarterly dinner series established",
          "70% of new business now event-sourced"
        ]
      },
      takeaway: {
        insights: [
          "Intimacy scales when systems do the heavy lifting.",
          "High-ticket requires high-touch — events bridge that gap."
        ],
        quote: {
          text: "Our cost per acquisition dropped 60% while client quality increased.",
          author: "Managing Partner, GrowthPath Advisory"
        }
      }
    }
  },
  {
    id: "case-3",
    clientName: "InnovateTech Labs",
    industry: "Deep Tech / AI",
    offerChosen: "Authority Engine — $75k",
    boldOutcome: "2,400 registrants. Category leadership claimed.",
    slides: {
      context: {
        title: "Context",
        points: [
          "AI infrastructure company with complex, technical offering",
          "Needed to simplify message for business decision-makers",
          "Wanted to establish category leadership",
          "Engaged MWG for full authority positioning through events"
        ]
      },
      challenge: {
        title: "The Challenge",
        points: [
          "Translate technical capabilities into business outcomes",
          "Attract both technical and business audiences",
          "Stand out in noisy AI market",
          "Build pipeline across multiple ICPs"
        ]
      },
      strategy: {
        title: "The Strategy",
        points: [
          "Created 'AI Operations Summit' — neutral industry platform",
          "Two-track content: technical deep-dives + business strategy",
          "Partnered with industry analysts for credibility",
          "Built media presence around the event"
        ]
      },
      system: {
        title: "The System",
        points: [
          "Dual-track registration and segmentation",
          "Content recommendation engine for follow-up",
          "Lead scoring by engagement and ICP fit",
          "Sales enablement integration"
        ]
      },
      execution: {
        title: "Execution",
        points: [
          "Virtual summit with 2,400 registrants",
          "18 sessions across 2 days",
          "Live Q&A with 400+ questions",
          "On-demand library driving ongoing leads"
        ]
      },
      results: {
        metrics: [
          { label: "Registrants", value: "2,412" },
          { label: "Live Attendance", value: "1,847" },
          { label: "SQLs Generated", value: "287" },
          { label: "Pipeline Created", value: "$4.8M" }
        ]
      },
      longTermImpact: {
        title: "Long-term Impact",
        points: [
          "Recognized as category thought leader",
          "Content library drives 200+ leads/month",
          "Media mentions increased 340%",
          "Annual summit now flagship event"
        ]
      },
      takeaway: {
        insights: [
          "Technical companies need non-technical positioning.",
          "Events build categories, not just pipelines."
        ],
        quote: {
          text: "We're no longer explaining who we are. The market knows.",
          author: "CEO, InnovateTech Labs"
        }
      }
    }
  }
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
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {resultsContent.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary/10 rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
    
    if (type === 'takeaway') {
      const takeawayContent = content as CaseStudyData['slides']['takeaway'];
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            {takeawayContent.insights.map((insight, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="text-base sm:text-lg text-foreground/90 italic border-l-2 border-primary pl-4"
              >
                "{insight}"
              </motion.p>
            ))}
          </div>
          
          {takeawayContent.quote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-primary/5 rounded-xl"
            >
              <p className="text-lg sm:text-xl font-medium mb-2">
                "{takeawayContent.quote.text}"
              </p>
              <p className="text-sm text-muted-foreground">
                — {takeawayContent.quote.author}
              </p>
            </motion.div>
          )}
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/how-it-works">
                See How This Applies to You
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Apply to Work With Us</Link>
            </Button>
          </div>
        </div>
      );
    }
    
    // Default content rendering for other slide types
    const slideContent = content as SlideContent;
    return (
      <ul className="space-y-3 sm:space-y-4">
        {slideContent.points.map((point, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span className="text-sm sm:text-base text-foreground/80">{point}</span>
          </motion.li>
        ))}
      </ul>
    );
  };
  
  const getSlideTitle = () => {
    if (type === 'results') return 'Results';
    if (type === 'takeaway') return 'Key Takeaway';
    return (content as SlideContent).title;
  };
  
  return (
    <div className="relative min-h-[400px] sm:min-h-[450px] flex flex-col justify-center px-4 sm:px-8 py-8">
      {/* Large slide number watermark */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-[80px] sm:text-[120px] font-bold text-primary/5 select-none pointer-events-none">
        {String(slideNumber).padStart(2, '0')}
      </div>
      
      <div className="relative z-10 max-w-xl">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold">{getSlideTitle()}</h3>
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
  const [count, setCount] = useState(0);
  
  const slideTypes: (keyof typeof slideIcons)[] = [
    'context', 'challenge', 'strategy', 'system', 
    'execution', 'results', 'longTermImpact', 'takeaway'
  ];
  
  // Update current slide index
  useState(() => {
    if (!api) return;
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  });
  
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
          {/* Placeholder logo */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {caseStudy.clientName.charAt(0)}
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
  const [isExpanded, setIsExpanded] = useState(false);
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
