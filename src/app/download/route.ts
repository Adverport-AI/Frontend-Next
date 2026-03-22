import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getPreferredStoreUrl } from "../../lib/storeRedirect";

export async function GET() {
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent");
  const platform = requestHeaders.get("sec-ch-ua-platform");

  return NextResponse.redirect(getPreferredStoreUrl({ userAgent, platform }));
}
