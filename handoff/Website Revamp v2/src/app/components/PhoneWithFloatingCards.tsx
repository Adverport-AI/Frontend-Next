import { motion } from 'motion/react';
import imgPhoneMockup from "figma:asset/7479dacd9c13c9b19d3f3a4ed1a2042992b479b8.png";

/* ── 3D Shopping Bags ── */
function ShoppingBags3D() {
  return (
    <svg viewBox="0 0 140 120" fill="none" className="w-full h-full drop-shadow-[0_8px_24px_rgba(255,107,0,0.35)]">
      <defs>
        <linearGradient id="bag1F" x1="0" y1="50" x2="55" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8C42" /><stop offset="1" stopColor="#E74C3C" />
        </linearGradient>
        <linearGradient id="bag1S" x1="45" y1="50" x2="65" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4421E" /><stop offset="1" stopColor="#B8301A" />
        </linearGradient>
        <linearGradient id="bag2F" x1="40" y1="35" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B00" /><stop offset="1" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="bag2S" x1="90" y1="35" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A93226" /><stop offset="1" stopColor="#8B1A1A" />
        </linearGradient>
        <linearGradient id="bag3F" x1="75" y1="50" x2="130" y2="105" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
        <linearGradient id="bag3S" x1="118" y1="50" x2="135" y2="105" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E74C3C" /><stop offset="1" stopColor="#C0392B" />
        </linearGradient>
      </defs>
      {/* Orange-red bag */}
      <path d="M18 42 C18 26, 42 26, 42 42" stroke="#FFAA66" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M5 44 L50 41 L65 48 L20 51 Z" fill="#FFAA66" />
      <path d="M5 44 L20 51 L20 95 L5 88 Z" fill="url(#bag1F)" />
      <path d="M20 51 L65 48 L65 92 L20 95 Z" fill="url(#bag1F)" opacity="0.85" />
      <path d="M50 41 L65 48 L65 92 L50 85 Z" fill="url(#bag1S)" />
      <path d="M8 47 L18 51 L18 63 L8 59 Z" fill="white" opacity="0.15" />
      {/* Deep red bag */}
      <path d="M68 32 C68 14, 96 14, 96 32" stroke="#FF8C42" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M52 34 L100 30 L118 38 L70 42 Z" fill="#FF8C42" />
      <path d="M52 34 L70 42 L70 98 L52 90 Z" fill="url(#bag2F)" />
      <path d="M70 42 L118 38 L118 94 L70 98 Z" fill="url(#bag2F)" opacity="0.88" />
      <path d="M100 30 L118 38 L118 94 L100 86 Z" fill="url(#bag2S)" />
      <circle cx="90" cy="64" r="7" fill="white" opacity="0.12" />
      <text x="86.5" y="69" fill="white" fontSize="10" fontWeight="bold" opacity="0.8">★</text>
      <path d="M55 38 L67 42 L67 56 L55 52 Z" fill="white" opacity="0.1" />
      {/* Light peach bag */}
      <path d="M100 50 C100 40, 118 40, 118 50" stroke="#FFB088" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M88 52 L122 50 L132 55 L98 57 Z" fill="#FFB088" />
      <path d="M88 52 L98 57 L98 95 L88 90 Z" fill="url(#bag3F)" />
      <path d="M98 57 L132 55 L132 93 L98 95 Z" fill="url(#bag3F)" opacity="0.88" />
      <path d="M122 50 L132 55 L132 93 L122 88 Z" fill="url(#bag3S)" />
      <path d="M91 55 L96 57 L96 67 L91 65 Z" fill="white" opacity="0.15" />
      <path d="M30 18 L32 13 L34 18 L32 23 Z" fill="#FFAA66" opacity="0.7" />
      <path d="M112 24 L114 20 L116 24 L114 28 Z" fill="#FF6B00" opacity="0.6" />
    </svg>
  );
}

/* ── 3D Chain Link Share ── */
function LinkShare3D() {
  return (
    <svg viewBox="0 0 130 120" fill="none" className="w-full h-full drop-shadow-[0_8px_24px_rgba(255,107,0,0.3)]">
      <defs>
        <linearGradient id="chain1Top" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
        <linearGradient id="chain1Front" x1="0" y1="20" x2="0" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8C42" /><stop offset="1" stopColor="#E74C3C" />
        </linearGradient>
        <linearGradient id="chain1Side" x1="50" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C0392B" /><stop offset="1" stopColor="#A93226" />
        </linearGradient>
        <linearGradient id="chain2Top" x1="40" y1="20" x2="120" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFAA66" /><stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
        <linearGradient id="chain2Front" x1="40" y1="40" x2="40" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B00" /><stop offset="1" stopColor="#D4421E" />
        </linearGradient>
        <linearGradient id="chain2Side" x1="100" y1="40" x2="120" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B8301A" /><stop offset="1" stopColor="#8B1A1A" />
        </linearGradient>
      </defs>

      {/* ── Chain Link 1 (back-left) ── */}
      <path d="M8 30 C8 16, 24 16, 24 16 L52 16 C52 16, 68 16, 68 30 L74 34 C74 18, 56 10, 56 10 L24 10 C24 10, 2 10, 2 26 Z" fill="url(#chain1Top)" opacity="0.9" />
      <path d="M2 26 C2 14, 18 12, 24 12 L52 12 C60 12, 68 16, 68 26 L68 62 C68 74, 54 78, 48 78 L20 78 C12 78, 2 72, 2 62 Z" fill="url(#chain1Front)" />
      <path d="M18 34 C18 26, 28 24, 32 24 L42 24 C48 24, 54 28, 54 34 L54 54 C54 62, 44 64, 40 64 L30 64 C24 64, 18 60, 18 54 Z" fill="#3B1010" opacity="0.5" />
      <path d="M18 34 C18 26, 28 24, 32 24 L42 24 C48 24, 54 28, 54 34 L54 44 C54 36, 44 34, 40 34 L30 34 C24 34, 18 38, 18 44 Z" fill="white" opacity="0.06" />
      <path d="M68 26 L74 30 L74 66 C74 78, 60 82, 54 82 L48 78 C54 78, 68 74, 68 62 Z" fill="url(#chain1Side)" />
      <path d="M6 20 C6 16, 14 14, 20 14 L26 14 C20 14, 10 18, 10 26 L10 40 L6 38 Z" fill="white" opacity="0.2" />

      {/* ── Chain Link 2 (front-right, interlocking) ── */}
      <path d="M44 50 C44 36, 60 36, 60 36 L88 36 C88 36, 104 36, 104 50 L110 54 C110 38, 92 30, 92 30 L60 30 C60 30, 38 30, 38 46 Z" fill="url(#chain2Top)" opacity="0.9" />
      <path d="M38 46 C38 34, 54 32, 60 32 L88 32 C96 32, 104 36, 104 46 L104 82 C104 94, 90 98, 84 98 L56 98 C48 98, 38 92, 38 82 Z" fill="url(#chain2Front)" />
      <path d="M54 54 C54 46, 64 44, 68 44 L78 44 C84 44, 90 48, 90 54 L90 74 C90 82, 80 84, 76 84 L66 84 C60 84, 54 80, 54 74 Z" fill="#3B1510" opacity="0.5" />
      <path d="M54 54 C54 46, 64 44, 68 44 L78 44 C84 44, 90 48, 90 54 L90 64 C90 56, 80 54, 76 54 L66 54 C60 54, 54 58, 54 64 Z" fill="white" opacity="0.06" />
      <path d="M104 46 L110 50 L110 86 C110 98, 96 102, 90 102 L84 98 C90 98, 104 94, 104 82 Z" fill="url(#chain2Side)" />
      <path d="M42 40 C42 36, 50 34, 56 34 L62 34 C56 34, 46 38, 46 46 L46 60 L42 58 Z" fill="white" opacity="0.2" />

      {/* Overlap glow */}
      <ellipse cx="56" cy="55" rx="8" ry="5" fill="#FF8C42" opacity="0.2" />

      {/* Share arrow icon */}
      <g transform="translate(96, 6)">
        <circle cx="14" cy="14" r="14" fill="#FF6B00" opacity="0.8" />
        <circle cx="14" cy="14" r="14" fill="white" opacity="0.1" />
        <path d="M10 14 L20 14 M17 10.5 L20.5 14 L17 17.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Connection dots */}
      <circle cx="4" cy="50" r="3" fill="#FF8C42" opacity="0.35" />
      <circle cx="122" cy="80" r="2.5" fill="#FF6B00" opacity="0.35" />
      <line x1="2" y1="40" x2="4" y2="48" stroke="#FF8C42" strokeWidth="0.8" opacity="0.2" />

      {/* Sparkle */}
      <path d="M26 4 L28 0 L30 4 L28 8 Z" fill="#FFB088" opacity="0.6" />
    </svg>
  );
}

/* ── 3D Sales & Clicks ── */
function SalesClicks3D() {
  return (
    <svg viewBox="0 0 130 115" fill="none" className="w-full h-full drop-shadow-[0_8px_24px_rgba(231,76,60,0.3)]">
      <defs>
        <linearGradient id="bar1T" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FFAA66" />
        </linearGradient>
        <linearGradient id="bar1F" x1="0" y1="50" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFAA66" /><stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
        <linearGradient id="bar1S" x1="30" y1="50" x2="40" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4421E" /><stop offset="1" stopColor="#B8301A" />
        </linearGradient>
        <linearGradient id="bar2T" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8C42" /><stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
        <linearGradient id="bar2F" x1="0" y1="30" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B00" /><stop offset="1" stopColor="#E74C3C" />
        </linearGradient>
        <linearGradient id="bar2S" x1="30" y1="30" x2="40" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C0392B" /><stop offset="1" stopColor="#A93226" />
        </linearGradient>
        <linearGradient id="bar3T" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B00" /><stop offset="1" stopColor="#E74C3C" />
        </linearGradient>
        <linearGradient id="bar3F" x1="0" y1="10" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E74C3C" /><stop offset="1" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id="bar3S" x1="30" y1="10" x2="40" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A93226" /><stop offset="1" stopColor="#8B1A1A" />
        </linearGradient>
        <linearGradient id="curG" x1="0" y1="0" x2="20" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
      </defs>

      {/* Bar 1 (short, light) */}
      <path d="M10 68 L30 63 L45 68 L25 73 Z" fill="url(#bar1T)" />
      <path d="M10 68 L25 73 L25 103 L10 98 Z" fill="url(#bar1F)" />
      <path d="M25 73 L45 68 L45 98 L25 103 Z" fill="url(#bar1S)" />
      <path d="M12 70 L23 73 L23 80 L12 77 Z" fill="white" opacity="0.2" />

      {/* Bar 2 (medium, mid) */}
      <path d="M38 48 L58 43 L73 48 L53 53 Z" fill="url(#bar2T)" />
      <path d="M38 48 L53 53 L53 103 L38 98 Z" fill="url(#bar2F)" />
      <path d="M53 53 L73 48 L73 98 L53 103 Z" fill="url(#bar2S)" />
      <path d="M40 50 L51 53 L51 62 L40 59 Z" fill="white" opacity="0.18" />

      {/* Bar 3 (tall, dark) */}
      <path d="M66 28 L86 23 L101 28 L81 33 Z" fill="url(#bar3T)" />
      <path d="M66 28 L81 33 L81 103 L66 98 Z" fill="url(#bar3F)" />
      <path d="M81 33 L101 28 L101 98 L81 103 Z" fill="url(#bar3S)" />
      <path d="M68 30 L79 33 L79 44 L68 41 Z" fill="white" opacity="0.15" />

      {/* Trend line */}
      <path d="M18 65 L46 44 L74 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <circle cx="74" cy="24" r="3.5" fill="white" opacity="0.85" />
      <circle cx="74" cy="24" r="6" fill="white" opacity="0.15" />

      {/* 3D Cursor */}
      <g transform="translate(88, 38)">
        <ellipse cx="10" cy="32" rx="10" ry="3" fill="black" opacity="0.1" />
        <path d="M0 0 L0 26 L7 20 L14 30 L19 28 L12 18 L20 16 Z" fill="url(#curG)" stroke="#B8301A" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M0 0 L0 12 L5 10 Z" fill="white" opacity="0.35" />
        <path d="M0 26 L7 20 L8 22 L1 28 Z" fill="#D4421E" />
      </g>

      {/* Click ripples */}
      <circle cx="98" cy="50" r="8" fill="none" stroke="#FF8C42" strokeWidth="1.2" opacity="0.3" />
      <circle cx="98" cy="50" r="14" fill="none" stroke="#FF8C42" strokeWidth="0.8" opacity="0.15" />

      {/* Badge */}
      <rect x="82" y="6" width="38" height="14" rx="7" fill="white" opacity="0.15" />
      <text x="88" y="16" fill="white" fontSize="8.5" fontWeight="bold" opacity="0.9">+42%</text>

      <path d="M5 50 L7 46 L9 50 L7 54 Z" fill="#FF8C42" opacity="0.5" />
      <circle cx="120" cy="85" r="2" fill="#E74C3C" opacity="0.4" />
    </svg>
  );
}

/* ── 3D Money/Coins ── */
function MoneyCoin3D() {
  return (
    <svg viewBox="0 0 130 115" fill="none" className="w-full h-full drop-shadow-[0_8px_24px_rgba(255,107,0,0.3)]">
      <defs>
        <linearGradient id="cT" x1="25" y1="25" x2="95" y2="55" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
        <linearGradient id="cS" x1="25" y1="45" x2="95" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4421E" /><stop offset="1" stopColor="#B8301A" />
        </linearGradient>
        <linearGradient id="cT2" x1="35" y1="50" x2="105" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB088" /><stop offset="1" stopColor="#FF8C42" />
        </linearGradient>
        <linearGradient id="cS2" x1="35" y1="70" x2="105" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4421E" /><stop offset="1" stopColor="#B8301A" />
        </linearGradient>
        <linearGradient id="bG" x1="0" y1="60" x2="65" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B00" /><stop offset="1" stopColor="#E74C3C" />
        </linearGradient>
      </defs>
      {/* Money bill */}
      <rect x="5" y="65" width="58" height="35" rx="4" fill="url(#bG)" transform="rotate(-8 34 82)" />
      <rect x="9" y="69" width="50" height="27" rx="2.5" fill="none" stroke="white" strokeWidth="0.8" opacity="0.25" transform="rotate(-8 34 82)" />
      <text x="26" y="87" fill="white" fontSize="15" fontWeight="bold" opacity="0.65" transform="rotate(-8 34 82)">₺</text>
      {/* Back coin */}
      <ellipse cx="75" cy="75" rx="30" ry="10" fill="url(#cS2)" />
      <rect x="45" y="65" width="60" height="10" fill="url(#cS2)" />
      <ellipse cx="75" cy="65" rx="30" ry="10" fill="url(#cT2)" />
      <ellipse cx="75" cy="65" rx="22" ry="7" fill="none" stroke="#B8301A" strokeWidth="1.2" opacity="0.35" />
      <text x="68.5" y="70" fill="#8B1A1A" fontSize="13" fontWeight="bold" opacity="0.55">₺</text>
      {/* Front coin */}
      <ellipse cx="63" cy="48" rx="30" ry="10" fill="url(#cS)" />
      <rect x="33" y="38" width="60" height="10" fill="url(#cS)" />
      <ellipse cx="63" cy="38" rx="30" ry="10" fill="url(#cT)" />
      <ellipse cx="63" cy="38" rx="22" ry="7" fill="none" stroke="#B8301A" strokeWidth="1.2" opacity="0.35" />
      <text x="56.5" y="43" fill="#8B1A1A" fontSize="13" fontWeight="bold">₺</text>
      <ellipse cx="52" cy="35" rx="8" ry="3" fill="white" opacity="0.22" />
      <path d="M105 22 L108 16 L111 22 L108 28 Z" fill="#FFB088" opacity="0.75" />
      <path d="M14 32 L16 28 L18 32 L16 36 Z" fill="#FFB088" opacity="0.55" />
      <path d="M108 50 L108 34 M103 39 L108 34 L113 39" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Floating Object Wrapper ── */
interface FloatingObjectProps {
  children: React.ReactNode;
  label: string;
  delay: number;
  className: string;
  rotation?: string;
}

function FloatingObject({ children, label, delay, className, rotation = '0deg' }: FloatingObjectProps) {
  return (
    <motion.div
      className={`absolute flex flex-col items-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-[80px] h-[68px] sm:w-[90px] sm:h-[77px] md:w-[110px] md:h-[94px] lg:w-[130px] lg:h-[112px] xl:w-[150px] xl:h-[128px]">
          {children}
        </div>
        <div className="mt-0.5 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-md md:rounded-lg bg-white/[0.07] backdrop-blur-md border border-white/10">
          <span className="text-white/85 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] font-medium whitespace-nowrap">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhoneWithFloatingCards() {
  return (
    <div className="relative w-full flex justify-center items-end min-h-[380px] md:min-h-[500px] lg:min-h-[580px]">
      {/* Center anchor: phone + all floating objects positioned relative to this */}
      <div className="relative z-10">
        {/* ═══ Floating Objects — absolute to phone container ═══ */}

        {/* Sol üst - Alışveriş Yap (Z top-left, higher) */}
        <FloatingObject
          label="Alışveriş Yap"
          delay={0.3}
          className="-left-[68px] sm:-left-[80px] md:-left-[120px] lg:-left-[155px] xl:-left-[180px] top-[20%] sm:top-[19%] md:top-[18%] lg:top-[16%]"
          rotation="-3deg"
        >
          <ShoppingBags3D />
        </FloatingObject>

        {/* Sağ üst - Link Paylaş (Z, drops lower than left) */}
        <FloatingObject
          label="Link Paylaş"
          delay={0.5}
          className="-right-[68px] sm:-right-[80px] md:-right-[120px] lg:-right-[155px] xl:-right-[180px] top-[36%] sm:top-[35%] md:top-[34%] lg:top-[32%]"
          rotation="3deg"
        >
          <LinkShare3D />
        </FloatingObject>

        {/* Sol alt - Satış & Tıklama (Z, rises back up from right) */}
        <FloatingObject
          label="Satış & Tıklama"
          delay={0.7}
          className="-left-[64px] sm:-left-[76px] md:-left-[116px] lg:-left-[150px] xl:-left-[175px] top-[52%] sm:top-[51%] md:top-[50%] lg:top-[48%]"
          rotation="2deg"
        >
          <SalesClicks3D />
        </FloatingObject>

        {/* Sağ alt - Kazanç Sağla (Z bottom-right, lowest) */}
        <FloatingObject
          label="Kazanç Sağla"
          delay={0.9}
          className="-right-[64px] sm:-right-[76px] md:-right-[116px] lg:-right-[150px] xl:-right-[175px] top-[68%] sm:top-[67%] md:top-[66%] lg:top-[64%]"
          rotation="-2deg"
        >
          <MoneyCoin3D />
        </FloatingObject>

        {/* ═══ Phone Mockup ═══ */}
        <motion.div
          className="relative z-20 w-[220px] sm:w-[240px] md:w-[270px] lg:w-[310px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glow */}
          <div className="absolute -inset-10 lg:-inset-16 bg-gradient-to-b from-[#ff6b00]/15 via-[#e74c3c]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          {/* Phone */}
          <div className="relative w-full" style={{ paddingBottom: '204%' }}>
            <div className="absolute inset-0">
              <img
                alt="App Screen"
                className="absolute inset-0 w-full h-full object-contain"
                src={imgPhoneMockup}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}