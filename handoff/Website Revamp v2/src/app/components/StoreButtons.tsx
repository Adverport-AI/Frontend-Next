import svgPaths from '../../imports/svg-05n1f58eeq';

function GooglePlayIcon() {
  return (
    <div className="relative shrink-0 size-[14px] md:size-[18px] lg:size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p23761e00} fill="black" />
      </svg>
    </div>
  );
}

function AppStoreIcon() {
  return (
    <div className="relative shrink-0 size-[14px] md:size-[18px] lg:size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2a035100} fill="black" />
      </svg>
    </div>
  );
}

export function GooglePlayButtonWrapper() {
  return (
    <div className="group bg-[rgba(255,255,255,0.1)] relative rounded-[10px] md:rounded-[13px] lg:rounded-[16px] w-full h-full cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] md:rounded-[13px] lg:rounded-[16px] transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.5)]" />
      <div className="flex gap-[6px] md:gap-[10px] lg:gap-[12px] items-center justify-center h-full px-2.5 md:px-3.5 lg:px-4">
        <div className="bg-white rounded-[6px] md:rounded-[8px] lg:rounded-[10px] shrink-0 size-[22px] md:size-[28px] lg:size-[32px] flex items-center justify-center">
          <GooglePlayIcon />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-['Inter',sans-serif] font-medium leading-[12px] md:leading-[14px] lg:leading-[16px] text-[9px] md:text-[10px] lg:text-[12px] text-[rgba(245,245,245,0.6)] whitespace-nowrap">Şimdi İndir</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[16px] md:leading-[20px] lg:leading-[24px] text-[11px] md:text-[14px] lg:text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Google Play</p>
        </div>
      </div>
    </div>
  );
}

export function AppStoreButtonWrapper() {
  return (
    <div className="group bg-[rgba(255,255,255,0.1)] relative rounded-[10px] md:rounded-[13px] lg:rounded-[16px] w-full h-full cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px] md:rounded-[13px] lg:rounded-[16px] transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.5)]" />
      <div className="flex gap-[6px] md:gap-[10px] lg:gap-[12px] items-center justify-center h-full px-2.5 md:px-3.5 lg:px-4">
        <div className="bg-white rounded-[6px] md:rounded-[8px] lg:rounded-[10px] shrink-0 size-[22px] md:size-[28px] lg:size-[32px] flex items-center justify-center">
          <AppStoreIcon />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-['Inter',sans-serif] font-medium leading-[12px] md:leading-[14px] lg:leading-[16px] text-[9px] md:text-[10px] lg:text-[12px] text-[rgba(245,245,245,0.6)] whitespace-nowrap">Şimdi İndir</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[16px] md:leading-[20px] lg:leading-[24px] text-[11px] md:text-[14px] lg:text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">App Store</p>
        </div>
      </div>
    </div>
  );
}