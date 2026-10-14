import React from 'react';

interface FooterProps {
  lang: 'vi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 inline-block"></span>
              <span>Prime Faithful Limited</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {lang === 'vi'
                ? 'Công ty công nghệ chuyên thiết kế UI/UX và lập trình ứng dụng di động iOS, Android, Flutter, React Native và Super App chuyên nghiệp, cam kết duyệt App Store 100%.'
                : 'Mobile engineering studio crafting fluid iOS, Android, Flutter, React Native, and Super App applications with 100% guaranteed App Store approval.'}
            </p>
            <div className="text-[11px] font-mono text-neutral-500">
              {lang === 'vi' ? 'Mã số doanh nghiệp: 0317892182 · Cấp tại TP.HCM' : 'Business Registration: 0317892182'}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              {lang === 'vi' ? 'Dịch Vụ Làm App' : 'Mobile Engineering'}
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'vi' ? 'Lập trình Flutter & React Native' : 'Flutter & React Native Apps'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'vi' ? 'Lập trình iOS (Swift) & Android' : 'Native iOS & Android Apps'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'vi' ? 'Thiết kế Mobile UI/UX (Figma)' : 'Mobile UI/UX Product Design'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{lang === 'vi' ? 'Đưa App lên App Store & Google Play' : 'App Store & Google Play Launch'}</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              {lang === 'vi' ? 'Doanh Nghiệp & Pháp Lý' : 'Corporate & Legal'}
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">{lang === 'vi' ? 'Hồ sơ năng lực công ty' : 'About Prime Faithful'}</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">{lang === 'vi' ? 'Dự án tiêu biểu & Khách hàng' : 'Case Studies & Clients'}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{lang === 'vi' ? 'Dự toán chi phí & thời gian' : 'Scope & Timeline Calculator'}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{lang === 'vi' ? 'Liên hệ & Đặt lịch tư vấn' : 'Contact & Schedule Meeting'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Prime Faithful Limited. {lang === 'vi' ? 'Bảo lưu mọi quyền.' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400">{lang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400">{lang === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service'}</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400">{lang === 'vi' ? 'Cam kết NDA' : 'Mutual NDA'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
