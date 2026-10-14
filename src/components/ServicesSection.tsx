import { useState } from 'react';
import { ArrowRight, Smartphone, Palette, Server, UploadCloud, X, Check } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData.ts';

interface ServicesSectionProps {
  lang: 'vi' | 'en';
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'mobile-engineering':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'mobile-uiux':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'app-backend':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'app-store-publishing':
        return <UploadCloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <span>{lang === 'vi' ? 'Dịch Vụ Làm App Toàn Diện' : 'Full-Lifecycle App Services'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Chuẩn App Store' : 'Store Certified'}</span>
          </div>
          
          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Giải pháp phát triển ứng dụng di động trọn gói từ A đến Z'
              : 'End-to-end mobile app engineering from concept to store rankings'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Đảm bảo ứng dụng của bạn đạt độ hoàn thiện cao nhất về thiết kế UI/UX, tối ưu hóa tốc độ tải dữ liệu, tương thích trên mọi dòng điện thoại và được Apple & Google phê duyệt nhanh chóng.'
              : 'Delivering pixel-perfect mobile interfaces, optimized memory footprints, multi-device compatibility, and rapid store publishing approvals.'}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Mobile Engineering Native & Cross-platform (Col span 7) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
                    {getServiceIcon(SERVICES_DATA[0].id)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{SERVICES_DATA[0].number}</span>
                </div>
                <div className="text-xs font-mono text-sky-400">
                  {lang === 'vi' ? SERVICES_DATA[0].metricsVi : SERVICES_DATA[0].metricsEn}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">
                {lang === 'vi' ? SERVICES_DATA[0].titleVi : SERVICES_DATA[0].titleEn}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'vi' ? SERVICES_DATA[0].summaryVi : SERVICES_DATA[0].summaryEn}
              </p>

              <div className="pt-2 border-t border-neutral-800">
                <div className="text-xs font-medium text-neutral-400 mb-2">
                  {lang === 'vi' ? 'Hạng mục bàn giao chính:' : 'Key Deliverables:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {(lang === 'vi' ? SERVICES_DATA[0].deliverablesVi : SERVICES_DATA[0].deliverablesEn).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">·</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                {SERVICES_DATA[0].tags.map((tag, i) => (
                  <span key={i} className="font-mono">{tag}{i < SERVICES_DATA[0].tags.length - 1 ? ' ·' : ''}</span>
                ))}
              </div>
              <button
                onClick={() => setSelectedService(SERVICES_DATA[0])}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>{lang === 'vi' ? 'Chi tiết kiến trúc' : 'Architecture Blueprint'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Mobile UI/UX (Col span 5 with mobile ui spotlight image) */}
          <div className="lg:col-span-5 bg-neutral-900/70 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div className="relative h-44 overflow-hidden border-b border-neutral-800">
              <img
                src="/src/assets/images/mobile_app_ecommerce_ui_1791944578991.jpg"
                alt="Mobile UI UX Design"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400">{SERVICES_DATA[1].number}</span>
                <span className="text-xs font-mono text-neutral-300">{lang === 'vi' ? SERVICES_DATA[1].metricsVi : SERVICES_DATA[1].metricsEn}</span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'vi' ? SERVICES_DATA[1].titleVi : SERVICES_DATA[1].titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {lang === 'vi' ? SERVICES_DATA[1].summaryVi : SERVICES_DATA[1].summaryEn}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs text-neutral-400 font-mono">
                  {SERVICES_DATA[1].tags.slice(0, 3).join(' · ')}
                </div>
                <button
                  onClick={() => setSelectedService(SERVICES_DATA[1])}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
                >
                  <span>{lang === 'vi' ? 'Chi tiết' : 'Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Backend for Mobile (Col span 5 with fintech ui screenshot) */}
          <div className="lg:col-span-5 bg-neutral-900/70 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div className="relative h-44 overflow-hidden border-b border-neutral-800">
              <img
                src="/src/assets/images/mobile_app_fintech_ui_1791944579386.jpg"
                alt="Mobile App Backend Architecture"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400">{SERVICES_DATA[2].number}</span>
                <span className="text-xs font-mono text-neutral-300">{lang === 'vi' ? SERVICES_DATA[2].metricsVi : SERVICES_DATA[2].metricsEn}</span>
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'vi' ? SERVICES_DATA[2].titleVi : SERVICES_DATA[2].titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {lang === 'vi' ? SERVICES_DATA[2].summaryVi : SERVICES_DATA[2].summaryEn}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs text-neutral-400 font-mono">
                  {SERVICES_DATA[2].tags.slice(0, 3).join(' · ')}
                </div>
                <button
                  onClick={() => setSelectedService(SERVICES_DATA[2])}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300"
                >
                  <span>{lang === 'vi' ? 'Chi tiết' : 'Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Store Publishing & ASO (Col span 7) */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
                    {getServiceIcon(SERVICES_DATA[3].id)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">{SERVICES_DATA[3].number}</span>
                </div>
                <div className="text-xs font-mono text-sky-400">
                  {lang === 'vi' ? SERVICES_DATA[3].metricsVi : SERVICES_DATA[3].metricsEn}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white">
                {lang === 'vi' ? SERVICES_DATA[3].titleVi : SERVICES_DATA[3].titleEn}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'vi' ? SERVICES_DATA[3].summaryVi : SERVICES_DATA[3].summaryEn}
              </p>

              <div className="pt-2 border-t border-neutral-800">
                <div className="text-xs font-medium text-neutral-400 mb-2">
                  {lang === 'vi' ? 'Dịch vụ phát hành & tối ưu hóa:' : 'Publishing & Optimization Services:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {(lang === 'vi' ? SERVICES_DATA[3].deliverablesVi : SERVICES_DATA[3].deliverablesEn).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">·</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                {SERVICES_DATA[3].tags.map((tag, i) => (
                  <span key={i} className="font-mono">{tag}{i < SERVICES_DATA[3].tags.length - 1 ? ' ·' : ''}</span>
                ))}
              </div>
              <button
                onClick={() => setSelectedService(SERVICES_DATA[3])}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>{lang === 'vi' ? 'Chi tiết' : 'Details'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Modal: Deep Dive Architecture Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-900 border border-neutral-700 rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-sky-400 mb-1">
                    {lang === 'vi' ? `HẠNG MỤC DỊCH VỤ ${selectedService.number}` : `SERVICE PILLAR ${selectedService.number}`}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'vi' ? selectedService.titleVi : selectedService.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-md bg-neutral-800 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>{lang === 'vi' ? selectedService.descriptionVi : selectedService.descriptionEn}</p>
                
                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                  <div className="text-xs font-mono text-neutral-400 mb-1">
                    {lang === 'vi' ? 'TIÊU CHUẨN HIỆU NĂNG CAM KẾT' : 'COMMITTED PERFORMANCE BENCHMARK'}
                  </div>
                  <div className="text-base font-semibold text-sky-400 font-mono">
                    {lang === 'vi' ? selectedService.metricsVi : selectedService.metricsEn}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">
                    {lang === 'vi' ? 'Quy trình và tài sản bàn giao:' : 'Deliverables & Architecture Scope:'}
                  </h4>
                  <ul className="space-y-2">
                    {(lang === 'vi' ? selectedService.deliverablesVi : selectedService.deliverablesEn).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  type="button"
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-md transition-colors"
                >
                  {lang === 'vi' ? 'Đóng' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    const title = lang === 'vi' ? selectedService.titleVi : selectedService.titleEn;
                    setSelectedService(null);
                    onSelectServiceForInquiry(title);
                  }}
                  type="button"
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
                >
                  {lang === 'vi' ? 'Tư vấn hạng mục này' : 'Consult for this Service'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
