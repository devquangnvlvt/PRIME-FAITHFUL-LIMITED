import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  lang: 'vi' | 'en';
  preFillNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, preFillNote }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'enterprise-software',
    budget: '50m-200m',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preFillNote) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Dự toán đính kèm]: ${preFillNote}` : `[Dự toán đính kèm]: ${preFillNote}`
      }));
    }
  }, [preFillNote]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'vi' ? 'Vui lòng nhập họ và tên' : 'Please provide your full name';
    }
    if (!formData.email.trim()) {
      newErrors.email = lang === 'vi' ? 'Vui lòng nhập email công việc' : 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'vi' ? 'Định dạng email không hợp lệ' : 'Invalid email address format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'vi' ? 'Vui lòng nhập số điện thoại liên hệ' : 'Please provide your phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = lang === 'vi' ? 'Vui lòng mô tả tóm tắt nhu cầu dự án' : 'Please describe your project scope';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate real brief submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <span>{lang === 'vi' ? 'Khởi Động Hợp Tác' : 'Start an Engagement'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Tư Vấn Kiến Trúc Miễn Phí' : 'Technical Consultation'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Thảo luận bài toán công nghệ của bạn cùng kiến trúc sư Prime Faithful'
              : 'Discuss your technical challenges with a Prime Faithful Solutions Architect'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Chúng tôi phản hồi và xếp lịch họp kỹ thuật chi tiết trong vòng 24 giờ làm việc. Thỏa thuận bảo mật NDA được ký kết trước khi trao đổi nghiệp vụ chuyên sâu.'
              : 'We review requirements and schedule technical discovery sessions within 24 business hours. Strict mutual NDA protocols precede every deep architectural session.'}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form or Success Card */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'vi' ? 'Yêu cầu tư vấn đã được gửi thành công' : 'Inquiry Submitted Successfully'}
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'vi'
                    ? `Cảm ơn bạn ${formData.fullName}. Đội ngũ kiến trúc sư trưởng của Prime Faithful Limited đã tiếp nhận thông tin và sẽ gửi email xác nhận cùng lịch hẹn tư vấn tới ${formData.email} trong vòng 24 giờ làm việc.`
                    : `Thank you, ${formData.fullName}. Our lead solutions architects have received your technical brief and will dispatch confirmation and calendar coordinates to ${formData.email} within 24 business hours.`}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'enterprise-software',
                        budget: '50m-200m',
                        message: '',
                      });
                    }}
                    type="button"
                    className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors"
                  >
                    {lang === 'vi' ? 'Gửi thêm yêu cầu khác' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'Alex Nguyen'}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors ${
                        errors.fullName ? 'border-red-500/80' : 'border-neutral-800 focus:border-neutral-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Email công việc *' : 'Work Email *'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-neutral-800 focus:border-neutral-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Số điện thoại / Zalo *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+84 90 123 4567"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors ${
                        errors.phone ? 'border-red-500/80' : 'border-neutral-800 focus:border-neutral-700'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Tên doanh nghiệp / Đơn vị' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="TechCorp JSC"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 focus:border-neutral-700 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Pillar */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Dịch vụ quan tâm' : 'Area of Interest'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      <option value="mobile-app-cross">{lang === 'vi' ? 'Lập trình App Đa nền tảng (Flutter / React Native)' : 'Cross-Platform App (Flutter / React Native)'}</option>
                      <option value="mobile-app-native">{lang === 'vi' ? 'Lập trình App Native (Swift iOS & Kotlin Android)' : 'Pure Native App (Swift iOS & Kotlin Android)'}</option>
                      <option value="mobile-uiux">{lang === 'vi' ? 'Thiết kế Giao diện Mobile UI/UX (Figma)' : 'Mobile UI/UX Product Design (Figma)'}</option>
                      <option value="miniapp">{lang === 'vi' ? 'Hệ sinh thái Zalo Mini App / Super App' : 'Zalo Mini App & Super App Ecosystem'}</option>
                      <option value="app-backend">{lang === 'vi' ? 'Hạ tầng Backend, API & Cloud cho App' : 'Mobile Backend & Realtime API'}</option>
                    </select>
                  </div>

                  {/* Budget scale */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300">
                      {lang === 'vi' ? 'Khung ngân sách dự kiến' : 'Estimated Budget Range'}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      <option value="under-100m">{lang === 'vi' ? 'Dưới 100 Triệu VNĐ' : '< $5,000 USD'}</option>
                      <option value="100m-300m">{lang === 'vi' ? '100 - 300 Triệu VNĐ' : '$5,000 - $15,000 USD'}</option>
                      <option value="300m-800m">{lang === 'vi' ? '300 - 800 Triệu VNĐ' : '$15,000 - $40,000 USD'}</option>
                      <option value="over-800m">{lang === 'vi' ? 'Trên 800 Triệu VNĐ' : '> $40,000 USD'}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-neutral-300">
                    {lang === 'vi' ? 'Mô tả bài toán / Yêu cầu hệ thống *' : 'Project Requirements Brief *'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'vi' ? 'Mô tả sơ lược tính năng, công nghệ mong muốn hoặc thời hạn bàn giao dự kiến...' : 'Describe your goals, tech preferences, or target delivery deadline...'}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors ${
                      errors.message ? 'border-red-500/80' : 'border-neutral-800 focus:border-neutral-700'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {loading 
                      ? (lang === 'vi' ? 'Đang gửi thông tin...' : 'Submitting brief...') 
                      : (lang === 'vi' ? 'Gửi yêu cầu tư vấn giải pháp' : 'Submit Consultation Request')}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Coordinates & SLA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-bold text-white">
                {lang === 'vi' ? 'Thông Tin Liên Hệ Doanh Nghiệp' : 'Direct Engineering Desk'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-400 text-xs">{lang === 'vi' ? 'Email tiếp nhận kỹ thuật:' : 'Technical Inquiry:'}</div>
                    <a href="mailto:contact@primefaithful.com" className="text-white hover:text-sky-400 transition-colors font-mono">
                      contact@primefaithful.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-400 text-xs">{lang === 'vi' ? 'Đường dây nóng hỗ trợ:' : 'Hotline Desk:'}</div>
                    <a href="tel:+842888889999" className="text-white hover:text-sky-400 transition-colors font-mono">
                      (+84) 028.8888.9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-400 text-xs">{lang === 'vi' ? 'Trụ sở văn phòng:' : 'Headquarters:'}</div>
                    <span className="text-white">
                      {lang === 'vi' 
                        ? 'Tầng 12, Tòa nhà Công Nghệ Cao, Quận 1, TP. Hồ Chí Minh'
                        : 'Level 12, High-Tech Tower, District 1, Ho Chi Minh City, Vietnam'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-400 text-xs">{lang === 'vi' ? 'Thời gian làm việc:' : 'Working Hours:'}</div>
                    <span className="text-white">
                      {lang === 'vi' ? 'Thứ 2 - Thứ 6 (08:30 - 18:00) · Hỗ trợ khẩn cấp 24/7' : 'Mon - Fri (08:30 - 18:00) · 24/7 Critical SLA'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitment Note */}
            <div className="p-6 rounded-xl bg-neutral-900/30 border border-neutral-800 text-xs text-neutral-400 space-y-2">
              <div className="font-semibold text-white">
                {lang === 'vi' ? 'Cam Kết Bảo Mật (NDA)' : 'Mutual Non-Disclosure'}
              </div>
              <p className="leading-relaxed">
                {lang === 'vi'
                  ? 'Prime Faithful Limited cam kết bảo mật 100% mọi thông tin kinh doanh, mã nguồn, kiến trúc và dữ liệu được trao đổi trong quá trình khảo sát và phát triển dự án.'
                  : 'Prime Faithful Limited guarantees 100% confidentiality of all corporate requirements, codebase repositories, and architectural blueprints shared during our engagement.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
