export type SiteLocale = "es" | "en";

const routeMap: Record<string, string> = {
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
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) {
    const englishPath = pathname.slice(3) || "/";
    const match = Object.entries(routeMap).find(([, route]) => englishPath === route || englishPath.startsWith(`${route}/`));
    return match ? englishPath.replace(match[1], match[0]) : englishPath;
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}
