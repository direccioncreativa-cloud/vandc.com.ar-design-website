export type Note = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  displayDate: string;
  eyebrow: string;
  excerpt: string;
  primaryKeyword: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  content: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  internalLinks: Array<{
    label: string;
    href: string;
  }>;
  ctaLabel: string;
  ctaHref: string;
  schemaSuggestion: string;
};

export const notes: Note[] = [
  {
    slug: "black-cat-collection-experience-barrio-chino",
    title: "Black Cat Collection Experience: arte, gatos negros y segundas oportunidades en Barrio Chino",
    seoTitle: "Black Cat Collection Experience en Barrio Chino",
    seoDescription:
      "Experiencia artística de Van D.C. en La Panera Rosa de Barrio Chino, inspirada en gatos negros, adopción y segundas oportunidades.",
    date: "2026-07-04",
    displayDate: "4 de julio de 2026",
    eyebrow: "Black Cat Collection",
    excerpt:
      "La primera experiencia artística inspirada en Black Cat Collection llega a La Panera Rosa de Barrio Chino: dos horas para pintar, compartir y mirar distinto la historia de los gatos negros.",
    primaryKeyword: "Black Cat Collection",
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
      {
        heading: "Qué es Black Cat Collection Experience",
        paragraphs: [
          "Black Cat Collection Experience es una experiencia artística de Van D.C. inspirada en una colección sobre prejuicio, amor y segundas oportunidades. El encuentro sucede en La Panera Rosa de Barrio Chino y propone dos horas para acercarse al universo de la colección, pintar una obra propia y compartir una experiencia creativa atravesada por una historia.",
          "La propuesta está pensada para personas que quieren vivir el arte de cerca: no solo mirar una obra terminada, sino entrar en su narrativa, comprender su pregunta emocional y llevarse una pieza creada durante el encuentro."
        ]
      },
      {
        heading: "Gatos negros, adopción y segundas oportunidades",
        paragraphs: [
          "Black Cat Collection nace de una pregunta sensible: ¿qué pasa con aquello que no es elegido por miedo, superstición o prejuicio? Durante mucho tiempo, los gatos negros fueron asociados a la mala suerte y todavía hoy muchos esperan más tiempo para ser adoptados.",
          "Esta serie toma esa herida social y la transforma en un recorrido visual de ternura, cuidado y reparación. Black Cat Collection es una colección de Van D.C. sobre prejuicio, amor y segundas oportunidades, inspirada en la historia social de los gatos negros y su espera en procesos de adopción."
        ]
      },
      {
        heading: "Una colección convertida en experiencia artística",
        paragraphs: [
          "La colección está compuesta por cuatro obras y cuatro capítulos: Retrato Lúdico, Sombras de Confianza, Serena Intuición y Abrazo Refugio. Juntas narran un viaje emocional: de la soledad al vínculo, de la desconfianza al refugio, de no ser elegido a encontrar un lugar donde quedarse.",
          "En esta experiencia, cada participante no solo pinta: también entra en una historia sobre mirar distinto. Para marcas, grupos, cafés o encuentros privados, la experiencia funciona como una forma sensible de conectar arte contemporáneo argentino, conversación y presencia."
        ]
      }
    ],
    internalLinks: [
      { label: "Ver experiencias artísticas", href: "/experiencias" },
      { label: "Conocer obras originales", href: "/obras" },
      { label: "Consultar una experiencia", href: "/contacto" }
    ],
    ctaLabel: "Ver experiencias",
    ctaHref: "/experiencias",
    schemaSuggestion: "Article + BreadcrumbList. Event solo cuando haya fecha, horario y datos completos confirmados del encuentro."
  },
  {
    slug: "elegirse-obra-estado-interior",
    title: "Elegirse: cuando una obra también puede ser un estado interior",
    seoTitle: "Colección Elegirse: arte emocional de Van D.C.",
    seoDescription:
      "Elegirse reúne Paz Interior, Intuición y Actitud: obras de Van D.C. sobre calma, decisión y estados interiores.",
    date: "2026-07-02",
    displayDate: "2 de julio de 2026",
    eyebrow: "Colección Elegirse",
    excerpt:
      "Elegirse es una colección de Van D.C. sobre calma, intuición y actitud: tres estados emocionales convertidos en obra.",
    primaryKeyword: "colección Elegirse",
    keywords: [
      "colección Elegirse",
      "arte emocional",
      "arte contemporáneo Buenos Aires",
      "obra original argentina",
      "Van D.C.",
      "Paz Interior",
      "Intuición",
      "Actitud",
      "arte para interiores",
      "comprar obra original en Buenos Aires",
      "coleccionismo de arte argentino"
    ],
    image: "/images/collections/portada-coleccion-elegirse.webp",
    imageAlt: "Portada de la colección Elegirse de Van D.C. con los estados Paz Interior, Intuición y Actitud.",
    content: [
      {
        heading: "Qué es la colección Elegirse",
        paragraphs: [
          "Elegirse es una colección de Van D.C. sobre la posibilidad de volver a una misma. Está compuesta por tres obras: Paz Interior, Intuición y Actitud. Tres estados. Tres decisiones. Una misma mujer.",
          "Cada pieza nace de una experiencia interna concreta y transforma una emoción en imagen, color, gesto y presencia. La colección propone arte emocional contemporáneo para mirar hacia adentro sin perder claridad visual."
        ]
      },
      {
        heading: "Paz Interior, Intuición y Actitud",
        paragraphs: [
          "Para quien busca obra original argentina con una lectura sensible y contemporánea, Elegirse propone algo más que una imagen decorativa: abre una conversación íntima con el espacio que habita.",
          "Paz Interior habla de encontrar calma incluso cuando afuera o adentro todo parece estar en movimiento. Intuición aparece como una forma de volver a confiar en aquello que todavía no se ve. Actitud representa esos días en los que avanzar no depende de tener ganas, sino de elegir sostenerse igual."
        ]
      },
      {
        heading: "Arte emocional para interiores y colecciones",
        paragraphs: [
          "Estas obras no buscan ser solo retratos. Funcionan como mapas emocionales: imágenes que invitan a mirar hacia adentro, reconocer un estado y preguntarse desde dónde queremos habitar el presente.",
          "Para interiores privados, estudios, hoteles boutique o proyectos curatoriales, Elegirse puede leerse como una serie sobre presencia, decisión y sensibilidad femenina contemporánea. En el universo de Van D.C., la obra se vuelve una forma de acompañar estados interiores y de transformar una pared en un lugar de conversación emocional."
        ]
      }
    ],
    internalLinks: [
      { label: "Ver colección Elegirse", href: "/obras?coleccion=elegirse" },
      { label: "Explorar colecciones", href: "/colecciones" },
      { label: "Consultar una obra", href: "/contacto" }
    ],
    ctaLabel: "Ver colección Elegirse",
    ctaHref: "/obras?coleccion=elegirse",
    schemaSuggestion: "Article + BreadcrumbList. VisualArtwork para cada obra individual en sus páginas de detalle."
  },
  {
    slug: "salir-al-mundo-como-artista-van-dc",
    title: "Salir al mundo como artista: la decisión de habitar el presente desde el arte",
    seoTitle: "Van D.C., artista visual contemporánea de Buenos Aires",
    seoDescription:
      "Van D.C. presenta su sitio oficial: obras originales, colecciones narrativas y experiencias artísticas en Buenos Aires.",
    date: "2026-06-30",
    displayDate: "30 de junio de 2026",
    eyebrow: "Van D.C.",
    excerpt:
      "Van D.C. presenta su sitio oficial como artista visual emergente de Buenos Aires: una casa digital para sus obras, colecciones y experiencias artísticas.",
    primaryKeyword: "artista visual Buenos Aires",
    keywords: [
      "Van D.C.",
      "artista visual Buenos Aires",
      "arte contemporáneo argentino",
      "artista emergente argentina",
      "comprar obra original",
      "experiencias artísticas",
      "arte emocional",
      "galería de arte Buenos Aires",
      "curaduría de arte argentino",
      "obra original para coleccionistas"
    ],
    image: "/images/home/acerca-de-mi-hero.webp",
    imageAlt: "Retrato de Van D.C., artista visual argentina, en una escena de presentación personal.",
    content: [
      {
        heading: "Una casa digital para la obra de Van D.C.",
        paragraphs: [
          "Crear una web de arte no es solo ordenar obras en una pantalla. Para una artista emergente, también es una forma de salir al mundo y decir: esto soy, esto miro, esto construyo.",
          "Van D.C. es una artista visual contemporánea de Buenos Aires cuya obra reúne arte emocional, colecciones narrativas, obras originales y experiencias artísticas presenciales. Su sitio oficial nace como una casa digital para reunir ese universo y hacerlo visible para compradores, galerías, curadores y personas que buscan arte con historia."
        ]
      },
      {
        heading: "Habitar el presente desde el arte",
        paragraphs: [
          "A los 47 años, después de caminar luces y sombras profundas, el arte aparece como una decisión de presencia. No como una pose, ni como una carrera perfecta, sino como una forma honesta de habitar la vida.",
          "Pintar, crear colecciones y compartir experiencias se vuelve una manera de transformar heridas, preguntas y estados internos en algo visible. En Van D.C., el arte contemporáneo argentino se expresa desde una sensibilidad cercana, narrativa y emocional."
        ]
      },
      {
        heading: "Obras originales, colecciones y experiencias",
        paragraphs: [
          "Para compradores de obra original, galerías, curadores y espacios culturales, este sitio reúne el punto de partida de una identidad artística en construcción: una mirada argentina contemporánea, emocional y cercana, con obras pensadas para acompañar interiores, historias personales y encuentros.",
          "Este sitio es el comienzo de una etapa: un espacio para conocer obras como Paz Interior, Intuición, Actitud y Black Cat Collection; para consultar piezas originales; y para descubrir experiencias donde el arte no se mira desde lejos, sino que se vive, se pinta y se comparte."
        ]
      }
    ],
    internalLinks: [
      { label: "Ver obras originales", href: "/obras" },
      { label: "Explorar colecciones", href: "/colecciones" },
      { label: "Conocer experiencias artísticas", href: "/experiencias" },
      { label: "Contactar a Van D.C.", href: "/contacto" }
    ],
    ctaLabel: "Conocer obras",
    ctaHref: "/obras",
    schemaSuggestion: "Article + BreadcrumbList. Person para Van D.C. cuando se complete biografía estructurada y perfiles oficiales."
  }
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
