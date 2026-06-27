import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle, Music2, type LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const actionLinks = [
  ["Visitar Notas", "/notas"],
  ["Comprar una obra", "/obras"],
  ["Contratar una experiencia", "/experiencias"]
];

const contactLinks: Array<[string, string, LucideIcon]> = [
  ["Instagram", "#", Instagram],
  ["TikTok", "#", Music2],
  ["LinkedIn", "#", Linkedin],
  ["WhatsApp", whatsappLink("Hola Van, quiero hacer una consulta."), MessageCircle],
  ["info@vandc.com.ar", "mailto:info@vandc.com.ar", Mail]
];

export function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-[#120f12] text-[#f4efe7]">
      <Image
        alt="Experiencia artística Van D.C."
        className="absolute inset-y-0 right-0 h-full w-[68%] object-cover object-center opacity-[0.22] grayscale"
        height={640}
        src="/images/home/footer-panoramico.webp"
        width={1920}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(184,121,130,.14),transparent_36%),linear-gradient(90deg,#120f12_0%,rgba(18,15,18,.98)_34%,rgba(18,15,18,.72)_68%,rgba(18,15,18,.94)_100%)]" />
      <div className="relative mx-auto grid max-w-[1680px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.74fr_0.9fr] lg:px-14 lg:py-24">
        <div className="flex flex-col items-start">
          <div className="relative h-32 w-[360px] max-w-full sm:h-40 sm:w-[460px]">
            <Image
              alt="Van D.C."
              className="object-contain object-left"
              fill
              sizes="(min-width: 1024px) 460px, 86vw"
              src="/images/logos/logo Van DC White.png"
            />
          </div>
          <div className="mt-9 flex items-center gap-4 text-[#b89050]">
            <span className="h-px w-28 bg-[#b89050]" />
            <span>✥</span>
            <span className="h-px w-28 bg-[#b89050]" />
          </div>
          <p className="mt-9 max-w-xl font-serif text-[30px] font-[430] leading-tight tracking-[-0.025em] text-[#f4efe7] sm:text-[38px]">
            El arte nos une y nos hace únicos
          </p>
        </div>

        <nav className="self-center border-l border-[#b89050]/50 pl-10">
          {actionLinks.map(([label, href]) => (
            <Link
              className="block border-b border-[#b89050]/30 py-6 text-center font-serif text-xl font-[520] tracking-[0.08em] text-[#f4efe7] transition hover:text-[#e8c7c8]"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="self-center">
          <div className="grid gap-4">
            {contactLinks.map(([label, href, Icon]) => (
              <Link
                className="grid grid-cols-[54px_1px_1fr] items-center gap-5 border-b border-[#b89050]/25 py-3 text-[#f4efe7] transition hover:text-[#e8c7c8]"
                href={href as string}
                key={label as string}
                target={(href as string).startsWith("http") ? "_blank" : undefined}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-[#b89050]/70 text-[#e8c7c8]">
                  <Icon size={22} />
                </span>
                <span className="h-9 w-px bg-[#b89050]/60" />
                <span className="font-serif text-base font-[520] tracking-[0.08em]">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1680px] px-5 pb-10 sm:px-8 lg:px-14">
        <div className="h-px bg-[#b89050]/40" />
        <p className="pt-8 text-center font-serif text-sm tracking-[0.08em] text-[#f4efe7]/80">
          © 2026 Van DC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
