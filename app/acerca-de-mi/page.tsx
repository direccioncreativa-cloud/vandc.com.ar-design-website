import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { whatsappLink } from "@/lib/whatsapp";

export default function AcercaDeMiPage() {
  return (
    <main className="overflow-hidden bg-[#120f12] text-[#f4efe7]">
      <section className="relative min-h-[92svh] overflow-hidden bg-[#120f12] pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(184,121,130,.22),transparent_34%),linear-gradient(115deg,#120f12_0%,#181114_50%,#080707_100%)]" />
        <div className="absolute inset-0 bg-[url('/images/textures/textura fondo.jpg')] bg-cover opacity-[0.08] mix-blend-screen" />
        <div className="absolute right-8 top-28 hidden h-[56vh] w-px rotate-[14deg] bg-[#b89050]/55 lg:block" />

        <div className="relative mx-auto grid min-h-[calc(92svh-8rem)] max-w-[1680px] items-center gap-12 px-5 pb-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5">
              <p className="editorial-kicker text-xs text-[#e8c7c8]">Acerca de m&iacute;</p>
              <span className="h-px w-28 bg-[#b89050]/75" />
              <span className="text-[#b89050]">&#10021;</span>
            </div>
            <h1 className="mt-8 font-serif text-[52px] leading-[0.96] text-[#f4efe7] sm:text-[76px] lg:text-[92px]">
              El arte como forma de habitar el <em className="text-[#e8c7c8]">presente</em>
            </h1>
            <span className="mt-8 block h-px w-16 bg-[#b89050]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d9cfc5]">
              Soy Van D.C., artista visual argentina nacida en Buenos Aires. Pinto para transformar emociones en
              presencia y crear obras que acompa&ntilde;en espacios, historias y formas nuevas de mirar.
            </p>
          </div>

          <div className="relative min-h-[620px] overflow-hidden">
            <Image
              alt="Van D.C. retrato artistico"
              className="object-cover object-[center_18%] grayscale"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/images/home/acerca-de-mi-retrato.png"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_22%,transparent_0%,rgba(18,15,18,.1)_36%,rgba(18,15,18,.72)_100%),linear-gradient(0deg,rgba(18,15,18,.68),transparent_46%)]" />
            <div className="absolute bottom-7 right-7 h-24 w-px bg-[#b89050]/80" />
            <div className="absolute bottom-7 right-7 h-px w-24 bg-[#b89050]/80" />
          </div>
        </div>
      </section>

      <SectionReveal className="relative overflow-hidden bg-[#f4eadf] py-20 text-[#744247] lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_42%,rgba(232,199,200,.55),transparent_30%)]" />
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.jpg')] bg-cover opacity-[0.08]" />
        <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-14">
          <h2 className="max-w-4xl font-serif text-[44px] leading-tight sm:text-[64px]">
            Mi obra nace de una filosof&iacute;a simple y profunda: crear estados.
          </h2>
          <span className="mt-7 block h-px w-48 bg-[#b89050]" />
          <p className="mt-8 max-w-4xl text-lg leading-9 text-[#5d504b]">
            Pinto para transformar emociones en presencia. Para convertir una intuici&oacute;n, una herida, una
            decisi&oacute;n o una forma de mirar en algo visible. Cada obra intenta abrir un espacio interior, una
            conversaci&oacute;n silenciosa entre quien la crea, quien la mira y el lugar que empieza a habitar.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-[#f7eee8] text-[#2a2322]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]">
            <Image
              alt="Van D.C. pintando en su taller"
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/home/acerca-de-mi-taller.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_45%,rgba(247,238,232,.44))]" />
          </div>

          <div className="relative flex items-center overflow-hidden bg-[#f1dcd5] px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
            <div className="absolute inset-0 bg-[url('/images/textures/textura fondo.jpg')] bg-cover opacity-[0.06]" />
            <div className="relative max-w-2xl">
              <p className="editorial-kicker text-xs text-[#8d5960]">Historia personal</p>
              <h2 className="mt-5 font-serif text-5xl leading-none text-[#744247] sm:text-6xl">
                Antes de nombrarme artista
              </h2>
              <div className="mt-8 grid gap-6 text-base leading-8 text-[#4f403d]">
                <p>
                  Antes de nombrarme artista, fui muchas otras cosas: dise&ntilde;adora, creativa, observadora incansable
                  de los detalles y de las emociones que atraviesan la vida cotidiana. Con el tiempo entend&iacute; que
                  el arte era el lugar donde todo eso pod&iacute;a reunirse.
                </p>
                <p>
                  La vida me puso frente a momentos duros desde temprano. Esos momentos me ense&ntilde;aron que no siempre
                  elegimos lo que sucede, pero s&iacute; podemos aprender a observar de otra manera. A prestar atenci&oacute;n.
                  A comprender lo que pasa afuera y tambi&eacute;n lo que se mueve adentro.
                </p>
                <p>
                  Por eso mi arte no busca solamente decorar espacios. Busca acompa&ntilde;arlos. Transformarlos. Darles
                  una emoci&oacute;n, una historia, una energ&iacute;a propia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#f4eadf] py-20 text-[#744247] lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.jpg')] bg-cover opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-14">
          <article className="border border-[#c99b63]/70 bg-[#fff8f2]/50 px-8 py-10 text-center">
            <span className="mx-auto block h-px w-16 bg-[#b89050]" />
            <h3 className="mt-7 font-serif text-4xl">Estados interiores</h3>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#5d504b]">
              Obras que nacen de emociones, decisiones y momentos de transformaci&oacute;n.
            </p>
          </article>
          <article className="border border-[#c99b63]/70 bg-[#fff8f2]/50 px-8 py-10 text-center">
            <span className="mx-auto block h-px w-16 bg-[#b89050]" />
            <h3 className="mt-7 font-serif text-4xl">Presencia</h3>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#5d504b]">
              El arte como una forma de prestar atenci&oacute;n a lo que sucede afuera y adentro.
            </p>
          </article>
          <article className="border border-[#c99b63]/70 bg-[#fff8f2]/50 px-8 py-10 text-center">
            <span className="mx-auto block h-px w-16 bg-[#b89050]" />
            <h3 className="mt-7 font-serif text-4xl">Espacios con alma</h3>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#5d504b]">
              Piezas que no solo decoran: acompa&ntilde;an, transforman y crean atm&oacute;sfera.
            </p>
          </article>
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#fbf4ec] px-5 py-16 text-center text-[#4f403d] sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(184,121,130,.18),transparent_26%)]" />
        <p className="relative mx-auto max-w-5xl font-serif text-3xl leading-snug sm:text-4xl">
          Amo la risa. Siempre digo que es mi mejor estado. Tambi&eacute;n amo la ternura, la sorpresa y esos
          peque&ntilde;os instantes donde algo cotidiano se vuelve significativo.
        </p>
        <span className="relative mx-auto mt-8 block h-px w-28 bg-[#b89050]" />
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#120f12] py-20 text-[#f4efe7] lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_7%_40%,rgba(184,121,130,.25),transparent_24%),linear-gradient(90deg,#080707,#181114_62%,#120f12)]" />
        <div className="absolute inset-0 bg-[url('/images/textures/textura fondo.jpg')] bg-cover opacity-[0.08] mix-blend-screen" />
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.42fr] lg:px-14">
          <div>
            <h2 className="max-w-4xl font-serif text-[42px] leading-tight sm:text-[58px]">
              Porque elegir c&oacute;mo habitar el presente, al final, quiz&aacute;s sea la creaci&oacute;n m&aacute;s
              importante de todas.
            </h2>
            <span className="mt-7 block h-px w-16 bg-[#b89050]" />
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#d9cfc5]">
              Desde mis obras, colecciones y experiencias, te invito a mirar distinto: a encontrar una pieza que dialogue
              con tu historia, tu espacio o tu momento.
            </p>
          </div>
          <div className="grid gap-5">
            <Link
              className="editorial-kicker inline-flex items-center justify-between bg-[#9d5b58] px-9 py-5 text-xs text-[#f4efe7] transition hover:bg-[#e8c7c8] hover:text-[#120f12]"
              href="/obras"
            >
              Ver obras <ArrowRight size={18} />
            </Link>
            <Link
              className="editorial-kicker inline-flex items-center justify-between border border-[#b89050]/80 px-9 py-5 text-xs text-[#b89050] transition hover:bg-[#b89050] hover:text-[#120f12]"
              href={whatsappLink("Hola Van, quiero consultar por una obra.")}
              target="_blank"
            >
              Consultar una obra <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
