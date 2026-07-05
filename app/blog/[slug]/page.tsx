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
    title: `${note.seoTitle} | Van D.C.`,
    description: note.seoDescription,
    keywords: [note.primaryKeyword, ...note.keywords],
    alternates: {
      canonical: `/notas/${note.slug}`
    },
    openGraph: {
      title: note.seoTitle,
      description: note.seoDescription,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.seoDescription,
    image: `https://www.vandc.com.ar${note.image}`,
    datePublished: note.date,
    author: {
      "@type": "Person",
      name: "Van D.C."
    },
    publisher: {
      "@type": "Organization",
      name: "Van D.C."
    },
    mainEntityOfPage: `https://www.vandc.com.ar/notas/${note.slug}/`,
    keywords: [note.primaryKeyword, ...note.keywords].join(", ")
  };

  return (
    <main className="min-h-screen bg-[#fbf2ea] pt-32 text-[#241014]">
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
          <div className="space-y-12 text-[19px] leading-9 text-[#4f3432]">
            {note.content.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-5 text-[28px] font-[520] leading-tight tracking-[-0.025em] text-[#4a252b] sm:text-[34px]">
                  {section.heading}
                </h2>
                <div className="space-y-7">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-y border-[#dfbdb7] py-7">
            <p className="editorial-kicker text-[11px] text-[#b89050]">También puede interesarte</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {note.internalLinks.map((link) => (
                <Link
                  className="rounded-full border border-[#d9b4ad] px-4 py-2 text-sm text-[#6f4d4b] transition hover:border-[#b87982] hover:text-[#8c3e4c]"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
