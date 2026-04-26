import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./Privacy.css";

const Privacy = ({ targetLang, setTargetLang }) => {
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
  const [hoveredPolicyCard, setHoveredPolicyCard] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT (FULLY INTACT)
  // =========================
  const EN = {
    // Page Title
    privacyTitle: "Privacy Policy",

    // Intro Text
    intro1: "At Jerry AI, your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    intro2: "We are committed to protecting your personal data and ensuring transparency in how we handle your information.",

    // Image Caption
    imageCaption: "Your Privacy Matters to Us",

    // Section Titles
    section1Title: "1. Information We Collect",
    section1Intro: "We may collect personal information including but not limited to:",
    collect1: "Your name",
    collect2: "Email address",
    collect3: "Contact details",
    collect4: "IP address",
    collect5: "Payment details (if you make a transaction)",
    collect6: "Device and browser information",
    collect7: "Usage data such as pages visited, time spent, and links clicked",

    section2Title: "2. How We Use Your Information",
    section2Intro: "Your information is used to:",

    // Policy Cards
    policyCard1Title: "Service Operation",
    policyCard1Desc: "Provide, operate, and maintain our AI services and platform functionality",

    policyCard2Title: "User Experience",
    policyCard2Desc: "Improve and personalize your experience with our services",

    policyCard3Title: "Financial Processing",
    policyCard3Desc: "Process payments, deliver invoices, and manage billing",

    policyCard4Title: "Communication",
    policyCard4Desc: "Communicate with you, including sending updates or promotional material",

    policyCard5Title: "Security Measures",
    policyCard5Desc: "Prevent fraud, ensure platform security, and protect user data",

    policyCard6Title: "Legal Compliance",
    policyCard6Desc: "Comply with legal obligations and regulatory requirements",

    section3Title: "3. Cookies and Tracking",
    cookiesIntro: "We use cookies and similar technologies to:",
    cookie1: "Maintain user sessions and authentication",
    cookie2: "Analyze website traffic and usage patterns",
    cookie3: "Personalize content and advertisements",
    cookie4: "Remember your preferences and settings",
    cookiesNote: "You may disable cookies in your browser settings, though doing so may affect your experience on our website.",

    // Data Protection Section
    dataProtectionTitle: "Our Data Protection Commitment",
    dataProtectionDesc: "Understanding our approach to data protection helps you make informed decisions about your privacy.",

    // Protection Metrics
    metric1Title: "Encryption",
    metric1Desc: "End-to-end encryption for sensitive data transmission and storage",

    metric2Title: "Access Control",
    metric2Desc: "Strict access controls and authentication mechanisms",

    metric3Title: "Compliance",
    metric3Desc: "Adherence to global data protection regulations and standards",

    // Enhanced Paragraphs
    enhancedTitle: "Proactive Data Protection & Ethical Data Management",
    enhanced1: "In today's digital landscape where data privacy concerns are paramount, Jerry AI implements a proactive, multi-layered approach to data protection that goes beyond basic compliance. Our privacy framework is built on the principle of \"privacy by design,\" meaning data protection measures are integrated into every aspect of our service development from the ground up. We employ advanced encryption protocols for data both in transit and at rest, implement strict access controls with role-based permissions, and conduct regular security audits to identify and address potential vulnerabilities before they can be exploited. Our dedicated data protection team continuously monitors emerging privacy regulations and technological developments to ensure our practices remain at the forefront of industry standards.",
    enhanced2: "Beyond technical safeguards, we believe in ethical data management that respects user autonomy and fosters trust. We practice data minimization, collecting only what is necessary for specified purposes, and employ anonymization techniques where possible to reduce privacy risks. Transparency is a core value—we provide clear, accessible information about what data we collect, why we need it, and how it's used. We've implemented user-friendly privacy controls that give you meaningful choices about your data, including granular consent options and easy-to-use data management tools. Our commitment extends to responsible data sharing practices with third parties, ensuring any partners handling your data meet our stringent privacy standards through comprehensive contractual agreements and regular compliance assessments.",

    section4Title: "4. Sharing of Information",
    sharingIntro: "We do not sell or rent your personal data to third parties. We may share information with:",
    share1: "Payment processors (e.g., PayPal, Stripe) for transaction processing",
    share2: "Service providers who assist in our operations under strict confidentiality",
    share3: "Legal authorities, if required by law or to protect rights and safety",
    sharingNote: "All third parties are obligated to handle your data securely and in accordance with applicable laws and our privacy standards.",

    section5Title: "5. Data Security",
    securityIntro: "We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or disclosure. Our security measures include:",
    security1: "SSL/TLS encryption for all data transmissions",
    security2: "Regular security audits and vulnerability assessments",
    security3: "Secure data centers with physical access controls",
    security4: "Employee training on data protection best practices",
    securityNote: "However, no method of transmission over the Internet is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security.",

    section6Title: "6. Your Rights",
    rightsIntro: "Depending on your jurisdiction, you may have rights to:",

    // Rights Cards
    rightsCard1Title: "Data Access",
    rightsCard1Desc: "Access or request a copy of your personal data we hold",

    rightsCard2Title: "Data Correction",
    rightsCard2Desc: "Correct inaccurate or incomplete personal information",

    rightsCard3Title: "Data Deletion",
    rightsCard3Desc: "Request deletion of your data under certain conditions",

    rightsCard4Title: "Consent Withdrawal",
    rightsCard4Desc: "Withdraw consent or object to data processing",

    rightsCard5Title: "Data Portability",
    rightsCard5Desc: "Receive your data in a structured, machine-readable format",

    rightsCard6Title: "Complaint Rights",
    rightsCard6Desc: "File a complaint with a data protection authority",

    section7Title: "7. Data Retention",
    retentionIntro: "We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law. Our retention periods consider:",
    retention1: "The purpose for which we collected the data",
    retention2: "Legal and regulatory requirements",
    retention3: "Statutory limitation periods",
    retention4: "Business needs and legitimate interests",

    section8Title: "8. Third-Party Links",
    section8Text: "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage you to review their privacy policies before providing any personal information.",

    section9Title: "9. Updates to This Policy",
    section9Text: "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Changes will be posted on this page with a revised \"Effective Date.\" We encourage you to review this policy periodically.",

    section10Title: "10. Contact Us",
    contactIntro: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer at:",
    contactEmail: "contact_us@jerry-ai.net",
    contactNote: "We typically respond to privacy inquiries within 48 hours during business days.",

    // Meta
    effectiveDate: "Effective Date: January 15, 2025",
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
  const policyCards = [
    { title: t("policyCard1Title"), desc: t("policyCard1Desc") },
    { title: t("policyCard2Title"), desc: t("policyCard2Desc") },
    { title: t("policyCard3Title"), desc: t("policyCard3Desc") },
    { title: t("policyCard4Title"), desc: t("policyCard4Desc") },
    { title: t("policyCard5Title"), desc: t("policyCard5Desc") },
    { title: t("policyCard6Title"), desc: t("policyCard6Desc") },
  ];

  const protectionMetrics = [
    { icon: "🔐", title: t("metric1Title"), desc: t("metric1Desc") },
    { icon: "🛡️", title: t("metric2Title"), desc: t("metric2Desc") },
    { icon: "📋", title: t("metric3Title"), desc: t("metric3Desc") },
  ];

  const rightsCards = [
    { icon: "📄", title: t("rightsCard1Title"), desc: t("rightsCard1Desc") },
    { icon: "✏️", title: t("rightsCard2Title"), desc: t("rightsCard2Desc") },
    { icon: "🗑️", title: t("rightsCard3Title"), desc: t("rightsCard3Desc") },
    { icon: "🚫", title: t("rightsCard4Title"), desc: t("rightsCard4Desc") },
    { icon: "📤", title: t("rightsCard5Title"), desc: t("rightsCard5Desc") },
    { icon: "⚖️", title: t("rightsCard6Title"), desc: t("rightsCard6Desc") },
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
        <div className="privacy-container">
          <div className="privacy-card">
            <h1 className="privacy-title">{t("privacyTitle")}</h1>

            <div className="privacy-intro-text">
              <p className="privacy-intro-paragraph">{t("intro1")}</p>
              <p className="privacy-intro-paragraph">{t("intro2")}</p>
            </div>

            <div className="privacy-image-section">
              <img
                src={ASSET("/images/general/icons/privacy-shield.png")}
                alt="Privacy Shield"
                className="privacy-image"
              />
              <div className="privacy-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="privacy-content">
              {/* Section 1 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section1Title")}</h2>
                <p className="privacy-content-paragraph">{t("section1Intro")}</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">{t("collect1")}</li>
                  <li className="privacy-list-item">{t("collect2")}</li>
                  <li className="privacy-list-item">{t("collect3")}</li>
                  <li className="privacy-list-item">{t("collect4")}</li>
                  <li className="privacy-list-item">{t("collect5")}</li>
                  <li className="privacy-list-item">{t("collect6")}</li>
                  <li className="privacy-list-item">{t("collect7")}</li>
                </ul>
              </div>

              {/* Section 2 with Policy Cards */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section2Title")}</h2>
                <p className="privacy-content-paragraph">{t("section2Intro")}</p>
                
                <div className="privacy-policy-grid">
                  {policyCards.map((card, index) => (
                    <div
                      key={index}
                      className={`privacy-policy-card ${hoveredPolicyCard === index ? 'privacy-policy-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredPolicyCard(index)}
                      onMouseLeave={() => setHoveredPolicyCard(null)}
                    >
                      <h3 className="privacy-policy-title">{card.title}</h3>
                      <p className="privacy-policy-desc">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section3Title")}</h2>
                <p className="privacy-content-paragraph">{t("cookiesIntro")}</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">{t("cookie1")}</li>
                  <li className="privacy-list-item">{t("cookie2")}</li>
                  <li className="privacy-list-item">{t("cookie3")}</li>
                  <li className="privacy-list-item">{t("cookie4")}</li>
                </ul>
                <p className="privacy-content-paragraph">{t("cookiesNote")}</p>
              </div>

              {/* Data Protection Section with Metrics */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("dataProtectionTitle")}</h2>
                <p className="privacy-content-paragraph">{t("dataProtectionDesc")}</p>
                
                <div className="privacy-protection-metrics">
                  {protectionMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`privacy-metric-card ${hoveredMetric === index ? 'privacy-metric-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredMetric(index)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <span className="privacy-metric-icon">{metric.icon}</span>
                      <h3 className="privacy-metric-title">{metric.title}</h3>
                      <p className="privacy-metric-desc">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="privacy-enhanced">
                <h3 className="privacy-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="privacy-content-paragraph">{t("enhanced1")}</p>
                <p className="privacy-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Section 4 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section4Title")}</h2>
                <p className="privacy-content-paragraph">{t("sharingIntro")}</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">{t("share1")}</li>
                  <li className="privacy-list-item">{t("share2")}</li>
                  <li className="privacy-list-item">{t("share3")}</li>
                </ul>
                <p className="privacy-content-paragraph">{t("sharingNote")}</p>
              </div>

              {/* Section 5 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section5Title")}</h2>
                <p className="privacy-content-paragraph">{t("securityIntro")}</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">{t("security1")}</li>
                  <li className="privacy-list-item">{t("security2")}</li>
                  <li className="privacy-list-item">{t("security3")}</li>
                  <li className="privacy-list-item">{t("security4")}</li>
                </ul>
                <p className="privacy-content-paragraph">{t("securityNote")}</p>
              </div>

              {/* Section 6 with Rights Cards */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section6Title")}</h2>
                <p className="privacy-content-paragraph">{t("rightsIntro")}</p>
                
                <div className="privacy-rights-grid">
                  {rightsCards.map((right, index) => (
                    <div key={index} className="privacy-rights-card">
                      <span className="privacy-rights-icon">{right.icon}</span>
                      <h3 className="privacy-rights-title">{right.title}</h3>
                      <p className="privacy-rights-desc">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section7Title")}</h2>
                <p className="privacy-content-paragraph">{t("retentionIntro")}</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">{t("retention1")}</li>
                  <li className="privacy-list-item">{t("retention2")}</li>
                  <li className="privacy-list-item">{t("retention3")}</li>
                  <li className="privacy-list-item">{t("retention4")}</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section8Title")}</h2>
                <p className="privacy-content-paragraph">{t("section8Text")}</p>
              </div>

              {/* Section 9 */}
              <div className="privacy-section">
                <h2 className="privacy-section-title">{t("section9Title")}</h2>
                <p className="privacy-content-paragraph">{t("section9Text")}</p>
              </div>

              {/* Section 10 Contact */}
              <div className="privacy-contact-section">
                <h3 className="privacy-contact-title">{t("section10Title")}</h3>
                <p className="privacy-contact-text">{t("contactIntro")}</p>
                <a href="mailto:contact_us@jerry-ai.net" className="privacy-contact-button">
                  📧 {t("contactEmail")}
                </a>
                <p className="privacy-contact-note">{t("contactNote")}</p>
              </div>

              {/* Meta */}
              <div className="privacy-meta">
                <p className="privacy-highlight">{t("effectiveDate")}</p>
                <p>{t("meta")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="privacy-footer-inner">
            <div>
              <div className="privacy-footer-title">{t("footerCompany")}</div>
              <div className="privacy-footer-links">
                <Link to="/about" className="privacy-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="privacy-footer-link">{t("support")}</Link>
                <Link to="/contact" className="privacy-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="privacy-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="privacy-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="privacy-footer-title">{t("footerServices")}</div>
              <div className="privacy-footer-links">
                <Link to="/subscribe" className="privacy-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="privacy-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="privacy-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="privacy-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="privacy-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="privacy-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="privacy-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="privacy-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="privacy-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="privacy-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="privacy-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="privacy-footer-title">{t("footerLegality")}</div>
              <div className="privacy-footer-links">
                <Link to="/terms" className="privacy-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="privacy-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="privacy-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="privacy-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="privacy-footer-title">{t("footerConnection")}</div>
              <div className="privacy-footer-links">
                <a href="#" className="privacy-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="privacy-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="privacy-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="privacy-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="privacy-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>
          <div className="privacy-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Privacy;