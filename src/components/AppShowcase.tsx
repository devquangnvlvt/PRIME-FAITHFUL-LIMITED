import { useState } from 'react';
import { Smartphone, Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { APP_SOLUTIONS } from '../data/companyData.ts';

interface AppShowcaseProps {
  lang: 'vi' | 'en';
  onConsultAppType: (appType: string) => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ lang, onConsultAppType }) => {
  const [activeTab, setActiveTab] = useState<string>('fintech');

  const activeSolution = APP_SOLUTIONS.find(s => s.id === activeTab) || APP_SOLUTIONS[0];

  const getImageForSolution = (id: string) => {
    switch (id) {
      case 'fintech':
        return '/src/assets/images/mobile_app_fintech_ui_1791944579386.jpg';
      case 'ecommerce':
        return '/src/assets/images/mobile_app_ecommerce_ui_1791944578991.jpg';
      case 'booking-delivery':
        return '/src/assets/images/hero_mobile_app_showcase_1791944578126.jpg';
      default:
        return '/src/assets/images/mobile_app_fintech_ui_1791944579386.jpg';
    }
  };

  return (
    <section className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <Smartphone className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Mô Hình Ứng Dụng Chuyên Biệt' : 'Mobile Archetypes'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Thiết Kế Theo Ngành Hàng' : 'Vertical Solutions'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Giải pháp ứng dụng di động may đo cho từng mô hình kinh doanh'
              : 'Bespoke mobile application suites engineered for high conversion'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Mỗi ngành nghề đòi hỏi trải nghiệm vuốt chạm, luồng thanh toán và kiến trúc dữ liệu riêng biệt. Khám phá các mẫu ứng dụng thực chiến do Prime Faithful phát triển.'
              : 'Different business verticals demand distinct touch ergonomics, checkout velocity, and real-time data sync. Explore our production-proven application architectures.'}
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl max-w-2xl mb-10">
          {APP_SOLUTIONS.map(sol => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(sol.id)}
              type="button"
              className={`flex-1 min-w-[140px] py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap ${
                activeTab === sol.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'vi' ? sol.titleVi.split('&')[0] : sol.titleEn.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Showcase Detail Frame */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Interactive Phone UI Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden border-2 border-neutral-700 bg-neutral-950 shadow-2xl p-2.5 group">
              <div className="rounded-2xl overflow-hidden relative aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={getImageForSolution(activeSolution.id)}
                  alt={lang === 'vi' ? activeSolution.titleVi : activeSolution.titleEn}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 text-xs">
                  <span className="font-mono text-sky-400 font-semibold uppercase">
                    {lang === 'vi' ? 'Live Mobile UI Preview' : 'Live Mobile UI Preview'}
                  </span>
                  <div className="text-white font-medium text-xs mt-0.5 truncate">
                    {lang === 'vi' ? activeSolution.titleVi : activeSolution.titleEn}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Specifications & Features */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                {lang === 'vi' ? 'MÔ HÌNH THIẾT KẾ ĐỘC QUYỀN' : 'TAILORED ARCHITECTURE'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === 'vi' ? activeSolution.titleVi : activeSolution.titleEn}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mt-2">
                {lang === 'vi' ? activeSolution.descVi : activeSolution.descEn}
              </p>
            </div>

            {/* Core Feature Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                {lang === 'vi' ? 'Module Tính Năng Trọng Tâm:' : 'Core Built-In Modules:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(lang === 'vi' ? activeSolution.featuresVi : activeSolution.featuresEn).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-0.5">Performance</div>
                <div className="text-sm font-bold text-white flex items-center justify-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>120 FPS</span>
                </div>
              </div>
              <div className="border-x border-neutral-800">
                <div className="text-xs font-mono text-neutral-400 mb-0.5">Security</div>
                <div className="text-sm font-bold text-white flex items-center justify-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Biometric</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-0.5">App Store</div>
                <div className="text-sm font-bold text-white flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>100% Pass</span>
                </div>
              </div>
            </div>

            {/* CTA to consult on this app */}
            <div className="pt-2">
              <button
                onClick={() => onConsultAppType(lang === 'vi' ? activeSolution.titleVi : activeSolution.titleEn)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>{lang === 'vi' ? `Tư vấn làm ứng dụng ${activeSolution.titleVi}` : `Inquire for ${activeSolution.titleEn}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
