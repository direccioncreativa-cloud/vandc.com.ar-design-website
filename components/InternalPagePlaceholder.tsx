import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type InternalPagePlaceholderProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function InternalPagePlaceholder({ eyebrow, title, copy }: InternalPagePlaceholderProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120f12] pt-32 text-[#f4efe7]">
      <section className="relative min-h-[72svh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(184,121,130,.2),transparent_32%),linear-gradient(120deg,#120f12,#181114_48%,#080707)]" />
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.07] mix-blend-screen" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-[1180px] flex-col justify-center px-5 sm:px-8 lg:px-14">
          <p className="editorial-kicker text-xs text-[#e8c7c8]">{eyebrow}</p>
          <span className="mt-5 block h-px w-20 bg-[#b89050]" />
          <h1 className="mt-8 max-w-4xl font-serif text-[42px] font-[430] leading-none tracking-[-0.035em] sm:text-[62px]">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d9cfc5]">{copy}</p>
          <Link
            className="editorial-kicker mt-10 inline-flex w-fit items-center border border-[#e8c7c8]/70 px-8 py-5 text-xs text-[#e8c7c8] transition hover:bg-[#e8c7c8] hover:text-[#120f12]"
            href="/"
          >
            Volver al inicio <ArrowUpRight className="ml-8" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
