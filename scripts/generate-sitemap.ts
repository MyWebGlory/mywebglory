const SITE_URL = "https://mywebglory.com";

interface RouteConfig {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

const routeConfigs: RouteConfig[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/event-marketing", priority: 0.9, changefreq: "weekly" },
  { path: "/how-it-works", priority: 0.9, changefreq: "weekly" },
  { path: "/pricing", priority: 0.9, changefreq: "weekly" },
  { path: "/blog", priority: 0.8, changefreq: "weekly" },
  { path: "/case-studies", priority: 0.8, changefreq: "weekly" },
  { path: "/contact", priority: 0.8, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
];

export function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];
  
  const urls = routeConfigs.map(route => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
}

// Export for use in vite plugin
export { routeConfigs };
