import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./Services.css";

const Services = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // =========================
  // 1️⃣ ALL useState hooks FIRST
  // =========================
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT (FULLY INTACT)
  // =========================
  const EN = {
    // Page Title
    servicesTitle: "Service Policy",
    
    // Subtitle
    subtitle: "Jerry's AI offers a complete range of services designed to meet the needs of modern businesses. We collaborate with trusted partners to deliver integrated solutions that enhance efficiency, innovation, and security for our clients across multiple sectors.",

    // Section Titles
    section1Title: "1. Comprehensive Service Offerings",
    section1Text: "At Jerry's AI, we provide a suite of services designed to empower businesses. Our range includes cutting-edge cybersecurity, app development (across multiple platforms), SEO, social media marketing, and more. These services are built on years of experience and a commitment to client satisfaction. Whether you're looking to enhance your web presence, improve internal systems, or boost marketing efforts, we have the expertise to deliver tailored solutions.",

    section2Title: "2. Ongoing Support and Development",
    section2Text: "We don't just offer services; we build partnerships. Our team works with clients to ensure their success over the long term. We offer ongoing support, ensuring the continuous optimization of your systems and websites. Whether it's regular maintenance, troubleshooting, or upgrades, we ensure your tech stays relevant and efficient as your business grows.",

    section3Title: "3. Future-Proof Solutions",
    section3Text: "At Jerry's AI, we're constantly looking forward. Our solutions are designed not only for today's challenges but for tomorrow's opportunities. We stay ahead of industry trends and technological advancements, so our clients are always a step ahead of the competition. From mobile-first development to AI-driven analytics, our team ensures you're ready for the future.",

    // Our Services Section
    ourServicesTitle: "Our Services",
    
    // Service List Items
    serviceGeneralChat: "General AI Chat",
    serviceAddBanner: "Add Banner",
    serviceEducation: "Education",
    serviceWebDev: "Web Development",
    serviceAppDev: "App Development",
    serviceLaunchSEO: "Launch SEO",
    serviceDigitalMarketing: "Digital Marketing",
    serviceVoiceTranslator: "AI Voice Translator",
    serviceAnalyseData: "Analyse Data, Report",
    serviceCyberSecurity: "Enhance CyberSecurity",
    serviceFindPhone: "Find My Phone",

    // Industries Section
    industriesTitle: "Industries & Trade We Serve",

    // Industry List Items
    industryAnimals: "Animals & Pets",
    industryMedical: "Medical & Health Care",
    industryElectronics: "Electronics & Electrical",
    industryRealEstate: "Real Estate / Property",
    industryArt: "Art & Culture",
    industryDesign: "Design & Photography",
    industryEducation: "Education & Books",
    industryBusiness: "Business & Services",
    industryCars: "Cars & Motorcycles",
    industryEngineering: "Engineering / Manufacturing",
    industryComputers: "Computers & Internet",
    industryEntertainment: "Entertainment, Games & Nightlife",
    industryHome: "Home & Family",
    industryFashion: "Fashion & Beauty",
    industryFood: "Food & Restaurant",
    industryHolidays: "Holidays, Gifts & Flowers",
    industrySociety: "Society & People",
    industrySports: "Sports, Outdoors",
    industryTravel: "Travel & Tourism",
    industryRetail: "Retails, Shops & Stores",
    industryBanking: "Banks & Finances",
    industryCommerce: "Commercials, E-Commerce",
    industryTransport: "Transportation Services",
    industryOther: "And many more Other Businesses",

    // Meta
    meta: "© 2025 Jerry's AI. All rights reserved.",

    // Footer Headings
    footerCompany: "Company",
    footerServices: "Services",
    footerLegality: "Legality",
    footerConnection: "Connection",

    // Footer Links
    aboutUs: "About Us",
    support: "Support",
    contactUs: "Contact Us",
    generalServices: "General Services",
    pricing: "Pricing",
    subscriptionPlan: "Subscription Plan",
    professionalAIChat: "Professional AI Chat",
    addBannerFooter: "Add Banner",
    educationFooter: "Education",
    webDevelopmentFooter: "Web Development",
    appDevelopmentFooter: "App Development",
    digitalMarketingFooter: "Digital Marketing",
    voiceTranslatorFooter: "AI Voice Translator",
    analyseDataFooter: "Analyse Data, Report",
    enhanceCyberFooter: "Enhance CyberSecurity",
    findMyPhoneFooter: "Find My Phone",
    terms: "Terms & Condition",
    privacy: "Privacy Policy",
    pdpa: "Personal Data Protection",
    servicesPolicy: "Services Policy",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    tiktok: "Tik Tok",
    telegram: "Telegram",
    copyright: "© 2025 Jerry's AI. All rights reserved.",
  };

  // =========================
  // 3️⃣ DEEPSEEK TRANSLATION HOOK (REPLACES OLD CODE)
  // =========================
  const { translatedText, isTranslating, error } = useDeepSeekTranslation(EN, targetLang);

  // Safe t() function with fallback
  const t = (key) => {
    if (!translatedText) return EN[key] || key;
    return translatedText[key] || EN[key] || key;
  };

  // Loading indicator - MUST be after all hooks
  if (isTranslating && targetLang !== 'en') {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h3>🌐 Translating to {targetLang}...</h3>
        <p>Please wait while DeepSeek translates the content.</p>
      </div>
    );
  }

  if (error) {
    console.error('Translation error:', error);
  }

  // Service list (KEPT INTACT)
  const services = [
    t("serviceGeneralChat"),
    t("serviceAddBanner"),
    t("serviceEducation"),
    t("serviceWebDev"),
    t("serviceAppDev"),
    t("serviceLaunchSEO"),
    t("serviceDigitalMarketing"),
    t("serviceVoiceTranslator"),
    t("serviceAnalyseData"),
    t("serviceCyberSecurity"),
    t("serviceFindPhone"),
  ];

  // Industry list (KEPT INTACT)
  const industries = [
    t("industryAnimals"),
    t("industryMedical"),
    t("industryElectronics"),
    t("industryRealEstate"),
    t("industryArt"),
    t("industryDesign"),
    t("industryEducation"),
    t("industryBusiness"),
    t("industryCars"),
    t("industryEngineering"),
    t("industryComputers"),
    t("industryEntertainment"),
    t("industryHome"),
    t("industryFashion"),
    t("industryFood"),
    t("industryHolidays"),
    t("industrySociety"),
    t("industrySports"),
    t("industryTravel"),
    t("industryRetail"),
    t("industryBanking"),
    t("industryCommerce"),
    t("industryTransport"),
    t("industryOther"),
  ];

  return (
    <>
      <header className="header">
        <Link to="/" className="brand">
          <img src={ASSET("/images/logo.png")} className="logo" alt="Jerry's AI Logo" />
        </Link>
        <div className="header-center">
          <Link to="/" className="title-link">
            <span className="title">Jerry's AI</span>
          </Link>
        </div>
        <LTLanguageSwitcher globeSrc={ASSET("/images/general/icons/globe.png")} onChange={setTargetLang} />
      </header>

      <div className="page">
        <div className="services-container">
          <div className="services-card">
            <h1 className="services-title">{t("servicesTitle")}</h1>

            <div className="services-subtitle">
              {t("subtitle")}
            </div>

            <div className="services-content">
              {/* Section 1 */}
              <div className="services-section">
                <h2 className="services-section-title">{t("section1Title")}</h2>
                <p className="services-paragraph">{t("section1Text")}</p>
              </div>

              {/* Section 2 */}
              <div className="services-section">
                <h2 className="services-section-title">{t("section2Title")}</h2>
                <p className="services-paragraph">{t("section2Text")}</p>
              </div>

              {/* Section 3 */}
              <div className="services-section">
                <h2 className="services-section-title">{t("section3Title")}</h2>
                <p className="services-paragraph">{t("section3Text")}</p>
              </div>

              {/* Our Services Section */}
              <div className="services-section">
                <h2 className="services-section-title">{t("ourServicesTitle")}</h2>
                <div className="services-card-grid">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`services-item-card ${hoveredService === index ? 'services-item-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Section */}
              <div className="services-section">
                <h2 className="services-section-title">{t("industriesTitle")}</h2>
                <div className="services-card-grid">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`services-item-card ${hoveredIndustry === index ? 'services-item-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredIndustry(index)}
                      onMouseLeave={() => setHoveredIndustry(null)}
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="services-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="services-footer-inner">
            <div>
              <div className="services-footer-title">{t("footerCompany")}</div>
              <div className="services-footer-links">
                <Link to="/about" className="services-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="services-footer-link">{t("support")}</Link>
                <Link to="/contact" className="services-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="services-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="services-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="services-footer-title">{t("footerServices")}</div>
              <div className="services-footer-links">
                <Link to="/subscribe" className="services-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="services-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="services-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="services-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="services-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="services-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="services-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="services-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="services-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="services-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="services-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="services-footer-title">{t("footerLegality")}</div>
              <div className="services-footer-links">
                <Link to="/terms" className="services-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="services-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="services-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="services-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="services-footer-title">{t("footerConnection")}</div>
              <div className="services-footer-links">
                <a href="#" className="services-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="services-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="services-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="services-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="services-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>
          <div className="services-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Services;