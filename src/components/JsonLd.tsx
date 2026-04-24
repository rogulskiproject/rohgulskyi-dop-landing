import { useEffect } from "react";

interface JsonLdProps {
  data: object | null;
  id: string; // unique id so we can replace on route change
}

/**
 * Injects a <script type="application/ld+json"> tag into <head>.
 * Removes/replaces by id so multiple pages don't stack duplicates.
 */
const JsonLd = ({ data, id }: JsonLdProps) => {
  useEffect(() => {
    if (!data) return;
    const elementId = `jsonld-${id}`;
    let script = document.getElementById(elementId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = elementId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(data);

    return () => {
      const existing = document.getElementById(elementId);
      if (existing) existing.remove();
    };
  }, [data, id]);

  return null;
};

export default JsonLd;
