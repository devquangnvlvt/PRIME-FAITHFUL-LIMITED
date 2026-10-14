import { useState } from 'react';
import { Calculator, Check, ArrowRight, Users, Clock, Smartphone, Layers } from 'lucide-react';

interface ProjectCalculatorProps {
  lang: 'vi' | 'en';
  onPreFillContact: (summary: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ lang, onPreFillContact }) => {
  const [appType, setAppType] = useState<'mvp' | 'ecommerce' | 'fintech' | 'ondemand'>('ecommerce');
  const [techApproach, setTechApproach] = useState<'cross' | 'native'>('cross');
  const [platforms, setPlatforms] = useState<string[]>(['ios', 'android', 'admin']);
  const [features, setFeatures] = useState<string[]>(['auth', 'push', 'payment']);

  const togglePlatform = (p: string) => {
    if (platforms.includes(p)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter((item: string) => item !== p));
      }
    } else {
      setPlatforms([...platforms, p]);
    }
  };

  const toggleFeature = (f: string) => {
    if (features.includes(f)) {
      setFeatures(features.filter((item: string) => item !== f));
    } else {
      setFeatures([...features, f]);
    }
  };

  // Estimation calculation for mobile apps
  const calculateEstimate = () => {
    let baseWeeks = 6;
    let baseEngineers = 3;

    if (appType === 'mvp') {
      baseWeeks = 5;
      baseEngineers = 2;
    } else if (appType === 'ecommerce') {
      baseWeeks = 8;
      baseEngineers = 3;
    } else if (appType === 'fintech') {
      baseWeeks = 12;
      baseEngineers = 5;
    } else if (appType === 'ondemand') {
      baseWeeks = 10;
      baseEngineers = 4;
    }

    if (techApproach === 'native') {
      // Native iOS + Native Android separately takes slightly longer
      baseWeeks += 3;
      baseEngineers += 1;
    }

    baseWeeks += Math.floor(features.length * 0.8);

    return {
      weeks: baseWeeks,
      engineers: baseEngineers,
      phases: [
        lang === 'vi' ? 'Khảo sát nghiệp vụ & Thiết kế UI/UX Figma' : 'Figma Mobile UI/UX & Architecture',
        lang === 'vi' ? 'Lập trình Mobile Client & Cloud API Sprint' : 'Mobile Client & API Sprint Delivery',
        lang === 'vi' ? 'Kiểm thử 30+ máy thật & Bản TestFlight' : 'TestFlight Beta on 30+ Devices',
        lang === 'vi' ? 'Phát hành App Store / Google Play (100% Pass)' : 'Store Publishing & 100% Review Approval'
      ]
    };
  };

  const estimate = calculateEstimate();

  const handleApplyToContact = () => {
    const appTypeMap: Record<string, string> = {
      mvp: lang === 'vi' ? 'App Khởi điểm / MVP' : 'MVP Mobile App',
      ecommerce: lang === 'vi' ? 'App Thương mại điện tử / Bán lẻ' : 'E-Commerce Mobile App',
      fintech: lang === 'vi' ? 'App Fintech / Ví điện tử / Đầu tư' : 'Fintech & Wallet App',
      ondemand: lang === 'vi' ? 'App Đặt lịch / Giao vận On-demand' : 'On-Demand Booking App'
    };

    const techMap: Record<string, string> = {
      cross: lang === 'vi' ? 'Đa nền tảng (Flutter / React Native)' : 'Cross-Platform (Flutter / React Native)',
      native: lang === 'vi' ? 'Native thuần (Swift iOS & Kotlin Android)' : 'Native (Swift iOS & Kotlin Android)'
    };

    const summaryText = `[Dự toán App]: ${appTypeMap[appType]}, Công nghệ: ${techMap[techApproach]}, Nền tảng: ${platforms.join(', ')}, Tính năng: ${features.join(', ')}. Ước tính ${estimate.weeks} tuần, đội ngũ ${estimate.engineers} kỹ sư.`;

    onPreFillContact(summaryText);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Công Cụ Dự Toán Chi Phí & Tiến Độ Làm App' : 'Mobile App Scope & Cost Estimator'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">{lang === 'vi' ? 'Ước Lượng Tức Thì' : 'Instant Estimation'}</span>
          </div>

          <h2 
            style={{ textWrap: 'balance' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            {lang === 'vi'
              ? 'Tùy chỉnh tính năng và nhận dự toán thời gian bàn giao ứng dụng'
              : 'Configure mobile modules to instantly estimate timeline and squad size'}
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            {lang === 'vi'
              ? 'Lựa chọn loại ứng dụng, phương pháp tiếp cận công nghệ và các module cốt lõi để nhận bảng phân bổ sprint cùng cấu thành đội ngũ kỹ sư chuyên trách.'
              : 'Select your app genre, engineering paradigm, and targeted native modules to project delivery timelines and team composition.'}
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-8">
            
            {/* Step 1: App Category */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? '01. Chọn loại mô hình ứng dụng di động' : '01. Select Mobile App Model'}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'ecommerce', labelVi: 'E-Commerce / Bán Lẻ Mua Sắm', labelEn: 'E-Commerce & Retail' },
                  { id: 'fintech', labelVi: 'Fintech / Ví Điện Tử / Tài Chính', labelEn: 'Fintech & Digital Wallet' },
                  { id: 'ondemand', labelVi: 'Đặt Lịch / Giao Vận (On-Demand)', labelEn: 'On-Demand & Booking' },
                  { id: 'mvp', labelVi: 'Ứng Dụng Khởi Điểm / MVP Nhanh', labelEn: 'Startup MVP Quick Launch' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setAppType(item.id as typeof appType)}
                    type="button"
                    className={`p-3 text-left rounded-lg border text-xs sm:text-sm font-medium transition-colors ${
                      appType === item.id
                        ? 'bg-neutral-800 text-white border-sky-500 shadow-sm'
                        : 'bg-neutral-950/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{lang === 'vi' ? item.labelVi : item.labelEn}</span>
                      {appType === item.id && <Check className="w-4 h-4 text-sky-400" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tech Approach */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? '02. Định hướng công nghệ lập trình' : '02. Engineering Paradigm'}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setTechApproach('cross')}
                  type="button"
                  className={`p-3.5 rounded-lg border text-left text-xs transition-colors ${
                    techApproach === 'cross'
                      ? 'bg-neutral-800 text-white border-sky-500'
                      : 'bg-neutral-950/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{lang === 'vi' ? 'Đa nền tảng (Flutter / React Native)' : 'Cross-Platform (Flutter / React Native)'}</span>
                    <span className="text-[10px] text-sky-400 font-mono">Tiết kiệm 40%</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    {lang === 'vi' ? '1 mã nguồn chung cho cả iOS và Android, mượt mà 60-120fps.' : 'Unified codebase for iOS & Android, fast time-to-market.'}
                  </div>
                </button>

                <button
                  onClick={() => setTechApproach('native')}
                  type="button"
                  className={`p-3.5 rounded-lg border text-left text-xs transition-colors ${
                    techApproach === 'native'
                      ? 'bg-neutral-800 text-white border-sky-500'
                      : 'bg-neutral-950/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{lang === 'vi' ? 'Native Thuần (Swift & Kotlin)' : 'Pure Native (Swift & Kotlin)'}</span>
                    <span className="text-[10px] text-sky-400 font-mono">Max Performance</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    {lang === 'vi' ? 'Hiệu năng phần cứng tối đa, tích hợp sâu cảm biến và Apple/Google ecosystem.' : 'Maximum hardware power and deep OS-level integration.'}
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Target Platforms */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                {lang === 'vi' ? '03. Nền tảng phát hành' : '03. Target Platforms'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'ios', labelVi: 'iOS (App Store)', labelEn: 'iOS App Store' },
                  { id: 'android', labelVi: 'Android (Google Play)', labelEn: 'Google Play' },
                  { id: 'admin', labelVi: 'Web Admin CMS', labelEn: 'Web Admin CMS' },
                ].map(p => {
                  const isChecked = platforms.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => togglePlatform(p.id)}
                      type="button"
                      className={`p-2.5 rounded-lg border text-xs font-medium transition-colors flex items-center justify-between ${
                        isChecked
                          ? 'bg-neutral-800 text-white border-sky-500'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      <span>{lang === 'vi' ? p.labelVi : p.labelEn}</span>
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-sky-500 text-white' : 'border border-neutral-700'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Core Mobile Modules */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                {lang === 'vi' ? '04. Các tính năng mở rộng cần tích hợp' : '04. Native Mobile Modules'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'auth', labelVi: 'Đăng nhập OTP / Apple ID', labelEn: 'OTP & Apple Auth' },
                  { id: 'payment', labelVi: 'Cổng thanh toán QR / Ví', labelEn: 'Mobile Payments' },
                  { id: 'push', labelVi: 'Thông báo đẩy Push FCM', labelEn: 'FCM Push Alerts' },
                  { id: 'gps', labelVi: 'Bản đồ & Định vị GPS', labelEn: 'GPS & Live Map' },
                  { id: 'chat', labelVi: 'Chat trực tiếp trong App', labelEn: 'In-App Chat' },
                  { id: 'biometric', labelVi: 'FaceID & Vân tay', labelEn: 'Biometric FaceID' },
                ].map(item => {
                  const isChecked = features.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleFeature(item.id)}
                      type="button"
                      className={`p-2 rounded-lg border text-[11px] font-medium transition-colors flex items-center justify-between ${
                        isChecked
                          ? 'bg-neutral-800 text-white border-sky-500'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{lang === 'vi' ? item.labelVi : item.labelEn}</span>
                      <span className={`w-3 h-3 rounded shrink-0 ml-1 flex items-center justify-center text-[9px] ${
                        isChecked ? 'bg-sky-500 text-white' : 'border border-neutral-700'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Projected Results Card */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">
                {lang === 'vi' ? 'Dự Phóng Triển Khai' : 'Projected Milestones'}
              </h3>
              <span className="text-xs font-mono text-sky-400">
                100% App Store Pass
              </span>
            </div>

            {/* Key KPI Estimates with tabular numerals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'vi' ? 'Thời gian phát hành' : 'Time to Store'}</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  ~{estimate.weeks} {lang === 'vi' ? 'Tuần' : 'Weeks'}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'vi' ? 'Đội ngũ chuyên trách' : 'Dedicated Squad'}</span>
                </div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                  {estimate.engineers} {lang === 'vi' ? 'Kỹ sư' : 'Engineers'}
                </div>
              </div>
            </div>

            {/* Squad breakdown */}
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="text-xs font-mono text-neutral-400 uppercase">
                {lang === 'vi' ? 'Thành phần nhân sự phân bổ:' : 'Allocated Squad Resources:'}
              </div>
              <div className="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Mobile UI/UX Product Designer:</span>
                  <span className="text-white">1 Chuyên gia</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Senior Mobile Engineers:</span>
                  <span className="text-white">{Math.max(1, estimate.engineers - 2)} Lập trình viên</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Backend & API Architect:</span>
                  <span className="text-white">1 Kỹ sư</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">QA Multi-device & Store ASO:</span>
                  <span className="text-white">1 Chuyên viên</span>
                </div>
              </div>
            </div>

            {/* Roadmap stages */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 uppercase">
                {lang === 'vi' ? 'Tiến độ 4 giai đoạn bàn giao:' : '4-Stage Delivery Plan:'}
              </div>
              <div className="space-y-1.5 text-xs text-neutral-300">
                {estimate.phases.map((phase, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="font-mono text-sky-400 text-[11px]">0{idx + 1}.</span>
                    <span>{phase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-4 border-t border-neutral-800">
              <button
                onClick={handleApplyToContact}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-xs font-semibold text-white transition-colors shadow-md"
              >
                <span>{lang === 'vi' ? 'Áp dụng vào biểu mẫu nhận báo giá' : 'Apply Scope to App Quote'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center mt-2.5 text-[11px] text-neutral-400">
                {lang === 'vi'
                  ? 'Ký hợp đồng cam kết duyệt lên App Store & Google Play 100%'
                  : 'Binding 100% App Store review approval contractual guarantee'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
