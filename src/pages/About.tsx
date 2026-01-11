import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Users, Target, Heart, Zap, Award, Shield, Clock, Sparkles, Palette, Video, Phone, PenTool, TrendingUp, Megaphone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gabrielPhoto from "@/assets/gabriel-ageron.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import mwgLogo from "@/assets/logo-icon.png";
import mydropLogo from "@/assets/mydrop-logo.png";
import topelaLogo from "@/assets/tope-la-logo.webp";

const experiences = [
  {
    logo: mwgLogo,
    company: "MyWebGlory",
    role: "Founder",
    period: "Jan 2022 - Present",
    description: "Event Marketing Systems | Authority & Lead Generation",
    link: "https://mywebglory.com"
  },
  {
    logo: mydropLogo,
    company: "Mydrop",
    role: "Founder",
    period: "Feb 2023 - Present",
    description: "AI Social Media Management Tool",
    link: "https://mydropai.com"
  },
  {
    logo: topelaLogo,
    company: "Tope-la",
    role: "Chief Technology Officer",
    period: "Sep 2024 - Present",
    description: "The Pro-to-Pro Construction Network in France",
    link: "https://lp.tope-la.fr"
  }
];

const teamRoles = [
  { icon: TrendingUp, title: "Media Buyers", count: 2 },
  { icon: Palette, title: "Graphic Designers", count: 2 },
  { icon: Megaphone, title: "Community Managers", count: 2 },
  { icon: PenTool, title: "Copywriters", count: 2 },
  { icon: Video, title: "Video Editors", count: 1 },
  { icon: Phone, title: "Setters", count: 2 },
  { icon: Target, title: "Strategists", count: 2 },
  { icon: Award, title: "Marketing Director", count: 1 },
  { icon: Zap, title: "Web Developers", count: 1 },
];

const values = [
  {
    icon: Heart,
    title: "Client First, Always",
    description: "Every decision we make starts with one question: 'What's best for our client?' Your success is our success, and we treat your events like they're our own."
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    description: "We don't take on 50 clients at once. We deliberately stay boutique so every project gets the attention, creativity, and care it deserves."
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No hidden fees, no surprise charges, no vanity metrics. You'll always know exactly what we're doing, why we're doing it, and what results we're getting."
  },
  {
    icon: Zap,
    title: "Speed Without Sacrifice",
    description: "Event timelines are tight. We've built systems that let us move fast without cutting corners, because your launch date isn't negotiable."
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Events don't run 9-to-5, and neither do we. When it's crunch time, you'll find us in your corner, making sure everything runs smoothly."
  },
  {
    icon: Sparkles,
    title: "Innovation Is Standard",
    description: "We don't recycle old playbooks. Every campaign gets fresh thinking, new angles, and creative approaches tailored to your unique audience."
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About MyWebGlory | Event Marketing Experts | Meet Gabriel Ageron"
        description="Young, modern, and ROI-focused. MyWebGlory is a boutique event marketing agency of 15 specialists founded by Gabriel Ageron. We use the latest tech to deliver exceptional results."
        canonicalUrl="/about"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Meet the Team Behind the Magic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're <span className="text-gradient">MyWebGlory</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A human-sized agency of 15 passionate marketers dedicated to making your events unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container px-4 md:px-6 relative z-10">
          {/* Founder Card - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Profile */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:min-w-[180px] md:border-r md:border-border/50 md:pr-8">
                  <img 
                    src={gabrielPhoto} 
                    alt="Gabriel Ageron - Founder of MyWebGlory" 
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-primary/30 shadow-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-foreground">Gabriel Ageron</h3>
                  <p className="text-primary font-medium text-sm mb-3">Founder & CEO</p>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://www.linkedin.com/in/gabriel-ageron/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://wa.me/33767096182"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:gabriel@mywebglory.com"
                      className="flex items-center justify-center w-5 h-5 bg-primary rounded-full hover:opacity-80 transition-opacity"
                    >
                      <Mail className="w-3 h-3 text-primary-foreground" />
                    </a>
                  </div>
                </div>

                {/* Right: Experiences Grid */}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Experience</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Column 1: First 2 experiences stacked */}
                    <div className="space-y-4">
                      {experiences.slice(0, 2).map((exp, index) => (
                        <a 
                          key={index}
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-4 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img src={exp.logo} alt={exp.company} className="w-7 h-7 object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h5 className="font-semibold text-foreground text-sm">{exp.role}</h5>
                              <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-primary font-medium">{exp.company}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{exp.period}</p>
                            <p className="text-xs text-muted-foreground mt-1">{exp.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    {/* Column 2: Third experience */}
                    <div className="flex">
                      <a 
                        href={experiences[2].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 p-3 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all h-fit"
                      >
                        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={experiences[2].logo} alt={experiences[2].company} className="w-7 h-7 object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-foreground text-sm">{experiences[2].role}</h5>
                            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-primary font-medium">{experiences[2].company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{experiences[2].period}</p>
                          <p className="text-xs text-muted-foreground mt-1">{experiences[2].description}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              The Story Behind <span className="text-gradient">MyWebGlory</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
              <p>
                For five years, I worked in general marketing, running campaigns across every industry you can imagine. E-commerce, SaaS, real estate, you name it. I was good at it. But something was missing.
              </p>
              <p>
                Then came my first event marketing project. A client needed to fill seats for their annual conference, and they were desperate. I dove in headfirst, not knowing that this one project would change everything.
              </p>
              <p>
                The energy was different. The stakes felt real. When those seats filled up and I watched attendees flood through the doors, I felt something I hadn't felt in years: <span className="text-foreground font-medium">pure excitement</span>.
              </p>
              <p>
                I started getting more requests. Webinars, trade shows, product launches, networking events. Each one taught me something new about what makes people show up, not just register, but actually <span className="text-foreground font-medium">be there</span>.
              </p>
              <p>
                In January 2022, I made the leap. I stopped being a generalist and went all-in on event marketing. That's when <span className="text-foreground font-medium">MyWebGlory</span> was born, a boutique agency built by someone who genuinely loves this work.
              </p>
              <p>
                Since then, my entrepreneurial drive led me to found <span className="text-foreground font-medium">Mydrop</span> in 2023, an AI-powered social media management tool, and join <span className="text-foreground font-medium">Tope-la</span> as CTO in 2024, building France's first B2B platform for construction professionals. These ventures have sharpened my technical expertise and deepened my understanding of scalable marketing systems.
              </p>
              <p>
                Today, our team of 15 specialists helps event organizers around the world turn empty rooms into standing-room-only experiences. And honestly? I still get that same rush every single time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern & Fast-Moving Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
              >
                <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Young & Agile</h3>
                <p className="text-sm text-muted-foreground">A modern team that moves fast and adapts faster</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 rounded-2xl p-6 text-center"
              >
                <Sparkles className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Latest Tech</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge tools and AI to maximize efficiency</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">ROI First</h3>
                <p className="text-sm text-muted-foreground">Every action tied to measurable business outcomes</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 border border-border rounded-2xl p-6 text-center"
              >
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Streamlined</h3>
                <p className="text-sm text-muted-foreground">Optimized processes that save time and boost results</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              15 Specialists, <span className="text-gradient">One Mission</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've assembled a diverse team of experts, each bringing unique skills to make your events successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <role.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.count} {role.count === 1 ? 'specialist' : 'specialists'}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card/80 border border-border rounded-2xl">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">
                <span className="text-gradient">15 team members</span> working together to make your events shine
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why <span className="text-gradient">Work With Us</span>?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Boutique Attention</h4>
                    <p className="text-sm text-muted-foreground">You're never just a number. Our size means you get direct access to senior talent.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Event Specialists</h4>
                    <p className="text-sm text-muted-foreground">We only do events. That focus means we know this space inside and out.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Full-Service Team</h4>
                    <p className="text-sm text-muted-foreground">From strategy to design to execution, everything under one roof.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Results-Driven</h4>
                    <p className="text-sm text-muted-foreground">We measure success by seats filled, not impressions delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Work Together</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's talk about your next event. We'd love to learn about your goals and show you how we can help.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in Touch
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
