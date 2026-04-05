

## Fix: Mobile dot indicators not updating during swipe

**Problem**: The `updateActiveIndex` function is only called inside the `scrollSettleTimer` (fires 250ms after scrolling stops). During active swiping, the dots never move — the user only sees them update after the scroll fully settles.

**Fix**: Call `updateActiveIndex` inside the `requestAnimationFrame` callback alongside `syncPlayback`, so dots update in real-time as the user swipes.

### Change in `src/components/WorkSection.tsx`

In the scroll handler (around line 149-153), add `updateActiveIndex()` to the rAF callback:

```tsx
const onScroll = () => {
  cancelAnimationFrame(rafRef.current);
  rafRef.current = requestAnimationFrame(() => {
    syncPlayback();
    updateActiveIndex();  // <-- add this
  });
  // ... rest unchanged
};
```

Single-line addition. No other files affected.

