import { useEffect } from "react";
import cover from "@/assets/chernaya-cover.jpg";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const ChernayaRamiKallas = () => {
  useEffect(
    () =>
      applySeo({
        title: "Chernaya, Rami Kallas — Director | Bohdan Rohulskyi",
        description:
          "A music video for Rami Kallas' track 'Chernaya' — a layered piece built on atmosphere, expressive lighting and movement, directed by Bohdan Rohulskyi.",
        canonical: "/work/chernaya-rami-kallas",
        meta: [
          { property: "og:title", content: "Chernaya, Rami Kallas — Director | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A music video for Rami Kallas' track 'Chernaya' — a layered piece built on atmosphere, expressive lighting and movement, directed by Bohdan Rohulskyi.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: "/work/chernaya-rami-kallas" },
          {
            property: "og:image",
            content: `${window.location.origin}${cover}`,
          },
        ],
      }),
    [],
  );

  return (
  <ProjectCaseStudy
    project={{
      title: "Chernaya — Rami Kallas",
      subtitle: "Rami Kallas",
      category: "Music Video",
      role: "Director",
      vimeoId: "1010028819",
      externalUrl: "https://vimeo.com/1010028819",
      introduction:
        "A music video for Rami Kallas' track 'Chernaya' — a visually layered piece that draws on atmosphere, movement, and emotional intensity to create a cinematic counterpart to the music.",
      overview: [
        "The concept was rooted in contrast — light against shadow, stillness against motion, intimacy against spectacle. Every visual decision was made in service of the track's emotional arc, building from quiet tension to full release.",
        "As director, the goal was to create a visual world that feels inseparable from the music — not illustration, but amplification.",
      ],
      approach: [
        "The production was designed around controlled environments with expressive lighting — using shadow and colour to shape the mood of each sequence. Camera movement was choreographed to the rhythm of the track, creating a seamless dialogue between image and sound.",
        "The colour palette was deliberately restrained — deep blacks, selective highlights, and moments of saturated colour that punctuate the visual narrative at key emotional beats.",
      ],
      reflection:
        "Directing 'Chernaya' was an exercise in visual storytelling at its most instinctive. The best music videos don't explain the song — they expand it. This project aimed to do exactly that, creating a visual experience that lives alongside the music rather than beneath it.",
    }}
  />
  );
};

export default ChernayaRamiKallas;
