/**
 * Lightweight head-tag manager for SPA routes.
 * Sets <title>, named/property meta tags, canonical link,
 * and a JSON-LD <script> block. Cleans up on unmount.
 */

type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string };

interface SeoOptions {
  title: string;
  description: string;
  canonical?: string;
  meta?: MetaTag[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  jsonLdId?: string;
}

const upsertMeta = (tag: MetaTag) => {
  const key = "name" in tag ? "name" : "property";
  const value = "name" in tag ? tag.name : tag.property;
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${key}="${value}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", tag.content);
  return el;
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
};

const upsertJsonLd = (id: string, payload: SeoOptions["jsonLd"]) => {
  const selector = `script[type="application/ld+json"][data-seo="${id}"]`;
  let el = document.head.querySelector<HTMLScriptElement>(selector);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
  return el;
};

export const applySeo = (opts: SeoOptions): (() => void) => {
  const previousTitle = document.title;
  document.title = opts.title;

  const created: Element[] = [];

  const desc = upsertMeta({ name: "description", content: opts.description });
  created.push(desc);

  for (const tag of opts.meta ?? []) {
    created.push(upsertMeta(tag));
  }

  let canonicalEl: HTMLLinkElement | null = null;
  if (opts.canonical) {
    canonicalEl = upsertCanonical(opts.canonical);
  }

  let jsonLdEl: HTMLScriptElement | null = null;
  if (opts.jsonLd) {
    jsonLdEl = upsertJsonLd(opts.jsonLdId ?? "page", opts.jsonLd);
  }

  return () => {
    document.title = previousTitle;
    // Leave meta/canonical in place — the next route will overwrite them.
    // Only remove the page-specific JSON-LD so stale schema doesn't linger.
    if (jsonLdEl && jsonLdEl.parentNode) {
      jsonLdEl.parentNode.removeChild(jsonLdEl);
    }
  };
};
