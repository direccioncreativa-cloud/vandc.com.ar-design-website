import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Van D.C. | Visual artist in Buenos Aires", template: "%s | Van D.C." },
  description: "Original artworks, narrative collections and artistic experiences by Van D.C., a contemporary visual artist from Buenos Aires.",
  alternates: { canonical: "/en", languages: { "es-AR": "/", en: "/en" } },
  openGraph: { locale: "en_US", alternateLocale: ["es_AR"] }
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
