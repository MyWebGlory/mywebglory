import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image: "/images/testimonials/rxvp-client-testimonial.png",
    name: "Bonnie Lappin",
    title: "Co-founder, HBA Visionary Leader · PharmaVoice100",
    company: "RxVP",
    companyFull: "The first and only global speakers bureau for the life sciences industry",
    companyUrl: "https://rxvp.org/",
    logo: "/images/client-logos/rxvp-logo.png",
    headshot: "/images/headshots/bonnie-lappin.png",
    linkedin: "https://www.linkedin.com/in/bonnie-lappin-6b61664/",
  },
  {
    image: "/images/testimonials/rxvp-happy-about-video.png",
    name: "Bonnie Lappin",
    title: "Co-founder, HBA Visionary Leader · PharmaVoice100",
    company: "RxVP",
    companyFull: "The first and only global speakers bureau for the life sciences industry",
    companyUrl: "https://rxvp.org/",
    logo: "/images/client-logos/rxvp-logo.png",
    headshot: "/images/headshots/bonnie-lappin.png",
    linkedin: "https://www.linkedin.com/in/bonnie-lappin-6b61664/",
  },
  {
    image: "/images/testimonials/satisfaction-video-rxvp.png",
    name: "Bonnie Lappin",
    title: "Co-founder, HBA Visionary Leader · PharmaVoice100",
    company: "RxVP",
    companyFull: "The first and only global speakers bureau for the life sciences industry",
    companyUrl: "https://rxvp.org/",
    logo: "/images/client-logos/rxvp-logo.png",
    headshot: "/images/headshots/bonnie-lappin.png",
    linkedin: "https://www.linkedin.com/in/bonnie-lappin-6b61664/",
  },
  {
    image: "/images/testimonials/satisfaction-comment-cbhn-alt-jamila.png",
    name: "Jamila Jabulani",
    title: "Sr. Network Membership Manager",
    company: "California Black Health Network",
    companyFull: "California Black Health Network",
    companyUrl: "https://yourcbhn.org/",
    logo: "/images/client-logos/cbhn-white.png",
    headshot: "/images/headshots/jamila-jabulani.png",
    linkedin: "https://www.linkedin.com/in/jmj24/",
  },
  {
    image: "/images/testimonials/satisfaction-comment-cbhn-rhonda.png",
    name: "Rhonda M. Smith",
    title: "Executive Director",
    company: "California Black Health Network",
    companyFull: "California Black Health Network",
    companyUrl: "https://yourcbhn.org/",
    logo: "/images/client-logos/cbhn-white.png",
    headshot: "/images/headshots/rhonda-m-smith.png",
    linkedin: "https://www.linkedin.com/in/rhondamsmith/",
  },
  {
    image: "/images/testimonials/kornit-client-comment-1.png",
    name: "Leta Wood",
    title: "Marketing Director",
    company: "Kornit Konnections",
    companyFull: "Kornit Konnections",
    companyUrl: "https://kornitkonnections.com/",
    logo: "/images/client-logos/konnections.png",
    headshot: "/images/headshots/leta-wood.png",
    linkedin: "https://www.linkedin.com/in/leta-wood-73aa277/",
  },
  {
    image: "/images/testimonials/kornit-client-comment-2.png",
    name: "Leta Wood",
    title: "Marketing Director",
    company: "Kornit Konnections",
    companyFull: "Kornit Konnections",
    companyUrl: "https://kornitkonnections.com/",
    logo: "/images/client-logos/konnections.png",
    headshot: "/images/headshots/leta-wood.png",
    linkedin: "https://www.linkedin.com/in/leta-wood-73aa277/",
  },
  {
    image: "/images/testimonials/kornit-client-comment-3.png",
    name: "Leta Wood",
    title: "Marketing Director",
    company: "Kornit Konnections",
    companyFull: "Kornit Konnections",
    companyUrl: "https://kornitkonnections.com/",
    logo: "/images/client-logos/konnections.png",
    headshot: "/images/headshots/leta-wood.png",
    linkedin: "https://www.linkedin.com/in/leta-wood-73aa277/",
  },
  {
    image: "/images/testimonials/virtual-producers-testimonial.png",
    name: "Austin Talley",
    title: "Founder & Producer",
    company: "Virtual Producers",
    companyFull: "Virtual Producers",
    companyUrl: "https://www.vmproducers.com/",
    logo: "/images/client-logos/virtual-producers.png",
    headshot: "/images/headshots/austin-talley.png",
    linkedin: "https://www.linkedin.com/in/talley-austin/",
  },
  {
    image: "/images/testimonials/parnell-engineering-testimonial.png",
    name: "Will Parnell",
    title: "Vice President, Professional Engineer",
    company: "Parnell Engineering, Inc.",
    companyFull: "Parnell Engineering, Inc.",
    companyUrl: "https://parnellengineeringinc.com/",
    logo: "/images/client-logos/parnell-engineering.png",
    headshot: "/images/headshots/will-parnell.png",
    linkedin: "https://www.linkedin.com/in/willparnell/",
  },
  {
    image: "/images/testimonials/portfolio-metrics-testimonial.png",
    name: "Rail Chamidullin",
    title: "Founder & Software Engineer",
    company: "Portfoliometrics",
    companyFull: "Portfoliometrics",
    companyUrl: "https://portfoliometrics.net/",
    logo: "/images/client-logos/portfoliometrics.png",
    headshot: "/images/headshots/ray-chamidullin.png",
    linkedin: "https://www.linkedin.com/in/chamidullinr/",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <style>{`
        @keyframes testimonials-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause marquee on hover/focus */
        .testimonials-marquee-track:hover,
        .testimonials-marquee-track:focus {
          animation-play-state: paused !important;
        }
        /* Force border radius on testimonial images */
        .testimonial-img-rounded {
          border-radius: 1rem !important;
        }
      `}</style>

      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4"
          >
            <MessageCircle className="w-7 h-7 text-primary" />
          </motion.div>
          <motion.span
            className="block text-primary font-medium tracking-wide uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mt-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Voices of Triumph
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Don't take our word for it. Here's what event organizers say about their path to dominance.
          </motion.p>
        </motion.div>
      </div>

      {/* Full-width marquee (outside container to bleed edge-to-edge) */}
      <div className="relative w-full">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 will-change-transform testimonials-marquee-track"
            tabIndex={0}
            style={{ animation: "testimonials-marquee 60s linear infinite", width: "max-content" }}
          >
            {/* Randomize order, avoid same person twice in a row */}
            {(() => {
              // Fisher-Yates shuffle
              const arr = [...testimonials];
              for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
              }
              // Ensure no same person twice in a row
              for (let i = 1; i < arr.length; i++) {
                if (arr[i].name === arr[i - 1].name) {
                  // Find a non-duplicate to swap
                  for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j].name !== arr[i - 1].name) {
                      [arr[i], arr[j]] = [arr[j], arr[i]];
                      break;
                    }
                  }
                }
              }
              return [...arr, ...arr].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[420px] bg-card border border-border hover:border-primary/40 rounded-2xl transition-colors duration-300 group shadow-sm"
                >
                  {/* Company logo + company link at top left */}
                  <div className="flex justify-start items-center gap-2 px-4 pt-4">
                    {t.logo && (
                      <img
                        src={t.logo}
                        alt={t.company}
                        className="h-8 w-auto object-contain rounded"
                        style={{ maxHeight: '2rem', borderRadius: '0.25rem' }}
                        loading="lazy"
                      />
                    )}
                    {t.companyUrl && (
                      <a
                        href={t.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/60 hover:text-primary transition-colors"
                        title={`Visit ${t.company} website`}
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  {/* Screenshot */}
                  <div className="p-3 pb-0">
                    <div className="bg-muted/20 h-[220px] flex items-center justify-center overflow-hidden" style={{ borderRadius: '0.75rem' }}>
                      <img
                        src={t.image}
                        alt={`Testimonial from ${t.name}`}
                        className="max-w-full max-h-[220px] object-contain"
                        style={{ borderRadius: '0.375rem', display: 'block' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Footer with headshot + person LinkedIn */}
                  <div className="p-4 flex items-center gap-3">
                    {/* Headshot */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center overflow-hidden">
                      {t.headshot ? (
                        <img
                          src={t.headshot}
                          alt={t.name}
                          className="h-12 w-auto object-cover rounded-full"
                          style={{ maxHeight: '3rem' }}
                          loading="lazy"
                        />
                      ) : null}
                    </div>
                    {/* Text info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-semibold truncate">{t.name}</p>
                        {t.linkedin && (
                          <a
                            href={t.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-muted-foreground/60 hover:text-primary transition-colors"
                            title={`View ${t.name} on LinkedIn`}
                            onClick={e => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{t.title}</p>
                      <p className="text-xs text-primary/70 font-medium truncate">{t.company}</p>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>

      {/* See Case Studies CTA */}
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Want to see the full story behind these results?
          </p>
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/case-studies">
              See Our Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

