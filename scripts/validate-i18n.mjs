import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const output = join(process.cwd(), ".next/server/app");
const pairs = [
  ["index.html", "en.html"],
  ["obras.html", "en/artworks.html"],
  ["colecciones.html", "en/collections.html"],
  ["experiencias.html", "en/experiences.html"],
  ["acerca.html", "en/about.html"],
  ["notas.html", "en/journal.html"],
  ["contacto.html", "en/contact.html"]
];

const failures = [];
for (const [es, en] of pairs) {
  for (const file of [es, en]) if (!existsSync(join(output, file))) failures.push(`Missing generated route: ${file}`);
}

function countMarkup(file, pattern) {
  return (readFileSync(join(output, file), "utf8").match(pattern) || []).length;
}

for (const [es, en] of pairs) {
  for (const [label, pattern] of [["sections", /<section/g], ["images", /<img/g], ["H1 headings", /<h1/g]]) {
    const esCount = countMarkup(es, pattern);
    const enCount = countMarkup(en, pattern);
    if (esCount !== enCount) failures.push(`${label} differ: ${es} (${esCount}) vs ${en} (${enCount})`);
  }
}

const esHome = readFileSync(join(output, "index.html"), "utf8");
const enHome = readFileSync(join(output, "en.html"), "utf8");
if (!esHome.includes('<html lang="es-AR"')) failures.push("Spanish HTML language is incorrect");
if (!enHome.includes('<html lang="en-US"')) failures.push("English HTML language is incorrect");

const esArtworks = readdirSync(join(output, "obras")).filter((file) => file.endsWith(".html")).sort();
const enArtworks = readdirSync(join(output, "en/artworks")).filter((file) => file.endsWith(".html")).sort();
if (JSON.stringify(esArtworks) !== JSON.stringify(enArtworks)) failures.push("Artwork detail routes are not equivalent between languages");

const esNotes = readdirSync(join(output, "notas")).filter((file) => file.endsWith(".html")).sort();
const enNotes = readdirSync(join(output, "en/journal")).filter((file) => file.endsWith(".html")).sort();
if (JSON.stringify(esNotes) !== JSON.stringify(enNotes)) failures.push("Journal detail routes are not equivalent between languages");

for (const file of ["robots.txt.body", "sitemap.xml.body"]) {
  if (!existsSync(join(output, file))) failures.push(`Missing generated SEO endpoint: ${file}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`i18n validation passed: ${pairs.length} page pairs, ${esArtworks.length} artworks and ${esNotes.length} journal entries.`);
