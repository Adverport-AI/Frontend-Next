import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Clock, ArrowLeft, ArrowRight, User, Calendar, Layers } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts, type BlogPost } from './blogData';
import { GooglePlayButtonWrapper, AppStoreButtonWrapper } from './StoreButtons';
import pentagonSvgPaths from '../../imports/svg-2ykxxdmmup';
import imgPolygon1 from "figma:asset/5d48399b972281369c0877ffc30641392cc0dda2.png";
import imgEllipse3 from "figma:asset/437429ee8b74c5985f1fe85250ee1e7574819fb0.png";

const categoryImages: Record<string, string> = {
  'Affiliate Marketing': 'https://images.unsplash.com/photo-1647507489316-39fc8a371fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZpbGlhdGUlMjBtYXJrZXRpbmclMjBsYXB0b3AlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcyNzI0NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'Moda ve Güzellik': 'https://images.unsplash.com/photo-1587055682234-853183f4523c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmVhdXR5JTIwY29zbWV0aWNzJTIwZmxhdGxheXxlbnwxfHx8fDE3NzI3MjQ3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'Instagram': 'https://images.unsplash.com/photo-1643239120053-f2560e990141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYSUyMHBob25lJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcyNzI0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'Youtube': 'https://images.unsplash.com/photo-1676380362680-85260af12dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBjcmVhdG9yJTIwc3R1ZGlvfGVufDF8fHx8MTc3MjcyNDcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'Influencer': 'https://images.unsplash.com/photo-1758273239228-04a19ba5a1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbGlmZXN0eWxlJTIwY29udGVudCUyMGNyZWF0b3J8ZW58MXx8fHwxNzcyNzI0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

const turkishMonthOrder: Record<string, number> = {
  'Ocak': 1, 'Şubat': 2, 'Mart': 3, 'Nisan': 4, 'Mayıs': 5, 'Haziran': 6,
  'Temmuz': 7, 'Ağustos': 8, 'Eylül': 9, 'Ekim': 10, 'Kasım': 11, 'Aralık': 12,
};

function parseTurkishDate(dateStr: string): number {
  const parts = dateStr.split(' ');
  if (parts.length !== 3) return 0;
  const day = parseInt(parts[0]);
  const month = turkishMonthOrder[parts[1]] || 0;
  const year = parseInt(parts[2]);
  return year * 10000 + month * 100 + day;
}

// Social share icons as inline SVGs
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function getShareUrls(postTitle: string, postUrl: string) {
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(postTitle);
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u');
}

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function extractToc(content: string): TocItem[] {
  const lines = content.split('\n');
  const items: TocItem[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      const text = trimmed.substring(4);
      items.push({ id: slugify(text), text, level: 3 });
    } else if (trimmed.startsWith('## ')) {
      const text = trimmed.substring(3);
      items.push({ id: slugify(text), text, level: 2 });
    }
  }
  return items;
}

function TableOfContents({ items, activeId }: { items: TocItem[]; activeId: string }) {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
      <h4 className="font-['Inter',sans-serif] text-white font-bold text-sm mb-4 flex items-center gap-2">
        <Layers className="w-4 h-4 text-[#EB5200]" /> İçindekiler
      </h4>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`block py-1.5 text-xs font-['Inter',sans-serif] transition-all duration-200 border-l-2 ${
              item.level === 3 ? 'pl-6' : 'pl-3'
            } ${
              activeId === item.id
                ? 'border-[#EB5200] text-[#FFBA6F] font-semibold'
                : 'border-white/5 text-white/50 hover:text-white/80 hover:border-white/20'
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

function MarkdownRenderer({ content, mobileTocSlot }: { content: string; mobileTocSlot?: React.ReactNode }) {
  const rendered = useMemo(() => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeader: string[] = [];
    let listKey = 0;
    let tableKey = 0;
    let firstH2Done = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(<ul key={`list-${listKey++}`} className="space-y-2 my-5 pl-1">{listItems}</ul>);
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${tableKey++}`} className="my-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead><tr className="bg-white/[0.05]">{tableHeader.map((cell, i) => (<th key={i} className="font-['Inter',sans-serif] text-white/80 text-sm font-semibold text-left px-5 py-3 border-b border-white/10">{cell.trim()}</th>))}</tr></thead>
              <tbody>{tableRows.map((row, ri) => (<tr key={ri} className={ri % 2 === 0 ? '' : 'bg-white/[0.02]'}>{row.map((cell, ci) => (<td key={ci} className="font-['Inter',sans-serif] text-white/60 text-sm px-5 py-3 border-b border-white/5">{cell.trim()}</td>))}</tr>))}</tbody>
            </table>
          </div>
        );
        tableRows = [];
        tableHeader = [];
        inTable = false;
      }
    };

    const parseInline = (text: string): React.ReactNode => {
      const parts: React.ReactNode[] = [];
      let remaining = text;
      let pk = 0;
      while (remaining.length > 0) {
        const bm = remaining.match(/\*\*(.+?)\*\*/);
        if (bm && bm.index !== undefined) {
          if (bm.index > 0) parts.push(<span key={pk++}>{remaining.substring(0, bm.index)}</span>);
          parts.push(<strong key={pk++} className="text-white font-semibold">{bm[1]}</strong>);
          remaining = remaining.substring(bm.index + bm[0].length);
          continue;
        }
        const cm = remaining.match(/`(.+?)`/);
        if (cm && cm.index !== undefined) {
          if (cm.index > 0) parts.push(<span key={pk++}>{remaining.substring(0, cm.index)}</span>);
          parts.push(<code key={pk++} className="bg-white/10 text-[#FFBA6F] px-1.5 py-0.5 rounded text-[0.9em]">{cm[1]}</code>);
          remaining = remaining.substring(cm.index + cm[0].length);
          continue;
        }
        parts.push(<span key={pk++}>{remaining}</span>);
        break;
      }
      return parts.length === 1 ? parts[0] : <>{parts}</>;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList();
        const cells = trimmed.split('|').filter(Boolean);
        if (cells.every((c) => c.trim().match(/^-+$/))) continue;
        if (!inTable) { inTable = true; tableHeader = cells; } else { tableRows.push(cells); }
        continue;
      } else if (inTable) { flushTable(); }

      if (trimmed.startsWith('## ')) {
        flushList();
        if (!firstH2Done && mobileTocSlot) {
          elements.push(<div key="mobile-toc-slot">{mobileTocSlot}</div>);
          firstH2Done = true;
        }
        const headingText = trimmed.substring(3);
        elements.push(<h2 key={i} id={slugify(headingText)} className="font-['Inter',sans-serif] text-xl sm:text-2xl font-bold text-white mt-10 mb-4">{headingText}</h2>);
        continue;
      }

      if (trimmed.startsWith('### ')) {
        flushList();
        const headingText = trimmed.substring(4);
        elements.push(<h3 key={i} id={slugify(headingText)} className="font-['Inter',sans-serif] text-lg sm:text-xl font-bold text-white mt-8 mb-3">{headingText}</h3>);
        continue;
      }

      if (trimmed.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={i} className="my-6 pl-5 border-l-4 border-[#EB5200] bg-gradient-to-r from-[#EB5200]/5 to-transparent py-4 pr-4 rounded-r-xl">
            <p className="font-['Inter',sans-serif] text-white/70 text-base italic leading-relaxed">{parseInline(trimmed.substring(2).replace(/"/g, ''))}</p>
          </blockquote>
        );
        continue;
      }

      if (trimmed.startsWith('- ')) {
        inList = true;
        listItems.push(
          <li key={i} className="flex items-start gap-3 font-['Inter',sans-serif] text-white/60 text-base leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB5200] flex-shrink-0 mt-2.5" />
            <span>{parseInline(trimmed.substring(2))}</span>
          </li>
        );
        continue;
      }

      const numMatch = trimmed.match(/^(\d+)\.\s(.+)/);
      if (numMatch) {
        inList = true;
        listItems.push(
          <li key={i} className="flex items-start gap-3 font-['Inter',sans-serif] text-white/60 text-base leading-relaxed">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d21027]/30 to-[#EB5200]/30 flex-shrink-0 flex items-center justify-center text-xs text-[#FFBA6F] font-bold mt-0.5">{numMatch[1]}</span>
            <span>{parseInline(numMatch[2])}</span>
          </li>
        );
        continue;
      }

      if (inList) flushList();
      if (trimmed === '') continue;

      elements.push(<p key={i} className="font-['Inter',sans-serif] text-white/60 text-base leading-[1.85] my-4">{parseInline(trimmed)}</p>);
    }

    flushList();
    flushTable();
    return elements;
  }, [content, mobileTocSlot]);

  return <div>{rendered}</div>;
}

function PostNavigationCard({ post, direction }: { post: BlogPost; direction: 'prev' | 'next' }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all block"
    >
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className={`flex items-center gap-1.5 text-white/50 text-xs mb-1.5 font-['Inter',sans-serif] ${direction === 'next' ? 'justify-end' : ''}`}>
            {direction === 'prev' && <ArrowLeft className="w-3.5 h-3.5" />}
            <span>{direction === 'prev' ? 'Önceki Yazı' : 'Sonraki Yazı'}</span>
            {direction === 'next' && <ArrowRight className="w-3.5 h-3.5" />}
          </div>
          <p className={`font-['Inter',sans-serif] text-white text-sm font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2 ${direction === 'next' ? 'text-right' : ''}`}>
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#d21027]/40 transition-all block"
    >
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="font-['Inter',sans-serif] bg-white/10 backdrop-blur-sm text-[#FFBA6F] px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2 text-white/40 text-xs font-['Inter',sans-serif]">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
        </div>
        <h3 className="font-['Inter',sans-serif] text-white font-bold text-sm sm:text-base group-hover:text-[#FFBA6F] transition-colors line-clamp-2">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
  }, [post]);

  const latestPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => parseTurkishDate(b.date) - parseTurkishDate(a.date))
      .filter((p) => p.slug !== slug)
      .slice(0, 3);
  }, [slug]);

  const categories = useMemo(() => {
    return Object.entries(categoryImages).map(([name, image]) => ({
      name,
      image,
      count: blogPosts.filter((p) => p.category === name).length,
    }));
  }, []);

  const currentIndex = post ? blogPosts.findIndex((p) => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : blogPosts[blogPosts.length - 1];
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareUrls = post ? getShareUrls(post.title, postUrl) : null;

  if (!post) {
    return (
      <main className="bg-black min-h-screen pt-[140px] sm:pt-[160px] pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="font-['Inter',sans-serif] text-3xl sm:text-4xl font-bold text-white mb-4">Yazı Bulunamadı</h1>
          <p className="font-['Inter',sans-serif] text-white/60 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif]"
          >
            <ArrowLeft className="w-4 h-4" /> Blog'a Dön
          </Link>
        </div>
      </main>
    );
  }

  const tocItems = extractToc(post.content);
  const [activeTocId, setActiveTocId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentId = tocItems.reduce((acc, item) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 100) {
          return item.id;
        }
        return acc;
      }, '');
      setActiveTocId(currentId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  return (
    <main>
      {/* Hero Image */}
      <section className="relative bg-black pt-[100px] sm:pt-[120px]">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6 font-['Inter',sans-serif] text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Blog'a Dön
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[380px] lg:h-[460px]"
          >
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  to={`/blog?category=${encodeURIComponent(post.category)}`}
                  className="font-['Inter',sans-serif] bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-3 py-1.5 rounded-full text-xs font-bold hover:shadow-[0_0_15px_rgba(210,16,39,0.4)] transition-all"
                >
                  {post.category}
                </Link>
                <span className="font-['Inter',sans-serif] text-white/60 text-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} okuma
                </span>
                <span className="font-['Inter',sans-serif] text-white/60 text-xs flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
              </div>

              <h1 className="font-['Inter',sans-serif] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-4xl">
                {post.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <section className="bg-black py-10 sm:py-16 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d21027] opacity-3 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8"
            >
              {/* Author Bar + Social Share */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-white font-semibold text-sm">{post.author}</p>
                    <p className="font-['Inter',sans-serif] text-white/40 text-xs">{post.authorRole}</p>
                  </div>
                </div>

                {/* Social Share Buttons */}
                {shareUrls && (
                  <div className="flex items-center gap-2">
                    <span className="font-['Inter',sans-serif] text-white/40 text-xs mr-1 hidden sm:inline">Paylaş:</span>
                    <a
                      href={shareUrls.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 hover:text-[#0077B5] transition-all"
                      title="LinkedIn'de Paylaş"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={shareUrls.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/15 hover:border-white/30 hover:text-white transition-all"
                      title="X'te Paylaş"
                    >
                      <XIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-all"
                      title="Facebook'ta Paylaş"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={shareUrls.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 hover:text-[#25D366] transition-all"
                      title="WhatsApp'ta Paylaş"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Excerpt */}
              <p className="font-['Inter',sans-serif] text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Article Body */}
              <div className="prose-custom">
                <MarkdownRenderer
                  content={post.content}
                  mobileTocSlot={tocItems.length > 0 ? (
                    <div className="lg:hidden mb-8">
                      <TableOfContents items={tocItems} activeId={activeTocId} />
                    </div>
                  ) : undefined}
                />
              </div>

              {/* Post Navigation - Card style with images */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <PostNavigationCard post={prevPost} direction="prev" />
                <PostNavigationCard post={nextPost} direction="next" />
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="lg:sticky lg:top-[120px] space-y-6">
                  {/* Author Card */}
                  <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d21027] to-[#EB5200] flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-['Inter',sans-serif] text-white font-bold text-sm">Adverport Ekibi</p>
                        <p className="font-['Inter',sans-serif] text-white/40 text-xs">İçerik Ekibi</p>
                      </div>
                    </div>
                    <p className="font-['Inter',sans-serif] text-white/50 text-sm leading-relaxed">
                      Adverport ekibinde yer alan uzman içerik üreticilerimizden. Affiliate pazarlama stratejileri üzerine düzenli yazılar yayınlamaktadır.
                    </p>
                  </div>

                  {/* İçindekiler */}
                  {tocItems.length > 0 && (
                    <div className="hidden lg:block">
                      <TableOfContents items={tocItems} activeId={activeTocId} />
                    </div>
                  )}

                  {/* Categories */}
                  <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                    <h4 className="font-['Inter',sans-serif] text-white font-bold text-sm mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#EB5200]" /> Kategoriler
                    </h4>
                    <div className="space-y-2.5">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={`/blog?category=${encodeURIComponent(cat.name)}`}
                          className="group flex items-center gap-3 rounded-xl overflow-hidden hover:bg-white/5 transition-all p-1.5 -mx-1.5"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-['Inter',sans-serif] text-white text-xs font-semibold group-hover:text-[#FFBA6F] transition-colors truncate">
                              {cat.name}
                            </p>
                            <p className="font-['Inter',sans-serif] text-white/40 text-[11px]">
                              {cat.count} yazı
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#EB5200] transition-colors flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Son Yazılar */}
                  <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                    <h4 className="font-['Inter',sans-serif] text-white font-bold text-sm mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#EB5200]" /> Son Yazılar
                    </h4>
                    <div className="space-y-4">
                      {latestPosts.map((lp) => (
                        <Link
                          key={lp.id}
                          to={`/blog/${lp.slug}`}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback src={lp.image} alt={lp.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-['Inter',sans-serif] text-white text-xs font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2 leading-relaxed">
                              {lp.title}
                            </p>
                            <p className="font-['Inter',sans-serif] text-white/40 text-[11px] mt-1">{lp.date}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Related Posts (Sidebar) - hidden on mobile, shown on desktop */}
                  {relatedPosts.length > 0 && (
                    <div className="hidden lg:block bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6">
                      <h4 className="font-['Inter',sans-serif] text-white font-bold text-sm mb-4 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-[#EB5200]" /> Aynı Kategoriden Yazılar
                      </h4>
                      <div className="space-y-4">
                        {relatedPosts.map((rp) => (
                          <Link
                            key={rp.id}
                            to={`/blog/${rp.slug}`}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <ImageWithFallback src={rp.image} alt={rp.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-['Inter',sans-serif] text-white text-xs font-semibold group-hover:text-[#FFBA6F] transition-colors line-clamp-2 leading-relaxed">
                                {rp.title}
                              </p>
                              <p className="font-['Inter',sans-serif] text-white/40 text-[11px] mt-1">{rp.readTime}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts - Full Width (Mobile + Tablet) */}
      {relatedPosts.length > 0 && (
        <section className="lg:hidden bg-[#0a0a0a] py-12 sm:py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <h3 className="font-['Inter',sans-serif] text-xl font-bold text-white mb-6">Aynı Kategoriden Yazılar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <RelatedPostCard key={rp.id} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App Download CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-t border-white/5">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0508] to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d21027]/10 via-transparent to-[#EB5200]/10" />

        {/* Polygon blur shape */}
        <div className="absolute h-[300px] sm:h-[400px] left-[-80px] sm:left-[-100px] top-[-50px] w-[350px] sm:w-[500px] opacity-40 pointer-events-none">
          <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
        </div>

        {/* Ellipse glow */}
        <div className="absolute h-[250px] sm:h-[350px] right-[-60px] sm:right-[-80px] bottom-[-40px] w-[300px] sm:w-[400px] opacity-40 pointer-events-none">
          <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
        </div>

        {/* Red gradient blurs */}
        <div className="absolute blur-[120px] sm:blur-[160px] h-[200px] sm:h-[300px] left-[10%] opacity-60 top-[20%] w-[300px] sm:w-[500px] bg-[#fa1111] pointer-events-none" />
        <div className="absolute blur-[120px] sm:blur-[160px] h-[200px] sm:h-[250px] right-[10%] opacity-40 bottom-[10%] w-[250px] sm:w-[400px] bg-[#d21027] pointer-events-none" />

        {/* Animated pentagon - left */}
        <motion.div
          className="absolute h-[250px] sm:h-[400px] lg:h-[500px] left-[-150px] sm:left-[-200px] lg:left-[-220px] top-[50%] -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] mix-blend-overlay opacity-40 sm:opacity-50 pointer-events-none"
          animate={{ y: [0, -15, 0], rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
            <g filter="url(#filter_cta_left)" style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p155bdde0} fill="url(#paint_cta_left)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter_cta_left" width="916.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="6.6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1" />
                <feBlend in="SourceGraphic" in2="effect1" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_left" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Animated pentagon - right */}
        <motion.div
          className="absolute h-[300px] sm:h-[450px] lg:h-[550px] right-[-180px] sm:right-[-230px] lg:right-[-250px] top-[50%] -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[550px] mix-blend-overlay opacity-40 sm:opacity-50 pointer-events-none"
          animate={{ y: [0, 15, 0], rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 916.4 923.4">
            <g filter="url(#filter_cta_right)" style={{ mixBlendMode: "overlay" }}>
              <path d={pentagonSvgPaths.p3357f280} fill="url(#paint_cta_right)" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="923.4" id="filter_cta_right" width="916.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="6.6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1" />
                <feBlend in="SourceGraphic" in2="effect1" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint_cta_right" x1="670.721" x2="252.719" y1="-93.035" y2="847.332">
                <stop stopColor="#ff0000" stopOpacity="0.3" />
                <stop offset="1" stopColor="#d21027" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d21027] to-[#EB5200] mb-6 shadow-[0_0_40px_rgba(210,16,39,0.4)]">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <h2 className="font-['Inter',sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              <span>Alışveriş Yap, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kazanç Sağla</span>
            </h2>
            <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Adverport uygulamasını indir, sevdiğin ürünleri paylaş ve her satıştan komisyon kazan. Hemen başla!
            </p>
            <div className="flex flex-row gap-3 justify-center max-w-xs mx-auto">
              <div className="h-[44px] sm:h-[50px] flex-1">
                <GooglePlayButtonWrapper />
              </div>
              <div className="h-[44px] sm:h-[50px] flex-1">
                <AppStoreButtonWrapper />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black py-14 sm:py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d21027] opacity-8 blur-[150px] rounded-full" />

        <div className="relative max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-['Inter',sans-serif] text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Yeni Yazıları{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5200] to-[#FFBA6F]">Kaçırma</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-white/60 text-sm sm:text-base mb-6">
            Haftalık bültenimize abone ol, en son ipuçları ve stratejileri doğrudan posta kutuna al.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#d21027]/50 transition-colors font-['Inter',sans-serif] text-sm"
            />
            <button className="bg-gradient-to-r from-[#d21027] to-[#EB5200] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:shadow-[0_0_30px_rgba(210,16,39,0.5)] transition-all font-['Inter',sans-serif] whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}