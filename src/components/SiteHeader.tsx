import { Link } from "react-router-dom";
import logoBR from "@/assets/logo-br-white.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-md border-b border-foreground/[0.04]">
      <div className="flex items-center justify-between h-14 md:h-[72px] pl-4 md:pl-6 pr-6 md:pr-10 lg:pr-12">
        <Link to="/" className="flex items-center">
          <img src={logoBR} alt="BR" className="h-9 md:h-12 w-auto" />
        </Link>
        <nav className="flex items-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-display text-[11px] md:text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/50 hover:text-foreground/90 transition-colors duration-300"
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
