

## Selected Works Page

### Overview
Create a new `/work` page called "Selected Works" — a grid-based library of all projects. It features a category filter bar at the top (All, Documentary, Commercial, Music Video, Fashion Film) that toggles visibility of projects by category with smooth animations.

### Design (referencing uploaded screenshot)
- Dark background, consistent with existing site aesthetic
- Filter bar at top: pill-style category tabs (ALL selected by default)
- Grid layout: 4 columns on desktop, 2 on tablet, 1 on mobile
- Each card has a 3:2 aspect ratio with a video thumbnail/placeholder and project title overlay at the top-left
- Subtle border around each card
- Clicking a filter hides non-matching projects with a fade/scale animation
- Clicking a card navigates to the existing project detail page

### Technical Plan

**1. Create `src/pages/SelectedWorks.tsx`**
- Filter categories: `["All", "Documentary", "Commercial", "Music Video", "Fashion Film"]`
- Reuse the same project data from WorkSection (title, subtitle, category, link, vimeoId/youtubeId)
- Map each project's category to a filter group (e.g. "Documentary Campaign Film" → "Documentary", "Editorial" → "Fashion Film", "Music Video" → "Music Video", "E-Commerce Brand Film" → "Commercial")
- State: `activeFilter` — when changed, non-matching cards get `opacity-0 scale-95 pointer-events-none` with transition, matching cards get `opacity-100 scale-100`
- Each card: 3:2 aspect ratio container with a static Vimeo/YouTube thumbnail image (not iframe) for performance, project title overlaid top-left in uppercase monospace
- Cards link to existing detail pages via `useNavigate`

**2. Update `src/App.tsx`**
- Add route: `<Route path="/work" element={<SelectedWorks />} />`

**3. Files changed**
- Create: `src/pages/SelectedWorks.tsx`
- Edit: `src/App.tsx` (add route + import)

