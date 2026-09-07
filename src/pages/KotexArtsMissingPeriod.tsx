import { useEffect } from "react";
import cover from "@/assets/kotex-cover.png";
import { applySeo } from "@/lib/seo";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { SITE_URL } from "@/lib/site";

const project = {
  title: "Kotex: Art's Missing Period",
  subtitle: "Kotex — DAVID London & Ogilvy Singapore",
  category: "Documentary Film",
  role: "B-Roll Camera Operator",
  year: "2026",
  youtubeId: "EmCZ8EqEVKE",
  externalUrl: "https://www.youtube.com/watch?v=EmCZ8EqEVKE",
  introduction:
    "Art's Missing Period is a documentary that uncovers the long history of censorship surrounding menstruation in art. The film explores how one of the most natural human experiences has been systematically erased from visual culture — and what happens when artists reclaim it.",
  overview: [
    "The documentary traces centuries of artistic expression around menstruation, examining how societal taboos have shaped what is deemed acceptable in galleries, museums, and public discourse. Through interviews and archival research, the film builds a compelling case for why this censorship matters.",
    "B-roll cinematography was used to capture the textures of art, gallery spaces, and the creative process, providing visual depth to the narrative without interrupting the documentary's intimate tone.",
  ],
  approach: [
    "As B-roll camera operator, the focus was on creating evocative supplementary footage — detail shots of artworks, atmospheric gallery interiors, and candid moments that enriched the storytelling. The visual approach favoured natural light and subtle movement to maintain authenticity.",
  ],
  reflection:
    "This project was a meaningful exploration of how documentary filmmaking can challenge cultural norms. Contributing B-roll footage to a story about visibility and representation reinforced its role in opening up social conversation.",
  credits: [
    "Client: Kotex",
    "Agencies: DAVID London, Ogilvy Singapore",
    "Production: Object & Animal",
    "Director: Kathryn Everett",
    "Executive Producer: Dom Thomas",
    "Producer: Serafima Kutsenko",
    "Director of Photography: Will Atherton",
    "B-Roll Camera Operator: Bohdan Rohulskyi",
    "Offline Editor: Collin Kriner",
    "Composer: Pam Autuori",
  ],
  externalReferences: [
    {
      label: "Campaign coverage — LBBOnline",
      url: "https://lbbonline.com/news/kotex-art-s-missing-period",
    },
  ],
};

const KotexArtsMissingPeriod = () => {
  useEffect(
    () =>
      applySeo({
        title: "Kotex: Art's Missing Period — B-Roll Camera Operator | Bohdan Rohulskyi",
        description:
          "A documentary uncovering the long history of censorship around menstruation in art. Bohdan Rohulskyi shot B-roll across artworks and gallery spaces.",
        canonical: `${SITE_URL}/work/kotex-arts-missing-period`,
        meta: [
          { property: "og:title", content: "Kotex: Art's Missing Period — B-Roll Camera Operator | Bohdan Rohulskyi" },
          {
            property: "og:description",
            content: "A documentary uncovering the long history of censorship around menstruation in art. Bohdan Rohulskyi shot B-roll across artworks and gallery spaces.",
          },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `${SITE_URL}/work/kotex-arts-missing-period` },
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

export default KotexArtsMissingPeriod;
