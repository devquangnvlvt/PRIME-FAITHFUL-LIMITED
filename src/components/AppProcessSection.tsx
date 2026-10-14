import { CheckCircle2 } from 'lucide-react';
import { APP_DEVELOPMENT_PROCESS } from '../data/companyData.ts';

interface AppProcessSectionProps {
  lang: 'vi' | 'en';
}

export const AppProcessSection: React.FC<AppProcessSectionProps> = ({ lang }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <span>{lang === 'vi' ? 'Quy Trình Chuẩn Hóa' : 'Standard Delivery Framework'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Từ Ý Tưởng Đến Store' : 'Idea to Store'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Quy trình 6 bước đưa ứng dụng di động lên kho ứng dụng thành công'
              : 'Our proven 6-stage lifecycle to launch successful mobile apps'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Áp dụng mô hình Agile Scrum minh bạch. Bạn được cầm thử bản mẫu Prototype trên tay trước khi lập trình, và nghiệm thu các phiên bản TestFlight cứ mỗi 2 tuần.'
              : 'Transparent Agile Scrum delivery. Experience clickable Figma prototypes on physical phones before engineering begins, with testable TestFlight builds shipped every two weeks.'}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_DEVELOPMENT_PROCESS.map((step) => (
            <div 
              key={step.step}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sm:p-7 space-y-3 relative hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-sky-400">
                  {step.step}
                </span>
                <CheckCircle2 className="w-4 h-4 text-neutral-600" />
              </div>

              <h3 className="text-lg font-bold text-white pt-1">
                {lang === 'vi' ? step.titleVi : step.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {lang === 'vi' ? step.descVi : step.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
