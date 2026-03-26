import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { title: "Dylan Bachelet", subtitle: "Imagine Magazine", category: "Editorial", link: "/work/dylan-bachelet", hasVideo: true },
  { title: "Project Two", subtitle: "PUMA", category: "Fashion Film", link: "" },
  { title: "Project Three", subtitle: "Vogue Italia", category: "Commercial", link: "" },
  { title: "Project Four", subtitle: "Nike", category: "Branded Content", link: "" },
  { title: "Project Five", subtitle: "Dior", category: "Documentary", link: "" },
];

const loopedProjects = [...projects, ...projects, ...projects];

const WorkSection = () => {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const didDrag = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const animFrame = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getOneSetWidth = useCallback(() => {
    if (isMobile) return projects.length * window.innerWidth;
    return projects.length * (window.innerWidth / 2);
  }, [isMobile]);

  const resetToMiddle = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSet = getOneSetWidth();
    if (track.scrollLeft < oneSet * 0.5) {
      track.scrollLeft += oneSet;
    } else if (track.scrollLeft > oneSet * 2.0) {
      track.scrollLeft -= oneSet;
    }
  }, [getOneSetWidth]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Start at middle copy
    track.scrollLeft = getOneSetWidth();

    const onScroll = () => {
      cancelAnimationFrame(animFrame.current);
      animFrame.current = requestAnimationFrame(resetToMiddle);
    };
    track.addEventListener("scroll", onScroll);
    return () => track.removeEventListener("scroll", onScroll);
  }, [resetToMiddle, getOneSetWidth, isMobile]);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    didDrag.current = false;
    dragStart.current = { x: e.clientX, scrollLeft: track.scrollLeft };
    track.style.scrollSnapType = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    if (Math.abs(dx) > 5) didDrag.current = true;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.scrollSnapType = "x mandatory";
    }
  };

  // Item width: 100vw on mobile, 50vw on desktop
  const itemClass = isMobile ? "w-screen" : "w-[50vw]";
  const totalWidth = isMobile
    ? `${loopedProjects.length * 100}vw`
    : `${loopedProjects.length * 50}vw`;

  return (
    <section className="relative h-screen w-full overflow-hidden border-t border-border">
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground/50 font-normal">
          Selected Work
        </span>
      </div>

      <div
        ref={trackRef}
        className="h-full w-full overflow-x-auto overflow-y-hidden select-none"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex h-full" style={{ width: totalWidth }}>
          {loopedProjects.map((project, i) => {
            const displayIndex = (i % projects.length) + 1;
            const indexStr = String(displayIndex).padStart(2, "0");
            // On mobile every item snaps; on desktop only even items snap
            const shouldSnap = isMobile ? true : i % 2 === 0;

            return (
              <div
                key={`${project.title}-${i}`}
                className={`relative h-full group flex-shrink-0 ${itemClass}`}
                style={{ scrollSnapAlign: shouldSnap ? "start" : "none" }}
                onClick={() => {
                  if (!didDrag.current && project.link) navigate(project.link);
                }}
              >
                {/* Full-bleed media */}
                <div className="absolute inset-0 overflow-hidden">
                  {project.hasVideo ? (
                    <iframe
                      src="https://player.vimeo.com/video/1107691277?background=1&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ border: "none", transform: "scale(1.3)", transformOrigin: "center center" }}
                      allow="autoplay"
                      title={project.title}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted/20" />
                  )}

                  {/* Hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 flex flex-col gap-0.5">
                  <span className="font-display text-5xl md:text-7xl font-bold text-foreground/15 leading-none">
                    {indexStr}
                  </span>
                  <h3 className="font-display text-lg md:text-2xl font-semibold tracking-tight text-foreground mt-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm font-normal text-foreground/60 tracking-wide">
                    {project.subtitle}
                  </p>
                  <span className="font-body text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-foreground/35 mt-1">
                    {project.category}
                  </span>
                </div>

                {/* Vertical divider (desktop only, between pairs) */}
                {!isMobile && i % 2 === 0 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-foreground/10 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
