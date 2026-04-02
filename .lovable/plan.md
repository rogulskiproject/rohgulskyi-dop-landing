

## Replace Dylan Bachelet cover with uploaded MP4 video

**What changes**: The Dylan Bachelet card in the homepage Work section carousel will use the uploaded MP4 file as its cover instead of the Vimeo iframe embed. The project detail page Vimeo embed stays untouched.

### Steps

1. **Copy the uploaded video** to `src/assets/dilan_web_video_cover.mp4`

2. **Update `src/components/WorkSection.tsx`**:
   - Add `coverVideo?: string` to the `Project` interface
   - Import the MP4 file: `import dilanCoverVideo from "@/assets/dilan_web_video_cover.mp4"`
   - Set `coverVideo: dilanCoverVideo` on the Dylan Bachelet project entry
   - In the render logic, add a new condition before the Vimeo/YouTube iframe checks: if `project.coverVideo` exists, render a `<video>` element with `autoPlay`, `loop`, `muted`, `playsInline`, and `object-cover` styling — same positioning as the current iframe (centered, covering the frame)
   - This replaces the Vimeo background embed on the card only

3. **No changes to**:
   - `src/pages/ProjectDetail.tsx` or any detail page (Vimeo embed preserved)
   - `src/pages/SelectedWorks.tsx` (Work page grid unchanged)
   - Desktop/tablet layout or styling

### Technical detail

The `<video>` tag will use the same absolute centering and cover dimensions as the current iframes:
```tsx
<video
  src={project.coverVideo}
  autoPlay loop muted playsInline
  className="absolute left-1/2 top-1/2 pointer-events-none max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
  style={{ width: `${coverWidth}px`, height: `${coverHeight}px` }}
/>
```

