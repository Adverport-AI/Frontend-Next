import Flo from "../../imports/Flo";
import Gap from "../../imports/Gap";
import Koton from "../../imports/Koton";
import AyakkabiDunyasi from "../../imports/AyakkabiDunyasi";
import Beymen from "../../imports/Beymen";
import Ebebek from "../../imports/Ebebek";
import MS from "../../imports/MS";

export function TrustedBrands() {
  const brands = [
    { name: "Flo", Component: Flo, width: "140px", height: "140px" },
    { name: "Gap", Component: Gap, width: "140px", height: "140px" },
    { name: "Koton", Component: Koton, width: "140px", height: "140px" },
    { name: "Ayakkabı Dünyası", Component: AyakkabiDunyasi, width: "140px", height: "140px" },
    { name: "Beymen", Component: Beymen, width: "140px", height: "140px" },
    { name: "Ebebek", Component: Ebebek, width: "140px", height: "140px" },
    { name: "M&S", Component: MS, width: "140px", height: "140px" },
  ];

  return (
    <section className="relative bg-black py-0 border-t border-white/5">
      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-8">
        {/* Marquee Container - Ready for animation */}
        <div className="relative overflow-hidden group">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Marquee track with infinite scroll animation - faster on mobile */}
          <div
            className="flex items-center gap-16 lg:gap-20 opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-marquee-mobile lg:animate-marquee-desktop"
          >
            {/* First set of logos */}
            {brands.map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex-shrink-0 transition-all duration-300 group/logo hover:scale-110 scale-[0.65] md:scale-[0.8] lg:scale-100"
                style={{ width: brand.width, height: brand.height }}
              >
                <brand.Component
                  className="w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                />
              </div>
            ))}

            {/* Duplicate set for seamless marquee effect */}
            {brands.map((brand, index) => (
              <div
                key={`brand-duplicate-${index}`}
                className="flex-shrink-0 transition-all duration-300 group/logo hover:scale-110 scale-[0.65] md:scale-[0.8] lg:scale-100"
                style={{ width: brand.width, height: brand.height }}
              >
                <brand.Component
                  className="w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}