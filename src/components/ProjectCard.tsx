import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ProjectCardData {
  title: string;
  category: string;
  thumbnail: string;
  previewVideo?: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  visible: boolean;
  onNavigate: (link: string) => void;
  activePreviewId: string | null;
  setActivePreviewId: (id: string | null) => void;
}

const ProjectCard = ({
  project,
  visible,
  onNavigate,
  activePreviewId,
  setActivePreviewId,
}: ProjectCardProps) => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [srcLoaded, setSrcLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardId = project.link;
  const hasPreview = Boolean(project.previewVideo);

  // Ensure only one preview plays at a time
  useEffect(() => {
    if (activePreviewId !== cardId && isPlaying) {
      const v = videoRef.current;
      if (v) v.pause();
      setIsPlaying(false);
    }
  }, [activePreviewId, cardId, isPlaying]);

  const startPreview = () => {
    if (!hasPreview) return;
    if (!srcLoaded) {
      setSrcLoaded(true);
    }
    setActivePreviewId(cardId);
    // Defer play to next tick so src can attach
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.then(() => setIsPlaying(true)).catch(() => {
          // Safely ignore play() errors (e.g., autoplay policies)
        });
      } else {
        setIsPlaying(true);
      }
    });
  };

  const stopPreview = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
    }
    setIsPlaying(false);
    if (activePreviewId === cardId) setActivePreviewId(null);
  };

  const handleClick = () => {
    onNavigate(project.link);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={!isMobile ? startPreview : undefined}
      onMouseLeave={!isMobile ? stopPreview : undefined}
      className={`relative cursor-pointer group overflow-hidden rounded-sm border border-foreground/10 transition-all duration-500 ease-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none absolute"
      }`}
      style={!visible ? { position: "absolute", width: 0, height: 0, overflow: "hidden" } : {}}
    >
      <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {hasPreview && srcLoaded && (
          <video
            ref={videoRef}
            src={project.previewVideo}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Subtle dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500 pointer-events-none" />

        {/* Title overlay */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="font-display text-sm md:text-base font-semibold tracking-tight text-foreground drop-shadow-lg">
            {project.title}
          </h3>
          <span className="font-body text-[10px] uppercase tracking-[0.12em] text-foreground/60 drop-shadow-lg">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
