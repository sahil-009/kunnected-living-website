## Kunnected FM — Corporate Website, Phase 1

Building the foundation: a full brand-accurate design system, the complete navigation and footer chrome, and the entire homepage story. Later phases roll that language across the remaining pages.

### One stack correction up front

The brief asks for Next.js App Router. This project runs **TanStack Start** (React 19 + Vite + file-based routing + SSR + server functions) — the same capability set (server rendering, route-level SEO, data loading), different framework. Everything else in the technical brief holds exactly: TypeScript, Tailwind, Motion (Framer Motion), Shadcn UI, React Hook Form, React Query, dark mode, AA accessibility, performance.

### Brand system (from BRAND_BOOK_KUFM.pdf)

Extracted and locked as design tokens:

```text
Core Blue     #201A57   primary, headlines, dark sections
Active Blue   #3F80CF   accent, interactive, links, focus
Bright White  #FFFFFF   canvas
System Grey   #565656   body / secondary text
Deep Black    #000000   maximum contrast
```

No other colours. No gradients beyond near-invisible tonal washes (the brand book explicitly forbids gradient hierarchy breaks).

Typography follows the brand hierarchy — Neue Haas Grotesk Display Pro Medium (headlines) / Roman (subheads), Helvetica Regular (body). Neue Haas is a licensed font, so the build uses a metrically-close, freely-licensable neo-grotesque stack (Inter Tight / Helvetica Neue / Arial fallback) tuned with the brand's tracking and weight ratios. If you have a Neue Haas web licence, drop the woff2 files in and I'll swap the stack — zero other changes needed.

Layout is built on the brand book's **8×8 grid** with its margin and segment rules (2-segment and 3-segment compositions), which is what will drive the asymmetry rather than generic card grids.

The **KUnnect icon geometry** (interlocking arcs) becomes an SVG pattern system used as hero background motion, section dividers, and quiet texture — matching Pattern 1 and Pattern 2 in the brand book.

### Brand positioning baked into copy

Drawn from the brand book and LinkedIn brief: purpose "Connected Campus Excellence"; values Reliable / Efficient / Connected / Proactive; foundations Seamless Operations, Intelligent Management, Student-centric Experience, Culture of Responsiveness; tagline "To manage student living with professionalism and heart." Audience: universities and university students. Services: HVAC, cleaning, buildings maintenance, electrical, project management, preventive maintenance, asset & lifecycle tracking, fire safety.

### Navigation

Transparent over the hero, solidifying to white on scroll with a hairline rule. Sticky. Services mega-menu with a two-column split (service list + a featured operational panel), animated open/close. Search affordance, "Request Consultation" CTA. Full-screen mobile navigation with staggered link reveal.

### Homepage — 14 sections, each a distinct composition

No two sections share a layout.

1. **Immersive hero** — full-viewport cinematic campus photography, slow parallax drift, arc-geometry overlay, multi-line headline with per-line masked reveal, glass CTA pair.
2. **Who We Are** — asymmetric editorial split, oversized pull-quote from the brand purpose.
3. **Why Choose Us** — off-grid stacked statements, number-led, no cards.
4. **Core Services** — horizontal scroll-linked service strip with image reveals.
5. **Industries We Serve** — full-bleed image band with overlaid segmented labels.
6. **Operational Excellence** — dark Core Blue section, 24/7 operations centre imagery, floating metric chips.
7. **Campus Experience** — student-first narrative, image + editorial text, offset framing.
8. **Statistics** — animated counters on the 8-column grid.
9. **Case Study Preview** — large single project card with hover image scale and editorial caption.
10. **Sustainability** — light section, thin-line infographic in Active Blue.
11. **Testimonials** — quiet, typographic, one quote at a time with crossfade.
12. **Latest Articles** — magazine three-up with featured lead article.
13. **Large CTA** — full-bleed Core Blue with arc pattern.
14. **Premium footer** — large brandmark, four nav columns, newsletter, social, legal, Abu Dhabi office details from the letterhead.

### Imagery

Bespoke AI-generated architectural photography, colour-graded to the brand palette: university campus exteriors, modern student accommodation interiors, plant rooms, HVAC risers, electrical distribution boards, engineers on site, a 24/7 operations control room, night-time facade. Roughly 10–12 images for Phase 1, generated at the right aspect ratios and served through CDN asset pointers so the repo stays light. No stock handshakes.

### Logo

You're uploading the artwork. Until it lands I'll wire a typographic "KUnnected FM" lockup in Core Blue behind a single `<Brandmark />` component and a favicon slot — when you send the SVG/PNG files it's a one-component swap, respecting the brand book's clearspace and 180px minimum digital size.

### Contact details used site-wide

Sas Al Nakhl Campus, Abu Dhabi, UAE · T +971 2 312 3333 · M +971 2 401 8000 · info@kunnectedfm.com · www.kunnectedfm.com

### Motion

Motion for React throughout: masked text reveals, fade-up on intersection, image parallax, hover elevation, magnetic CTA cursor, page transitions, Lenis-style smooth scroll. Everything restrained, everything respecting `prefers-reduced-motion`.

### Technical detail

- Reusable component library under `src/components/` — `Brandmark`, `Nav`, `MegaMenu`, `Section`, `Reveal`, `Parallax`, `ServiceCard`, `MetricCounter`, `EditorialSplit`, `ImageBand`, `Testimonial`, `NewsCard`, `CTABand`, `Footer`.
- Tokens defined in `src/styles.css` under `@theme inline` (Tailwind v4 CSS-first) with light and dark values; no `tailwind.config.js`.
- Route-level SEO via `head()` on `src/routes/index.tsx` — unique title, description, og/twitter tags, Organization + LocalBusiness JSON-LD.
- Semantic landmarks, single `<h1>`, single `<main>`, AA contrast (Active Blue on white and Core Blue combos verified), keyboard-navigable mega menu, visible focus rings.
- Lazy-loaded below-fold imagery, responsive `srcset`, no layout shift.

### Later phases

Phase 2: About, Services hub + the 11 service sub-pages, Industries. Phase 3: Our Process, Why Kunnected FM (interactive comparison), Sustainability, News & Insights. Phase 4: Careers, Contact (map + React Hook Form), 404, Privacy, Terms — plus a backend decision for the contact form and newsletter, which will need Lovable Cloud to actually store or send submissions.
