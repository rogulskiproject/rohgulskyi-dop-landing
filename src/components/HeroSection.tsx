import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left — Text Content */}
      <div className="relative z-10 flex flex-col justify-center lg:w-[55%] px-6 md:px-10 lg:px-16 xl:px-20 pt-24 pb-8 lg:pt-0 lg:pb-0 order-2 lg:order-1">
        {/* Main heading */}
        <motion.h1
          className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold uppercase tracking-[0.06em] leading-[1.05] text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Cinematographer
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="font-display text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] text-foreground/50 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Documentary, Fashion and Commercial
        </motion.p>

        {/* Body copy */}
        <motion.div
          className="max-w-lg font-body text-[13px] md:text-sm leading-[1.6] text-foreground/65 font-normal flex flex-col gap-4"
          initial={{ opacity: 0, y: 12 }}
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
          <p className="text-foreground/50 mt-2">
            A strong visual partner for directors. A reliable, production-aware DoP for producers.
          </p>
          <p className="text-foreground/50">
            Own kit. Lean setups. London-based, available across the UK and Europe.
          </p>
        </motion.div>
      </div>

      {/* Right — Video Panel */}
      <div className="relative lg:w-[45%] h-[40vh] lg:h-full order-1 lg:order-2">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20 py-6 lg:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Location */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-foreground/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/40" />
          </span>
          <span className="font-display text-[11px] md:text-xs font-medium tracking-[0.12em] uppercase text-foreground/40">
            London, United Kingdom
          </span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            to="/work"
            className="font-display text-xs md:text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground hover:text-foreground/80 transition-colors"
          >
            See My Work
          </Link>
          <a
            href="/book"
            className="font-display text-[11px] md:text-xs font-medium tracking-[0.12em] uppercase text-foreground/50 border border-foreground/20 px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
          >
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
