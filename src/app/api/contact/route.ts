import { type NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek gövdesi." }, { status: 400 });
  }

  const { name, email, message, phone } = body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Ad, e-posta ve mesaj alanları zorunludur." },
      { status: 422 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Geçersiz e-posta adresi." }, { status: 422 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ error: "Mesaj çok uzun (max 2000 karakter)." }, { status: 422 });
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Contacts";

  if (!apiKey || !baseId) {
    console.error("Airtable env variables missing");
    return NextResponse.json(
      { error: "Sunucu yapılandırma hatası." },
      { status: 500 }
    );
  }

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const airtableRes = await fetch(airtableUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Name: name.trim(),
        Email: email.trim(),
        Message: message.trim(),
        ...(phone?.trim() && { Phone: phone.trim() }),
        SubmittedAt: new Date().toISOString(),
      },
    }),
  });

  if (!airtableRes.ok) {
    const err = await airtableRes.text();
    console.error("Airtable error:", err);
    return NextResponse.json(
      { error: "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Mesajınız alındı. En kısa sürede dönüş yapacağız." });
}
