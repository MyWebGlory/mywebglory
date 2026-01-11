import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight } from "lucide-react";

const BlogBanner = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Latest Insights
            </h2>
            <p className="text-muted-foreground mt-1">
              Expert strategies to maximize your event ROI
            </p>
          </div>
          <Link 
            to="/blog" 
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Horizontally scrollable container */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          <div className="flex gap-4 min-w-max">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex-shrink-0 w-[280px] md:w-[320px] bg-card border border-border rounded-lg p-5 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                  {post.category}
                </span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 text-sm md:text-base">
                  Read: {post.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </a>
            ))}
          </div>
        </div>

        <Link 
          to="/blog" 
          className="md:hidden flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-4"
        >
          View all articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BlogBanner;
