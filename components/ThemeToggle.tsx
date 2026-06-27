"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  tone?: "light" | "dark";
};

export function ThemeToggle({ tone = "light" }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);
  const buttonClass =
    tone === "dark"
      ? "grid h-[52px] w-[62px] place-items-center border border-charcoal/45 bg-transparent text-charcoal transition hover:border-blush hover:bg-blush hover:text-charcoal focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush"
      : "grid h-[52px] w-[62px] place-items-center border border-ivory/45 bg-transparent text-ivory transition hover:border-blush hover:bg-blush hover:text-charcoal focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-blush";

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
      className={buttonClass}
      onClick={toggleTheme}
      type="button"
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
