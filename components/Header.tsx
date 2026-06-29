"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const nav = [
  ["Inicio", "/"],
  ["Obras", "/obras"],
  ["Colecciones", "/colecciones"],
  ["Experiencias", "/experiencias"],
  ["Acerca de Van", "/acerca"],
  ["Notas", "/notas"],
  ["Contacto", "/contacto"]
];

const consultHref = whatsappLink("Hola Van, quiero consultar por una obra.");

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDarkHeader = pathname === "/" || pathname?.startsWith("/acerca");
  const navTextClass = isDarkHeader
    ? "text-ivory drop-shadow-[0_1px_10px_rgba(0,0,0,.45)]"
    : "text-charcoal drop-shadow-[0_1px_10px_rgba(250,247,242,.72)]";
  const consultClass = isDarkHeader
    ? "border-ivory/45 text-ivory hover:border-blush hover:bg-blush hover:text-charcoal"
    : "border-charcoal/35 text-charcoal hover:border-blush hover:bg-blush hover:text-charcoal";
  const blackLogoClass = isDarkHeader ? "hidden" : "hidden lg:block";
  const whiteLogoClass = isDarkHeader ? "block" : "block lg:hidden";

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-[#080707]/96 lg:bg-transparent">
      <div className="mx-auto flex max-w-[1740px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Link aria-label="Ir al inicio" className="relative h-12 w-32 sm:h-14 sm:w-40" href="/">
          <Image
            alt="Van D.C."
            className={`object-contain ${blackLogoClass}`}
            fill
            priority
            sizes="160px"
            src="/images/logos/logo Van DC Black.png"
          />
          <Image
            alt="Van D.C."
            className={`object-contain ${whiteLogoClass}`}
            fill
            priority
            sizes="160px"
            src="/images/logos/logo Van DC White.png"
          />
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-11 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              className={`editorial-kicker text-[11px] transition hover:text-blush focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush ${navTextClass}`}
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-0 lg:flex">
          <Link
            className={`editorial-kicker border px-7 py-4 text-[11px] transition focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush ${consultClass}`}
            href={consultHref}
            target="_blank"
          >
            Consultar obra
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/45 bg-transparent text-ivory transition hover:border-blush hover:text-blush focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-blush/20 bg-[#080707]/96 px-4 py-5 text-ivory lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {nav.map(([label, href]) => (
              <Link
                className="py-2 font-serif text-2xl font-[520] tracking-[-0.02em] text-ivory"
                href={href}
                key={label}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="mt-3 border border-blush px-5 py-3 text-center text-sm text-blush"
              href={consultHref}
              onClick={() => setOpen(false)}
              target="_blank"
            >
              Consultar obra
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
