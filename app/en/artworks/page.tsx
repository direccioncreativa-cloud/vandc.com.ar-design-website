import type { Metadata } from "next";
import { Suspense } from "react";
import { ArtworkCatalog } from "@/components/ArtworkCatalog";
import { artworksEn } from "@/data/artworks-en";

export const metadata: Metadata = { title: "Original artworks", description: "Explore original paintings, charcoal works and narrative collections by Argentine visual artist Van D.C.", alternates: { canonical: "/en/artworks", languages: { "es-AR": "/obras", en: "/en/artworks" } } };

export default function ArtworksPage() { return <main className="overflow-hidden bg-[#f8f1ea] text-[#171313]">
  <section className="relative px-5 pb-12 pt-36 sm:px-8 lg:px-14 lg:pb-16"><div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[.11]"/><div className="relative mx-auto max-w-[1180px] text-center"><p className="editorial-kicker text-xs text-[#9b6268]">Artworks</p><span className="mx-auto mt-5 block h-px w-24 bg-[#b89050]"/><h1 className="mt-7 font-serif text-[44px] leading-none tracking-[-.035em] sm:text-[68px]">Artwork catalogue</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f534d]">A selection of original pieces, charcoal works and collections through which to explore Van D.C.’s visual universe.</p></div></section>
  <section className="px-5 py-12 sm:px-8 lg:px-14"><div className="mx-auto max-w-[1440px]"><Suspense fallback={null}><ArtworkCatalog artworks={artworksEn} locale="en"/></Suspense></div></section>
</main>; }
