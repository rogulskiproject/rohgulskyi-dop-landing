import { useRef, useState, useCallback, useEffect } from "react";
import Player from "@vimeo/player";

interface LazyVimeoCardProps {
  vimeoId: string;
  title: string;
  coverWidth: number;
  coverHeight: number;
  isActiveCard: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  isMobile: boolean;
  className?: string;
}

const LazyVimeoCard = ({
  vimeoId,
  title,
  coverWidth,
  coverHeight,
  isActiveCard,
  onActivate,
  onDeactivate,
  isMobile,
  className = "",
}: LazyVimeoCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const iframeRef = useRef<HTMLDivElement>(null);
  const savedTime = useRef(0);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const posterUrl = `https://vumbnail.com/${vimeoId}.jpg`;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      playerRef.current?.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, []);

  // When this card loses active status, pause
  useEffect(() => {
    if (!isActiveCard && playerRef.current && isPlaying) {
      playerRef.current.getCurrentTime().then((t) => {
        savedTime.current = t;
      });
      playerRef.current.pause().catch(() => {});
      setIsPlaying(false);
    }
  }, [isActiveCard, isPlaying]);

  const initAndPlay = useCallback(async () => {
    if (!iframeRef.current) return;

    if (!playerRef.current) {
      // First hover — create iframe + player
      const iframe = document.createElement("iframe");
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0`;
      iframe.style.border = "none";
      iframe.style.position = "absolute";
      iframe.style.left = "50%";
      iframe.style.top = "50%";
      iframe.style.transform = "translate(-50%, -50%)";
      iframe.style.width = `${coverWidth}px`;
      iframe.style.height = `${coverHeight}px`;
      iframe.style.pointerEvents = "none";
      iframe.style.maxWidth = "none";
      iframe.allow = "autoplay; fullscreen";
      iframe.title = title;

      iframeRef.current.appendChild(iframe);

      const player = new Player(iframe);
      playerRef.current = player;
      setHasInitialized(true);

      await player.ready();
      // Seek to saved time if resuming
      if (savedTime.current > 0) {
        await player.setCurrentTime(savedTime.current);
      }
      await player.play();
      setIsPlaying(true);
    } else {
      // Re-hover — resume from saved position
      const player = playerRef.current;
      if (savedTime.current > 0) {
        await player.setCurrentTime(savedTime.current);
      }
      await player.play();
      setIsPlaying(true);
    }
  }, [vimeoId, coverWidth, coverHeight, title]);

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    onActivate();
    initAndPlay().catch(() => {});
  }, [isMobile, onActivate, initAndPlay]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    if (playerRef.current) {
      playerRef.current.getCurrentTime().then((t) => {
        savedTime.current = t;
      });
      playerRef.current.pause().catch(() => {});
      setIsPlaying(false);
    }
    onDeactivate();
  }, [isMobile, onDeactivate]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Poster image — always present, fades out when playing */}
      <img
        src={posterUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: isPlaying ? 0 : 1 }}
        loading="lazy"
      />
      {/* Player container — only populated on first hover */}
      <div
        ref={iframeRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: isPlaying ? 1 : 0 }}
      />
    </div>
  );
};

export default LazyVimeoCard;
