import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type ExperienceTypeCardProps = {
  title: string;
  copy: string;
  image: string;
  icon: ReactNode;
  dark?: boolean;
};

const details = [
  ["Modalidad", "presencial"],
  ["Ideal para", "amantes del arte, cat lovers, grupos, caf&eacute;s, marcas y eventos privados"],
  ["Incluye", "narrativa de la colecci&oacute;n, materiales, pintura guiada y obra final para llevar"],
  ["Experiencia realizada", "La Panera Rosa, Barrio Chino"],
  ["Duraci&oacute;n", "2 hs aprox."],
  ["Formato", "arte + merienda"]
];

const steps = [
  ["01", "La historia", "Presentaci&oacute;n del universo de la colecci&oacute;n y su recorrido emocional."],
  ["02", "La pregunta", "Una consigna simple para abrir la mirada y conectar con la experiencia."],
  ["03", "La creaci&oacute;n", "Pintura guiada paso a paso, sin necesidad de experiencia previa."],
  ["04", "La obra", "Cada participante se lleva su pieza terminada como recuerdo de un estado elegido."]
];

const typeCards = [
  {
    title: "Experiencias privadas",
    copy: "Encuentros para grupos, cumplea&ntilde;os, equipos, amigas, familias o comunidades.",
    image: "/images/experiencias/tarjeta-experiencias-privadas.webp",
    icon: <UsersIcon />,
    dark: true
  },
  {
    title: "Experiencias para marcas y espacios",
    copy: "Propuestas art&iacute;sticas para caf&eacute;s, galer&iacute;as, marcas, hoteles, tiendas y proyectos culturales.",
    image: "/images/experiencias/tarjeta-marcas-espacios.webp",
    icon: <BuildingCastleIcon />
  },
  {
    title: "Experiencias a medida",
    copy: "Dise&ntilde;o de una experiencia art&iacute;stica basada en una colecci&oacute;n, una tem&aacute;tica o una emoci&oacute;n espec&iacute;fica.",
    image: "/images/experiencias/tarjeta-experiencias-a-medida.webp",
    icon: <PaletteIcon />
  }
];

function UsersIcon() {
  return (
    <svg
      className="h-8 w-8 stroke-current md:h-10 md:w-10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  );
}

function BuildingCastleIcon() {
  return (
    <svg
      className="h-8 w-8 stroke-current md:h-10 md:w-10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 21v-9" />
      <path d="M20 21v-9" />
      <path d="M4 12h16" />
      <path d="M6 12v-5l3 2l3 -2l3 2l3 -2v5" />
      <path d="M9 21v-6h6v6" />
      <path d="M3 21h18" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      className="h-8 w-8 stroke-current md:h-10 md:w-10"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4 4 0 0 1 -4 4h-1.5a2 2 0 0 0 -1.5 3.3a2 2 0 0 1 -1.5 2.7z" />
      <path d="M7.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M10.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M14.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 11.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}

function ExperienceTypeCard({ title, copy, image, icon, dark = false }: ExperienceTypeCardProps) {
  return (
    <article className="relative min-h-[310px] overflow-hidden rounded-[8px] ring-1 ring-[#d9b4ad]/45">
      <Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 31vw, 100vw" src={image} />
      <div
        className={
          dark
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(16,9,8,.9),rgba(16,9,8,.54)_62%,rgba(16,9,8,.22))]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(250,247,242,.82),rgba(250,247,242,.48)_58%,rgba(250,247,242,.16))]"
        }
      />
      <div className={`relative flex h-full min-h-[310px] max-w-[78%] flex-col justify-center p-7 sm:p-9 ${dark ? "text-[#f7efe8]" : "text-[#5d3036]"}`}>
        <div className="mb-5 inline-flex text-[#B89050]">{icon}</div>
        <h3 className="text-[27px] font-[520] leading-[1.04] tracking-[-0.025em] md:text-[30px]" dangerouslySetInnerHTML={{ __html: title }} />
        <p className={`mt-5 text-[15px] leading-7 ${dark ? "text-[#f4e6df]" : "text-[#6f4d4b]"}`} dangerouslySetInnerHTML={{ __html: copy }} />
        <span className="mt-7 block h-px w-24 bg-[#B89050]" />
      </div>
    </article>
  );
}

export default function ExperienciasPage() {
  return (
    <main className="experiences-page overflow-hidden bg-[#fbf2ea] text-[#4a252b]">
      <section className="relative min-h-[calc(100svh-96px)] overflow-hidden border-b border-[#dfbdb7]/60 bg-[#fbf2ea] pt-20 lg:pt-24">
        <Image
          alt=""
          className="object-cover object-left opacity-80"
          fill
          priority
          sizes="100vw"
          src="/images/experiencias/fondo-superior-experiencias.webp"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,242,234,.98)_0%,rgba(251,242,234,.96)_42%,rgba(251,242,234,.04)_42.5%,rgba(251,242,234,0)_100%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-[58%] lg:block">
          <Image
            alt="Experiencia art&iacute;stica Van D.C."
            className="object-cover object-center"
            fill
            priority
            sizes="58vw"
            src="/images/experiencias/black-cat-experience.webp"
          />
          <div className="absolute inset-y-0 left-0 w-3 bg-[linear-gradient(90deg,rgba(251,242,234,.36),rgba(251,242,234,0))]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-96px)] max-w-[1680px] items-center px-5 py-20 sm:px-8 lg:px-14">
          <div className="max-w-[560px] text-center lg:text-left">
            <p className="experience-kicker text-[#B89050]">Experiencias</p>
            <span className="mx-auto mt-5 block h-px w-28 bg-[#B89050] lg:mx-0" />
            <h1 className="mt-8 max-w-xl text-[46px] font-[420] leading-[0.94] tracking-[-0.035em] text-[#8c3e4c] sm:text-[62px] lg:text-[76px]">
              Experiencias art&iacute;sticas
            </h1>
            <p className="mx-auto mt-8 max-w-sm text-base leading-7 text-[#5d3036] lg:mx-0">
              Encuentros creados para vivir el arte desde una historia, una emoci&oacute;n y una obra.
            </p>
            <div className="mt-10 grid max-w-[520px] grid-cols-1 gap-4 sm:grid-cols-2 lg:justify-start">
              <Link className="experience-button inline-flex min-h-[58px] items-center justify-center bg-[#B87982] px-5 py-4 text-center text-white transition hover:bg-[#8c3e4c]" href="/contacto">
                Contratar experiencia <ArrowUpRight className="ml-5" size={17} />
              </Link>
              <Link className="experience-button inline-flex min-h-[58px] items-center justify-center border border-[#B87982]/70 px-5 py-4 text-center text-[#8c3e4c] transition hover:bg-[#B87982] hover:text-white" href="/contacto">
                Consultar por WhatsApp <MessageCircle className="ml-5" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfbdb7]/60 px-5 py-16 text-center sm:px-8 lg:py-20">
        <p className="mx-auto max-w-4xl text-[24px] font-[430] leading-[1.28] tracking-[-0.02em] text-[#8c3e4c] sm:text-[30px] lg:text-[34px]">
          No se trata solo de aprender a pintar. Cada experiencia nace de una colecci&oacute;n, una narrativa y una pregunta emocional.
          Las personas crean una obra propia mientras atraviesan una historia visual dise&ntilde;ada para mirar distinto.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1680px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-14 lg:py-20">
        <div>
          <div className="relative aspect-[1.46] overflow-hidden rounded-[8px] bg-[#e8d7cf]">
            <Image
              alt="Participantes pintando durante la experiencia Black Cat"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              src="/images/experiencias/black-cat-experience.webp"
            />
          </div>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#5b3434]">
            Una experiencia art&iacute;stica tem&aacute;tica inspirada en Black Cat Collection: una serie sobre prejuicio, amor y segundas oportunidades.
            Durante el encuentro, las personas se acercan al universo de la colecci&oacute;n, comparten una experiencia creativa y pintan su propia obra guiada paso a paso.
          </p>
        </div>

        <div className="self-center">
          <h2 className="text-[38px] font-[430] leading-[0.96] tracking-[-0.035em] text-[#4a252b] sm:text-[48px]">
            Black Cat<br />Collection Experience
          </h2>
          <p className="mt-6 max-w-md text-base font-[450] leading-7 text-[#B87982]">Arte, merienda y una historia para pintar y llevar.</p>
          <div className="mt-8 divide-y divide-[#dfbdb7] border border-[#dfbdb7] bg-[#fff7ef]/58">
            {details.map(([label, value]) => (
              <div className="grid grid-cols-[128px_1fr] gap-4 px-5 py-4 text-[13px] leading-6 sm:grid-cols-[165px_1fr]" key={label}>
                <strong className="font-[650] text-[#4a252b]">{label}:</strong>
                <span className="text-[#6f4d4b]" dangerouslySetInnerHTML={{ __html: value }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfbdb7]/60 px-5 py-14 text-center sm:px-8 lg:py-16">
        <h2 className="text-[34px] font-[430] tracking-[-0.025em] text-[#4a252b] sm:text-[40px]">C&oacute;mo funciona</h2>
        <div className="mx-auto mt-10 grid max-w-[1440px] gap-8 md:grid-cols-4">
          {steps.map(([number, title, copy]) => (
            <article className="border-[#dfbdb7] md:border-r md:last:border-r-0 md:px-8" key={number}>
              <p className="text-[36px] font-[420] tracking-[-0.02em] text-[#dd8586]">{number}</p>
              <h3 className="mt-3 text-xl font-[520] tracking-[-0.015em] text-[#4a252b]" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="mx-auto mt-3 max-w-xs text-[13px] leading-6 text-[#5b3434]" dangerouslySetInnerHTML={{ __html: copy }} />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1680px] gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-14">
        {typeCards.map((card) => (
          <ExperienceTypeCard key={card.title} {...card} />
        ))}
      </section>

      <section className="relative overflow-hidden px-5 py-16 text-center text-[#f7efe8] sm:px-8 lg:py-20">
        <Image alt="" className="object-cover" fill sizes="100vw" src="/images/experiencias/fondo-consultar-experiencia.webp" />
        <div className="absolute inset-0 bg-[#241014]/35" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-[32px] font-[420] leading-tight tracking-[-0.03em] sm:text-[44px]">
            Cada experiencia es una forma de crear, compartir y habitar una historia.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Link className="experience-button inline-flex items-center justify-center bg-[#B87982] px-8 py-5 text-white transition hover:bg-[#8c3e4c]" href="/contacto">
              Consultar experiencia <ArrowUpRight className="ml-5" size={17} />
            </Link>
            <Link className="experience-button inline-flex items-center justify-center border border-[#B89050] px-8 py-5 text-[#B89050] transition hover:bg-[#B89050] hover:text-[#241014]" href="/colecciones">
              Ver colecciones <ArrowUpRight className="ml-5" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
