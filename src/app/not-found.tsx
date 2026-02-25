import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white grid place-items-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sayfa bulunamadı</h1>
        <p className="mt-2 text-white/70">Aradığınız sayfa kaldırılmış olabilir.</p>
        <Link href="/" className="mt-5 inline-block rounded-xl bg-[#C0001A] px-4 py-2">Ana sayfaya dön</Link>
      </div>
    </main>
  );
}
