"use client";

import { type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export function ContactWhatsappForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = String(formData.get("nombre") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const motivo = String(formData.get("motivo") ?? "").trim();
    const mensaje = String(formData.get("mensaje") ?? "").trim();

    const text = [
      "Hola Van, quiero enviarte una consulta desde la web.",
      nombre ? `Nombre: ${nombre}` : "",
      email ? `Email: ${email}` : "",
      motivo ? `Motivo: ${motivo}` : "",
      mensaje ? `Mensaje: ${mensaje}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="mt-10 grid w-full max-w-[760px] gap-6" onSubmit={handleSubmit}>
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
        defaultValue=""
      >
        <option value="" disabled>
          Seleccioná una opción
        </option>
        <option>Obra original</option>
        <option>Obra personalizada</option>
        <option>Experiencia artística</option>
        <option>Colaboración / prensa</option>
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
  );
}
