"use client";

import type { ReactNode } from "react";
import svgPaths from "../../imports/svg-05n1f58eeq";
import { APP_STORE_URL, PLAY_STORE_URL, STORE_REDIRECT_PATH } from "../../lib/storeRedirect";

export function openPreferredStore() {
  if (typeof window === "undefined") return;
  window.location.assign(STORE_REDIRECT_PATH);
}

export function openGooglePlayStore() {
  if (typeof window === "undefined") return;
  window.location.assign(PLAY_STORE_URL);
}

export function openAppStore() {
  if (typeof window === "undefined") return;
  window.location.assign(APP_STORE_URL);
}

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

function StoreButtonShell({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group relative flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[rgba(255,255,255,0.1)] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.2)] md:rounded-[13px] lg:rounded-[16px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[10px] border border-[rgba(255,255,255,0.2)] border-solid transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.5)] md:rounded-[13px] lg:rounded-[16px]"
      />
      {children}
    </a>
  );
}

export function GooglePlayButtonWrapper() {
  return (
    <StoreButtonShell href={PLAY_STORE_URL} label="Adverport uygulamasını Google Play'den indir">
      <div className="flex gap-[6px] md:gap-[10px] lg:gap-[12px] items-center justify-center h-full px-2.5 md:px-3.5 lg:px-4">
        <div className="bg-white rounded-[6px] md:rounded-[8px] lg:rounded-[10px] shrink-0 size-[22px] md:size-[28px] lg:size-[32px] flex items-center justify-center">
          <GooglePlayIcon />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-['Inter',sans-serif] font-medium leading-[12px] md:leading-[14px] lg:leading-[16px] text-[9px] md:text-[10px] lg:text-[12px] text-[rgba(245,245,245,0.6)] whitespace-nowrap">Şimdi İndir</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[16px] md:leading-[20px] lg:leading-[24px] text-[11px] md:text-[14px] lg:text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Google Play</p>
        </div>
      </div>
    </StoreButtonShell>
  );
}

export function AppStoreButtonWrapper() {
  return (
    <StoreButtonShell href={APP_STORE_URL} label="Adverport uygulamasını App Store'dan indir">
      <div className="flex gap-[6px] md:gap-[10px] lg:gap-[12px] items-center justify-center h-full px-2.5 md:px-3.5 lg:px-4">
        <div className="bg-white rounded-[6px] md:rounded-[8px] lg:rounded-[10px] shrink-0 size-[22px] md:size-[28px] lg:size-[32px] flex items-center justify-center">
          <AppStoreIcon />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-['Inter',sans-serif] font-medium leading-[12px] md:leading-[14px] lg:leading-[16px] text-[9px] md:text-[10px] lg:text-[12px] text-[rgba(245,245,245,0.6)] whitespace-nowrap">Şimdi İndir</p>
          <p className="font-['Inter',sans-serif] font-semibold leading-[16px] md:leading-[20px] lg:leading-[24px] text-[11px] md:text-[14px] lg:text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">App Store</p>
        </div>
      </div>
    </StoreButtonShell>
  );
}
