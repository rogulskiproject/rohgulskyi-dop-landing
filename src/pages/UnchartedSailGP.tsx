import { useEffect } from "react";
import cover from "@/assets/uncharted-sailgp-cover.webp";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const project = {
  title: "Uncharted: Sail GP",
  subtitle: "Sail GP",
  category: "Documentary Film",
  role: "DOP / London crew",
  year: "2024",
  youtubeId: "PDfaMsRMGY8",
  externalUrl: "https://www.youtube.com/watch?v=PDfaMsRMGY8&t=32s",
  introduction:
    "Uncharted: Sail GP captures the raw intensity and human drama behind one of the fastest-growing global sailing competitions. The film goes beyond the race to explore the athletes, the technology, and the relentless pursuit of speed on water.",
  overview: [
    "Sail GP brings together national teams competing in identical F50 foiling catamarans capable of speeds exceeding 100 km/h. The documentary follows the London leg of the championship, offering a behind-the-scenes look at the preparation, strategy, and adrenaline that define the sport.",
    "As part of the London crew, the goal was to deliver cinematic coverage that communicated the scale and spectacle of the event while maintaining an intimate, athlete-centred narrative.",
  ],
  approach: [
    "The cinematography balanced handheld immediacy with composed wide shots to contrast the chaos on deck with the grandeur of the Thames setting. Close-up detail work on rigging, sails, and crew coordination brought texture and tension to the edit.",
    "Working as DOP within the London crew required adaptability — shooting across water, dockside, and on board in rapidly changing conditions while keeping the visual language consistent and cinematic throughout.",
  ],
  reflection:
    "This project reinforced the importance of preparation and instinct in documentary filmmaking. Capturing authentic moments in high-speed, high-stakes environments demands both technical precision and the ability to anticipate action before it unfolds.",
};

const UnchartedSailGP = () => {
  useEffect(
    () =>
      applySeo({
        title: "Uncharted: Sail GP — DOP / London crew | Bohdan Rohulskyi",
        description:
          "A documentary film on the London leg of the Sail GP championship, following the athletes, the F50 catamarans and the pursuit of speed on water.",
        canonical: `${SITE_URL}/work/uncharted-sail-gp`,
        meta: [
          { property: "og:title", content: "Uncharted: Sail GP — DOP / London crew | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A documentary film on the London leg of the Sail GP championship, following the athletes, the F50 catamarans and the pursuit of speed on water.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/uncharted-sail-gp` },
          {
            property: "og:image",
            content: `${SITE_URL}${cover}`,
          },
        ],
      }),
    [],
  );

  return <ProjectCaseStudy project={project} />;
};

export default UnchartedSailGP;
