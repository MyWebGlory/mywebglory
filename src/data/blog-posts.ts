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

// Blog posts array - empty for now, ready for future posts
export const blogPosts: BlogPost[] = [];

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
