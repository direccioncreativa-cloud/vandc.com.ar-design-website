import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        blush: "#E8C7C8",
        roseOld: "#B87982",
        nude: "#EADCD4",
        charcoal: "#111111",
        smoke: "#4A4643",
        antiqueGold: "#B89050",
        pearl: "#D8D8D6",
        silver: "#BFC1C2"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
