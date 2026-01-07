import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Megaphone, 
  Target, 
  Mail, 
  Users, 
  BarChart3, 
  Layout 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "Strategic campaigns across Meta, Google, and LinkedIn to reach your ideal attendees.",
  },
  {
    icon: Target,
    title: "Registration Funnels",
    description: "High-converting landing pages and registration flows optimized for maximum signups.",
  },
  {
    icon: Mail,
    title: "Email & SMS Sequences",
    description: "Automated reminder campaigns that boost show rates and reduce no-shows.",
  },
  {
    icon: Users,
    title: "Audience Retargeting",
    description: "Re-engage interested prospects with strategic retargeting and lookalike audiences.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and insights so you know exactly what's working.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Custom-designed event pages that convert browsers into registered attendees.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-primary font-medium tracking-wide uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Full-Funnel Event Marketing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From first impression to final reminder, we build complete marketing systems that fill your events.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
