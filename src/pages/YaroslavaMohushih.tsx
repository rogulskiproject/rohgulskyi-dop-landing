import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const YaroslavaMohushih = () => {
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
            src="https://player.vimeo.com/video/1010047613?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Yaroslava Mohushih — PUMA"
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
              Yaroslava Mohushih
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              PUMA
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                PUMA
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Documentary Film
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
            A documentary film following Yaroslava Mohushih, exploring the intersection of 
            athletic performance, personal identity, and the relentless pursuit of excellence. 
            Produced in collaboration with PUMA, this piece moves beyond conventional brand storytelling 
            to present an authentic, unfiltered portrait of determination.
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
                The project was conceived as a long-form documentary piece — an intimate look at 
                Yaroslava's world, her training rituals, and the quiet moments between high-intensity 
                performance. Rather than a polished campaign film, we sought to capture the raw texture 
                of her daily reality.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                Working closely with PUMA's creative team, we developed a visual language that honours 
                the brand's energy while staying true to the documentary form — resulting in a piece that 
                feels both commercially relevant and deeply personal.
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
                Our approach centred on immersion. We embedded ourselves in Yaroslava's environment — 
                training sessions, quiet moments of preparation, post-performance recovery — to capture 
                the full spectrum of her athletic life. The camera became an observer rather than a director.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The visual grammar draws from vérité documentary traditions: handheld movement, available 
                light, and extended takes that allow scenes to breathe. The grade sits in warm, natural 
                tones — grounding the film in reality while maintaining a cinematic presence that 
                elevates the everyday into something compelling.
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
                The production unfolded over multiple days, following Yaroslava through her training 
                regimen and personal routines. A lean crew of three allowed us to remain unobtrusive — 
                capturing candid moments that would have been impossible with a larger setup. 
                The intimacy of the process is inseparable from the intimacy of the final film.
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
              Working with Yaroslava reinforced our commitment to documentary-driven brand work. 
              The most powerful stories emerge when you stop performing for the camera and simply 
              exist within the moment. This project stands as a testament to PUMA's willingness 
              to trust in authenticity — and to the power of letting a subject's truth speak louder 
              than any scripted narrative.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default YaroslavaMohushih;
