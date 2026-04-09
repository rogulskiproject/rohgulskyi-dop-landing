import { motion } from "framer-motion";

import logoWhite from "@/assets/logo-v2.png";

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
          className="w-full h-full object-cover grayscale opacity-70"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
        {/* Left column — text + CTA (60-65%) */}
        <div className="flex flex-col gap-0 lg:w-[62%] text-center lg:text-left">
          {/* Headline — scaled up, main entry point */}
          <motion.h1
            className="font-body text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.15em] uppercase text-foreground font-semibold leading-tight mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            CINEMATOGRAPHER
          </motion.h1>
          <motion.p
            className="font-body text-xs tracking-[0.2em] uppercase text-foreground/60 font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            DOCUMENTARY, FASHION AND COMMERCIAL
          </motion.p>

          {/* Text groups with spacing between, tight within */}
          <motion.div
            className="max-w-2xl font-body text-sm md:text-base lg:text-lg leading-relaxed text-foreground/75 font-medium text-left flex flex-col gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col gap-3">
              <p>
                Bohdan Rohulskyi is a London-based Director of Photography working across sport, fashion, culture and branded storytelling.
              </p>
              <p>
                With a background in documentary and performance-led work, he creates cinematic imagery rooted in real human presence, textured realism and emotional precision.
              </p>
              <p>
                The result is work that feels immediate and true, while remaining carefully designed.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <p>
                A strong visual partner for directors. A reliable, production-aware DoP for producers.
              </p>
              <p>
                Own kit. Lean setups. London-based, available across the UK and Europe.
              </p>
            </div>
          </motion.div>

          {/* CTA buttons — 10-15% larger */}
          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="/book"
              className="inline-flex items-center justify-center px-9 py-[18px] border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Book a Call
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-9 py-[18px] bg-foreground text-background font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              See My Work
            </a>
          </motion.div>
        </div>

        {/* Right column — name/logo (35-40%), reduced scale */}
        <div className="lg:w-[38%] flex items-center justify-center">
          <motion.img
            src={logoWhite}
            alt="Bohdan Rohulskyi"
            className="w-[280px] md:w-[360px] lg:w-full lg:max-w-[500px] max-h-[55vh] object-contain h-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Location indicator */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-10 lg:left-16 z-10 flex items-center gap-2 font-body text-xs tracking-[0.1em] text-foreground/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-sonar absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        London, United Kingdom
      </motion.div>
    </section>
  );
};

export default HeroSection;
