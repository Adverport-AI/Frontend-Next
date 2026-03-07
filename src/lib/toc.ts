import { slugify } from "./slugify";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type HeadingBlock = {
  _type: string;
  style: "h2" | "h3";
  children: { text?: string }[];
};

function isHeadingBlock(block: unknown): block is HeadingBlock {
  if (typeof block !== "object" || block === null) return false;
  const b = block as Record<string, unknown>;
  return (
    b._type === "block" &&
    (b.style === "h2" || b.style === "h3") &&
    Array.isArray(b.children)
  );
}

/** Extract TOC items from a PortableText body array (server-side safe, no "use client") */
export function extractTocItems(body: unknown[]): TocItem[] {
  return body.filter(isHeadingBlock).map((block) => {
    const text = block.children.map((c) => c.text ?? "").join("");
    return {
      id: slugify(text),
      text,
      level: block.style === "h2" ? 2 : 3,
    };
  });
}
