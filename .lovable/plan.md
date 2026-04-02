

## Problem

The homepage Selected Work section renders **18 iframes** (6 projects × 3 loops) on mount — all autoplay simultaneously. Each iframe loads an entire Vimeo/YouTube player with video stream. This is extremely heavy: ~18 network connections, video decoders, and DOM trees running at once.

## Solution: Lazy-load with IntersectionObserver + static thumbnails

Show **static thumbnail images** by default. Only load the video iframe when a card scrolls into view. Unload it when it scrolls out.

### How it works

1. **Default state**: Each card shows a lightweight `<img>` thumbnail (from `vumbnail.com` for Vimeo, `img.youtube.com` for YouTube) — same approach already used on the Work page grid.

2. **IntersectionObserver**: Attach one observer to the scroll container. When a card enters the viewport (with a small margin), swap its thumbnail for the live iframe. When it leaves, swap back to the thumbnail.

3. **Result**: At most 2-3 iframes alive at any time (the visible cards), instead of 18.

### File changes

**`src/components/WorkSection.tsx`** (only file changed):

- Add a `Set<number>` state (`visibleCards`) tracking which card indices are in-viewport
- Create an `IntersectionObserver` with `root: trackRef.current` and `rootMargin: "200px"` (preload slightly ahead of scroll)
- Assign a `ref` callback to each card `div` to register it with the observer
- In the render: if `visibleCards.has(i)` → render iframe; else → render `<img>` thumbnail with the same cover dimensions
- Add a brief opacity/fade transition so the swap from thumbnail to video feels smooth

### Performance impact

- Initial page load: **0 iframes** instead of 18
- Visible at any time: **2-3 iframes** max
- Thumbnail images are ~20-50KB each vs ~2-5MB per iframe session

No changes to desktop layout, styling, content, or any other page.

