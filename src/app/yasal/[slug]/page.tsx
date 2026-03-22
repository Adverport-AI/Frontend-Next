import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";
import { Calendar, FileText } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { legalPages, legalPageSlugs } from "./legalPages";

export function generateStaticParams() {
  return legalPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = legalPages[slug];

  if (!pageData) return {};

  return {
    title: `${pageData.title} | Adverport`,
    description: pageData.description,
    alternates: { canonical: `/yasal/${slug}` },
  };
}

function formatInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/85 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: ReactElement[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  const flushLists = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-4 text-sm leading-relaxed text-white/65">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FFBA6F]" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }

    if (orderedItems.length > 0) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-white/65">
          {orderedItems.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      orderedItems = [];
    }
  };

  lines.forEach((line, index) => {
    if (line.startsWith("## ")) {
      flushLists();
      elements.push(
        <h2 key={`h2-${index}`} className="mt-8 font-['Inter',sans-serif] text-xl font-bold text-white sm:text-2xl">
          {line.replace("## ", "")}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      flushLists();
      elements.push(
        <h3 key={`h3-${index}`} className="mt-6 font-['Inter',sans-serif] text-lg font-semibold text-white">
          {line.replace("### ", "")}
        </h3>
      );
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.replace("- ", ""));
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      orderedItems.push(line.replace(/^\d+\.\s/, ""));
      return;
    }

    if (!line.trim()) {
      flushLists();
      return;
    }

    flushLists();
    elements.push(
      <p
        key={`p-${index}`}
        className="my-3 font-['Inter',sans-serif] text-sm leading-relaxed text-white/65 sm:text-base"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
  });

  flushLists();
  return elements;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = legalPages[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <section className="relative overflow-hidden bg-black pb-16 pt-[140px] sm:pt-[160px]">
        <div className="absolute left-1/3 top-0 h-[440px] w-[440px] rounded-full bg-[#d21027] opacity-10 blur-[180px]" />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mb-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[12px] border border-[#e75f01] bg-[#1e1e1e] px-4 py-2">
              <FileText className="h-4 w-4 text-[#FFBA6F]" />
              <span className="font-['Inter',sans-serif] text-sm font-semibold text-white sm:text-base">Yasal</span>
            </div>

            <h1 className="font-['Inter',sans-serif] text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {pageData.title}
            </h1>
            <p className="mt-4 max-w-2xl font-['Inter',sans-serif] text-base leading-relaxed text-white/55">
              {pageData.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-white/40">
              <Calendar className="h-4 w-4" />
              <span className="font-['Inter',sans-serif] text-xs sm:text-sm">Son güncelleme: {pageData.lastUpdated}</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 sm:p-10">
            {renderMarkdown(pageData.content)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
