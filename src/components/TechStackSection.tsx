import { useState } from 'react';
import { TECH_STACK, TechItem } from '../data/companyData.ts';

interface TechStackSectionProps {
  lang: 'vi' | 'en';
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'mobile' | 'backend' | 'design' | 'devops'>('all');

  const filteredTech = activeTab === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(item => item.category === activeTab);

  const tabs = [
    { id: 'all', labelVi: 'Tất Cả Công Nghệ', labelEn: 'All Technologies' },
    { id: 'mobile', labelVi: 'Lập Trình Mobile', labelEn: 'Mobile Stacks' },
    { id: 'backend', labelVi: 'Backend & Cloud API', labelEn: 'Mobile Backend' },
    { id: 'design', labelVi: 'Thiết Kế UI/UX', labelEn: 'UI/UX Design' },
    { id: 'devops', labelVi: 'Fastlane & ASO Store', labelEn: 'CI/CD & App Store' },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
              <span>{lang === 'vi' ? 'Hệ Sinh Thái Công Nghệ Làm App' : 'App Engineering Toolchain'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">{lang === 'vi' ? 'Chuẩn Mới Nhất 2026' : 'Modern Stack'}</span>
            </div>
            
            <h2 
              style={{ textWrap: 'balance' }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
            >
              {lang === 'vi'
                ? 'Công nghệ chuyên sâu cho ứng dụng di động mượt mà và bền vững'
                : 'Specialized mobile stacks engineered for high-fps and zero crashes'}
            </h2>
          </div>

          {/* Interactive filter tabs (segmented control buttons with active states) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start md:self-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {lang === 'vi' ? tab.labelVi : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTech.map((item: TechItem, idx: number) => (
            <div 
              key={idx}
              className="bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/80 rounded-lg p-5 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white tracking-tight">
                    {item.name}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {lang === 'vi' ? item.roleVi : item.roleEn}
                </p>
              </div>

              {/* Zero-pill metadata */}
              <div className="pt-3 mt-3 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                <span>Production Standard</span>
                <span aria-hidden="true">·</span>
                <span>iOS 19 & Android 16 Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Quote */}
        <div className="mt-12 p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              {lang === 'vi' ? 'Tiêu chuẩn kiểm thử đa thiết bị vật lý' : 'Physical Multi-Device Rig Testing'}
            </h4>
            <p className="text-xs text-neutral-300">
              {lang === 'vi'
                ? 'Mọi phiên bản app đều được chạy thử tự động trên phòng lab hơn 30 thiết bị iPhone, Samsung, Xiaomi để đảm bảo không bị lỗi tai thỏ, đục lỗ hay văng bộ nhớ.'
                : 'Every app build is automated across our 30+ physical device lab (iPhone, Samsung, Xiaomi) guaranteeing zero notch clipping, punch-hole layout glitches, or memory leaks.'}
            </p>
          </div>
          <div className="text-xs font-mono text-sky-400 whitespace-nowrap">
            Crash-free Rate &gt; 99.9%
          </div>
        </div>

      </div>
    </section>
  );
};
