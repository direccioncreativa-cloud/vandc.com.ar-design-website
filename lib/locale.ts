export type SiteLocale = "es" | "en";

export const routeMap: Record<string, string> = {
  "/obras": "/artworks", "/colecciones": "/collections", "/experiencias": "/experiences",
  "/acerca": "/about", "/acerca-de-mi": "/about", "/notas": "/journal", "/contacto": "/contact"
};

export function localizedPath(path: string, locale: SiteLocale) {
  if (locale === "es") return path;
  if (path === "/") return "/en";
  const match = Object.keys(routeMap).find((route) => path === route || path.startsWith(`${route}/`));
  return `/en${match ? path.replace(match, routeMap[match]) : path}`;
}

export function alternateLocalePath(pathname: string) {
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (cleanPath === "/en") return "/";
  if (cleanPath.startsWith("/en/")) {
    const englishPath = cleanPath.slice(3) || "/";
    const match = Object.entries(routeMap).find(([, route]) => englishPath === route || englishPath.startsWith(`${route}/`));
    return match ? englishPath.replace(match[1], match[0]) : englishPath;
  }
  if (cleanPath === "/") return "/en";
  const match = Object.entries(routeMap).find(([route]) => cleanPath === route || cleanPath.startsWith(`${route}/`));
  return match ? `/en${cleanPath.replace(match[0], match[1])}` : `/en${cleanPath}`;
}
