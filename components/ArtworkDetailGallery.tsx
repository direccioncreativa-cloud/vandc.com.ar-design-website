"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ArtworkDetailGalleryProps = {
  images: string[];
  title: string;
};

export function ArtworkDetailGallery({ images, title }: ArtworkDetailGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [activeImageSize, setActiveImageSize] = useState({ width: 1200, height: 1500 });
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [expanded]);

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
          draggable={false}
          fill
          onLoad={(event) => {
            const { naturalHeight, naturalWidth } = event.currentTarget;

            if (naturalWidth && naturalHeight) {
              setActiveImageSize({ width: naturalWidth, height: naturalHeight });
            }
          }}
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

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label={`Vista ampliada de ${title}`}
            aria-modal="true"
            className="fixed inset-0 z-[80] flex cursor-zoom-out items-center justify-center p-5 sm:p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onPointerDown={() => setExpanded(false)}
            role="dialog"
            style={{ backgroundColor: "rgba(8, 7, 7, 0.94)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <button
              aria-label="Cerrar imagen ampliada"
              className="absolute right-4 top-4 z-20 grid h-12 w-12 cursor-pointer place-items-center rounded-full border-2 border-white bg-[#fffaf5] text-[#171313] shadow-[0_12px_36px_rgba(0,0,0,.5)] transition hover:scale-105 hover:bg-[#e8c7c8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c7c8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080707] sm:right-6 sm:top-6"
              onClick={(event) => {
                event.stopPropagation();
                setExpanded(false);
              }}
              onPointerDown={(event) => event.stopPropagation()}
              ref={closeButtonRef}
              type="button"
            >
              <X aria-hidden="true" size={24} strokeWidth={2.25} />
            </button>
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              aria-label={title}
              className="relative max-w-full cursor-default"
              exit={{ opacity: 0, scale: 0.9, y: 46 }}
              initial={{ opacity: 0, scale: 0.94, y: 28 }}
              onPointerDown={(event) => event.stopPropagation()}
              role="img"
              style={{
                aspectRatio: `${activeImageSize.width} / ${activeImageSize.height}`,
                backgroundImage: `url("${activeImage}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: `min(calc(100vw - 2.5rem), calc((100dvh - 6rem) * ${activeImageSize.width / activeImageSize.height}))`
              }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.16em] text-white/70">
              Click fuera de la obra para cerrar
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
