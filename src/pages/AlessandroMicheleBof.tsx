import { useEffect } from "react";
import cover from "@/assets/alessandro-michele-cover.webp";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const AlessandroMicheleBof = () => {
  useEffect(
    () =>
      applySeo({
        title: "Alessandro Michele, The BoF Podcast — DOP | Bohdan Rohulskyi",
        description:
          "A long-form interview film with Alessandro Michele for The Business of Fashion Podcast, lit and framed as a cinematic portrait session.",
        canonical: `${SITE_URL}/work/alessandro-michele-bof`,
        meta: [
          { property: "og:title", content: "Alessandro Michele, The BoF Podcast — DOP | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A long-form interview film with Alessandro Michele for The Business of Fashion Podcast, lit and framed as a cinematic portrait session.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/alessandro-michele-bof` },
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
      title: "Alessandro Michele — The BoF Podcast",
      subtitle: "The Business of Fashion",
      category: "Interview / Fashion",
      role: "DOP",
      youtubeId: "qtJqYEtbrBA",
      externalUrl: "https://www.youtube.com/watch?v=qtJqYEtbrBA",
      introduction:
        "A long-form interview film featuring Alessandro Michele in conversation for The Business of Fashion Podcast — capturing the visual sensibility and intellectual depth of one of fashion's most influential creative directors.",
      overview: [
        "The brief was to create a visual environment worthy of the conversation — a setting that feels intimate, considered, and visually rich without distracting from the substance of the dialogue. The film needed to work both as a standalone video piece and as the visual layer for a widely distributed podcast.",
        "As DOP, the focus was on crafting a lighting and composition approach that elevates a seated interview into something cinematic — treating the conversation as a portrait session rather than a standard interview setup.",
      ],
      approach: [
        "Lighting was designed to be soft, directional, and atmospheric — creating depth and dimension within a relatively contained space. The camera positions were carefully chosen to offer variety without breaking the intimacy of the conversation.",
        "The visual language draws on portraiture traditions — shallow depth of field, considered framing, and a grade that sits in warm, muted tones. The result is an interview that feels less like media content and more like a visual essay.",
      ],
      reflection:
        "This project demonstrated that even the most traditional format — the seated interview — can be transformed through intentional cinematography. When the visual approach matches the intellectual depth of the conversation, the result is something that transcends its format.",
    }}
  />
  );
};

export default AlessandroMicheleBof;
