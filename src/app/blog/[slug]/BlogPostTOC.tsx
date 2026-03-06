"use client";

import { useEffect, useState } from "react";
import { Layers } from "lucide-react";
import type { TocItem } from "../../../lib/toc";

export type { TocItem };

export function BlogPostTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 110) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
      <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
        <Layers className="w-4 h-4 text-[#EB5200]" /> İçindekiler
      </h4>
      <nav className="space-y-1 max-h-[45vh] overflow-y-auto pr-1 scrollbar-thin">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`block py-1.5 text-xs transition-all duration-200 border-l-2 ${
              item.level === 3 ? "pl-6" : "pl-3"
            } ${
              activeId === item.id
                ? "border-[#EB5200] text-[#FFBA6F] font-semibold"
                : "border-white/5 text-white/50 hover:text-white/80 hover:border-white/20"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
