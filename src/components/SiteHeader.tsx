import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-10 lg:px-16">
        <Link
          to="/"
          className="font-display text-[13px] md:text-[14px] font-medium tracking-[0.12em] text-foreground/90 hover:text-foreground transition-colors"
        >
          Bohdan Rohulskyi
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/about"
            className="font-body text-[13px] font-medium tracking-[0.06em] text-foreground/50 hover:text-foreground transition-colors"
          >
            About.
          </Link>
          <Link
            to="/work"
            className="font-body text-[13px] font-medium tracking-[0.06em] text-foreground/50 hover:text-foreground transition-colors"
          >
            Work.
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
