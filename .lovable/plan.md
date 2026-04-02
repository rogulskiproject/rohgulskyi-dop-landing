
## Fix: Move Alessandro Michele project to Documentary filter

**Problem**: The "Alessandro Michele — The BoF Podcast" card on the Work page has `filterGroup: "Fashion Film"` — it should be under "Documentary".

**Change**: In `src/pages/SelectedWorks.tsx`, line 28, update the project entry:
- `filterGroup: "Fashion Film"` → `filterGroup: "Documentary"`
- Optionally update `category: "Interview / Fashion"` → `category: "Documentary"` to match the new grouping (or keep as-is if the display label should remain "Interview / Fashion")

No other files need changes. Desktop, tablet, mobile, and homepage are unaffected.
