import { useEffect } from "react";
import cover from "@/assets/puma-fit-23-cover.jpg";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const PumaFit23 = () => {
  useEffect(
    () =>
      applySeo({
        title: "PUMA FIT 23 — Director, Editor and Colourist | Bohdan Rohulskyi",
        description:
          "A high-energy commercial campaign for PUMA Ukraine's FIT 23 line, blending athletic performance with a fast, rhythmic visual language. Directed, edited and coloured by Bohdan Rohulskyi.",
        canonical: `${SITE_URL}/work/puma-fit-23`,
        meta: [
          { property: "og:title", content: "PUMA FIT 23 — Director, Editor and Colourist | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content:
              "A high-energy commercial campaign for PUMA Ukraine's FIT 23 line, blending athletic performance with a fast, rhythmic visual language. Directed, edited and coloured by Bohdan Rohulskyi.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/puma-fit-23` },
          {
            property: "og:image",
            content: `${SITE_URL}${cover}`,
          },
          { name: "twitter:title", content: "PUMA FIT 23 — Director, Editor and Colourist | Bohdan Rohulskyi" },
          {
            name: "twitter:description",
            content:
              "A high-energy commercial campaign for PUMA Ukraine's FIT 23 line, blending athletic performance with a fast, rhythmic visual language. Directed, edited and coloured by Bohdan Rohulskyi.",
          },
        ],
      }),
    [],
  );

  return (
    <ProjectCaseStudy
      project={{
        title: "PUMA FIT 23",
        subtitle: "PUMA Ukraine",
        category: "Commercial / Sport",
        role: "Director / Editor / Colourist",
        year: "2023",
        vimeoId: "948342341",
        externalUrl: "https://vimeo.com/948342341",
        introduction:
          "A high-energy commercial campaign for PUMA Ukraine's FIT 23 line — blending athletic performance with a fast, rhythmic visual language to capture the spirit of movement, discipline, and ambition.",
        overview: [
          "The project was built around the idea of presenting fitness not as a routine, but as a personal ritual. Each sequence was designed to feel immersive — placing the viewer inside the athlete's mindset rather than observing from the outside.",
          "Working closely with the PUMA Ukraine brand team, the visual direction balanced commercial clarity with a raw, documentary-inflected energy that gives the campaign its distinctive feel.",
        ],
        approach: [
          "Working with Kirill San as Director of Photography, I shaped the visual direction around dynamic camera work — combining steadicam movement with close-up detail shots to create a rhythm that mirrors the intensity of training. We kept the lighting natural and directional, a decision that reinforced the authenticity of each frame.",
          "In post-production, the grade was pushed toward high-contrast, desaturated tones with selective warmth — giving the piece a cinematic weight and a distinctive commercial presence.",
        ],
        reflection:
          "This project demonstrated that commercial sport content doesn't need to sacrifice visual depth for energy. By treating each frame with the same intention as a narrative film, the result feels both commercially effective and cinematically compelling.",
        credits: [
          "Client: PUMA Ukraine",
          "Production: Oddee Agency",
          "Creative and Art Director: Alina Bazar",
          "Producer: Ivan Bazar",
          "Director, Edit and Colour: Bohdan Rohulskyi",
          "Director of Photography: Kirill San",
          "Photographer: Dima Honcharov",
          "Stylist: Ruslana Samsoniuk",
        ],
        externalReferences: [
          {
            label: "Project page — Oddee Agency",
            url: "https://oddee.agency/launch-puma-fit-collection/",
          },
        ],
      }}
    />
  );
};

export default PumaFit23;
