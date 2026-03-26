import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const ValentinDay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Video */}
      <section className="pt-24 md:pt-32">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>

        <div className="w-full aspect-video bg-card">
          <iframe
            src="https://player.vimeo.com/video/1166656782?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Valentin Day — Zielinski & Rozen"
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
              Valentin Day
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Documentary Campaign Film
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Zielinski & Rozen
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Documentary Campaign Film
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
            A documentary campaign film created for Zielinski & Rozen, capturing the essence 
            of connection and intimacy through the lens of Valentine's Day. The film weaves 
            together real moments and curated vignettes to tell a story that feels both personal 
            and universal — a celebration of fragrance as an expression of love.
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
                Zielinski & Rozen sought a film that could sit at the intersection of documentary 
                authenticity and campaign polish — something that felt lived-in rather than staged. 
                The brief was to capture Valentine's Day not as a commercial event, but as a 
                genuine emotional moment tied to the rituals of scent and memory.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                We followed real couples and individuals through quiet, intimate moments — 
                the act of gifting, the first encounter with a new fragrance, the unspoken 
                gestures that define closeness. Each scene was crafted to feel observational, 
                allowing the brand to emerge naturally within the narrative.
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
                The visual language drew from documentary tradition — handheld intimacy, 
                natural light, and a muted, warm palette that evokes the quiet hours of 
                early morning and late evening. We wanted the film to feel like a memory 
                you're revisiting rather than an advertisement you're watching.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The grade leaned into soft ambers and desaturated tones, creating a cohesive 
                atmosphere that ties together diverse locations and subjects. Sound design 
                played a crucial role — layering ambient textures with a restrained score 
                that never competes with the visuals but deepens their emotional weight.
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
                Filming took place across multiple intimate locations, blending real environments 
                with carefully dressed sets. The production maintained a small footprint to 
                preserve the documentary feel — a compact crew, minimal lighting rigs, and 
                an approach that prioritised genuine interaction over choreographed performance.
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
              The Valentin Day campaign for Zielinski & Rozen demonstrates how documentary 
              sensibility can elevate brand storytelling beyond convention. By grounding the 
              campaign in real emotion rather than aspiration alone, we created a piece that 
              resonates on a human level — positioning fragrance not as a product, but as 
              a vessel for connection, memory, and meaning.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ValentinDay;
