const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Bohdan Rohulskyi
            </span>
            <div className="mt-4 space-y-1">
              <p className="font-body text-sm font-normal text-foreground/55">London-based</p>
              <p className="font-body text-sm font-normal text-foreground/55">Working across the UK and Europe</p>
            </div>
            <div className="mt-6 space-y-1">
              <p className="font-body text-[11px] font-normal text-foreground/40 tracking-[0.12em] uppercase">Contact</p>
              <p className="font-body text-sm font-normal text-foreground/55">email@placeholder.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <p className="font-body text-sm font-normal text-foreground/65 max-w-sm md:text-right leading-[1.5]">
              Looking for a Director of Photography for documentary, fashion or branded work?
            </p>
            <a
              href="/book"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border">
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-foreground/35 font-normal">
            © {new Date().getFullYear()} Bohdan Rohulskyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
