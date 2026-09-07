import { useEffect } from "react";
import cover from "@/assets/puma-cr-cover.jpg";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const PumaCR = () => {
  useEffect(
    () =>
      applySeo({
        title: "PUMA CR — Director and DoP | Bohdan Rohulskyi",
        description:
          "A character-driven PUMA brand film built around real athletic stories, shot closer to documentary than traditional advertising.",
        canonical: `${SITE_URL}/work/puma-cr`,
        meta: [
          { property: "og:title", content: "PUMA CR — Director and DoP | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A character-driven PUMA brand film built around real athletic stories, shot closer to documentary than traditional advertising.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/puma-cr` },
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
      title: "PUMA CR",
      subtitle: "PUMA Ukraine",
      category: "Commercial / Sport",
      role: "Director / DoP",
      year: "[VERIFY YEAR]",
      vimeoId: "1010036272",
      externalUrl: "https://vimeo.com/1010036272",
      introduction:
        "A brand film for PUMA that centres on real athletic stories — capturing the grit, focus, and humanity behind performance. The piece was conceived as a character-driven commercial that feels closer to documentary than traditional advertising.",
      overview: [
        "The brief called for something beyond the typical sport commercial. Rather than choreographed action, we followed real athletes through their environments — training spaces, recovery moments, and the quiet determination that defines their daily lives.",
        "The result is a piece that serves PUMA's brand identity while maintaining an authenticity closer to documentary than to traditional advertising.",
      ],
      approach: [
        "We adopted a vérité-inflected approach — minimal staging, natural light, and a camera that moves with the subject rather than directing them. This created a sense of immediacy and intimacy that distinguishes the film from conventional commercial work.",
        "The edit was crafted to breathe — allowing moments of stillness between the high-intensity sequences, giving the viewer space to connect with the human story at the heart of the brand message.",
      ],
      reflection:
        "This collaboration with PUMA reinforced the value of restraint in commercial filmmaking. When you trust the subject and the environment, the brand story tells itself — and the audience responds to that honesty.",
    }}
  />
  );
};

export default PumaCR;
