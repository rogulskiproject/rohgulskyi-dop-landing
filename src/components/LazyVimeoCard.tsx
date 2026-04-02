import { useRef, useState, useCallback, useEffect } from "react";
import Player from "@vimeo/player";

/**
 * Card states:
 * - idle: poster only, no player created
 * - prewarming: player being created in background (poster visible, iframe hidden)
 * - ready: player ready, waiting for hover to play (poster visible, iframe hidden)
 * - playing: video playing (iframe visible, poster faded out)
 * - paused: video paused at saved time (poster visible, iframe hidden)
 * - error: something went wrong
 */
type CardState = "idle" | "prewarming" | "ready" | "playing" | "paused" | "error";

interface LazyVimeoCardProps {
  vimeoId: string;
  title: string;
  coverWidth: number;
  coverHeight: number;
  /** Should this card play right now? (hover active + scroll settled) */
  isHovered: boolean;
  /** Should this card prewarm its player? (nearby viewport) */
  shouldPrewarm: boolean;
  isMobile: boolean;
}

const LOG = "[VimeoCard]";

/* ── poster cache ── */
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
  const fb = `https://vumbnail.com/${vimeoId}.jpg`;
  posterCache.set(vimeoId, fb);
  return fb;
};

const LazyVimeoCard = ({
  vimeoId,
  title,
  coverWidth,
  coverHeight,
  isHovered,
  shouldPrewarm,
  isMobile,
}: LazyVimeoCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const savedTime = useRef(0);
  const mountedRef = useRef(true);
  const stateRef = useRef<CardState>("idle");

  const [state, setState] = useState<CardState>("idle");
  const [posterUrl, setPosterUrl] = useState(`https://vumbnail.com/${vimeoId}.jpg`);

  // Keep ref in sync
  const setCardState = useCallback((s: CardState) => {
    if (!mountedRef.current) return;
    stateRef.current = s;
    setState(s);
  }, []);

  // Fetch hi-res poster
  useEffect(() => {
    fetchHiResPoster(vimeoId).then((url) => {
      if (mountedRef.current) setPosterUrl(url);
    });
  }, [vimeoId]);

  // Cleanup
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

  /* ── Create player (prewarm) ── */
  const createPlayer = useCallback(() => {
    if (playerRef.current || !containerRef.current) return;

    console.log(LOG, title, "— prewarming (creating player)");
    setCardState("prewarming");

    const iframe = document.createElement("iframe");
    // background=1 gives us chromeless player, muted autoplay-ready
    iframe.src = `https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0&loop=1&muted=1&title=0&byline=0&portrait=0&quality=1080p`;
    iframe.style.cssText = `
      border: none; position: absolute;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      width: ${coverWidth}px; height: ${coverHeight}px;
      pointer-events: none; max-width: none;
      opacity: 0;
    `;
    iframe.allow = "autoplay; fullscreen";
    iframe.title = title;
    iframeRef.current = iframe;
    containerRef.current.appendChild(iframe);

    const player = new Player(iframe);
    playerRef.current = player;

    const timeout = setTimeout(() => {
      if (mountedRef.current && stateRef.current === "prewarming") {
        console.warn(LOG, title, "— prewarm timeout");
        setCardState("error");
      }
    }, 8000);

    player.ready().then(() => {
      clearTimeout(timeout);
      if (!mountedRef.current) return;
      console.log(LOG, title, "— player ready");
      setCardState("ready");
    }).catch((err) => {
      clearTimeout(timeout);
      if (!mountedRef.current) return;
      console.error(LOG, title, "— player init failed:", err);
      setCardState("error");
    });
  }, [vimeoId, coverWidth, coverHeight, title, setCardState]);

  /* ── Prewarm trigger ── */
  useEffect(() => {
    if (isMobile) return;
    if (shouldPrewarm && stateRef.current === "idle") {
      createPlayer();
    }
  }, [shouldPrewarm, isMobile, createPlayer]);

  /* ── Play / Pause based on hover ── */
  useEffect(() => {
    if (isMobile) return;
    const player = playerRef.current;
    const iframe = iframeRef.current;
    const s = stateRef.current;

    if (isHovered) {
      // Try to play
      if (s === "ready" || s === "paused") {
        console.log(LOG, title, "— play requested");
        const doPlay = async () => {
          if (!player) return;
          try {
            if (savedTime.current > 0) {
              await player.setCurrentTime(savedTime.current);
            }
            await player.play();
            if (!mountedRef.current) return;
            // Show iframe
            if (iframe) iframe.style.opacity = "1";
            console.log(LOG, title, "— playing");
            setCardState("playing");
          } catch (err) {
            console.error(LOG, title, "— play failed:", err);
            if (mountedRef.current) setCardState("error");
          }
        };
        doPlay();
      } else if (s === "idle") {
        // Not prewarmed yet — create player then play when ready
        createPlayer();
        // We'll catch the ready state on next effect cycle
      }
    } else {
      // Pause
      if (s === "playing" && player) {
        console.log(LOG, title, "— pausing");
        player.getCurrentTime().then((t) => {
          savedTime.current = t;
          console.log(LOG, title, "— time saved:", t.toFixed(2));
        }).catch(() => {});
        player.pause().catch(() => {});
        if (iframe) iframe.style.opacity = "0";
        setCardState("paused");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  // When state transitions from prewarming→ready while hovered, auto-play
  useEffect(() => {
    if (isMobile) return;
    if (isHovered && state === "ready" && playerRef.current) {
      const player = playerRef.current;
      const iframe = iframeRef.current;
      console.log(LOG, title, "— auto-play on ready (was hovered during prewarm)");
      (async () => {
        try {
          if (savedTime.current > 0) await player.setCurrentTime(savedTime.current);
          await player.play();
          if (!mountedRef.current) return;
          if (iframe) iframe.style.opacity = "1";
          setCardState("playing");
        } catch (err) {
          console.error(LOG, title, "— auto-play failed:", err);
          if (mountedRef.current) setCardState("error");
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const showPoster = state !== "playing";

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Player container — iframe appended here, opacity controlled directly */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ zIndex: 1 }}
      />

      {/* Poster — always rendered, fades out when playing */}
      <img
        src={posterUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{
          opacity: showPoster ? 1 : 0,
          zIndex: showPoster ? 2 : 0,
        }}
        loading="lazy"
      />

      {/* Loading spinner during prewarm if hovered */}
      {state === "prewarming" && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-foreground/30 border-t-foreground/80 rounded-full animate-spin" />
        </div>
      )}

      {/* Error fallback */}
      {state === "error" && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="font-body text-xs uppercase tracking-widest text-foreground/50">
            Unable to load
          </span>
        </div>
      )}
    </div>
  );
};

export default LazyVimeoCard;
