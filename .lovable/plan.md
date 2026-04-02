

## Replace Dylan Bachelet Video Cover on Homepage

**What**: Replace the Vimeo iframe embed for Dylan Bachelet in the homepage Selected Work carousel with the uploaded MP4 video file (`dilan_web_video_caver-2.mp4`), played as a muted, looping, autoplaying background video.

**Changes**:

### 1. Copy the uploaded MP4 to project assets
- Copy `user-uploads://dilan_web_video_caver-2.mp4` → `src/assets/dilan-web-video-cover.mp4`

### 2. Update `src/components/WorkSection.tsx`

- **Add `mp4Src` field** to the `Project` interface
- **Import the MP4** asset at the top of the file
- **Set `mp4Src`** on the Dylan Bachelet project entry (and remove `vimeoId` so it uses the local video instead)
- **Add a `<video>` rendering branch** in the card's media area: when `mp4Src` is present, render a `<video autoPlay muted loop playsInline>` element with the same cover-fill sizing logic (using `coverWidth`/`coverHeight`) instead of an iframe

This keeps all other projects unchanged and only affects the homepage carousel.

