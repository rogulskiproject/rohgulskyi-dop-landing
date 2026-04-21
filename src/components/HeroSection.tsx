import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-60"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Layered gradients for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-[88px] md:top-[104px] left-0 right-0 z-10 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between font-body text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-foreground/50">
          <span>Issue 001 — MMXXVI</span>
          <span className="hidden md:inline">Folio / Cinematography</span>
          <span>London · UK</span>
        </div>
        <div className="max-w-[1400px] mx-auto mt-4 h-px bg-foreground/15" />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left rail — vertical caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex col-span-1 items-end justify-start"
          >
            <span
              className="font-body text-[10px] tracking-[0.4em] uppercase text-foreground/40"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Bohdan Rohulskyi — Director of Photography
            </span>
          </motion.div>

          {/* Headline column */}
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-foreground/55 mb-6 md:mb-8"
            >
              — A Folio in Light & Movement
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-foreground leading-[0.92] tracking-[-0.02em] text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px]"
            >
              Cinema
              <br />
              <span className="italic font-normal text-foreground/85">of the</span>
              <br />
              Real.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              <div className="md:col-span-4">
                <p className="font-body text-[10px] tracking-[0.28em] uppercase text-foreground/40 mb-3">
                  Discipline
                </p>
                <p className="font-serif text-base md:text-lg leading-snug text-foreground/85">
                  Documentary, Fashion &amp; Commercial cinematography rooted in human presence.
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="font-body text-[10px] tracking-[0.28em] uppercase text-foreground/40 mb-3">
                  Practice
                </p>
                <p className="font-serif text-base md:text-lg leading-snug text-foreground/85">
                  Cinematic imagery built on textured realism, emotional precision and quiet, deliberate craft.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end items-end">
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <a
                    href="/work"
                    className="group inline-flex items-center justify-between md:justify-start gap-4 border-b border-foreground/40 pb-2 font-body text-[11px] tracking-[0.28em] uppercase text-foreground hover:text-foreground/70 hover:border-foreground/20 transition-colors"
                  >
                    <span>View the Folio</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="/book"
                    className="group inline-flex items-center justify-between md:justify-start gap-4 pb-2 font-body text-[11px] tracking-[0.28em] uppercase text-foreground/55 hover:text-foreground transition-colors"
                  >
                    <span>Enquiries</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right rail — running number / credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="hidden lg:flex col-span-3 flex-col items-end justify-end gap-6 self-stretch"
          >
            <div className="text-right">
              <p className="font-body text-[10px] tracking-[0.32em] uppercase text-foreground/40 mb-2">
                Plate
              </p>
              <p className="font-serif text-7xl font-light text-foreground/85 leading-none">
                01<span className="italic text-foreground/40">/</span>
                <span className="text-foreground/40">24</span>
              </p>
            </div>
            <div className="w-24 h-px bg-foreground/20" />
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-foreground/45 text-right max-w-[180px] leading-relaxed">
              A reliable, production-aware partner. Lean kit, lean crews. UK &amp; Europe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee-style credit row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between font-body text-[10px] tracking-[0.28em] uppercase text-foreground/40">
          <span className="hidden md:inline">Scroll · Selected Works</span>
          <span className="md:hidden">Scroll</span>
          <span className="italic font-serif normal-case tracking-normal text-foreground/55 text-sm">
            ph. b. rohulskyi
          </span>
          <span className="hidden md:inline">© MMXXVI</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
