

## Redesign Hero Section to Match Reference

### Current vs Reference

The reference image shows a fundamentally different hero layout:

```text
Current:                          Reference:
┌──────────────────────────┐     ┌──────────────────────────┐
│ Header: [logo] ... nav   │     │ Bohdan Rohulskyi  About.Work.│
│                          │     │                          │
│ [TEXT 62%] │ [LOGO 38%]  │     │ CINEMATOGRAPHER          │
│ Big headline             │     │ D O C U M E N T A R Y... │
│ 3 bio groups             │     │                          │
│ [Book] [See Work]        │     │ Bio text (new, shorter)  │
│                          │     │ Proof lines              │
│                          │     │                          │
│                          │     │ London, UK  SEE MY WORK [BOOK]│
└──────────────────────────┘     └──────────────────────────┘
```

### Changes

**1. `src/components/HeroSection.tsx` — Full rewrite**
- Remove the right-column logo image entirely; go single-column, left-aligned
- Add "CINEMATOGRAPHER" as a large display heading (biggest text element)
- "DOCUMENTARY, FASHION AND COMMERCIAL" becomes a smaller tracked subtitle below it
- Replace bio text with new content from the reference:
  - "Bohdan Rohulskyi is a London-based Director of Photography working across sport, fashion, culture and branded storytelling."
  - "With a background in documentary and performance-led work, he creates cinematic imagery rooted in real human presence, textured realism and emotional precision."
  - "The result is work that feels immediate and true, while remaining carefully designed."
  - "A strong visual partner for directors. A reliable, production-aware DoP for producers."
  - "Own kit. Lean setups. London-based, available across the UK and Europe."
- Move CTAs to the bottom of the viewport in a fixed bottom bar:
  - Left: "London, United Kingdom" with a dot indicator
  - Right: "SEE MY WORK" as a text link + "BOOK A CALL" as a rounded/pill button
- All text left-aligned (not justified), vertically positioned in the lower-center area
- Keep the background video with grayscale/opacity treatment

**2. `src/components/SiteHeader.tsx` — Minor updates**
- Replace the logo image with text "Bohdan Rohulskyi" in bold/heading font
- Remove "Blog." from navigation (reference only shows About. and Work.)

### Technical Details
- Single file rewrite for HeroSection, minor edit for SiteHeader
- No new dependencies needed
- Bottom CTA bar uses `absolute bottom-0` within the hero section (not fixed to viewport)
- Responsive: on mobile, text stacks naturally; bottom bar may stack vertically

