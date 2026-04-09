

## Plan: Redesign Hero Section Following Reference Screenshot

### Summary
Rebuild the Hero section and improve the SiteHeader to match the attached reference screenshot — a premium, cinematic, split-screen editorial layout with stronger hierarchy, cleaner typography, and better CTA logic. No other sections are touched.

### Files Changed

**1. `src/components/SiteHeader.tsx`** — Redesign top bar
- Replace the BR logo image with a text-based "Bohdan Rohulskyi" in `font-display` (Plus Jakarta Sans), bold, white, ~18px
- Remove "Blog." nav link — keep only "About." and "Work."
- Unify typography: nav links use same font family as the name, medium weight, full opacity (not 60%)
- Increase header height slightly and add horizontal padding matching the hero

**2. `src/components/HeroSection.tsx`** — Full rebuild of content/layout
- **Desktop (lg+):** Split-screen composition
  - Left ~55%: text content block, vertically centered
  - Right ~45%: the existing background video, cropped/positioned as a contained visual panel (not full-bleed), with grayscale + slight dark overlay for cinematic feel
- **Text hierarchy (left side):**
  1. `CINEMATOGRAPHER` — large display heading (~48-56px desktop), Plus Jakarta Sans, uppercase, bold, strong presence
  2. `DOCUMENTARY, FASHION AND COMMERCIAL` — smaller uppercase tracked subline below (~11-12px), letter-spacing wide
  3. Body copy — the provided text in Inter, ~13-14px, normal weight, ~70% opacity, left-aligned, with spacing between paragraphs
  4. Proof lines — "A strong visual partner..." and "Own kit. Lean setups..." as separate blocks with more spacing
- **Bottom bar (pinned to bottom of hero):**
  - Left: "London, United Kingdom" + pulsing green/white dot (CSS animation, subtle `opacity` keyframe pulse)
  - Right: "SEE MY WORK" as text link (primary CTA, uppercase, tracked) + "BOOK A CALL" as a subtle pill/bordered button (secondary)
- **Mobile:** Stack vertically — video on top (contained, ~40vh), text below, CTAs at bottom, location line above CTAs
- Remove the old logo-v2.png image from the hero entirely
- Keep `h-screen` constraint

**3. `tailwind.config.ts`** — Add pulse keyframe
- Add a `pulse-dot` keyframe animation for the availability dot (gentle opacity oscillation 1→0.3→1 over ~2s)

**4. `src/index.css`** — No changes needed (fonts already loaded)

**5. `src/pages/Index.tsx`** — No changes (still renders SiteHeader + HeroSection)

### Design Details

The video on the right side will be positioned using `object-cover` + `object-position` to create a sculptural crop effect (similar to the horse/body image in the reference). The left text block gets generous padding (80-100px left on desktop) for editorial breathing room. The bottom bar uses `absolute bottom-0` positioning within the hero section. The pulsing dot uses a simple CSS animation cycling opacity.

### What stays the same
- All sections below the Hero (WorkSection, GenresSection, NotesSection, SiteFooter)
- The background video file (`/videos/hero-bg.mp4`)
- Dark theme, fonts, color system
- Route structure

