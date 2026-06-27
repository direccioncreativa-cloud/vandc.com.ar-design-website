import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const elegirseWorks = [
  ["Paz Interior", "propone encontrar calma en medio del ruido."],
  ["Intuici\u00f3n", "invita a volver a confiar en aquello que a\u00fan no puede verse."],
  ["Actitud", "recuerda que avanzar tambi\u00e9n puede ser un acto de voluntad."]
];

const blackCatChapters = [
  ["I", "Retrato l\u00fadico", "El prejuicio"],
  ["II", "Sombras de Confianza", "Apertura"],
  ["III", "Serena Intuici\u00f3n", "Complicidad"],
  ["IV", "Abrazo Refugio", "El refugio"]
];

export default function ColeccionesPage() {
  return (
    <main className="overflow-hidden bg-[#f7eee8] pt-28 text-[#221f1d]">
      <section className="relative overflow-hidden border-b border-[#d8b177]/25 bg-[#f8f0e9] px-5 py-20 text-center sm:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.08]" />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#d59b9d]/20 blur-3xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#c99b63]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <p className="editorial-kicker text-sm text-[#744247]">Colecciones</p>
          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-4 text-[#b89050]">
            <span className="h-px flex-1 bg-[#b89050]/60" />
            <span className="text-xs">{"\u25c6"}</span>
            <span className="h-px flex-1 bg-[#b89050]/60" />
          </div>
          <h1 className="mt-5 font-serif text-[48px] font-[430] leading-none tracking-[-0.04em] text-[#171514] sm:text-[72px] lg:text-[86px]">
            Colecciones
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5d504b]">
            Cada colecci&oacute;n re&uacute;ne obras, s&iacute;mbolos y estados interiores en un recorrido propio.
            Aqu&iacute; la obra no se presenta como pieza suelta, sino como un universo visual con identidad,
            emoci&oacute;n y narrativa.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf5] px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_70%_50%,rgba(216,155,157,.22),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[0.92fr_1fr] lg:px-8">
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-3 border border-[#c99b63]/35" />
            <div className="relative aspect-[0.707] overflow-hidden bg-[#efe5dc] shadow-[0_22px_70px_rgba(80,60,50,.16)]">
              <Image
                alt="Portada Coleccion Elegirse"
                className="object-contain"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                src="/images/collections/portada-coleccion-elegirse.webp"
              />
            </div>
          </div>

          <div className="max-w-2xl lg:pl-8">
            <p className="editorial-kicker text-sm text-[#b87982]">Colecci&oacute;n 01</p>
            <div className="mt-5 flex max-w-[170px] items-center gap-4 text-[#b89050]">
              <span className="h-px flex-1 bg-[#b89050]/70" />
              <span className="text-xs">{"\u25c6"}</span>
              <span className="h-px flex-1 bg-[#b89050]/70" />
            </div>
            <h2 className="mt-7 font-serif text-[42px] font-[430] leading-none tracking-[-0.035em] text-[#171514] sm:text-[58px]">
              Elegirse
            </h2>
            <p className="mt-4 max-w-xl text-xl font-[430] leading-snug tracking-[-0.015em] text-[#b87982]">
              Tres estados. Tres decisiones. Una misma mujer.
            </p>
            <span className="mt-7 block h-px w-44 bg-[#b89050]/70" />
            <p className="mt-8 text-base leading-8 text-[#4f403d]">
              Elegirse nace de un proceso de observaci&oacute;n y regreso hacia adentro. Durante mucho tiempo,
              la calma, la confianza y la actitud parec&iacute;an depender de lo externo. Esta colecci&oacute;n
              propone otro camino: aprender a mirar, volver al interior y reconocer que algunos estados tambi&eacute;n
              pueden elegirse.
            </p>
            <p className="mt-6 border-l border-[#b89050]/70 pl-5 font-serif text-[25px] font-[430] leading-tight tracking-[-0.02em] text-[#744247]">
              No son retratos.<br />Son estados elegidos.
            </p>

            <div className="mt-8 grid gap-4">
              {elegirseWorks.map(([title, copy]) => (
                <p className="text-sm leading-7 text-[#4f403d]" key={title}>
                  <strong className="editorial-kicker mr-2 text-[#b87982]">{title}</strong>
                  {copy}
                </p>
              ))}
            </div>

            <div className="mt-8 inline-flex flex-wrap items-center bg-[#f0dfd8] px-6 py-4 text-xs uppercase tracking-[0.12em] text-[#4f403d]">
              <span>Paz Interior</span>
              <span className="mx-5 text-[#b89050]">|</span>
              <span>Intuici&oacute;n</span>
              <span className="mx-5 text-[#b89050]">|</span>
              <span>Actitud</span>
            </div>

            <Link
              className="editorial-kicker mt-8 inline-flex items-center gap-8 bg-[#171514] px-8 py-5 text-xs text-[#d8b177] transition hover:bg-[#744247] hover:text-[#fffaf5]"
              href="/colecciones/elegirse"
            >
              Ver colecci&oacute;n <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9ddd2] px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.08]" />
        <div className="absolute bottom-0 right-0 h-[44%] w-[56%] bg-[radial-gradient(circle_at_70%_80%,rgba(17,17,17,.34),transparent_58%)]" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="editorial-kicker text-sm text-[#b87982]">Colecci&oacute;n 02</p>
            <div className="mt-5 flex max-w-[170px] items-center gap-4 text-[#b89050]">
              <span className="h-px flex-1 bg-[#b89050]/70" />
              <span className="text-xs">{"\u25c6"}</span>
              <span className="h-px flex-1 bg-[#b89050]/70" />
            </div>
            <h2 className="mt-7 font-serif text-[40px] font-[430] leading-none tracking-[-0.035em] text-[#171514] sm:text-[56px]">
              Black Cat <em className="not-italic text-[#744247]">Collection</em>
            </h2>
            <p className="mt-4 max-w-xl text-xl font-[430] leading-snug tracking-[-0.015em] text-[#b87982]">
              Una serie sobre prejuicio, amor y segundas oportunidades.
            </p>
            <span className="mt-7 block h-px w-44 bg-[#b89050]/70" />
            <div className="mt-8 grid gap-5 text-base leading-8 text-[#3f3834]">
              <p>
                Black Cat Collection nace de la tensi&oacute;n entre abandono y belleza. Durante siglos, el gato negro
                fue asociado a la mala suerte, al misterio y a lo que no se comprend&iacute;a. Esta colecci&oacute;n
                transforma ese s&iacute;mbolo en un recorrido emocional sobre la espera, la confianza, el v&iacute;nculo
                y el refugio.
              </p>
              <p>
                No se trata solo de gatos. Se trata de amor, prejuicio y segundas oportunidades. De esa mirada que
                llega tarde, pero llega. Y cuando llega, cambia todo.
              </p>
            </div>

            <div className="mt-9 grid gap-3">
              {blackCatChapters.map(([number, title, state]) => (
                <div className="grid grid-cols-[54px_1fr] items-baseline gap-5" key={number}>
                  <span className="font-serif text-[32px] font-[430] tracking-[-0.02em] text-[#b87982]">{number}</span>
                  <p className="text-lg text-[#221f1d]">
                    <strong>{title}</strong>
                    <span className="mx-2 text-[#b89050]">·</span>
                    <em className="not-italic text-[#6d5d57]">{state}</em>
                  </p>
                </div>
              ))}
            </div>

            <Link
              className="editorial-kicker mt-10 inline-flex items-center gap-8 bg-[#171514] px-8 py-5 text-xs text-[#d8b177] transition hover:bg-[#744247] hover:text-[#fffaf5]"
              href="/colecciones/black-cat"
            >
              Ver colecci&oacute;n <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:order-last">
            <div className="absolute -inset-3 border border-[#c99b63]/45" />
            <div className="relative aspect-[0.707] overflow-hidden bg-[#111] shadow-[0_26px_80px_rgba(17,17,17,.28)]">
              <Image
                alt="Portada Black Cat Collection"
                className="object-contain"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                src="/images/collections/portada-coleccion-black-cat.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffaf5] px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.06]" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-serif text-[34px] font-[430] leading-tight tracking-[-0.03em] text-[#744247] sm:text-[46px]">
            Cada colecci&oacute;n es una forma de entrar a una historia.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5d504b]">
            Pod&eacute;s recorrerlas desde sus obras, sus s&iacute;mbolos o desde aquello que despiertan en vos.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              className="editorial-kicker border border-[#171514] bg-[#171514] px-8 py-5 text-xs text-[#fffaf5] transition hover:bg-[#744247] hover:border-[#744247]"
              href="/obras"
            >
              Ver obras
            </Link>
            <Link
              className="editorial-kicker border border-[#b89050]/80 px-8 py-5 text-xs text-[#744247] transition hover:bg-[#b89050] hover:text-[#fffaf5]"
              href={whatsappLink("Hola Van, quiero consultar por una obra.")}
              target="_blank"
            >
              Consultar una obra
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
