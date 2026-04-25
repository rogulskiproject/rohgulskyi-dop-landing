import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const MooveFire = () => {
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
            to="/work"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>

        <div className="w-full aspect-video bg-card">
          <iframe
            src="https://player.vimeo.com/video/1179879918?h=&title=0&byline=0&portrait=0"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Moove — Fire"
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
              Moove — Fire
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Music Video
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Artist
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Moove
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Music Video
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Location
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Kyiv, Ukraine
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
            A music video for Moove's "Fire" — filmed in Kyiv before the war in Ukraine.
            The video expresses the raw energy of the song through metaphorical imagery,
            translating sounds and emotions into vivid visual moments.
          </p>
        </motion.div>
      </section>

      {/* Overview */}
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
                The focus is not on narrative, but on emotion — on the way certain sounds
                resonate through visual images. From the beginning, the artist envisioned
                everything unfolding within a dark, empty space — a kind of void or raw
                matter from which these images emerge.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                A running girl and a galloping horse carry a sense of energy, drive, and
                tension. Two twin wrestlers struggle against each other, creating resistance
                while mirroring each other's movements like a reflection. A fire performer
                plays with flames, the movement of fire itself becoming a character.
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
                All of these images intertwine like flashes in a dream. And then there is a
                dancing elderly man — an old man in a suit, as if he has just walked down the
                stairs from his office — almost like an embodiment of freedom.
              </p>
              <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
                The visual treatment embraces darkness as a canvas, allowing each metaphorical
                image to emerge and dissolve organically. The interplay between light and shadow,
                movement and stillness, creates a hypnotic rhythm that mirrors the song's own
                dynamics — building tension through juxtaposition rather than linear storytelling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stills */}
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

      {/* Reflection */}
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
              "Fire" captures a moment in time — the creative energy of Kyiv before the war,
              channeled through a visual language that prioritizes feeling over narrative.
              Each image was chosen not to tell a story, but to evoke the sensations the
              music carries within it. The result is a piece that lives in the space between
              sound and sight, where emotion becomes image.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default MooveFire;
