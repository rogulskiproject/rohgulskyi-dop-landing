import { useRef, useState, useCallback, useEffect } from "react";
import Player from "@vimeo/player";

type CardState = "idle" | "loading" | "ready" | "playing" | "paused" | "error";

interface LazyVimeoCardProps {
  vimeoId: string;
  title: string;
  coverWidth: number;
  coverHeight: number;
  isHovered: boolean;
  isMobile: boolean;
}

const LOG_PREFIX = "[VimeoCard]";

/**
 * Fetches a high-resolution poster from Vimeo oEmbed API.
 * Falls back to vumbnail if oEmbed fails.
 */
const posterCache = new Map<string, string>();

const fetchHiResPoster = async (vimeoId: string): Promise<string> => {
  if (posterCache.has(vimeoId)) return posterCache.get(vimeoId)!;

  try {
    const resp = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1920`
    );
    if (resp.ok) {
      const data = await resp.json();
      if (data.thumbnail_url) {
        // Vimeo oEmbed returns URLs like .../_295x166 — strip the size suffix for max res
        const hiRes = data.thumbnail_url.replace(/_\d+x\d+$/, "");
        posterCache.set(vimeoId, hiRes);
        return hiRes;
      }
    }
  } catch {
    // fall through
  }

  const fallback = `https://vumbnail.com/${vimeoId}.jpg`;
  posterCache.set(vimeoId, fallback);
  return fallback;
};

const LazyVimeoCard = ({
  vimeoId,
  title,
  coverWidth,
  coverHeight,
  isHovered,
  isMobile,
}: LazyVimeoCardProps) => {
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const savedTime = useRef(0);
  const hasCreatedPlayer = useRef(false);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout>>();

  const [state, setState] = useState<CardState>("idle");
  const [posterUrl, setPosterUrl] = useState(`https://vumbnail.com/${vimeoId}.jpg`);

  // Fetch high-res poster on mount
  useEffect(() => {
    fetchHiResPoster(vimeoId).then(setPosterUrl);
  }, [vimeoId]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(fallbackTimer.current);
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
        playerRef.current = null;
      }
    };
  }, []);

  const createPlayer = useCallback(async () => {
    if (hasCreatedPlayer.current || !iframeContainerRef.current) return;
    hasCreatedPlayer.current = true;

    console.log(LOG_PREFIX, title, "— iframe mounting");
    setState("loading");

    // Start fallback timer
    fallbackTimer.current = setTimeout(() => {
      setState((prev) => {
        if (prev === "loading") {
          console.warn(LOG_PREFIX, title, "— timeout, showing error fallback");
          return "error";
        }
        return prev;
      });
    }, 5000);

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&quality=1080p`;
    iframe.style.cssText = `
      border: none;
      position: absolute;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      width: ${coverWidth}px;
      height: ${coverHeight}px;
      pointer-events: none;
      max-width: none;
    `;
    iframe.allow = "autoplay; fullscreen";
    iframe.title = title;

    iframeContainerRef.current.appendChild(iframe);

    try {
      const player = new Player(iframe);
      playerRef.current = player;

      await player.ready();
      clearTimeout(fallbackTimer.current);
      console.log(LOG_PREFIX, title, "— player ready");
      setState("ready");
      return player;
    } catch (err) {
      clearTimeout(fallbackTimer.current);
      console.error(LOG_PREFIX, title, "— player init failed:", err);
      setState("error");
      return null;
    }
  }, [vimeoId, coverWidth, coverHeight, title]);

  const play = useCallback(async () => {
    let player = playerRef.current;

    if (!player) {
      player = (await createPlayer()) ?? null;
      if (!player) return;
    }

    try {
      if (savedTime.current > 0) {
        await player.setCurrentTime(savedTime.current);
      }
      console.log(LOG_PREFIX, title, "— play requested");
      await player.play();
      console.log(LOG_PREFIX, title, "— play success");
      setState("playing");
    } catch (err) {
      console.error(LOG_PREFIX, title, "— play failed:", err);
      setState("error");
    }
  }, [createPlayer, title]);

  const pause = useCallback(async () => {
    const player = playerRef.current;
    if (!player) return;

    try {
      const t = await player.getCurrentTime();
      savedTime.current = t;
      console.log(LOG_PREFIX, title, "— current time saved:", t.toFixed(2));
      await player.pause();
      setState("paused");
      console.log(LOG_PREFIX, title, "— paused");
    } catch {
      // player might have been destroyed
    }
  }, [title]);

  // React to hover state changes from parent
  useEffect(() => {
    if (isMobile) return;

    if (isHovered) {
      console.log(LOG_PREFIX, title, "— hover entered");
      play();
    } else {
      if (state === "playing" || state === "ready" || state === "loading") {
        console.log(LOG_PREFIX, title, "— hover left");
        pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const showPoster = state !== "playing";
  const showPlayer = state === "playing" || state === "paused" || state === "ready";

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Vimeo player container — sits below poster until playing */}
      <div
        ref={iframeContainerRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: showPlayer && !showPoster ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Poster image — fades out when playing */}
      <img
        src={posterUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{
          opacity: showPoster ? 1 : 0,
          zIndex: showPoster ? 2 : 0,
        }}
        loading="lazy"
      />

      {/* Loading indicator */}
      {state === "loading" && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-foreground/30 border-t-foreground/80 rounded-full animate-spin" />
        </div>
      )}

      {/* Error / fallback state */}
      {state === "error" && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="font-body text-xs uppercase tracking-widest text-foreground/50">
            Tap to play
          </span>
        </div>
      )}
    </div>
  );
};

export default LazyVimeoCard;
