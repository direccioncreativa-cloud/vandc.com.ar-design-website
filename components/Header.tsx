"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { alternateLocalePath, localizedPath, type SiteLocale } from "@/lib/locale";

const navEs = [
  ["Inicio", "/"],
  ["Obras", "/obras"],
  ["Colecciones", "/colecciones"],
  ["Experiencias", "/experiencias"],
  ["Acerca de Van", "/acerca"],
  ["Notas", "/notas"],
  ["Contacto", "/contacto"]
];

const navEn = [
  ["Home", "/"],
  ["Artworks", "/obras"],
  ["Collections", "/colecciones"],
  ["Experiences", "/experiencias"],
  ["About Van", "/acerca"],
  ["Journal", "/notas"],
  ["Contact", "/contacto"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale: SiteLocale = pathname?.startsWith("/en") ? "en" : "es";
  const nav = locale === "en" ? navEn : navEs;
  const consultHref = whatsappLink(locale === "en" ? "Hi Van, I would like to inquire about an artwork." : "Hola Van, quiero consultar por una obra.");
  const isExperiencesHeader = pathname?.startsWith("/experiencias") || pathname?.startsWith("/en/experiences");
  const isDarkHeader = pathname === "/" || pathname === "/en" || pathname?.startsWith("/acerca") || pathname?.startsWith("/en/about");
  const navTextClass = isDarkHeader
    ? "text-ivory drop-shadow-[0_1px_10px_rgba(0,0,0,.45)]"
    : "text-charcoal drop-shadow-[0_1px_10px_rgba(250,247,242,.72)]";
  const consultClass = isDarkHeader
    ? "border-ivory/45 text-ivory hover:border-blush hover:bg-blush hover:text-charcoal"
    : "border-charcoal/35 text-charcoal hover:border-blush hover:bg-blush hover:text-charcoal";
  const blackLogoClass = isDarkHeader ? "hidden" : "hidden lg:block";
  const whiteLogoClass = isDarkHeader ? "block" : "block lg:hidden";

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 bg-[#080707]/96 ${
        isExperiencesHeader ? "lg:border-b lg:border-[#dfbdb7]/55 lg:bg-[#fbf2ea]/96 lg:backdrop-blur-md" : "lg:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1740px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Link aria-label={locale === "en" ? "Go to home" : "Ir al inicio"} className="relative h-12 w-32 sm:h-14 sm:w-40" href={localizedPath("/", locale)}>
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
              href={localizedPath(href, locale)}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-0 lg:flex">
          <Link className={`editorial-kicker border-y border-l px-4 py-4 text-[10px] transition ${consultClass}`} href={alternateLocalePath(pathname || "/")}>
            {locale === "en" ? "ES" : "EN"}
          </Link>
          <Link
            className={`editorial-kicker border px-7 py-4 text-[11px] transition focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush ${consultClass}`}
            href={consultHref}
            target="_blank"
          >
            {locale === "en" ? "Inquire" : "Consultar obra"}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label={open ? (locale === "en" ? "Close menu" : "Cerrar menú") : (locale === "en" ? "Open menu" : "Abrir menú")}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/45 bg-transparent text-ivory transition hover:border-blush hover:text-blush focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-blush/20 bg-[#080707] px-4 py-5 text-ivory shadow-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {nav.map(([label, href]) => (
              <Link
                className="py-2 font-serif text-2xl font-[520] tracking-[-0.02em] text-ivory"
                href={localizedPath(href, locale)}
                key={label}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="mt-2 py-2 font-serif text-lg text-[#e8c7c8]"
              href={alternateLocalePath(pathname || "/")}
              onClick={() => setOpen(false)}
            >
              {locale === "en" ? "Español" : "English"}
            </Link>
            <Link
              className="mt-3 border border-blush px-5 py-3 text-center text-sm text-blush"
              href={consultHref}
              onClick={() => setOpen(false)}
              target="_blank"
            >
              {locale === "en" ? "Inquire about an artwork" : "Consultar obra"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
