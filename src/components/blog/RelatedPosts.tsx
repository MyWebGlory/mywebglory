import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

// Import blog images for SSG
import eventMarketingHero from "@/assets/blog/event-marketing-hero.jpg";
import playbookHero from "@/assets/blog/playbook-hero.jpg";

// Image lookup for SSG compatibility - add new images here when creating posts
const blogImages: Record<string, string> = {
  "ultimate-guide-event-marketing": eventMarketingHero,
  "event-marketing-playbook": playbookHero,
};

interface RelatedPostsProps {
  currentSlug: string;
  maxPosts?: number;
}

const RelatedPosts = ({ currentSlug, maxPosts = 3 }: RelatedPostsProps) => {
  // Filter out current post and limit to maxPosts
  const relatedPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, maxPosts);

  // Don't render if no related posts
  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              More Articles You'll Love
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Continue learning with our latest insights on event marketing strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <RelatedPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RelatedPostCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
  >
    <Link to={`/blog/${post.slug}`}>
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
        <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
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
    </Link>
  </motion.article>
);

export default RelatedPosts;
