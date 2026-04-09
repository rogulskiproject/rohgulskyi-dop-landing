import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background video — positioned to favour the right side on desktop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "70% center" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay: strong on left for text legibility, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 lg:from-background lg:via-background/80 lg:to-transparent" />
        {/* Subtle overall tint for cohesion */}
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content — vertically centred, padded below header */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-20 pb-24 max-w-7xl mx-auto w-full">
        {/* Text block — constrained to left ~55% on desktop */}
        <div className="lg:max-w-[55%]">
          {/* Headline */}
          <motion.h1
            className="font-heading text-[clamp(2.4rem,6vw,4.5rem)] font-light tracking-[-0.02em] leading-[1.05] text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            CINEMATOGRAPHER
          </motion.h1>

          {/* Category line */}
          <motion.p
            className="font-body text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-foreground/60 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Documentary, Fashion and Commercial
          </motion.p>

          {/* Body copy */}
          <motion.div
            className="max-w-[520px] font-body text-[13px] md:text-[14px] leading-[1.65] text-foreground/70 font-normal flex flex-col gap-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <p>
              Bohdan Rohulskyi is a London-based Director of Photography
              working across sport, fashion, culture and branded storytelling.
            </p>
            <p>
              With a background in documentary and performance-led work, he
              creates cinematic imagery rooted in real human presence, textured
              realism and emotional precision.
            </p>
            <p>
              The result is work that feels immediate and true, while remaining
              carefully designed.
            </p>
            <p>
              A strong visual partner for directors. A reliable,
              production-aware DoP for producers.
            </p>
            <p>
              Own kit. Lean setups. London-based, available across the UK and
              Europe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — location left, CTAs right */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-6 md:px-10 lg:px-16 pb-8 md:pb-10 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
      >
        {/* Location with pulsing dot */}
        <div className="flex items-center gap-2.5">
          <span className="font-body text-[12px] md:text-[13px] tracking-[0.04em] text-foreground/50 font-medium">
            London, United Kingdom
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/30 duration-[2000ms]" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60" />
          </span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5 md:gap-8">
          <a
            href="/work"
            className="font-body text-[12px] md:text-[13px] font-medium tracking-[0.15em] uppercase text-foreground/80 hover:text-foreground transition-colors"
          >
            See My Work
          </a>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 md:px-9 md:py-3.5 rounded-full bg-foreground/15 backdrop-blur-sm border border-foreground/20 text-foreground font-body text-[12px] md:text-[13px] font-medium tracking-[0.12em] uppercase hover:bg-foreground/25 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
