import { motion } from "framer-motion";

import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
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

      <div className="relative z-10 flex flex-col items-center gap-5 px-4">
        {/* Logo wordmark */}
        <motion.img
          src={logoWhite}
          alt="Bohdan Rohulskyi"
          className="w-[280px] md:w-[420px] lg:w-[540px] h-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Field line — label/meta style */}
        <motion.p
          className="font-body text-[11px] md:text-xs tracking-[0.2em] uppercase text-foreground/50 font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Documentary, fashion and commercial campaigns
        </motion.p>

        {/* Short positioning paragraph — body style */}
        <motion.p
          className="mt-3 max-w-lg font-body text-sm md:text-[15px] font-normal leading-[1.55] text-foreground/75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Bohdan Rohulskyi is a Director of Photography working across documentary films, fashion stories and branded campaigns. He creates cinematic imagery rooted in natural light, tactile realism and emotionally precise framing.
        </motion.p>

        {/* CTA buttons — nav/label weight */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
