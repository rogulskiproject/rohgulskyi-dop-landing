import { Link } from "react-router-dom";

const navItems = [
  { label: "About.", href: "/about" },
  { label: "Work.", href: "/work" },
  { label: "Blog.", href: "/blog" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl font-semibold tracking-widest uppercase text-foreground">
          BR
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-body text-xs md:text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors"
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
