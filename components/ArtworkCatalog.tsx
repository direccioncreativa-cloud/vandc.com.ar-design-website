"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  type Artwork,
  type ArtworkFilter,
  filterOptions,
  getArtworkStatusLabel
} from "@/data/artworks";

type ArtworkCatalogProps = {
  artworks: Artwork[];
};

export function ArtworkCatalog({ artworks }: ArtworkCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<ArtworkFilter>("todas");

  const visibleArtworks =
    activeFilter === "todas"
      ? artworks
      : artworks.filter((artwork) => artwork.filters.includes(activeFilter));

  return (
    <div>
      <div className="mb-10 flex gap-3 overflow-x-auto border-b border-[#d8b99f]/50 pb-5">
        {filterOptions.map((filter) => {
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
        {visibleArtworks.length} obra{visibleArtworks.length === 1 ? "" : "s"} en esta selección
      </p>

      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {visibleArtworks.map((artwork) => (
          <Link
            className="group border border-[#dcc4ae] bg-[#fffaf5]/82 p-4 shadow-[0_22px_80px_rgba(62,42,32,.08)] transition hover:-translate-y-1 hover:border-[#b89050]"
            href={`/obras/${artwork.slug}`}
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
                  {getArtworkStatusLabel(artwork.status)}
                </p>
              </div>
              <h3 className="mt-3 font-serif text-3xl font-normal leading-none">{artwork.title}</h3>
              <dl className="mt-5 grid gap-2 text-sm text-[#5f534d]">
                <div className="flex justify-between gap-4 border-t border-[#dcc4ae]/70 pt-3">
                  <dt>Técnica</dt>
                  <dd className="text-right text-[#211a17]">{artwork.technique}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Soporte</dt>
                  <dd className="text-right text-[#211a17]">{artwork.support}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Medida</dt>
                  <dd className="text-right text-[#211a17]">{artwork.size}</dd>
                </div>
              </dl>
              <span className="editorial-kicker mt-6 inline-flex items-center gap-4 text-[10px] text-[#8d5960]">
                Ver ficha <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
