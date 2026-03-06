import { motion } from 'motion/react';
import { TypingRotator } from './TypingRotator';
import svgPaths from '../../imports/svg-2ykxxdmmup';
import imgPolygon1 from "figma:asset/5d48399b972281369c0877ffc30641392cc0dda2.png";
import imgStar1 from "figma:asset/03df501c61645a5d2f265de3d9930eb01a0e04d7.png";
import imgEllipse3 from "figma:asset/437429ee8b74c5985f1fe85250ee1e7574819fb0.png";
import imgEllipse4 from "figma:asset/033e7a16520d71540229be4f8423dab805a3ec0d.png";
import imgEllipse5 from "figma:asset/c88663dccdf3a28c9a0d7e798c42187df5a53958.png";
import imgEllipse6 from "figma:asset/a3712302d456e6571b800833a2072a80ca4be17a.png";
import imgEllipse7 from "figma:asset/2a391ea3fd3d512bdbd2b47ea54d89c15a69b08f.png";
import { GooglePlayButtonWrapper, AppStoreButtonWrapper } from './StoreButtons';
import PhoneWithFloatingCards from './PhoneWithFloatingCards';

export default function HeroSectionNew() {
  return (
    <section className="relative min-h-[50vh] lg:min-h-screen bg-black overflow-hidden">
      {/* Background Effects - More visible */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Polygon blur - increased opacity */}
        <div className="absolute h-[400px] sm:h-[600px] lg:h-[775.391px] left-[-100px] sm:left-[-145px] top-[100px] sm:top-[150px] lg:top-[219.29px] w-[500px] sm:w-[700px] lg:w-[845.884px] opacity-70">
          <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
        </div>
        
        {/* Star blur - increased opacity */}
        <div className="absolute h-[600px] sm:h-[800px] lg:h-[1043.744px] left-[10%] sm:left-[20%] lg:left-[25%] top-[80px] sm:top-[100px] lg:top-[139.26px] w-[700px] sm:w-[900px] lg:w-[1197.322px] opacity-70">
          <img alt="" className="block max-w-none size-full" src={imgStar1} />
        </div>
        
        {/* Ellipse glows - increased opacity */}
        <div className="absolute h-[300px] sm:h-[400px] lg:h-[462.538px] left-[5%] sm:left-[10%] lg:left-[calc(12.5%+61.89px)] top-[400px] sm:top-[450px] lg:top-[506.5px] w-[350px] sm:w-[450px] lg:w-[521.832px] opacity-60">
          <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
        </div>
        
        <div className="absolute h-[300px] sm:h-[400px] lg:h-[462.538px] left-[30%] sm:left-[35%] lg:left-[calc(37.5%+43px)] top-[450px] sm:top-[550px] lg:top-[598px] w-[350px] sm:w-[450px] lg:w-[521.832px] opacity-60">
          <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
        </div>
        
        {/* Red gradient blur - left side - increased opacity and blur */}
        <div className="absolute blur-[150px] sm:blur-[180px] lg:blur-[200px] h-[250px] sm:h-[350px] lg:h-[432.87px] left-[20px] sm:left-[50px] lg:left-[79px] opacity-80 top-[80px] sm:top-[100px] lg:top-[139.26px] w-[400px] sm:w-[550px] lg:w-[701.354px] bg-gradient-to-r from-[#fa1111] to-[#fa1111]" />
        
        {/* Red gradient blur - right side for large screens */}
        <div className="hidden xl:block absolute blur-[200px] h-[432.87px] right-[100px] 2xl:right-[200px] opacity-80 top-[139.26px] w-[701.354px] bg-gradient-to-r from-[#fa1111] to-[#fa1111]" />
        
        <div className="hidden lg:block absolute h-[429px] left-[calc(37.5%+82px)] top-[121px] w-[586px] opacity-60">
          <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
        </div>
      </div>

      {/* Overlay shapes - animated pentagons with full rotation - more spacing on mobile */}
      <motion.div 
        className="absolute h-[350px] sm:h-[700px] lg:h-[897px] left-[-250px] sm:left-[-450px] lg:left-[-532px] xl:left-[-450px] top-[250px] sm:top-[300px] lg:top-[384px] w-[350px] sm:w-[700px] lg:w-[890px] mix-blend-overlay opacity-50 sm:opacity-70 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
          <g filter="url(#filter0_d_1_306)" style={{ mixBlendMode: "overlay" }}>
            <path d={svgPaths.p155bdde0} fill="url(#paint0_linear_1_306)" shapeRendering="crispEdges" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter0_d_1_306" width="916.4" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6.6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_306" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_306" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_306" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute h-[450px] sm:h-[800px] lg:h-[1056.089px] left-[60%] sm:left-[55%] lg:left-[calc(62.5%+129px)] xl:right-[-450px] 2xl:right-[-350px] top-[100px] sm:top-[80px] lg:top-[106px] w-[450px] sm:w-[800px] lg:w-[1061.492px] mix-blend-overlay opacity-50 sm:opacity-70 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
          <g filter="url(#filter0_d_1_304)" style={{ mixBlendMode: "overlay" }}>
            <path d={svgPaths.p3357f280} fill="url(#paint0_linear_1_304_red)" shapeRendering="crispEdges" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter0_d_1_304" width="916.4" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6.6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_304" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_304" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_304_red" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
              <stop stopColor="#ff0000" stopOpacity="0.3" />
              <stop offset="1" stopColor="#d21027" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Main Content Container - Auto Layout */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center pt-[120px] sm:pt-[140px] lg:pt-[160px] pb-0 lg:pb-12">
          
          {/* Badge */}
          <div className="bg-[#1e1e1e] border border-[#e75f01] rounded-[12px] md:rounded-[15px] px-3 md:px-[18px] py-1.5 md:py-[7px] shadow-[0px_2px_12px_0px_rgba(255,255,255,0.4)] h-auto md:h-[38px] w-auto max-w-[90%] md:max-w-[408px] md:w-[408px] flex items-center justify-center">
            <p className="font-['Inter',sans-serif] text-white font-semibold text-[14px] md:text-[18px] lg:text-[20px] tracking-[0.42px] leading-tight md:leading-[16px] text-center">Affiliate Pazarlama ile Gelir Ortaklığı</p>
          </div>

          {/* Title and Decorative Box Container */}
          <div className="relative flex flex-col items-center w-full mt-3 md:mt-4 lg:mt-5">
            {/* Main Title - Hybrid SVG + HTML */}
            <div className="relative text-center">
              {/* Title Text with responsive sizing */}
              <h1 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[52px] lg:text-[68px] leading-[1.3] tracking-[-0.01em]">
                <span className="text-white">Alışveriş Yap</span>
                <br />
                <span className="text-white"><TypingRotator /> Paylaş</span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-b from-[#FFBA6F] to-[#EB5200] bg-clip-text text-transparent">Kazanç</span>
                  <span className="absolute inset-0 border border-[#f37100] bg-gradient-to-br from-[rgba(234,99,1,0.67)] to-[rgba(255,255,255,0.67)] rounded-2xl -mx-[3px] md:-mx-[5px] lg:-mx-2 -my-[1px] md:-my-[1.5px] lg:-my-[2px] opacity-36" />
                </span>
                <span className="text-white"> <span className="font-bold">Sağla</span></span>
              </h1>
            </div>
          </div>

          {/* Description Text */}
          <p className="font-['Inter',sans-serif] font-medium leading-[1.4] md:leading-[1.5] not-italic text-[13px] md:text-[18px] lg:text-[22px] text-center text-white w-[92%] md:w-[85%] lg:w-[90%] xl:w-[1106px] max-w-[1106px] mt-4 md:mt-5 lg:mt-6">
            Sevdiğin ürünlere, koleksiyonlara veya kampanyalara link oluştur. Diler kendin alışveriş yap dilersen paylaş. Linklerin üzerinden gerçekleşen satış ve tıklamalardan kazanç sağla!
          </p>

          {/* Store Buttons Container */}
          <div className="flex flex-row items-center gap-2.5 md:gap-3 lg:gap-4 mt-4 md:mt-5 lg:mt-6">
            {/* Google Play Button */}
            <div className="w-[140px] md:w-[170px] lg:w-[195px] h-[42px] md:h-[50px] lg:h-[56px]">
              <GooglePlayButtonWrapper />
            </div>

            {/* App Store Button */}
            <div className="w-[140px] md:w-[170px] lg:w-[195px] h-[42px] md:h-[50px] lg:h-[56px]">
              <AppStoreButtonWrapper />
            </div>
          </div>

          {/* 25B+ Users Badge */}
          <div className="w-[200px] md:w-[280px] lg:w-[299px] h-auto md:h-[38px] bg-[#1e1e1e] border border-[#e96300] rounded-[10px] md:rounded-[15px] flex items-center justify-center px-2 gap-1.5 py-1.5 md:py-0 mt-3 md:mt-4 lg:mt-5">
            <div className="flex">
              <img alt="" className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] rounded-full" src={imgEllipse5} />
              <img alt="" className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] rounded-full -ml-1.5" src={imgEllipse6} />
              <img alt="" className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] rounded-full -ml-1.5" src={imgEllipse7} />
            </div>
            <p className="text-white font-semibold text-[11px] md:text-[16px] tracking-[0.32px] leading-tight md:leading-[16px] ml-1 md:ml-2">
              25B+ Kullanıcı sevdi
            </p>
          </div>

          {/* Phone Mockups */}
          <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-4 lg:mt-10 mb-0">
            <div className="w-full max-w-[900px] lg:max-w-[1100px]">
              <PhoneWithFloatingCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}