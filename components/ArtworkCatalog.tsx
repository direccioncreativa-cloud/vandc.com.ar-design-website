"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  type Artwork,
  type ArtworkFilter,
  filterOptions,
  getArtworkStatusLabel
} from "@/data/artworks";
import { filterOptionsEn, statusLabelsEn } from "@/data/artworks-en";

type ArtworkCatalogProps = {
  artworks: Artwork[];
  locale?: "es" | "en";
};

function isPublicDetail(value: string) {
  return value.trim() !== "" && !value.toLowerCase().includes("confirmar");
}

const collectionShortcuts: Array<{ label: string; value: ArtworkFilter; href: string }> = [
  { label: "# Elegirse", value: "coleccion-elegirse", href: "/obras?coleccion=elegirse" },
  { label: "# Black Cat Collection", value: "black-cat", href: "/obras?coleccion=black-cat" }
];

function getFilterFromCollection(collection: string | null): ArtworkFilter {
  if (collection === "black-cat") {
    return "black-cat";
  }

  if (collection === "elegirse") {
    return "coleccion-elegirse";
  }

  return "todas";
}

export function ArtworkCatalog({ artworks, locale = "es" }: ArtworkCatalogProps) {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<ArtworkFilter>("todas");

  useEffect(() => {
    setActiveFilter(getFilterFromCollection(searchParams.get("coleccion")));
  }, [searchParams]);

  const visibleArtworks =
    activeFilter === "todas"
      ? artworks
      : artworks.filter((artwork) => artwork.filters.includes(activeFilter));

  const options = locale === "en" ? filterOptionsEn : filterOptions;
  const basePath = locale === "en" ? "/en/artworks" : "/obras";
  const shortcuts = collectionShortcuts.map((item) => ({ ...item, label: locale === "en" && item.value === "coleccion-elegirse" ? "# Choosing Yourself" : item.label, href: `${basePath}?coleccion=${item.value === "black-cat" ? "black-cat" : "elegirse"}` }));
  return (
    <div>
      <div className="mb-8 border border-[#d8b99f]/55 bg-[#fffaf5]/60 p-5">
        <p className="editorial-kicker text-[10px] text-[#9b6268]">{locale === "en" ? "Explore by collection" : "Recorridos por colección"}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {shortcuts.map((shortcut) => {
            const selected = activeFilter === shortcut.value;

            return (
              <Link
                className={`editorial-kicker inline-flex items-center border px-5 py-3 text-[10px] transition ${
                  selected
                    ? "border-[#171313] bg-[#171313] text-[#fffaf5]"
                    : "border-[#c9a878]/65 bg-white/45 text-[#8d5960] hover:border-[#8d5960]"
                }`}
                href={shortcut.href}
                key={shortcut.value}
                onClick={() => setActiveFilter(shortcut.value)}
              >
                {shortcut.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mb-10 flex gap-3 overflow-x-auto border-b border-[#d8b99f]/50 pb-5">
        {options.map((filter) => {
          const selected = activeFilter === filter.value;

          return (
            <button
              className={`editorial-kicker shrink-0 border px-5 py-3 text-[10px] transition ${
                selected
                  ? "border-[#171313] bg-[#171313] text-[#fffaf5]"
                  : "border-[#c9a878]/55 bg-[#fffaf5]/55 text-[#8d5960] hover:border-[#8d5960]"
              }`}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mb-7 text-sm text-[#786a61]">
        {locale === "en" ? `${visibleArtworks.length} artwork${visibleArtworks.length === 1 ? "" : "s"} in this selection` : `${visibleArtworks.length} obra${visibleArtworks.length === 1 ? "" : "s"} en esta selección`}
      </p>

      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {visibleArtworks.map((artwork) => {
          const details = [
            [locale === "en" ? "Medium" : "Técnica", artwork.technique],
            [locale === "en" ? "Support" : "Soporte", artwork.support],
            [locale === "en" ? "Dimensions" : "Medida", artwork.size]
          ].filter(([, value]) => isPublicDetail(value));

          return (
            <Link
              className="group border border-[#dcc4ae] bg-[#fffaf5]/82 p-4 shadow-[0_22px_80px_rgba(62,42,32,.08)] transition hover:-translate-y-1 hover:border-[#b89050]"
              href={`${basePath}/${artwork.slug}`}
              key={artwork.id}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eaded2]">
                <Image
                  alt={artwork.title}
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={artwork.image}
                />
              </div>
              <div className="pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="editorial-kicker text-[10px] text-[#9b6268]">{artwork.collection}</p>
                  <p className="editorial-kicker text-[9px] text-[#b89050]">
                    {locale === "en" ? statusLabelsEn[artwork.status] : getArtworkStatusLabel(artwork.status)}
                  </p>
                </div>
                <h3 className="mt-3 font-serif text-[27px] font-[520] leading-none tracking-[-0.025em]">{artwork.title}</h3>
                {details.length ? (
                  <dl className="mt-5 grid gap-2 text-sm text-[#5f534d]">
                    {details.map(([label, value], index) => (
                      <div
                        className={`flex justify-between gap-4 ${index === 0 ? "border-t border-[#dcc4ae]/70 pt-3" : ""}`}
                        key={label}
                      >
                        <dt>{label}</dt>
                        <dd className="text-right text-[#211a17]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <span className="editorial-kicker mt-6 inline-flex items-center gap-4 text-[10px] text-[#8d5960]">
                  {locale === "en" ? "View details" : "Ver ficha"} <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
