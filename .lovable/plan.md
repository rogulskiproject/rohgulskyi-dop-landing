

## Plan: Add "Kotex: Art's Missing Period" to Documentary Section

### What changes

**1. Add project entry to `src/pages/SelectedWorks.tsx`**
- Add a new project object for "Kotex: Art's Missing Period" with `filterGroup: "Documentary"`, `category: "Documentary Film"`, `youtubeId: "EmCZ8EqEVKE"`, `link: "/work/kotex-arts-missing-period"`.
- Reorder the projects array so this new entry appears before "Uncharted: Sail GP" (currently line 43). Within the Documentary filter, it will show first, then Uncharted second.

**2. Create detail page `src/pages/KotexArtsMissingPeriod.tsx`**
- New page using the existing `ProjectCaseStudy` component (same pattern as `UnchartedSailGP.tsx`).
- Title: "Kotex: Art's Missing Period", subtitle: "Kotex", category: "Documentary Film", role: "B-Roll Camera Operator", youtubeId: "EmCZ8EqEVKE", externalUrl pointing to the YouTube link.
- Brief introduction/overview text based on the video description (a documentary uncovering the censored art of menstruation).

**3. Add route in `src/App.tsx`**
- Import the new page and add `<Route path="/work/kotex-arts-missing-period" element={<KotexArtsMissingPeriod />} />`.

No cover image asset needed — YouTube thumbnail will be used automatically via the existing `getThumbnail` helper.

