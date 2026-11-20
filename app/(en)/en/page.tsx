import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HeroArt } from "@/components/HeroArt";
import { CtaParallax } from "@/components/CtaParallax";
import { SectionReveal } from "@/components/SectionReveal";
import { artworksEn } from "@/data/artworks-en";
import { notesEn } from "@/data/notes-en";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { alternates: { canonical: "/en/", languages: { "es-AR": "/", "en-US": "/en/", "x-default": "/" } } };

const ritual = [
  ["The story", "An introduction to the collection and its emotional journey."],
  ["The question", "A simple prompt to open the gaze and connect with the experience."],
  ["The creation", "Step-by-step guided painting. No previous experience required."],
  ["The artwork", "Each participant takes home a finished piece as the memory of a chosen state."]
];

export default function EnglishHome() {
  const featured = artworksEn.filter((artwork) => artwork.featured).slice(0, 4);
  return (
    <main id="main-content" className="overflow-hidden bg-ivory text-charcoal dark:bg-[#080707] dark:text-ivory">
      <HeroArt locale="en" />
      <SectionReveal className="relative overflow-hidden border-y border-[#ead9d5] bg-[#f1e2dd] py-16 text-charcoal lg:py-24">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.14fr_.86fr] lg:px-14">
          <div>
            <p className="editorial-kicker text-xs text-roseOld">Curated selection</p><span className="mt-5 block h-px w-12 bg-roseOld" />
            <h2 className="mt-6 font-serif text-[44px] leading-[.96] tracking-[-.035em] sm:text-[62px] lg:text-[74px]">Featured artworks</h2>
            <p className="mt-6 max-w-xl text-xl leading-snug text-smoke">Pieces created to accompany spaces, emotions and moments worth holding on to.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{featured.map((artwork) => (
              <Link aria-label={`View ${artwork.title}`} className="group bg-[#f8eee9]/82 p-4 shadow-[0_18px_40px_rgba(17,17,17,.12)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:ring-roseOld/55 focus-visible:ring-2 focus-visible:ring-roseOld" href={`/en/artworks/${artwork.slug}`} key={artwork.id}>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e9d7d1]"><Image alt={`${artwork.title} by Van D.C.`} className="object-cover transition duration-700 group-hover:scale-[1.035]" fill sizes="(min-width:1024px) 25vw,(min-width:640px) 50vw,92vw" src={artwork.image} /></div>
                <h2 className="mt-5 font-serif text-[23px] leading-tight">{artwork.title}</h2><p className="mt-3 min-h-[44px] text-sm leading-6 text-smoke">{artwork.technique}</p><span className="mt-4 block h-px w-8 bg-roseOld" />
              </Link>))}</div>
            <Link className="editorial-kicker mt-10 inline-flex border border-roseOld/55 px-10 py-5 text-xs text-roseOld transition hover:bg-roseOld hover:text-ivory" href="/en/artworks">View all artworks <ArrowUpRight className="ml-8" size={18} /></Link>
          </div>
          <div className="relative min-h-[680px] overflow-hidden lg:min-h-[820px]"><Image alt="Van D.C. painting in her studio" className="object-cover object-center" fill sizes="(min-width:1024px) 42vw,100vw" src="/images/home/segunda-seccion-vertical.webp" /></div>
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#f7eee8] py-20 text-[#744247] lg:py-28">
        <Image alt="An artistic experience led by Van D.C." className="absolute inset-0 object-cover object-right opacity-[.18] grayscale" fill sizes="100vw" src="/images/home/evento-experiencia.webp" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,238,232,.98),rgba(247,238,232,.68))]" />
        <div className="relative mx-auto grid max-w-[1680px] gap-14 px-5 sm:px-8 lg:grid-cols-[.86fr_1.14fr] lg:px-14">
          <div className="self-center"><p className="editorial-kicker text-sm text-[#8d5960]">Collections & experiences</p><div className="mt-6 h-px w-80 max-w-full bg-[#c99b63]" /><h2 className="mt-10 max-w-2xl font-serif text-[42px] leading-[.98] tracking-[-.035em] sm:text-[58px] lg:text-[68px]">Artworks that open worlds. Experiences that bring them to life.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-[#8a5d5f]">Collections bring together works with a shared narrative and emotion. Experiences turn that universe into encounters for contemplation, creation and connection.</p><div className="mt-12 flex flex-wrap gap-8"><Link className="editorial-kicker border border-[#c99b63] px-10 py-5 text-xs" href="/en/collections">View collections →</Link><Link className="editorial-kicker border border-[#c99b63] px-10 py-5 text-xs" href="/en/experiences">View experiences →</Link></div></div>
          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/en/artworks?coleccion=elegirse"><p className="editorial-kicker mx-auto mb-4 w-fit rounded-full border border-[#c99b63] px-9 py-3 text-xs">Collection</p><div className="relative aspect-[.707] overflow-hidden border border-[#c99b63] bg-[#f5ece4] p-2"><Image alt="Choosing Yourself collection cover" className="object-cover" fill sizes="(min-width:1024px) 28vw,86vw" src="/images/collections/portada-coleccion-elegirse.webp" /></div><h3 className="mt-7 font-serif text-[38px] leading-none">Choosing Yourself</h3><p className="mt-3 text-lg text-[#8a5d5f]">Three states. Three decisions. The same woman.</p></Link>
            <Link href="/en/artworks?coleccion=black-cat"><p className="editorial-kicker mx-auto mb-4 w-fit rounded-full border border-[#c99b63] px-9 py-3 text-xs">Experience + collection</p><div className="relative aspect-[.707] overflow-hidden border border-[#c99b63] bg-[#111] p-2"><Image alt="Black Cat Collection cover" className="object-cover" fill sizes="(min-width:1024px) 28vw,86vw" src="/images/collections/portada-coleccion-black-cat.webp" /></div><h3 className="mt-7 font-serif text-[38px] leading-none">Black Cat Collection</h3><p className="mt-3 text-lg text-[#8a5d5f]">Prejudice, love and second chances.</p></Link>
          </div>
        </div>
      </SectionReveal>

      <CtaParallax locale="en" />
      <SectionReveal className="border-y border-[#cfd0d0] bg-[#f7f7f5] py-20 text-[#121212] lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2"><div><p className="editorial-kicker text-xs text-[#6d6d6d]">The creative ritual</p><h2 className="mt-4 font-serif text-[38px] leading-none sm:text-[48px]">Artistic experiences</h2><p className="mt-6 max-w-xl leading-8 text-[#4f4f4f]">Encounters that turn a story, an emotion and a collection into a personal creation, guided step by step.</p><Link className="mt-8 inline-flex rounded-full bg-[#121212] px-6 py-3 text-sm text-white" href={whatsappLink("Hi Van, I would like to inquire about an artistic experience.")} target="_blank">Book an experience</Link></div><div className="grid gap-4 sm:grid-cols-2">{ritual.map(([title, copy], index) => <article className="border border-[#bfc1c2] bg-white/55 p-6" key={title}><p className="font-serif text-[36px] text-[#bfc1c2]">0{index + 1}</p><h3 className="mt-8 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#5f5f5f]">{copy}</p></article>)}</div></div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-5"><div><p className="editorial-kicker text-xs text-roseOld">From the studio</p><h2 className="mt-4 font-serif text-[38px] tracking-[-.03em] sm:text-[48px]">Notes for seeing differently</h2></div><Sparkles className="text-antiqueGold" size={30} /></div>
        <div className="grid gap-4 md:grid-cols-3">{notesEn.map((note) => <article className="border-y border-[color:var(--line)] py-7" key={note.slug}><p className="editorial-kicker text-[10px] text-roseOld">{note.eyebrow}</p><h3 className="mt-4 font-serif text-[30px] leading-none">{note.title}</h3><p className="mt-5 text-sm leading-7 text-smoke">{note.excerpt}</p><Link className="mt-7 inline-flex text-sm text-roseOld" href={`/en/journal/${note.slug}`}>Read article →</Link></article>)}</div>
      </SectionReveal>
    </main>
  );
}
