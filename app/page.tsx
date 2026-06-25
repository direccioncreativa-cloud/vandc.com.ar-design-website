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
          <p className="mt-4 font-serif text-4xl text-charcoal">{artwork.title}</p>
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
      <section className="hidden relative min-h-[100svh] overflow-hidden bg-[#080707] pt-24">
        <div className="absolute inset-0">
          <Image
            alt="Van D.C. en una escena editorial oscura"
            className="object-cover object-[62%_center] grayscale"
            fill
            priority
            sizes="100vw"
            src="/images/home/Hero principal.png"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,transparent_0,rgba(8,7,7,.08)_24%,rgba(8,7,7,.62)_58%,rgba(8,7,7,.94)_100%),linear-gradient(90deg,rgba(8,7,7,.94),rgba(8,7,7,.58)_34%,rgba(8,7,7,.36)_62%,rgba(8,7,7,.9)),linear-gradient(0deg,rgba(8,7,7,.95),transparent_45%)]" />
          <div className="absolute inset-0 bg-[url('/images/textures/textura fondo.jpg')] bg-cover opacity-[0.07] mix-blend-screen" />
        </div>

        <p className="pointer-events-none absolute left-[14vw] top-[10vh] hidden font-serif text-[28vw] leading-none text-blush/[0.22] lg:block">
          ART
        </p>

        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1740px] items-end px-5 pb-10 sm:px-8 lg:px-14">
          <div className="w-full max-w-[620px] pb-8 lg:pb-16">
            <div className="mb-9 flex items-center gap-5">
              <p className="editorial-kicker text-xs text-blush">Artista visual</p>
              <span className="h-px w-16 bg-blush/70" />
            </div>
            <h1 className="font-serif text-[48px] leading-[0.96] text-ivory sm:text-6xl lg:text-[76px]">
              Elegir cómo habitar el <em className="text-blush">presente</em> es nuestra <em>obra más importante</em>
            </h1>
            <span className="mt-8 block h-px w-10 bg-blush/70" />
            <p className="mt-5 max-w-[390px] text-base leading-7 text-ivory/68">
              Mi trabajo explora la belleza de lo cotidiano, la memoria y las emociones que nos conectan como humanidad.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                className="editorial-kicker border border-blush/70 px-9 py-5 text-[11px] text-blush transition hover:bg-blush hover:text-charcoal"
                href="#obras"
              >
                Ver obras
              </Link>
              <Link
                className="editorial-kicker border-b border-blush/50 pb-2 text-[11px] text-blush transition hover:text-ivory"
                href="#acerca"
              >
                Conocer más
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <p className="editorial-kicker text-xs text-ivory">Van DC.</p>
              <span className="h-5 w-px bg-blush/70" />
              <p className="editorial-kicker text-xs text-blush">Buenos Aires</p>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal className="hidden mx-auto max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <div id="acerca" className="lg:sticky lg:top-28 lg:self-start">
          <p className="editorial-kicker text-xs text-roseOld">Van D.C.</p>
          <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">Arte para volver a mirar.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-smoke dark:text-[#d9cfc5]">
            Van D.C. crea desde Buenos Aires una obra sensible, femenina y contemporánea. Su universo cruza
            retrato, símbolo y emoción para hablar de presencia, calma, intuición y segundas oportunidades.
          </p>
          <p className="mt-8 border-l border-antiqueGold pl-5 font-serif text-3xl leading-tight text-roseOld dark:text-blush">
            Elegir cómo habitar el presente es nuestra obra más importante.
          </p>
        </div>

        <div className="relative min-h-[620px] overflow-hidden border border-[color:var(--line)] bg-nude/45 dark:bg-white/5">
          <Image
            alt="Retrato profesional de Van D.C."
            className="object-cover object-[center_18%]"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            src="/images/home/Van DC Artista Profesional.png"
          />
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden border-y border-[#ead9d5] bg-[#f1e2dd] py-16 text-charcoal lg:py-24">
        <div id="obras" className="mx-auto grid max-w-[1680px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.14fr_0.86fr] lg:px-14">
          <div className="relative z-10">
            <div className="mb-9">
              <p className="editorial-kicker text-xs text-roseOld">Selección curada</p>
              <span className="mt-5 block h-px w-12 bg-roseOld" />
              <h2 className="mt-6 font-serif text-[54px] leading-none sm:text-[78px] lg:text-[96px]">Obras destacadas</h2>
              <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-smoke">
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
                  <h3 className="mt-5 font-serif text-2xl">{artwork.title}</h3>
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
              <p className="max-w-sm font-serif text-xl leading-snug text-smoke">
                <span className="block text-5xl leading-none text-roseOld">“</span>
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
              src="/images/home/vandc.png"
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
          src="/images/home/evento-experiencia.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,238,232,.98)_0%,rgba(247,238,232,.9)_38%,rgba(247,238,232,.68)_100%)]" />

        <div id="colecciones" className="relative mx-auto grid max-w-[1680px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-14">
          <div className="self-center">
            <p className="editorial-kicker text-sm text-[#8d5960]">Colecciones y experiencias</p>
            <div className="mt-6 h-px w-80 max-w-full bg-[#c99b63]" />
            <h2 className="mt-10 max-w-2xl font-serif text-[54px] leading-[0.98] sm:text-[76px] lg:text-[88px]">
              Obras que abren mundos. Experiencias que los vuelven reales.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#8a5d5f]">
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
                  src="/images/collections/Portada Coleccion Elegirse.jpg"
                />
              </div>
              <h3 className="mt-7 font-serif text-5xl">Elegirse</h3>
              <p className="mt-3 text-xl text-[#8a5d5f]">Tres estados. Tres decisiones. Una misma mujer.</p>
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
                  src="/images/collections/Portada Coleccion Back Cat.jpg"
                />
              </div>
              <h3 className="mt-7 font-serif text-5xl">Black Cat Collection</h3>
              <p className="mt-3 text-xl text-[#8a5d5f]">Prejuicio, amor y segundas oportunidades.</p>
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
            <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">Experiencias artísticas</h2>
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
                <p className="font-serif text-5xl text-[#BFC1C2]">0{index + 1}</p>
                <h3 className="mt-8 font-serif text-3xl">{item}</h3>
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
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">Notas para mirar distinto</h2>
          </div>
          <Sparkles className="text-antiqueGold" size={30} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {notes.map((note) => (
            <article className="border-y border-[color:var(--line)] py-7" key={note.title}>
              <p className="editorial-kicker text-[10px] text-roseOld">{note.category}</p>
              <h3 className="mt-4 font-serif text-4xl leading-none">{note.title}</h3>
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

