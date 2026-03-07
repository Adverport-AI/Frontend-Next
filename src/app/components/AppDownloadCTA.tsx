"use client";

import { motion } from "motion/react";
import pentagonSvgPaths from "../../imports/svg-2ykxxdmmup";
import { GooglePlayButtonWrapper, AppStoreButtonWrapper } from "./StoreButtons";

const imgPolygon1 = "/assets/5d48399b972281369c0877ffc30641392cc0dda2.png";
const imgEllipse3 = "/assets/437429ee8b74c5985f1fe85250ee1e7574819fb0.png";

export function AppDownloadCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/5">
      {/* CSS keyframe for smooth GPU-composited rotation — avoids Framer Motion stutter */}
      <style>{`
        @keyframes cta-pentagon-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0508] to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d21027]/10 via-transparent to-[#EB5200]/10" />

      {/* Polygon blur shape */}
      <div className="absolute h-[300px] sm:h-[400px] left-[-80px] sm:left-[-100px] top-[-50px] w-[350px] sm:w-[500px] opacity-40 pointer-events-none">
        <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
      </div>

      {/* Ellipse glow */}
      <div className="absolute h-[250px] sm:h-[350px] right-[-60px] sm:right-[-80px] bottom-[-40px] w-[300px] sm:w-[400px] opacity-40 pointer-events-none">
        <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
      </div>

      {/* Red gradient blurs */}
      <div className="absolute blur-[120px] sm:blur-[160px] h-[200px] sm:h-[300px] left-[10%] opacity-60 top-[20%] w-[300px] sm:w-[500px] bg-[#fa1111] pointer-events-none" />
      <div className="absolute blur-[120px] sm:blur-[160px] h-[200px] sm:h-[250px] right-[10%] opacity-40 bottom-[10%] w-[250px] sm:w-[400px] bg-[#d21027] pointer-events-none" />

      {/* Animated pentagon - left
          Outer motion.div: y-float only (easeInOut, Framer Motion)
          Inner div: rotation via CSS animation (linear, GPU-composited → no stutter) */}
      <motion.div
        className="absolute h-[250px] sm:h-[400px] lg:h-[500px] left-[-150px] sm:left-[-200px] lg:left-[-220px] top-[50%] -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] mix-blend-overlay opacity-40 sm:opacity-50 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="size-full"
          style={{
            animation: "cta-pentagon-spin 40s linear infinite",
            willChange: "transform",
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
            <g filter="url(#filter_cta_left)" style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p155bdde0} fill="url(#paint_cta_left)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter_cta_left" width="916.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="6.6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1" />
                <feBlend in="SourceGraphic" in2="effect1" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_left" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Animated pentagon - right */}
      <motion.div
        className="absolute h-[300px] sm:h-[450px] lg:h-[550px] right-[-180px] sm:right-[-230px] lg:right-[-250px] top-[50%] -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] mix-blend-overlay opacity-40 sm:opacity-50 pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="size-full"
          style={{
            animation: "cta-pentagon-spin 40s linear infinite",
            willChange: "transform",
          }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
            <g filter="url(#filter_cta_right)" style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p3357f280} fill="url(#paint_cta_right)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter_cta_right" width="916.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="6.6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1" />
                <feBlend in="SourceGraphic" in2="effect1" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_right" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="#ff0000" stopOpacity="0.3" />
                <stop offset="1" stopColor="#d21027" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] mb-6 shadow-[0_0_40px_rgba(210,16,39,0.4)]">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            <span>Alışveriş Yap, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kazanç Sağla</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Adverport uygulamasını indir, sevdiğin ürünleri paylaş ve her satıştan komisyon kazan. Hemen başla!
          </p>
          <div className="flex flex-row gap-3 justify-center max-w-xs mx-auto">
            <div className="h-[44px] sm:h-[50px] flex-1">
              <GooglePlayButtonWrapper />
            </div>
            <div className="h-[44px] sm:h-[50px] flex-1">
              <AppStoreButtonWrapper />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
