import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Calendar, Clock, CheckCircle, Target, Users, BarChart3, 
  Mail, Megaphone, List, AlertTriangle, Lightbulb, TrendingUp, 
  Settings, Award, MessageSquare, Zap, BookOpen, Wrench, XCircle
} from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Images
import heroImage from "@/assets/blog/playbook-hero.jpg";
import funnelImage from "@/assets/blog/playbook-funnel.jpg";
import mistakesImage from "@/assets/blog/playbook-common-mistakes.jpg";
import promotionImage from "@/assets/blog/playbook-promotion-strategies.jpg";
import authorAvatar from "@/assets/sarah-mitchell.png";

// Structured data for the article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Event Marketing Playbook: Strategy, Execution, and ROI",
  description: "Master event marketing with this complete guide. Learn how to plan, promote, execute, and measure events that generate leads, revenue, and brand authority.",
  image: "https://mywebglory.com/assets/blog/event-marketing-playbook-hero.jpg",
  author: {
    "@type": "Person",
    name: "Sarah Mitchell",
    url: "https://mywebglory.com/blog"
  },
  publisher: {
    "@type": "Organization",
    name: "MyWebGlory",
    logo: {
      "@type": "ImageObject",
      url: "https://storage.googleapis.com/gpt-engineer-file-uploads/5zPXZ8wp1hc9eSePbWqgiJGlcjf2/uploads/1767871814578-MyWebGlory_purple.png"
    }
  },
  datePublished: "2025-01-11",
  dateModified: "2025-01-11",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mywebglory.com/blog/event-marketing-playbook"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best type of event for B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Webinars, virtual summits, and industry workshops are most effective for lead generation and authority-building in B2B markets."
      }
    },
    {
      "@type": "Question",
      name: "How long should I plan before an event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 6-8 weeks for promotion, content prep, and technical setup. For larger conferences, consider 12 weeks."
      }
    },
    {
      "@type": "Question",
      name: "Do I need to track ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Measure registrations, attendance, engagement, pipeline impact, and revenue to evaluate success and optimize future events."
      }
    },
    {
      "@type": "Question",
      name: "Should I add animations to blog pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Light micro-interactions improve engagement, but avoid heavy effects that block content or slow loading times."
      }
    },
    {
      "@type": "Question",
      name: "Do images help with SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, use optimized images with alt text, infographics, and charts to boost user experience and ranking potential."
      }
    }
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-event-marketing", label: "What is Event Marketing?" },
  { id: "event-marketing-funnel", label: "The Event Marketing Funnel" },
  { id: "planning-your-event", label: "Planning Your Event" },
  { id: "promoting-your-event", label: "Promoting Your Event" },
  { id: "engaging-attendees", label: "Engaging Attendees" },
  { id: "post-event-follow-up", label: "Post-Event Follow-Up" },
  { id: "measuring-roi", label: "Measuring Event Marketing ROI" },
  { id: "tools-platforms", label: "Tools, Platforms & Automation" },
  { id: "case-studies", label: "Case Studies & Examples" },
  { id: "common-mistakes", label: "Common Event Marketing Mistakes" },
  { id: "advanced-strategies", label: "Advanced Strategies" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "FAQs" },
];

const BlogPostEventMarketingPlaybook = () => {
  return (
    <>
      <SEO
        title="The Complete Event Marketing Playbook: Strategy, Execution, and ROI"
        description="Master event marketing with this complete guide. Learn how to plan, promote, execute, and measure events that generate leads, revenue, and brand authority."
        canonicalUrl="/blog/event-marketing-playbook"
        ogType="article"
        structuredData={[articleSchema, faqSchema]}
      />

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Category Badge */}
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Event Marketing Playbook
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                The Complete Event Marketing Playbook: Strategy, Execution, and{" "}
                <span className="text-gradient">ROI</span>
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <img 
                    src={authorAvatar} 
                    alt="Sarah Mitchell - Content Strategist" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-foreground">Sarah Mitchell</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 11, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>

              {/* Hero Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={heroImage} 
                  alt="Event Marketing Playbook - Strategic marketing funnel and ROI measurement"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              
              {/* Table of Contents */}
              <motion.nav 
                {...fadeInUp} 
                className="bg-card/50 border border-border rounded-2xl p-6 mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <List className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Table of Contents</h2>
                </div>
                <ol className="grid md:grid-cols-2 gap-2 text-sm">
                  {tableOfContents.map((item, i) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        <span className="text-primary font-medium">{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </motion.nav>

              {/* Section 1: Introduction */}
              <motion.section {...fadeInUp} id="introduction" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">1. Introduction</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Event marketing has evolved from simply hosting conferences or trade shows into a full-scale growth strategy. 
                    Modern companies leverage events to:
                  </p>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-3 mb-6"
                  >
                    {[
                      "Build brand authority",
                      "Engage audiences in meaningful ways",
                      "Generate qualified leads",
                      "Measure direct ROI from marketing efforts"
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        variants={fadeInUp}
                        className="flex items-center gap-3 bg-card/50 border border-border rounded-xl p-4"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unlike traditional marketing, events allow personalized, experiential interactions that turn prospects into customers faster.
                    In this guide, we will explore every stage of the event marketing process, from planning to ROI measurement, 
                    and provide actionable strategies you can implement today.
                  </p>
                </div>
              </motion.section>

              {/* Section 2: What is Event Marketing */}
              <motion.section {...fadeInUp} id="what-is-event-marketing" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">2. What is Event Marketing?</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Event marketing is the strategic promotion and execution of events to achieve business objectives.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Types of Events</h3>
                  <ul className="space-y-3">
                    {[
                      { title: "Live in-person events", desc: "Conferences, workshops, trade shows" },
                      { title: "Virtual events", desc: "Webinars, online summits, live streams" },
                      { title: "Hybrid events", desc: "A combination of in-person and online" },
                      { title: "Product launches and demos", desc: "Showcasing products to targeted audiences" },
                      { title: "Networking & community-building events", desc: "Industry meetups or user groups" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">{item.title}</strong> - {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {[
                      { title: "Enhanced engagement", desc: "People interact directly with your brand" },
                      { title: "Lead generation", desc: "Capture data from attendees for follow-ups" },
                      { title: "Content creation", desc: "Recordings, blog posts, and social posts amplify reach" },
                      { title: "Brand authority", desc: "Position your company as an industry expert" },
                      { title: "Sales acceleration", desc: "Shortens the buyer journey via experiential learning" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        variants={fadeInUp}
                        className="bg-background/50 rounded-xl p-4"
                      >
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>💡 Pro tip:</strong> Always align the type of event with your marketing objective for maximum ROI.
                  </p>
                </div>
              </motion.section>

              {/* Section 3: The Event Marketing Funnel */}
              <motion.section {...fadeInUp} id="event-marketing-funnel" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">3. The Event Marketing Funnel</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A strategic event marketing approach works best when integrated into a funnel model:
                </p>

                {/* Funnel Infographic */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={funnelImage} 
                    alt="Event Marketing Funnel - Awareness, Consideration, Conversion stages"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="space-y-4">
                  {[
                    { stage: "Awareness Stage", desc: "Ads, social media, and email campaigns attract prospects", color: "bg-blue-500/10 border-blue-500/30" },
                    { stage: "Consideration Stage", desc: "Engagement via early content, webinars, or free demos", color: "bg-purple-500/10 border-purple-500/30" },
                    { stage: "Conversion Stage", desc: "Event attendance → follow-up offers → sales conversion", color: "bg-primary/10 border-primary/30" },
                    { stage: "Retention Stage", desc: "Post-event content, community groups, and ongoing engagement", color: "bg-green-500/10 border-green-500/30" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`${item.color} border rounded-xl p-4`}
                    >
                      <h4 className="font-semibold text-foreground mb-1">{item.stage}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Section 4: Planning Your Event */}
              <motion.section {...fadeInUp} id="planning-your-event" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">4. Planning Your Event</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Proper planning is non-negotiable for successful events.
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 1: Define Your Objectives</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Lead generation", "Brand positioning", "Community building", "Revenue generation"].map((obj, i) => (
                        <div key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 2: Identify Your Audience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Segment by demographics, role, and intent
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Map messaging to each segment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Consider both current customers and prospects
                      </li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 3: Event Format & Timing</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Choose online, offline, or hybrid
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Decide on session length, dates, and timing
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Plan for time zones (if global audience)
                      </li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 4: Content & Agenda</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Clear, value-driven agenda
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Balance between education, engagement, and promotion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Include Q&A, breakout sessions, and interactive polls
                      </li>
                    </ul>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 5: Budget & Resources</h3>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Venue, equipment, software licenses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Staff, speakers, and facilitators
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        Marketing and promotion budget
                      </li>
                    </ul>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                      <p className="text-foreground text-sm">
                        <strong>💡 Tip:</strong> Always add a buffer of 10-20% for unexpected expenses.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Section 5: Promoting Your Event */}
              <motion.section {...fadeInUp} id="promoting-your-event" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">5. Promoting Your Event</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Promotion is key to attendance and ROI.
                </p>

                {/* Promotion Strategies Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={promotionImage} 
                    alt="Event Promotion Strategies - Email, Social Media, Paid Ads, Partnerships, Content Marketing"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Channels</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Mail, title: "Email Marketing", desc: "Segmented campaigns with personalized CTAs" },
                      { icon: Users, title: "Social Media", desc: "LinkedIn for B2B, Instagram/Twitter for B2C" },
                      { icon: Target, title: "Paid Ads", desc: "Retargeting campaigns on Google, Meta, LinkedIn" },
                      { icon: Award, title: "Partnerships", desc: "Co-host with complementary brands to expand reach" },
                      { icon: BookOpen, title: "Content Marketing", desc: "Blog posts, guest posts, and teaser videos" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-background/50 rounded-xl p-4">
                        <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Tips for Effective Promotion</h3>
                  <ul className="space-y-3">
                    {[
                      "Start promotion 6-8 weeks in advance",
                      "Use countdown timers and early-bird incentives",
                      "Highlight key benefits of attending (learning, networking, access)",
                      "Track clicks, registrations, and conversions using UTM parameters"
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Section 6: Engaging Attendees */}
              <motion.section {...fadeInUp} id="engaging-attendees" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">6. Engaging Attendees During the Event</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Engagement is critical for perceived value and ROI.
                </p>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-4 mb-6"
                >
                  {[
                    { title: "Interactive content", desc: "Polls, Q&A sessions, live chat" },
                    { title: "Gamification", desc: "Quizzes, challenges, prizes" },
                    { title: "Storytelling", desc: "Case studies, testimonials, and success stories" },
                    { title: "High-quality speakers", desc: "Industry experts build credibility" },
                    { title: "Networking opportunities", desc: "Breakout rooms, virtual lounges" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      className="bg-card/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>🎯 Remember:</strong> Attendees should leave feeling educated, inspired, and connected.
                  </p>
                </div>
              </motion.section>

              {/* Section 7: Post-Event Follow-Up */}
              <motion.section {...fadeInUp} id="post-event-follow-up" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">7. Post-Event Follow-Up and Nurturing</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The post-event phase is where revenue is realized.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <ul className="space-y-3">
                    {[
                      "Thank you emails with recordings and resources",
                      "Segment attendees based on engagement level",
                      "Lead scoring for sales follow-up",
                      "Content repurposing: Blog posts, infographics, video snippets",
                      "Feedback surveys to improve future events"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>⚡ Pro tip:</strong> Send follow-ups within 24-48 hours while excitement is high.
                  </p>
                </div>
              </motion.section>

              {/* Section 8: Measuring ROI */}
              <motion.section {...fadeInUp} id="measuring-roi" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">8. Measuring Event Marketing ROI</h2>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-6 border border-primary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-2">ROI Formula</h3>
                  <p className="text-2xl font-mono text-primary">
                    ROI = Revenue Generated ÷ Total Event Cost × 100
                  </p>
                </div>

                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Other metrics to track:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Registrations vs. attendance rate",
                      "Engagement per session",
                      "Lead conversion rate",
                      "Pipeline contribution",
                      "Cost per lead"
                    ].map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground text-sm">
                    Tools like HubSpot, Salesforce, and Google Analytics make tracking much easier.
                  </p>
                </div>
              </motion.section>

              {/* Section 9: Tools & Platforms */}
              <motion.section {...fadeInUp} id="tools-platforms" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">9. Tools, Platforms, and Automation</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { category: "CRM", tools: "Salesforce, HubSpot" },
                    { category: "Event Platforms", tools: "Zoom, Hopin, Demio, Webex" },
                    { category: "Marketing Automation", tools: "ActiveCampaign, Mailchimp" },
                    { category: "Analytics", tools: "Google Analytics, Heap, custom dashboards" },
                    { category: "Design & Assets", tools: "Canva, Figma, Adobe Creative Suite" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-1">{item.category}</h4>
                      <p className="text-muted-foreground text-sm">{item.tools}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-blue-500 rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>🔧 Automation</strong> saves time, improves tracking, and ensures consistency across all touchpoints.
                  </p>
                </div>
              </motion.section>

              {/* Section 10: Case Studies */}
              <motion.section {...fadeInUp} id="case-studies" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">10. Case Studies & Examples</h2>
                </div>

                <div className="space-y-6">
                  {/* Case Study 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">Example 1: MyWebGlory + Kornit Digital</h3>
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <p><strong className="text-foreground">Goal:</strong> Generate qualified registrations</p>
                      <p><strong className="text-foreground">Method:</strong> Multi-channel campaign + webinar series</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4">
                      <p className="text-primary font-semibold">
                        Result: 1,208 registrations in 8 weeks, 65% attendance, pipeline growth +30%
                      </p>
                    </div>
                  </motion.div>

                  {/* Case Study 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">Example 2: B2B SaaS Summit</h3>
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <p><strong className="text-foreground">Goal:</strong> Position brand as thought leader</p>
                      <p><strong className="text-foreground">Method:</strong> 3-day virtual summit, partnership with industry associations</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4">
                      <p className="text-blue-400 font-semibold">
                        Result: 2,500 attendees, 45 backlinks generated, press coverage
                      </p>
                    </div>
                  </motion.div>
                </div>

                <p className="mt-6 text-muted-foreground text-sm italic">
                  Real-life case studies increase credibility and help generate backlinks naturally.
                </p>
              </motion.section>

              {/* Section 11: Common Mistakes - RED BACKGROUND */}
              <motion.section {...fadeInUp} id="common-mistakes" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">11. Common Event Marketing Mistakes</h2>
                </div>

                {/* Common Mistakes Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={mistakesImage} 
                    alt="Common Event Marketing Mistakes - Poor promotion, lack of objectives, ignoring segmentation, technical issues, no follow-up"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-background border border-red-500/30 rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    {[
                      { mistake: "Poor promotion", result: "low attendance" },
                      { mistake: "Lack of clear objectives", result: "hard to measure ROI" },
                      { mistake: "Ignoring audience segmentation", result: "irrelevant content" },
                      { mistake: "Technical issues during live sessions", result: "damaged credibility" },
                      { mistake: "No follow-up", result: "leads lost" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                      >
                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">
                          <strong className="text-red-400">{item.mistake}</strong> → {item.result}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 bg-background/50 rounded-xl p-4 border border-red-500/20">
                    <p className="text-foreground text-sm">
                      <strong>⚠️ Warning:</strong> Avoiding these mistakes improves both ROI and reputation.
                    </p>
                  </div>
                </motion.div>
              </motion.section>

              {/* Section 12: Advanced Strategies */}
              <motion.section {...fadeInUp} id="advanced-strategies" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">12. Advanced Strategies for Authority & Growth</h2>
                </div>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    { title: "Content repurposing", desc: "Turn each event into multiple blogs, videos, and infographics" },
                    { title: "SEO integration", desc: "Optimize event pages and post-event content for keywords" },
                    { title: "Influencer & partner co-marketing", desc: "Extend reach and credibility" },
                    { title: "Recurring events", desc: "Build community and long-term brand authority" },
                    { title: "Data-driven optimization", desc: "A/B test formats, timing, and messaging" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      className="bg-gradient-to-r from-card/80 to-card/40 border border-border hover:border-primary/50 rounded-xl p-5 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-primary" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>🚀 Authority grows</strong> when your events consistently deliver value and visibility.
                  </p>
                </div>
              </motion.section>

              {/* Section 13: Conclusion */}
              <motion.section {...fadeInUp} id="conclusion" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">13. Conclusion</h2>
                </div>

                <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Event marketing is a strategic, measurable, and revenue-driven approach. Done correctly, 
                    it generates leads, builds authority, and strengthens your brand's market position.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Start small, measure, optimize, and scale. With each event, your expertise and 
                    credibility compound, creating long-term growth.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/case-studies"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Our Case Studies
                    </Link>
                    <Link 
                      to="/pricing"
                      className="inline-flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-xl font-medium hover:border-primary/50 transition-colors"
                    >
                      See Pricing
                    </Link>
                  </div>
                </div>
              </motion.section>

              {/* Section 14: FAQs */}
              <motion.section {...fadeInUp} id="faqs" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">14. Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      q: "What is the best type of event for B2B?",
                      a: "Webinars, virtual summits, and industry workshops are most effective for lead generation and authority-building in B2B markets."
                    },
                    {
                      q: "How long should I plan before an event?",
                      a: "At least 6-8 weeks for promotion, content prep, and technical setup. For larger conferences, consider a 12-week planning cycle."
                    },
                    {
                      q: "Do I need to track ROI?",
                      a: "Yes. Measure registrations, attendance, engagement, pipeline impact, and revenue to evaluate success and optimize future events."
                    },
                    {
                      q: "Should I add animations to blog pages?",
                      a: "Light micro-interactions improve engagement, but avoid heavy effects that block content or slow loading times."
                    },
                    {
                      q: "Do images help with SEO?",
                      a: "Yes, use optimized images with alt text, infographics, and charts to boost user experience and ranking potential."
                    }
                  ].map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`faq-${i}`}
                      className="bg-card/50 border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>

              {/* Author Bio */}
              <motion.div {...fadeInUp} className="bg-card/50 border border-border rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-6">
                  <img 
                    src={authorAvatar} 
                    alt="Sarah Mitchell - Content Strategist"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Mitchell</h3>
                    <p className="text-primary mb-3">Content Strategist at MyWebGlory</p>
                    <p className="text-muted-foreground">
                      Sarah specializes in creating high-impact content strategies for B2B event marketing. 
                      With extensive experience in digital marketing and lead generation, she helps companies 
                      maximize their event ROI through strategic content and promotion.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              <RelatedPosts currentSlug="event-marketing-playbook" />

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPostEventMarketingPlaybook;
