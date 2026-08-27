import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import GenresSection from "@/components/GenresSection";
import NotesSection from "@/components/NotesSection";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";
import cover from "@/assets/hero-eye.jpg";

const TITLE =
  "Bohdan Rohulskyi | London Cinematographer & Director of Photography";
const DESCRIPTION =
  "London-based cinematographer working across documentary, sport, fashion, culture and branded films. Available for productions across the UK and Europe.";

const Index = () => {
  useEffect(
    () =>
      applySeo({
        title: TITLE,
        description: DESCRIPTION,
        canonical: "/",
        meta: [
          { property: "og:title", content: TITLE },
          { property: "og:description", content: DESCRIPTION },
          { property: "og:type", content: "website" },
          { property: "og:url", content: "/" },
          {
            property: "og:image",
            content: `${window.location.origin}${cover}`,
          },
        ],
      }),
    [],
  );


  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkSection />
        <GenresSection />
        <NotesSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
