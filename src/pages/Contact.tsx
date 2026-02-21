import { Calendar, Mail, ArrowRight, Sparkles, Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import ClientLogosSlider from "@/components/landing/ClientLogosSlider";
import Footer from "@/components/landing/Footer";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_NUMBER = "33767096182";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your event marketing services.";
const EMAIL = "gabriel@mywebglory.com";

const contactMethods = [
  {
    icon: Calendar,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Book a Strategy Call",
    description: "Schedule a free 30-minute call to discuss your event marketing needs and get personalized recommendations.",
    action: "Open Calendar",
    href: "https://calendly.com/gabriel-ageron/mywebglory",
    highlight: true,
    borderHover: "hover:border-primary/50 hover:shadow-primary/10",
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    icon: "whatsapp",
    iconBg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
    title: "WhatsApp",
    description: "Message us directly for quick questions or to start a conversation. We typically respond within minutes.",
    action: "Chat Now",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    highlight: false,
    borderHover: "hover:border-[#25D366]/50 hover:shadow-[#25D366]/10",
    gradient: "from-[#25D366]/20 via-[#25D366]/5 to-transparent",
  },
  {
    icon: Mail,
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    title: "Email",
    description: "Prefer email? Send us a detailed message and we'll reply within 24 hours with a thoughtful response.",
    action: EMAIL,
    href: `mailto:${EMAIL}`,
    highlight: false,
    borderHover: "hover:border-secondary/50 hover:shadow-secondary/10",
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Us | Book a Free Strategy Call | MyWebGlory"
        description="Ready to fill your next event? Book a free 30-minute strategy call, message us on WhatsApp, or email us. We typically respond within minutes."
        canonicalUrl="/contact"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-gradient">Fill Your Event?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect. We're here to help you create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 md:px-6">
        <ClientLogosSlider />
      </div>

      {/* Contact Methods */}
      <section className="py-12 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 ${method.borderHover} hover:shadow-xl hover:-translate-y-1 cursor-pointer block`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${method.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon === "whatsapp" ? (
                        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
                      ) : (
                        <method.icon className={`w-7 h-7 ${method.iconColor}`} />
                      )}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {method.description}
                    </p>
                    
                    {/* Action */}
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>{method.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Highlight badge */}
                  {method.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Recommended
                    </div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Response time banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24h response time</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded Calendly */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Schedule Your <span className="text-gradient">Strategy Call</span>
              </h2>
              <p className="text-muted-foreground">
                Pick a time that works for you. 30 minutes, no obligation.
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;