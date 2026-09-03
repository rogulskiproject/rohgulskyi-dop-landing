import { useEffect } from "react";
import cover from "@/assets/tvorchi-cover.png";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const TvorchiVichNaVich = () => {
  useEffect(
    () =>
      applySeo({
        title: "TVORCHI, Vich-na-Vich — DOP | Bohdan Rohulskyi",
        description:
          "A music video for Ukrainian electronic duo TVORCHI, translating the track's tension and release into light, shadow and camera movement.",
        canonical: `${SITE_URL}/work/tvorchi-vich-na-vich`,
        meta: [
          { property: "og:title", content: "TVORCHI, Vich-na-Vich — DOP | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A music video for Ukrainian electronic duo TVORCHI, translating the track's tension and release into light, shadow and camera movement.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/tvorchi-vich-na-vich` },
          {
            property: "og:image",
            content: `${SITE_URL}${cover}`,
          },
        ],
      }),
    [],
  );

  return (
  <ProjectCaseStudy
    project={{
      title: "TVORCHI — Віч-на-Віч",
      subtitle: "TVORCHI",
      category: "Music Video",
      role: "DOP",
      youtubeId: "Y5QMUv7H0ic",
      externalUrl: "https://www.youtube.com/watch?v=Y5QMUv7H0ic",
      introduction:
        "A music video for Ukrainian electronic duo TVORCHI — a visually charged piece that translates the emotional intensity and sonic texture of 'Віч-на-Віч' into a cinematic experience built on atmosphere, light, and movement.",
      overview: [
        "The project was conceived as a visual counterpart to the track's layered, electronic sound — using environment, performance, and cinematography to build a world that feels both abstract and emotionally grounded.",
        "As DOP, the goal was to create images that carry the same tension and release as the music — using light, shadow, and camera movement to mirror the track's dynamics.",
      ],
      approach: [
        "The visual approach centred on controlled lighting environments — using colour, contrast, and haze to create atmospheres that shift with the music's progression. Camera movement was choreographed to complement the performance, moving between intimate close-ups and wider environmental shots.",
        "The grade was pushed toward bold, high-contrast territory — deep shadows, selective colour, and a texture that gives the piece a raw, visceral quality consistent with TVORCHI's visual identity.",
      ],
      reflection:
        "Working with TVORCHI on this music video was an opportunity to push the visual language into more expressive territory. The best music video cinematography doesn't just serve the performance — it becomes part of the performance. This project embodies that principle.",
    }}
  />
  );
};

export default TvorchiVichNaVich;
