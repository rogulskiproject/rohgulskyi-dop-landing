import { Link } from "react-router-dom";

const navItems = [
  { label: "About.", href: "/about" },
  { label: "Work.", href: "/work" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/">
          <img src={logoBR} alt="BR" className="h-10 md:h-14 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-body text-[13px] font-medium tracking-[0.06em] text-foreground/60 hover:text-foreground transition-colors"
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
