import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do you guarantee results?",
    answer: "We guarantee execution, systems, and best-in-class event marketing practices, not revenue. Events depend on multiple factors outside our control. What we do guarantee is qualified acquisition, high show-up engineering, clean pipelines, and measurable outcomes."
  },
  {
    question: "Is ad spend included?",
    answer: "No. Ad spend is not included in our fees and is paid directly by the client to the platforms. This gives you full transparency, full control, and no hidden margins. We manage strategy, setup, creatives, and optimization."
  },
  {
    question: "Do you bring random attendees or qualified leads?",
    answer: "Never random. Every event is built around a defined ICP, market-specific messaging, and targeted acquisition channels. We optimize for quality over volume. Attendance is important, who attends is everything."
  },
  {
    question: "How long does an event project take?",
    answer: "Most events run on a 30 to 90-day timeline, depending on market maturity, acquisition channels, and event complexity. We define the timeline clearly before starting."
  },
  {
    question: "Do you handle sales closing?",
    answer: "No. We build the pipeline and deliver qualified leads. Sales closing stays with you or your team. That separation keeps incentives clean and execution sharp."
  },
  {
    question: "How many clients do you work with at the same time?",
    answer: "We cap our capacity at 4 clients per month. This ensures focus, speed, quality, and accountability. If we're full, we'll tell you."
  }
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="faq">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Clear answers to help you decide.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 hover:bg-card/80 transition-colors data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* View All FAQs Button */}
          <div className="mt-10 text-center">
            <Link to="/faq">
              <Button variant="outline" size="lg" className="group">
                View All FAQs
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;