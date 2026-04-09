

## Move Location Indicator from Hero to Footer

Move the "London, United Kingdom" pulsing dot indicator from the bottom of the hero section to the site footer.

### Changes

**1. `src/components/HeroSection.tsx`**
- Remove the entire location indicator block (the `motion.div` with the sonar dot and "London, United Kingdom" text) from the bottom of the hero section.

**2. `src/components/SiteFooter.tsx`**
- Add the location indicator (white sonar dot + "London, United Kingdom" text) to the footer — placed above or near the existing "London-based" text area, styled consistently with the footer's typography and the dot style from the hero.

The dot will keep the same white color (`bg-foreground`) and sonar pulse animation. The text styling will match the footer's muted tone (`text-foreground/55`).

