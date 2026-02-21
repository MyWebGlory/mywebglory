import { useRef, useState, useEffect, createContext, useContext } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Building2, Target, Zap, BarChart3, Rocket, TrendingUp, Award, Lightbulb, Globe, Mail, Phone, MessageSquare, Users, Calendar, X, Sparkles, Play } from "lucide-react";
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
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Media Modal Context
const MediaModalContext = createContext<{
  openModal: (src: string, type: 'image' | 'video', alt?: string) => void;
}>({ openModal: () => {} });

const useMediaModal = () => useContext(MediaModalContext);

// Media Modal Component
const MediaModal = ({ 
  isOpen, 
  onClose, 
  src, 
  type, 
  alt 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  src: string; 
  type: 'image' | 'video'; 
  alt?: string;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            {type === 'image' ? (
              <img 
                src={src} 
                alt={alt || 'Expanded view'} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video 
                src={src} 
                controls 
                autoPlay
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Expandable Media Component
const ExpandableMedia = ({ 
  src, 
  type, 
  alt, 
  className 
}: { 
  src: string; 
  type: 'image' | 'video'; 
  alt?: string; 
  className?: string;
}) => {
  const { openModal } = useMediaModal();
  
  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={() => openModal(src, type, alt)}
    >
      {type === 'image' ? (
        <img src={src} alt={alt || ''} className="w-full h-full object-contain" />
      ) : (
        <>
          <video src={src} muted playsInline className="w-full h-full object-contain" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <Play className="w-8 h-8 text-white" />
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-2 py-1 rounded">
          Click to expand
        </span>
      </div>
    </div>
  );
};

// Import Kornit assets
import kornitEventBanner from "@/assets/case-studies/kornit/event-banner.png";
import kornitEventPanel from "@/assets/case-studies/kornit/event-panel.png";
import kornitEmailMarketing from "@/assets/case-studies/kornit/email-marketing.png";
import kornitSocialPosts from "@/assets/case-studies/kornit/social-posts.png";
import kornitEventBanners from "@/assets/case-studies/kornit/event-banners.png";
import kornitSignatureBanners from "@/assets/case-studies/kornit/signature-banners.png";
import kornitClientComment1 from "@/assets/case-studies/kornit/kornit-client-comment-1.png";
import kornitClientComment2 from "@/assets/case-studies/kornit/kornit-client-comment-2.png";
import kornitClientComment3 from "@/assets/case-studies/kornit/kornit-client-comment-3.png";
import kornitLogo from "@/assets/case-studies/kornit/kornit-logo.png";
import kornitTeamMeeting from "@/assets/case-studies/kornit/team-meeting.png";
import kornitEventTrailer from "@/assets/case-studies/kornit/event-trailer.mp4";
import kornitAiAdUgc from "@/assets/case-studies/kornit/ai-ad-ugc.mp4";

// Import RxVP assets
import rxvpEventFlyer from "@/assets/case-studies/rxvp/event-flyer.jpeg";
import rxvpLandingPage from "@/assets/case-studies/rxvp/landing-page.png";
import rxvpClientTestimonial from "@/assets/case-studies/rxvp/rxvp-client-testimonial.png";
import rxvpVideoCall from "@/assets/case-studies/rxvp/rxvp-video-call-with-client.png";
import rxvpLogo from "@/assets/case-studies/rxvp/rxvp-logo.png";
import rxvpTemplateInviteVideo from "@/assets/case-studies/rxvp/template-invite-video.mp4";
import rxvpHappyAboutVideo from "@/assets/case-studies/rxvp/rxvp-happy-about-video.png";
import satisfactionVideoRxvp from "@/assets/case-studies/rxvp/satisfaction-video-rxvp.png";

// Import CBHN assets
import cbhnLogo from "@/assets/case-studies/cbhn/cbhn-square.png";
import cbhnLandingPage from "@/assets/case-studies/cbhn/landing-page.jpeg";
import cbhnSocialMediaFlyer from "@/assets/case-studies/cbhn/social-media-flyer.png";
import cbhnSquareAlt from "@/assets/case-studies/cbhn/cbhn-square-alt.png";
import cbhnEarlyBird from "@/assets/case-studies/cbhn/early-bird-countdown.png";
import cbhnRegistrationOpen from "@/assets/case-studies/cbhn/registration-open.png";
import cbhnSponsorTemplate from "@/assets/case-studies/cbhn/sponsor-recognition-template.png";
import cbhnTinaArmstrong from "@/assets/case-studies/cbhn/tina-armstrong.png";
import satisfactionCommentCbhn from "@/assets/case-studies/cbhn/satisfaction-comment-cbhn.png";
import satisfactionCommentCbhnAlt from "@/assets/case-studies/cbhn/satisfaction-comment-cbhn-alt.png";

// RxVP Attendee Logos
import logoAverita from "@/assets/case-studies/rxvp/attendee-logos/averitas.png";
import logoBMGF from "@/assets/case-studies/rxvp/attendee-logos/bill-and-melinda-gates-foundation.png";
import logoBMS from "@/assets/case-studies/rxvp/attendee-logos/bristol-myers-squibb.png";
import logoFortrea from "@/assets/case-studies/rxvp/attendee-logos/fortrea.png";
import logoMerck from "@/assets/case-studies/rxvp/attendee-logos/merck.png";
import logoOneWeReach from "@/assets/case-studies/rxvp/attendee-logos/one-we-reach.png";
import logoSandos from "@/assets/case-studies/rxvp/attendee-logos/sandos.png";

// Types
interface SlideContent {
  title: string;
  points: string[];
  image?: string;
  imageAlt?: string;
  video?: string;
  secondaryImage?: string;
}

interface ResultMetric {
  label: string;
  value: string;
  icon?: React.ElementType;
}

interface AttendeeLogoEntry {
  src: string;
  alt: string;
}

interface CaseStudyData {
  id: string;
  clientName: string;
  clientLogo?: string;
  industry: string;
  offerChosen: string;
  duration: string;
  boldOutcome: string;
  attendeeLogos?: AttendeeLogoEntry[];
  slides: {
    context: SlideContent;
    challenge: SlideContent;
    strategy: SlideContent;
    system: SlideContent;
    execution: SlideContent & { images?: string[]; videos?: string[] };
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
    cta: {
      headline: string;
      subtext: string;
    };
  };
}

// Kornit Digital Case Study
const kornitCaseStudy: CaseStudyData = {
  id: "kornit-digital",
  clientName: "Kornit Digital",
  clientLogo: kornitLogo,
  industry: "Apparel / Printing Technology",
  offerChosen: "Event Dominance - $50k",
  duration: "8 weeks (Sep-Oct 2025)",
  boldOutcome: "1,208 total registrations. Authority secured.",
  slides: {
    context: {
      title: "Context",
      points: [
        "Kornit Digital launched Evolve Summit 2025, their first large-scale virtual event under the Konnections brand.",
        "Objective: Build awareness, trust, and engagement for Kornit's innovative ecosystem, from zero.",
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
        "Audience: cold, highly specialized - apparel decorators, print-on-demand operators, brand decision-makers.",
        "Timeline: 8 weeks - aggressive, high-stakes.",
        "The challenge was to build a full-funnel system, create content assets, coordinate partners, and drive registrations without losing quality."
      ]
    },
    strategy: {
      title: "The Strategy",
      points: [
        "Deep ICP analysis - messaging library tailored to apparel industry pain points",
        "Event positioning - clear, benefit-driven narrative that resonated with decision-makers",
        "Acquisition plan - organic + Meta ads + email campaigns working in sync",
        "Partner engagement - toolkits, trackable links, QR codes for amplification",
        "Post-event leverage - clips, recordings, highlights for ongoing content"
      ],
      image: kornitTeamMeeting,
      imageAlt: "Team coordination meeting with client"
    },
    system: {
      title: "The System",
      points: [
        "Landing page - high-converting, fully branded experience",
        "CRM integration - lead qualification & segmentation from day one",
        "Reminder & activation flows - email, SMS, and phone outreach",
        "Ads - Meta campaigns with lookalike audiences and iterative creative testing",
        "Organic - social posts, stories, community activations",
        "Partner toolkit - dozens of trackable links, assets, QR codes",
        "Slack, ClickUp, Drive - efficient coordination with partners fully integrated"
      ],
      image: kornitEventPanel,
      imageAlt: "Live event panel with engaged audience discussion"
    },
    execution: {
      title: "Execution",
      points: [
        "Graphic design: banners, PDFs, slides - all premium quality",
        "Social media posts & stories - consistent, branded content",
        "Event videos & trailers - high-energy, attention-grabbing",
        "Meta Ads campaign - multiple creative rounds, targeting cold and lookalike audiences",
        "Emails - to existing leads + ad-generated leads",
        "Calls & SMS - high-touch activation for high-value registrants",
        "Post-production: session recordings, clips, highlight reels"
      ],
      images: [kornitSocialPosts, kornitEventBanners, kornitSignatureBanners, kornitEmailMarketing],
      videos: [kornitEventTrailer, kornitAiAdUgc]
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
        "Meta Ads CPR: $9.50 - top-quartile B2B performance",
        "CTR: 2.33% - well above industry average (1-1.5%)",
        "AI & UGC creatives drove 75% of ad registrations",
        "Multi-touch flows (email + SMS + phone) significantly boosted show-up rate"
      ]
    },
    longTermImpact: {
      title: "Long-term Impact",
      points: [
        "Partners engaged with trackable assets, building long-term network visibility",
        "Hundreds of video assets, clips, and session recordings - repurposable content library",
        "Email/SMS lists - ready for future campaigns and nurturing",
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
    },
    cta: {
      headline: "Ready to Build Your Revenue System?",
      subtext: "Every case study started with a conversation. Let's explore what's possible for your business."
    }
  }
};

// RxVP International Women's Day Case Study
const rxvpCaseStudy: CaseStudyData = {
  id: "rxvp-iwd",
  clientName: "RxVP",
  clientLogo: rxvpLogo,
  industry: "Life Sciences / Speakers Bureau",
  attendeeLogos: [
    { src: logoBMGF, alt: "Bill & Melinda Gates Foundation" },
    { src: logoBMS, alt: "Bristol Myers Squibb" },
    { src: logoMerck, alt: "Merck" },
    { src: logoFortrea, alt: "Fortrea" },
    { src: logoAverita, alt: "Averitas" },
    { src: logoOneWeReach, alt: "One We Reach" },
    { src: logoSandos, alt: "Sandos" },
  ],
  offerChosen: "Event Launch - $9k",
  duration: "6 weeks (Jan-Mar 2026)",
  boldOutcome: "5,000+ registrations. World-record-scale IWD event launched from zero.",
  slides: {
    context: {
      title: "Context",
      points: [
        "RxVP is the first and only global speakers bureau for the life sciences industry, co-founded by Bonnie Lappin, HBA Visionary Leader award recipient and PharmaVoice100 honoree.",
        "The mission: organize a world-record-scale International Women's Day virtual event spanning 4 global regions (Asia, India, Europe, Americas) with senior pharma executives as panelists.",
        "This was a first-of-its-kind initiative, no precedent, no competitor, no historical data. A concept that didn't exist in the industry, positioned to become the definitive platform for women leaders in Life Sciences.",
        "Corporate memberships at $2,500 per company (capped at 20 founding companies), each unlocking up to 700 employee invitations across all panels.",
        "The goal: generate massive B2B registrations, establish RxVP as the undisputed authority, and create a repeatable event system for future editions."
      ],
      image: rxvpEventFlyer,
      imageAlt: "RxVP International Women's Day World Record Event Flyer"
    },
    challenge: {
      title: "The Challenge",
      points: [
        "Building a global, multi-timezone virtual event from absolute zero, no existing audience, no prior event data, no organic traffic.",
        "Target audience: C-suite pharma executives, ERG leaders, DEI directors, and HR decision-makers, the hardest B2B segment to reach.",
        "Strict B2B positioning: this was not a public webinar. Corporate seats only, sold through authority and scarcity, not ads.",
        "Multi-region complexity: 4 rolling panels across Asia, India, Europe, and Americas, each requiring geo-targeted messaging and culturally sensitive visuals.",
        "Timeline: 6 weeks to build the entire marketing engine, LinkedIn strategy, email flows, creative assets, landing page, video production, and custom corporate invitation systems.",
        "The client's vision was bold: 'Go big or go home. We want to become THE name people think of for speakers in life sciences.'"
      ]
    },
    strategy: {
      title: "The Strategy",
      points: [
        "Authority Funnel for Corporate Membership Sales, every piece of content, outreach, and creative pointed to one goal: filling 20 founding corporate slots.",
        "3-pillar approach: Authority (why RxVP matters), Scarcity (only 20 companies, world record attempt), Conversion (book a conversation).",
        "LinkedIn as the single primary channel, where pharma decision-makers, ERG leaders, and DEI directors actually live.",
        "12 authority-driven LinkedIn posts across 4 strategic themes: IWD corporate legitimacy, RxVP differentiation, ERG value proposition, and scarcity-driven urgency.",
        "Custom corporate invitation system: personalized invite templates with each company's branding, so internal champions could forward to 700+ employees.",
        "Multi-touch email/reminder campaign: 5 pre-event + 1 post-event, with SMS and direct outreach for high-value registrants."
      ],
      image: rxvpVideoCall,
      imageAlt: "Strategy session video call with Bonnie Lappin"
    },
    system: {
      title: "The System",
      points: [
        "High-converting branded landing page, designed to communicate prestige, scarcity, and clear corporate value proposition.",
        "Custom corporate invitation templates, each company received personalized invite assets with their logo, enabling internal distribution to hundreds of employees.",
        "Email campaign flow: 5. pre-event reminder sequence + 1 post-event follow-up, segmented by region and engagement level.",
        "LinkedIn content calendar: 12 posts strategically sequenced over 4 weeks, mixing graphic design posts, video content, and text-based thought leadership.",
        "AI-powered video trailers: custom promo videos featuring company logos and panelist highlights for each region.",
        "Light engagement support: 10–15 strategic comment replies and community drops per week to boost organic reach.",
        "Coordination via Slack, ClickUp, and Drive, fully integrated with Bonnie's team for real-time asset approvals and speaker management."
      ],
      image: rxvpLandingPage,
      imageAlt: "RxVP event landing page with registration flow"
    },
    execution: {
      title: "Execution",
      points: [
        "12 LinkedIn posts including 4 custom graphic design posts, delivered + scheduled in a 1-month posting calendar.",
        "1 professional promo video reel (10–15 seconds), high-energy, attention-grabbing, designed for LinkedIn autoplay.",
        "Event flyer design, premium, internationally-aware creative featuring diverse panelists from J&J, Takeda, Novo Nordisk, Bristol Myers Squibb.",
        "Custom corporate invite templates, personalized per company with their branding, enabling effortless internal distribution.",
        "AI-generated video trailers with company logos, each founding company received a custom video asset to share internally.",
        "5 pre-event email reminders + 1 post-event recap email, crafted for urgency and executive tone.",
        "Landing page build, fully branded experience optimized for corporate registration and conveying world-record ambition.",
        "Direct outreach: 40–50 highly targeted LinkedIn messages to ERG leaders, DEI directors, and pharma executives."
      ],
      images: [rxvpEventFlyer, rxvpLandingPage],
      images: [rxvpEventFlyer, rxvpLandingPage, 
        rxvpHappyAboutVideo,
        satisfactionVideoRxvp],
      videos: [rxvpTemplateInviteVideo]
    },
    results: {
      metrics: [
        { label: "Total Registrations", value: "5,000+", icon: Users },
        { label: "Founding Companies", value: "20", icon: Building2 },
        { label: "Global Regions", value: "4", icon: Globe },
        { label: "LinkedIn Posts", value: "12", icon: Target },
        { label: "Email Campaigns", value: "6", icon: Mail },
        { label: "Countries Reached", value: "50+", icon: Globe },
        { label: "Employee Invites/Co.", value: "700", icon: Users },
        { label: "Custom Videos", value: "20+", icon: Calendar }
      ],
      highlights: [
        "5,000+ registrations achieved on a $9K budget, exceptional cost-per-registration for premium B2B pharma audience.",
        "All 20 founding corporate membership slots filled at $2,500 each, $50K+ in direct revenue generated.",
        "Multi-region coverage: Asia, India, Europe, Americas, with culturally-adapted messaging for each geography.",
        "Custom corporate invitation system drove viral internal distribution, single companies registering 200-500 employees.",
        "LinkedIn-only organic strategy outperformed paid alternatives, authority positioning drove inbound interest."
      ]
    },
    longTermImpact: {
      title: "Long-term Impact",
      points: [
        "RxVP established as the definitive platform for women leaders in Life Sciences, a category that didn't exist before.",
        "20 founding companies now form a recurring corporate network for future RxVP events and initiatives.",
        "Reusable corporate invitation system, scalable template for future events without rebuilding from scratch.",
        "Library of video assets, panel recordings, and highlights, repurposable content for year-round authority building.",
        "Proven playbook: from zero to 5,000+ registrations in 6 weeks, a blueprint Bonnie can replicate for IWD 2027 and beyond.",
        "World-record positioning created massive PR potential and media interest for the RxVP brand."
      ]
    },
    takeaway: {
      insights: [
        "You don't need a massive budget to create a massive event. You need a precise system: authority + scarcity + one clear CTA.",
        "Custom corporate invitation templates were the force multiplier, turning 20 companies into 5,000 registrants through internal viral distribution.",
        "LinkedIn-only, organic-first B2B strategy outperformed what most companies achieve with 5x the ad spend.",
        "When the positioning is right, the product sells itself. 'The first and only global speakers bureau' isn't marketing, it's a moat."
      ],
      clientComments: [rxvpClientTestimonial]
    },
    cta: {
      headline: "Ready to Build Your Revenue System?",
      subtext: "Every case study started with a conversation. Let's explore what's possible for your business."
    }
  }
};

// CBHN Virtual Behavioral and Mental Health Conference Case Study
const cbhnCaseStudy: CaseStudyData = {
  id: "cbhn-mental-health-conference",
  clientName: "California Black Health Network",
  clientLogo: cbhnLogo,
  industry: "Public Health / Nonprofit",
  offerChosen: "Event Launch - $9k",
  duration: "8 weeks (Mar-May 2026)",
  boldOutcome: "Full event launch system built from zero, sponsorship package, landing page, 12 social posts, and branded flyers for a mission-critical mental health conference.",
  slides: {
    context: {
      title: "Context",
      points: [
        "California Black Health Network (CBHN) is a statewide nonprofit dedicated to improving the health and wellness of Black Californians.",
        "Their 2026 initiative: a Virtual Behavioral and Mental Health Conference, 'Hidden Crises: Stress, Mental Health & Brain Health in the Black Community', a first-of-its-kind event tackling toxic stress, rising suicide rates among Black men and boys, and Alzheimer's disparities.",
        "The event would bring together behavioral health professionals, policymakers, community members, and lived-experience advocates on May 13, 2026.",
        "Keynote speakers included Rhonda Smith (CBHN Executive Director), Dr. Curley Bonds (Chief Medical Officer, LA County Dept. of Mental Health), and Dr. Le Ondra Clark Harvey (CEO, California Behavioral Health Association).",
        "CBHN needed a complete event marketing system: from brand identity and sponsorship materials, to landing page, social content, and email campaigns, all delivered with cultural sensitivity and professional authority."
      ],
      image: cbhnLandingPage,
      imageAlt: "CBHN Virtual Mental Health Conference Landing Page"
    },
    challenge: {
      title: "The Challenge",
      points: [
        "Mental health in the Black community is deeply underserved, and so is its marketing. Generic event promotion wouldn't land.",
        "CBHN needed materials that felt culturally resonant, authoritative, and urgency-driven, without stigmatizing the very audience they serve.",
        "Multiple audience segments required different messaging: behavioral health professionals, policymakers, community advocates, researchers, and individuals with lived experience.",
        "The event also needed to attract sponsors and external partners, requiring a custom, high-end sponsorship package PDF with tiered offerings and an embedded contact form.",
        "Timeline: 8 weeks to deliver a full launch system, from scratch, while CBHN managed speakers, CEU accreditation, and registrations simultaneously."
      ]
    },
    strategy: {
      title: "The Strategy",
      points: [
        "Messaging first, deep alignment with CBHN's mission and the raw urgency of the issues: toxic stress, suicide among Black men, cognitive decline, and the connection between them.",
        "Authority positioning, leveraging world-class speakers (LA County Dept. of Mental Health, CBHA) to legitimize the event and drive professional registrations.",
        "Multi-tier registration strategy, $50 early bird to $115 CEU package, designed to maximize revenue and professional development uptake.",
        "Sponsorship-as-partnership, custom branded PDF framing sponsorship as community investment, not just brand placement, with tiered recognition and embedded inquiry form.",
        "Organic-first social media, 12 posts across awareness, urgency, speaker spotlights, and early bird countdowns targeting LinkedIn, Instagram, and Facebook.",
        "Email reminders sequenced through key milestones: launch announcement, early bird deadline, speaker reveals, final countdown, and day-of logistics."
      ],
      image: cbhnTinaArmstrong,
      imageAlt: "Dr. Tina Houston Armstrong, Workshop Speaker on Toxic Stress"
    },
    system: {
      title: "The System",
      points: [
        "High-converting branded landing page with full agenda, speaker bios, tiered registration fees, and culturally resonant design.",
        "Custom branded sponsorship package PDF, full event description, sponsor tier benefits (Bronze, Silver, Gold), audience demographics, and embedded contact form.",
        "12 social media posts, crafted across 4 content themes: mission awareness, speaker spotlights, early bird urgency, and registration open announcements.",
        "4 premium graphic designs, event flyer, social square, early bird countdown graphic, and sponsor recognition template.",
        "Email reminder campaign, sequenced send plan covering pre-launch, early bird close, and final countdown touchpoints.",
        "Full program documentation, speaker bios, session descriptions, agenda structure, and CEU details formatted for professional communications."
      ]
    },
    execution: {
      title: "Execution",
      points: [
        "Landing page design, fully branded conference page with agenda, speaker lineup, registration tiers, and conversion-focused layout.",
        "Sponsorship package PDF, custom branded document with full program overview, tiered sponsor benefits, contact form, and professional design reflecting CBHN's authority.",
        "Event flyer, premium print-ready and digital flyer featuring key speakers, date, and registration details.",
        "Social media content, 12 posts across 4 strategic themes with post copy, hashtags, and scheduling calendar.",
        "4 custom graphic designs, social square, early bird countdown, registration announcement, and sponsor recognition template.",
        "Email reminder sequence, launch, early bird deadline, speaker spotlight, and final week reminders."
      ],
      images: [cbhnSocialMediaFlyer, cbhnSquareAlt, cbhnEarlyBird, cbhnRegistrationOpen, cbhnSponsorTemplate, 
        satisfactionCommentCbhn,
        satisfactionCommentCbhnAlt]
    },
    results: {
      metrics: [
        { label: "Social Posts Created", value: "12", icon: Target },
        { label: "Graphic Designs", value: "4", icon: Award },
        { label: "Email Sequences", value: "5+", icon: Mail },
        { label: "Sponsor Package", value: "Custom", icon: Building2 },
        { label: "Landing Page", value: "Live", icon: Globe },
        { label: "Event Flyer", value: "Done", icon: Rocket },
        { label: "Speaker Spotlights", value: "6", icon: Users },
        { label: "Registration Tiers", value: "4", icon: Calendar }
      ],
      highlights: [
        "Complete event marketing system delivered in 8 weeks, from zero assets to a fully operational launch machine.",
        "Custom branded sponsorship package with embedded contact form, designed to attract nonprofit and healthcare sponsors.",
        "4-tier registration strategy ($50–$115) maximizing revenue potential while making the event accessible to underserved professionals.",
        "Culturally responsive messaging across all assets, speaking directly to Black behavioral health professionals, policymakers, and community advocates.",
        "Speaker-led authority content featuring LA County Dept. of Mental Health CMO and California Behavioral Health Association CEO."
      ]
    },
    longTermImpact: {
      title: "Long-term Impact",
      points: [
        "CBHN now has a reusable event marketing playbook, every asset, template, and system built for this conference scales to future events.",
        "The branded sponsorship package establishes a new revenue stream for the organization through corporate and institutional partnerships.",
        "CEU-accredited sessions attract repeat professional attendees, building a qualified B2B mailing list for future programming.",
        "Social content library and graphic templates reduce production time and cost for future CBHN events significantly.",
        "Conference recording and session clips create a post-event content library for year-round community education and authority building."
      ]
    },
    takeaway: {
      insights: [
        "Mission-driven events require more than promotion, they require messaging that respects lived experience while driving professional credibility.",
        "A custom sponsorship package isn't a nice-to-have. For nonprofits, it's the difference between self-funded events and fully-sponsored programs.",
        "Multi-tier registration with CEU options doubled the event's professional appeal and revenue potential without increasing the core marketing budget.",
        "When your speakers carry institutional authority, LA County DMH, CBHA, the content does half the selling. The system just needed to amplify it."
      ],
      clientComments: []
    },
    cta: {
      headline: "Ready to Build Your Event Marketing System?",
      subtext: "Whether you're a nonprofit, healthcare org, or enterprise, if your event matters, we'll make sure the right people show up."
    }
  }
};

// All case studies
const caseStudies: CaseStudyData[] = [
  kornitCaseStudy,
  rxvpCaseStudy,
  cbhnCaseStudy
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
  takeaway: Lightbulb,
  attendees: Users,
  cta: Sparkles
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
  
  // Helper: render bullet points
  const renderPoints = (points: string[]) => (
    <ul className="space-y-2">
      {points.map((point, idx) => (
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
  );

  // Helper: render a media column (images + videos)
  const renderMediaColumn = (images?: string[], videos?: string[], imageAlt?: string) => {
    const hasMedia = (images && images.length > 0) || (videos && videos.length > 0);
    if (!hasMedia) return null;
    return (
      <div className="space-y-3">
        {videos && videos.map((video, idx) => (
          <motion.div
            key={`v-${idx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-lg overflow-hidden border border-border/50 bg-black/50 aspect-video"
          >
            <ExpandableMedia src={video} type="video" alt={`Video ${idx + 1}`} className="w-full h-full" />
          </motion.div>
        ))}
        {images && images.map((img, idx) => (
          <motion.div
            key={`i-${idx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-lg overflow-hidden border border-border/50 shadow-md bg-muted/30"
          >
            <ExpandableMedia src={img} type="image" alt={imageAlt || `Image ${idx + 1}`} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>
    );
  };

  // Two-column wrapper: text left, media right (stacked on mobile)
  const TwoColumnLayout = ({ textContent, mediaContent }: { textContent: React.ReactNode; mediaContent: React.ReactNode | null }) => {
    if (!mediaContent) {
      return <div>{textContent}</div>;
    }
    return (
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="md:w-1/2 flex-shrink-0">{textContent}</div>
        <div className="md:w-1/2 overflow-y-auto max-h-[420px] sm:max-h-[520px] pr-1">{mediaContent}</div>
      </div>
    );
  };

  const renderContent = () => {
    if (type === 'results') {
      const resultsContent = content as CaseStudyData['slides']['results'];
      return (
        <div className="space-y-3">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {resultsContent.metrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className="bg-primary/10 rounded-lg p-2 text-center"
                >
                  {MetricIcon && (
                    <MetricIcon className="w-3 h-3 text-primary mx-auto mb-0.5" />
                  )}
                  <div className="text-sm sm:text-base font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-[9px] text-muted-foreground leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Performance Highlights */}
          <div className="bg-card/50 rounded-lg p-3 border border-border/50">
            <h4 className="text-xs font-semibold mb-2 text-primary">Performance Highlights</h4>
            <ul className="space-y-1">
              {resultsContent.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-1.5 text-[11px] text-foreground/80"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-1 flex-shrink-0" />
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
      const textPart = (
        <div className="space-y-4">
          <div className="space-y-2">
            {takeawayContent.insights.map((insight, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="text-xs sm:text-sm text-foreground/90 border-l-2 border-primary pl-3"
              >
                {insight}
              </motion.p>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-medium text-center pt-3 border-t border-border/50"
          >
            When you work with us, your success doesn't just happen.
            <span className="text-primary"> It runs through MWG.</span>
          </motion.p>
        </div>
      );

      const mediaPart = takeawayContent.clientComments && takeawayContent.clientComments.length > 0 ? (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-primary">What the Client Said</h4>
          <div className="space-y-3">
            {takeawayContent.clientComments.map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-muted/30 rounded-lg overflow-hidden border border-border/50"
              >
                <ExpandableMedia 
                  src={comment} 
                  type="image"
                  alt={`Client testimonial ${idx + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ) : null;

      return <TwoColumnLayout textContent={textPart} mediaContent={mediaPart} />;
    }

    if (type === 'attendees') {
      const logos = caseStudy.attendeeLogos || [];
      return (
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            These are some of the companies that purchased corporate seats and sent their employees to the event. Each received custom-branded video invitations and personalized onboarding.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {logos.map((logo, idx) => {
              const isOneWeReach = logo.alt.toLowerCase().includes("one we reach");
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`border border-border/50 rounded-xl p-3 flex items-center justify-center h-16 ${isOneWeReach ? "bg-transparent" : "bg-white"}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    if (type === 'cta') {
      const ctaContent = content as CaseStudyData['slides']['cta'];
      return (
        <div className="h-full flex flex-col items-center justify-center text-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-4 right-4 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 space-y-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-2">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold">
              {ctaContent.headline}
            </h3>
            
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {ctaContent.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
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
        </div>
      );
    }

    if (type === 'execution') {
      const execContent = content as SlideContent & { images?: string[]; videos?: string[] };
      const textPart = renderPoints(execContent.points);
      const mediaPart = renderMediaColumn(execContent.images, execContent.videos);
      return <TwoColumnLayout textContent={textPart} mediaContent={mediaPart} />;
    }
    
    // Default content rendering for other slide types (context, challenge, strategy, system, longTermImpact)
    const slideContent = content as SlideContent;
    const hasMedia = slideContent.image || slideContent.video;
    const textPart = renderPoints(slideContent.points);
    const mediaPart = hasMedia ? (
      <div className="space-y-3">
        {slideContent.image && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-border/50 shadow-md bg-muted/30"
          >
            <ExpandableMedia 
              src={slideContent.image} 
              type="image"
              alt={slideContent.imageAlt || "Case study visual"}
              className="w-full h-auto"
            />
          </motion.div>
        )}
        {slideContent.video && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-lg overflow-hidden border border-border/50 shadow-md bg-black/50 aspect-video"
          >
            <ExpandableMedia 
              src={slideContent.video} 
              type="video"
              alt="Case study video"
              className="w-full h-full"
            />
          </motion.div>
        )}
      </div>
    ) : null;

    return <TwoColumnLayout textContent={textPart} mediaContent={mediaPart} />;
  };
  
  const getSlideTitle = () => {
    if (type === 'results') return 'Results';
    if (type === 'takeaway') return 'Key Takeaway';
    if (type === 'longTermImpact') return 'Long-term Impact';
    if (type === 'attendees') return 'Founding Companies';
    if (type === 'cta') return 'Next Steps';
    return (content as SlideContent).title;
  };
  
  return (
    <div className="relative min-h-[400px] sm:min-h-[480px] flex flex-col justify-start px-4 sm:px-8 py-5 overflow-y-auto">
      {/* Large slide number watermark */}
      <div className="absolute top-1 right-4 sm:top-2 sm:right-8 text-[50px] sm:text-[80px] font-bold text-primary/5 select-none pointer-events-none">
        {String(slideNumber).padStart(2, '0')}
      </div>
      
      <div className="relative z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold">{getSlideTitle()}</h3>
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
    'execution', 'results', 'longTermImpact', 'takeaway',
    ...(caseStudy.attendeeLogos && caseStudy.attendeeLogos.length > 0 ? ['attendees' as const] : []),
    'cta'
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
        {/* Left Arrow - Centered vertically */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
        
        <CarouselContent className="-ml-0">
          {slideTypes.map((type, index) => (
            <CarouselItem key={type} className="pl-0 basis-full">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl mx-10 sm:mx-14">
                <StorySlide
                  slideNumber={index + 1}
                  type={type}
                  content={type === 'attendees' ? { title: 'Founding Companies', points: [] } : caseStudy.slides[type as keyof typeof caseStudy.slides]}
                  caseStudy={caseStudy}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Right Arrow - Centered vertically */}
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
        
        {/* Progress dots + bar at bottom */}
        <div className="flex items-center justify-center gap-1.5 mt-3 px-14">
          {slideTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-primary w-5' 
                  : 'bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

// Case Study Card (Grid item)
const CaseStudyCard = ({ caseStudy, index, onClick }: { caseStudy: CaseStudyData; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  // Pick top 3 metrics for the card preview
  const previewMetrics = caseStudy.slides.results.metrics.slice(0, 3);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        className="w-full text-left bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
      >
        {/* Header: Logo + Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-border/50 overflow-hidden p-1.5 flex-shrink-0">
            {caseStudy.clientLogo ? (
              <img 
                src={caseStudy.clientLogo} 
                alt={`${caseStudy.clientName} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                {caseStudy.clientName.charAt(0)}
              </span>
            )}
          </div>
          
          <div className="min-w-0">
            <h3 className="text-lg font-bold truncate">{caseStudy.clientName}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                {caseStudy.industry}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {caseStudy.duration}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bold Outcome */}
        <p className="text-base font-semibold text-primary mb-4 line-clamp-2">
          {caseStudy.boldOutcome}
        </p>
        
        {/* Offer badge */}
        <div className="text-xs text-muted-foreground mb-4">
          {caseStudy.offerChosen}
        </div>
        
        {/* Preview Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {previewMetrics.map((metric, idx) => {
            const MetricIcon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-primary/5 rounded-lg p-2 text-center"
              >
                {MetricIcon && (
                  <MetricIcon className="w-3.5 h-3.5 text-primary mx-auto mb-1" />
                )}
                <div className="text-sm font-bold text-primary">{metric.value}</div>
                <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Media Preview 2x2 */}
        {(caseStudy.slides.execution.images || caseStudy.slides.execution.videos) && (
          <div className="grid grid-cols-2 gap-1.5 mb-4 rounded-xl overflow-hidden">
            {[
              ...(caseStudy.slides.execution.images?.slice(0, 3) || []).map(src => ({ src, type: 'image' as const })),
              ...(caseStudy.slides.execution.videos?.slice(0, 1) || []).map(src => ({ src, type: 'video' as const }))
            ].slice(0, 4).map((media, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden bg-muted/30 border border-border/30 h-20"
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <video
                      src={media.src}
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-3 h-3 text-black fill-black ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
            View Full Case Study
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </button>
    </motion.div>
  );
};

// Case Study Modal (full preview with slider)
const CaseStudyModal = ({ 
  caseStudy, 
  isOpen, 
  onClose 
}: { 
  caseStudy: CaseStudyData | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!caseStudy) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[95vh] bg-background border border-border/50 rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/50 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-border/50 overflow-hidden p-1">
                  {caseStudy.clientLogo ? (
                    <img 
                      src={caseStudy.clientLogo} 
                      alt={`${caseStudy.clientName} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                      {caseStudy.clientName.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-bold">{caseStudy.clientName}</h2>
                  <p className="text-xs text-muted-foreground">{caseStudy.industry} &middot; {caseStudy.duration}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            
            {/* Modal Body - Slider */}
            <div className="flex-1 overflow-y-auto p-5">
              <p className="text-base font-semibold text-primary mb-5">{caseStudy.boldOutcome}</p>
              <HorizontalStoryBand caseStudy={caseStudy} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    src: string;
    type: 'image' | 'video';
    alt?: string;
  }>({ isOpen: false, src: '', type: 'image' });

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  const openModal = (src: string, type: 'image' | 'video', alt?: string) => {
    setModalState({ isOpen: true, src, type, alt });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const openCaseStudy = (caseStudy: CaseStudyData) => {
    setSelectedCaseStudy(caseStudy);
    setIsCaseModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsCaseModalOpen(false);
  };

  return (
    <MediaModalContext.Provider value={{ openModal }}>
      <div className="min-h-screen bg-background">
        <SEO
          title="Case Studies | Real Event Marketing Results | MyWebGlory"
          description="See how we generated 1,208 registrations for Kornit Digital in 8 weeks. Real events, real results, real pipeline. Explore our proven track record."
          canonicalUrl="/case-studies"
        />
        <Navbar />
        
        <main>
          <CaseStudiesHero />
          
          {/* Case Studies Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((caseStudy, index) => (
                  <CaseStudyCard 
                    key={caseStudy.id} 
                    caseStudy={caseStudy} 
                    index={index}
                    onClick={() => openCaseStudy(caseStudy)}
                  />
                ))}
              </div>
              
              {/* Placeholder for upcoming case studies */}
              {caseStudies.length < 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {Array.from({ length: Math.min(4 - caseStudies.length, 3) }).map((_, idx) => (
                    <motion.div
                      key={`placeholder-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="border border-dashed border-border/40 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[280px] text-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                        <Rocket className="w-5 h-5 text-primary/30" />
                      </div>
                      <p className="text-sm text-muted-foreground/60 font-medium">New case study coming soon</p>
                      <p className="text-xs text-muted-foreground/40 mt-1">Results speak louder than promises</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
          
          <FinalCTA />
        </main>
        
        <Footer />
        
        {/* Case Study Detail Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          isOpen={isCaseModalOpen}
          onClose={closeCaseStudy}
        />
        
        {/* Media Modal (for expanding images/videos within the case study modal) */}
        <MediaModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          src={modalState.src}
          type={modalState.type}
          alt={modalState.alt}
        />
      </div>
    </MediaModalContext.Provider>
  );
};

export default CaseStudies;
