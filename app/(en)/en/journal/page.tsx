import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notesEn } from "@/data/notes-en";

export const metadata: Metadata = { title: "Journal", description: "Stories from Van D.C.'s studio: collections, artistic experiences and reflections on contemporary art.", alternates: { canonical: "/en/journal/", languages: { "es-AR": "/notas/", "en-US": "/en/journal/", "x-default": "/notas/" } } };

export default function JournalPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#fbf2ea] pt-32 text-[#241014]">
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
        <p className="editorial-kicker text-xs text-[#b89050]">Journal</p><span className="mt-5 block h-px w-20 bg-[#b89050]" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[.78fr_1fr] lg:items-end"><h1 className="max-w-3xl text-[48px] leading-[.98] tracking-[-.04em] text-[#4a252b] sm:text-[68px]">Stories for seeing differently</h1><p className="max-w-2xl text-lg leading-8 text-[#6f4d4b]">Stories of artworks, experiences and creative processes from Van D.C.’s artistic world.</p></div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-14"><div className="grid gap-7 md:grid-cols-2">{notesEn.map((note) => <article className="overflow-hidden rounded-[8px] border border-[#dfbdb7] bg-[#fff7ef]" key={note.slug}><Link className="group block" href={`/en/journal/${note.slug}`}><div className="relative aspect-[1.62] overflow-hidden bg-[#e8d7cf]"><Image alt={note.imageAlt} className="object-cover transition duration-700 group-hover:scale-[1.03]" fill sizes="(min-width:768px) 50vw,100vw" src={note.image} /></div><div className="p-6 sm:p-8"><time className="editorial-kicker text-[11px] text-[#b89050]" dateTime={note.date}>{note.date}</time><h2 className="mt-5 max-w-2xl text-[30px] leading-[1.04] tracking-[-.03em] text-[#4a252b] sm:text-[38px]">{note.title}</h2><p className="mt-5 max-w-2xl leading-8 text-[#6f4d4b]">{note.excerpt}</p><span className="editorial-kicker mt-8 inline-flex items-center text-[11px] text-[#8c3e4c]">Read article <ArrowUpRight className="ml-3" size={16} /></span></div></Link></article>)}</div></section>
    </main>
  );
}
