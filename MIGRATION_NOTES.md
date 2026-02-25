## Yapılanlar
- Vite export Next.js App Router'a taşındı
- Ana landing page mevcut haliyle korundu (`src/app/App.tsx`)
- SEO metadata eklendi
- `sitemap.xml` ve `robots.txt` route'ları eklendi
- MDX tabanlı blog altyapısı eklendi
- `generateStaticParams` ile blog yazıları statik üretilecek şekilde ayarlandı

## Neden hâlâ `use client` var?
Figma Make export'u landing page içinde `useState` ve etkileşimli UI parçaları kullanıyor.
Kısa vadede en hızlı güvenli geçiş için landing page client component olarak bırakıldı.

## Bir sonraki optimizasyon
Navbar, FAQ gibi interaktif parçaları ayrı client component'lere ayırıp,
statik section'ları server component yapmak SEO ve performansı iyileştirir.
