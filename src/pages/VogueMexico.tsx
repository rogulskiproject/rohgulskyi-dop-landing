import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { applySeo } from "@/lib/seo";
import cover from "@/assets/vogue-mexico-cover.jpg";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TITLE =
  "Vogue Mexico — Director / Director of Photography | Bohdan Rohulskyi";
const DESCRIPTION =
  "A documentary film for Vogue Mexico, directed and shot by Bohdan Rohulskyi.";

const VogueMexico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(
    () =>
      applySeo({
        title: TITLE,
        description: DESCRIPTION,
        canonical: "/work/vogue-mexico",
        meta: [
          { property: "og:title", content: TITLE },
          { property: "og:description", content: DESCRIPTION },
          { property: "og:type", content: "article" },
          { property: "og:url", content: "/work/vogue-mexico" },
          {
            property: "og:image",
            content: `${window.location.origin}${cover}`,
          },
        ],
      }),
    [],
  );


  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Video */}
      <section className="pt-24 md:pt-32">
        <div className="container">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/50 hover:text-foreground/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>
        </div>

        <div className="w-full aspect-video bg-card">
          <iframe
            src="https://www.youtube.com/embed/Nh1ZWDz44no?rel=0&modestbranding=1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Vogue Mexico — Documentary"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24"
        >
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Vogue Mexico
            </h1>
            <p className="mt-3 font-body text-sm text-foreground/50 tracking-[0.06em]">
              Documentary
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Client
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Vogue Mexico
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Category
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Documentary
              </p>
            </div>
            <div>
              <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                Role
              </span>
              <p className="mt-1.5 font-body text-sm text-foreground/80 leading-relaxed">
                Director / Director of Photography
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Credits */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            {...sectionAnim}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                Credits
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
              {[
                ["Director", "Bohdan Rohulskyi"],
                ["Realization", "Sebastián Cabriees"],
                ["Creative Director", "Maxim Sapozhnikov"],
                ["Video Production", "F2MAX"],
                ["Director of Photography", "Bohdan Rohulskyi"],
                ["Talent Coordinator", "Sofía Reyes"],
                ["Camera Assistant", "Oleg Vasilev"],
                ["MUA", "Salvador González"],
                ["Look", "Dolce & Gabbana"],
                ["Editor", "Emmanuel González"],
                ["Graphics", "Iván Juárez & Pamela Becerril"],
                ["Post Coordinator", "Sebastián Fernández"],
                ["Special Thanks", "Bernardo Moller & Norberto Flores"],
              ].map(([role, name]) => (
                <div key={role}>
                  <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                    {role}
                  </span>
                  <p className="mt-1 font-body text-sm text-foreground/80 leading-relaxed">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CNE Mexico Team */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-24">
          <motion.div
            {...sectionAnim}
            className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
          >
            <div>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                CNE Mexico &amp; Latin America
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-5">
              {[
                ["Digital Programming & Development VP", "Juan Pablo Gallón"],
                ["Head of Programming & Development", "Salvador Abarca Arriaga"],
                ["Development Lead", "Alaín Heredia"],
                ["Production Manager", "Gerardo Tagle"],
                ["Production Coordinator", "Aimeé Estrada"],
                ["Senior Creative Editor", "Sebastián Fernández"],
                ["Talent Coordinator", "Sofía Reyes"],
                ["Programming Lead", "Nancy Fernández"],
                ["Video Operations Lead", "Daniela Torres"],
                ["Production Coordinator Assistant", "Alexis Sánchez"],
              ].map(([role, name]) => (
                <div key={role}>
                  <span className="font-body text-[10px] tracking-[0.14em] uppercase text-foreground/40">
                    {role}
                  </span>
                  <p className="mt-1 font-body text-sm text-foreground/80 leading-relaxed">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default VogueMexico;
