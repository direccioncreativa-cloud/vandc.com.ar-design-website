import { artworks, type Artwork, type ArtworkFilter, type ArtworkStatus } from "@/data/artworks";

const copy: Record<string, Partial<Artwork>> = {
  "paz-interior": { title: "Inner Peace", collection: "Choosing Yourself", technique: "Acrylic", support: "Canvas", description: "Inner Peace was born from the need to find stillness when the mind will not stop and the world feels loud.", quote: "It is not about having everything at peace, but finding peace within everything." },
  intuicion: { title: "Intuition", collection: "Choosing Yourself", technique: "Acrylic", support: "Canvas on wood", description: "Intuition is an invitation to trust again, even when what lies ahead cannot yet be seen.", quote: "When the noise falls silent, intuition speaks." },
  actitud: { title: "Attitude", collection: "Choosing Yourself", technique: "Acrylic", support: "Canvas on wood", description: "Attitude was created for those days when energy does not arrive on its own and moving forward becomes an act of sheer will.", quote: "It is not arrogance; it is the certainty of someone who has already chosen herself." },
  expectativa: { title: "Expectation", collection: "Original Artworks", technique: "Acrylic", support: "Wooden stretcher", description: "An original artwork by Van D.C., created through the expressive power of gesture, gaze and presence." },
  proximidad: { title: "Proximity", collection: "Original Artworks", technique: "Acrylic / mixed media", description: "An original work about the moment when closeness begins to tell a story." },
  "encuentro-etereo": { title: "Ethereal Encounter", collection: "Original Artworks", technique: "Charcoal", description: "An intimate charcoal atmosphere where encounter becomes pause, memory and presence." },
  "elocuente-intimidad": { title: "Eloquent Intimacy", collection: "Original Artworks", technique: "Charcoal", support: "Paper", description: "A charcoal work where body, gesture and silence build an expressive intimacy." },
  "indulgencia-conexion-embriagadora": { title: "Indulgence / Intoxicating Connection", collection: "Original Artworks", technique: "Charcoal", support: "Paper", description: "A charcoal work about the intensity of connection, desire and emotional closeness." },
  "tango-argentino": { title: "Argentine Tango / Art in Rhythm", collection: "Original Artworks", technique: "Charcoal", support: "Paper", description: "A horizontal charcoal work inspired by tango, rhythm and the poetic tension of an encounter." },
  "retrato-ludico": { title: "Playful Portrait", technique: "Acrylic", support: "Wooden stretcher", description: "A frontal portrait, like a small identity photograph. The cat appears whole, serious and magnetic, almost playing at being discovered.", quote: "Presence in solitude." },
  "sombras-de-confianza": { title: "Shadows of Trust", technique: "Acrylic", support: "Wooden stretcher", description: "Two figures draw closer through shadow and caution: trust begins before certainty arrives." },
  "serena-intuicion": { title: "Serene Intuition", technique: "Acrylic", support: "Wooden stretcher", description: "A quiet scene about the wordless understanding that grows when intuition is allowed to guide the bond." },
  "abrazo-refugio": { title: "Sheltering Embrace", technique: "Acrylic", support: "Wooden stretcher", description: "The journey ends in shelter: an embrace that turns being chosen into a place to stay." }
};

export const artworksEn: Artwork[] = artworks.map((artwork) => ({ ...artwork, ...copy[artwork.slug] }));

export const filterOptionsEn: { label: string; value: ArtworkFilter }[] = [
  { label: "All", value: "todas" }, { label: "Featured", value: "destacadas" },
  { label: "Original artworks", value: "obra-original" }, { label: "Acrylic", value: "acrilico" },
  { label: "Charcoal", value: "carbonilla" }, { label: "On wood", value: "madera" },
  { label: "On canvas", value: "tela" }, { label: "Choosing Yourself", value: "coleccion-elegirse" },
  { label: "Black Cat", value: "black-cat" }
];

export const statusLabelsEn: Record<ArtworkStatus, string> = {
  disponible: "Available", vendida: "Sold", reservada: "Reserved", "en-proceso": "In progress", "a-confirmar": "Enquire"
};

export function getArtworkEn(slug: string) { return artworksEn.find((artwork) => artwork.slug === slug); }
