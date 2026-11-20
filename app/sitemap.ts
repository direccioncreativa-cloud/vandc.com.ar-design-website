import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";
import { notes } from "@/data/notes";

const origin = "https://www.vandc.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const pairedRoutes = [
    ["", "/en"],
    ["/obras", "/en/artworks"],
    ["/colecciones", "/en/collections"],
    ["/experiencias", "/en/experiences"],
    ["/acerca", "/en/about"],
    ["/notas", "/en/journal"],
    ["/contacto", "/en/contact"]
  ];
  const staticEntries = pairedRoutes.flatMap(([es, en]) => [
    { url: `${origin}${es}/`, alternates: { languages: { "es-AR": `${origin}${es}/`, "en-US": `${origin}${en}/`, "x-default": `${origin}${es}/` } } },
    { url: `${origin}${en}/`, alternates: { languages: { "es-AR": `${origin}${es}/`, "en-US": `${origin}${en}/`, "x-default": `${origin}${es}/` } } }
  ]);
  const artworkEntries = artworks.flatMap((artwork) => [
    { url: `${origin}/obras/${artwork.slug}/` },
    { url: `${origin}/en/artworks/${artwork.slug}/` }
  ]);
  const noteEntries = notes.flatMap((note) => [
    { url: `${origin}/notas/${note.slug}/` },
    { url: `${origin}/en/journal/${note.slug}/` }
  ]);
  return [...staticEntries, ...artworkEntries, ...noteEntries];
}
