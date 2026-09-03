import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const AnotherMagazine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return applySeo({
      title:
        "AnOther Magazine x Simone Rocha | Editorial Film — Bohdan Rohulskyi",
      description:
        "An editorial fashion film for AnOther Magazine and Simone Rocha, directed and shot by London cinematographer Bohdan Rohulskyi. Intimate movement, texture and cinematic portraiture.",
      canonical: `${SITE_URL}/work/another-magazine`,
      meta: [
        {
          property: "og:title",
          content:
            "AnOther Magazine x Simone Rocha | Editorial Film — Bohdan Rohulskyi",
        },
        {
          property: "og:description",
          content:
            "An editorial fashion film for AnOther Magazine and Simone Rocha, directed and shot by London cinematographer Bohdan Rohulskyi.",
        },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `${SITE_URL}/work/another-magazine`,
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      jsonLdId: "another-magazine",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "AnOther Magazine x Simone Rocha | Editorial Film — Bohdan Rohulskyi",
          description:
            "An editorial fashion film for AnOther Magazine and Simone Rocha, directed and shot by London cinematographer Bohdan Rohulskyi.",
          datePublished: "2025-01-01",
          dateModified: "2025-01-01",
          author: {
            "@type": "Person",
            name: "Bohdan Rohulskyi",
            url: "/about",
          },
          mainEntityOfPage: "/work/another-magazine",
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "AnOther Magazine — Simone Rocha",
          description:
            "Editorial fashion film for AnOther Magazine and Simone Rocha.",
          uploadDate: "2025-01-01",
          embedUrl: "https://player.vimeo.com/video/1010017917",
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Video */}
      <section className="pt-24 md:pt-32">
        <div className="container">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>

        <div className="w-full aspect-video bg-card">
          <iframe
            src="https://player.vimeo.com/video/1010017917?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="AnOther Magazine — Simone Rocha"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24"
        >
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              AnOther Magazine
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Editorial
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Simone Rocha
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Publication
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                AnOther Magazine
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Editorial
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Year
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                2025
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="container pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
            Introduction
          </h2>
          <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
            An editorial film created for AnOther Magazine in collaboration with Simone Rocha — 
            a visual exploration of the designer's world through movement, texture, and intimate 
            portraiture. The piece bridges fashion editorial and documentary filmmaking, capturing 
            the essence of a collection through a cinematic lens.
          </p>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Overview
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The brief was to translate Simone Rocha's tactile, romantic aesthetic into moving 
                image — honouring the craftsmanship of the garments while creating something that 
                stands on its own as a piece of visual storytelling. AnOther Magazine's editorial 
                sensibility demanded a film that felt considered, unhurried, and deeply intentional.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                We developed an approach rooted in intimacy — tight framings, natural light, and a 
                rhythm that mirrors the quiet confidence of the collection itself. Every moment was 
                designed to reveal rather than display, inviting the viewer into a world rather 
                than presenting a product.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Approach */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Creative Approach
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The editorial language drew from Simone Rocha's signature vocabulary — softness 
                meeting structure, delicacy meeting strength. We used slow, deliberate camera 
                movements to echo the weight and drape of the fabrics, allowing the garments to 
                breathe within each frame.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The colour palette remained muted and painterly, with desaturated tones punctuated 
                by the occasional flush of colour from the collection. Sound design was minimal — 
                ambient textures and silence, creating space for the visuals to speak without 
                competition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Gallery */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-12">
              Stills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-muted/40 border border-border/40 flex items-center justify-center"
                >
                  <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30">
                    Still {i}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Behind the Scenes
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The shoot was an exercise in controlled spontaneity — carefully planned setups that 
                left room for organic, unscripted moments. Working closely with the editorial team 
                at AnOther Magazine, we built a collaborative environment where every creative 
                decision served both the publication's identity and the designer's vision.
              </p>
            </div>
          </motion.div>

          {/* BTS Gallery */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-video bg-muted/40 border border-border/40 flex items-center justify-center"
              >
                <span className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30">
                  BTS {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Analysis */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
              Reflection
            </h2>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              This collaboration with AnOther Magazine and Simone Rocha represents the intersection 
              of editorial integrity and fashion filmmaking at its most refined. The film doesn't 
              simply document a collection — it interprets it, offering viewers an emotional entry 
              point into the designer's universe. It stands as proof that editorial content can be 
              both commercially purposeful and artistically uncompromising.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AnotherMagazine;
