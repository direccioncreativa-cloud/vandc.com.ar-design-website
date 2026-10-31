import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroArt } from "@/components/HeroArt";
import { CtaParallax } from "@/components/CtaParallax";
import { SectionReveal } from "@/components/SectionReveal";
import { artworksEn } from "@/data/artworks-en";

export default function EnglishHome() {
  const featured = artworksEn.filter((artwork) => artwork.featured).slice(0, 4);
  return <main className="overflow-hidden bg-ivory text-charcoal">
    <HeroArt locale="en" />
    <SectionReveal className="border-y border-[#ead9d5] bg-[#f1e2dd] py-16 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-14">
        <p className="editorial-kicker text-xs text-roseOld">Curated selection</p>
        <h2 className="mt-6 font-serif text-[44px] leading-none tracking-[-.035em] sm:text-[62px]">Featured artworks</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-smoke">Pieces created to accompany spaces, emotions and moments worth holding on to.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{featured.map((artwork) =>
          <Link className="group bg-[#f8eee9]/82 p-4 shadow-[0_18px_40px_rgba(17,17,17,.12)] transition hover:-translate-y-1" href={`/en/artworks/${artwork.slug}`} key={artwork.id}>
            <div className="relative aspect-[3/4] overflow-hidden"><Image alt={`${artwork.title} by Van D.C.`} className="object-cover transition duration-700 group-hover:scale-[1.035]" fill sizes="(min-width:1024px) 25vw,50vw" src={artwork.image}/></div>
            <h3 className="mt-5 font-serif text-[23px]">{artwork.title}</h3><p className="mt-3 text-sm text-smoke">{artwork.technique}</p>
          </Link>)}</div>
        <Link className="editorial-kicker mt-10 inline-flex border border-roseOld/55 px-10 py-5 text-xs text-roseOld" href="/en/artworks">View all artworks <ArrowUpRight className="ml-8" size={18}/></Link>
      </div>
    </SectionReveal>
    <SectionReveal className="relative bg-[#f7eee8] py-20 text-[#744247] lg:py-28">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-14">
        <div><p className="editorial-kicker text-sm text-[#8d5960]">Collections & experiences</p><h2 className="mt-8 font-serif text-[42px] leading-none tracking-[-.035em] sm:text-[58px]">Artworks that open worlds. Experiences that bring them to life.</h2><p className="mt-7 text-lg leading-8 text-[#8a5d5f]">Collections bring together works with a shared narrative and emotion. Experiences turn that universe into encounters for contemplation, creation and connection.</p><div className="mt-10 flex gap-5"><Link className="editorial-kicker border border-[#c99b63] px-8 py-5 text-xs" href="/en/collections">Collections →</Link><Link className="editorial-kicker border border-[#c99b63] px-8 py-5 text-xs" href="/en/experiences">Experiences →</Link></div></div>
        <div className="relative min-h-[560px]"><Image alt="Van D.C. artistic experience" className="object-cover" fill sizes="50vw" src="/images/home/evento-experiencia.webp"/></div>
      </div>
    </SectionReveal>
    <CtaParallax locale="en" />
    <SectionReveal className="bg-[#120f12] py-20 text-[#f4efe7] lg:py-24"><div className="mx-auto max-w-5xl px-5 text-center"><p className="editorial-kicker text-xs text-[#e8c7c8]">Meet the artist</p><h2 className="mt-6 font-serif text-[38px] leading-tight sm:text-[54px]">Art as a way of inhabiting the present</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d9cfc5]">I am Van D.C., an Argentine visual artist. I paint to transform emotions into presence and create works that accompany spaces, stories and new ways of seeing.</p><Link className="editorial-kicker mt-9 inline-flex border border-[#b89050] px-9 py-5 text-xs text-[#b89050]" href="/en/about">About Van →</Link></div></SectionReveal>
  </main>;
}
