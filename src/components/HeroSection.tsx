import { motion } from "framer-motion";
import heroImage from "@/assets/hero-eye.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-20">
      {/* Hero image with text clip effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-foreground/5" />
        <img
          src={heroImage}
          alt="Cinematic close-up through camera viewfinder"
          className="w-full h-full object-cover grayscale"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-foreground">
            Bohdan<br />Rohulskyi
          </h1>

          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span className="font-body text-sm md:text-base tracking-widest uppercase text-foreground">
              Director of Photography
            </span>
            <span className="hidden md:block w-8 h-px bg-foreground" />
            <span className="font-body text-sm md:text-base tracking-wide text-muted-foreground">
              London-based
            </span>
          </div>

          <p className="mt-2 font-body text-xs md:text-sm tracking-widest uppercase text-muted-foreground">
            Documentary, fashion and commercial campaigns
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 md:mt-14 max-w-2xl space-y-5"
        >
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/80">
            Bohdan Rohulskyi is a Director of Photography working across documentary films, fashion stories and branded campaigns. He creates cinematic imagery rooted in natural light, tactile realism and emotionally precise framing.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/70">
            Primarily working as a Director of Photography, Bohdan is also available as Director / DoP on agile productions where story, visual language and execution need to work together.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/70">
            His work combines black and white and colour imagery, natural palettes, motivated lighting, handheld and tripod camera work, wide-angle intimacy and close emotional detail to tell stories that feel alive, human and cinematic.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/70">
            Best suited for projects that need more than basic coverage — documentary storytelling, fashion with emotional edge, branded films, product stories, launches and campaigns where visual language matters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="/work"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-body text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            See My Work
          </a>
        </motion.div>

        {/* Client logos placeholder strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 md:mt-24 border-t border-border pt-8"
        >
          <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-6">
            Selected clients & collaborations
          </p>
          <div className="flex items-center gap-8 md:gap-12 overflow-x-auto pb-2">
            {["Client One", "Client Two", "Client Three", "Client Four", "Client Five"].map(
              (name) => (
                <div
                  key={name}
                  className="flex-shrink-0 h-8 px-6 flex items-center justify-center border border-border"
                >
                  <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
                    {name}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
