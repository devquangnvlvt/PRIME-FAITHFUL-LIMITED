import { ShieldCheck, Award, Lock, FileCode } from 'lucide-react';
import { CORE_VALUES } from '../data/companyData.ts';

interface AboutCompanyProps {
  lang: 'vi' | 'en';
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <span>{lang === 'vi' ? 'Hồ Sơ Năng Lực' : 'Corporate Profile'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Về Prime Faithful Limited' : 'About Prime Faithful Limited'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Xây dựng dựa trên nền tảng kỹ thuật chính trực và cam kết chất lượng'
              : 'Built on rigorous engineering integrity and unwavering commitment'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Đúng như tên gọi "Faithful", chúng tôi coi sự tin cậy kỹ thuật và tính minh bạch là tài sản quý giá nhất. Prime Faithful Limited được thành lập bởi nhóm các kỹ sư phần mềm và kiến trúc sư hệ thống giàu kinh nghiệm, đặt mục tiêu trở thành đối tác công nghệ chiến lược tin cậy cho các doanh nghiệp trong nước và quốc tế.'
              : 'True to our name "Faithful", technical integrity and total transparency are our foundational values. Founded by senior software architects, Prime Faithful Limited is dedicated to serving as the dependable engineering partner for forward-thinking enterprises.'}
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CORE_VALUES.map((val) => (
            <div 
              key={val.number}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-7 space-y-4"
            >
              <div className="text-xs font-mono text-sky-400">
                {lang === 'vi' ? `NGUYÊN TẮC ${val.number}` : `PRINCIPLE ${val.number}`}
              </div>

              <h3 className="text-lg font-bold text-white">
                {lang === 'vi' ? val.titleVi : val.titleEn}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'vi' ? val.descVi : val.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges & Compliance Strip */}
        <div className="p-8 rounded-xl bg-neutral-900/60 border border-neutral-800">
          <div className="text-xs font-mono uppercase text-sky-400 mb-6 tracking-wider">
            {lang === 'vi' ? 'Tiêu Chuẩn & Cam Kết An Toàn Doanh Nghiệp' : 'Enterprise Certifications & Governance'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white">ISO/IEC 27001</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'vi' ? 'Quản lý an toàn thông tin' : 'Information Security Management'}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white">SOC 2 Type II</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'vi' ? 'Kiểm soát dữ liệu & bảo mật đám mây' : 'Cloud Security & Privacy Controls'}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCode className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white">Full IP Transfer</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'vi' ? 'Bàn giao 100% bản quyền sở hữu' : 'Complete Source & IP Ownership'}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-white">SLA 24/7 Support</div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'vi' ? 'Hỗ trợ kỹ thuật ứng cứu khẩn cấp' : 'Mission-Critical Engineering Support'}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
