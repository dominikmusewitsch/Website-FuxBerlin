import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";

const brandLogos = [
  {
    src: "/logos/benuta.png",
    alt: "Benuta",
    href: "https://www.benuta.de/",
    width: 80,
  },
  {
    src: "/logos/design-bestseller.png",
    alt: "Design Bestseller",
    href: "https://www.design-bestseller.de/",
    width: 107,
  },
  {
    src: "/logos/grau.avif",
    alt: "Grau",
    href: "https://www.grau.art/",
    width: 171,
  },
  {
    src: "/logos/Hisense.png",
    alt: "Hisense",
    href: "https://de.hisense.com/",
    width: 504,
  },
  {
    src: "/logos/Ikea.png",
    alt: "Ikea",
    href: "https://www.ikea.com/de/de/",
    width: 200,
  },
  {
    src: "/logos/Kahla.png",
    alt: "Kahla",
    href: "https://www.kahlaporzellan.com/",
    width: 145,
  },
  {
    src: "/logos/lumas.png",
    alt: "Lumas",
    href: "https://www.lumas.de/",
    width: 107,
  },
  {
    src: "/logos/MotelAMiio.png",
    alt: "MotelAMiio",
    href: "https://www.motelamiio.com/",
    width: 107,
  },
  {
    src: "/logos/nooma.png",
    alt: "Nooma",
    href: "https://noo.ma/de/",
    width: 294,
  },
  {
    src: "/logos/rebel-walls.png",
    alt: "Rebel Walls",
    href: "https://rebelwalls.com/",
    width: 192,
  },
  {
    src: "/logos/schoener-wohnen-kollektion.png",
    alt: "Schöner Wohnen",
    href: "https://www.schoener-wohnen-kollektion.de/",
    width: 149,
  },
  {
    src: "/logos/SOFACOMPANY.png",
    alt: "Sofa Company",
    href: "https://sofacompany.com/",
    width: 813,
  },
  {
    src: "/logos/Sonos.png",
    alt: "Sonos",
    href: "https://www.sonos.com/",
    width: 386,
  },
  {
    src: "/logos/Thonet.png",
    alt: "Thonet",
    href: "https://www.thonet.de/",
    width: 120,
  },
  {
    src: "/logos/nuvoo.avif",
    alt: "Nuvoo",
    href: "https://nuvoo.de/",
    width: 124,
  },
  {
    src: "/logos/Kettler-Logo.png",
    alt: "Kettler",
    href: "https://www.kettler-garden.com/",
    width: 120,
  },
  {
    src: "/logos/Fatboy.png",
    alt: "Fatboy",
    href: "https://www.fatboy.com/",
    width: 80,
  },
];

export default function App() {
  return (
    <div
      style={{
        height: "120px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LogoLoop
        logos={brandLogos.map((logo) => ({
          node: (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              height={80}
              width={logo.width || 120}
              style={{ display: "block", verticalAlign: "middle" }}
            />
          ),
          href: logo.href,
        }))}
        speed={100}
        direction="left"
        logoHeight={80}
        gap={20}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Brand partners"
      />
    </div>
  );
}
