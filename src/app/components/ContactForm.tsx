"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Bir hata oluştu.");
        setState("error");
      } else {
        setState("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setErrorMsg("Ağ hatası. Lütfen tekrar deneyin.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-[#d21027]/40 bg-[#d21027]/10 p-8 text-center">
        <div className="text-3xl mb-3">✓</div>
        <p className="text-white font-semibold">Mesajınız alındı!</p>
        <p className="text-white/60 mt-1 text-sm">En kısa sürede size dönüş yapacağız.</p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 text-sm text-white/50 hover:text-white transition-colors"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-white/70 mb-1.5">
            Ad Soyad <span className="text-[#d21027]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d21027]/60 focus:ring-1 focus:ring-[#d21027]/40 transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">
            E-posta <span className="text-[#d21027]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d21027]/60 focus:ring-1 focus:ring-[#d21027]/40 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-white/70 mb-1.5">
          Telefon <span className="text-white/40">(isteğe bağlı)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+90 5xx xxx xx xx"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d21027]/60 focus:ring-1 focus:ring-[#d21027]/40 transition-colors text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-white/70 mb-1.5">
          Mesaj <span className="text-[#d21027]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Nasıl yardımcı olabiliriz?"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#d21027]/60 focus:ring-1 focus:ring-[#d21027]/40 transition-colors text-sm resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full sm:w-auto bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3 rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(210,16,39,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
