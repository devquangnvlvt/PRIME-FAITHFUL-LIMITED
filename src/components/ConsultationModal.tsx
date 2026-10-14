import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError(lang === 'vi' ? 'Vui lòng điền đầy đủ họ tên, email và số điện thoại' : 'Please fill out name, email, and phone number');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-neutral-900 border border-neutral-700 rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white bg-neutral-800 rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/30 text-sky-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {lang === 'vi' ? 'Đã gửi yêu cầu tư vấn' : 'Consultation Request Received'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {lang === 'vi'
                ? `Cảm ơn bạn ${name}. Đội ngũ chuyên gia kỹ thuật Prime Faithful sẽ liên hệ qua số ${phone} và gửi tài liệu kiến trúc mẫu tới ${email} trong vòng 24 giờ làm việc.`
                : `Thank you, ${name}. Our solutions team will reach out via ${phone} and forward introductory architectural frameworks to ${email} within 24 business hours.`}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-colors"
              >
                {lang === 'vi' ? 'Hoàn tất' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-mono uppercase text-sky-400 mb-1">
                {lang === 'vi' ? 'TƯ VẤN KIẾN TRÚC MIỄN PHÍ' : 'FREE ARCHITECTURAL DISCOVERY'}
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'vi' ? 'Đặt lịch trao đổi kỹ thuật 1:1' : 'Book a 1:1 Solutions Call'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {lang === 'vi' 
                  ? 'Trao đổi trực tiếp cùng Solutions Architect của Prime Faithful Limited.'
                  : 'Speak directly with a senior engineering architect from Prime Faithful Limited.'}
              </p>
            </div>

            {error && (
              <div className="p-2.5 rounded bg-red-950/40 border border-red-500/40 text-red-400 text-xs">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  {lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'Alex Nguyen'}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    {lang === 'vi' ? 'Email *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    {lang === 'vi' ? 'Số điện thoại *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+84 90 123 4567"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  {lang === 'vi' ? 'Ghi chú bài toán công nghệ' : 'Notes / Tech Challenges'}
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder={lang === 'vi' ? 'Ví dụ: Cần nâng cấp hệ thống ERP, tối ưu hóa AWS...' : 'E.g., Need multi-cloud migration, custom CRM...'}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>
                {loading 
                  ? (lang === 'vi' ? 'Đang gửi...' : 'Submitting...') 
                  : (lang === 'vi' ? 'Xác nhận đặt lịch tư vấn' : 'Confirm Consultation Booking')}
              </span>
            </button>

            <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-sky-400" />
                <span>028.8888.9999</span>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-400" />
                <span>contact@primefaithful.com</span>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
