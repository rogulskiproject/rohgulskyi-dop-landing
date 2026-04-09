

## Revised Plan: Update Hero Section

Three changes to `src/components/HeroSection.tsx` (and one to `tailwind.config.ts`):

### 1. Add subtitle below "CINEMATOGRAPHER"
Insert "DOCUMENTARY, FASHION AND COMMERCIAL" as a small uppercase line with wide letter-spacing (`tracking-[0.2em]`, `text-xs`, `font-medium`, `mb-6`).

### 2. Increase body text size
Change from `text-[12px] md:text-[13px]` to `text-sm md:text-base lg:text-lg` with `leading-relaxed`. Adjust paragraph spacing — first three paragraphs with `gap-3`, larger `gap-6` before the last two.

### 3. Add pulsing "online" location indicator
Absolutely positioned at the bottom-left of the hero section: a small green dot with a sonar/pulse animation (expanding ring that fades out, repeating) next to "London, United Kingdom".

- Add a custom `sonar` keyframe animation in `tailwind.config.ts`
- The dot conveys an "available/online" feeling

### What stays the same
- Headline size and weight unchanged
- CTA buttons ("Book a Call" / "See My Work") kept as-is
- Right column logo/image kept as-is

### Files modified
- `src/components/HeroSection.tsx` — subtitle, text sizing, location indicator
- `tailwind.config.ts` — `sonar` keyframe animation

