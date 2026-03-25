import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eye.jpg";
import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cinematic close-up through camera viewfinder"
          className="w-full h-full object-cover grayscale opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        {/* Logo wordmark */}
        <motion.img
          src={logoWhite}
          alt="Bohdan Rohulskyi"
          className="w-[280px] md:w-[420px] lg:w-[540px] h-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />


        {/* Field line */}
        <motion.p
          className="font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Documentary, fashion and commercial campaigns
        </motion.p>

        {/* Short positioning paragraph */}
        <motion.p
          className="mt-4 max-w-xl font-body text-sm md:text-base leading-relaxed text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Bohdan Rohulskyi is a Director of Photography working across documentary films, fashion stories and branded campaigns. He creates cinematic imagery rooted in natural light, tactile realism and emotionally precise framing.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/40 text-foreground font-body text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
