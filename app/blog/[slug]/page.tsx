import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getNote, notes } from "@/data/notes";

type NotePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: NotePageProps): Metadata {
  const note = getNote(params.slug);

  if (!note) {
    return {};
  }

  return {
    title: `${note.title} | Van D.C.`,
    description: note.excerpt,
    keywords: note.keywords,
    alternates: {
      canonical: `/notas/${note.slug}`
    },
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
      images: [
        {
          url: note.image,
          alt: note.imageAlt
        }
      ]
    }
  };
}

export default function NotePage({ params }: NotePageProps) {
  const note = getNote(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbf2ea] pt-32 text-[#241014]">
      <article>
        <header className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-14">
          <Link className="editorial-kicker inline-flex items-center text-[11px] text-[#8c3e4c]" href="/notas">
            <ArrowLeft className="mr-3" size={15} /> Volver a notas
          </Link>
          <p className="editorial-kicker mt-10 text-xs text-[#b89050]">{note.eyebrow}</p>
          <span className="mt-5 block h-px w-20 bg-[#b89050]" />
          <h1 className="mt-8 max-w-5xl text-[40px] font-[430] leading-[1.02] tracking-[-0.04em] text-[#4a252b] sm:text-[62px]">
            {note.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#6f4d4b]">{note.excerpt}</p>
          <time className="editorial-kicker mt-8 block text-[11px] text-[#b89050]" dateTime={note.date}>
            {note.displayDate}
          </time>
        </header>

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="relative aspect-[1.62] overflow-hidden rounded-[8px] bg-[#e8d7cf]">
            <Image alt={note.imageAlt} className="object-cover" fill priority sizes="100vw" src={note.image} />
          </div>
        </div>

        <div className="mx-auto max-w-[820px] px-5 py-14 sm:px-8 lg:py-20">
          <div className="space-y-8 text-[19px] leading-9 text-[#4f3432]">
            {note.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            className="editorial-kicker mt-12 inline-flex items-center border border-[#b87982] px-7 py-4 text-[11px] text-[#8c3e4c] transition hover:bg-[#b87982] hover:text-white"
            href={note.ctaHref}
          >
            {note.ctaLabel} <ArrowUpRight className="ml-5" size={16} />
          </Link>
        </div>
      </article>
    </main>
  );
}
