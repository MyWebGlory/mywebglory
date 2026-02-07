

## Fix SEO: Make Content Visible to Search Engine Crawlers

### Current Situation
- Your project has `vite-react-ssg` configured, but Lovable's build system runs `vite build` (not the SSG CLI), so pages are NOT pre-rendered -- crawlers see an empty `<div id="root"></div>`.
- You already have excellent JSON-LD schemas (Organization, LocalBusiness, Service) in your React `SEO.tsx` component, but they only render client-side after JavaScript executes.

### Approach: Static SEO Content in index.html
Since SSG cannot reliably run on Lovable's hosting, we'll embed critical SEO content directly into `index.html` so crawlers see it immediately without JavaScript. This is a proven technique used by many SPAs.

### Changes

**1. `index.html` -- Add JSON-LD schemas and hidden semantic content**

Add to the `<head>`:
- Organization schema (business name, logo, contact, social links)
- LocalBusiness schema (service area, price range, service types)
- Service schema (3 pricing tiers with descriptions)
- WebSite schema with SearchAction

Add to `<body>` (inside `<div id="root">`, visually hidden with `display:none`):
- Semantic HTML with your key content: business name, tagline, service descriptions, testimonials snippets, pricing overview, contact info
- This content is replaced when React hydrates, but crawlers see it in the initial HTML

**2. No other files need to change**
- Your existing React `SEO.tsx` component continues to work client-side for dynamic page-specific meta tags
- No build configuration changes needed

### What Crawlers Will See (Before JavaScript)
- Full Organization, LocalBusiness, Service, and WebSite structured data
- Key headlines: "Transform Your Events Into Revenue Machines"
- Service descriptions for Event Marketing, Lead Generation, Pipeline Generation
- Pricing tier names and descriptions
- Contact information (email, phone, WhatsApp)
- Navigation links to all pages

### Technical Details

The hidden content block will use this pattern:
```html
<div id="root">
  <div style="display:none" aria-hidden="true">
    <!-- SEO content here -->
  </div>
</div>
```

React's `createRoot` will replace the contents of `#root` on hydration, so this content only exists for crawlers and does not affect the visual experience.

The JSON-LD schemas will be static `<script type="application/ld+json">` blocks in the `<head>`, containing:
- Organization: name, URL, logo, founder, contact point, social profiles
- LocalBusiness: service area (global, centered on Paris), price range, service types
- Service: 3 offers (Event Launch Engine $9K, Revenue System $25K, Authority Flywheel $50K)
- WebSite: site name, URL, search action

