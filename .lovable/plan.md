

## Fix: Eliminate Video Playback Delay on Carousel Scroll

### Problem

Two issues cause the jagged/delayed playback:

1. **Lazy mounting is tied to `settledStart` (a React state)**. This state only updates *after* scroll settles (250ms debounce). So when you scroll, new cards don't get `<video>` elements mounted until the animation finishes — you see a poster image flash before the video appears.

2. **Playback (`updatePlayback`) also only fires after settle**. Videos don't start playing until the scroll has completely stopped.

### Solution

**Mount all videos eagerly, control playback via scroll position in real-time.**

Since there are only 6 unique videos (18 elements in the looped array), and the files are small (0.8-2.6MB each), the real bottleneck is not having too many `<video>` elements — it's the constant mount/unmount cycle causing flicker. The fix:

1. **Always mount `<video>` elements for all cards** — remove the conditional `shouldMountVideo` logic entirely. All 18 cards get a `<video>` with `poster` set. Since all videos are small and looped copies share the same `src`, the browser caches them effectively.

2. **Set `preload="auto"` on all videos** so they buffer immediately on page load. With ~9.7MB total payload this is acceptable.

3. **Play/pause in real-time during scroll** — replace the "wait for settle" approach with a `requestAnimationFrame`-based scroll observer that continuously checks which cards are visible and plays/pauses accordingly. This means videos start playing the instant they scroll into view, not after the animation completes.

4. **Keep the settle timer only for the infinite-loop reset** (`resetToMiddle`) and mobile dot indicator — these still need debouncing.

### Changes

**`src/components/WorkSection.tsx`**:

- Remove `settledStart` state and the conditional `shouldMountVideo` render logic
- All cards always render `<video>` with `poster` and `preload="auto"`
- Add a `requestAnimationFrame` loop inside the scroll handler that computes visible indices from `scrollLeft` in real-time and calls `play()`/`pause()` immediately
- Remove `handleCanPlay` gated by `settledStart` — replace with an `onCanPlay` that auto-plays if the card is currently visible (checked via live scroll position, not stale state)
- Keep settle timer for `resetToMiddle` and `updateActiveIndex` only

### Expected Result
- Videos play continuously as cards scroll into view — no waiting for settle
- No flicker from mount/unmount cycles
- Poster images show instantly on load, replaced by video playback as soon as buffered
- Smooth, uninterrupted visual experience while navigating

