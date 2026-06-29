export type ArtworkCategory =
  | "obra-original"
  | "coleccion-elegirse"
  | "black-cat"
  | "carbonilla";

export type ArtworkStatus =
  | "disponible"
  | "vendida"
  | "reservada"
  | "en-proceso"
  | "a-confirmar";

export type ArtworkOrientation =
  | "vertical"
  | "horizontal"
  | "cuadrada"
  | "a-confirmar";

export type ArtworkFilter =
  | "todas"
  | "destacadas"
  | "obra-original"
  | "coleccion-elegirse"
  | "black-cat"
  | "carbonilla"
  | "acrilico"
  | "madera"
  | "tela";

export type Artwork = {
  id: string;
  title: string;
  slug: string;
  collection: string;
  category: ArtworkCategory;
  technique: string;
  support: string;
  size: string;
  orientation: ArtworkOrientation;
  status: ArtworkStatus;
  year?: string;
  image: string;
  gallery: string[];
  description: string;
  quote?: string;
  featured?: boolean;
  filters: ArtworkFilter[];
};

export const filterOptions: { label: string; value: ArtworkFilter }[] = [
  { label: "Todas", value: "todas" },
  { label: "Destacadas", value: "destacadas" },
  { label: "Obras originales", value: "obra-original" },
  { label: "Acrílico", value: "acrilico" },
  { label: "Carbonilla", value: "carbonilla" },
  { label: "En madera", value: "madera" },
  { label: "En tela", value: "tela" },
  { label: "Elegirse", value: "coleccion-elegirse" },
  { label: "Black Cat", value: "black-cat" }
];

export const statusLabels: Record<ArtworkStatus, string> = {
  disponible: "Disponible",
  vendida: "Vendida",
  reservada: "Reservada",
  "en-proceso": "En proceso",
  "a-confirmar": "Consultar"
};

export const artworks: Artwork[] = [
  {
    id: "paz-interior",
    title: "Paz Interior",
    slug: "paz-interior",
    collection: "Elegirse",
    category: "coleccion-elegirse",
    technique: "Acrílico",
    support: "Lienzo tela",
    size: "60 × 60 cm",
    orientation: "cuadrada",
    status: "disponible",
    year: "2024",
    image: "/images/obras/paz-interior.webp",
    gallery: ["/images/obras/paz-interior.webp", "/images/obras/paz-interior-medidas.webp"],
    description:
      "Paz Interior nace cuando la mente no se detiene y se necesita aprender a encontrar calma en medio del ruido.",
    quote: "No se trata de tenerlo todo en calma, sino de encontrar calma en medio de todo.",
    featured: true,
    filters: ["destacadas", "coleccion-elegirse", "acrilico", "tela"]
  },
  {
    id: "intuicion",
    title: "Intuición",
    slug: "intuicion",
    collection: "Elegirse",
    category: "coleccion-elegirse",
    technique: "Acrílico",
    support: "Lienzo en madera",
    size: "40 × 60 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2024",
    image: "/images/obras/intuicion.webp",
    gallery: ["/images/obras/intuicion.webp", "/images/obras/intuicion-medidas.webp"],
    description:
      "Intuición aparece para volver a confiar, incluso en aquello que todavía no puede verse.",
    quote: "Cuando el ruido se detiene, la intuición habla.",
    featured: true,
    filters: ["destacadas", "coleccion-elegirse", "acrilico", "madera"]
  },
  {
    id: "actitud",
    title: "Actitud",
    slug: "actitud",
    collection: "Elegirse",
    category: "coleccion-elegirse",
    technique: "Acrílico",
    support: "Lienzo en madera",
    size: "50 × 70 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2024",
    image: "/images/obras/actitud.webp",
    gallery: ["/images/obras/actitud.webp", "/images/obras/actitud-medidas.webp"],
    description:
      "Actitud fue creada para esos días en los que la energía no llega sola y avanzar se convierte en un acto de pura voluntad.",
    quote: "No es arrogancia, es la certeza de quien ya se eligió.",
    featured: true,
    filters: ["destacadas", "coleccion-elegirse", "acrilico", "madera"]
  },
  {
    id: "expectativa",
    title: "Expectativa",
    slug: "expectativa",
    collection: "Obras originales",
    category: "obra-original",
    technique: "Acrílico",
    support: "Bastidor de madera",
    size: "63 × 90 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2026",
    image: "/images/obras/espectativa.webp",
    gallery: ["/images/obras/espectativa.webp"],
    description:
      "Obra original de Van D.C. creada desde la fuerza expresiva del gesto, la mirada y la presencia.",
    featured: true,
    filters: ["destacadas", "obra-original", "acrilico", "madera"]
  },
  {
    id: "proximidad",
    title: "Proximidad",
    slug: "proximidad",
    collection: "Obras originales",
    category: "obra-original",
    technique: "Acrílico / técnica mixta",
    support: "",
    size: "",
    orientation: "horizontal",
    status: "disponible",
    year: "2026",
    image: "/images/obras/proximidad.webp",
    gallery: ["/images/obras/proximidad.webp"],
    description:
      "Obra original sobre el instante en que la cercanía empieza a contar una historia.",
    filters: ["obra-original", "acrilico"]
  },
  {
    id: "encuentro-etereo",
    title: "Encuentro Etéreo",
    slug: "encuentro-etereo",
    collection: "Obras originales",
    category: "obra-original",
    technique: "Carbonilla",
    support: "",
    size: "",
    orientation: "horizontal",
    status: "disponible",
    year: "2026",
    image: "/images/obras/encuentro-etereo.webp",
    gallery: ["/images/obras/encuentro-etereo.webp"],
    description:
      "Obra original de atmósfera íntima, donde el encuentro se vuelve pausa, memoria y presencia.",
    filters: ["obra-original", "carbonilla"]
  },
  {
    id: "elocuente-intimidad",
    title: "Elocuente Intimidad",
    slug: "elocuente-intimidad",
    collection: "Obras originales",
    category: "carbonilla",
    technique: "Carbonilla",
    support: "Papel",
    size: "70 × 100 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2026",
    image: "/images/obras/elocuente-intimidad.webp",
    gallery: ["/images/obras/elocuente-intimidad.webp"],
    description:
      "Obra a carbonilla donde el cuerpo, el gesto y el silencio construyen una intimidad expresiva.",
    filters: ["obra-original", "carbonilla"]
  },
  {
    id: "indulgencia-conexion-embriagadora",
    title: "Indulgencia / Conexión Embriagadora",
    slug: "indulgencia-conexion-embriagadora",
    collection: "Obras originales",
    category: "carbonilla",
    technique: "Carbonilla",
    support: "Papel",
    size: "70 × 100 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2026",
    image: "/images/obras/indulgencia-conexion-embriagadora.webp",
    gallery: ["/images/obras/indulgencia-conexion-embriagadora.webp"],
    description:
      "Obra a carbonilla sobre la intensidad del vínculo, el deseo y la conexión emocional.",
    filters: ["obra-original", "carbonilla"]
  },
  {
    id: "tango-argentino",
    title: "Tango Argentino / Arte en un Compás",
    slug: "tango-argentino",
    collection: "Obras originales",
    category: "carbonilla",
    technique: "Carbonilla",
    support: "Papel",
    size: "100 × 70 cm",
    orientation: "horizontal",
    status: "disponible",
    year: "2026",
    image: "/images/obras/tango-argentino.webp",
    gallery: ["/images/obras/tango-argentino.webp"],
    description:
      "Obra horizontal a carbonilla inspirada en el tango, el compás y la tensión poética del encuentro.",
    filters: ["obra-original", "carbonilla"]
  },
  {
    id: "retrato-ludico",
    title: "Retrato Lúdico",
    slug: "retrato-ludico",
    collection: "Black Cat Collection",
    category: "black-cat",
    technique: "Acrílico",
    support: "Bastidor de madera",
    size: "40 × 60 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2025",
    image: "/images/obras/black-cat-retrato-ludico.webp",
    gallery: ["/images/obras/black-cat-retrato-ludico.webp"],
    description:
      "Un retrato de frente, como una pequeña foto de identidad. El gato se muestra entero, serio, magnético, casi jugando a ser descubierto.",
    quote: "La presencia en soledad.",
    filters: ["black-cat", "acrilico", "madera"]
  },
  {
    id: "sombras-de-confianza",
    title: "Sombras de Confianza",
    slug: "sombras-de-confianza",
    collection: "Black Cat Collection",
    category: "black-cat",
    technique: "Acrílico",
    support: "Lienzo tela",
    size: "40 × 60 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2025",
    image: "/images/obras/black-cat-sombras-confianza.webp",
    gallery: ["/images/obras/black-cat-sombras-confianza.webp"],
    description:
      "La primera cercanía nunca es total. El gato se apoya, pero conserva la alerta; quiere confiar.",
    quote: "Desconfianza que empieza a ceder.",
    filters: ["black-cat", "acrilico", "tela"]
  },
  {
    id: "serena-intuicion",
    title: "Serena Intuición",
    slug: "serena-intuicion",
    collection: "Black Cat Collection",
    category: "black-cat",
    technique: "Acrílico",
    support: "Lienzo tela",
    size: "40 × 60 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2025",
    image: "/images/obras/black-cat-serena-intuicion.webp",
    gallery: ["/images/obras/black-cat-serena-intuicion.webp"],
    description:
      "Él mira al gato de costado, sin invadirlo. Hay una intimidad nueva en esa pausa: el vínculo todavía no habla, pero ya empieza a escucharse.",
    quote: "Comunicación silenciosa.",
    filters: ["black-cat", "acrilico", "tela"]
  },
  {
    id: "abrazo-refugio",
    title: "Abrazo Refugio",
    slug: "abrazo-refugio",
    collection: "Black Cat Collection",
    category: "black-cat",
    technique: "Acrílico",
    support: "Lienzo tela",
    size: "40 × 60 cm",
    orientation: "vertical",
    status: "disponible",
    year: "2025",
    image: "/images/obras/black-cat-abrazo-refugio.webp",
    gallery: ["/images/obras/black-cat-abrazo-refugio.webp"],
    description:
      "Aquí la distancia se rinde. El gato ya no necesita medir el mundo: algo lo sostiene, algo lo elige, algo le dice, sin palabras, que puede quedarse.",
    quote: "El amor que rodea.",
    filters: ["black-cat", "acrilico", "tela"]
  }
];

export function getArtworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getArtworkCollectionLabel(artwork: Artwork) {
  return artwork.collection;
}

export function getArtworkStatusLabel(status: ArtworkStatus) {
  return statusLabels[status];
}
