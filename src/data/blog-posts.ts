export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // For future: full content or MDX
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

// Blog posts array
export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-event-marketing",
    title: "The Ultimate Guide to Event Marketing: How to Turn Events Into Revenue",
    excerpt: "Discover the complete event marketing guide for B2B and B2C companies. Learn proven strategies to fill events, engage audiences, and generate revenue from every event.",
    author: {
      name: "Sarah Mitchell",
      role: "Content Strategist"
    },
    publishedAt: "2025-01-11",
    readTime: "12 min read",
    category: "Event Marketing Strategy",
    tags: ["event marketing", "B2B events", "lead generation", "webinars", "virtual events"],
    featuredImage: "/src/assets/blog/event-marketing-hero.jpg",
    seo: {
      title: "The Ultimate Guide to Event Marketing: How to Turn Events Into Revenue",
      description: "Discover the complete event marketing guide for B2B and B2C companies. Learn proven strategies to fill events, engage audiences, and generate revenue from every event."
    }
  }
];

// Helper function to get a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Helper function to get all unique categories
export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  return [...new Set(blogPosts.flatMap(post => post.tags))];
};
