import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of events do you work with?",
    answer: "We work with all types of events—conferences, summits, webinars, workshops, virtual events, and hybrid experiences. Whether you're expecting 100 or 100,000 attendees, our systems scale to meet your needs.",
  },
  {
    question: "How quickly can you launch campaigns?",
    answer: "We can typically have campaigns live within 7-10 business days after kickoff. This includes strategy development, creative production, funnel setup, and automation configuration. For urgent timelines, we offer an expedited launch option.",
  },
  {
    question: "What's included in the pricing?",
    answer: "Our pricing includes everything: strategy, creative production, ad spend management, funnel building, email/SMS setup, landing pages, and ongoing optimization. The only additional cost is your actual ad spend, which you control directly.",
  },
  {
    question: "Do you guarantee results?",
    answer: "While we can't guarantee specific numbers (no ethical marketer can), we do guarantee our proven process. Our average client sees 4-6x ROAS and 85%+ show rates. We're committed to transparency and will provide realistic projections during our strategy call.",
  },
  {
    question: "How do you improve show rates?",
    answer: "We use a multi-touch reminder system that includes strategic email sequences, SMS notifications, calendar integrations, and pre-event engagement content. This approach consistently delivers 80-92% show rates versus industry averages of 40-60%.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely. We integrate with all major platforms including HubSpot, Salesforce, Eventbrite, Zoom, Hopin, and most registration systems. We'll work with your existing tech stack or recommend solutions based on your needs.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="faq">
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about partnering with MyWebGlory.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
