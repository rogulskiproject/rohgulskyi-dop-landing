import { Link } from "react-router-dom";

const navItems = [
  { label: "About.", href: "/about" },
  { label: "Work.", href: "/work" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-10 lg:px-16">
        <Link
          to="/"
          className="font-heading text-[15px] md:text-[17px] font-bold tracking-[0.02em] text-foreground hover:text-foreground/80 transition-colors"
        >
          Bohdan Rohulskyi
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-heading text-[15px] md:text-[17px] font-semibold tracking-[0.02em] text-foreground/80 hover:text-foreground transition-colors"
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
