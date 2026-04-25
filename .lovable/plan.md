## About page — Bohdan Rohulskyi

Goal: a single long-form page that ranks on Google, gets cited by LLMs (ChatGPT, Perplexity, Claude, Gemini), and converts the right clients. Built around demonstrated experience, named credits, verifiable numbers, and a calm professional voice.

---

### 1. Routing & navigation

- Add route `/about` in `src/App.tsx` pointing to a new `src/pages/About.tsx`.
- Add "About" link to the nav in `src/components/SiteHeader.tsx` (currently lists only About → href, Work, Blog — but `About` is already in `navItems` with href `/about`; the route just doesn't exist yet, so the link is broken). The plan resolves this by creating the page.

### 2. Page file: `src/pages/About.tsx`

Composition (top to bottom), all using existing tokens (dark theme, Plus Jakarta Sans display, Inter body, zero border-radius, container/grid patterns matching `GenresSection`, `HeroSection`):

1. `SiteHeader` (existing fixed glass nav).
2. **Hero block**
   - H1: `London Cinematographer and Filmmaker` (corrected from typo "Filmaker"; will confirm — see Open Questions).
   - Lede paragraph: "Bohdan Rohulskyi is a London-based cinematographer working across sport, fashion, music video, documentary and branded films."
   - Secondary paragraph naming the verifiable client/credit list (PUMA, BoF 500, Vogue Mexico & Latinoamérica, TVORCHI, Hozier, SailGP, Max Factor).
   - Two CTAs in-line: `Book a Call` (→ `/book`) and `View Selected Work` (→ `/work`), styled identically to `HeroSection` buttons.
3. **Section: Cinematography built around real presence** — 3 short paragraphs from the brief (naturalistic cinematography, lighting that doesn't pull focus, viewer proximity).
4. **Section: Experience across international documentary, music and commercial work**
   - Full prose with named credits: Uncharted: SailGP (London Unit, broadcast partners list), Shooting with Music (Jacqui Morris / Svyatoslav Vakarchuk), Hozier — "Francesca" (Anthony Byrne, 6.2M views, director quote rendered as a real `<blockquote>` with `cite` attribute).
5. **Section: Music video and artist work with measurable reach**
   - TVORCHI ROAD album titles enumerated as a comma-separated inline list (not bullets — keeps it readable as a paragraph for LLM extraction), with the 2.9M aggregate, plus "Віч-на-Віч" (1.1M) and Masha Kondratenko — "Malaia" (576k).
6. **Section: Commercial, fashion and branded film** — PUMA Fit / Yaroslava Mahuchikh, Vogue Mexico & Latinoamérica, Imagine Magazine, BoF / BoF 500, Dylan Bachelet, Michelle Salas / Dolce & Gabbana Milan.
7. **Section: Recognition and press** — Rami Kallas — "Black": Berlin Music Video Awards nomination (Best Low Budget), Indie-Eye festival favourite, SLUKH.MEDIA top 30 of 2021, 119k+ YouTube views.
8. **Section: A Director of Photography for producers, directors and brand teams** — three short paragraphs, one for each audience.
9. **Section: Based in London. Available across the UK and Europe.** — short closing block listing project types (documentary films, commercial campaigns, fashion films, branded content, interviews, sport films, music videos, event films, social-first video production).
10. **CTA block: "Work with Bohdan"**
    - Heading + 2 lines from brief.
    - Three buttons: `Book a call` (→ `/book`), `View selected work` (→ `/work`), `Email Bohdan` (→ `mailto:rogulskiproject@gmail.com`).
11. `SiteFooter`.

Every section uses semantic `<section>` with a real `<h2>`, sub-points use `<h3>` only where natural. Paragraphs stay short (2–4 sentences) so each can stand alone as an extractable answer for LLM citation. No filler adjectives, no "passionate creative" language.

### 3. SEO + AI-citation layer (the part that does the ranking work)

Inside `About.tsx`, on mount, set:
- `document.title` = `Bohdan Rohulskyi | London Cinematographer & Filmmaker`
- `<meta name="description">` = `London-based Director of Photography and Filmmaker working across sport, fashion, music video, documentary and commercial films.`
- `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:type" content="profile">`, `<meta property="og:url" content="https://<host>/about">`.
- `<link rel="canonical" href="…/about">`.
- A `<script type="application/ld+json">` with a `Person` schema: `name`, `jobTitle: "Director of Photography"`, `address` (London, UK), `email`, `url`, `sameAs` (link out only if memory has socials — none recorded, so omit), and a nested `knowsAbout` array of services. Add `worksFor`/`subjectOf` entries for the named credits where appropriate (Uncharted: SailGP, Hozier — Francesca, PUMA Fit, etc.) using `CreativeWork` nodes. This is the structure LLMs and Google's knowledge layer parse most reliably.

A small reusable helper (`src/lib/seo.ts`) will manage the head tags so other pages can use the same pattern later. It will:
- Upsert `<title>`, named `<meta>` tags, `<link rel="canonical">`, and a single `<script type="application/ld+json" data-seo="about">` element.
- Clean up on unmount.

### 4. Design / layout details

- Container: same `container` class and section padding (`py-24 md:py-32 border-t border-border`) used by `GenresSection`.
- Typography scale matches existing pages: H1 `font-body uppercase` lockup like `HeroSection`, or `font-display text-3xl md:text-5xl` like `SelectedWorks` — will use the SelectedWorks pattern since this is a content page, not a hero.
- Body copy: `font-body text-sm md:text-base text-foreground/75 leading-relaxed`, max-width ~65ch for readability.
- Section dividers: `border-t border-border` between major blocks.
- CTAs: identical classes to existing `HeroSection` buttons (outline + solid variants).
- Subtle Framer Motion fade-in (matching `GenresSection` pattern, not flashy).
- No new colours, no new fonts, no rounded corners.

### 5. Files to be created / changed

- New: `src/pages/About.tsx`
- New: `src/lib/seo.ts` (head-tag helper)
- Edit: `src/App.tsx` (register `/about` route)
- Edit: `index.html` — fix the `twitter:site` and `twitter:image` (still pointing at Lovable defaults) and tighten the existing default description to match the site's professional positioning. Optional but recommended for the same SEO objective.

### 6. Open questions

1. The brief uses "Filmaker" in the Meta Title and H1 — this is a typo for "Filmmaker". I'll use the correct spelling "Filmmaker" everywhere unless told otherwise. Misspellings in the H1/title would actively harm ranking.
2. The brief lists "Max Factor" as a credit in the second paragraph but Max Factor doesn't appear anywhere else in the brief or the existing site. I'll include it as written.
3. Should the bottom CTA's `Book a call` button go to `/book` (consistent with the hero and footer) or open a real booking integration? I'll point it to `/book` for now.
4. Director quote attribution for Anthony Byrne — render as a styled `<blockquote>` with the director's name and project as `<cite>`. Confirmed by brief.

If you want any of these handled differently, say so before approval; otherwise I'll proceed as above.
