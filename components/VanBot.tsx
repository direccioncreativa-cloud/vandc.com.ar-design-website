"use client";

import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const options = [
  ["Consultar una obra", "Hola Van, quiero consultar una obra."],
  ["Contratar experiencia", "Hola Van, quiero contratar una experiencia artística."],
  ["Conocer colecciones", "Hola Van, quiero conocer más sobre tus colecciones."],
  ["Hablar con Van", "Hola Van, quiero hacer una consulta."]
];

export function VanBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 w-[min(88vw,320px)] border border-[color:var(--line)] bg-[#FAF7F2]/95 p-4 shadow-2xl backdrop-blur-xl dark:bg-[#151313]/95">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-serif text-2xl">VanBot</p>
              <p className="text-xs text-smoke dark:text-[#d9cfc5]">Consultas rápidas por WhatsApp</p>
            </div>
            <button aria-label="Cerrar VanBot" onClick={() => setOpen(false)} type="button">
              <X size={18} />
            </button>
          </div>
          <div className="grid gap-2">
            {options.map(([label, message]) => (
              <Link
                className="border border-[color:var(--line)] px-4 py-3 text-sm transition hover:border-roseOld hover:bg-blush/35 dark:hover:bg-white/10"
                href={whatsappLink(message)}
                key={label}
                target="_blank"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <button
        aria-label="Abrir VanBot"
        className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-[44%_56%_50%_50%/58%_44%_56%_42%] bg-roseOld text-ivory shadow-2xl transition hover:scale-105"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,#E8C7C8,transparent_36%),linear-gradient(145deg,#B87982,#111111)]" />
        <MessageCircle className="relative" size={24} />
      </button>
    </div>
  );
}
