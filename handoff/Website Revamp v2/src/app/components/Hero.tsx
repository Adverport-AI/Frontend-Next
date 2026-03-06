import imgPolygon1 from "figma:asset/5d48399b972281369c0877ffc30641392cc0dda2.png";
import imgStar1 from "figma:asset/03df501c61645a5d2f265de3d9930eb01a0e04d7.png";
import imgEllipse3 from "figma:asset/437429ee8b74c5985f1fe85250ee1e7574819fb0.png";
import imgRectangle6 from "figma:asset/a54049ef8bbd99500e5efc8ec28b3ccdd3365a55.png";
import imgEllipse1 from "figma:asset/8e38f2fbc074bf1b3b836a6881d551dcb783a717.png";
import imgEllipse4 from "figma:asset/033e7a16520d71540229be4f8423dab805a3ec0d.png";
import imgIPhone12Pro from "figma:asset/b632c8b348a7d1c205d71b33e4614474ba9914d6.png";
import imgScreen1 from "figma:asset/9bb4d9024d3981d5ab41d235e650162f54d1cb14.png";
import imgChangeThis from "figma:asset/4d2f93e3f146b46cc6cdb1e930864e967d9a906d.png";
import imgReflection from "figma:asset/ddccec5ed925188c0b0890526d56b53b7269cc51.png";
import imgShadow from "figma:asset/730e4f03da4f8949f4b825e192296bf174e56fe2.png";
import imgShadow1 from "figma:asset/4552d359cae94edd3ef029075972b9494a539072.png";
import imgShadow2 from "figma:asset/66e6e0b901a070ec84dcd39bdf5f32ca37c4c8e4.png";
import imgIPhone12Pro1 from "figma:asset/7c0b3043ac9af54679174f72f0d75ec8900572a6.png";
import imgScreen3 from "figma:asset/ad6922956a52200ed075b526020279beb0488245.png";
import imgChangeThis1 from "figma:asset/898fde952be2522964e470e0daf5bcf0ebc8e53d.png";
import { imgScreen, imgScreen2 } from "../../imports/svg-6myxf";
import svgPaths from "../../imports/svg-2ykxxdmmup";

export function Hero() {
  return (
    <section className="relative min-h-[900px] bg-black overflow-hidden pt-32 pb-24">
      {/* Background Noise Effects */}
      <div className="absolute left-0 top-[121px] opacity-50 pointer-events-none">
        <div className="absolute h-[775px] w-[846px] -left-[145px] top-[219px]">
          <img
            alt=""
            className="block max-w-none w-full h-full"
            src={imgPolygon1}
          />
        </div>
        <div className="absolute h-[1044px] w-[1197px] left-[25%] top-[139px]">
          <img
            alt=""
            className="block max-w-none w-full h-full"
            src={imgStar1}
          />
        </div>
        <div className="absolute h-[463px] w-[522px] left-[20%] top-[506px]">
          <img
            alt=""
            className="block max-w-none w-full h-full"
            src={imgEllipse3}
          />
        </div>
        <div
          className="absolute h-[433px] w-[701px] left-[79px] top-[139px] blur-[150px]"
          style={{
            backgroundImage: `url('${imgRectangle6}'), linear-gradient(90deg, rgb(250, 17, 17) 0%, rgb(250, 17, 17) 100%)`,
            backgroundSize: "1024px 1024px, auto auto",
          }}
        />
        <div className="absolute h-[341px] w-[385px] left-[25%] top-[219px]">
          <img
            alt=""
            className="block max-w-none w-full h-full"
            src={imgEllipse1}
          />
        </div>
        <div className="absolute h-[429px] w-[586px] left-[50%] top-[121px]">
          <img
            alt=""
            className="block max-w-none w-full h-full"
            src={imgEllipse4}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Sticker Badge */}
            <div className="inline-flex items-center bg-[#1e1e1e] border border-[#e75f01] rounded-[15px] px-[18px] py-[7px] shadow-[0px_2px_12px_0px_rgba(255,255,255,0.4)]">
              <p className="text-white text-[20px] font-semibold tracking-[0.42px]">
                Affiliate Marketing ile Gelir Ortaklığı
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Mobil</span>
                <br />
                <span className="text-white">Reklamlarla</span>
                <br />
                <span className="bg-gradient-to-r from-[#EB5200] to-[#FFBA6F] bg-clip-text text-transparent">
                  Kazan
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-white/80 text-[18px] leading-relaxed max-w-[500px]">
              Telefonundan reklam izleyerek para kazan. Affiliate pazarlama ile
              gelir ortaklığına başla. Premium üyelikle daha fazla kazan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#d21027] to-[#e75f01] text-white px-8 py-4 rounded-[16px] text-[18px] font-semibold shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] hover:shadow-[0px_6px_24px_8px_rgba(185,5,5,0.5)] transition-all">
                Uygulamayı İndir
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-[16px] text-[18px] font-semibold hover:bg-white/20 transition-all">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative h-[600px] lg:h-[700px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Phone 1 - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Shadow */}
                  <div className="absolute inset-0 mix-blend-multiply opacity-60">
                    <img
                      alt=""
                      className="w-full h-full max-w-none"
                      src={imgShadow}
                    />
                  </div>
                  {/* Phone Frame */}
                  <div className="relative w-[280px]">
                    <img
                      alt=""
                      className="w-full h-auto"
                      src={imgIPhone12Pro}
                    />
                    {/* Screen Content */}
                    <div
                      className="absolute top-[4%] left-[3%] w-[94%] h-[92%]"
                      style={{
                        maskImage: `url('${imgScreen}')`,
                        maskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                      }}
                    >
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={imgScreen1}
                      />
                    </div>
                  </div>
                  {/* Reflection */}
                  <div className="absolute inset-0 mix-blend-screen opacity-30 pointer-events-none">
                    <img
                      alt=""
                      className="w-full h-full max-w-none"
                      src={imgReflection}
                    />
                  </div>
                </div>
              </div>

              {/* Phone 2 - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8">
                <div className="relative">
                  {/* Shadows */}
                  <div className="absolute inset-0 mix-blend-multiply opacity-60">
                    <img
                      alt=""
                      className="w-full h-full max-w-none"
                      src={imgShadow1}
                    />
                  </div>
                  <div className="absolute inset-0 mix-blend-multiply opacity-60">
                    <img
                      alt=""
                      className="w-full h-full max-w-none"
                      src={imgShadow2}
                    />
                  </div>
                  {/* Phone Frame */}
                  <div className="relative w-[320px]">
                    <img
                      alt=""
                      className="w-full h-auto"
                      src={imgIPhone12Pro1}
                    />
                    {/* Screen Content */}
                    <div
                      className="absolute top-[4%] left-[3%] w-[94%] h-[92%]"
                      style={{
                        maskImage: `url('${imgScreen2}')`,
                        maskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                      }}
                    >
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={imgScreen3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute right-0 top-[106px] h-[1056px] w-[1061px] mix-blend-overlay opacity-30 pointer-events-none">
        <svg
          className="block w-full h-full rotate-[-102deg]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 916.4 923.4"
        >
          <g filter="url(#filter0_d_1_304)" style={{ mixBlendMode: "overlay" }}>
            <path
              d={svgPaths.p3357f280}
              fill="url(#paint0_linear_1_304)"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="923.4"
              id="filter0_d_1_304"
              width="916.4"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6.6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_304"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_304"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_304"
              x1="670.721"
              x2="252.719"
              y1="-93.035"
              y2="847.332"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
