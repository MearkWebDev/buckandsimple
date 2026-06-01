import { useEffect } from "react";

export type SeoMeta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

function upsertMeta(selector: string, attr: string, name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Minimal head manager for SPA mode. Migration-friendly: when moving to
 * TanStack Start SSR, replace call sites with route `head()` definitions.
 */
export function useSeo(meta: SeoMeta) {
  useEffect(() => {
    if (meta.title) document.title = meta.title;
    if (meta.description)
      upsertMeta('meta[name="description"]', "name", "description", meta.description);
    if (meta.ogTitle)
      upsertMeta('meta[property="og:title"]', "property", "og:title", meta.ogTitle);
    if (meta.ogDescription)
      upsertMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        meta.ogDescription,
      );
    if (meta.ogImage)
      upsertMeta('meta[property="og:image"]', "property", "og:image", meta.ogImage);
  }, [meta.title, meta.description, meta.ogTitle, meta.ogDescription, meta.ogImage]);
}
