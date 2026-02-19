
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
- SEO-optimized with JSON-LD schemas
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
