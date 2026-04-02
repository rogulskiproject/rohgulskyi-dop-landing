

## Refactor: Prewarming + Scroll-Safe Hover-to-Play Gallery

### Problems identified from logs and code

1. **Race condition**: `play()` and `pause()` fire simultaneously during fast hover transitions, causing `PlayInterrupted` errors
2. **No prewarming**: Players only initialize on hover, causing 2-5s delay
3. **No scroll awareness**: Hover events fire during drag/scroll, thrashing player state
4. **"Tap to play" overlay**: The error state shows on desktop when timeout fires during loading — confusing
5. **Infinite loop scroll glitches**: `resetToMiddle()` fires on every scroll frame via rAF, causing jumps especially leftward when scroll position crosses the threshold mid-animation

### Plan

#### 1. WorkSection.tsx — Add scroll-awareness and prewarming

- **Track scroll/drag state with a ref** (`isScrollingRef`). Set to `true` on mouseDown and on scroll events. Clear it with a 300ms debounce after scroll stops.
- **Suppress hover during scroll**: Only set `activeVideoKey` if `!isScrollingRef.current && !isDragging`.
- **Compute visible card indices** after scroll settles (debounced). Derive `visibleIndices` (the 2 visible cards on desktop) and pass `shouldPrewarm` prop to LazyVimeoCard for those cards + their immediate neighbors.
- **Debounce `resetToMiddle`**: Instead of running on every rAF scroll, debounce it to 150ms after scroll ends to prevent left-scroll glitches. Use a separate settling timer.

#### 2. LazyVimeoCard.tsx — Add prewarming lifecycle + fix race conditions

**New props**: Add `shouldPrewarm: boolean` alongside existing `isHovered`.

**New state**: `"idle" | "prewarming" | "ready" | "playing" | "paused" | "error"`

**Prewarming logic**:
- When `shouldPrewarm` becomes `true` and state is `"idle"`, create the iframe + Vimeo Player instance in the background (muted, `autoplay=0`). Set state to `"prewarming"`.
- On `player.ready()`, set state to `"ready"`. The poster stays visible; the player is cached but hidden.
- The player instance persists as long as the card is mounted (no destroy on mouse leave).

**Hover logic (sequential, cancellable)**:
- Use an `abortRef` pattern: on hover enter, set `abortRef.current = false`, then await `play()`. Before each async step, check `abortRef.current`. On hover leave, set `abortRef.current = true` and call `pause()`.
- This eliminates `PlayInterrupted` errors by skipping stale play attempts.
- If state is already `"ready"` when hovered, playback starts near-instantly.
- If state is `"idle"` or `"prewarming"` when hovered, wait for ready then play (with abort checks).

**Pause/resume**: Same as current — save `getCurrentTime()` on leave, `setCurrentTime()` + `play()` on re-enter.

**Remove error overlay on desktop**: Remove the "Tap to play" text entirely on desktop. If loading times out, just keep the poster visible silently. The spinner can remain but only while `isHovered && state === "prewarming"`.

**Poster/player layering fix**: Keep poster at z-index 2 until state is `"playing"`, then fade it out. Player container always at z-index 1 with opacity transition.

#### 3. Files changed

| File | Changes |
|---|---|
| `src/components/LazyVimeoCard.tsx` | Add `shouldPrewarm` prop, prewarming state, abort-safe play/pause, remove "Tap to play" on desktop, fix race conditions |
| `src/components/WorkSection.tsx` | Add scroll-settling debounce, compute visible + neighbor indices for prewarming, suppress hover during scroll/drag, debounce `resetToMiddle` |

