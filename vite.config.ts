import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { generateSitemap } from "./scripts/generate-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/mywebglory/" : "/",
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Generate sitemap at build time
    {
      name: "generate-sitemap",
      closeBundle() {
        if (mode === "production") {
          const sitemap = generateSitemap();
          fs.writeFileSync("dist/sitemap.xml", sitemap);
          console.log("✓ Sitemap generated successfully");
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
}));
