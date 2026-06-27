import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Crown,
  Flower2,
  Instagram,
  Mail,
  MessageCircle,
  Paintbrush,
  PenLine
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto | Van D.C.",
  description:
    "Contacto de Van D.C. para consultar obras originales, piezas a medida, experiencias artisticas y colaboraciones."
};

const contactOptions = [
  {
    icon: Flower2,
    title: "Obra original",
    copy: "Consult\u00e1 por obras disponibles de la colecci\u00f3n actual.",
    href: whatsappLink("Hola Van, quiero consultar por una obra original."),
    label: "Consultar"
  },
  {
    icon: Paintbrush,
    title: "Obra personalizada",
    copy: "Encarg\u00e1 una obra \u00fanica, realizada especialmente para vos.",
    href: whatsappLink("Hola Van, quiero consultar por una obra personalizada."),
    label: "Encargar"
  },
  {
    icon: PenLine,
    title: "Experiencia art\u00edstica",
    copy: "Propuestas creativas para eventos, talleres y vivencias memorables.",
    href: whatsappLink("Hola Van, quiero consultar por una experiencia artística."),
    label: "Consultar"
  },
  {
    icon: Crown,
    title: "Colaboraci\u00f3n / prensa",
    copy: "Proyectos, alianzas, prensa y colaboraciones creativas.",
    href: "mailto:info@vandc.com.ar",
    label: "Escribir"
  }
];

const directLinks = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    copy: "La forma m\u00e1s r\u00e1pida de contactarme.",
    label: "Escribirme",
    href: whatsappLink("Hola Van, quiero hacer una consulta.")
  },
  {
    icon: Mail,
    title: "Email",
    copy: "info@vandc.com.ar",
    label: "Enviar email",
    href: "mailto:info@vandc.com.ar"
  },
  {
    icon: Instagram,
    title: "Instagram",
    copy: "Conoc\u00e9 m\u00e1s de mi trabajo y el backstage del estudio.",
    label: "@vand.c",
    href: "#"
  }
];

export default function ContactoPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf5] pt-28 text-[#221f1d]">
      <section className="relative overflow-hidden border-b border-[#e7d3ca] bg-[#fffaf5]">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.05]" />
        <div className="relative mx-auto grid min-h-[78svh] max-w-[1680px] items-stretch lg:grid-cols-[0.78fr_1.12fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-20">
            <p className="editorial-kicker text-sm text-[#b87982]">Contacto</p>
            <h1 className="mt-7 font-serif text-[52px] font-[430] leading-none tracking-[-0.04em] text-[#171514] sm:text-[74px] lg:text-[86px]">
              Hablemos
            </h1>
            <div className="mt-8 flex max-w-sm items-center gap-4 text-[#b89050]">
              <span className="h-px flex-1 bg-[#b89050]/70" />
              <Crown size={20} />
              <span className="h-px flex-1 bg-[#b89050]/70" />
            </div>
            <div className="mt-9 grid max-w-md gap-6 text-base leading-8 text-[#4f403d] sm:text-lg">
              <p>
                &iquest;Ten&eacute;s una idea, un proyecto o una obra en mente? Me encantar&iacute;a conocer tu
                propuesta y explorar juntos las mejores posibilidades.
              </p>
              <p>
                Consult&aacute; por obra original, obra personalizada, experiencias art&iacute;sticas o colaboraciones.
              </p>
            </div>
            <p className="mt-10 font-serif text-[30px] font-[430] tracking-[-0.025em] text-[#c97882]">Estoy para escucharte.</p>
          </div>

          <div className="relative min-h-[620px] overflow-hidden">
            <Image
              alt="Van D.C. en cabina telefonica rosa"
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              src="/images/contacto/imagen-contacto-vandc.webp"
            />
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#fffaf5] via-[#fffaf5]/82 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative bg-[#fffaf5] px-5 py-12 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactOptions.map(({ icon: Icon, title, copy, href, label }) => (
            <Link
              className="group border border-[#dec7bc] bg-white/45 p-8 transition hover:-translate-y-1 hover:border-[#c99b63]/70 hover:bg-white hover:shadow-[0_22px_70px_rgba(80,60,50,.12)]"
              href={href}
              key={title}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <Icon className="text-[#c97882]" size={30} />
              <h2 className="mt-8 font-serif text-[27px] font-[520] leading-tight tracking-[-0.025em] text-[#221f1d]">{title}</h2>
              <p className="mt-4 min-h-[72px] text-sm leading-7 text-[#5d504b]">{copy}</p>
              <span className="mt-7 inline-flex items-center gap-4 text-[#c97882]">
                <span className="sr-only">{label}</span>
                <ArrowRight className="transition group-hover:translate-x-1" size={22} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 text-[#221f1d] sm:px-8 lg:py-20">
        <Image
          alt="Fondo floral para formulario de contacto"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          sizes="100vw"
          src="/images/contacto/background-form-contacto.webp"
        />
        <div className="absolute inset-0 bg-[#fffaf5]/52" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="editorial-kicker text-sm text-[#b87982]">Enviame tu consulta</p>
          <div className="mt-4 flex items-end justify-between gap-8">
            <div>
              <h2 className="font-serif text-[36px] font-[430] leading-tight tracking-[-0.03em] text-[#221f1d] sm:text-[48px]">
                Complet&aacute; el formulario
              </h2>
              <span className="mt-5 block h-px w-12 bg-[#b89050]" />
            </div>
            <p className="hidden max-w-md text-sm leading-7 text-[#7c625b] lg:block">
              Tu mensaje queda preparado para avanzar por el canal que prefieras. Para una respuesta m&aacute;s
              r&aacute;pida, tambi&eacute;n pod&eacute;s escribirme por WhatsApp.
            </p>
          </div>

          <form
            action={whatsappLink("Hola Van, quiero enviarte una consulta desde la web.")}
            className="mt-10 grid w-full gap-6"
            target="_blank"
          >
            <div className="grid gap-5 lg:grid-cols-2">
              <input
                className="h-14 w-full border border-[#d8c6bd] bg-white/72 px-5 text-sm outline-none transition placeholder:text-[#7c625b] focus:border-[#b87982]"
                name="nombre"
                placeholder="Nombre"
                type="text"
              />
              <input
                className="h-14 w-full border border-[#d8c6bd] bg-white/72 px-5 text-sm outline-none transition placeholder:text-[#7c625b] focus:border-[#b87982]"
                name="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <select
              className="h-14 w-full border border-[#d8c6bd] bg-white/72 px-5 text-sm text-[#5d504b] outline-none transition focus:border-[#b87982]"
              name="motivo"
            >
              <option>Seleccion&aacute; una opci&oacute;n</option>
              <option>Obra original</option>
              <option>Obra personalizada</option>
              <option>Experiencia art&iacute;stica</option>
              <option>Colaboraci&oacute;n / prensa</option>
            </select>
            <textarea
              className="min-h-[190px] w-full resize-y border border-[#d8c6bd] bg-white/72 px-5 py-4 text-sm outline-none transition placeholder:text-[#7c625b] focus:border-[#b87982]"
              name="mensaje"
              placeholder="Mensaje"
            />
            <button
              className="editorial-kicker flex h-16 w-full items-center justify-center gap-6 bg-[#c97882] px-8 text-xs text-white transition hover:bg-[#9d5b58]"
              type="submit"
            >
              Enviar consulta <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {directLinks.map(({ icon: Icon, title, copy, label, href }) => (
              <Link
                className="grid grid-cols-[48px_1fr] gap-5 border border-[#dec7bc] bg-white/55 p-6 transition hover:bg-white"
                href={href}
                key={title}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                <Icon className="mt-1 text-[#c97882]" size={30} />
                <span>
                  <strong className="block text-sm text-[#221f1d]">{title}</strong>
                  <span className="mt-2 block text-sm leading-6 text-[#5d504b]">{copy}</span>
                  <span className="mt-4 inline-flex items-center gap-3 text-sm text-[#c97882]">
                    {label} <ArrowRight size={15} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
