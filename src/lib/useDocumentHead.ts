import { useEffect } from "react";

const SITE_NAME = "Vishal Verma";
const SITE_URL = "https://imvishi.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface DocumentHeadOptions {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/story/my-slug". Defaults to the current path. */
  path?: string;
  image?: string;
  type?: "website" | "article";
  /** JSON-LD structured data object(s) to inject as <script type="application/ld+json">. */
  structuredData?: object | object[];
  noindex?: boolean;
  /** Set false for the homepage, whose title already stands alone. Defaults to true. */
  appendSiteName?: boolean;
}

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Manages document.title and head meta tags for the current route. This is a pure
 * client-side SPA (no SSR), so this only affects what runs after JS executes - it
 * still helps social share cards on re-crawl and any crawler that renders JS.
 */
export function useDocumentHead({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  structuredData,
  noindex = false,
  appendSiteName = true,
}: DocumentHeadOptions) {
  useEffect(() => {
    const fullTitle = appendSiteName ? `${title} | ${SITE_NAME}` : title;
    const url = `${SITE_URL}${path ?? window.location.pathname}`;

    document.title = fullTitle;
    setMetaByName("description", description);
    setMetaByName("robots", noindex ? "noindex, follow" : "index, follow");
    setCanonical(url);

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", image);
    setMetaByProperty("og:type", type);
    setMetaByProperty("og:site_name", SITE_NAME);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", image);

    const scripts: HTMLScriptElement[] = [];
    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      for (const item of items) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(item);
        script.dataset.dynamicSeo = "true";
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      scripts.forEach((script) => script.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, type, noindex, appendSiteName, JSON.stringify(structuredData)]);
}

export { SITE_NAME, SITE_URL };
