import { Link } from "react-router-dom";

const SiteFooter = ({ hideCta = false }: { hideCta?: boolean }) => {
  return (
    <footer className="border-t border-border">
      {/* CTA */}
      {!hideCta && (
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl space-y-6">
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              Work with Bohdan
            </h2>
            <p className="font-body text-sm md:text-[15px] text-foreground/70 leading-[1.7]">
              If you're a brand, agency or producer looking for a cinematographer and hybrid director-operator in London — for commercial video production, documentary-style brand films or cinematic campaign work — get in touch.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Discuss a project
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors"
              >
                See more work
              </Link>
            </div>
          </div>
        </div>
      )}


      {/* Contact / copyright bar */}
      <div className="border-t border-border">
        <div className="container py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Bohdan Rohulskyi
              </span>
              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-sonar absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                  </span>
                  <span className="font-body text-sm font-normal text-foreground/55">London, United Kingdom</span>
                </div>
                <p className="font-body text-sm font-normal text-foreground/55">Working across the UK and Europe</p>
              </div>
            </div>

            <div>
              <p className="font-body text-[11px] font-normal text-foreground/40 tracking-[0.12em] uppercase">Contact</p>
              <p className="mt-2 font-body text-sm font-normal text-foreground/55">rogulskiproject@gmail.com</p>
            </div>

            <div className="md:text-right md:self-end">
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-foreground/35 font-normal">
                © {new Date().getFullYear()} Bohdan Rohulskyi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
