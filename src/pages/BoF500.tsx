import { useEffect } from "react";
import cover from "@/assets/bof-500-cover.png";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const BoF500 = () => {
  useEffect(
    () =>
      applySeo({
        title: "The Best of BoF 500 2023 — DOP | Bohdan Rohulskyi",
        description:
          "A highlight film capturing the atmosphere, conversations and defining moments of The Business of Fashion's annual BoF 500 gala.",
        canonical: `${SITE_URL}/work/bof-500-2023`,
        meta: [
          { property: "og:title", content: "The Best of BoF 500 2023 — DOP | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A highlight film capturing the atmosphere, conversations and defining moments of The Business of Fashion's annual BoF 500 gala.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/bof-500-2023` },
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
      title: "The Best of BoF 500 2023",
      subtitle: "The Business of Fashion",
      category: "Fashion Recap",
      role: "DOP",
      year: "2023",
      youtubeId: "zNdnPu8L9_Y",
      externalUrl: "https://www.youtube.com/watch?v=zNdnPu8L9_Y",
      introduction:
        "A highlight film capturing the atmosphere, conversations, and defining moments of The Business of Fashion's annual BoF 500 gala — one of the most prestigious gatherings in the global fashion industry.",
      overview: [
        "The assignment was to distil a multi-day, multi-location event into a cohesive cinematic recap that conveys the energy, prestige, and cultural significance of the BoF 500. The film needed to serve both as a standalone piece and as branded content for BoF's global audience.",
        "As DOP, the challenge was to maintain a consistent visual language across unpredictable environments — from intimate dinners to large-scale stage moments — while keeping the production unobtrusive enough to capture authentic interactions.",
      ],
      approach: [
        "The approach prioritised mobility and responsiveness. Using a compact camera setup, we moved through the event fluidly — capturing candid moments alongside more composed editorial shots. The lighting strategy relied heavily on available light, supplemented minimally to preserve the atmosphere of each setting.",
        "In post, the grade was kept refined and warm — honouring the elegance of the event while maintaining a natural, unforced feel that distinguishes this from typical event coverage.",
      ],
      reflection:
        "Working with The Business of Fashion on the BoF 500 recap underscored the importance of editorial sensibility in event filmmaking. The goal isn't to document everything — it's to distil the feeling. This project is a clear example of how a documentary DOP's eye can elevate commercial event content.",
    }}
  />
  );
};

export default BoF500;
