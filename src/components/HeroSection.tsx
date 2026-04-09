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
          className="w-full h-full object-cover grayscale opacity-40"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-center gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
        {/* Left column — text + CTA (60-65%) */}
        <div className="flex flex-col gap-0 lg:w-[62%] text-center lg:text-left">
          {/* Headline — scaled up, main entry point */}
          <motion.h1
            className="font-body text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.15em] uppercase text-foreground font-semibold leading-tight mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Documentary, fashion and commercial campaigns
          </motion.h1>

          {/* Text groups with spacing between, tight within */}
          <motion.div
            className="max-w-2xl font-body text-[12px] md:text-[13px] leading-[1.35] text-foreground/75 font-medium text-justify flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Group 1 */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-left">
                Bohdan Rohulskyi is Director of Photography working across commercial, branded content and documentary, focused on naturalistic cinematography shaped with precision.
              </p>
              <p className="text-left">
                His work centres on real moments — with lighting designed and controlled to feel unforced and true to life. The result is imagery that feels immediate, but carefully constructed.
              </p>
            </div>

            {/* Group 2 */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-left">
                Equally comfortable with available light and fully built setups, he adapts to the demands of each project without compromising visual integrity.
              </p>
              <p className="text-left">
                He works on interviews, documentary storytelling and brand films built around real people — and extends this approach into fashion and sport-driven stories.
              </p>
            </div>

            {/* Group 3 — proof block */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-left">
                A strong visual partner for directors. A reliable, production-aware DoP for producers.
              </p>
              <p className="text-left">
                Own kit. Lean setups. Easy to work with.
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
              className="inline-flex items-center justify-center px-9 py-[18px] bg-foreground text-background font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Book a Call
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-9 py-[18px] border border-foreground/30 text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
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
    </section>
  );
};

export default HeroSection;
