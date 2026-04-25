## Problem

The "Back to work" button on most project detail pages currently navigates to the homepage (`/`) instead of the Selected Works page (`/work`).

Audit results:
- `src/components/ProjectCaseStudy.tsx` → `/work` ✓ correct
- `src/pages/VogueMexico.tsx` → `/work` ✓ correct
- `src/pages/ProjectDetail.tsx` → `/` ✗ wrong
- `src/pages/YaroslavaMohushih.tsx` → `/` ✗ wrong
- `src/pages/ValentinDay.tsx` → `/` ✗ wrong
- `src/pages/Orserio.tsx` → `/` ✗ wrong
- `src/pages/AnotherMagazine.tsx` → `/` ✗ wrong
- `src/pages/HozierFrancesca.tsx` → `/` ✗ wrong
- `src/pages/MooveFire.tsx` → `/` ✗ wrong

The Alessandro Michele page (where the user noticed the bug) uses the shared `ProjectCaseStudy` component, which is already correct — but many other pages were built standalone with the wrong link.

## Fix

Change `to="/"` to `to="/work"` on the "Back to work" `<Link>` in the 7 standalone page files listed above. No other behavior changes.

## Files to edit

- `src/pages/ProjectDetail.tsx`
- `src/pages/YaroslavaMohushih.tsx`
- `src/pages/ValentinDay.tsx`
- `src/pages/Orserio.tsx`
- `src/pages/AnotherMagazine.tsx`
- `src/pages/HozierFrancesca.tsx`
- `src/pages/MooveFire.tsx`
