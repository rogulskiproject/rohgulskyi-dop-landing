// Central registry of preview videos for SEO (VideoObject schema.org)
// Update uploadDate / duration with real values when available.

const SITE_URL = "https://bohdanrohulskyi.com";
const DIRECTOR = {
  "@type": "Person",
  name: "Bohdan Rohulskyi",
  jobTitle: "Director of Photography",
  url: SITE_URL,
} as const;

export interface VideoMeta {
  slug: string;             // matches case-study route, e.g. "dylan-bachelet"
  name: string;             // display title
  description: string;
  videoFile: string;        // path under /public
  posterFile: string;       // path under /public
  uploadDate: string;       // ISO 8601 date (YYYY-MM-DD)
  duration: string;         // ISO 8601 duration (e.g. PT45S)
  pageUrl: string;          // case study URL path
}

export const previewVideos: VideoMeta[] = [
  {
    slug: "dylan-bachelet",
    name: "Dylan Bachelet — Imagine Magazine",
    description:
      "Editorial fashion film for Imagine Magazine, shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/dylan-bachelet-preview.mp4",
    posterFile: "/videos/posters/dylan-bachelet.jpg",
    uploadDate: "2024-09-01",
    duration: "PT30S",
    pageUrl: "/work/dylan-bachelet",
  },
  {
    slug: "yaroslava-mohushih",
    name: "Yaroslava Mohushih — PUMA",
    description:
      "Documentary film for PUMA following athlete Yaroslava Mohushih, shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/yaroslava-mohushih-preview.mp4",
    posterFile: "/videos/posters/yaroslava-mohushih.jpg",
    uploadDate: "2024-07-01",
    duration: "PT45S",
    pageUrl: "/work/yaroslava-mohushih",
  },
  {
    slug: "orserio",
    name: "Orserio — E-Commerce Brand Film",
    description:
      "E-commerce brand film for Orserio, shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/orserio-preview.mp4",
    posterFile: "/videos/posters/orserio.jpg",
    uploadDate: "2024-05-01",
    duration: "PT40S",
    pageUrl: "/work/orserio",
  },
  {
    slug: "valentin-day",
    name: "Valentin Day — Zielinski & Rozen",
    description:
      "Documentary campaign film for Zielinski & Rozen, shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/valentin-day-preview.mp4",
    posterFile: "/videos/posters/valentin-day.jpg",
    uploadDate: "2024-03-01",
    duration: "PT45S",
    pageUrl: "/work/valentin-day",
  },
  {
    slug: "another-magazine",
    name: "AnOther Magazine — Simone Rocha",
    description:
      "Editorial film for AnOther Magazine featuring Simone Rocha, shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/another-magazine-preview.mp4",
    posterFile: "/videos/posters/another-magazine.jpg",
    uploadDate: "2024-02-01",
    duration: "PT35S",
    pageUrl: "/work/another-magazine",
  },
  {
    slug: "hozier-francesca",
    name: "Hozier — Francesca",
    description:
      "Music video for Hozier's 'Francesca', shot by Bohdan Rohulskyi, Director of Photography.",
    videoFile: "/videos/hozier-francesca-preview.mp4",
    posterFile: "/videos/posters/hozier-francesca.jpg",
    uploadDate: "2023-10-01",
    duration: "PT60S",
    pageUrl: "/work/hozier-francesca",
  },
];

export const buildVideoObject = (v: VideoMeta) => ({
  "@type": "VideoObject",
  name: v.name,
  description: v.description,
  thumbnailUrl: `${SITE_URL}${v.posterFile}`,
  contentUrl: `${SITE_URL}${v.videoFile}`,
  uploadDate: v.uploadDate,
  duration: v.duration,
  director: DIRECTOR,
  creator: DIRECTOR,
  publisher: {
    "@type": "Person",
    name: "Bohdan Rohulskyi",
    url: SITE_URL,
  },
  url: `${SITE_URL}${v.pageUrl}`,
});

export const buildVideoListJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected Work — Bohdan Rohulskyi, Director of Photography",
  itemListElement: previewVideos.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: buildVideoObject(v),
  })),
});

export const buildSingleVideoJsonLd = (slug: string) => {
  const v = previewVideos.find((x) => x.slug === slug);
  if (!v) return null;
  return {
    "@context": "https://schema.org",
    ...buildVideoObject(v),
  };
};
