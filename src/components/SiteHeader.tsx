import { Link } from "react-router-dom";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/book" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-sm md:text-base font-semibold tracking-widest uppercase text-foreground">
          Bohdan Rohulskyi
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-body text-xs md:text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
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
