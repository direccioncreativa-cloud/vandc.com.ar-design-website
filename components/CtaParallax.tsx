"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { whatsappLink } from "@/lib/whatsapp";

export function CtaParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let frame = 0;

    function update() {
      if (!section || !image) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const y = (progress - 0.5) * 34;
      image.style.transform = `translate3d(0, ${y}px, 0) scale(0.86)`;
      frame = 0;
    }

    function onScroll() {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[360px] overflow-hidden bg-[#eadfcd] py-14 text-[#7c5750] lg:py-16">
      <div ref={imageRef} className="absolute inset-y-[-40px] right-[-5vw] w-[58vw] max-w-[980px] min-w-[560px] will-change-transform">
        <Image
          alt="Pinceles y pintura para obra a medida"
          className="object-contain object-right"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          src="/images/home/cta-obra-a-medida.png"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(234,223,205,.98)_0%,rgba(234,223,205,.94)_44%,rgba(234,223,205,.72)_66%,rgba(234,223,205,.28)_100%)]" />
      <div className="relative mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-14">
        <div className="max-w-3xl">
          <p className="editorial-kicker text-xs text-[#8d5960]">Obras a medida</p>
          <div className="mt-4 flex items-center gap-3 text-[#b89050]">
            <span className="h-px w-20 bg-[#b89050]" />
            <span>✣</span>
            <span className="h-px w-20 bg-[#b89050]" />
          </div>
          <h2 className="mt-8 font-serif text-[40px] leading-none sm:text-[54px] lg:text-[64px]">
            Pedí una obra personalizada
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 tracking-[0.05em] text-[#7c5750]">
            Creamos piezas únicas pensadas para tu espacio, tu historia o una temática especial.
          </p>
          <Link
            className="editorial-kicker mt-9 inline-flex min-w-[320px] items-center justify-between border border-[#b89050] px-8 py-5 text-xs text-[#8d5960] transition hover:bg-[#8d5960] hover:text-[#faf7f2]"
            href={whatsappLink("Hola Van, quiero consultar por una obra personalizada.")}
            target="_blank"
          >
            Consultar obra a medida <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

