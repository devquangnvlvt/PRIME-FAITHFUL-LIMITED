import React, { useState } from 'react';
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/companyData.ts';

interface CaseStudiesSectionProps {
  lang: 'vi' | 'en';
  onConsultSimilarProject: (projectTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ lang, onConsultSimilarProject }) => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <span>{lang === 'vi' ? 'Minh Chứng Hiệu Quả' : 'Proven Track Record'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Dự Án Thực Tế Đã Triển Khai' : 'Enterprise Case Studies'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Tác động đo lường được trên quy mô hàng triệu giao dịch'
              : 'Measurable enterprise impact delivered at millions-of-users scale'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Mỗi dự án tại Prime Faithful Limited được định hình bởi các chỉ số kết quả kinh doanh rõ ràng: độ trễ hệ thống, tối ưu chi phí hạ tầng và năng suất vận hành.'
              : 'Every engineering engagement at Prime Faithful is benchmarked against concrete operational metrics: latency reduction, cloud cost efficiency, and transaction throughput.'}
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-5">
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-sky-400">
                    {lang === 'vi' ? study.industryVi : study.industryEn}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{study.client}</span>
                </div>

                {/* Big Metric Display */}
                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800/80">
                  <div className="text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {study.metricNumber}
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    {lang === 'vi' ? study.metricLabelVi : study.metricLabelEn}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  {lang === 'vi' ? study.titleVi : study.titleEn}
                </h3>

                {/* Challenge & Solution snippets */}
                <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-neutral-400 font-semibold">{lang === 'vi' ? 'Thách thức: ' : 'Challenge: '}</span>
                    <span>{lang === 'vi' ? study.challengeVi : study.challengeEn}</span>
                  </div>
                  <div>
                    <span className="text-sky-400 font-semibold">{lang === 'vi' ? 'Kết quả: ' : 'Outcome: '}</span>
                    <span>{lang === 'vi' ? study.resultVi : study.resultEn}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="pt-6 mt-6 border-t border-neutral-800 space-y-4">
                <div className="text-[11px] text-neutral-400 font-mono">
                  {study.techStack.join(' · ')}
                </div>

                <button
                  onClick={() => setActiveStudy(study)}
                  type="button"
                  className="w-full py-2.5 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{lang === 'vi' ? 'Xem chi tiết giải pháp kiến trúc' : 'View Architecture Blueprint'}</span>
                  <ChevronRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Case Study Details */}
        {activeStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-900 border border-neutral-700 rounded-xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase mb-1">
                    {lang === 'vi' ? activeStudy.industryVi : activeStudy.industryEn} · {activeStudy.client}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'vi' ? activeStudy.titleVi : activeStudy.titleEn}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveStudy(null)}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-md bg-neutral-800 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center gap-6">
                <div className="text-3xl font-extrabold text-sky-400 font-mono tabular-nums">
                  {activeStudy.metricNumber}
                </div>
                <div className="text-xs sm:text-sm text-neutral-300">
                  {lang === 'vi' ? activeStudy.metricLabelVi : activeStudy.metricLabelEn}
                </div>
              </div>

              {/* In-depth 3-stage breakdown */}
              <div className="space-y-4 text-sm text-neutral-300">
                <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800/60 space-y-1">
                  <h4 className="text-xs font-mono uppercase text-red-400 font-semibold">
                    {lang === 'vi' ? '01. Bài toán & Thách thức ban đầu' : '01. The Core Challenge'}
                  </h4>
                  <p>{lang === 'vi' ? activeStudy.challengeVi : activeStudy.challengeEn}</p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800/60 space-y-1">
                  <h4 className="text-xs font-mono uppercase text-sky-400 font-semibold">
                    {lang === 'vi' ? '02. Giải pháp kiến trúc từ Prime Faithful' : '02. Prime Faithful Architectural Solution'}
                  </h4>
                  <p>{lang === 'vi' ? activeStudy.solutionVi : activeStudy.solutionEn}</p>
                </div>

                <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800/60 space-y-1">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                    {lang === 'vi' ? '03. Kết quả & Tác động doanh thu' : '03. Measurable Outcome & ROI'}
                  </h4>
                  <p>{lang === 'vi' ? activeStudy.resultVi : activeStudy.resultEn}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase mb-2">
                    {lang === 'vi' ? 'Công nghệ triển khai:' : 'Deployed Technologies:'}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-white">
                    {activeStudy.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveStudy(null)}
                  type="button"
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-md"
                >
                  {lang === 'vi' ? 'Đóng' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    const title = lang === 'vi' ? activeStudy.titleVi : activeStudy.titleEn;
                    setActiveStudy(null);
                    onConsultSimilarProject(title);
                  }}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
                >
                  <span>{lang === 'vi' ? 'Tư vấn dự án tương tự' : 'Inquire for Similar Project'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
