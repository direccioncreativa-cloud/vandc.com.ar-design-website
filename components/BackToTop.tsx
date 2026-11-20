"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop({ locale }: { locale: "es" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      aria-label={locale === "en" ? "Back to top" : "Volver arriba"}
      className={`fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-[#b89050]/70 bg-[#fffaf5]/92 text-[#744247] shadow-[0_10px_30px_rgba(18,15,18,.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#744247] hover:text-[#fffaf5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89050] focus-visible:ring-offset-2 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      onClick={scrollToTop}
      type="button"
    >
      <ArrowUp aria-hidden="true" size={19} strokeWidth={1.7} />
    </button>
  );
}
