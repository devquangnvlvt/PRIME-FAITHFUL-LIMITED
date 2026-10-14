import { ArrowRight, Calculator, CheckCircle2, Smartphone, Apple } from 'lucide-react';
import { COMPANY_STATS } from '../data/companyData.ts';

interface HeroProps {
  lang: 'vi' | 'en';
  onOpenConsultModal: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenConsultModal, onScrollToCalculator }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-800/80 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-sky-500/10 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed editorial category kicker */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400 mb-6 flex-wrap">
          <span className="text-sky-400 font-mono">PRIME FAITHFUL LIMITED</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'vi' ? 'Chuyên Gia Thiết Kế & Lập Trình Mobile App' : 'Mobile App Design & Engineering Studio'}</span>
          <span aria-hidden="true">·</span>
          <span>iOS · Android · Flutter · React Native</span>
        </div>

        {/* 2-column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Dominant Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              {lang === 'vi' ? (
                <>
                  Kiến tạo ứng dụng di động <span className="text-sky-400">mượt mà 120 FPS</span>, chuẩn App Store và thúc đẩy tăng trưởng
                </>
              ) : (
                <>
                  Engineering fluid <span className="text-sky-400">120 FPS mobile apps</span>, store-approved and built to scale
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {lang === 'vi' 
                ? 'Chúng tôi đồng hành cùng doanh nghiệp từ bản phác thảo ý tưởng đến khi ứng dụng hiện diện trên Apple App Store & Google Play. Chuyên sâu lập trình Native (Swift, Kotlin) và đa nền tảng (Flutter, React Native) với trải nghiệm người dùng đẳng cấp.'
                : 'From initial sketch to prominent store ranking on Apple App Store & Google Play. We specialize in native (Swift, Kotlin) and cross-platform (Flutter, React Native) architectures with human-centered UI/UX design.'}
            </p>

            {/* Platform Badges (Unboxed metadata style) */}
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
              <span className="flex items-center gap-1.5 text-white">
                <Apple className="w-4 h-4 text-sky-400" />
                <span>iOS (Swift/SwiftUI)</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-white">
                <Smartphone className="w-4 h-4 text-sky-400" />
                <span>Android (Kotlin)</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-400">Flutter & React Native</span>
            </div>

            {/* Trust points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{lang === 'vi' ? 'Cam kết duyệt App Store & Google Play 100%' : '100% Guaranteed App Store Approval'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{lang === 'vi' ? 'Thiết kế UI/UX độc quyền trên Figma' : 'Bespoke Figma Mobile UI/UX Design'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{lang === 'vi' ? 'Bàn giao 100% bản quyền sở hữu mã nguồn' : '100% Client source code & IP ownership'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{lang === 'vi' ? 'Tối ưu trải nghiệm chạm & thời lượng pin' : 'Battery & memory optimized performance'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultModal}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg transition-colors shadow-lg shadow-sky-950/40 whitespace-nowrap"
              >
                <span>{lang === 'vi' ? 'Tư vấn dự án App miễn phí' : 'Schedule App Discovery Call'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCalculator}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>{lang === 'vi' ? 'Dự toán chi phí làm App' : 'Estimate App Cost & Timeline'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Marquee Visual Focal Point showing Mobile App interfaces */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/images/hero_mobile_app_showcase_1791944578126.jpg"
                alt="PRIME FAITHFUL LIMITED App Engineering Showcase"
                className="w-full h-72 sm:h-96 lg:h-[420px] object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80">
                <p className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                  {lang === 'vi' ? 'Mobile App Production Studio' : 'Mobile App Production Studio'}
                </p>
                <p className="text-sm font-medium text-white">
                  {lang === 'vi' 
                    ? 'Showcase các dòng ứng dụng Fintech, Bán lẻ & Dịch vụ do Prime Faithful thiết kế'
                    : 'Portfolio of consumer Fintech, E-Commerce & Service apps by Prime Faithful'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Quantitative KPI Strip below Hero */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">
                {lang === 'vi' ? stat.labelVi : stat.labelEn}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
