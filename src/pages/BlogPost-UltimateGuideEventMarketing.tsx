import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CheckCircle, Target, Users, BarChart3, Mail, Share2, Megaphone, List } from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Images
import heroImage from "@/assets/blog/event-marketing-hero.jpg";
import promotionStrategiesImage from "@/assets/blog/event-promotion-strategies.jpg";
import icpTargetingImage from "@/assets/blog/icp-targeting.jpg";
import eventGraphicImage from "@/assets/blog/event-marketing-graphic.jpg";
import authorAvatar from "@/assets/sarah-mitchell.png";

// Structured data for the article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Ultimate Guide to Event Marketing: How to Turn Events Into Revenue",
  description: "Discover the complete event marketing guide for B2B and B2C companies. Learn proven strategies to fill events, engage audiences, and generate revenue from every event.",
  image: "https://mywebglory.com/assets/blog/event-marketing-hero.jpg",
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
    "@id": "https://mywebglory.com/blog/ultimate-guide-event-marketing"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best type of event for B2B companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For B2B companies, webinars, virtual summits, and industry conferences tend to work best. These formats allow for in-depth discussions, thought leadership positioning, and direct engagement with decision-makers. The key is matching the format to your audience's preferences and your business objectives."
      }
    },
    {
      "@type": "Question",
      name: "How many weeks should I plan before an event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For optimal results, start promoting your event 6-8 weeks before launch. This gives enough time for email campaigns, social media promotion, and partner outreach. For larger conferences or summits, consider a 12-week planning cycle to maximize attendance and engagement."
      }
    },
    {
      "@type": "Question",
      name: "What is a good attendance rate for virtual events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical virtual event attendance rate ranges from 40-50% of registrations. However, with strategic reminder sequences and engaging pre-event content, top performers can achieve 60-70% attendance rates. Our clients at MyWebGlory regularly achieve 65%+ attendance through optimized follow-up campaigns."
      }
    },
    {
      "@type": "Question",
      name: "How do I measure event marketing ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure event marketing ROI by tracking: registration-to-attendance conversion, engagement metrics during the event, post-event follow-up responses, pipeline generated, and deals closed attributed to the event. Compare total revenue generated against event costs for a clear ROI calculation."
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

const BlogPostUltimateGuideEventMarketing = () => {
  return (
    <>
      <SEO
        title="The Ultimate Guide to Event Marketing: How to Turn Events Into Revenue"
        description="Discover the complete event marketing guide for B2B and B2C companies. Learn proven strategies to fill events, engage audiences, and generate revenue from every event."
        canonicalUrl="/blog/ultimate-guide-event-marketing"
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
                Event Marketing Strategy
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                The Ultimate Guide to Event Marketing: How to Turn Events Into{" "}
                <span className="text-gradient">Revenue</span>
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
                  <span>12 min read</span>
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
                  alt="Virtual event marketing strategies and digital engagement techniques"
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
                  {[
                    { id: "what-is-event-marketing", label: "What is Event Marketing?" },
                    { id: "why-event-marketing-works", label: "Why Event Marketing Works" },
                    { id: "how-to-plan", label: "How to Plan a High-Impact Event" },
                    { id: "event-promotion", label: "Event Promotion Strategies" },
                    { id: "engaging-audience", label: "Engaging Your Audience" },
                    { id: "post-event", label: "Post-Event Strategies" },
                    { id: "tools", label: "Tools & Technologies" },
                    { id: "case-study", label: "Case Study" },
                    { id: "best-practices", label: "Best Practices" },
                    { id: "conclusion", label: "Conclusion" },
                  ].map((item, i) => (
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

              {/* Introduction */}
              <motion.div {...fadeInUp} className="prose prose-lg prose-invert max-w-none mb-16">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Event marketing has become one of the most powerful ways to drive brand awareness, 
                  customer engagement, and revenue. Unlike traditional advertising, events allow companies 
                  to create memorable experiences that build trust and accelerate conversions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In this guide, we'll explore everything you need to know about event marketing — from 
                  strategy and planning to execution and measurement — so you can turn every event into 
                  a profit-generating machine.
                </p>
              </motion.div>

              {/* Section 1: What is Event Marketing */}
              <motion.section {...fadeInUp} id="what-is-event-marketing" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">1. What is Event Marketing?</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Event marketing is the strategic use of live or virtual events to promote a brand, 
                  product, or service. It's about creating experiences that connect with your audience 
                  on a deeper level than traditional marketing channels.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Types of Events Include:</h3>
                  <ul className="space-y-3">
                    {[
                      "Live conferences and workshops",
                      "Webinars and virtual summits",
                      "Product launches and demos",
                      "Networking and industry events",
                      "Trade shows and expos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground font-medium">
                    <strong>Key Goal:</strong> Create engagement, nurture leads, and influence purchasing decisions.
                  </p>
                </div>
              </motion.section>

              {/* Section 2: Why Event Marketing Works */}
              <motion.section {...fadeInUp} id="why-event-marketing-works" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">2. Why Event Marketing Works</h2>
                </div>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-4 mb-8"
                >
                  {[
                    { title: "Human Connection", desc: "People trust personal interactions more than ads" },
                    { title: "Experiential Memory", desc: "Interactive experiences stick in the audience's mind" },
                    { title: "Lead Generation", desc: "Events capture qualified leads for follow-up" },
                    { title: "Authority Building", desc: "Hosting positions your company as an industry expert" },
                    { title: "Content Amplification", desc: "Recordings and case studies extend reach beyond the event" }
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

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <p className="text-lg text-foreground">
                    <strong>📊 Data Point:</strong> Companies that run strategic events report{" "}
                    <span className="text-primary font-bold">25–40% higher conversion rates</span>{" "}
                    compared to standard digital campaigns.
                  </p>
                </div>
              </motion.section>

              {/* Image Break */}
              <motion.div {...fadeInUp} className="mb-16 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={eventGraphicImage} 
                  alt="Event marketing funnel and strategy visualization"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Section 3: How to Plan */}
              <motion.section {...fadeInUp} id="how-to-plan" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">3. How to Plan a High-Impact Event</h2>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 1: Define Objectives</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Lead generation", "Brand awareness", "Customer education", "Community building"].map((obj, i) => (
                        <div key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 2: Identify Target Audience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Segment by industry, role, and engagement stage</li>
                      <li>• Tailor content and format to audience needs</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 3: Choose Event Type</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Online vs in-person</li>
                      <li>• Workshop, webinar, summit, trade show</li>
                    </ul>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-card/50 border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Step 4: Set KPIs</h3>
                    <p className="text-muted-foreground">
                      Registrations, attendance rate, engagement, follow-up conversions
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* ICP Targeting Image */}
              <motion.div {...fadeInUp} className="mb-16 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={icpTargetingImage} 
                  alt="Ideal customer profile study and targeting strategy for event marketing"
                  className="w-full h-auto"
                />
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Understanding your ICP is crucial for event success
                </p>
              </motion.div>

              {/* Section 4: Event Promotion */}
              <motion.section {...fadeInUp} id="event-promotion" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">4. Event Promotion Strategies</h2>
                </div>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="space-y-4 mb-8"
                >
                  {[
                    { icon: Mail, title: "Email Marketing", desc: "Segmented campaigns with clear CTAs" },
                    { icon: Share2, title: "Social Media", desc: "LinkedIn, Instagram, Twitter for B2B and B2C" },
                    { icon: Target, title: "Paid Ads", desc: "Google Ads, LinkedIn Ads for high-value leads" },
                    { icon: Users, title: "Partnerships", desc: "Co-host with complementary brands for reach" },
                    { icon: BarChart3, title: "Content Marketing", desc: "Blog posts, guides, and teaser videos" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-4 bg-card/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                  <p className="text-foreground">
                    <strong>💡 Pro Tip:</strong> Promote your event at least{" "}
                    <span className="text-primary font-semibold">6–8 weeks before launch</span>{" "}
                    to maximize attendance.
                  </p>
                </div>
              </motion.section>

              {/* Promotion Strategies Image */}
              <motion.div {...fadeInUp} className="mb-16 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={promotionStrategiesImage} 
                  alt="Event promotion strategies including email, social media, and content marketing"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Section 5: Engaging Audience */}
              <motion.section {...fadeInUp} id="engaging-audience" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">5. Engaging Your Audience During the Event</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Interactive Sessions", desc: "Q&A, polls, breakout rooms" },
                    { title: "Gamification", desc: "Contests, leaderboards, or prizes" },
                    { title: "Storytelling", desc: "Focus on outcomes and success stories" },
                    { title: "Speaker Quality", desc: "Experts build trust and credibility" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Section 6: Post-Event */}
              <motion.section {...fadeInUp} id="post-event" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">6. Post-Event Strategies</h2>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { title: "Follow-up Emails", desc: "Thank attendees, provide recordings, invite next actions" },
                    { title: "Content Repurposing", desc: "Blog posts, social snippets, videos" },
                    { title: "Lead Nurturing", desc: "Segment attendees for targeted campaigns" },
                    { title: "Measure Results", desc: "ROI, engagement, pipeline growth" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{item.title}:</span>{" "}
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>Pro Tip:</strong> Always compare KPIs against objectives to refine your next event.
                  </p>
                </div>
              </motion.section>

              {/* Section 7: Tools */}
              <motion.section {...fadeInUp} id="tools" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">7. Tools & Technologies for Event Marketing</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "CRM Integration", tools: "Salesforce, HubSpot for lead tracking" },
                    { title: "Webinar Platforms", tools: "Zoom, Hopin, Demio" },
                    { title: "Marketing Automation", tools: "Mailchimp, ActiveCampaign" },
                    { title: "Analytics", tools: "Google Analytics, event dashboards" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.tools}</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground mt-6">
                  The right tools allow scaling without losing personalization.
                </p>
              </motion.section>

              {/* Section 8: Case Study */}
              <motion.section {...fadeInUp} id="case-study" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">8. Event Marketing Case Study</h2>
                </div>

                <div className="bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border border-primary/20 rounded-2xl p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    MyWebGlory helped <strong className="text-foreground">Kornit Digital</strong> generate{" "}
                    <span className="text-primary font-bold">1,208 registrations in 8 weeks</span> by 
                    combining strategic email campaigns, LinkedIn targeting, and engaging webinars.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "1,208", label: "Registrations" },
                      { value: "65%", label: "Attendance Rate" },
                      { value: "+30%", label: "Pipeline Above Target" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Link 
                      to="/case-studies" 
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      Read the full case study →
                    </Link>
                  </div>
                </div>
              </motion.section>

              {/* Section 9: Best Practices */}
              <motion.section {...fadeInUp} id="best-practices" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">9. Best Practices for Long-Term Success</h2>
                </div>

                <ul className="space-y-3">
                  {[
                    "Plan content in quarterly cycles",
                    "Keep events consistent to build audience trust",
                    "Record and repurpose content for SEO and backlinks",
                    "Encourage attendee sharing on social media",
                    "Continuously test formats, timing, and topics"
                  ].map((practice, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Section 10: Conclusion */}
              <motion.section {...fadeInUp} id="conclusion" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">10. Conclusion</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Event marketing is more than just hosting an event — it's a strategic revenue engine. 
                  With careful planning, engaging content, and follow-up, your events can:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    "Generate qualified leads",
                    "Build your authority in the industry",
                    "Create long-lasting customer relationships"
                  ].map((benefit, i) => (
                    <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                      <p className="font-medium text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Start with one well-planned event, analyze results, and scale your efforts for maximum ROI.
                </p>
              </motion.section>

              {/* FAQ Section */}
              <motion.section {...fadeInUp} className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      q: "What is the best type of event for B2B companies?",
                      a: "For B2B companies, webinars, virtual summits, and industry conferences tend to work best. These formats allow for in-depth discussions, thought leadership positioning, and direct engagement with decision-makers. The key is matching the format to your audience's preferences and your business objectives."
                    },
                    {
                      q: "How many weeks should I plan before an event?",
                      a: "For optimal results, start promoting your event 6-8 weeks before launch. This gives enough time for email campaigns, social media promotion, and partner outreach. For larger conferences or summits, consider a 12-week planning cycle to maximize attendance and engagement."
                    },
                    {
                      q: "What is a good attendance rate for virtual events?",
                      a: "A typical virtual event attendance rate ranges from 40-50% of registrations. However, with strategic reminder sequences and engaging pre-event content, top performers can achieve 60-70% attendance rates. Our clients at MyWebGlory regularly achieve 65%+ attendance through optimized follow-up campaigns."
                    },
                    {
                      q: "How do I measure event marketing ROI?",
                      a: "Measure event marketing ROI by tracking: registration-to-attendance conversion, engagement metrics during the event, post-event follow-up responses, pipeline generated, and deals closed attributed to the event. Compare total revenue generated against event costs for a clear ROI calculation."
                    }
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-card/50 border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-left text-foreground hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>

              {/* CTA Section */}
              <motion.section {...fadeInUp} className="mb-16">
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Ready to Transform Your Events Into Revenue?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss how we can help you fill your next event with qualified attendees 
                    and generate measurable pipeline growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Book a Strategy Call
                    </Link>
                    <Link 
                      to="/how-it-works"
                      className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold hover:bg-card/80 transition-colors"
                    >
                      See How We Work
                    </Link>
                  </div>
                </div>
              </motion.section>

              {/* Author Bio */}
              <motion.section {...fadeInUp} className="border-t border-border pt-8">
                <div className="flex items-start gap-6">
                  <img 
                    src={authorAvatar} 
                    alt="Sarah Mitchell - Content Strategist at MyWebGlory" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Sarah Mitchell</h3>
                    <p className="text-primary text-sm mb-2">Content Strategist at MyWebGlory</p>
                    <p className="text-muted-foreground text-sm">
                      Sarah specializes in creating compelling content that drives event registrations 
                      and engagement. With a background in B2B marketing, she helps brands craft 
                      stories that resonate with their target audiences.
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </article>

        {/* Related Posts Banner */}
        <RelatedPosts currentSlug="ultimate-guide-event-marketing" />
      </main>

      <Footer />
    </>
  );
};

export default BlogPostUltimateGuideEventMarketing;
