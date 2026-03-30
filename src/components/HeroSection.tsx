import { motion } from "framer-motion";

import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8">
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 w-full max-w-7xl">
        {/* Left column — text + CTA */}
        <div className="flex flex-col gap-3 lg:w-[60%] text-center lg:text-left">
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
            className="max-w-2xl font-body text-sm md:text-[15px] leading-[1.45] text-foreground/75 font-medium text-justify whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            A Director of Photography working across commercial, branded content and documentary, focused on naturalistic cinematography shaped with precision.{"\n\n"}
            His work centres on real moments — with lighting designed and controlled to feel unforced and true to life. The result is imagery that feels immediate, but carefully constructed.{"\n\n"}
            Equally comfortable with available light and fully built setups, he adapts to the demands of each project without compromising visual integrity.{"\n\n"}
            He works on interviews, documentary storytelling and brand films built around real people — and extends this approach into fashion and sport-driven stories.{"\n\n"}
            A strong visual partner for directors. A reliable, production-aware DoP for producers.{"\n\n"}
            Own kit. Lean setups. Easy to work with.
          </motion.p>

          {/* CTA buttons — nav/label weight */}
          <motion.div
            className="mt-3 flex flex-col sm:flex-row gap-4"
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

        {/* Right column — logo/image */}
        <div className="lg:w-[40%] flex items-center justify-center">
          <motion.img
            src={logoWhite}
            alt="Bohdan Rohulskyi"
            className="w-[240px] md:w-[320px] lg:w-full lg:max-w-[400px] max-h-[40vh] object-contain h-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
