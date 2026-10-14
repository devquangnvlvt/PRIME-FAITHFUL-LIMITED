import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AppShowcase } from './components/AppShowcase.tsx';
import { TechStackSection } from './components/TechStackSection.tsx';
import { AppProcessSection } from './components/AppProcessSection.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { ProjectCalculator } from './components/ProjectCalculator.tsx';
import { AboutCompany } from './components/AboutCompany.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';

export function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [preFillContactNote, setPreFillContactNote] = useState<string>('');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPreFillContactNote(lang === 'vi' ? `Quan tâm dịch vụ làm App: ${serviceName}` : `Inquiring for mobile service: ${serviceName}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultSimilarProject = (projectTitle: string) => {
    setPreFillContactNote(lang === 'vi' ? `Quan tâm dự án App tương tự: ${projectTitle}` : `Interested in similar app case study: ${projectTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultAppType = (appType: string) => {
    setPreFillContactNote(lang === 'vi' ? `Yêu cầu báo giá mô hình: ${appType}` : `Requesting quote for: ${appType}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillFromCalculator = (summary: string) => {
    setPreFillContactNote(summary);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-sky-500/30 selection:text-white">
      {/* 3-Zone Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenConsultModal={() => setConsultModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenConsultModal={() => setConsultModalOpen(true)}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Core Mobile Capabilities / Services (Bento Grid) */}
        <ServicesSection
          lang={lang}
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* Interactive App Archetypes Showcase with Real UI Previews */}
        <div id="showcase">
          <AppShowcase
            lang={lang}
            onConsultAppType={handleConsultAppType}
          />
        </div>

        {/* Selected Mobile Tech Stack Toolchains */}
        <TechStackSection lang={lang} />

        {/* 6-Step App Development Process */}
        <div id="process">
          <AppProcessSection lang={lang} />
        </div>

        {/* Quantified Mobile Case Studies & Proof */}
        <CaseStudiesSection
          lang={lang}
          onConsultSimilarProject={handleConsultSimilarProject}
        />

        {/* Interactive Scope & Timeline Estimator */}
        <ProjectCalculator
          lang={lang}
          onPreFillContact={handlePreFillFromCalculator}
        />

        {/* Company Profile, Principles & Compliance */}
        <AboutCompany lang={lang} />

        {/* FAQ Section */}
        <FAQSection lang={lang} />

        {/* Interactive Contact & Lead Capture */}
        <ContactSection
          lang={lang}
          preFillNote={preFillContactNote}
        />
      </main>

      {/* Quiet Footer */}
      <Footer lang={lang} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
