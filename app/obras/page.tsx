import { ArtworkCatalog } from "@/components/ArtworkCatalog";
import { artworks } from "@/data/artworks";

export default function ObrasPage() {
  return (
    <main className="overflow-hidden bg-[#f8f1ea] text-[#171313]">
      <section className="relative px-5 pb-12 pt-36 sm:px-8 lg:px-14 lg:pb-16">
        <div className="absolute inset-0 bg-[url('/images/textures/fondo.webp')] bg-cover opacity-[0.11]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,199,200,.35),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(184,144,80,.16),transparent_26%)]" />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <p className="editorial-kicker text-xs text-[#9b6268]">Obras</p>
          <span className="mx-auto mt-5 block h-px w-24 bg-[#b89050]" />
          <h1 className="mt-7 font-serif text-[44px] font-[430] leading-none tracking-[-0.035em] sm:text-[68px]">Catálogo de obras</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5f534d] sm:text-lg">
            Una galería editable para recorrer piezas originales, obras a carbonilla y colecciones. Cada ficha queda
            preparada para sumar técnica definitiva, medidas, estado, precio y nuevas imágenes.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-14 lg:py-18">
        <div className="mx-auto max-w-[1440px]">
          <ArtworkCatalog artworks={artworks} />
        </div>
      </section>
    </main>
  );
}
