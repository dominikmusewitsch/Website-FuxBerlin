import BrandBand from "./BrandBand";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-[100vh] bg-orange-200 flex items-end justify-center relative">
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-bold text-black">
            @fux_berlin
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mt-2">
            Your Social Media Influencer of Choice
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Work With Me
            </button>
            <button className="bg-white text-black border border-black px-6 py-3 rounded hover:bg-gray-100 transition">
              See My Work
            </button>
          </div>
        </div>
      </section>

      {/* Neue Section */}
      <section className="relative h-[100vh] bg-gradient-to-b from-gray-50 to-gray-200 px-8 py-12">
        {/* Oben links */}
        <div className="absolute top-0 left-0 text-left mt-8 ml-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
            SOCIAL MEDIA MANAGER
          </h2>
          <p className="text-lg md:text-xl text-gray-700">with passion</p>
        </div>

        {/* Mitte (frei für Bilder) */}
        <div className="flex-1 flex justify-center items-center">
          {/* Hier kommen später deine Bilder */}
        </div>

        {/* Unten rechts */}
        <div className="absolute bottom-0 right-0 mb-8 mr-8 text-right">
          {/* Zeile 1: Button + „who emphasizes“ */}
          <div className="flex items-center gap-4 justify-end">
            <button className="bg-black text-white px-4 py-2 rounded text-sm md:text-base hover:bg-gray-800 transition">
              See My Work
            </button>
            <p className="text-gray-700 text-base md:text-lg">who emphasizes</p>
          </div>

          {/* Zeile 2: CREATIVE STORYTELLING */}
          <p className="text-xl md:text-2xl font-bold text-black mt-2">
            CREATIVE STORYTELLING
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-100 py-6">
        <BrandBand />
      </section>
    </main>
  );
}
