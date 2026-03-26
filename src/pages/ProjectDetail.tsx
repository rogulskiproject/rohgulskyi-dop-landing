import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const ProjectDetail = () => {
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
            src="https://player.vimeo.com/video/1107691277?h=&title=0&byline=0&portrait=0&color=ffffff"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Dylan Bachelet — Imagine Magazine"
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
              Dylan Bachelet
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Imagine Magazine
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Imagine Magazine
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Editorial / Fashion Film
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
            A cinematic portrait of Dylan Bachelet, captured for the pages of Imagine Magazine. 
            This project explores the intersection of movement, identity, and contemporary editorial 
            storytelling — blending fashion film language with an intimate, observational approach.
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
                The film was conceived as a visual study — less about traditional fashion presentation 
                and more about capturing an authentic energy. Working with natural light and minimal 
                staging, every frame was designed to feel unposed, immediate, and quietly magnetic.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The result is a piece that sits between documentary and editorial — 
                honouring both the subject's presence and the publication's visual identity.
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
                We approached this project with a stripped-back philosophy — letting the subject 
                lead the narrative. The camera work favours slow, deliberate movements, drawing 
                the viewer into each frame rather than overwhelming with cuts.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The colour grading leans into muted, desaturated tones with moments of rich 
                contrast — creating a visual texture that feels timeless rather than trendy. 
                Sound design was kept minimal, reinforcing the contemplative mood of the piece.
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
                Shot over the course of a single day, the production leaned into spontaneity. 
                The small crew allowed for flexibility — adapting to light changes, discovering 
                locations in real time, and maintaining an atmosphere of creative freedom.
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
              This project reinforced a belief in restraint — that the most compelling work 
              often comes from removing rather than adding. By trusting the subject and the 
              environment, we arrived at something that feels both personal and universal. 
              The film continues to serve as a reference point for our editorial approach.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ProjectDetail;
