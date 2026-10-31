export type EnglishNote = {
  slug: string; title: string; description: string; date: string; eyebrow: string; excerpt: string;
  image: string; imageAlt: string; sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const notesEn: EnglishNote[] = [
  {
    slug: "black-cat-collection-experience-barrio-chino",
    title: "Black Cat Collection Experience: art, black cats and second chances in Buenos Aires’ Chinatown",
    description: "Van D.C.’s artistic experience at La Panera Rosa in Buenos Aires’ Chinatown, inspired by black cats, adoption and second chances.",
    date: "July 4, 2026", eyebrow: "Black Cat Collection",
    excerpt: "The first artistic experience inspired by Black Cat Collection arrives at La Panera Rosa in Buenos Aires’ Chinatown: two hours to paint, connect and see the story of black cats through a different lens.",
    image: "/images/experiencias/black-cat-experience.webp",
    imageAlt: "Participants painting works inspired by Black Cat Collection during an artistic experience by Van D.C.",
    sections: [
      { heading: "What is the Black Cat Collection Experience?", paragraphs: [
        "Black Cat Collection Experience is an artistic encounter by Van D.C., inspired by a collection about prejudice, love and second chances. Held at La Panera Rosa in Buenos Aires’ Chinatown, the two-hour experience invites participants into the collection’s world, where they create a piece of their own and share a creative moment shaped by a meaningful story.",
        "It is designed for people who want to experience art up close—not simply observe a finished work, but enter its narrative, connect with the emotional question behind it and leave with a piece they created during the encounter."
      ]},
      { heading: "Black cats, adoption and second chances", paragraphs: [
        "Black Cat Collection began with a tender question: what happens to those who are not chosen because of fear, superstition or prejudice? Black cats have long been associated with bad luck, and even today many of them wait longer to be adopted.",
        "The series takes that social wound and transforms it into a visual journey through tenderness, care and repair. It is Van D.C.’s collection about prejudice, love and second chances, inspired by the social history of black cats and the long waits many of them face in the adoption process."
      ]},
      { heading: "A collection transformed into an artistic experience", paragraphs: [
        "The collection unfolds across four artworks and four chapters: Playful Portrait, Shadows of Trust, Serene Intuition and Sheltering Embrace. Together, they trace an emotional journey—from solitude to connection, from distrust to shelter, from being overlooked to finding a place to belong.",
        "Participants do more than paint: they step into a story about learning to see differently. For brands, groups, cafés and private gatherings, the experience offers a sensitive way to bring together contemporary Argentine art, conversation and presence."
      ]}
    ]
  },
  {
    slug: "elegirse-obra-estado-interior",
    title: "Choosing Yourself: when an artwork becomes an inner state",
    description: "Inner Peace, Intuition and Attitude: three works by Van D.C. about calm, choice and the inner states we learn to inhabit.",
    date: "July 2, 2026", eyebrow: "Choosing Yourself",
    excerpt: "Choosing Yourself is Van D.C.’s collection about calm, intuition and attitude—three emotional states transformed into art.",
    image: "/images/collections/portada-coleccion-elegirse.webp",
    imageAlt: "Cover of Van D.C.’s Choosing Yourself collection, featuring Inner Peace, Intuition and Attitude.",
    sections: [
      { heading: "What is the Choosing Yourself collection?", paragraphs: [
        "Choosing Yourself is Van D.C.’s collection about finding the way back to oneself. It brings together three works: Inner Peace, Intuition and Attitude. Three states. Three choices. The same woman.",
        "Each piece begins with a specific inner experience and transforms emotion into image, color, gesture and presence. The collection offers a contemporary form of emotional art—one that looks inward without losing its visual clarity."
      ]},
      { heading: "Inner Peace, Intuition and Attitude", paragraphs: [
        "For those looking for original Argentine art with a sensitive, contemporary perspective, Choosing Yourself offers more than a decorative image: it opens an intimate conversation with the space it inhabits.",
        "Inner Peace is about finding calm even when everything—inside or out—seems to be in motion. Intuition is a way of learning to trust what cannot yet be seen. Attitude speaks to the days when moving forward is not about feeling ready, but choosing to keep going anyway."
      ]},
      { heading: "Emotional art for interiors and collections", paragraphs: [
        "These works are not simply portraits. They act as emotional maps: images that invite us to look inward, recognize a state and ask ourselves how we want to inhabit the present.",
        "In private interiors, studios, boutique hotels or curatorial projects, Choosing Yourself can be read as a series about presence, choice and contemporary feminine sensitivity. Within Van D.C.’s world, art becomes a companion to our inner lives—and a way of turning a wall into a space for emotional conversation."
      ]}
    ]
  },
  {
    slug: "salir-al-mundo-como-artista-van-dc",
    title: "Stepping into the world as an artist: choosing to inhabit the present through art",
    description: "Van D.C. presents her official site: original artworks, narrative collections and artistic experiences from Buenos Aires.",
    date: "June 30, 2026", eyebrow: "Van D.C.",
    excerpt: "Van D.C. introduces her official site as an emerging visual artist from Buenos Aires—a digital home for her work, collections and artistic experiences.",
    image: "/images/home/acerca-de-mi-hero.webp", imageAlt: "Portrait of Van D.C., an Argentine visual artist from Buenos Aires.",
    sections: [
      { heading: "A digital home for Van D.C.’s work", paragraphs: [
        "Creating an art website is not simply about arranging works on a screen. For an emerging artist, it is also a way of stepping into the world and saying: this is who I am, this is how I see, this is what I am building.",
        "Van D.C. is a contemporary visual artist from Buenos Aires whose practice brings together emotional art, narrative collections, original works and in-person artistic experiences. Her official site was created as a digital home for that universe—and a way to make it visible to collectors, galleries, curators and people looking for art with a story."
      ]},
      { heading: "Inhabiting the present through art", paragraphs: [
        "At 47, after walking through profound moments of both light and shadow, art appears as a choice to be present. Not a pose or a perfectly planned career, but an honest way of inhabiting life.",
        "Painting, creating collections and sharing experiences become ways of transforming wounds, questions and inner states into something visible. In Van D.C.’s work, contemporary Argentine art speaks through a perspective that is intimate, narrative and emotionally direct."
      ]},
      { heading: "Original artworks, collections and experiences", paragraphs: [
        "For collectors, galleries, curators and cultural spaces, this site marks the beginning of an artistic identity in motion: a contemporary Argentine perspective that is emotional and approachable, with works created to accompany interiors, personal stories and shared encounters.",
        "This is the beginning of a new chapter—a place to discover works such as Inner Peace, Intuition, Attitude and Black Cat Collection; to inquire about original pieces; and to experience art not from a distance, but as something to be lived, painted and shared."
      ]}
    ]
  }
];

export function getNoteEn(slug: string) { return notesEn.find((note) => note.slug === slug); }
