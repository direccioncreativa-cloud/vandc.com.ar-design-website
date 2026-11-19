import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VanBot } from "@/components/VanBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vandc.com.ar"),
  title: { default: "Van D.C. | Artista visual en Buenos Aires", template: "%s | Van D.C." },
  description: "Obras originales, colecciones y experiencias artísticas de Van D.C., artista visual argentina en Buenos Aires.",
  alternates: { canonical: "/", languages: { "es-AR": "/", "en-US": "/en/", "x-default": "/" } },
  openGraph: {
    title: "Van D.C. | Artista visual en Buenos Aires",
    description: "Obras originales, colecciones y experiencias artísticas de Van D.C.",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/images/home/hero-vandc-sillon.png", alt: "Van D.C., artista visual argentina" }]
  },
  twitter: { card: "summary_large_image", images: ["/images/home/hero-vandc-sillon.png"] },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>
        <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
        <Header />
        {children}
        <Footer />
        <VanBot />
      </body>
    </html>
  );
}
