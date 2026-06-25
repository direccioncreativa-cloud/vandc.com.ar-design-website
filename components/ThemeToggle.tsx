"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("vandc-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("vandc-theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="grid h-[52px] w-[62px] place-items-center border border-blush/55 bg-black/15 text-blush backdrop-blur transition hover:bg-blush hover:text-charcoal"
      onClick={toggleTheme}
      type="button"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
