import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const BlogBannerSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            From Our Blog
          </h2>
          <Link 
            to="/blog" 
            className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs text-primary font-medium">
                  {post.category}
                </span>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {post.readTime}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBannerSection;
