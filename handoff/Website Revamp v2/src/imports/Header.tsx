import svgPaths from "./svg-ti06ui1t5l";

function LogoWhite() {
  return (
    <div className="col-1 h-[37.314px] ml-[calc(50%-50px)] mt-[calc(50%-18.66px)] relative row-1 w-[100px]" data-name="logo white">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3135">
        <g id="logo white">
          <g id="Group 2">
            <path d={svgPaths.p3e243280} fill="var(--fill-0, white)" id="Shape" />
            <path clipRule="evenodd" d={svgPaths.p60f7f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
            <path d={svgPaths.p4f87cf0} fill="var(--fill-0, white)" id="Shape_2" />
            <path clipRule="evenodd" d={svgPaths.p2fcaaa60} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_2" />
            <path d={svgPaths.p2c68200} fill="var(--fill-0, white)" id="Shape_3" />
            <path d={svgPaths.pd9c8200} fill="var(--fill-0, white)" id="Shape_4" />
            <path clipRule="evenodd" d={svgPaths.p24fb9700} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_3" />
            <path clipRule="evenodd" d={svgPaths.p3dbee080} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_4" />
            <path d={svgPaths.pc074f00} fill="var(--fill-0, white)" id="Shape_5" />
          </g>
          <path d={svgPaths.p383bd500} fill="var(--fill-0, white)" id="Shape_6" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <LogoWhite />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[50px] items-center justify-center leading-[25.6px] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[0.32px] w-[549px]">
      <p className="relative shrink-0">Hakkımızda</p>
      <p className="relative shrink-0">Özellikler</p>
      <p className="relative shrink-0">Premium</p>
      <p className="relative shrink-0">İletişim</p>
      <p className="relative shrink-0">Blog</p>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#d21027] from-[40.366%] gap-[88px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[23px] shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] size-full to-[114.18%] to-black" data-name="Header">
      <Logo />
      <Frame />
      <div className="bg-gradient-to-b from-[#d21027] h-[37px] rounded-[14px] shrink-0 to-[#6c0814] w-[138px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] justify-center leading-[0] left-[920px] not-italic text-[15px] text-center text-white top-[34.5px] tracking-[0.32px] w-[120px]">
        <p className="leading-[25.6px] whitespace-pre-wrap">Ücretsiz İndir</p>
      </div>
    </div>
  );
}