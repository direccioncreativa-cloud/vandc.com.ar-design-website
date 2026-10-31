import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNoteEn, notesEn } from "@/data/notes-en";
export const dynamicParams=false;
export function generateStaticParams(){return notesEn.map(({slug})=>({slug}))}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{const note=getNoteEn(params.slug);return note?{title:note.title,description:note.description}:{} }
export default function NotePage({params}:{params:{slug:string}}){const note=getNoteEn(params.slug);if(!note)notFound();return <main className="bg-[#fffaf5] pb-20 pt-28 text-[#221f1d]"><article><header className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8"><p className="editorial-kicker text-xs text-[#9b6268]">{note.eyebrow} · {note.date}</p><h1 className="mt-7 font-serif text-[42px] leading-[1.02] tracking-[-.035em] sm:text-[62px]">{note.title}</h1><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#5d504b]">{note.excerpt}</p></header><div className="relative mx-auto aspect-[16/8] max-w-[1300px]"><Image alt={note.imageAlt} className="object-cover" fill priority sizes="100vw" src={note.image}/></div><div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">{note.sections.map(section=><section className="mb-12" key={section.heading}><h2 className="font-serif text-[32px] leading-tight text-[#744247]">{section.heading}</h2><span className="mt-5 block h-px w-20 bg-[#b89050]"/>{section.paragraphs.map(p=><p className="mt-6 text-lg leading-9 text-[#4f403d]" key={p}>{p}</p>)}</section>)}<Link className="editorial-kicker inline-flex border border-[#8d5960] px-8 py-5 text-xs text-[#8d5960]" href="/en/journal">← Back to journal</Link></div></article></main>}
