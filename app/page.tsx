import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { featuredArtworks, notes } from "@/data/home";
import { SectionReveal } from "@/components/SectionReveal";
import { HeroArt } from "@/components/HeroArt";
import { CtaParallax } from "@/components/CtaParallax";
import { whatsappLink } from "@/lib/whatsapp";

function ArtworkImage({ artwork }: { artwork: (typeof featuredArtworks)[number] }) {
  if (!artwork.image) {
    return (
      <div className="grid h-full min-h-[360px] place-items-center bg-[linear-gradient(135deg,#FAF7F2,#E8C7C8_54%,#B87982)] p-8 text-center">
        <div>
          <p className="editorial-kicker text-xs text-charcoal/65">Imagen en preparación</p>
          <p className="mt-4 font-serif text-3xl font-[520] tracking-[-0.025em] text-charcoal">{artwork.title}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={`Obra ${artwork.title} de Van D.C.`}
      className="object-cover transition duration-700 group-hover:scale-[1.035]"
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
      src={artwork.image}
    />
  );
}

export default function Home() {
  return (
    <main id="inicio" className="overflow-hidden bg-ivory text-charcoal dark:bg-[#080707] dark:text-ivory">
      <HeroArt />
      <SectionReveal className="relative overflow-hidden border-y border-[#ead9d5] bg-[#f1e2dd] py-16 text-charcoal lg:py-24">
        <div id="obras" className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.14fr_0.86fr] lg:px-14">
          <div className="relative z-10">
            <div className="mb-9">
              <p className="editorial-kicker text-xs text-roseOld">Selección curada</p>
              <span className="mt-5 block h-px w-12 bg-roseOld" />
              <h2 className="mt-6 font-serif text-[44px] font-[430] leading-[0.96] tracking-[-0.035em] sm:text-[62px] lg:text-[74px]">Obras destacadas</h2>
              <p className="mt-6 max-w-xl text-xl font-[430] leading-snug tracking-[-0.015em] text-smoke">
                Piezas creadas para acompañar espacios, emociones y momentos que merecen permanecer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featuredArtworks.map((artwork) => (
                <article
                  className="group bg-[#f8eee9]/82 p-4 shadow-[0_18px_40px_rgba(17,17,17,0.12)] ring-1 ring-black/5"
                  key={artwork.title}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e9d7d1]">
                    <ArtworkImage artwork={artwork} />
                  </div>
                  <h3 className="mt-5 font-serif text-[23px] font-[520] leading-tight tracking-[-0.02em]">{artwork.title}</h3>
                  <p className="mt-3 min-h-[44px] text-sm leading-6 text-smoke">{artwork.technique}</p>
                  <span className="mt-4 block h-px w-8 bg-roseOld" />
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
              <Link
                className="editorial-kicker inline-flex border border-roseOld/55 px-10 py-5 text-xs text-roseOld transition hover:bg-roseOld hover:text-ivory"
                href="/colecciones"
              >
                Ver colección <ArrowUpRight className="ml-8" size={18} />
              </Link>
              <p className="max-w-sm text-lg font-[430] leading-snug tracking-[-0.01em] text-smoke">
                <span className="block text-4xl leading-none text-roseOld">“</span>
                Cada obra nace de un estado interior y busca encontrarse con alguien que también elige habitar su mundo con intención.
              </p>
            </div>
          </div>

          <div className="relative min-h-[680px] overflow-hidden lg:min-h-[820px]">
            <Image
              alt="Van D.C. pintando en su taller"
              className="object-cover object-center transition duration-[1200ms] ease-out hover:scale-110"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/images/home/segunda-seccion-vertical.webp"
            />
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#f7eee8] py-20 text-[#744247] lg:py-28">
        <Image
          alt="Experiencia artística en evento"
          className="absolute inset-0 object-cover object-right opacity-[0.18] grayscale"
          fill
          sizes="100vw"
          src="/images/home/evento-experiencia.webp"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,238,232,.98)_0%,rgba(247,238,232,.9)_38%,rgba(247,238,232,.68)_100%)]" />

        <div id="colecciones" className="relative mx-auto grid max-w-[1680px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-14">
          <div className="self-center">
            <p className="editorial-kicker text-sm text-[#8d5960]">Colecciones y experiencias</p>
            <div className="mt-6 h-px w-80 max-w-full bg-[#c99b63]" />
            <h2 className="mt-10 max-w-2xl font-serif text-[42px] font-[430] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[68px]">
              Obras que abren mundos. Experiencias que los vuelven reales.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8a5d5f]">
              Las colecciones reúnen series de obra con una narrativa y una emoción en común. Las experiencias transforman ese universo en encuentros para contemplar, crear y conectar con el arte de una manera viva.
            </p>

            <div className="mt-10 grid gap-8 text-[#744247]">
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#c99b63] text-[#c99b63]">▧</span>
                <p><strong className="editorial-kicker text-sm">Colecciones</strong> · <em>series de obra con identidad propia</em></p>
              </div>
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#c99b63] text-[#c99b63]">♡</span>
                <p><strong className="editorial-kicker text-sm">Experiencias</strong> · <em>encuentros artísticos para vivir el universo de la obra</em></p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <Link className="editorial-kicker border border-[#c99b63] px-10 py-5 text-xs text-[#8d5960]" href="/colecciones">
                Ver colecciones →
              </Link>
              <Link className="editorial-kicker border border-[#c99b63] px-10 py-5 text-xs text-[#8d5960]" href="/experiencias">
                Ver experiencias →
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/colecciones/elegirse">
              <p className="editorial-kicker mx-auto mb-4 w-fit rounded-full border border-[#c99b63] px-9 py-3 text-xs text-[#8d5960]">Colección</p>
              <div className="relative aspect-[0.707] overflow-hidden border border-[#c99b63] bg-[#f5ece4] p-2 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  alt="Portada de la colección Elegirse"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 28vw, 86vw"
                  src="/images/collections/portada-coleccion-elegirse.webp"
                />
              </div>
              <h3 className="mt-7 font-serif text-[38px] font-[520] leading-none tracking-[-0.03em]">Elegirse</h3>
              <p className="mt-3 text-lg text-[#8a5d5f]">Tres estados. Tres decisiones. Una misma mujer.</p>
              <span className="mx-auto mt-8 block h-px w-44 bg-[#c99b63]" />
            </Link>

            <Link href="/colecciones/black-cat">
              <p className="editorial-kicker mx-auto mb-4 w-fit rounded-full border border-[#c99b63] px-9 py-3 text-xs text-[#8d5960]">Experiencia + colección</p>
              <div className="relative aspect-[0.707] overflow-hidden border border-[#c99b63] bg-[#111] p-2 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  alt="Portada de Black Cat Collection"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 28vw, 86vw"
                  src="/images/collections/portada-coleccion-black-cat.webp"
                />
              </div>
              <h3 className="mt-7 font-serif text-[38px] font-[520] leading-none tracking-[-0.03em]">Black Cat Collection</h3>
              <p className="mt-3 text-lg text-[#8a5d5f]">Prejuicio, amor y segundas oportunidades.</p>
              <span className="mx-auto mt-8 block h-px w-44 bg-[#c99b63]" />
            </Link>
          </div>
        </div>
      </SectionReveal>

      <CtaParallax />

      <SectionReveal className="border-y border-[#cfd0d0] bg-[#F7F7F5] py-20 text-[#121212] dark:bg-[#121212] dark:text-[#F7F7F5] lg:py-28">
        <div id="experiencias" className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="editorial-kicker text-xs text-[#6D6D6D]">Ritual creativo</p>
            <h2 className="mt-4 font-serif text-[38px] font-[430] leading-none tracking-[-0.03em] sm:text-[48px]">Experiencias artísticas</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4f4f4f] dark:text-[#d7d7d7]">
              Encuentros para crear desde una historia, una emoción y una obra. La experiencia toma el universo de una
              colección y lo convierte en una creación personal guiada paso a paso.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-[#121212] px-6 py-3 text-sm text-[#F7F7F5] transition hover:bg-[#6D6D6D] dark:bg-[#F7F7F5] dark:text-[#121212]"
              href={whatsappLink("Hola Van, quiero contratar una experiencia artística.")}
              target="_blank"
            >
              Contratar experiencia
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["La historia", "La pregunta", "La creación", "La obra"].map((item, index) => (
              <div className="border border-[#BFC1C2] bg-white/55 p-6 dark:bg-white/5" key={item}>
                <p className="font-serif text-[36px] font-[420] tracking-[-0.02em] text-[#BFC1C2]">0{index + 1}</p>
                <h3 className="mt-8 font-serif text-2xl font-[520] tracking-[-0.02em]">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f5f5f] dark:text-[#d7d7d7]">
                  {index === 0 && "Presentación del universo de la colección y su recorrido emocional."}
                  {index === 1 && "Una consigna simple para abrir la mirada y conectar con la experiencia."}
                  {index === 2 && "Pintura guiada paso a paso, sin necesidad de experiencia previa."}
                  {index === 3 && "Cada participante se lleva su pieza terminada como recuerdo de un estado elegido."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div id="notas" className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="editorial-kicker text-xs text-roseOld">Desde el taller</p>
            <h2 className="mt-4 font-serif text-[38px] font-[430] tracking-[-0.03em] sm:text-[48px]">Notas para mirar distinto</h2>
          </div>
          <Sparkles className="text-antiqueGold" size={30} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {notes.map((note) => (
            <article className="border-y border-[color:var(--line)] py-7" key={note.title}>
              <p className="editorial-kicker text-[10px] text-roseOld">{note.category}</p>
              <h3 className="mt-4 font-serif text-[30px] font-[520] leading-none tracking-[-0.025em]">{note.title}</h3>
              <p className="mt-5 text-sm leading-7 text-smoke dark:text-[#d9cfc5]">{note.excerpt}</p>
              <Link className="mt-7 inline-flex text-sm text-roseOld" href="/notas">
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </SectionReveal>
    </main>
  );
}
