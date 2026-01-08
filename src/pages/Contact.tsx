import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, MessageCircle, Send, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import logoFull from "@/assets/logo-full.png";

const WHATSAPP_NUMBER = "33767096182";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your event marketing services.";
const EMAIL = "gabriel@mywebglory.com";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim().slice(0, 100),
          email: formData.email.trim().slice(0, 255),
          company: formData.company.trim().slice(0, 100),
          message: formData.message.trim().slice(0, 2000),
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
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

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Methods */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold mb-6">Contact Methods</h2>
              
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
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
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

              {/* Embedded Calendly */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
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

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card border border-border rounded-2xl p-8 sticky top-28">
                <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        maxLength={100}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        maxLength={255}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your event goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        maxLength={2000}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
