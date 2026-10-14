import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData.ts';

interface FAQSectionProps {
  lang: 'vi' | 'en';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Hỏi Đáp Thường Gặp' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Giải đáp thắc mắc về hợp tác kỹ thuật và bàn giao'
              : 'Clear answers on engineering collaboration and delivery'}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{lang === 'vi' ? faq.questionVi : faq.questionEn}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-4">
                    {lang === 'vi' ? faq.answerVi : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
