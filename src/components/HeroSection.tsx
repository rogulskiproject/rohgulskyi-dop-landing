import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-40"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
        {/* Left column — text content */}
        <div className="flex flex-col gap-5">
          {/* Block 1 — Headline */}
          <motion.h1
            className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Director of Photography
          </motion.h1>

          {/* Block 2 — Supporting statement */}
          <motion.p
            className="max-w-lg font-body text-sm md:text-[15px] leading-[1.5] text-foreground/70 font-normal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Naturalistic cinematography across commercial, branded content and documentary. Lighting designed to feel unforced — imagery that's immediate, but carefully constructed.
          </motion.p>

          {/* Block 3 — Functional proof */}
          <motion.p
            className="font-body text-[11px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Lean setups · Own kit · Production-aware
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-2 flex flex-row gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a
              href="/book"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Book a Call
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-foreground/30 text-foreground font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              See My Work
            </a>
          </motion.div>
        </div>

        {/* Right column — typographic name block */}
        <motion.div
          className="hidden md:flex flex-col items-end text-right gap-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="font-display text-5xl lg:text-7xl font-bold leading-[1] tracking-tight text-foreground/10">
            Bohdan
          </span>
          <span className="font-display text-5xl lg:text-7xl font-bold leading-[1] tracking-tight text-foreground/10">
            Rohulskyi
          </span>
          <span className="mt-2 font-body text-[10px] tracking-[0.25em] uppercase text-foreground/25 font-medium">
            DoP
          </span>
        </motion.div>
      </div>

      {/* Bottom fade hint */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
