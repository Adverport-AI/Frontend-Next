"use client";

import Link from "next/link";
import { useState } from "react";
import svgPaths from "../../imports/svg-2ykxxdmmup";

type ActivePage = "markalar" | "ozellikler" | "premium" | "blog" | "iletisim";

interface NavbarProps {
  activePage?: ActivePage;
}

const navLinks: { label: string; href: string; page: ActivePage }[] = [
  { label: "Markalar", href: "/markalar", page: "markalar" },
  { label: "Özellikler", href: "/ozellikler", page: "ozellikler" },
  { label: "Premium", href: "/premium", page: "premium" },
  { label: "Blog", href: "/blog", page: "blog" },
  { label: "İletişim", href: "/iletisim", page: "iletisim" },
];

function LogoWhite() {
  return (
    <div className="h-[37.314px] w-[100px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3135">
        <g id="logo white">
          <g id="Group 2">
            <path d={svgPaths.p3e243280} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p60f7f80} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p4f87cf0} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p2fcaaa60} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p2c68200} fill="white" />
            <path d={svgPaths.pd9c8200} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p24fb9700} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3dbee080} fill="white" fillRule="evenodd" />
            <path d={svgPaths.pc074f00} fill="white" />
          </g>
          <path d={svgPaths.p383bd500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export function Navbar({ activePage }: NavbarProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStoreRedirect = () => {
    if (typeof navigator === "undefined") return;
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open("https://apps.apple.com/app/adverport", "_blank");
    } else if (/android/i.test(userAgent)) {
      window.open("https://play.google.com/store/apps/details?id=com.adverport", "_blank");
    } else {
      window.open("https://apps.apple.com/app/adverport", "_blank");
    }
  };

  return (
    <nav className="fixed top-[20px] sm:top-[20px] min-[800px]:top-[16px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] sm:w-[calc(100%-68px)] min-[800px]:max-w-[780px] lg:max-w-[860px]">
      <div className="bg-gradient-to-r from-[#d21027] from-[40%] to-black rounded-[18px] sm:rounded-[23px] min-[800px]:rounded-[16px] shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] px-4 sm:px-6 min-[800px]:px-5 py-3 sm:py-4 min-[800px]:py-2.5">
        <div className="flex items-center justify-between min-[800px]:justify-center min-[800px]:gap-10 lg:gap-14">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="scale-75 sm:scale-100 origin-left">
              <LogoWhite />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden min-[800px]:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                className={`font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors ${
                  activePage === link.page ? "text-[#ff6b6b]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden min-[800px]:block">
            <button
              onClick={handleStoreRedirect}
              className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-5 py-2 rounded-[12px] font-semibold text-[14px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all"
            >
              Ücretsiz Başla
            </button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="min-[800px]:hidden flex items-center gap-3">
            <button
              onClick={handleStoreRedirect}
              className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-4 py-2 rounded-[14px] font-semibold text-[13px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all"
            >
              Ücretsiz Başla
            </button>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="min-[800px]:hidden mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-['Inter',sans-serif] text-white text-[15px] font-medium ${
                    activePage === link.page ? "text-[#ff6b6b]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
