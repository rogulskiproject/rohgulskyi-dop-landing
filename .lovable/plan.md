

## Plan: Work Section Background Image with Scroll-Based Blur Effect

### What we're building
Add the uploaded image as a fixed background for the Work section, with a dynamic blur effect driven by scroll position:
- **Blurry** when the section first enters the viewport (scrolling in)
- **Sharp/focused** when the section is centered in the viewport
- **Blurry again** when scrolling past

### Steps

1. **Copy the uploaded image** to `src/assets/work-bg.png`

2. **Update `WorkSection.tsx`**:
   - Import the image and `useScroll`, `useTransform` from Framer Motion
   - Add a `useRef` on the section element
   - Use `useScroll` with the section ref to get scroll progress (`0 → 1`)
   - Map scroll progress to blur value using `useTransform`:
     - `0.0` (entering) → `blur(12px)`
     - `0.5` (centered) → `blur(0px)`
     - `1.0` (leaving) → `blur(12px)`
   - Render the image as an absolute-positioned background with `object-cover`, slight overlay for contrast, and apply the dynamic blur via `motion.div` style

### Technical Details
- Uses Framer Motion's `useScroll({ target, offset })` with `offset: ["start end", "end start"]` to track the section through the viewport
- `useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [12, 2, 0, 2, 12])` for smooth blur ramp
- The blur is applied via inline `filter` style on a `motion.img` element
- A dark overlay sits on top of the image for text readability

