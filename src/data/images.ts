/**
 * Curated high-resolution images for the landing page.
 * All URLs use Unsplash with explicit width for sharp Next.js optimization.
 */

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const images = {
  hero: {
    main: unsplash("photo-1451187580459-43490279c0fa", 2400),
    accent: unsplash("photo-1486406146926-c627a92ad1ab", 1600),
    portrait: unsplash("photo-1560250097-0b93528c311a", 1200),
    collaboration: unsplash("photo-1522071820081-009f0129c71c", 800),
    workspace: unsplash("photo-1497366216548-37526070297c", 800),
  },
  about: {
    main: unsplash("photo-1522202176988-66273c2fd55f", 1400),
    mentor: unsplash("photo-1553877522-43269d4ea984", 600),
    study: unsplash("photo-1434030216411-0b793f4b4173", 1000),
  },
  showcase: {
    bg: unsplash("photo-1486406146926-c627a92ad1ab", 2000),
    items: [
      {
        src: unsplash("photo-1516321318423-f06f85e504b3", 1200),
        alt: "Professional studying certification materials on laptop",
        span: "col-span-2 row-span-2",
      },
      {
        src: unsplash("photo-1552664730-d307ca884978", 900),
        alt: "Team collaboration in modern workspace",
        span: "col-span-1 row-span-1",
      },
      {
        src: unsplash("photo-1504384308090-c894fdcc538d", 900),
        alt: "Creative professional workspace with technology",
        span: "col-span-1 row-span-1",
      },
      {
        src: unsplash("photo-1524178232363-1fb2b075b655", 1200),
        alt: "Focused learning session in contemporary setting",
        span: "col-span-2 row-span-1",
      },
      {
        src: unsplash("photo-1522071820081-009f0129c71c", 900),
        alt: "Professionals discussing career development",
        span: "col-span-1 row-span-1",
      },
      {
        src: unsplash("photo-1523240795612-9a054b0db644", 900),
        alt: "Students engaged in professional training",
        span: "col-span-1 row-span-1",
      },
    ],
  },
} as const;
