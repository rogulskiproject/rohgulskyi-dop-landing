import { Link } from "react-router-dom";
import logoBR from "@/assets/logo-br-white.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Glass refraction layer — slightly scaled to create magnification/distortion */}
      <div
        className="absolute inset-0 backdrop-blur-[14px] backdrop-saturate-[1.25] backdrop-brightness-[0.8]"
        style={{
          transform: "scale(1.06)",
          transformOrigin: "center center",
        }}
      />
      {/* Subtle tinted overlay for depth */}
      <div className="absolute inset-0 bg-background/35" />
      {/* Faint top-edge highlight for glass realism */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />
      {/* Soft bottom separation */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/[0.04]" />
      {/* Content layer — always crisp above glass */}
      <div className="relative z-10 flex items-center justify-between h-14 md:h-[72px] pl-4 md:pl-6 pr-6 md:pr-10 lg:pr-12">
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
