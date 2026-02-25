# Adverport Next.js SEO Starter (from Figma Make export)

Bu proje, Figma Make çıktısının **Next.js App Router** yapısına taşınmış sürümüdür.

## İçerik
- Landing page (Figma Make export) → `src/app/App.tsx` (client component)
- SEO metadata → `src/app/layout.tsx` + sayfa bazlı metadata
- Sitemap / Robots → `src/app/sitemap.ts`, `src/app/robots.ts`
- Blog (MDX tabanlı, static generation) → `src/app/blog/*`
- Blog içerikleri → `content/blog/*.mdx`

## Çalıştırma
```bash
npm install
npm run dev
```

## Vercel Deploy
1. Repo'yu GitHub'a gönder
2. Vercel'de import et
3. Framework: Next.js (otomatik)
4. Domain bağla

## Sonraki teknik iyileştirmeler (önerilen)
- `src/app/App.tsx` içindeki interaktif alanları ayırıp server/client component split yapmak
- `next/image` kullanımına geçmek
- Blog için gerçek OG image üretimi eklemek
- Analytics / Search Console entegrasyonu
