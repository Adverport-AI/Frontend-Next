import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook handler.
 * Sanity > API > Webhooks bölümünde bu URL'yi ekle:
 *   https://adverport.com/api/revalidate
 * HTTP Method: POST
 * Secret: SANITY_WEBHOOK_SECRET env değeriyle eşleşmeli
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;

  if (!webhookSecret || secret !== webhookSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: { _type?: string; slug?: { current?: string } } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const docType = body._type;
  const slug = body.slug?.current;

  if (docType === "blogPost") {
    revalidateTag("blogPost", {});
    if (slug) {
      revalidateTag(`blogPost-${slug}`, {});
      revalidatePath(`/blog/${slug}`);
    }
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
  } else if (docType === "brand") {
    revalidateTag("brand", {});
    revalidatePath("/");
  } else if (docType === "siteSettings") {
    revalidateTag("siteSettings", {});
    revalidatePath("/");
  } else {
    // Bilinmeyen tip — tüm sayfaları revalidate et
    revalidatePath("/", "layout");
  }

  return NextResponse.json({
    revalidated: true,
    type: docType,
    slug: slug ?? null,
    now: Date.now(),
  });
}
