export type Note = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  content: string[];
};

export const notes: Note[] = [
  {
    slug: "black-cat-collection-experience-barrio-chino",
    title: "Black Cat Collection Experience: arte, gatos negros y segundas oportunidades en Barrio Chino",
    date: "2026-07-04",
    excerpt:
      "La primera experiencia artística inspirada en Black Cat Collection llega a La Panera Rosa de Barrio Chino: dos horas para pintar, compartir y mirar distinto la historia de los gatos negros.",
    keywords: [
      "Black Cat Collection",
      "experiencia artística Buenos Aires",
      "taller de arte Barrio Chino",
      "gatos negros adopción",
      "arte contemporáneo argentino",
      "Van D.C.",
      "La Panera Rosa Barrio Chino"
    ],
    image: "/images/experiencias/black-cat-experience.webp",
    imageAlt: "Participantes pintando obras de Black Cat Collection durante una experiencia artística de Van D.C.",
    content: [
      "Hoy se estrena la primera experiencia artística inspirada en Black Cat Collection, una colección de Van D.C. que habla sobre prejuicio, amor y segundas oportunidades. El encuentro será en La Panera Rosa de Barrio Chino y propone dos horas para acercarse al universo de la colección, pintar una obra propia y compartir una experiencia creativa atravesada por una historia.",
      "Black Cat Collection nace de una pregunta sensible: ¿qué pasa con aquello que no es elegido por miedo, superstición o prejuicio? Durante mucho tiempo, los gatos negros fueron asociados a la mala suerte y todavía hoy muchos esperan más tiempo para ser adoptados. Esta serie toma esa herida social y la transforma en un recorrido visual de ternura, cuidado y reparación.",
      "La colección está compuesta por cuatro obras y cuatro capítulos: Retrato Lúdico, Sombras de Confianza, Serena Intuición y Abrazo Refugio. Juntas narran un viaje emocional: de la soledad al vínculo, de la desconfianza al refugio, de no ser elegido a encontrar un lugar donde quedarse. En esta experiencia, cada participante no solo pinta: también entra en una historia sobre mirar distinto."
    ]
  }
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
