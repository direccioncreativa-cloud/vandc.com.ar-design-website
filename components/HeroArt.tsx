"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PARALLAX_STRENGTH = 18; // Ajuste de movimiento: 10px muy sutil, 25px más visible.

export function HeroArt() {
  const heroRef = useRef<HTMLElement>(null);
  const artTextRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    const artText = artTextRef.current;

    if (!hero || !artText) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !finePointer) return;

    function animate() {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      if (artText) {
        artText.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(event: MouseEvent) {
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      targetRef.current = {
        x: x * PARALLAX_STRENGTH,
        y: y * PARALLAX_STRENGTH
      };
    }

    function handleMouseLeave() {
      targetRef.current = { x: 0, y: 0 };
    }

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-art" id="inicio">
      <div className="hero-art__image">
        <Image
          alt="Fondo oscuro editorial"
          fill
          priority
          sizes="100vw"
          src="/images/home/hero-fondo.png"
        />
      </div>

      <div ref={artTextRef} aria-hidden="true" className="hero-art__text">
        <Image
          alt=""
          fill
          priority
          sizes="100vw"
          src="/images/home/hero-letras.png"
        />
      </div>

      <div className="hero-art__cutout">
        <Image
          alt="Van D.C. sentada en sillón"
          fill
          priority
          sizes="100vw"
          src="/images/home/hero-vandc-sillon.png"
        />
      </div>

      <div className="hero-art__shade" />

      <div className="hero-art__content">
        <div className="hero-art__copy">
          <div className="hero-art__kicker">Artista visual</div>
          <h1>
            Elegir cómo habitar el <em>presente</em> es nuestra <em>obra más importante</em>
          </h1>
          <p>
            Mi trabajo explora la belleza de lo cotidiano, la memoria y las emociones que nos conectan como humanidad.
          </p>
          <div className="hero-art__actions">
            <Link href="/obras">Ver obras</Link>
            <Link href="/acerca">Conocer más</Link>
          </div>
          <div className="hero-art__location">
            <span>Van DC.</span>
            <i />
            <span>Buenos Aires</span>
          </div>
        </div>
      </div>
    </section>
  );
}

