import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./VoiceTranslator.css";

const VoiceTranslator = ({ targetLang, setTargetLang }) => {
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
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT (FULLY INTACT)
  // =========================
  const EN = {
    // Page Title
    voiceTitle: "AI Voice Translator",

    // Intro Text
    introText: "The best benefits of AI voice translators are instant, barrier-free communication, enabling seamless global collaboration, travel, and business expansion by eliminating language delays. They offer significant cost savings and time efficiency over human interpreters, handle massive content volumes rapidly, improve accessibility for diverse audiences, and maintain brand consistency through customizable voices, making global reach affordable and practical for everyone from individuals to large corporations.",

    // Image Caption
    imageCaption: "Advanced AI-Powered Voice Translation Technology",

    // Section Titles
    benefitsTitle: "Key Benefits of AI Voice Translation",
    benefitsDesc: "Our AI voice translation technology transforms how people and businesses communicate across language barriers with unprecedented speed and accuracy.",

    coverageTitle: "Global Language Coverage",
    coverageDesc: "Our AI voice translation platform supports comprehensive language coverage with industry-leading accuracy and natural speech synthesis.",

    impactTitle: "Real-World Impact",
    impactDesc: "AI voice translation technology is transforming communication and operations across diverse sectors and industries.",

    additionalTitle: "Additional Advantages",

    // Benefit Cards
    benefit1Title: "Real-Time Communication",
    benefit1Desc: "Breaks down language barriers instantly, facilitating natural conversations in meetings, travel, and customer service with seamless translation.",

    benefit2Title: "Cost & Time Savings",
    benefit2Desc: "Dramatically reduces expenses and time compared to traditional translation, allowing for faster decision-making and content localization.",

    benefit3Title: "Scalability",
    benefit3Desc: "Can translate vast amounts of content (audio, video, text) quickly and consistently, vital for media and large businesses with global operations.",

    benefit4Title: "Enhanced Accessibility & Inclusion",
    benefit4Desc: "Makes content accessible to global audiences, supporting different learning styles and empowering non-native speakers across all platforms.",

    benefit5Title: "Brand Consistency",
    benefit5Desc: "Maintains a uniform tone and brand voice across languages with customizable, consistent AI voices that represent your organization globally.",

    benefit6Title: "Democratization of Global Reach",
    benefit6Desc: "Makes language translation affordable and accessible for small businesses, non-profits, and individuals previously excluded from global markets.",

    // Language Stats
    stat1Value: "130+",
    stat1Label: "Languages Supported",

    stat2Value: "98%",
    stat2Label: "Translation Accuracy",

    stat3Value: "Real-time",
    stat3Label: "Speech Processing",

    // Enhanced Paragraphs
    enhancedTitle: "Transforming Global Communication with AI Voice Technology",
    enhanced1: "AI voice translation represents one of the most significant technological breakthroughs in human communication since the invention of the internet. By leveraging advanced neural networks and natural language processing algorithms, our system doesn't just translate words—it captures context, tone, and cultural nuances to deliver translations that feel authentic and natural. This technology eliminates the awkward pauses and misunderstandings that typically plague cross-language conversations, creating fluid dialogues where participants can focus on the substance of their discussion rather than the mechanics of translation. Whether you're negotiating an international business deal, providing customer support to global clients, or simply connecting with friends and family across borders, AI voice translation creates a seamless communication experience that feels as natural as speaking in your native language.",
    enhanced2: "Beyond individual conversations, AI voice translation is revolutionizing entire industries and creating new possibilities for global collaboration. Educational institutions can now offer courses to international students without language barriers, healthcare providers can communicate effectively with patients from diverse linguistic backgrounds, and media companies can instantly publish content in dozens of languages simultaneously. The technology's ability to preserve brand voice and tone across translations ensures that companies can maintain their unique identity while expanding into new markets. Perhaps most importantly, AI voice translation democratizes global communication by making sophisticated translation technology accessible and affordable to organizations of all sizes. Small businesses that could never afford professional human translators can now compete in international markets, non-profits can extend their reach to serve more communities, and individuals can connect with the world in ways previously reserved for large corporations with substantial translation budgets.",

    // Use Cases
    usecase1Title: "Business & Commerce",
    usecase1Desc: "Facilitates international partnerships, remote team collaboration, and expands market reach across language barriers",

    usecase2Title: "Healthcare",
    usecase2Desc: "Improves communication between patients and providers across language divides, ensuring accurate medical information",

    usecase3Title: "Education",
    usecase3Desc: "Supports students and researchers globally, making learning more inclusive and accessible across language barriers",

    usecase4Title: "Media & Publishing",
    usecase4Desc: "Enables rapid publication of news and content in multiple languages simultaneously with consistent messaging",

    usecase5Title: "Travel & Tourism",
    usecase5Desc: "Enhances traveler experiences with instant translation for navigation, dining, and cultural interactions",

    usecase6Title: "Customer Service",
    usecase6Desc: "Provides multilingual support without requiring human translators, reducing costs and improving response times",

    // Additional Advantages List
    additional1: "Increased Engagement: Delivers information in a listener's native language, improving comprehension and connection, even with digital avatars",
    additional2: "Cultural Adaptation: Goes beyond literal translation to adapt expressions and idioms for cultural relevance",
    additional3: "Learning Support: Helps language learners improve pronunciation and comprehension through accurate voice models",
    additional4: "Content Localization: Enables businesses to adapt marketing materials, training content, and documentation for global audiences",
    additional5: "Accessibility Features: Supports differently-abled users through voice interfaces and auditory content translation",
    additional6: "Privacy & Security: Enterprise-grade encryption ensures confidential conversations remain private during translation",

    // CTA Section
    ctaTitle: "Break Language Barriers with AI Voice Translation",
    ctaText: "Subscribe to our AI Voice Translator plan and gain access to 130+ language translation, real-time conversation mode, text-to-speech in all languages, and mobile-optimized interface. Transform how you communicate globally.",
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
  // 3️⃣ DEEPSEEK TRANSLATION HOOK (REPLACES OLD CODE)
  // =========================
  const { translatedText, isTranslating, error: translationError } = useDeepSeekTranslation(EN, targetLang);

  // Safe t() function with fallback
  const t = (key) => {
    if (!translatedText) return EN[key] || key;
    return translatedText[key] || EN[key] || key;
  };

  // Loading indicator for translation
  if (isTranslating && targetLang !== 'en') {
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
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>🌐 Translating to {targetLang}...</h3>
          <p>Please wait while DeepSeek translates the content.</p>
        </div>
      </>
    );
  }

  if (translationError) {
    console.error('Translation error:', translationError);
  }

  // Data arrays (KEPT INTACT)
  const benefits = [
    { title: t("benefit1Title"), desc: t("benefit1Desc") },
    { title: t("benefit2Title"), desc: t("benefit2Desc") },
    { title: t("benefit3Title"), desc: t("benefit3Desc") },
    { title: t("benefit4Title"), desc: t("benefit4Desc") },
    { title: t("benefit5Title"), desc: t("benefit5Desc") },
    { title: t("benefit6Title"), desc: t("benefit6Desc") },
  ];

  const stats = [
    { icon: "🌍", value: t("stat1Value"), label: t("stat1Label") },
    { icon: "⚡", value: t("stat2Value"), label: t("stat2Label") },
    { icon: "🎙️", value: t("stat3Value"), label: t("stat3Label") },
  ];

  const usecases = [
    { icon: "🏢", title: t("usecase1Title"), desc: t("usecase1Desc") },
    { icon: "🏥", title: t("usecase2Title"), desc: t("usecase2Desc") },
    { icon: "🎓", title: t("usecase3Title"), desc: t("usecase3Desc") },
    { icon: "📰", title: t("usecase4Title"), desc: t("usecase4Desc") },
    { icon: "✈️", title: t("usecase5Title"), desc: t("usecase5Desc") },
    { icon: "🤝", title: t("usecase6Title"), desc: t("usecase6Desc") },
  ];

  const additionalList = [
    t("additional1"),
    t("additional2"),
    t("additional3"),
    t("additional4"),
    t("additional5"),
    t("additional6"),
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
        <div className="vt-container">
          <div className="vt-card">
            <h1 className="vt-title">{t("voiceTitle")}</h1>

            <div className="vt-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="vt-image-section">
              <img
                src={ASSET("/images/general/icons/voice-translator.png")}
                alt="AI Voice Translator Technology"
                className="vt-image"
              />
              <div className="vt-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="vt-content">
              {/* Benefits Section */}
              <div className="vt-section">
                <h2 className="vt-section-title">{t("benefitsTitle")}</h2>
                <p className="vt-content-paragraph">{t("benefitsDesc")}</p>
                
                <div className="vt-benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`vt-benefit-card ${hoveredBenefit === index ? 'vt-benefit-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredBenefit(index)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <h3 className="vt-benefit-title">{benefit.title}</h3>
                      <p className="vt-benefit-desc">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Coverage Section */}
              <div className="vt-section">
                <h2 className="vt-section-title">{t("coverageTitle")}</h2>
                <p className="vt-content-paragraph">{t("coverageDesc")}</p>
                
                <div className="vt-language-stats">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`vt-stat-card ${hoveredStat === index ? 'vt-stat-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <span className="vt-stat-icon">{stat.icon}</span>
                      <div className="vt-stat-value">{stat.value}</div>
                      <div className="vt-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="vt-enhanced">
                <h3 className="vt-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="vt-content-paragraph">{t("enhanced1")}</p>
                <p className="vt-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Use Cases Section */}
              <div className="vt-section">
                <h2 className="vt-section-title">{t("impactTitle")}</h2>
                <p className="vt-content-paragraph">{t("impactDesc")}</p>
                
                <div className="vt-usecase-grid">
                  {usecases.map((usecase, index) => (
                    <div key={index} className="vt-usecase-card">
                      <span className="vt-usecase-icon">{usecase.icon}</span>
                      <h3 className="vt-usecase-title">{usecase.title}</h3>
                      <p className="vt-usecase-desc">{usecase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Advantages Section */}
              <div className="vt-section">
                <h2 className="vt-section-title">{t("additionalTitle")}</h2>
                <ul className="vt-list">
                  {additionalList.map((item, index) => (
                    <li key={index} className="vt-list-item">
                      <span className="vt-highlight">{item.split(":")[0]}:</span>
                      {item.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="vt-cta">
                <h3 className="vt-cta-title">{t("ctaTitle")}</h3>
                <p className="vt-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="vt-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="vt-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="vt-footer-inner">
            <div>
              <div className="vt-footer-title">{t("footerCompany")}</div>
              <div className="vt-footer-links">
                <Link to="/about" className="vt-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="vt-footer-link">{t("support")}</Link>
                <Link to="/contact" className="vt-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="vt-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="vt-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="vt-footer-title">{t("footerServices")}</div>
              <div className="vt-footer-links">
                <Link to="/subscribe" className="vt-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="vt-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="vt-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="vt-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="vt-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="vt-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="vt-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="vt-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="vt-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="vt-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="vt-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="vt-footer-title">{t("footerLegality")}</div>
              <div className="vt-footer-links">
                <Link to="/terms" className="vt-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="vt-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="vt-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="vt-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="vt-footer-title">{t("footerConnection")}</div>
              <div className="vt-footer-links">
                <a href="#" className="vt-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="vt-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="vt-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="vt-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="vt-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>
          <div className="vt-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default VoiceTranslator;