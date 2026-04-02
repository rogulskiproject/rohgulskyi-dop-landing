

## Optimized video playback: Play only visible cards

**Problem**: All 18 cards (6×3 for looping) load and play videos simultaneously, causing freezing and slow load times.

**Solution**: Use IntersectionObserver to track which cards are visible. Only visible cards get live video (iframe or `<video>`); off-screen cards show a static thumbnail image. Videos start when scrolled into view, stop when scrolled away — so at most 2 iframes exist at any time (desktop) or 1 (mobile).

### How it works

```text
Desktop (2 cards visible):
  [Card A - playing] [Card B - playing] [Card C - thumbnail] [Card D - thumbnail] ...

User swipes right:
  [Card A - thumbnail] [Card B - playing] [Card C - playing] [Card D - thumbnail] ...
```

### Steps

1. **Add static thumbnails**
   - Vimeo: `https://vumbnail.com/{vimeoId}.jpg`
   - YouTube: `https://img.youtube.com/vi/{youtubeId}/maxresdefault.jpg`
   - Dylan Bachelet: keep local MP4 (lightweight, no iframe)

2. **Add IntersectionObserver to each card**
   - Track a `visibleCards` Set (indices of cards currently in viewport)
   - Root margin of `100px` so videos start loading just before entering view
   - On enter: add index to set; on leave: remove index

3. **Conditional rendering per card**
   - `coverVideo` (MP4): always render `<video>`, but toggle `play()`/`pause()` based on visibility
   - Vimeo/YouTube: render `<iframe>` only when visible, otherwise render `<img>` thumbnail
   - Add a brief fade transition (opacity 0→1) when switching from thumbnail to iframe

4. **Result**
   - Page loads instantly (only 2 lightweight images + 2 iframes on desktop)
   - Swiping destroys old iframes and creates new ones — max 2-3 active at any time
   - No layout or visual changes — same design, same card sizes

### Files changed
- `src/components/WorkSection.tsx` only

