import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MyWebGlory transformed our event marketing. We went from struggling to fill seats to selling out in 3 weeks. Their systems just work.",
    name: "Sarah Chen",
    title: "VP of Events",
    company: "TechForward Inc.",
    avatar: "SC",
  },
  {
    quote: "The ROI was incredible. For every dollar we spent, we got $6 back in ticket sales. Plus, our show rate jumped from 60% to 91%.",
    name: "Marcus Johnson",
    title: "Conference Director",
    company: "Finance Leaders Summit",
    avatar: "MJ",
  },
  {
    quote: "They don't just run ads—they build complete systems. The email sequences alone were worth the investment. Absolutely recommend.",
    name: "Emily Rodriguez",
    title: "Marketing Lead",
    company: "Growth Academy",
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Voices of Triumph
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't take our word for it. Here's what event organizers say about their path to dominance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
