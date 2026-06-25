"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

type ArtworkDetailGalleryProps = {
  images: string[];
  title: string;
};

export function ArtworkDetailGallery({ images, title }: ArtworkDetailGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div>
      <button
        aria-label={`Ampliar imagen de ${title}`}
        className="relative block aspect-[4/5] w-full overflow-hidden border border-[#d6b7a1] bg-[#eaded2]"
        onClick={() => setExpanded(true)}
        type="button"
      >
        <Image
          alt={title}
          className="object-contain p-3"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          src={activeImage}
        />
      </button>

      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              aria-label={`Ver imagen ${index + 1} de ${title}`}
              className={`relative aspect-square overflow-hidden border bg-[#eaded2] transition ${
                activeIndex === index ? "border-[#8d5960]" : "border-[#d6b7a1] opacity-75 hover:opacity-100"
              }`}
              key={image}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image alt={`${title} ${index + 1}`} className="object-cover" fill sizes="120px" src={image} />
            </button>
          ))}
        </div>
      ) : null}

      {expanded ? (
        <div className="fixed inset-0 z-[80] bg-[#080707]/92 p-5 sm:p-8">
          <button
            aria-label="Cerrar imagen ampliada"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-[#e8c7c8]/70 text-[#e8c7c8]"
            onClick={() => setExpanded(false)}
            type="button"
          >
            <X size={20} />
          </button>
          <div className="relative mx-auto h-full max-w-[1200px]">
            <Image alt={title} className="object-contain" fill sizes="100vw" src={activeImage} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
