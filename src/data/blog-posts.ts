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
    slug: "trade-show-roi",
    title: "How to Maximize ROI from Trade Shows and Conferences",
    excerpt: "Learn proven strategies to maximize your return on investment from trade shows and conferences. From pre-event planning to post-event follow-up, discover how to turn every exhibition into measurable business results.",
    author: {
      name: "Sarah Mitchell",
      role: "Content Strategist"
    },
    publishedAt: "2025-01-12",
    readTime: "15 min read",
    category: "Trade Shows & Conferences",
    tags: ["trade shows", "conferences", "ROI", "B2B marketing", "lead generation", "event strategy"],
    seo: {
      title: "How to Maximize ROI from Trade Shows and Conferences",
      description: "Learn proven strategies to maximize your return on investment from trade shows and conferences. From pre-event planning to post-event follow-up, discover how to turn every exhibition into measurable business results."
    }
  },
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
  },
  {
    slug: "event-marketing-playbook",
    title: "The Complete Event Marketing Playbook: Strategy, Execution, and ROI",
    excerpt: "Master event marketing with this complete guide. Learn how to plan, promote, execute, and measure events that generate leads, revenue, and brand authority.",
    author: {
      name: "Sarah Mitchell",
      role: "Content Strategist"
    },
    publishedAt: "2025-01-11",
    readTime: "15 min read",
    category: "Event Marketing Playbook",
    tags: ["event marketing", "ROI measurement", "event planning", "marketing funnel", "lead nurturing"],
    featuredImage: "/src/assets/blog/playbook-hero.jpg",
    seo: {
      title: "The Complete Event Marketing Playbook: Strategy, Execution, and ROI",
      description: "Master event marketing with this complete guide. Learn how to plan, promote, execute, and measure events that generate leads, revenue, and brand authority."
    }
  },
  {
    slug: "build-authority-event-content-marketing",
    title: "How to Build Authority Through Event Content Marketing",
    excerpt: "Learn how to create event content that builds authority, engages audiences, and generates leads. Discover strategies for planning, promotion, and long-term impact.",
    author: {
      name: "Sarah Mitchell",
      role: "Content Strategist"
    },
    publishedAt: "2025-01-11",
    readTime: "14 min read",
    category: "Authority Building",
    tags: ["event content", "authority building", "thought leadership", "content strategy", "audience engagement"],
    featuredImage: "/src/assets/blog/authority-content-hero.jpg",
    seo: {
      title: "How to Build Authority Through Event Content Marketing",
      description: "Learn how to create event content that builds authority, engages audiences, and generates leads. Discover strategies for planning, promotion, and long-term impact."
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
