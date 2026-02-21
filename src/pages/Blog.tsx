import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

// Import blog images for SSG
import eventMarketingHero from "@/assets/blog/event-marketing-hero.jpg";
import playbookHero from "@/assets/blog/playbook-hero.jpg";
import authorityHero from "@/assets/blog/authority-content-hero.jpg";
import tradeShowHero from "@/assets/blog/trade-show-roi-hero.jpg";

// Image lookup for SSG compatibility
const blogImages: Record<string, string> = {
  "ultimate-guide-event-marketing": eventMarketingHero,
  "event-marketing-playbook": playbookHero,
  "build-authority-event-content-marketing": authorityHero,
  "trade-show-roi": tradeShowHero,
};

// Blog structured data schema
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MyWebGlory Blog",
  description: "Event marketing insights, strategies, and case studies to help you fill your events with qualified attendees.",
  url: "https://mywebglory.com/blog",
  publisher: {
    "@type": "Organization",
    name: "MyWebGlory",
    url: "https://mywebglory.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mywebglory.com/logo-full.png"
    }
  }
};

const blogBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mywebglory.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://mywebglory.com/blog" }
  ]
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Blog | Event Marketing Insights & Strategies | MyWebGlory"
        description="Expert event marketing insights, strategies, and case studies from MyWebGlory. Learn how to fill your events with qualified attendees, maximize show-up rates, and generate measurable revenue."
        canonicalUrl="/blog"
        structuredData={[blogSchema, blogBreadcrumbSchema]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full"
          >
            Blog
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Event Marketing <span className="text-primary">Insights</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Strategies, case studies, and expert advice to help you fill your events and generate revenue.
          </motion.p>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 flex-1">
        <div className="container px-4 md:px-6">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
  >
    {(blogImages[post.slug] || post.featuredImage) && (
      <div className="aspect-video bg-muted overflow-hidden">
        <img 
          src={blogImages[post.slug] || post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {post.category}
      </span>
      <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
        <Link to={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.article>
);

// Empty State (shown when no posts exist yet)
const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-20"
  >
    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
      <FileText className="w-10 h-10 text-primary" />
    </div>
    <h2 className="text-2xl font-semibold mb-3">Coming Soon</h2>
    <p className="text-muted-foreground max-w-md mx-auto mb-8">
      We're working on insightful content about event marketing strategies, case studies, and industry trends. Stay tuned!
    </p>
    <Link 
      to="/contact"
      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
    >
      Get Notified When We Launch
      <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

export default Blog;
