import { Link } from "react-router-dom";

const navItems = [
  { label: "About.", href: "/about" },
  { label: "Work.", href: "/work" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-20 md:h-24 px-6 md:px-10 lg:px-16">
        <Link
          to="/"
          className="font-display text-base md:text-lg font-bold tracking-[0.04em] text-foreground"
        >
          Bohdan Rohulskyi
        </Link>
        <nav className="flex items-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-display text-[13px] md:text-sm font-medium tracking-[0.08em] text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
