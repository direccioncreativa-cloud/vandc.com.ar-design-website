import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notes } from "@/data/notes";

export const metadata: Metadata = {
  title: "Notas | Van D.C.",
  description:
    "Notas del taller, experiencias artisticas, procesos y relatos de obra de Van D.C., artista visual argentina en Buenos Aires."
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fbf2ea] pt-32 text-[#241014]">
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
        <p className="editorial-kicker text-xs text-[#b89050]">Notas</p>
        <span className="mt-5 block h-px w-20 bg-[#b89050]" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <h1 className="max-w-3xl text-[48px] font-[430] leading-[0.98] tracking-[-0.04em] text-[#4a252b] sm:text-[68px]">
            Historias para mirar distinto
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#6f4d4b]">
            Relatos de obra, experiencias y procesos creativos que acompa&ntilde;an el universo art&iacute;stico de Van D.C.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-14">
        <div className="grid gap-7 md:grid-cols-2">
          {notes.map((note) => (
            <article className="overflow-hidden rounded-[8px] border border-[#dfbdb7] bg-[#fff7ef]" key={note.slug}>
              <Link className="group block" href={`/notas/${note.slug}`}>
                <div className="relative aspect-[1.62] overflow-hidden bg-[#e8d7cf]">
                  <Image
                    alt={note.imageAlt}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={note.image}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <time className="editorial-kicker text-[11px] text-[#b89050]" dateTime={note.date}>
                    {note.displayDate}
                  </time>
                  <h2 className="mt-5 max-w-2xl text-[30px] font-[430] leading-[1.04] tracking-[-0.03em] text-[#4a252b] sm:text-[38px]">
                    {note.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f4d4b]">{note.excerpt}</p>
                  <span className="editorial-kicker mt-8 inline-flex items-center text-[11px] text-[#8c3e4c]">
                    Leer nota <ArrowUpRight className="ml-3" size={16} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
