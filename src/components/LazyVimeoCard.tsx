import { useRef, useState, useCallback, useEffect } from "react";
import Player from "@vimeo/player";

type CardState = "idle" | "prewarming" | "ready" | "playing" | "paused" | "error";

interface LazyVimeoCardProps {
  vimeoId: string;
  title: string;
  coverWidth: number;
  coverHeight: number;
  isHovered: boolean;
  isMobile: boolean;
  shouldPrewarm: boolean;
}

const LOG = "[VimeoCard]";

/* ── Hi-res poster cache ── */
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
        const hiRes = data.thumbnail_url.replace(/_\d+x\d+$/, "");
        posterCache.set(vimeoId, hiRes);
        return hiRes;
      }
    }
  } catch { /* fall through */ }
  const fallback = `https://vumbnail.com/${vimeoId}_large.jpg`;
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
  shouldPrewarm,
}: LazyVimeoCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const savedTime = useRef(0);
  const abortRef = useRef(false);
  const mountedRef = useRef(true);
  const playerCreating = useRef(false);
  const readyPromiseRef = useRef<Promise<Player> | null>(null);

  const [state, setState] = useState<CardState>("idle");
  const [posterUrl, setPosterUrl] = useState(`https://vumbnail.com/${vimeoId}_large.jpg`);

  // Fetch hi-res poster
  useEffect(() => {
    fetchHiResPoster(vimeoId).then((url) => {
      if (mountedRef.current) setPosterUrl(url);
    });
  }, [vimeoId]);

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
        playerRef.current = null;
      }
    };
  }, []);

  /* ── Create player (idempotent — returns cached promise) ── */
  const ensurePlayer = useCallback((): Promise<Player> => {
    if (readyPromiseRef.current) return readyPromiseRef.current;

    readyPromiseRef.current = new Promise<Player>((resolve, reject) => {
      if (playerCreating.current) return;
      playerCreating.current = true;

      const container = containerRef.current;
      if (!container) { reject(new Error("no container")); return; }

      console.log(LOG, title, "— iframe mounting");
      setState((s) => (s === "idle" ? "prewarming" : s));

      const iframe = document.createElement("iframe");
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0&quality=1080p`;
      iframe.style.cssText = `
        border:none; position:absolute;
        left:50%; top:50%;
        transform:translate(-50%,-50%);
        width:${coverWidth}px; height:${coverHeight}px;
        pointer-events:none; max-width:none;
      `;
      iframe.allow = "autoplay; fullscreen";
      iframe.title = title;
      iframeRef.current = iframe;
      container.appendChild(iframe);

      const player = new Player(iframe);
      playerRef.current = player;

      // Timeout — if not ready in 6s, treat as error
      const timeout = setTimeout(() => {
        if (mountedRef.current) {
          console.warn(LOG, title, "— player timeout");
          setState("error");
        }
        reject(new Error("timeout"));
      }, 6000);

      player.ready().then(() => {
        clearTimeout(timeout);
        if (!mountedRef.current) return;
        console.log(LOG, title, "— player ready");
        setState("ready");
        resolve(player);
      }).catch((err) => {
        clearTimeout(timeout);
        console.error(LOG, title, "— player init failed:", err);
        if (mountedRef.current) setState("error");
        reject(err);
      });
    });

    return readyPromiseRef.current;
  }, [vimeoId, coverWidth, coverHeight, title]);

  /* ── Prewarming: create player in background when nearby ── */
  useEffect(() => {
    if (isMobile) return;
    if (shouldPrewarm && state === "idle") {
      console.log(LOG, title, "— prewarming");
      ensurePlayer().catch(() => {});
    }
  }, [shouldPrewarm, state, isMobile, ensurePlayer, title]);

  /* ── Hover → play / leave → pause (abort-safe) ── */
  useEffect(() => {
    if (isMobile) return;

    if (isHovered) {
      abortRef.current = false;
      console.log(LOG, title, "— hover entered");

      (async () => {
        let player: Player;
        try {
          player = await ensurePlayer();
        } catch {
          return; // player failed, poster stays
        }
        if (abortRef.current || !mountedRef.current) return;

        try {
          if (savedTime.current > 0) {
            await player.setCurrentTime(savedTime.current);
          }
          if (abortRef.current || !mountedRef.current) return;
          console.log(LOG, title, "— play requested");
          await player.play();
          if (abortRef.current || !mountedRef.current) return;
          console.log(LOG, title, "— play success");
          setState("playing");
        } catch (err: any) {
          // Ignore PlayInterrupted — it means pause() won the race, which is fine
          if (err?.name === "NotAllowedError" || String(err).includes("interact")) {
            console.warn(LOG, title, "— autoplay blocked");
            if (mountedRef.current) setState("error");
          } else {
            console.warn(LOG, title, "— play interrupted (expected on fast hover)");
          }
        }
      })();
    } else {
      // Mouse left — abort any pending play, then pause
      abortRef.current = true;
      const player = playerRef.current;
      if (player && (state === "playing" || state === "ready" || state === "prewarming")) {
        console.log(LOG, title, "— hover left");
        (async () => {
          try {
            const t = await player.getCurrentTime();
            savedTime.current = t;
            console.log(LOG, title, "— time saved:", t.toFixed(2));
            await player.pause();
            if (mountedRef.current) setState("paused");
            console.log(LOG, title, "— paused");
          } catch { /* player may have been destroyed */ }
        })();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const showPoster = state !== "playing";
  const showPlayer = state === "playing" || state === "paused" || state === "ready";

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Player container — always z-1, fades in when playing */}
      <div
        ref={containerRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: showPlayer && !showPoster ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Poster — z-2, fades out when playing */}
      <img
        src={posterUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{
          opacity: showPoster ? 1 : 0,
          zIndex: showPoster ? 2 : 0,
        }}
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
      />

      {/* Spinner — only while prewarming AND hovered */}
      {(state === "prewarming") && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-foreground/30 border-t-foreground/80 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyVimeoCard;
