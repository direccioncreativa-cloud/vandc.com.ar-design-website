"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="mx-auto flex max-w-[1740px] items-center justify-between px-5 py-7 sm:px-8 lg:px-14">
        <Link aria-label="Ir al inicio" className="relative h-12 w-32 sm:h-14 sm:w-40" href="/">
          <Image
            alt="Van D.C."
            className="hidden object-contain"
            fill
            priority
            sizes="160px"
            src="/images/logos/logo Van DC Black.png"
          />
          <Image
            alt="Van D.C."
            className="object-contain"
            fill
            priority
            sizes="160px"
            src="/images/logos/logo Van DC White.png"
          />
        </Link>

        <nav className="hidden items-center gap-10 xl:gap-14 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              className="editorial-kicker text-[11px] text-ivory/72 transition hover:text-blush"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-0 lg:flex">
          <ThemeToggle />
          <Link
            className="editorial-kicker border border-blush/55 border-l-0 px-7 py-4 text-[11px] text-blush transition hover:bg-blush hover:text-charcoal"
            href={consultHref}
            target="_blank"
          >
            Consultar obra
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-full border border-blush/50 text-blush"
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
                className="py-2 font-serif text-2xl text-ivory"
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

