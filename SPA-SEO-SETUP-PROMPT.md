# AI Agent Prompt: SPA SEO with react-snap (Build-Time Prerendering)

> Copy this entire document as your prompt to any AI agent to implement production-grade SEO on any Vite + React SPA from scratch.

---

## CONTEXT: The SPA SEO Problem

Modern web apps built with React, Vue, or Angular are Single Page Applications (SPAs). They ship one `index.html` to the browser and render all content via JavaScript. This creates a critical SEO problem:

**Googlebot and other crawlers see the same empty `index.html` for every URL on your site.**

Even though modern Googlebot can execute JavaScript, it:
- Crawls pages in a render queue with significant delay (days to weeks)
- Has a limited "crawl budget" per site — slow rendering burns it fast
- May miss dynamically injected `<title>`, meta tags, og:image, JSON-LD
- Sees all routes as the same page (duplicate content penalty)

The result: your `/pricing`, `/about`, `/blog/post-1` all look identical to search engines, even if the rendered content is completely different.

### Why Not Just Migrate to Next.js / Remix?

SSR/SSG frameworks like Next.js are the "proper" solution, but:
- Full migration is disruptive and time-consuming (days to weeks)
- It breaks existing components, routing, and build infrastructure
- Overkill for marketing sites that don't need server-side logic
- The owner wants to stay on Vite + React

The solution used here is **react-snap** — a zero-config prerendering tool that crawls your existing SPA after build and saves static HTML snapshots. No framework migration needed.

---

## THE SOLUTION: react-snap + react-helmet-async

### What react-snap does

After `vite build` outputs your app to `/dist`, react-snap:
1. Launches headless Chrome
2. Visits every route in your app
3. Waits for the page to fully render (including JavaScript)
4. Saves the fully-rendered HTML (including `<head>` with SEO tags) as a static file
5. Result: `dist/pricing/index.html` contains the fully rendered Pricing page HTML — visible to crawlers with zero JS execution required

### What react-helmet-async does

`react-helmet-async` lets you set per-page `<title>`, `<meta>`, and `<script type="application/ld+json">` from inside React components. Combined with react-snap, those head tags end up in the prerendered HTML.

### The combined result

Every route gets its own static HTML file with:
- Unique `<title>` tag
- Unique `<meta name="description">`
- Unique Open Graph / Twitter Card tags
- Unique JSON-LD structured data schemas
- Full page body content

Search engines and social media scrapers get real content for every URL — no JavaScript required.

---

## STEP-BY-STEP IMPLEMENTATION

### Prerequisites

- Vite + React project (TypeScript or JS)
- React Router for client-side routing
- Node.js 18+
- Google Chrome installed on the machine (critical — see Trap #1 below)

### Step 1: Install dependencies

```bash
npm install react-helmet-async
npm install --save-dev react-snap
```

### Step 2: Configure react-snap in package.json

Add the `postbuild` script and the `reactSnap` config block. This is the most critical part — get these settings exactly right:

```json
{
  "scripts": {
    "build": "vite build",
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "source": "dist",
    "inlineCss": true,
    "skipThirdPartyRequests": true,
    "concurrency": 1,
    "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
    "puppeteerExecutablePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  }
}
```

**Why each setting exists — do not remove any of them:**

| Setting | Why it's critical |
|---------|-------------------|
| `"source": "dist"` | Tells react-snap where Vite outputs the build |
| `"inlineCss": true` | Inlines critical CSS so pages look correct even without JS |
| `"skipThirdPartyRequests": true` | **Critical** — blocks third-party iframes (Calendly, HubSpot, etc.) from making network requests. Without this, react-snap waits for `networkidle0` forever and captures the page before `react-helmet-async` has run, causing all pages to get the homepage's default title |
| `"concurrency": 1` | **Critical** — renders one page at a time. With higher concurrency (default is 4), pages race and some are captured before Helmet updates `<head>`, resulting in the wrong title/meta on all non-home pages |
| `puppeteerArgs` | Required to run headless Chrome without sandbox in most environments |
| `puppeteerExecutablePath` | **Critical** — react-snap's bundled Chromium is too old and throws syntax errors on modern JS (optional chaining `?.`, nullish coalescing `??`). Always point to your installed system Chrome |

**For Linux/CI environments**, change `puppeteerExecutablePath` to:
```json
"puppeteerExecutablePath": "/usr/bin/google-chrome"
```
Or wherever Chrome is installed (`which google-chrome`).

### Step 3: Update main.tsx for hydration

Replace the standard `ReactDOM.createRoot().render()` with conditional hydration. When react-snap has prerendered the page, React must **hydrate** (attach to existing DOM) instead of re-rendering from scratch:

```tsx
// src/main.tsx
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
// ... other imports

const rootElement = document.getElementById('root')!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      {/* Your app */}
    </HelmetProvider>
  </React.StrictMode>
);

// If prerendered HTML exists (from react-snap), hydrate instead of full render
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
```

**Why this matters:** If you keep `createRoot().render()`, React will overwrite the prerendered HTML with a fresh render on first load. You get a flash and lose the SEO benefit. `hydrateRoot` attaches React's event handlers to the existing DOM without destroying it.

### Step 4: Clean up index.html

Your `index.html` should be a **minimal fallback only**. Remove any hardcoded `<title>`, OG tags, JSON-LD, or structured data. All of it will be managed per-page by the SEO component + react-snap:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Fallback title only — overridden per page by react-helmet-async -->
    <title>Your Site Name</title>
    <meta name="description" content="Fallback description." />
    <!-- Preconnects for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Do NOT put JSON-LD in index.html** — it will appear on every page and confuse search engines.
**Do NOT put OG/Twitter tags in index.html** — they'll override page-specific ones or duplicate them.

### Step 5: Remove all lazy loading from routes

`React.lazy()` + `Suspense` prevents react-snap from capturing the page content because the dynamic import resolves after react-snap's render snapshot is taken.

**Before (WRONG — breaks react-snap):**
```tsx
const Pricing = React.lazy(() => import('./pages/Pricing'));
const About = React.lazy(() => import('./pages/About'));

// In JSX:
<Suspense fallback={null}>
  <Routes>...</Routes>
</Suspense>
```

**After (CORRECT — eager imports):**
```tsx
import Pricing from './pages/Pricing';
import About from './pages/About';
// ... import all page components directly

export const routes = [
  { path: '/pricing', element: <Pricing /> },
  { path: '/about', element: <About /> },
  // ...
];
```

Yes, this increases initial bundle size slightly. For a marketing site with <20 pages, this is acceptable and the SEO benefit far outweighs it.

### Step 6: Create a central SEO component

Create `src/components/SEO.tsx`:

```tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object | object[];
  noIndex?: boolean;
}

const SITE_URL = "https://yourdomain.com";
const DEFAULT_OG_IMAGE = "https://yourdomain.com/og-image.jpg";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Your Company",
  url: SITE_URL,
  // ... fill in your org details
};

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title.includes("Your Company") ? title : `${title} | Your Company`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Organization schema on every page */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Page-specific structured data */}
      {structuredData && (
        Array.isArray(structuredData)
          ? structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
            )
      )}
    </Helmet>
  );
};

export default SEO;
```

### Step 7: Add SEO to every page

Every page component must call `<SEO>` with **unique, page-specific** content. Do not copy-paste the same title/description across pages — that's duplicate content and will hurt rankings.

```tsx
// src/pages/Pricing.tsx
import SEO from "@/components/SEO";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Event Marketing Services",
  offers: [
    { "@type": "Offer", name: "Starter", price: "9000", priceCurrency: "USD" },
    { "@type": "Offer", name: "Pro", price: "25000", priceCurrency: "USD" },
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yourdomain.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://yourdomain.com/pricing" },
  ]
};

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Event Marketing Packages"
        description="Three transparent pricing tiers for event marketing. From $9K to $50K — choose the package that matches your growth stage."
        canonicalUrl="/pricing"
        structuredData={[pricingSchema, breadcrumbSchema]}
      />
      {/* Page content */}
    </>
  );
}
```

### Step 8: Build and verify

```bash
npm run build
```

This automatically runs react-snap via the `postbuild` hook. You'll see output like:
```
✅  crawled 1 out of 15 (/)
✅  crawled 2 out of 15 (/contact)
...
✅  crawled 15 out of 15 (/about)
```

**Verify the output:**
```bash
# Every page should have a unique title
grep -o '<title>[^<]*</title>' dist/pricing/index.html
grep -o '<title>[^<]*</title>' dist/about/index.html

# Every page should have data-rh attributes (proof Helmet ran)
grep -c 'data-rh' dist/pricing/index.html    # should be ≥ 1

# Every page should have JSON-LD
grep -c 'application/ld.json' dist/pricing/index.html   # should be ≥ 2
```

---

## TRAPS AND ERRORS — READ BEFORE YOU START

These are real errors encountered during implementation. Each cost significant debugging time. Avoid them all upfront.

---

### TRAP #1: react-snap's bundled Chromium is too old

**Symptom:** react-snap crashes with a JavaScript syntax error like `SyntaxError: Unexpected token '?'` or similar modern JS syntax failures. The build fails entirely.

**Cause:** react-snap ships with an outdated version of Puppeteer that bundles an old Chromium build. This Chromium is too old to parse modern JavaScript features like optional chaining (`?.`), nullish coalescing (`??`), or logical assignment operators (`??=`).

**Fix:** Point react-snap to your system Chrome installation:
```json
"puppeteerExecutablePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

For Linux:
```json
"puppeteerExecutablePath": "/usr/bin/google-chrome"
```

Find your Chrome path with: `which google-chrome` or `which chromium-browser`

**Never use react-snap without specifying `puppeteerExecutablePath`.**

---

### TRAP #2: All pages get the homepage's title and meta (the concurrency race condition)

**Symptom:** The build succeeds and all 15 pages are crawled, but when you check the output, every page (pricing, about, contact, etc.) has the same title as the homepage. `data-rh` count is 0 on most pages.

**Cause:** react-snap's default `concurrency: 4` renders 4 pages simultaneously. `react-helmet-async` updates `<head>` asynchronously after the React render cycle. With 4 concurrent pages, some pages hit the `networkidle0` checkpoint before Helmet has finished updating the DOM. react-snap captures a snapshot with whatever `<head>` was there at that moment — which is the last page's head (often the homepage, which was rendered first and set the global `<head>`).

**Fix:**
```json
"concurrency": 1
```

Sequential rendering gives each page time to complete its full render cycle including Helmet's asynchronous DOM updates before the snapshot is taken.

---

### TRAP #3: Third-party iframes block network idle (Calendly, HubSpot, Intercom, etc.)

**Symptom:** react-snap hangs on certain pages indefinitely or takes extremely long. Or it times out and captures pages before Helmet has run (same symptom as Trap #2 but different cause).

**Cause:** Widgets like Calendly, Intercom, or HubSpot create iframes that make persistent WebSocket connections or long-polling requests. react-snap waits for `networkidle0` (no network requests for 500ms) before taking the snapshot. These connections never truly go idle, so react-snap either hangs or gives up early.

**Fix:**
```json
"skipThirdPartyRequests": true
```

This tells react-snap to block all requests to domains other than `localhost`. Third-party iframes load as blanks, but that's fine — we only care about the `<head>` and body text content for SEO.

---

### TRAP #4: React hydration error (#418) from leftover skeleton HTML

**Symptom:** After setting up react-snap, the site throws `React Error #418: Hydration failed` and the page appears broken or flickers on load.

**Cause:** The original `index.html` had static "skeleton" HTML inside `<div id="root">` (a common trick to prevent blank flash on load). When react-snap prerendered the pages, the prerendered HTML was correct but React tried to reconcile it with the skeleton HTML, causing a mismatch.

**Fix:** Empty out `<div id="root">` completely:
```html
<div id="root"></div>
```

Remove all static HTML content that was inside `#root` in your original `index.html`. react-snap will populate it with the correct prerendered content.

---

### TRAP #5: React.lazy() prevents content capture

**Symptom:** The build works, pages are crawled, but the prerendered HTML has no page content — just the app shell (navbar, footer) with an empty body.

**Cause:** `React.lazy()` defers component loading until after the initial render. react-snap takes its snapshot based on `networkidle0`, which can fire before the lazy-loaded component has resolved its dynamic import and rendered its content.

**Fix:** Use only eager (static) imports for all page components:
```tsx
// WRONG
const Pricing = React.lazy(() => import('./pages/Pricing'));

// CORRECT
import Pricing from './pages/Pricing';
```

For small marketing sites (<20 pages), the bundle size increase is negligible and the SEO benefit is worth it.

---

### TRAP #6: Duplicate JSON-LD in index.html + per-page SEO component

**Symptom:** Google Search Console or schema validators show duplicate Organization or WebSite schemas on every page.

**Cause:** JSON-LD was hardcoded in `index.html` AND also added via the SEO component. react-snap preserves the `index.html` head content and adds Helmet's output on top.

**Fix:** Remove all JSON-LD, OG tags, and Twitter tags from `index.html`. Only keep the bare minimum: charset, viewport, fallback title, preconnects, favicon.

---

### TRAP #7: Popup/modal components triggering before snapshot

**Symptom:** react-snap console output shows `🚀 POPUP TRIGGERED!`. The popup content appears in the prerendered HTML on some pages, which looks odd in SEO snapshots.

**Cause:** Components like exit-intent popups, cookie banners, or newsletter modals use `setTimeout` triggers. react-snap's headless Chrome interacts with the page just like a user — mouse events (like tab focus changes) can trigger exit intent logic.

**Fix:** Guard time-based and event-based UI interactions with an SSR/prerender check:
```tsx
useEffect(() => {
  // Check if running in react-snap's headless environment
  if (navigator.userAgent.includes('ReactSnap')) return;
  // ... your popup logic
}, []);
```

Or simply ensure popup timers are long enough (>5s) that react-snap captures the page without triggering them.

---

## RECOMMENDED JSON-LD SCHEMA STRATEGY

Use these schema types per page type. Every page should have at minimum: **Organization** + one page-specific schema + **BreadcrumbList**.

| Page Type | Recommended Schemas |
|-----------|---------------------|
| Homepage | Organization, LocalBusiness (or WebSite) |
| Service/Product page | Organization, Service (with Offers), BreadcrumbList |
| How it works / Process | Organization, HowTo (with steps), BreadcrumbList |
| Pricing | Organization, Service (with Offer array), BreadcrumbList |
| Case Studies / Portfolio | Organization, CollectionPage + ItemList, BreadcrumbList |
| About | Organization, AboutPage, Person (for founder/team) |
| Contact | Organization, ContactPage, BreadcrumbList |
| FAQ | Organization, FAQPage (with Q&A pairs), BreadcrumbList |
| Blog index | Organization, Blog, BreadcrumbList |
| Blog post / Article | Organization, Article (with author, date, image), BreadcrumbList |
| Legal / Privacy | Organization, BreadcrumbList |

### BreadcrumbList template (adapt per page):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://yourdomain.com/pricing" }
  ]
}
```

---

## WHEN TO REBUILD

`npm run build` must be run (not just `npm run dev`) whenever:

| Change Type | Rebuild Required? |
|-------------|-------------------|
| Page copy / headings / body text | ✅ Yes |
| SEO title or description | ✅ Yes |
| JSON-LD structured data | ✅ Yes |
| New page or route added | ✅ Yes |
| Component used in prerendered HTML | ✅ Yes |
| Tailwind class changes (colors, spacing) | ⚠️ Optional (doesn't affect SEO, but inlineCss will be stale) |
| CSS-only visual changes | ⚠️ Optional for local dev, required before deploy |
| Client-side JS behavior (UI interactions) | ❌ No (rebuild not needed for SEO) |

The build takes ~2–4 minutes depending on page count (concurrency: 1 is sequential). Run it before every deployment.

---

## QUICK VERIFICATION CHECKLIST

Run after every build to confirm everything is working:

```bash
# 1. Unique titles on all main pages
for page in "" about pricing contact blog faq how-it-works event-marketing case-studies privacy; do
  file="dist/${page}/index.html"
  [[ "$page" == "" ]] && file="dist/index.html"
  title=$(grep -o '<title>[^<]*</title>' "$file" 2>/dev/null)
  echo "${page:-root}: $title"
done

# 2. Helmet ran on every page (data-rh count > 0)
for page in "" about pricing contact blog faq; do
  file="dist/${page}/index.html"
  [[ "$page" == "" ]] && file="dist/index.html"
  count=$(grep -c 'data-rh' "$file" 2>/dev/null || echo 0)
  echo "${page:-root}: data-rh=$count"
done

# 3. JSON-LD present on every page
for page in "" about pricing contact blog faq; do
  file="dist/${page}/index.html"
  [[ "$page" == "" ]] && file="dist/index.html"
  count=$(grep -o 'application/ld.json' "$file" 2>/dev/null | wc -l | tr -d ' ')
  echo "${page:-root}: $count JSON-LD blocks"
done
```

**Expected results:**
- Every page has a **unique** title (not the homepage title repeated)
- Every page has `data-rh ≥ 1`
- Every page has `≥ 2` JSON-LD blocks (Organization + at least one page-specific schema)

If any page fails these checks, re-read the **Traps** section above. The most common culprits are missing `concurrency: 1` or `skipThirdPartyRequests: true`.

---

## FULL PROJECT FILE CHECKLIST

After implementation, confirm these files are correctly set up:

- [ ] `package.json` — `postbuild` script + `reactSnap` config block with all 6 settings
- [ ] `src/main.tsx` — Conditional `hydrateRoot` / `createRoot` pattern with `HelmetProvider`
- [ ] `src/routes.tsx` — All pages imported eagerly (no `React.lazy`, no `Suspense`)
- [ ] `index.html` — Minimal: only charset, viewport, fallback title, favicon. No JSON-LD, no OG tags
- [ ] `src/components/SEO.tsx` — Central SEO component using `react-helmet-async`
- [ ] Every page file — Uses `<SEO>` with unique title, description, canonicalUrl, and structuredData

---

## NOTES FOR CI/CD AND DEPLOYMENT

If you deploy via GitHub Actions, Vercel, Netlify, or similar:

1. **Install Chrome on the CI machine** — most CI environments don't have Chrome by default
2. **Update `puppeteerExecutablePath`** for the CI environment (different path from macOS)
3. Alternatively, set `PUPPETEER_SKIP_DOWNLOAD=false` in env to let Puppeteer download a compatible Chromium — but this often fails with modern JS syntax (Trap #1). System Chrome is more reliable.
4. For GitHub Actions, add this step before the build:
   ```yaml
   - name: Install Chrome
     run: |
       sudo apt-get update
       sudo apt-get install -y google-chrome-stable
   ```
   Then set `puppeteerExecutablePath` to `/usr/bin/google-chrome`

---

*This prompt was produced from a real implementation on a Vite + React 18 + react-router-dom 6 + react-helmet-async 2 + react-snap 1.23 project. All traps listed were encountered and resolved during that implementation.*
