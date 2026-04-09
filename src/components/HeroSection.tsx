import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex bg-background overflow-hidden">
      {/* Left side — text */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 md:px-10 lg:px-16 xl:px-20 pt-20 pb-10">
        <div className="flex flex-col gap-0 max-w-lg">
          {/* Main headline */}
          <motion.h1
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[0.04em] uppercase text-foreground leading-[1.05] mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Cinematographer
          </motion.h1>

          {/* Category subline */}
          <motion.p
            className="font-body text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-foreground/45 font-medium mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Documentary, Fashion and Commercial
          </motion.p>

          {/* Body copy */}
          <motion.div
            className="flex flex-col gap-4 font-body text-[13px] md:text-[14px] leading-[1.55] text-foreground/65 font-normal mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
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
            <p className="text-foreground/50">
              A strong visual partner for directors. A reliable, production-aware DoP for producers.
              <br />
              Own kit. Lean setups. London-based, available across the UK and Europe.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="/work"
              className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background font-body text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              See My Work
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground/60 font-body text-[12px] font-medium tracking-[0.15em] uppercase hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              Book a Call
            </a>
          </motion.div>

          {/* Location */}
          <motion.p
            className="mt-auto pt-10 font-body text-[11px] tracking-[0.2em] uppercase text-foreground/30 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            London, United Kingdom
          </motion.p>
        </div>
      </div>

      {/* Right side — cinematic visual */}
      <motion.div
        className="hidden lg:block w-1/2 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      {/* Mobile background image — visible only on small screens */}
      <div className="absolute inset-0 lg:hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale opacity-25"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>
    </section>
  );
};

export default HeroSection;
