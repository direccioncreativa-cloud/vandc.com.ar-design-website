import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VanBot } from "@/components/VanBot";
import { DocumentLanguage } from "@/components/DocumentLanguage";

export const metadata: Metadata = {
  metadataBase: new URL("https://vandc.com.ar"),
  title: "Van D.C. | Artista visual en Buenos Aires",
  description:
    "Obras originales, colecciones y experiencias artísticas de Van D.C., artista visual emergente de Buenos Aires.",
  openGraph: {
    title: "Van D.C. | Artista visual",
    description:
      "Galería romántica contemporánea, obras originales y experiencias artísticas en Buenos Aires.",
    images: ["/images/home/hero-vandc-sillon.png"]
  },
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <DocumentLanguage />
        <Header />
        {children}
        <Footer />
        <VanBot />
      </body>
    </html>
  );
}
