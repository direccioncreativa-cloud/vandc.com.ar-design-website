import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ArtworkDetailGallery } from "@/components/ArtworkDetailGallery";
import { artworks, getArtworkBySlug, getArtworkStatusLabel } from "@/data/artworks";
import { whatsappLink } from "@/lib/whatsapp";

type ArtworkPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  const details = [
    ["Colección", artwork.collection],
    ["Técnica", artwork.technique],
    ["Soporte", artwork.support],
    ["Medida", artwork.size],
    ["Estado", getArtworkStatusLabel(artwork.status)],
    ["Año", artwork.year ?? "A confirmar"]
  ];
  const consultHref = whatsappLink(`Hola Van, quiero consultar el valor de la obra ${artwork.title}.`);

  return (
    <main className="overflow-hidden bg-[#f8f1ea] text-[#171313]">
      <section className="relative px-5 pb-14 pt-36 sm:px-8 lg:px-14 lg:pb-20">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.1]" />
        <div className="relative mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ArtworkDetailGallery images={artwork.gallery} title={artwork.title} />

          <div className="lg:sticky lg:top-28">
            <p className="editorial-kicker text-xs text-[#9b6268]">Ficha de obra</p>
            <span className="mt-5 block h-px w-20 bg-[#b89050]" />
            <h1 className="mt-8 font-serif text-[42px] font-[430] leading-none tracking-[-0.035em] sm:text-[64px]">{artwork.title}</h1>
            <p className="mt-5 text-base font-[520] leading-8 text-[#9b6268]">{artwork.collection}</p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f534d]">{artwork.description}</p>

            {artwork.quote ? (
              <blockquote className="mt-8 border-l border-[#b89050] pl-6 font-serif text-[24px] font-[430] leading-tight tracking-[-0.02em] text-[#8d5960]">
                “{artwork.quote}”
              </blockquote>
            ) : null}

            <dl className="mt-10 grid gap-3 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div className="border border-[#d6b7a1] bg-[#fffaf5]/82 p-5" key={label}>
                  <dt className="editorial-kicker text-[10px] text-[#9b6268]">{label}</dt>
                  <dd className="mt-3 text-sm leading-6 text-[#2a211d]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                className="editorial-kicker inline-flex items-center justify-center border border-[#8d5960] bg-[#8d5960] px-7 py-5 text-[11px] text-[#fffaf5] transition hover:bg-[#171313] hover:border-[#171313]"
                href={consultHref}
                target="_blank"
              >
                Consultar valor <ArrowUpRight className="ml-7" size={16} />
              </Link>
              <Link
                className="editorial-kicker inline-flex items-center justify-center border border-[#b89050]/70 px-7 py-5 text-[11px] text-[#8d5960] transition hover:bg-[#b89050] hover:text-[#171313]"
                href="/obras"
              >
                Volver a obras
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
