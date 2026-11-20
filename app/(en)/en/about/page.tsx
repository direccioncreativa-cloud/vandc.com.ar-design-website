import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Van",
  description: "Meet Van D.C., an Argentine visual artist whose work turns emotions, memory and inner states into presence.",
  alternates: { canonical: "/en/about/", languages: { "es-AR": "/acerca/", "en-US": "/en/about/", "x-default": "/acerca/" } }
};

const principles = [
  ["Inner states", "Works born from emotions, decisions and moments of transformation."],
  ["Presence", "Art as a way of paying attention to what is happening around us and within us."],
  ["Spaces with soul", "Pieces that do more than decorate: they accompany, transform and create atmosphere."]
];

export default function AboutPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#120f12] text-[#f4efe7]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
        <Image alt="Portrait of Argentine visual artist Van D.C." className="object-cover object-[62%_center] sm:object-center lg:object-[52%_top]" fill priority sizes="100vw" src="/images/home/acerca-de-mi-hero.webp" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.88),rgba(5,5,5,.66)_36%,rgba(5,5,5,.1)),linear-gradient(0deg,rgba(5,5,5,.82),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(184,121,130,.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[.08] mix-blend-screen" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1680px] items-end px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pb-24">
          <div className="max-w-3xl"><div className="flex items-center gap-5"><p className="editorial-kicker text-xs text-[#e8c7c8]">About me</p><span className="h-px w-28 bg-[#b89050]/75" /><span className="text-[#b89050]">✥</span></div><h1 className="mt-8 font-serif text-[42px] leading-[.94] tracking-[-.035em] sm:text-[62px] lg:text-[76px]">Art as a way of inhabiting the <em className="not-italic text-[#e8c7c8]">present</em></h1><span className="mt-8 block h-px w-16 bg-[#b89050]" /><p className="mt-7 max-w-2xl text-lg leading-8 text-[#d9cfc5]">I am Van D.C., an Argentine visual artist born in Buenos Aires. I paint to transform emotions into presence and create works that accompany spaces, stories and new ways of seeing.</p></div>
        </div>
      </section>

      <SectionReveal className="relative overflow-hidden bg-[#f4eadf] py-20 text-[#744247] lg:py-24"><div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[.08]" /><div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-14"><h2 className="max-w-4xl font-serif text-[34px] leading-tight tracking-[-.03em] sm:text-[48px]">My work grows from a simple and profound philosophy: creating states of being.</h2><span className="mt-7 block h-px w-48 bg-[#b89050]" /><p className="mt-8 max-w-4xl text-lg leading-8 text-[#5d504b]">I paint to turn intuition, wounds, decisions and ways of seeing into something visible. Each work seeks to open an inner space—a quiet conversation between the person who creates it, the person who encounters it and the place it begins to inhabit.</p></div></SectionReveal>

      <SectionReveal className="bg-[#f7eee8] text-[#2a2322]"><div className="grid lg:grid-cols-[.95fr_1.05fr]"><div className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]"><Image alt="Van D.C. painting in her studio" className="object-cover object-center" fill sizes="(min-width:1024px) 50vw,100vw" src="/images/home/vandc-taller.webp" /></div><div className="relative flex items-center bg-[#f1dcd5] px-5 py-20 sm:px-8 lg:px-16 lg:py-24"><div className="max-w-2xl"><p className="editorial-kicker text-xs text-[#8d5960]">A personal story</p><h2 className="mt-5 font-serif text-[36px] leading-none tracking-[-.03em] text-[#744247] sm:text-[48px]">Before calling myself an artist</h2><div className="mt-8 grid gap-6 leading-8 text-[#4f403d]"><p>Before calling myself an artist, I was many other things: a designer, a creative and a tireless observer of the details and emotions running through everyday life. Over time, I understood that art was where all of it could meet.</p><p>Life placed difficult moments in my path early on. They taught me that we cannot always choose what happens, but we can learn to look differently—to notice what happens around us and what moves within us.</p><p>That is why my art does not simply decorate spaces. It accompanies them, transforms them and gives them an emotion, a story and an energy of their own.</p></div></div></div></div></SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#f4eadf] py-20 text-[#744247] lg:py-24"><div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[.08]" /><div className="relative mx-auto grid max-w-[1440px] gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-14">{principles.map(([title, copy]) => <article className="border border-[#c99b63]/70 bg-[#fff8f2]/50 px-8 py-10 text-center" key={title}><span className="mx-auto block h-px w-16 bg-[#b89050]" /><h3 className="mt-7 font-serif text-[30px]">{title}</h3><p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-[#5d504b]">{copy}</p></article>)}</div></SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#fbf4ec] px-5 py-16 text-center text-[#4f403d] sm:px-8"><p className="relative mx-auto max-w-4xl font-serif text-[25px] leading-snug tracking-[-.02em] sm:text-[34px]">I love laughter. I always say it is my best state of being. I also love tenderness, surprise and those small moments when something ordinary becomes meaningful.</p><span className="relative mx-auto mt-8 block h-px w-28 bg-[#b89050]" /></SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[#120f12] py-20 text-[#f4efe7] lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_7%_40%,rgba(184,121,130,.25),transparent_24%),linear-gradient(90deg,#080707,#181114_62%,#120f12)]" /><div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.42fr] lg:px-14"><div><h2 className="max-w-4xl font-serif text-[34px] leading-tight tracking-[-.03em] sm:text-[46px]">Choosing how to inhabit the present may be the most important creation of all.</h2><span className="mt-7 block h-px w-16 bg-[#b89050]" /><p className="mt-7 max-w-2xl leading-8 text-[#d9cfc5]">Through my works, collections and experiences, I invite you to look differently and find a piece that speaks to your story, your space or this moment in your life.</p></div><div className="grid gap-5"><Link className="editorial-kicker flex justify-between bg-[#9d5b58] px-9 py-5 text-xs" href="/en/artworks">View artworks <ArrowRight size={18} /></Link><Link className="editorial-kicker flex justify-between border border-[#b89050] px-9 py-5 text-xs text-[#b89050]" href={whatsappLink("Hi Van, I would like to inquire about an artwork.")} target="_blank">Get in touch <ArrowRight size={18} /></Link></div></div></SectionReveal>
    </main>
  );
}
