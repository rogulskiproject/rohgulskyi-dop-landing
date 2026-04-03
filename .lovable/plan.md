

## Replace Homepage Work Section Video Covers

The user uploaded 6 new lightweight mp4 files to replace the existing video previews in the homepage Work carousel. Here's the mapping based on filenames:

| Uploaded file | Replaces | Target path |
|---|---|---|
| `dilan_web_video_caver-4.mp4` | Dylan Bachelet | `public/videos/dylan-bachelet-preview.mp4` |
| `puma_yaroslava_web_video_caver-2.mp4` | Yaroslava Mohushih | `public/videos/yaroslava-mohushih-preview.mp4` |
| `orserio_web_video_caver-2.mp4` | Orserio | `public/videos/orserio-preview.mp4` |
| `Z_R_valentin_day_web_video_caver-2.mp4` | Valentin Day | `public/videos/valentin-day-preview.mp4` |
| `hozer_web_video_caver-2.mp4` | Hozier - Francesca | `public/videos/hozier-francesca-preview.mp4` |
| `cornwel_video_caver-2.mp4` | AnOther Magazine | `public/videos/another-magazine-preview.mp4` |

### Steps

1. **Copy all 6 uploaded mp4 files** to `public/videos/`, overwriting the existing preview files with the new lightweight versions.

No code changes needed — the filenames in `WorkSection.tsx` already reference these exact paths. The carousel will automatically use the new videos.

