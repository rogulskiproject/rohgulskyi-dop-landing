

## Diagnosis: Why Videos Are Freezing and Lagging

### Root Causes Found

**1. Too many simultaneous video elements (18 total)**
The carousel creates `loopedProjects = [...projects, ...projects, ...projects]` — that's 18 `<video>` elements all mounted in the DOM at once, each with a `src` attribute pointing to files ranging from 5-10MB. The browser tries to open connections and buffer metadata for all 18 videos simultaneously, causing network congestion and memory pressure.

**2. Videos are too large for preview cards**
The files are 1440x1080 resolution at 3000-6400 kbps. For a carousel card that's only ~50vw wide (roughly 550-700px on most screens), this is massive overkill. Each video is 5-10MB.

**3. Multiple ERR media requests in network log**
The browser is failing many video range requests — likely because 18 concurrent video connections overwhelm the connection pool, causing timeouts and retries.

**4. No poster frames — blank cards while loading**
Videos show nothing until enough data is buffered, creating a "frozen" appearance.

### Plan

**Step 1: Generate static poster images from each video**
Extract the first meaningful frame from each mp4 as a compressed JPEG (960px wide). Use these as `poster` attributes so cards show content instantly.

**Step 2: Lazy-mount video elements — only render the active pair + neighbors**
Instead of rendering 18 `<video>` elements, only mount videos for cards that are visible or adjacent (max 4-6 at a time). Replace the rest with poster images. This is the biggest performance win.

**Step 3: Reduce video resolution to 960x720**
Re-encode all preview videos to 960x720 at ~1500kbps using ffmpeg. This will cut file sizes by 60-70% (from ~45MB total to ~15MB) with no visible quality loss at card size.

**Step 4: Add poster attribute to all video elements**
Set `poster={posterSrc}` on each `<video>` tag so the frame appears immediately before the video is ready to play.

### Technical Details

- **Poster extraction**: `ffmpeg -ss 1 -i input.mp4 -vframes 1 -q:v 3 -vf scale=960:-2 poster.jpg`
- **Video re-encode**: `ffmpeg -i input.mp4 -vf scale=960:-2 -c:v libx264 -preset slow -crf 28 -movflags +faststart -an output.mp4`
- **Lazy mount**: Replace the current approach of always rendering `<video>` with a conditional: render `<video>` only for indices within `[settledStart - 2, settledStart + 3]`, render `<img poster>` for everything else
- Video elements keep `preload="none"` until they enter the active window

### Expected Result
- Instant visual feedback (poster images load in <100ms)
- Only 4-6 video elements in DOM instead of 18
- Total video payload reduced from ~45MB to ~15MB
- Smooth scrolling with no freezing or lag

