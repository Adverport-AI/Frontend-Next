import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-2ykxxdmmup";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div
          className={`bg-gradient-to-r from-[#d21027] from-[40%] to-black rounded-[23px] shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-3" : "py-4"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[100px] h-[37px]">
              <svg
                className="block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 37.3135"
              >
                <g id="logo white">
                  <g id="Group 2">
                    <path
                      d={svgPaths.p3e243280}
                      fill="white"
                      id="Shape"
                    />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p60f7f80}
                      fill="white"
                      fillRule="evenodd"
                      id="Path"
                    />
                    <path d={svgPaths.p4f87cf0} fill="white" id="Shape_2" />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p2fcaaa60}
                      fill="white"
                      fillRule="evenodd"
                      id="Path_2"
                    />
                    <path d={svgPaths.p2c68200} fill="white" id="Shape_3" />
                    <path d={svgPaths.pd9c8200} fill="white" id="Shape_4" />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p24fb9700}
                      fill="white"
                      fillRule="evenodd"
                      id="Path_3"
                    />
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p3dbee080}
                      fill="white"
                      fillRule="evenodd"
                      id="Path_4"
                    />
                    <path d={svgPaths.pc074f00} fill="white" id="Shape_5" />
                  </g>
                  <path d={svgPaths.p383bd500} fill="white" id="Shape_6" />
                </g>
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#about" className="text-white text-[15px] hover:text-[#e75f01] transition-colors">
              Hakkımızda
            </a>
            <a href="#features" className="text-white text-[15px] hover:text-[#e75f01] transition-colors">
              Özellikler
            </a>
            <a href="#premium" className="text-white text-[15px] hover:text-[#e75f01] transition-colors">
              Premium
            </a>
            <a href="#contact" className="text-white text-[15px] hover:text-[#e75f01] transition-colors">
              İletişim
            </a>
            <a href="#blog" className="text-white text-[15px] hover:text-[#e75f01] transition-colors">
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-white text-[#d21027] px-6 py-2.5 rounded-[12px] text-[15px] font-semibold hover:bg-[#e75f01] hover:text-white transition-all">
              Uygulamayı İndir
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
