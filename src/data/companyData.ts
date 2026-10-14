export interface ServiceItem {
  id: string;
  number: string;
  titleVi: string;
  titleEn: string;
  summaryVi: string;
  summaryEn: string;
  descriptionVi: string;
  descriptionEn: string;
  deliverablesVi: string[];
  deliverablesEn: string[];
  metricsVi: string;
  metricsEn: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industryVi: string;
  industryEn: string;
  titleVi: string;
  titleEn: string;
  challengeVi: string;
  challengeEn: string;
  solutionVi: string;
  solutionEn: string;
  resultVi: string;
  resultEn: string;
  metricNumber: string;
  metricLabelVi: string;
  metricLabelEn: string;
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: 'mobile' | 'backend' | 'design' | 'devops';
  roleVi: string;
  roleEn: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mobile-engineering',
    number: '01',
    titleVi: 'Phát Triển Ứng Dụng Di Động Native & Cross-Platform',
    titleEn: 'Native & Cross-Platform Mobile Engineering',
    summaryVi: 'Chuyên sâu lập trình ứng dụng iOS (Swift) và Android (Kotlin) thuần, cùng giải pháp Flutter & React Native tiết kiệm 40% chi phí.',
    summaryEn: 'High-performance native iOS (Swift) and Android (Kotlin) development, plus Flutter & React Native cross-platform workflows saving 40% TCO.',
    descriptionVi: 'Chúng tôi xây dựng các ứng dụng di động mượt mà đạt chuẩn 60-120 FPS, tối ưu hóa mức tiêu thụ pin và bộ nhớ. Áp dụng kiến trúc Clean Architecture, MVVM/MVI giúp mã nguồn dễ dàng mở rộng khi đạt hàng triệu người dùng hoạt động hàng ngày.',
    descriptionEn: 'We craft fluid 60-120 FPS mobile experiences optimized for minimal battery and memory overhead. Using Clean Architecture and MVVM/MVI patterns, codebases scale effortlessly to millions of daily active users.',
    deliverablesVi: [
      'Phát triển ứng dụng Native iOS (Swift, SwiftUI)',
      'Phát triển ứng dụng Native Android (Kotlin, Jetpack Compose)',
      'Phát triển ứng dụng đa nền tảng (Flutter, React Native)',
      'Tích hợp SDK phần cứng (Camera, Bluetooth, NFC, GPS, FaceID/TouchID)'
    ],
    deliverablesEn: [
      'Native iOS development (Swift, SwiftUI)',
      'Native Android engineering (Kotlin, Jetpack Compose)',
      'Cross-platform applications (Flutter, React Native)',
      'Hardware SDK integrations (Camera, Bluetooth LE, NFC, GPS, Biometrics)'
    ],
    metricsVi: '60 - 120 FPS Hiệu năng khung hình mượt mà',
    metricsEn: '60 - 120 FPS Fluid Frame Rate SLA',
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Jetpack Compose']
  },
  {
    id: 'mobile-uiux',
    number: '02',
    titleVi: 'Thiết Kế Giao Diện & Trải Nghiệm Người Dùng (Mobile UI/UX)',
    titleEn: 'Mobile UI/UX Design & Design Systems',
    summaryVi: 'Nghiên cứu hành vi người dùng, xây dựng Design System đồng bộ, thiết kế wireframe và prototype tương tác chân thực trên Figma.',
    summaryEn: 'Human-centered user research, unified Figma design systems, interactive mobile prototypes, and intuitive micro-interactions.',
    descriptionVi: 'Giao diện ứng dụng di động không chỉ đẹp mà phải chuyển đổi cao và tiện dụng bằng một tay (Thumb Zone Design). Chúng tôi xây dựng trải nghiệm onboarding cuốn hút, giảm tỷ lệ rời bỏ và tối ưu hóa từng bước trong phễu thanh toán.',
    descriptionEn: 'Mobile interfaces engineered for high conversion and effortless single-hand ergonomics. We design engaging onboarding flows, slash friction drop-offs, and optimize every micro-step in conversion funnels.',
    deliverablesVi: [
      'Khảo sát hành vi người dùng & User Journey Mapping',
      'Xây dựng trọn bộ Design System cho iOS & Android (Human Interface & Material 3)',
      'Prototype tương tác cao độ chuyển động (Micro-interactions, Haptic)',
      'Kiểm thử khả năng sử dụng (Usability Testing) trên thiết bị thật'
    ],
    deliverablesEn: [
      'User behavior research & Journey Mapping',
      'Complete iOS & Android Design Systems (HIG & Material 3)',
      'High-fidelity animated prototypes with haptic feedback specs',
      'Real-device usability and accessibility testing'
    ],
    metricsVi: '+45% Tỷ lệ giữ chân người dùng (Retention)',
    metricsEn: '+45% User Retention Rate Benchmark',
    tags: ['Figma', 'Human Interface Guidelines', 'Material 3', 'Design Systems']
  },
  {
    id: 'app-backend',
    number: '03',
    titleVi: 'Kiến Trúc Backend & API Tốc Độ Cao Cho Mobile App',
    titleEn: 'Mobile Backend, GraphQL & Realtime Infrastructure',
    summaryVi: 'Hệ thống máy chủ xử lý hàng chục nghìn lượt kết nối đồng thời, WebSocket thời gian thực, thông báo đẩy Push Notifications và CDN.',
    summaryEn: 'High-throughput mobile API servers, real-time WebSocket sync, push notification dispatchers, and low-latency Edge CDNs.',
    descriptionVi: 'Một ứng dụng di động xuất sắc cần điểm tựa là hạ tầng backend phản hồi dưới 100ms. Chúng tôi xây dựng hệ thống vi dịch vụ bằng Golang và Node.js, hỗ trợ cơ chế lưu ngoại tuyến (Offline-First sync) khi mạng gián đoạn.',
    descriptionEn: 'Great mobile apps require sub-100ms backend response times. We build resilient microservices with Golang and Node.js featuring offline-first local synchronization when networks drop.',
    deliverablesVi: [
      'Thiết kế RESTful & GraphQL API tối ưu hóa băng thông di động',
      'Cơ chế đồng bộ dữ liệu ngoại tuyến (Offline-First Data Sync)',
      'Hạ tầng thông báo đẩy hàng loạt qua Apple APNs & Firebase Cloud Messaging (FCM)',
      'Tích hợp cổng thanh toán di động (Apple Pay, Google Pay, VNPay, MoMo, ZaloPay)'
    ],
    deliverablesEn: [
      'RESTful & GraphQL APIs optimized for mobile cellular data payloads',
      'Offline-First local storage synchronization protocol',
      'Mass push notification infrastructure via APNs & FCM',
      'Mobile wallet integrations (Apple Pay, Google Pay, MoMo, VNPay, ZaloPay)'
    ],
    metricsVi: '< 65ms Thời gian phản hồi API di động',
    metricsEn: '< 65ms Mobile API response latency',
    tags: ['Go', 'Node.js', 'GraphQL', 'Firebase', 'PostgreSQL', 'Redis']
  },
  {
    id: 'app-store-publishing',
    number: '04',
    titleVi: 'Phát Hành & Tối Ưu App Store (ASO, CI/CD, Duyệt App 100%)',
    titleEn: 'App Store Publishing, ASO & Fastlane CI/CD',
    summaryVi: 'Hỗ trợ trọn gói đưa app lên App Store (Apple) & Google Play Store, tối ưu từ khóa ASO và bảo hành duyệt ứng dụng 100%.',
    summaryEn: 'End-to-end publishing on Apple App Store & Google Play, keyword App Store Optimization (ASO), and 100% review approval guarantee.',
    descriptionVi: 'Apple và Google có các quy định kiểm duyệt nghiêm ngặt về quyền riêng tư, an toàn dữ liệu và điều khoản thanh toán in-app. Chúng tôi tự động hóa quy trình đóng gói qua Fastlane CI/CD, chuẩn bị hồ sơ tuân thủ pháp lý và tối ưu thứ hạng tìm kiếm.',
    descriptionEn: 'Strict Apple and Google review guidelines demand precise compliance on privacy manifests, security permissions, and IAP rules. We automate deployment via Fastlane pipelines, manage review rebuttals, and elevate organic search visibility.',
    deliverablesVi: [
      'Đăng ký tài khoản Apple Developer & Google Play Console doanh nghiệp',
      'Tối ưu hóa hình ảnh chụp màn hình, mô tả và từ khóa tìm kiếm (ASO)',
      'Tự động hóa build và phân phối qua TestFlight & Firebase App Distribution',
      'Cam kết giải quyết triệt để mọi lỗi từ chối xét duyệt (100% App Approval)'
    ],
    deliverablesEn: [
      'Corporate Apple Developer & Google Play Console account setup',
      'High-converting App Store screenshots, video previews, and ASO metadata',
      'Automated distribution pipelines via TestFlight & Firebase App Distribution',
      '100% App approval guarantee resolving all guideline rejections'
    ],
    metricsVi: '100% Tỷ lệ duyệt app thành công trên App Store & CH Play',
    metricsEn: '100% Guaranteed Store Approval Rate',
    tags: ['Fastlane', 'App Store Connect', 'Google Play Console', 'ASO']
  }
];

export const APP_SOLUTIONS = [
  {
    id: 'fintech',
    titleVi: 'Fintech & Ví Điện Tử',
    titleEn: 'Fintech & Digital Wallet',
    descVi: 'Chuyển tiền P2P tức thì, thanh toán mã QR động, biểu đồ biến động số dư và xác thực sinh trắc học FaceID bảo mật ngân hàng.',
    descEn: 'P2P instant transfers, dynamic QR payments, real-time balance charting, and banking-grade FaceID biometric protection.',
    featuresVi: ['Xác thực sinh trắc học FaceID/Vân tay', 'Tích hợp thẻ ngân hàng & liên kết Napas/Visa', 'Quét mã VietQR tự động', 'Mã hóa token bảo mật chuẩn PCI-DSS'],
    featuresEn: ['Biometric FaceID & fingerprint auth', 'Bank card linking & Napas/Visa network', 'Automated VietQR scanning', 'PCI-DSS tokenized security']
  },
  {
    id: 'ecommerce',
    titleVi: 'E-Commerce & Bán Lẻ Đa Kênh',
    titleEn: 'Omnichannel E-Commerce',
    descVi: 'Trải nghiệm mua sắm mượt mà, gợi ý sản phẩm cá nhân hóa, thanh toán 1 chạm và theo dõi lộ trình đơn hàng theo thời gian thực.',
    descEn: 'Frictionless shopping flows, personalized recommendations, 1-tap checkout, and real-time courier shipment tracking.',
    featuresVi: ['Giỏ hàng lưu trữ đồng bộ đa thiết bị', 'Flash Sale chịu tải hàng triệu người mua', 'Thông báo đẩy khuyến mãi cá nhân hóa', 'Đánh giá kèm hình ảnh & video ngắn'],
    featuresEn: ['Omnichannel synced cart state', 'Flash-sale infrastructure handling 100k+ CCU', 'Personalized push discount triggers', 'Rich photo and short-video reviews']
  },
  {
    id: 'booking-delivery',
    titleVi: 'Đặt Lịch & Giao Vận Theo Yêu Cầu (On-Demand)',
    titleEn: 'On-Demand Booking & Dispatch',
    descVi: 'Bản đồ định vị tài xế thời gian thực, thuật toán phân bổ cuốc xe thông minh, tính toán cước phí và trò chuyện trực tiếp trong ứng dụng.',
    descEn: 'Live driver telematics on Google Maps, algorithmic auto-dispatch, dynamic route fare pricing, and in-app realtime chat.',
    featuresVi: ['Bản đồ theo dõi GPS thời gian thực', 'Thuật toán kết nối tài xế gần nhất', 'Chat và gọi thoại ẩn số bảo mật', 'Đánh giá tài xế và tip thưởng linh hoạt'],
    featuresEn: ['Real-time live GPS map telematics', 'Nearest driver matching engine', 'Masked VoIP calling and realtime chat', 'Flexible ratings and in-app tipping']
  },
  {
    id: 'miniapp',
    titleVi: 'Mini App & Super App Ecosystem',
    titleEn: 'Super App & Mini App Ecosystem',
    descVi: 'Phát triển Zalo Mini App, Telegram Mini App và hệ sinh thái tiện ích mở rộng giúp tiếp cận 75+ triệu người dùng sẵn có mà không cần cài đặt.',
    descEn: 'Build high-converting Zalo Mini Apps, Telegram Mini Apps, and plug-in ecosystems reaching 75M+ native users without store installs.',
    featuresVi: ['Khởi chạy ngay lập tức không cần tải về', 'Tự động lấy số điện thoại và thông tin Zalo', 'Chi phí phát triển chỉ bằng 30% App Native', 'Tích hợp cổng ZaloPay & chuyển tiếp tin nhắn'],
    featuresEn: ['Instant launch with zero store install friction', 'One-click user profile & phone authorization', '30% cost profile compared to full native build', 'Native ZaloPay and viral chat sharing APIs']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'paylink-wallet',
    client: 'Fintech PayLink Vietnam',
    industryVi: 'Ví Điện Tử & Thanh Toán Di Động',
    industryEn: 'Mobile Wallet & Digital Payments',
    titleVi: 'Ứng Dụng Ví Điện Tử Đạt 2.5 Triệu Lượt Tải & Đánh Giá 4.9★ Trên App Store',
    titleEn: 'Consumer Wallet App Scaling to 2.5M Downloads & 4.9★ App Store Rating',
    challengeVi: 'Ứng dụng cũ thường xuyên bị văng (crash) trên các dòng máy Android phân khúc phổ thông, luồng thanh toán mất 12 giây khiến 35% khách hàng bỏ giỏ.',
    challengeEn: 'Legacy app suffered high crash rates on budget Android devices; checkout flows dragged 12s causing 35% drop-offs.',
    solutionVi: 'Viết lại bằng Flutter với kiến trúc BLoC, tối ưu hóa bộ nhớ RAM, tích hợp quét mã QR bằng thư viện C++ native siêu tốc.',
    solutionEn: 'Rebuilt ground-up using Flutter and BLoC architecture, slashing RAM footprint and embedding native C++ accelerated QR decoding.',
    resultVi: 'Thời gian khởi động app giảm xuống 0.8 giây, tỷ lệ crash < 0.01%, tăng 180% số lượng giao dịch thanh toán thành công mỗi tháng.',
    resultEn: 'Cold launch dropped to 0.8s, crash rate dropped below 0.01%, and monthly successful mobile payment volume surged by 180%.',
    metricNumber: '2.5M+',
    metricLabelVi: 'Lượt tải thực tế trên iOS & Android',
    metricLabelEn: 'Active store installs across iOS & Android',
    techStack: ['Flutter', 'Swift', 'Kotlin', 'Go', 'Firebase', 'PostgreSQL']
  },
  {
    id: 'foodfast-delivery',
    client: 'Chuỗi Giao Thức Ăn Nhanh FoodHub',
    industryVi: 'Đặt Món & Giao Vận Tức Thì',
    industryEn: 'On-Demand Food Delivery',
    titleVi: 'Bộ Ba Ứng Dụng: Khách Hàng - Tài Xế - Nhà Hàng Phục Vụ 50,000 Đơn/Ngày',
    titleEn: 'Triple-App Suite: Customer, Courier & Merchant Handling 50K Orders/Day',
    challengeVi: 'Độ trễ cập nhật vị trí shipper lên đến 15 giây, gây xung đột giữa nhà hàng và tài xế trong khâu bàn giao món nóng.',
    challengeEn: 'Driver location pings lagged up to 15s, triggering constant friction between kitchen pickup staff and couriers.',
    solutionVi: 'Phát triển 3 app di động riêng biệt kết nối qua cụm máy chủ WebSocket thời gian thực, đồng bộ GPS mỗi 1 giây và tối ưu hóa pin.',
    solutionEn: 'Engineered 3 dedicated native-feel apps synced over low-latency WebSockets with 1-second battery-optimized GPS tracking.',
    resultVi: 'Thời gian giao hàng trung bình giảm từ 38 phút xuống 24 phút, tỷ lệ đơn giao đúng hẹn đạt 98.4%.',
    resultEn: 'Average delivery time compressed from 38m to 24m, pushing on-time delivery compliance to 98.4%.',
    metricNumber: '24 min',
    metricLabelVi: 'Thời gian giao hàng trung bình toàn thành phố',
    metricLabelEn: 'Average citywide delivery turnaround',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'Google Maps SDK']
  },
  {
    id: 'retail-lifestyle',
    client: 'Thương Hiệu Thời Trang Thiết Kế Hanoix',
    industryVi: 'Bán Lẻ & Thương Mại Điện Tử Di Động',
    industryEn: 'Lifestyle E-Commerce & Retail',
    titleVi: 'Ứng Dụng Mua Sắm Cá Nhân Hóa Tăng Doanh Số Di Động Lên 320%',
    titleEn: 'Personalized Shopping App Driving +320% In-App Mobile Revenue',
    challengeVi: 'Trang web di động tải chậm, tỷ lệ khách hàng quay lại mua lần 2 (Repeat Purchase) chỉ đạt 8%.',
    challengeEn: 'Mobile website friction suffered high latency, resulting in an anemic 8% repeat customer purchase rate.',
    solutionVi: 'Thiết kế ứng dụng mua sắm tối giản với hoạt ảnh mượt mà, thông báo đẩy nhắc nhở giỏ hàng thông minh và tích hợp Apple Pay 1 chạm.',
    solutionEn: 'Crafted a bespoke minimalist mobile boutique with smooth micro-interactions, contextual cart nudges, and 1-tap Apple Pay.',
    resultVi: 'Tăng 320% doanh thu từ kênh di động trong 6 tháng, tỷ lệ khách hàng thân thiết mua lặp lại tăng lên 42%.',
    resultEn: 'Generated +320% mobile revenue growth within 6 months, expanding repeat customer retention to 42%.',
    metricNumber: '+320%',
    metricLabelVi: 'Tăng trưởng doanh thu từ kênh Mobile App',
    metricLabelEn: 'Mobile app channel GMV growth',
    techStack: ['SwiftUI', 'Jetpack Compose', 'GraphQL', 'Stripe', 'APNs']
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Flutter (Dart)', category: 'mobile', roleVi: 'Phát triển ứng dụng đa nền tảng 60-120fps chuẩn Google', roleEn: 'Cross-platform native performance with shared codebase' },
  { name: 'React Native', category: 'mobile', roleVi: 'Ứng dụng di động đa nền tảng tối ưu hệ sinh thái React', roleEn: 'Cross-platform mobile apps with vast ecosystem' },
  { name: 'Swift & SwiftUI', category: 'mobile', roleVi: 'Lập trình iOS Native thuần hiệu năng tối đa trên iPhone/iPad', roleEn: 'Pure native iOS engineering optimized for Apple hardware' },
  { name: 'Kotlin & Jetpack Compose', category: 'mobile', roleVi: 'Lập trình Android Native hiện đại chuẩn Google Material', roleEn: 'Modern Android native development with declarative UI' },
  { name: 'Zalo & Telegram Mini App', category: 'mobile', roleVi: 'Ứng dụng siêu tốc trên nền tảng mạng xã hội không cần cài đặt', roleEn: 'Instant micro-apps embedded in social super apps' },

  { name: 'Node.js & TypeScript', category: 'backend', roleVi: 'Máy chủ API RESTful & WebSocket thời gian thực', roleEn: 'Real-time mobile API servers and socket gateways' },
  { name: 'Golang', category: 'backend', roleVi: 'Microservices xử lý giao dịch chịu tải lớn cho mobile', roleEn: 'High-concurrency microservices for mobile backends' },
  { name: 'Firebase & Cloud Messaging', category: 'backend', roleVi: 'Thông báo đẩy FCM, cơ sở dữ liệu thời gian thực và Auth', roleEn: 'FCM push notifications, real-time sync, and auth' },
  { name: 'PostgreSQL & Redis', category: 'backend', roleVi: 'Lưu trữ giao dịch ACID và bộ nhớ đệm phản hồi <10ms', roleEn: 'ACID transaction database & low-latency caching' },

  { name: 'Figma Mobile Design System', category: 'design', roleVi: 'Thiết kế UI/UX theo tiêu chuẩn Apple HIG & Google Material 3', roleEn: 'Comprehensive design system adhering to Apple HIG & Material 3' },
  { name: 'Interactive Prototyping', category: 'design', roleVi: 'Mô phỏng trải nghiệm người dùng chân thực trước khi code', roleEn: 'High-fidelity motion prototypes and click-through test flows' },
  { name: 'Design Tokens & Typography', category: 'design', roleVi: 'Quy chuẩn hóa biến màu sắc, phông chữ và bố cục màn hình', roleEn: 'Standardized tokens for seamless design-to-code handover' },

  { name: 'Fastlane CI/CD', category: 'devops', roleVi: 'Tự động hóa đóng gói và phát hành TestFlight & CH Play', roleEn: 'Automated build and deployment pipelines for App Store' },
  { name: 'App Store Optimization (ASO)', category: 'devops', roleVi: 'Tối ưu hóa thứ hạng tìm kiếm và lượt tải tự nhiên', roleEn: 'Keyword and conversion optimization for app stores' },
  { name: 'Sentry & Crashlytics', category: 'devops', roleVi: 'Giám sát lỗi văng ứng dụng và độ ổn định thời gian thực', roleEn: 'Real-time crash monitoring and stack-trace diagnostics' }
];

export const COMPANY_STATS = [
  { value: '80+', labelVi: 'Ứng dụng đã phát hành lên App Store & Google Play', labelEn: 'Apps published on App Store & Google Play' },
  { value: '4.9★', labelVi: 'Điểm đánh giá trung bình từ người dùng cuối', labelEn: 'Average user store rating' },
  { value: '100%', labelVi: 'Cam kết duyệt ứng dụng thành công', labelEn: 'Guaranteed Store review approval' },
  { value: '35+', labelVi: 'Kỹ sư chuyên sâu iOS, Android, Flutter & Backend', labelEn: 'Specialist mobile engineers & designers' }
];

export const APP_DEVELOPMENT_PROCESS = [
  {
    step: '01',
    titleVi: 'Khảo Sát Ý Tưởng & Tư Vấn Giải Pháp',
    titleEn: 'Discovery & Product Strategy',
    descVi: 'Phân tích chân dung người dùng mục tiêu, lựa chọn công nghệ phù hợp (Native vs Cross-Platform) và xây dựng tài liệu đặc tả tính năng (PRD).',
    descEn: 'Analyze target user personas, recommend optimal tech stacks (Native vs Cross-Platform), and construct detailed Product Requirement Documents (PRD).'
  },
  {
    step: '02',
    titleVi: 'Thiết Kế UI/UX & Bản Mẫu Tương Tác',
    titleEn: 'Mobile UI/UX & Interactive Prototype',
    descVi: 'Thiết kế giao diện hoàn chỉnh trên Figma chuẩn Apple & Google. Khách hàng được trải nghiệm bấm thử trực tiếp trên điện thoại trước khi lập trình.',
    descEn: 'Design full visual screens in Figma complying with Apple HIG & Material 3. Clients test interactive click-through prototypes directly on phones.'
  },
  {
    step: '03',
    titleVi: 'Lập Trình Ứng Dụng & Hạ Tầng Máy Chủ',
    titleEn: 'Agile Mobile & Backend Engineering',
    descVi: 'Phát triển theo phương pháp Agile Scrum trong các chu kỳ 2 tuần. Tích hợp API, tối ưu hoá bộ nhớ, thời lượng pin và trải nghiệm vuốt chạm.',
    descEn: 'Execute in 2-week Agile sprints. Code native client modules, engineer scalable cloud APIs, and optimize memory and touch gestures.'
  },
  {
    step: '04',
    titleVi: 'Kiểm Thử Đa Thiết Bị (QA & TestFlight)',
    titleEn: 'Multi-Device QA & TestFlight Beta',
    descVi: 'Kiểm thử thực tế trên hơn 30 dòng điện thoại iOS & Android khác nhau (màn hình tai thỏ, đục lỗ, tablet). Cài đặt bản Beta qua TestFlight.',
    descEn: 'Rigorous manual & automated QA across 30+ physical iOS and Android devices. Beta deployment via Apple TestFlight & Google Play Beta.'
  },
  {
    step: '05',
    titleVi: 'Phát Hành Lên App Store & Google Play',
    titleEn: 'Store Submission & 100% Approval',
    descVi: 'Chuẩn bị hồ sơ pháp lý, ảnh chụp màn hình quảng bá, cấu hình tài khoản nhà phát triển và đồng hành giải quyết mọi yêu cầu duyệt từ Apple & Google.',
    descEn: 'Prepare privacy disclosures, promotional screenshots, developer account settings, and manage review dialogue until 100% approved.'
  },
  {
    step: '06',
    titleVi: 'Bàn Giao Mã Nguồn & Bảo Hành Trọn Đời',
    titleEn: 'Source Transfer & SLA Maintenance',
    descVi: 'Bàn giao 100% mã nguồn và tài sản thiết kế. Bảo hành sửa lỗi kỹ thuật, cập nhật tương thích các phiên bản iOS và Android mới nhất.',
    descEn: '100% transfer of git repositories and design assets. Technical bug fixes and OS version compatibility updates (iOS 19/20, Android 16/17).'
  }
];

export const CORE_VALUES = [
  {
    number: '01',
    titleVi: 'Trải Nghiệm Mượt Mà Chuẩn 60 - 120 FPS',
    titleEn: '60 - 120 FPS Fluid Experience',
    descVi: 'Chúng tôi không chấp nhận hiện tượng giật lag. Mọi ứng dụng do Prime Faithful phát triển đều được tối ưu hóa rendering, tải ảnh lười thông minh và quản lý bộ nhớ triệt để.',
    descEn: 'Zero tolerance for dropped frames. Every mobile app is benchmarked for instant touch response, smart lazy loading, and tight memory footprints.'
  },
  {
    number: '02',
    titleVi: 'Duyệt App 100% - Bảo Đảm Lên Store',
    titleEn: '100% Store Approval Guarantee',
    descVi: 'Am hiểu sâu sắc các nguyên tắc App Store Review Guidelines của Apple và chính sách Google Play. Cam kết đồng hành đến khi app xuất hiện công khai trên kho ứng dụng.',
    descEn: 'Deep mastery of Apple App Store Review Guidelines and Google Play policies. We stand by our work until your application is live in store catalogs.'
  },
  {
    number: '03',
    titleVi: 'Bàn Giao Trọn Gói 100% Bản Quyền Mã Nguồn',
    titleEn: 'Complete Source Code & IP Ownership',
    descVi: 'Khách hàng sở hữu hoàn toàn mã nguồn (Git repository), tài liệu kiến trúc, tài khoản Apple Developer và thiết kế Figma, không bị phụ thuộc công nghệ.',
    descEn: 'Clients retain 100% ownership of source code, git commits, Figma files, and developer accounts with zero vendor lock-in.'
  }
];

export const FAQS = [
  {
    questionVi: 'Công ty làm app bằng công nghệ gì: Native (Swift, Kotlin) hay Đa nền tảng (Flutter, React Native)?',
    questionEn: 'Which mobile technologies do you use: Native (Swift, Kotlin) or Cross-platform (Flutter, React Native)?',
    answerVi: 'Chúng tôi thành thạo cả hai hướng tiếp cận: 1) Native (Swift/Kotlin) dành cho các ứng dụng đòi hỏi hiệu năng phần cứng tối đa, xử lý âm thanh/hình ảnh phức tạp; 2) Đa nền tảng (Flutter / React Native) là giải pháp tối ưu cho 90% doanh nghiệp hiện nay vì giúp tiết kiệm 40% chi phí và rút ngắn một nửa thời gian bàn giao nhưng vẫn đảm bảo độ mượt mà tương đương Native.',
    answerEn: 'We are proficient in both: 1) Native (Swift/Kotlin) for apps demanding maximum hardware GPU/CPU performance or complex Bluetooth/camera pipelines; 2) Cross-platform (Flutter / React Native) is the optimal choice for 90% of enterprises today, saving 40% in development costs while maintaining near-native fluid performance.'
  },
  {
    questionVi: 'Thời gian và quy trình để hoàn thành một ứng dụng di động mất bao lâu?',
    questionEn: 'How long does it take to design and launch a mobile app?',
    answerVi: 'Thời gian trung bình từ 6 đến 14 tuần tùy vào độ phức tạp: Ứng dụng MVP cơ bản (6 - 8 tuần); Ứng dụng thương mại điện tử hoặc đặt lịch có hệ thống quản trị CMS (8 - 12 tuần); Ứng dụng Fintech hoặc hệ sinh thái đa ứng dụng (12 - 16 tuần). Toàn bộ quy trình được chia thành các chu kỳ Sprint 2 tuần có demo trực tiếp.',
    answerEn: 'A typical project spans 6 to 14 weeks: Standard MVP (6-8 weeks); E-commerce or on-demand booking apps with Web CMS (8-12 weeks); Complex Fintech or multi-sided platforms (12-16 weeks). All progress is delivered in bi-weekly testable sprint builds.'
  },
  {
    questionVi: 'Prime Faithful có hỗ trợ đưa app lên Apple App Store và Google Play không?',
    questionEn: 'Does Prime Faithful assist with publishing on Apple App Store & Google Play?',
    answerVi: 'Có. Chúng tôi hỗ trợ trọn gói từ khâu đăng ký tài khoản Apple Developer & Google Play Console, thiết kế bộ nhận diện chụp màn hình (Screenshots ASO), chuẩn bị chính sách quyền riêng tư cho đến khi app được xét duyệt thành công 100% và sẵn sàng cho người dùng tải về.',
    answerEn: 'Yes. We handle the entire publishing lifecycle: developer account configuration, ASO screenshot creation, privacy disclosures, and resolving Apple/Google guidelines until your app is 100% live and downloadable.'
  },
  {
    questionVi: 'Chi phí phát triển ứng dụng di động được tính như thế nào?',
    questionEn: 'How is the mobile app development cost structured?',
    answerVi: 'Chi phí được tính toán minh bạch dựa trên phạm vi tính năng thực tế, số lượng màn hình giao diện, nền tảng lựa chọn (iOS, Android, Web Admin) và các dịch vụ tích hợp bên thứ ba (cổng thanh toán, bản đồ GPS, thông báo đẩy). Bạn có thể sử dụng công cụ Dự toán chi phí tương tác ngay trên website để ước tính nhanh.',
    answerEn: 'Pricing is structured transparently based on feature scope, number of unique screens, target platforms (iOS, Android, Web CMS), and third-party integrations (payment gateways, GPS maps, push notifications). You can use our interactive Estimator tool right on the site.'
  }
];
