import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ClientLogosSlider from "@/components/landing/ClientLogosSlider";
import { ArrowLeft, Target, DollarSign, Megaphone, Clock, Users, Building2, Rocket, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  questions: {
    question: string;
    answer: React.ReactNode;
    answerText: string; // Plain text for schema
  }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Results & Guarantees",
    icon: <Target className="w-5 h-5" />,
    questions: [
      {
        question: "Do you guarantee results?",
        answerText: "We guarantee execution, systems, and best-in-class event marketing practices, not revenue. Events depend on multiple factors outside our control: your offer, pricing, sales process, and follow-up. What we do guarantee is: Qualified acquisition, High show-up engineering, Clean pipelines, Measurable outcomes. We build systems that make results possible and repeatable.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">We guarantee execution, systems, and best-in-class event marketing practices, not revenue.</p>
            <p className="text-muted-foreground">Events depend on multiple factors outside our control: your offer, pricing, sales process, and follow-up.</p>
            <p className="text-muted-foreground">What we do guarantee is:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Qualified acquisition</li>
              <li>High show-up engineering</li>
              <li>Clean pipelines</li>
              <li>Measurable outcomes</li>
            </ul>
            <p className="text-muted-foreground">We build systems that make results possible and repeatable.</p>
          </div>
        ),
      },
      {
        question: "Do you bring random attendees or qualified leads?",
        answerText: "Never random. Every event is built around: A defined ICP, Market-specific messaging, Targeted acquisition channels. We optimize for quality over volume. Attendance is important, who attends is everything.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Never random.</p>
            <p className="text-muted-foreground">Every event is built around:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>A defined ICP</li>
              <li>Market-specific messaging</li>
              <li>Targeted acquisition channels</li>
            </ul>
            <p className="text-muted-foreground">We optimize for quality over volume. Attendance is important, who attends is everything.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Pricing & Investment",
    icon: <DollarSign className="w-5 h-5" />,
    questions: [
      {
        question: "Is ad spend included?",
        answerText: "No. Ad spend is not included in our fees and is paid directly by the client to the platforms. This gives you: Full transparency, Full control, No hidden margins. We manage strategy, setup, creatives, and optimization.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">No.</p>
            <p className="text-muted-foreground">Ad spend is not included in our fees and is paid directly by the client to the platforms.</p>
            <p className="text-muted-foreground">This gives you:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Full transparency</li>
              <li>Full control</li>
              <li>No hidden margins</li>
            </ul>
            <p className="text-muted-foreground">We manage strategy, setup, creatives, and optimization.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Channels & Methods",
    icon: <Megaphone className="w-5 h-5" />,
    questions: [
      {
        question: "Which ad platforms do you use?",
        answerText: "It depends on your market and ICP. We regularly work with: Meta (Facebook & Instagram), LinkedIn, Google (where relevant), Other niche platforms when appropriate. Platform choice is strategy-driven, not preference-driven.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">It depends on your market and ICP.</p>
            <p className="text-muted-foreground">We regularly work with:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Meta (Facebook & Instagram)</li>
              <li>LinkedIn</li>
              <li>Google (where relevant)</li>
              <li>Other niche platforms when appropriate</li>
            </ul>
            <p className="text-muted-foreground">Platform choice is strategy-driven, not preference-driven.</p>
          </div>
        ),
      },
      {
        question: "Do you handle organic acquisition as well?",
        answerText: "Yes. Depending on the plan, we deploy: Social content, Community activation, Comment & engagement strategies, Outreach campaigns, Email list activation. Organic is never improvised, it's structured and intentional.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Yes.</p>
            <p className="text-muted-foreground">Depending on the plan, we deploy:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Social content</li>
              <li>Community activation</li>
              <li>Comment & engagement strategies</li>
              <li>Outreach campaigns</li>
              <li>Email list activation</li>
            </ul>
            <p className="text-muted-foreground">Organic is never improvised - it's structured and intentional.</p>
          </div>
        ),
      },
      {
        question: "Do you work with any type of business?",
        answerText: "No. We work best with companies that: Have a real offer, Sell high-ticket or B2B services/products, Understand the value of long-term systems, Are ready to follow up on leads. We are not a fit for early-stage projects or 'quick wins'.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">No.</p>
            <p className="text-muted-foreground">We work best with companies that:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Have a real offer</li>
              <li>Sell high-ticket or B2B services/products</li>
              <li>Understand the value of long-term systems</li>
              <li>Are ready to follow up on leads</li>
            </ul>
            <p className="text-muted-foreground">We are not a fit for early-stage projects or "quick wins".</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Process & Timeline",
    icon: <Clock className="w-5 h-5" />,
    questions: [
      {
        question: "How long does an event project take?",
        answerText: "Most events run on a 30 to 90-day timeline, depending on: Market maturity, Acquisition channels, Event complexity. We define the timeline clearly before starting.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Most events run on a 30 to 90-day timeline, depending on:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Market maturity</li>
              <li>Acquisition channels</li>
              <li>Event complexity</li>
            </ul>
            <p className="text-muted-foreground">We define the timeline clearly before starting.</p>
          </div>
        ),
      },
      {
        question: "Do you handle sales closing?",
        answerText: "No. We build the pipeline and deliver qualified leads. Sales closing stays with you or your team. That separation keeps incentives clean and execution sharp.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">No.</p>
            <p className="text-muted-foreground">We build the pipeline and deliver qualified leads. Sales closing stays with you or your team.</p>
            <p className="text-muted-foreground">That separation keeps incentives clean and execution sharp.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Integration & Setup",
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: "Can you work with our internal team?",
        answerText: "Yes. We regularly integrate with: Marketing teams, Sales teams, External partners. We provide structure, workflows, and clarity, not friction.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Yes.</p>
            <p className="text-muted-foreground">We regularly integrate with:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Marketing teams</li>
              <li>Sales teams</li>
              <li>External partners</li>
            </ul>
            <p className="text-muted-foreground">We provide structure, workflows, and clarity, not friction.</p>
          </div>
        ),
      },
      {
        question: "Do you provide CRM setup?",
        answerText: "Yes, depending on the plan. We can: Set up a CRM, Integrate with your existing one, Design pipelines and lead qualification stages. Advanced CRM systems are included in higher-tier plans.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Yes, depending on the plan.</p>
            <p className="text-muted-foreground">We can:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Set up a CRM</li>
              <li>Integrate with your existing one</li>
              <li>Design pipelines and lead qualification stages</li>
            </ul>
            <p className="text-muted-foreground">Advanced CRM systems are included in higher-tier plans.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Event Types",
    icon: <Building2 className="w-5 h-5" />,
    questions: [
      {
        question: "Do you run in-person events?",
        answerText: "Our core expertise is event marketing systems, not logistics. We can support: Acquisition, Registration, Follow-up, Post-event leverage. Physical event logistics (venues, catering, etc.) are handled by the client.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Our core expertise is event marketing systems, not logistics.</p>
            <p className="text-muted-foreground">We can support:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Acquisition</li>
              <li>Registration</li>
              <li>Follow-up</li>
              <li>Post-event leverage</li>
            </ul>
            <p className="text-muted-foreground">Physical event logistics (venues, catering, etc.) are handled by the client.</p>
          </div>
        ),
      },
      {
        question: "What happens after the event?",
        answerText: "That's where most of the value is created. We: Activate post-event communications, Drive leads into your ecosystem, Repurpose content, Deliver analytics and insights. The event is a starting point, not the finish line.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">That's where most of the value is created.</p>
            <p className="text-muted-foreground">We:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Activate post-event communications</li>
              <li>Drive leads into your ecosystem</li>
              <li>Repurpose content</li>
              <li>Deliver analytics and insights</li>
            </ul>
            <p className="text-muted-foreground">The event is a starting point, not the finish line.</p>
          </div>
        ),
      },
    ],
  },
  {
    title: "Getting Started",
    icon: <Rocket className="w-5 h-5" />,
    questions: [
      {
        question: "How many clients do you work with at the same time?",
        answerText: "We cap our capacity at 4 clients per month. This ensures: Focus, Speed, Quality, Accountability. If we're full, we'll tell you.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">We cap our capacity at 4 clients per month.</p>
            <p className="text-muted-foreground">This ensures:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Focus</li>
              <li>Speed</li>
              <li>Quality</li>
              <li>Accountability</li>
            </ul>
            <p className="text-muted-foreground">If we're full, we'll tell you.</p>
          </div>
        ),
      },
      {
        question: "How do we get started?",
        answerText: "Simple. Apply for a strategy call, We assess fit, We define the right plan, We build the system.",
        answer: (
          <div className="space-y-4">
            <p className="font-medium text-foreground">Simple.</p>
            <ul className="list-none space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                Apply for a strategy call
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                We assess fit
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                We define the right plan
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                We build the system
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

// FAQ Schema for rich snippets - uses plain text answers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap(category => 
    category.questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answerText
      }
    }))
  )
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQ | Event Marketing Questions Answered | MyWebGlory"
        description="Get answers to common event marketing questions: guarantees, pricing, ad platforms, timelines, and more. Everything you need to know before working with us."
        canonicalUrl="/faq"
        structuredData={faqSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Clear answers to common questions about how we work, what we deliver, and whether we're the right fit.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6">
        <ClientLogosSlider />
      </div>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:gap-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold">{category.title}</h2>
                </div>
                
                {/* Questions Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border/50 rounded-xl px-6 bg-card/50 hover:bg-card/80 transition-colors data-[state=open]:bg-card data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left font-medium py-5 hover:no-underline text-base md:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm md:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              "If you still have questions, that's a good sign.<br />
              It usually means your event matters."
            </p>
            
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold">
                Apply for a Strategy Call
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
