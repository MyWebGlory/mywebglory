import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, Calendar, Clock, CheckCircle, Target, Users, BarChart3, 
  Megaphone, List, TrendingUp, BookOpen, Wrench, Award, AlertTriangle,
  MessageSquare, Share2
} from "lucide-react";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Import images
import heroImage from "@/assets/blog/authority-content-hero.jpg";
import whyMattersImage from "@/assets/blog/authority-why-matters.jpg";
import engagingAttendeesImage from "@/assets/blog/authority-engaging-attendees.jpg";
import advancedStrategiesImage from "@/assets/blog/authority-advanced-strategies.jpg";
import authorAvatar from "@/assets/sarah-mitchell.png";

const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Build Authority Through Event Content Marketing",
  "description": "Learn how to create event content that builds authority, engages audiences, and generates leads. Discover strategies for planning, promotion, and long-term impact.",
  "image": heroImage,
  "author": {
    "@type": "Person",
    "name": "Sarah Mitchell"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tope La",
    "logo": {
      "@type": "ImageObject",
      "url": "https://topela.com/logo.png"
    }
  },
  "datePublished": "2025-01-11",
  "dateModified": "2025-01-11",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://topela.com/blog/build-authority-event-content-marketing"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I host authority events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monthly or quarterly events work best depending on resources and audience size."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use heavy animations on event content pages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use subtle micro-interactions for engagement, but keep loading fast and content readable."
      }
    },
    {
      "@type": "Question",
      "name": "How can I measure authority?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Track backlinks, social shares, content engagement, and repeat attendance."
      }
    },
    {
      "@type": "Question",
      "name": "Do images help with authority and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Infographics, charts, and slides improve comprehension, engagement, and search visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most important factor for authority in event content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consistency, quality, and relevance to your target audience are key."
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
  { id: "why-authority-matters", label: "Why Authority Matters" },
  { id: "understanding-audience", label: "Understanding Your Audience" },
  { id: "content-planning", label: "Content Planning" },
  { id: "creating-content", label: "Creating Compelling Content" },
  { id: "promoting-content", label: "Promoting Your Content" },
  { id: "engaging-attendees", label: "Engaging Attendees" },
  { id: "repurposing-content", label: "Repurposing Content" },
  { id: "measuring-performance", label: "Measuring Performance" },
  { id: "tools", label: "Tools & Platforms" },
  { id: "case-studies", label: "Case Studies" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "advanced-strategies", label: "Advanced Strategies" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faqs", label: "FAQs" },
];

const BlogPostBuildAuthorityEventContent = () => {
  return (
    <>
      <SEO
        title="How to Build Authority Through Event Content Marketing"
        description="Learn how to create event content that builds authority, engages audiences, and generates leads. Discover strategies for planning, promotion, and long-term impact."
        canonicalUrl="/blog/build-authority-event-content-marketing"
        ogType="article"
        structuredData={[blogPostSchema, faqSchema]}
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
                Authority Building
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                How to Build Authority Through Event Content{" "}
                <span className="text-gradient">Marketing</span>
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
                  <span>14 min read</span>
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
                  alt="How to Build Authority Through Event Content Marketing"
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
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Authority is the cornerstone of successful marketing. When people perceive your brand as an expert, 
                  they are more likely to engage, trust, and buy. One of the most effective ways to build authority 
                  is through event content marketing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This strategy combines live or virtual events with high-quality content designed to educate, 
                  inform, and engage your target audience. In this guide, you will learn how to plan, create, 
                  promote, and measure content for events in a way that positions your brand as an industry leader.
                </p>
              </motion.section>

              {/* Section 2: Why Authority Matters */}
              <motion.section {...fadeInUp} id="why-authority-matters" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">2. Why Authority Matters in Event Marketing</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Authority gives your brand trust and credibility. Attendees are more likely to:
                </p>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-3 mb-8"
                >
                  {[
                    "Attend your events consistently",
                    "Engage with your content",
                    "Share your content with peers",
                    "Convert into customers"
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

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={whyMattersImage} 
                    alt="Why Authority Matters in Event Marketing"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground">
                    <strong>💡 Pro tip:</strong> Authority also contributes to SEO indirectly. When authoritative 
                    content earns backlinks and shares, it signals trust to search engines, improving ranking potential.
                  </p>
                </div>
              </motion.section>

              {/* Section 3: Understanding Your Audience */}
              <motion.section {...fadeInUp} id="understanding-audience" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">3. Understanding Your Audience</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Before creating content, you must know who you are talking to. Event content only works 
                  when it aligns with the needs, challenges, and goals of your target audience.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Steps to Understand Your Audience</h3>
                  <ul className="space-y-3">
                    {[
                      "Segment by industry, role, and experience level",
                      "Identify pain points and key questions",
                      "Determine preferred content formats (webinars, workshops, guides)",
                      "Monitor competitor content to identify gaps",
                      "Collect feedback from past attendees and surveys"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding your audience ensures your content is relevant, actionable, and valuable, 
                  which builds authority more effectively than generic content.
                </p>
              </motion.section>

              {/* Section 4: Content Planning */}
              <motion.section {...fadeInUp} id="content-planning" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">4. Content Planning for Authority Events</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Planning is the foundation of successful event content marketing. A clear plan ensures 
                  your content resonates and positions you as an expert.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Define objectives", desc: "Lead generation, brand positioning, customer education" },
                    { title: "Map content to audience journey", desc: "Awareness, consideration, and conversion stages" },
                    { title: "Choose formats", desc: "Presentation slides, panels, workshops, breakout sessions, or videos" },
                    { title: "Create an editorial calendar", desc: "Schedule content before, during, and after the event" },
                    { title: "Assign responsibilities", desc: "Speakers, designers, content creators, and moderators" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Section 5: Creating Compelling Content */}
              <motion.section {...fadeInUp} id="creating-content" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">5. Creating Compelling Event Content</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Content is the heart of authority-building. It should educate, inform, and leave a lasting impression.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Characteristics of Compelling Content</h3>
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    {[
                      { title: "Clear and concise", desc: "Avoid jargon and complex language" },
                      { title: "Data-driven", desc: "Include statistics, case studies, and references" },
                      { title: "Actionable", desc: "Provide steps attendees can implement immediately" },
                      { title: "Visual", desc: "Use slides, charts, diagrams, and infographics" },
                      { title: "Storytelling", desc: "Use real examples to make points memorable" }
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

                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Content Types</h3>
                  <ul className="space-y-3">
                    {[
                      { title: "Keynotes and presentations", desc: "Showcase expertise in a structured format" },
                      { title: "Panels and discussions", desc: "Show multiple perspectives and thought leadership" },
                      { title: "Workshops", desc: "Provide hands-on, practical knowledge" },
                      { title: "Guides and handouts", desc: "Extend the learning beyond the event" },
                      { title: "Recorded sessions", desc: "Serve as evergreen content for ongoing authority" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">{item.title}</strong> - {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Section 6: Promoting Your Content */}
              <motion.section {...fadeInUp} id="promoting-content" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">6. Promoting Your Event Content</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Even the best content fails if no one sees it. Promotion is critical to reach your 
                  target audience and build authority.
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    { channel: "Email Marketing", tips: "Segment lists, personalize invitations, send reminders" },
                    { channel: "Social Media", tips: "Teasers, countdowns, speaker highlights, behind-the-scenes" },
                    { channel: "Paid Ads", tips: "Targeted campaigns on LinkedIn, Google, and Facebook" },
                    { channel: "Partner Outreach", tips: "Co-promotion with industry partners and influencers" },
                    { channel: "Content Syndication", tips: "Share snippets on Medium, LinkedIn Articles, or industry forums" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-2">{item.channel}</h3>
                      <p className="text-muted-foreground text-sm">{item.tips}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                  <p className="text-lg text-foreground">
                    <strong>📊 Data Point:</strong> Events promoted across 3+ channels see{" "}
                    <span className="text-primary font-bold">45% higher registration rates</span>{" "}
                    compared to single-channel promotion.
                  </p>
                </div>
              </motion.section>

              {/* Section 7: Engaging Attendees */}
              <motion.section {...fadeInUp} id="engaging-attendees" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">7. Engaging Attendees During Events</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Engagement is key to building authority. Interactive events leave lasting impressions 
                  and encourage sharing.
                </p>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={engagingAttendeesImage} 
                    alt="Engaging Attendees During Events"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Engagement Tactics</h3>
                  <ul className="space-y-3">
                    {[
                      "Live polls and Q&A sessions",
                      "Breakout rooms for networking",
                      "Interactive workshops with hands-on exercises",
                      "Gamification and prizes",
                      "Real-time chat and community features"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Section 8: Repurposing Content */}
              <motion.section {...fadeInUp} id="repurposing-content" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">8. Repurposing Event Content</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Don't let your event content die after the event. Repurposing extends its lifespan 
                  and multiplies authority-building opportunities.
                </p>

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  {[
                    { format: "Blog posts", desc: "Turn sessions into written articles" },
                    { format: "Social clips", desc: "Share key moments on social media" },
                    { format: "Podcasts", desc: "Audio versions of panels and interviews" },
                    { format: "Infographics", desc: "Visual summaries of key insights" },
                    { format: "Email series", desc: "Drip campaigns with event highlights" },
                    { format: "E-books/Guides", desc: "Comprehensive resources from multiple sessions" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      className="bg-card/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                    >
                      <h3 className="font-semibold text-foreground mb-2">{item.format}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Section 9: Measuring Performance */}
              <motion.section {...fadeInUp} id="measuring-performance" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">9. Measuring Content Performance</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  What gets measured gets improved. Track these metrics to optimize your authority-building efforts.
                </p>

                <div className="bg-card/50 border border-border rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Metrics to Track</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Registration-to-attendance rate",
                      "Session engagement scores",
                      "Content downloads",
                      "Social shares and mentions",
                      "Backlinks earned",
                      "Pipeline generated",
                      "Post-event survey scores",
                      "Repeat attendance rate"
                    ].map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                  <p className="text-foreground font-medium">
                    <strong>Key Goal:</strong> Use data to identify what resonates and double down on high-performing content.
                  </p>
                </div>
              </motion.section>

              {/* Section 10: Tools */}
              <motion.section {...fadeInUp} id="tools" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">10. Tools & Platforms</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The right tools streamline your event content workflow and maximize impact.
                </p>

                <div className="space-y-4">
                  {[
                    { category: "CRM", tools: "HubSpot, Salesforce" },
                    { category: "Event Platforms", tools: "Zoom, Hopin, Demio" },
                    { category: "Marketing Automation", tools: "Mailchimp, ActiveCampaign" },
                    { category: "Design & Content", tools: "Canva, Figma, Adobe Creative Suite" },
                    { category: "Analytics", tools: "Google Analytics, Google Search Console" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground mb-2">{item.category}</h3>
                      <p className="text-muted-foreground">{item.tools}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Section 11: Case Studies */}
              <motion.section {...fadeInUp} id="case-studies" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">11. Case Studies</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Example 1: SaaS Summit</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A software company hosted a three-day virtual summit. By aligning content with audience 
                      pain points and repurposing sessions into blogs and videos, they generated 2,500 new leads 
                      and earned 30 high-quality backlinks.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Example 2: Industry Workshop Series</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An agency ran monthly workshops. Each session was recorded and shared on social channels. 
                      This content strategy positioned the agency as a thought leader, resulting in consistent 
                      media mentions and a 25% increase in client inquiries.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Section 12: Common Mistakes */}
              <motion.section {...fadeInUp} id="common-mistakes" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">12. Common Mistakes to Avoid</h2>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
                  <ul className="space-y-4">
                    {[
                      "Focusing on sales instead of education",
                      "Ignoring audience needs and preferences",
                      "Creating content too late in the planning process",
                      "Neglecting follow-up and content repurposing",
                      "Overloading content with technical jargon"
                    ].map((mistake, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Section 13: Advanced Strategies */}
              <motion.section {...fadeInUp} id="advanced-strategies" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">13. Advanced Strategies for Long-Term Authority</h2>
                </div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={advancedStrategiesImage} 
                    alt="Advanced Strategies for Long-Term Authority"
                    className="w-full h-auto"
                  />
                </motion.div>

                <div className="bg-card/50 border border-border rounded-2xl p-6">
                  <ul className="space-y-3">
                    {[
                      { title: "Recurring events", desc: "Build a loyal audience over time" },
                      { title: "Guest speakers and influencers", desc: "Extend reach and credibility" },
                      { title: "Content ecosystems", desc: "Integrate blogs, videos, and social posts" },
                      { title: "SEO for event content", desc: "Optimize all repurposed content for search engines" },
                      { title: "Feedback loops", desc: "Continuously improve content based on attendee input" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">{item.title}</strong> - {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Section 14: Conclusion */}
              <motion.section {...fadeInUp} id="conclusion" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">14. Conclusion</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Event content marketing is one of the most effective ways to build authority, engage audiences, 
                  and generate leads. By planning carefully, creating valuable content, promoting effectively, 
                  and measuring results, your brand can become a recognized expert in your industry.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    "Generate qualified leads",
                    "Build industry authority",
                    "Create lasting relationships"
                  ].map((benefit, i) => (
                    <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                      <p className="font-medium text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Focus on long-term authority by repurposing content, engaging audiences, and continuously 
                  improving your events. Each piece of content becomes a building block in your reputation 
                  as a trusted thought leader.
                </p>
              </motion.section>

              {/* Section 15: FAQs */}
              <motion.section {...fadeInUp} id="faqs" className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">15. Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      q: "How often should I host authority events?",
                      a: "Monthly or quarterly events work best depending on resources and audience size. Consistency is more important than frequency."
                    },
                    {
                      q: "Should I use heavy animations on event content pages?",
                      a: "Use subtle micro-interactions for engagement, but keep loading fast and content readable. Performance matters for SEO and user experience."
                    },
                    {
                      q: "How can I measure authority?",
                      a: "Track backlinks, social shares, content engagement, and repeat attendance. These metrics indicate growing trust and recognition in your industry."
                    },
                    {
                      q: "Do images help with authority and SEO?",
                      a: "Yes. Infographics, charts, and slides improve comprehension, engagement, and search visibility. Always use descriptive alt text for accessibility and SEO."
                    },
                    {
                      q: "What is the most important factor for authority in event content?",
                      a: "Consistency, quality, and relevance to your target audience are key. Deliver value at every touchpoint to build lasting authority."
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

              {/* CTA Section */}
              <motion.section {...fadeInUp} className="mb-16">
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Ready to Build Authority Through Events?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss how we can help you create event content that positions your brand 
                    as an industry leader and generates measurable results.
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
              <motion.div {...fadeInUp} className="bg-card/50 border border-border rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-6">
                  <img 
                    src={authorAvatar} 
                    alt="Sarah Mitchell - Content Strategist"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Mitchell</h3>
                    <p className="text-primary mb-3">Content Strategist at Tope La</p>
                    <p className="text-muted-foreground">
                      Sarah specializes in creating high-impact content strategies for B2B event marketing. 
                      With extensive experience in digital marketing and authority building, she helps companies 
                      maximize their event ROI through strategic content and promotion.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              <RelatedPosts currentSlug="build-authority-event-content-marketing" />

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPostBuildAuthorityEventContent;
