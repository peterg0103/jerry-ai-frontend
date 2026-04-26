import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./AppDevelopment.css";

const AppDevelopment = ({ targetLang, setTargetLang }) => {
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
  const [hoveredProcess, setHoveredProcess] = useState(null);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = {
    // Page Title
    appDevTitle: "App Development Services",

    // Intro Text
    introText: "Jerry's AI offers full-cycle mobile app development services for both iOS and Android platforms. We build intuitive, high-performance mobile applications that engage users and drive business growth. From wireframing and design to coding and deployment, our apps are built for performance, security, and user satisfaction. Perfect for startups or enterprises looking to innovate and transform ideas into reality.",

    // Image Caption
    imageCaption: "Professional Mobile App Development Solutions",

    // Section Titles
    approachTitle: "Our Development Approach",
    approachDesc: "We follow a comprehensive, user-centric approach to app development that ensures your application not only looks great but also delivers exceptional performance and user experience.",

    platformTitle: "Platform Expertise",
    platformDesc: "We develop native and cross-platform applications optimized for maximum performance and user engagement.",

    packageTitle: "Complete Development Package",
    packageDesc: "Our comprehensive app development service includes:",

    // Process Cards
    process1Title: "Strategic Planning",
    process1Desc: "We begin with in-depth consultation to understand your business goals, target audience, and technical requirements, creating a detailed roadmap for success.",

    process2Title: "UI/UX Design Excellence",
    process2Desc: "Our designers create intuitive, beautiful interfaces that provide seamless user experiences across all devices and screen sizes.",

    process3Title: "Agile Development",
    process3Desc: "Using agile methodologies, we develop in sprints with regular updates and feedback sessions, ensuring transparency and alignment throughout the process.",

    process4Title: "Quality Assurance",
    process4Desc: "Rigorous testing across multiple devices and scenarios ensures your app performs flawlessly under all conditions before launch.",

    // Platform Cards
    platform1Title: "iOS Development",
    platform1Desc: "Native iOS apps built with Swift and SwiftUI, following Apple's Human Interface Guidelines for premium user experience.",

    platform2Title: "Android Development",
    platform2Desc: "Native Android applications using Kotlin and Jetpack Compose, optimized for diverse device specifications.",

    platform3Title: "Cross-Platform",
    platform3Desc: "React Native and Flutter solutions for cost-effective development that maintains native-like performance.",

    // Enhanced Paragraphs
    enhancedTitle: "Why Choose Our App Development Services",
    enhanced1: "In today's mobile-first world, having a robust, user-friendly application is no longer optional—it's essential for business growth and customer engagement. Our team of experienced developers combines technical expertise with creative design thinking to build applications that not only meet functional requirements but also create memorable user experiences. We understand that every business is unique, which is why we take the time to deeply understand your specific needs and objectives before crafting a tailored development strategy.",
    enhanced2: "Beyond just coding, we provide comprehensive support throughout the entire app lifecycle. From initial concept validation and market research to post-launch maintenance and updates, we partner with you at every stage. Our commitment to using cutting-edge technologies ensures your app remains competitive and scalable as your business grows. Whether you're looking to build a consumer-facing application to reach new markets or an enterprise solution to streamline internal processes, our app development services provide the perfect blend of innovation, reliability, and performance to bring your vision to life.",

    // Package List
    package1: "iOS & Android native app development",
    package2: "Cross-platform development solutions",
    package3: "Professional UI/UX design services",
    package4: "App store deployment and optimization",
    package5: "API integration with third-party services",
    package6: "Post-launch updates and maintenance",
    package7: "Performance monitoring and analytics",
    package8: "Regular security updates and patches",

    // CTA Section
    ctaTitle: "Transform Your Ideas into Powerful Mobile Applications",
    ctaText: "Subscribe to our App Development plan and get access to professional mobile app development services for iOS and Android. Build the next generation of mobile experiences with our expert team.",
    ctaButton: "Click Here To Subscribe",

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
  // 3️⃣ DEEPSEEK TRANSLATION HOOK
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

  // =========================
  // 4️⃣ DATA ARRAYS
  // =========================
  const processes = [
    { title: t("process1Title"), desc: t("process1Desc") },
    { title: t("process2Title"), desc: t("process2Desc") },
    { title: t("process3Title"), desc: t("process3Desc") },
    { title: t("process4Title"), desc: t("process4Desc") },
  ];

  const platforms = [
    { icon: "📱", title: t("platform1Title"), desc: t("platform1Desc") },
    { icon: "🤖", title: t("platform2Title"), desc: t("platform2Desc") },
    { icon: "🌐", title: t("platform3Title"), desc: t("platform3Desc") },
  ];

  const packageList = [
    t("package1"),
    t("package2"),
    t("package3"),
    t("package4"),
    t("package5"),
    t("package6"),
    t("package7"),
    t("package8"),
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
        <div className="appdev-container">
          <div className="appdev-card">
            <h1 className="appdev-title">{t("appDevTitle")}</h1>

            <div className="appdev-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="appdev-image-section">
              <img
                src={ASSET("/images/general/icons/app-dev-icon.png")}
                alt="App Development Services"
                className="appdev-image"
              />
              <div className="appdev-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="appdev-content">
              {/* Development Approach Section */}
              <div className="appdev-section">
                <h2 className="appdev-section-title">{t("approachTitle")}</h2>
                <p className="appdev-content-paragraph">{t("approachDesc")}</p>
                
                <div className="appdev-process-grid">
                  {processes.map((process, index) => (
                    <div
                      key={index}
                      className={`appdev-process-card ${hoveredProcess === index ? 'appdev-process-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredProcess(index)}
                      onMouseLeave={() => setHoveredProcess(null)}
                    >
                      <h3 className="appdev-process-title">{process.title}</h3>
                      <p className="appdev-process-desc">{process.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform Expertise Section */}
              <div className="appdev-section">
                <h2 className="appdev-section-title">{t("platformTitle")}</h2>
                <p className="appdev-content-paragraph">{t("platformDesc")}</p>
                
                <div className="appdev-platforms">
                  {platforms.map((platform, index) => (
                    <div
                      key={index}
                      className={`appdev-platform-card ${hoveredPlatform === index ? 'appdev-platform-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredPlatform(index)}
                      onMouseLeave={() => setHoveredPlatform(null)}
                    >
                      <span className="appdev-platform-icon">{platform.icon}</span>
                      <h3 className="appdev-platform-title">{platform.title}</h3>
                      <p className="appdev-platform-desc">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="appdev-enhanced">
                <h3 className="appdev-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="appdev-content-paragraph">{t("enhanced1")}</p>
                <p className="appdev-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Package Section */}
              <div className="appdev-section">
                <h2 className="appdev-section-title">{t("packageTitle")}</h2>
                <p className="appdev-content-paragraph">{t("packageDesc")}</p>
                <ul className="appdev-list">
                  {packageList.map((item, index) => (
                    <li key={index} className="appdev-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="appdev-cta">
                <h3 className="appdev-cta-title">{t("ctaTitle")}</h3>
                <p className="appdev-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="appdev-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="appdev-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="appdev-footer-inner">
            <div>
              <div className="appdev-footer-title">{t("footerCompany")}</div>
              <div className="appdev-footer-links">
                <Link to="/about" className="appdev-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="appdev-footer-link">{t("support")}</Link>
                <Link to="/contact" className="appdev-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="appdev-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="appdev-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="appdev-footer-title">{t("footerServices")}</div>
              <div className="appdev-footer-links">
                <Link to="/subscribe" className="appdev-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="appdev-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="appdev-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="appdev-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="appdev-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="appdev-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="appdev-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="appdev-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="appdev-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="appdev-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="appdev-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="appdev-footer-title">{t("footerLegality")}</div>
              <div className="appdev-footer-links">
                <Link to="/terms" className="appdev-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="appdev-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="appdev-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="appdev-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="appdev-footer-title">{t("footerConnection")}</div>
              <div className="appdev-footer-links">
                <a href="/" className="appdev-footer-link">{t("facebook")}</a>
                <a href="/" className="appdev-footer-link">{t("linkedin")}</a>
                <a href="/" className="appdev-footer-link">{t("twitter")}</a>
                <a href="/" className="appdev-footer-link">{t("tiktok")}</a>
                <a href="/" className="appdev-footer-link">{t("telegram")}</a>
              </div>
            </div>
          </div>
          <div className="appdev-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default AppDevelopment;
