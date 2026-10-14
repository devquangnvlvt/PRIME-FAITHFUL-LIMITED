import { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe, Smartphone } from 'lucide-react';

interface HeaderProps {
  lang: 'vi' | 'en';
  onToggleLang: () => void;
  onOpenConsultModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenConsultModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', labelVi: 'Dịch vụ làm App', labelEn: 'Services' },
    { href: '#showcase', labelVi: 'Mẫu ứng dụng', labelEn: 'Showcase' },
    { href: '#tech-stack', labelVi: 'Công nghệ', labelEn: 'Technology' },
    { href: '#process', labelVi: 'Quy trình', labelEn: 'Process' },
    { href: '#case-studies', labelVi: 'Dự án thực tế', labelEn: 'Case Studies' },
    { href: '#calculator', labelVi: 'Dự toán chi phí', labelEn: 'Cost Estimator' },
    { href: '#contact', labelVi: 'Liên hệ', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-sky-600/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <span>PRIME FAITHFUL LIMITED</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {lang === 'vi' ? link.labelVi : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action & auxiliary language toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors"
            title={lang === 'vi' ? 'Chuyển sang tiếng Anh' : 'Switch to Vietnamese'}
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span className="uppercase font-mono">{lang}</span>
          </button>

          <button
            onClick={onOpenConsultModal}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>{lang === 'vi' ? 'Báo giá làm App' : 'Get App Quote'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-sky-400 transition-colors py-1"
              >
                {lang === 'vi' ? link.labelVi : link.labelEn}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultModal();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
            >
              <span>{lang === 'vi' ? 'Nhận báo giá dự án App' : 'Get App Quote'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
