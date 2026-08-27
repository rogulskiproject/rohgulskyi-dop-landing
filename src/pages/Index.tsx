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

const PERSON_DESCRIPTION =
  "Bohdan Rohulskyi is a London-based cinematographer working across documentary, sport, fashion, culture and branded storytelling.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bohdan Rohulskyi",
  jobTitle: ["Cinematographer", "Director of Photography"],
  description: PERSON_DESCRIPTION,
  url: `${window.location.origin}/`,
  sameAs: [
    "https://www.instagram.com/rogulskiproject/",
    "https://www.imdb.com/name/nm14191117/",
    "https://vimeo.com/user135704204",
    "https://www.linkedin.com/in/bohdan-rohulskyi-aaab43183/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  areaServed: "London, United Kingdom, Europe",
};

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
        jsonLd: personSchema,
        jsonLdId: "home-person",
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
