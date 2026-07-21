## Goal
Remove the duplicate "Work with Bohdan" CTA block on `/work/dylan-bachelet` while keeping the in-page CTA (the one starting "Planning an editorial, campaign or talent story…") and preserving the standard footer CTA on every other page.

## Change

**`src/components/SiteFooter.tsx`**
- Add an optional prop `hideCta?: boolean` (default `false`).
- When `hideCta` is true, skip rendering the top "Work with Bohdan" CTA block (lines 7–30). Keep the contact/copyright bar unchanged.

**`src/pages/ProjectDetail.tsx`** (Dylan page only)
- Pass `<SiteFooter hideCta />`.

No other pages change — every other case study, Index, About, SelectedWorks, etc. keep the current footer CTA exactly as it is.

## Result
- Dylan page: one CTA (the in-article "Work with Bohdan" with Discuss a project / View related work) + slim contact/copyright bar.
- All other pages: unchanged.
