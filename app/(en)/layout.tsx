import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VanBot } from "@/components/VanBot";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vandc.com.ar"),
  title: { default: "Van D.C. | Visual artist in Buenos Aires", template: "%s | Van D.C." },
  description: "Original artworks, narrative collections and artistic experiences by Van D.C., an Argentine visual artist in Buenos Aires.",
  alternates: { canonical: "/en/", languages: { "es-AR": "/", "en-US": "/en/", "x-default": "/" } },
  openGraph: {
    title: "Van D.C. | Visual artist in Buenos Aires",
    description: "Original artworks, narrative collections and artistic experiences by Argentine visual artist Van D.C.",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    type: "website",
    images: [{ url: "/images/home/hero-vandc-sillon.png", alt: "Van D.C., Argentine visual artist" }]
  },
  twitter: { card: "summary_large_image", images: ["/images/home/hero-vandc-sillon.png"] },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        {children}
        <Footer />
        <BackToTop locale="en" />
        <VanBot />
      </body>
    </html>
  );
}
