import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-20 pb-24">
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

      {/* Main content */}
      <div className="relative z-10 max-w-5xl">
        <motion.h1
          className="font-display text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.02em] leading-[0.9] text-foreground uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cinematographer
        </motion.h1>

        <motion.p
          className="mt-4 font-body text-[11px] md:text-[13px] font-medium tracking-[0.25em] uppercase text-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Documentary, Fashion and Commercial
        </motion.p>

        <motion.div
          className="mt-10 max-w-lg font-body text-[12px] md:text-[13px] leading-[1.5] text-foreground/70 font-normal flex flex-col gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p>
            Bohdan Rohulskyi is a London-based Director of Photography working across sport, fashion, culture and branded storytelling.
          </p>
          <p>
            With a background in documentary and performance-led work, he creates cinematic imagery rooted in real human presence, textured realism and emotional precision.
          </p>
          <p>
            The result is work that feels immediate and true, while remaining carefully designed.
          </p>
          <div className="flex flex-col gap-[2px] text-foreground/50 text-[11px] md:text-[12px]">
            <p>A strong visual partner for directors. A reliable, production-aware DoP for producers.</p>
            <p>Own kit. Lean setups. London-based, available across the UK and Europe.</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 font-medium">
            London, United Kingdom
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/work"
            className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors"
          >
            See My Work
          </a>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-foreground text-background font-body text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
