import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_NUMBER = "33767096182";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your event marketing services.";
const EMAIL = "gabriel@mywebglory.com";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <Link to="/">
              <img src={logoFull} alt="MyWebGlory" className="h-8" />
            </Link>
            <div className="w-16" />
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container px-4 md:px-6">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Fill Your Next Event
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect. We respond within 24 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Contact Methods */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Calendly */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Book a Strategy Call</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Schedule a free 30-minute call to discuss your event marketing needs.
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href="https://calendly.com/gabriel-ageron/mywebglory" target="_blank" rel="noopener noreferrer">
                        Open Calendar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-[#25D366]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Message us directly for quick questions or to start a conversation.
                    </p>
                    <Button asChild variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Prefer email? Send us a message and we'll reply within 24 hours.
                    </p>
                    <a 
                      href={`mailto:${EMAIL}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Calendly */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <iframe
                src="https://calendly.com/gabriel-ageron/mywebglory?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316"
                width="100%"
                height="650"
                frameBorder="0"
                title="Schedule a call"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;