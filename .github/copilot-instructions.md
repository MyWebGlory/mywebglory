
# MyWebGlory - Event Marketing Agency Website

## Project Overview

MyWebGlory is a boutique event marketing agency website built to showcase services, generate leads, and establish authority in the event marketing space.

## Business Context

- **Industry**: B2B Event Marketing
- **Target Audience**: Companies running webinars, conferences, and virtual events
- **Goal**: Generate qualified leads, showcase expertise, drive bookings
- **Pricing Model**: Three tiers ($9K, $25K, $50K packages)

## Critical Requirements

### SEO is Priority #1

This is a marketing site - discoverability is everything:
- Fast load times (<2s)
- Semantic HTML
- Proper meta tags on every page
- JSON-LD structured data
- Mobile-first responsive design
- Accessible to screen readers

### Brand Voice

- **Professional but approachable**
- **Data-driven** (use metrics, numbers, specifics)
- **Action-oriented** (CTAs everywhere)
- **Authority-building** (we're experts, not beginners)

### Design System

- **Primary color**: Purple (#6d28d9)
- **Background**: Dark navy (#0a0e1a)
- **Text**: Light (#fafafa)
- **Style**: Modern, clean, professional
- **Components**: Shadcn/ui library

## Site Structure

```
/                  - Homepage (hero, value prop, social proof)
/event-marketing   - Service overview
/how-it-works      - Process explanation
/case-studies      - Success stories
/pricing           - Three-tier pricing
/blog              - Content marketing
/about             - Team & story
/contact           - Lead capture form
/faq               - Common questions
```

## Key Pages Priority

1. **Homepage** - Most important for conversions
2. **Pricing** - Drives decision-making
3. **Case Studies** - Builds trust
4. **Event Marketing** - SEO landing page
5. **Contact** - Lead capture

## Conversion Points

Every page should have:
- Clear CTA (book a call, get started, etc.)
- Calendly link for scheduling
- Email capture opportunity
- Phone/WhatsApp contact visible

## Technical Stack Specifics

- **No backend** - Static site only
- **No database** - All content hardcoded or markdown
- **Forms** - Use Calendly embed or contact form services
- **Analytics** - Google Analytics (to be added)
- **Images** - Store in `/public/images/`, optimize for web

## SEO Architecture (Critical — Do Not Break)

This project uses **react-snap** for build-time prerendering to solve the SPA SEO problem. Every page gets a static HTML snapshot with its own unique `<title>`, meta tags, and JSON-LD structured data — visible to crawlers without JavaScript.

### How It Works

1. `npm run build` runs Vite (outputs to `/dist`)
2. `postbuild` hook auto-runs `react-snap`, which uses headless Chrome to crawl all 15 routes and save static HTML snapshots into `/dist`
3. Each snapshot includes the fully rendered `<head>` from `react-helmet-async`
4. On user visit: if the div#root already has children (prerendered), React hydrates instead of re-rendering

### Key Files

| File | Role |
|------|------|
| `src/components/SEO.tsx` | Central SEO component — sets title, description, OG, Twitter, JSON-LD via `react-helmet-async` |
| `src/main.tsx` | Conditional hydration: `hydrateRoot()` if prerendered, `createRoot()` if not |
| `src/routes.tsx` | **Eager imports only** — no `React.lazy()`. Lazy loading prevents react-snap from capturing content |
| `scripts/react-snap.cjs` | react-snap runner — all config lives here. Reads `PUPPETEER_EXECUTABLE_PATH` env var for CI (Linux), falls back to macOS Chrome path for local dev |
| `index.html` | Minimal fallback only — no hardcoded JSON-LD, no OG tags. All head content managed per-page by SEO component |

### react-snap Config (scripts/react-snap.cjs)

```js
const { run } = require('react-snap');

const defaultChromePath =
  process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : '/usr/bin/google-chrome-stable';

run({
  source: 'dist',
  inlineCss: false,
  skipThirdPartyRequests: true,
  concurrency: 1,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH || defaultChromePath,
});
```

**Why these settings matter:**
- `skipThirdPartyRequests: true` — blocks Calendly iframe from making network requests that prevent `networkidle0`, which would cause react-snap to capture the page before Helmet runs
- `concurrency: 1` — renders pages sequentially. With higher concurrency, some pages were captured before `react-helmet-async` updated `<head>`, resulting in the default homepage title on all pages
- `puppeteerExecutablePath` — reads from `PUPPETEER_EXECUTABLE_PATH` env var (set in CI) or falls back to system Chrome. react-snap's bundled Chromium is too old to parse modern JS (`?.` syntax throws)

### GitHub Actions (deploy.yml)

The workflow installs Chrome and passes its path via env var:
```yaml
- name: Install Google Chrome
  run: |
    sudo apt-get update
    sudo apt-get install -y google-chrome-stable

- name: Build
  run: npm run build
  env:
    PUPPETEER_EXECUTABLE_PATH: /usr/bin/google-chrome-stable
```

### SEO Component Usage Pattern

Every page must use the `<SEO>` component with unique, page-specific content:

```tsx
import SEO from "@/components/SEO";

// Inside the page's JSX:
<SEO
  title="Unique Page Title"
  description="Unique page description, 150-160 chars, includes target keywords."
  canonicalUrl="/page-slug"
  structuredData={[pageSpecificSchema, breadcrumbSchema]}
/>
```

### JSON-LD Structured Data Per Page

| Page | Schemas |
|------|---------|
| `/` | Organization + LocalBusiness |
| `/event-marketing` | Organization + Service + BreadcrumbList |
| `/how-it-works` | Organization + HowTo + BreadcrumbList |
| `/pricing` | Organization + Service (with Offers) + BreadcrumbList |
| `/case-studies` | Organization + CollectionPage + BreadcrumbList |
| `/about` | Organization + AboutPage + BreadcrumbList |
| `/contact` | Organization + ContactPage + BreadcrumbList |
| `/faq` | Organization + FAQPage + BreadcrumbList |
| `/blog` | Organization + Blog + BreadcrumbList |
| `/blog/*` | Organization + Article + BreadcrumbList |
| `/privacy` | Organization + BreadcrumbList |

### When to Rebuild

Run `npm run build` (which triggers react-snap automatically via postbuild) whenever you:
- Change page copy, headings, or CTAs
- Update SEO titles, descriptions, or JSON-LD
- Add a new page or route
- Update any component used in the server-rendered HTML

For pure style changes (Tailwind classes, colors) that don't affect SEO output, rebuilding is optional for local development but required before deploying.

### Verification After Build

```bash
# Quick check: all pages should have unique titles and data-rh attributes
grep -o '<title>[^<]*</title>' dist/pricing/index.html
grep -c 'data-rh' dist/pricing/index.html         # should be ≥1
grep -c 'application/ld.json' dist/pricing/index.html  # should be ≥2
```

If `data-rh=0` or title shows the default homepage title on other pages, something broke the Helmet capture — check the `concurrency` and `skipThirdPartyRequests` settings first.

## Content Guidelines

### Headlines
- Be specific, not generic
- Lead with benefits, not features
- Use numbers when possible

Example:
- BAD: "We help with events"
- GOOD: "Fill Your Events with 300+ Qualified Attendees in 30 Days"

### Social Proof
- Client logos (if available)
- Specific metrics (200% increase, 95% show-up rate)
- Testimonials with names and companies
- Case study results

### CTAs
- Action-oriented verbs
- Create urgency when appropriate
- Multiple CTAs per page

Examples:
- "Book Your Free Strategy Call"
- "Get Started Today"
- "Download the Event Marketing Playbook"
- "See How We Fill Events"

## Development Workflow

1. **Always test locally** before pushing
2. **Check mobile responsiveness** - most traffic is mobile
3. **Verify SEO elements** - titles, descriptions, headings
4. **Test all CTAs and links** - broken links lose leads
5. **Optimize images** - compress before adding

## File Naming Conventions

- Components: PascalCase (`EventCard.tsx`)
- Pages: PascalCase (`EventMarketing.tsx`)
- Utils: camelCase (`formatDate.ts`)
- Assets: kebab-case (`hero-image.jpg`)

## Git Commit Messages

Use conventional commits:
- `feat: Add case studies page`
- `fix: Resolve mobile nav bug`
- `style: Update pricing card colors`
- `content: Update homepage hero copy`
- `seo: Add JSON-LD schemas`

## Performance Targets

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Bundle size: <500KB (gzipped)

## Accessibility Standards

- WCAG 2.1 AA compliance
- Keyboard navigation works everywhere
- Color contrast ratios meet standards
- Alt text on all images
- Form labels properly associated

## Common Mistakes to Avoid

- Generic stock photos - use specific, relevant images
- Walls of text - break up with headings, bullets, visuals
- Vague benefits - be specific with metrics
- Missing CTAs - every section should drive action
- Slow load times - optimize everything
- Poor mobile experience - mobile-first always

## Current Status

The site is:
- Deployed on GitHub Pages
- Connected to custom domain (mywebglory.com)
- **Prerendered with react-snap** — all 15 routes have unique static HTML
- SEO-optimized with per-page JSON-LD structured data (2–3 schemas per page)
- Mobile-responsive
- Ongoing content optimization
- A/B testing CTAs
- Building out blog section

## Quick Reference

**Contact Info:**
- Email: gabriel@mywebglory.com
- Phone: +33 7 67 09 61 82
- WhatsApp: https://wa.me/33767096182
- LinkedIn: https://www.linkedin.com/in/gabriel-ageron/

**Calendly:**
- Embed: https://calendly.com/mywebglory/strategy-call

**Company Info:**
- Founded: 2022
- Founder: Gabriel Ageron
- Location: Based in Paris, serves global clients
- Capacity: 4 clients/month (exclusivity positioning)

---

Remember: This is a lead generation machine. Every pixel, every word, every interaction should move toward one goal: getting qualified prospects to book a strategy call.
```

---
