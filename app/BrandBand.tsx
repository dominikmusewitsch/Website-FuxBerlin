import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";

const brandLogos = [
  {
    src: "/logos/SOFACOMPANY.png",
    alt: "Sofa Company",
    href: "https://sofacompany.com/",
    width: 813,
  },
  {
    src: "/logos/Ikea.png",
    alt: "Ikea",
    href: "https://www.ikea.com/de/de/",
    width: 200,
  },
  {
    src: "/logos/nuvoo.avif",
    alt: "Nuvoo",
    href: "https://nuvoo.de/",
    width: 127,
  },
  {
    src: "/logos/benuta-v2.png",
    alt: "Benuta",
    href: "https://www.benuta.de/",
    width: 80,
  },
  {
    src: "/logos/design-bestseller-v2.png",
    alt: "Design Bestseller",
    href: "https://www.design-bestseller.de/",
    width: 207,
  },
  {
    src: "/logos/Kahla.png",
    alt: "Kahla",
    href: "https://www.kahlaporzellan.com/",
    width: 145,
  },
  {
    src: "/logos/Sonos.png",
    alt: "Sonos",
    href: "https://www.sonos.com/",
    width: 386,
  },
  {
    src: "/logos/schoener-wohnen-kollektion.png",
    alt: "Schöner Wohnen",
    href: "https://www.schoener-wohnen-kollektion.de/",
    width: 149,
  },
  {
    src: "/logos/MotelAMiio.png",
    alt: "MotelAMiio",
    href: "https://www.motelamiio.com/",
    width: 107,
  },
  {
    src: "/logos/grau-v2.avif",
    alt: "Grau",
    href: "https://www.grau.art/",
    width: 311,
  },
  {
    src: "/logos/Hisense.png",
    alt: "Hisense",
    href: "https://de.hisense.com/",
    width: 504,
  },
  {
    src: "/logos/lumas-v2.png",
    alt: "Lumas",
    href: "https://www.lumas.de/",
    width: 404,
  },
  {
    src: "/logos/rebel-walls-v2.png",
    alt: "Rebel Walls",
    href: "https://rebelwalls.com/",
    width: 80,
  },
  {
    src: "/logos/Fatboy-v2.png",
    alt: "Fatboy",
    href: "https://www.fatboy.com/",
    width: 197,
  },
  {
    src: "/logos/nooma.png",
    alt: "Nooma",
    href: "https://noo.ma/de/",
    width: 294,
  },
  {
    src: "/logos/Thonet-v2.png",
    alt: "Thonet",
    href: "https://www.thonet.de/",
    width: 297,
  },
  {
    src: "/logos/Kettler-Logo-v2.png",
    alt: "Kettler",
    href: "https://www.kettler-garden.com/",
    width: 86,
  },
];

const newLogoHeight = 40;

export default function BrandBand() {
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
              height={newLogoHeight} // logoHeight
              width={Math.round((logo.width / 80) * newLogoHeight)} // proportional
              style={{ display: "block" }}
            />
          ),
          href: logo.href,
        }))}
        speed={100}
        direction="left"
        logoHeight={newLogoHeight}
        gap={50}
        hoverSpeed={0}
        scaleOnHover
        fadeOut={false}
        ariaLabel="Brand partners"
      />
    </div>
  );
}
