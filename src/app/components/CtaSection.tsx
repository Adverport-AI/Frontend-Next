"use client";

import { motion } from "motion/react";
import pentagonSvgPaths from "../../imports/svg-2ykxxdmmup";
import { GooglePlayButtonWrapper, AppStoreButtonWrapper } from "./StoreButtons";

type CtaSectionProps = {
  title: string;
  highlight: string;
  description: string;
};

const imgPolygon1 = "/assets/5d48399b972281369c0877ffc30641392cc0dda2.png";
const imgEllipse3 = "/assets/437429ee8b74c5985f1fe85250ee1e7574819fb0.png";

export function CtaSection({ title, highlight, description }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <style>{`
        @keyframes cta-pentagon-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0508] to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d21027]/10 via-transparent to-[#EB5200]/10" />

      <div className="pointer-events-none absolute left-[-80px] top-[-50px] h-[300px] w-[350px] opacity-40 sm:left-[-100px] sm:h-[400px] sm:w-[500px]">
        <img alt="" className="block size-full max-w-none" src={imgPolygon1} />
      </div>
      <div className="pointer-events-none absolute bottom-[-40px] right-[-60px] h-[250px] w-[300px] opacity-40 sm:right-[-80px] sm:h-[350px] sm:w-[400px]">
        <img alt="" className="block size-full max-w-none" src={imgEllipse3} />
      </div>

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[200px] w-[300px] bg-[#fa1111] opacity-60 blur-[120px] sm:h-[300px] sm:w-[500px] sm:blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[200px] w-[250px] bg-[#d21027] opacity-40 blur-[120px] sm:h-[250px] sm:w-[400px] sm:blur-[160px]" />

      <motion.div
        className="pointer-events-none absolute left-[-150px] top-1/2 h-[250px] w-[250px] -translate-y-1/2 mix-blend-overlay opacity-40 sm:left-[-200px] sm:h-[400px] sm:w-[400px] sm:opacity-50 lg:left-[-220px] lg:h-[500px] lg:w-[500px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="size-full"
          style={{ animation: "cta-pentagon-spin 40s linear infinite", willChange: "transform", transform: "translateZ(0)" }}
        >
          <svg
            className="block size-full"
            style={{ filter: "drop-shadow(0px 4px 13px rgba(0,0,0,0.25))" }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 916.4 923.4"
          >
            <g style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p155bdde0} fill="url(#paint_cta_left)" shapeRendering="geometricPrecision" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_left" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="#d21027" stopOpacity="0.3" />
                <stop offset="1" stopColor="#ff0000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[-180px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 mix-blend-overlay opacity-40 sm:right-[-230px] sm:h-[450px] sm:w-[450px] sm:opacity-50 lg:right-[-250px] lg:h-[550px] lg:w-[550px]"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="size-full"
          style={{ animation: "cta-pentagon-spin 40s linear infinite", willChange: "transform", transform: "translateZ(0)" }}
        >
          <svg
            className="block size-full"
            style={{ filter: "drop-shadow(0px 4px 13px rgba(0,0,0,0.25))" }}
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 916.4 923.4"
          >
            <g style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p3357f280} fill="url(#paint_cta_right)" shapeRendering="geometricPrecision" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_right" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="#ff0000" stopOpacity="0.3" />
                <stop offset="1" stopColor="#d21027" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] shadow-[0_0_40px_rgba(210,16,39,0.4)]">
            <svg className="h-9 w-9" viewBox="0 0 916.4 923.4" fill="none">
              <path d={pentagonSvgPaths.p155bdde0} fill="white" />
            </svg>
          </div>
          <h2 className="mb-4 font-['Inter',sans-serif] text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <span>{title} </span>
            <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
              {highlight}
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-['Inter',sans-serif] text-sm text-white/60 sm:text-base">
            {description}
          </p>
          <div className="mx-auto flex max-w-xs flex-row justify-center gap-3">
            <div className="h-[44px] flex-1 sm:h-[50px]">
              <GooglePlayButtonWrapper />
            </div>
            <div className="h-[44px] flex-1 sm:h-[50px]">
              <AppStoreButtonWrapper />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
