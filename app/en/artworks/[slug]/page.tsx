import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ArtworkDetailGallery } from "@/components/ArtworkDetailGallery";
import { artworksEn, getArtworkEn, statusLabelsEn } from "@/data/artworks-en";
import { whatsappLink } from "@/lib/whatsapp";

export const dynamicParams = false;
export function generateStaticParams() { return artworksEn.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const artwork = getArtworkEn(params.slug); return artwork ? { title: artwork.title, description: artwork.description, alternates: { canonical: `/en/artworks/${artwork.slug}`, languages: { "es-AR": `/obras/${artwork.slug}`, en: `/en/artworks/${artwork.slug}` } } } : {}; }
export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const artwork = getArtworkEn(params.slug); if (!artwork) notFound();
  const details = [["Collection", artwork.collection], ["Medium", artwork.technique], ["Support", artwork.support], ["Dimensions", artwork.size], ["Status", statusLabelsEn[artwork.status]], ["Year", artwork.year]].filter(([, value]) => value?.trim());
  return <main className="overflow-hidden bg-[#f8f1ea] text-[#171313]"><section className="relative px-5 pb-14 pt-36 sm:px-8 lg:px-14 lg:pb-20"><div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[.1]"/><div className="relative mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[1.05fr_.95fr]">
    <ArtworkDetailGallery images={artwork.gallery} locale="en" title={artwork.title}/><div className="lg:sticky lg:top-28"><p className="editorial-kicker text-xs text-[#9b6268]">Artwork details</p><span className="mt-5 block h-px w-20 bg-[#b89050]"/><h1 className="mt-8 font-serif text-[42px] leading-none tracking-[-.035em] sm:text-[64px]">{artwork.title}</h1><p className="mt-5 font-medium text-[#9b6268]">{artwork.collection}</p><p className="mt-7 text-base leading-8 text-[#5f534d]">{artwork.description}</p>{artwork.quote && <blockquote className="mt-8 border-l border-[#b89050] pl-6 font-serif text-[24px] text-[#8d5960]">“{artwork.quote}”</blockquote>}
    <dl className="mt-10 grid gap-3 sm:grid-cols-2">{details.map(([label,value])=><div className="border border-[#d6b7a1] bg-[#fffaf5]/82 p-5" key={label}><dt className="editorial-kicker text-[10px] text-[#9b6268]">{label}</dt><dd className="mt-3 text-sm">{value}</dd></div>)}</dl>
    <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link className="editorial-kicker inline-flex items-center justify-center bg-[#8d5960] px-7 py-5 text-[11px] text-white" href={whatsappLink(`Hi Van, I would like to enquire about the price of ${artwork.title}.`)} target="_blank">Enquire about price <ArrowUpRight className="ml-7" size={16}/></Link><Link className="editorial-kicker border border-[#b89050] px-7 py-5 text-center text-[11px] text-[#8d5960]" href="/en/artworks">Back to artworks</Link></div></div>
  </div></section></main>;
}
