import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router';
import { Menu, X } from 'lucide-react';
import svgPaths from '../../imports/svg-2ykxxdmmup';

function LogoWhite() {
  return (
    <div className="h-[37.314px] w-[100px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3135">
        <g id="logo white">
          <g id="Group 2">
            <path d={svgPaths.p3e243280} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p60f7f80} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p4f87cf0} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p2fcaaa60} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p2c68200} fill="white" />
            <path d={svgPaths.pd9c8200} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p24fb9700} fill="white" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3dbee080} fill="white" fillRule="evenodd" />
            <path d={svgPaths.pc074f00} fill="white" />
          </g>
          <path d={svgPaths.p383bd500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

const navLinks = [
  { label: 'Markalar', href: '/markalar' },
  { label: 'Özellikler', href: '/ozellikler' },
  { label: 'Premium', href: '/premium' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open('https://apps.apple.com/app/adverport', '_blank');
    } else if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=com.adverport', '_blank');
    } else {
      // Desktop: default to a landing or both stores
      window.open('https://apps.apple.com/app/adverport', '_blank');
    }
  };

  const renderLink = (link: typeof navLinks[0], className: string) => {
    return (
      <Link
        key={link.label}
        to={link.href}
        className={`${className} ${location.pathname === link.href ? 'text-[#ff6b6b]' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-[20px] sm:top-[20px] min-[800px]:top-[16px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] sm:w-[calc(100%-68px)] min-[800px]:max-w-[780px] lg:max-w-[860px]">
      <div className="bg-gradient-to-r from-[#d21027] from-[40%] to-black rounded-[18px] sm:rounded-[23px] min-[800px]:rounded-[16px] shadow-[0px_4px_19.3px_6px_rgba(185,5,5,0.35)] px-4 sm:px-6 min-[800px]:px-5 py-3 sm:py-4 min-[800px]:py-2.5">
        <div className="flex items-center justify-between min-[800px]:justify-center min-[800px]:gap-10 lg:gap-14">
          <Link to="/" className="flex items-center">
            <div className="scale-75 sm:scale-100 origin-left">
              <LogoWhite />
            </div>
          </Link>

          <div className="hidden min-[800px]:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) =>
              renderLink(link, "font-['Inter',sans-serif] text-white text-[15px] font-medium hover:text-[#ff6b6b] transition-colors")
            )}
          </div>

          <div className="hidden min-[800px]:block">
            <button onClick={handleStoreRedirect} className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-5 py-2 rounded-[12px] font-semibold text-[14px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all">
              Ücretsiz Başla
            </button>
          </div>

          <div className="min-[800px]:hidden flex items-center gap-3">
            <button onClick={handleStoreRedirect} className="font-['Inter',sans-serif] bg-gradient-to-b from-[#d21027] to-[#6c0814] text-white px-4 py-2 rounded-[14px] font-semibold text-[13px] hover:shadow-[0_0_20px_rgba(210,16,39,0.5)] transition-all">
              Ücretsiz Başla
            </button>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="min-[800px]:hidden mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 items-center">
              {navLinks.map((link) =>
                renderLink(link, "font-['Inter',sans-serif] text-white text-[15px] font-medium")
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  const footerSections = [
    {
      title: 'Ürün',
      links: [
        { label: 'Özellikler', to: '/ozellikler' },
        { label: 'Premium', to: '/premium' },
        { label: 'Markalar', to: '/markalar' },
      ],
    },
    {
      title: 'Şirket',
      links: [
        { label: 'Hakkımızda', to: '/hakkimizda' },
        { label: 'Blog', to: '/blog' },
        { label: 'İletişim', to: '/iletisim' },
      ],
    },
    {
      title: 'Destek',
      links: [
        { label: 'Sık Sorulan Sorular', to: '/sss' },
        { label: 'Yardım Merkezi', to: '/yardim-merkezi' },
      ],
    },
    {
      title: 'Yasal',
      links: [
        { label: 'Ziyaretçi ve Kullanıcı Sözleşmesi', to: '/yasal/ziyaretci-ve-kullanici-sozlesmesi' },
        { label: 'Üyelik Aydınlatma Metni', to: '/yasal/uyelik-aydinlatma-metni' },
        { label: 'Websitesi Aydınlatma Metni', to: '/yasal/websitesi-aydinlatma-metni' },
        { label: 'İletişim Aydınlatma Metni', to: '/yasal/iletisim-aydinlatma-metni' },
      ],
    },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      to: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: 'X',
      to: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      to: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      to: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8 mb-12">
          {/* Logo + Tagline + Social Icons */}
          <div className="col-span-2">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4">
              <LogoWhite />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
              Alışveriş yap ve paylaş, kazanç sağla
            </p>
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('/') ? (
                      <Link to={link.to} onClick={scrollToTop} className="text-white/60 hover:text-white transition-colors text-sm">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.to} className="text-white/60 hover:text-white transition-colors text-sm">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; 2026 Adverport Teknoloji ve Yazılım Hizmetleri A.Ş. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}