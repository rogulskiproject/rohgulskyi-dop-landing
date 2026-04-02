import { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LazyVimeoCard from "./LazyVimeoCard";

interface Project {
  title: string;
  subtitle: string;
  category: string;
  link: string;
  hasVideo?: boolean;
  vimeoId?: string;
  youtubeId?: string;
}

const projects: Project[] = [
  { title: "Dylan Bachelet", subtitle: "Imagine Magazine", category: "Editorial", link: "/work/dylan-bachelet", hasVideo: true, vimeoId: "1107691277" },
  { title: "Yaroslava Mohushih", subtitle: "PUMA", category: "Documentary Film", link: "/work/yaroslava-mohushih", hasVideo: true, vimeoId: "1010047613" },
  { title: "Orserio", subtitle: "Orserio", category: "E-Commerce Brand Film", link: "/work/orserio", hasVideo: true, vimeoId: "1172857771" },
  { title: "Valentin Day", subtitle: "Zielinski & Rozen", category: "Documentary Campaign Film", link: "/work/valentin-day", hasVideo: true, vimeoId: "1166656782" },
  { title: "AnOther Magazine", subtitle: "Simone Rocha", category: "Editorial", link: "/work/another-magazine", hasVideo: true, vimeoId: "1010017917" },
  { title: "Hozier - Francesca", subtitle: "Hozier", category: "Music Video", link: "/work/hozier-francesca", hasVideo: true, youtubeId: "K1u_hL11auM" },
];

const loopedProjects = [...projects, ...projects, ...projects];
const VIDEO_ASPECT_RATIO = 16 / 9;

const WorkSection = () => {
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const didDrag = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const animFrame = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoKey, setActiveVideoKey] = useState<string | null>(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
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

  const updateActiveIndex = useCallback(() => {
    if (!isMobile || !trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardWidth = window.innerWidth;
    const rawIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(rawIndex % projects.length);
  }, [isMobile]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = getOneSetWidth();
    const onScroll = () => {
      cancelAnimationFrame(animFrame.current);
      animFrame.current = requestAnimationFrame(() => {
        resetToMiddle();
        updateActiveIndex();
      });
    };
    track.addEventListener("scroll", onScroll);
    return () => track.removeEventListener("scroll", onScroll);
  }, [resetToMiddle, getOneSetWidth, isMobile, updateActiveIndex]);

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

  const itemClass = isMobile ? "w-screen" : "w-[50vw]";
  const totalWidth = isMobile
    ? `${loopedProjects.length * 100}vw`
    : `${loopedProjects.length * 50}vw`;
  const mobileHeight = isMobile ? viewport.width * (2 / 3) : 0;
  const frameWidth = Math.max(isMobile ? viewport.width : viewport.width / 2, 1);
  const frameHeight = Math.max(isMobile ? mobileHeight : viewport.height, 1);
  const coverWidth = Math.max(frameWidth, frameHeight * VIDEO_ASPECT_RATIO);
  const coverHeight = Math.max(frameHeight, frameWidth / VIDEO_ASPECT_RATIO);

  return (
    <section className={isMobile ? "relative w-full overflow-hidden mt-10" : "relative w-full overflow-hidden border-t border-border h-screen"}>
      {isMobile ? (
        <div className="px-6 pb-4">
          <span className="font-body text-[10px] font-normal uppercase tracking-[0.2em] text-foreground/50">
            Selected Work
          </span>
        </div>
      ) : (
        <div className="absolute top-8 left-10 z-20">
          <span className="font-body text-[10px] font-normal uppercase tracking-[0.2em] text-foreground/50">
            Selected Work
          </span>
        </div>
      )}

      {!isMobile && (
        <>
          <button
            aria-label="Scroll left"
            className="absolute left-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-xl text-foreground/50 hover:text-foreground/80 hover:border-foreground/20 hover:bg-foreground/10 transition-all duration-300"
            style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
            onClick={() => trackRef.current?.scrollBy({ left: -(window.innerWidth / 2), behavior: "smooth" })}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            aria-label="Scroll right"
            className="absolute right-6 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-xl text-foreground/50 hover:text-foreground/80 hover:border-foreground/20 hover:bg-foreground/10 transition-all duration-300"
            style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
            onClick={() => trackRef.current?.scrollBy({ left: window.innerWidth / 2, behavior: "smooth" })}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </>
      )}

      <div
        ref={trackRef}
        className="w-full select-none overflow-x-auto overflow-y-hidden"
        style={{
          height: isMobile ? `${mobileHeight}px` : '100%',
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
            const shouldSnap = isMobile ? true : i % 2 === 0;
            const cardKey = `${project.title}-${i}`;

            return (
              <div
                key={cardKey}
                className={`relative h-full group flex-shrink-0 overflow-hidden ${itemClass}`}
                style={{ scrollSnapAlign: shouldSnap ? "start" : "none" }}
                onMouseEnter={() => {
                  if (!isMobile) setActiveVideoKey(cardKey);
                }}
                onMouseLeave={() => {
                  if (!isMobile) setActiveVideoKey((prev) => prev === cardKey ? null : prev);
                }}
                onClick={() => {
                  if (!didDrag.current && project.link) navigate(project.link);
                }}
              >
                <div className="absolute inset-0 overflow-hidden bg-muted/20">
                  {project.vimeoId ? (
                    <LazyVimeoCard
                      vimeoId={project.vimeoId}
                      title={project.title}
                      coverWidth={coverWidth}
                      coverHeight={coverHeight}
                      isHovered={activeVideoKey === cardKey}
                      isMobile={isMobile}
                    />
                  ) : project.youtubeId ? (
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted/20" />
                  )}

                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-0.5 p-5 md:p-8 lg:p-10">
                  <span className="font-display text-5xl font-bold text-foreground/15 leading-none md:text-7xl">
                    {indexStr}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs font-normal tracking-wide text-foreground/60 md:text-sm">
                    {project.subtitle}
                  </p>
                  <span className="mt-1 font-body text-[10px] uppercase tracking-[0.12em] text-foreground/35 md:text-[11px]">
                    {project.category}
                  </span>
                </div>

                {!isMobile && i % 2 === 0 && (
                  <div className="absolute top-0 right-0 z-10 h-full w-px bg-foreground/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isMobile && (
        <div className="flex items-center justify-center gap-1.5 py-4">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-5 h-1.5 bg-foreground/60"
                  : "w-1.5 h-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkSection;
