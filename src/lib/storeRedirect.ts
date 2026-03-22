export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.mobile.adverport";
export const APP_STORE_URL = "https://apps.apple.com/us/app/adverport/id1616799187";
export const STORE_REDIRECT_PATH = "/download";

type ClientNavigator = Navigator & {
  userAgentData?: {
    platform?: string;
  };
};

function readClientUserAgent() {
  if (typeof navigator === "undefined") {
    return { userAgent: null, platform: null };
  }

  const clientNavigator = navigator as ClientNavigator;

  return {
    userAgent: clientNavigator.userAgent ?? null,
    platform: clientNavigator.userAgentData?.platform ?? clientNavigator.platform ?? null,
  };
}

export function isApplePlatform(userAgent?: string | null, platform?: string | null) {
  const normalized = `${platform ?? ""} ${userAgent ?? ""}`;
  return /iPad|iPhone|iPod|Macintosh|Mac OS X|MacIntel|macOS|mac os/i.test(normalized);
}

export function getPreferredStoreUrl(options?: { userAgent?: string | null; platform?: string | null }) {
  const clientContext = readClientUserAgent();
  const userAgent = options?.userAgent ?? clientContext.userAgent;
  const platform = options?.platform ?? clientContext.platform;

  return isApplePlatform(userAgent, platform) ? APP_STORE_URL : PLAY_STORE_URL;
}
