import { motion } from "framer-motion";

import logoWhite from "@/assets/logo-v2.webp";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center px-6 md:px-10 lg:px-16 pt-14 pb-6">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-bg-poster.webp"
          width={1600}
          height={1136}
          className="w-full h-full object-cover grayscale opacity-70"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div
        className="relative z-10 grid w-full max-w-7xl mx-auto items-center gap-6 lg:gap-10 [grid-template-areas:'visual'_'text'] lg:[grid-template-areas:'text_visual'] [grid-template-columns:1fr] lg:[grid-template-columns:minmax(0,_62%)_minmax(0,_38%)]"
      >
        {/* Left column — text + CTA */}
        <div className="[grid-area:text] flex flex-col gap-0 text-center lg:text-left">
          {/* Single H1: DOM order is name → role → subtitle, visual order keeps role/subtitle on the left */}
          <motion.h1
            className="font-body uppercase text-foreground leading-tight mb-6 flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="absolute w-px h-px overflow-hidden [clip-path:inset(50%)]">
              Bohdan Rohulskyi
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.15em] font-semibold">
              Cinematographer
            </span>
            <span className="text-xs tracking-[0.2em] text-foreground/60 font-medium">
              Documentary, Sport, Fashion, Culture and Brands
            </span>
          </motion.h1>

          <motion.div
            className="max-w-2xl font-body text-xs md:text-sm lg:text-base leading-relaxed text-foreground/75 font-medium text-left flex flex-col gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p>
              Bohdan Rohulskyi is a London-based cinematographer working across documentary, sport, fashion, culture and branded storytelling.
            </p>
            <p>
              With a background in documentary and performance-led work, he creates cinematic imagery rooted in real human presence, textured realism and emotional precision.
            </p>
            <p>
              The result is work that feels immediate and true, while remaining carefully designed.
            </p>
            <p>
              A collaborative visual partner for directors. A prepared, production-aware DoP for producers.
            </p>
            <p>
              London-based, available across the UK and Europe.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-[18px] border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Discuss a Project
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-9 py-[18px] bg-foreground text-background font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              View Selected Work
            </a>
          </motion.div>
        </div>

        {/* Right column — name/logo visual */}
        <motion.img
          src={logoWhite}
          alt="Bohdan Rohulskyi"
          className="[grid-area:visual] justify-self-center w-[280px] md:w-[360px] lg:w-full lg:max-w-[500px] max-h-[55vh] object-contain h-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

    </section>
  );
};

export default HeroSection;
