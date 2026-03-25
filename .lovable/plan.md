

## Plan: Redesign Hero Section to Match Reference Screenshot

The reference screenshot shows a dramatically different hero layout: full-screen dark/black background with a cinematic image, the name "bohdan rohulskyi" in a custom rounded/bubble typeface centered on screen, "ESTD / DIRECTOR OF PHOTOGRAPHY / 1997" centered below the name, then further down the field line and a single short positioning paragraph, followed by two CTA buttons side by side. The header uses "BR" as a logo mark with nav items "About.", "Work.", "Blog." with dots.

The user also provided a white logo PNG (`BOHDAN_white_no_bg._1.png`) which is the custom wordmark — this should be used as the hero name instead of text, since it matches the distinctive rounded typeface in the reference.

### Changes

**1. Copy the white logo to project assets**
- Copy `user-uploads://BOHDAN_white_no_bg._1.png` to `src/assets/logo-white.png`

**2. Redesign `HeroSection.tsx`**
- Full-viewport dark hero with the background image covering the entire section
- Replace the text heading "BOHDAN ROHULSKYI" with the white logo PNG image, centered
- Below the logo: "ESTD &nbsp; DIRECTOR OF PHOTOGRAPHY &nbsp; 1997" in a centered row, small uppercase tracking
- Below that: "DOCUMENTARY, FASHION AND COMMERCIAL CAMPAIGNS" — wide-spaced uppercase, centered
- Below that: the short positioning paragraph (single paragraph, centered) — only the first paragraph, not all four
- Two CTA buttons centered: "BOOK A CALL" (filled/dark button with subtle bg) and "SEE MY WORK" (text/outline)
- Remove: the multi-paragraph positioning text, the client logos strip, the role/location line (absorbed into the logo area)
- Stronger gradient overlay on the hero image — mostly dark with the image subtly visible

**3. Update `SiteHeader.tsx`**
- Change left logo text from "Bohdan Rohulskyi" to "BR"
- Update nav items to include dots: "About.", "Work.", "Blog." (keeping Blog as placeholder, matching reference)
- Make header transparent on dark hero (remove bg-background, use transparent with light text)

### Files Modified
- `src/components/HeroSection.tsx` — full redesign
- `src/components/SiteHeader.tsx` — logo and nav style update
- New asset: `src/assets/logo-white.png`

