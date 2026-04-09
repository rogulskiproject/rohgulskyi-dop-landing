

## Plan: Make Hero Background Video More Visible

Currently the video has two layers of dimming:
1. Video element: `opacity-40` (40% opacity) + `grayscale`
2. Overlay div: `bg-background/70` (70% opaque dark overlay)

Combined, only ~12% of the video is visible. To make it noticeably more visible while keeping text readable:

### Changes in `src/components/HeroSection.tsx`

- **Line 15**: Change video class from `opacity-40` to `opacity-70` (increase video opacity)
- **Line 19**: Change overlay from `bg-background/70` to `bg-background/50` (reduce dark overlay)

This will roughly triple the video visibility while maintaining sufficient contrast for white text.

