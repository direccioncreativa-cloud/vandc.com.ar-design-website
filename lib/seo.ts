import type { Metadata } from "next";

export const siteOrigin = "https://www.vandc.com.ar";

export function localizedAlternates(esPath: string, enPath: string): Metadata["alternates"] {
  return {
    canonical: esPath,
    languages: {
      "es-AR": esPath,
      "en-US": enPath,
      "x-default": esPath
    }
  };
}

export function englishAlternates(esPath: string, enPath: string): Metadata["alternates"] {
  return {
    canonical: enPath,
    languages: {
      "es-AR": esPath,
      "en-US": enPath,
      "x-default": esPath
    }
  };
}
