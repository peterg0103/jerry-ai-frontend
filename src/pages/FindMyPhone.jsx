import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";

const FindMyPhone = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // ✅ ALL useState hooks FIRST
  const [hoveredFooterLink, setHoveredFooterLink] = useState({ section: null, index: null });

  // =========================
  // 1️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = useMemo(
    () => ({
      // Page Title
      phoneTitle: "Find My Phone Location",

      // Intro Text
      introText: "To use a \"Find My Phone\" service, the primary information you need for both Apple and Android devices is your account login credentials (Apple ID or Google account email and password) and prior activation of the location service on the lost device.",

      // Image Caption
      imageCaption: "Global Phone Tracking & Location Services",

      // Section Titles
      essentialTitle: "Essential Information Overview",
      essentialDesc: "Here is a breakdown of the necessary information and prerequisites for using Find My Phone services effectively:",

      prerequisitesTitle: "Prerequisites (Information the phone needs beforehand)",
      prerequisitesDesc: "For the location feature to work, several settings must be enabled on the lost phone before it goes missing:",

      howItWorksTitle: "How Our Service Works",
      howItWorksDesc: "Our JA#012 subscription plan provides enhanced Find My Phone capabilities including:",

      // Prerequisites List Items
      prereq1: "Associated Account: The device must be signed in to an Apple ID (for iPhone) or a Google Account (for Android).",
      prereq2: "\"Find My\" Feature Enabled: You must have explicitly turned on \"Find My [Device]\" in the phone's settings.",
      prereq3: "Location Services/GPS Enabled: The device's location or GPS feature needs to be active so it can determine and share its location.",
      prereq4: "Internet Connection (Usually): The device typically needs a Wi-Fi or cellular data connection to send its location data to the server, though some modern features can use Bluetooth proximity to other devices while offline.",
      prereq5: "Power: The device must be powered on (though the \"Send Last Location\" feature can provide a final location just before the battery dies).",

      prereqNote: "Without these prerequisites enabled on your device before it goes missing, Find My Phone services will not be able to locate your device. It's crucial to set up these features in advance as a preventive measure.",

      // How It Works List
      service1: "Global phone number tracking across all networks",
      service2: "Country code support for international devices",
      service3: "Real-time location data with high accuracy",
      service4: "Privacy-compliant searches respecting data protection laws",
      service5: "Mobile network integration for offline tracking",
      service6: "Emergency contact features and notification systems",

      // CTA Section
      ctaTitle: "Never Lose Your Phone Again",
      ctaText: "Subscribe to our JA#012 plan for just $1.20/month and get access to advanced phone tracking features, real-time location data, and emergency services. Protect your device with our comprehensive Find My Phone solution.",
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
    }),
    []
  );

  // =========================
  // 2️⃣ DEEPSEEK TRANSLATION HOOK
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

  // Inline styles
  const styles = {
    container: {
      maxWidth: "960px",
      width: "100%",
      margin: "0 auto",
      padding: "8px 16px 0 16px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      background: "rgba(255, 255, 255, 0.62)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
      padding: "28px 32px",
      boxShadow: "0 10px 26px rgba(0, 0, 0, .10)",
    },
    title: {
      fontSize: "48px",
      color: "#10a7ff",
      textAlign: "center",
      margin: "6px 0 20px",
      fontWeight: "800",
    },
    introText: {
      lineHeight: "1.7",
      fontSize: "17px",
      color: "#111827",
      textAlign: "center",
      maxWidth: "900px",
      margin: "0 auto 30px",
    },
    imageSection: {
      textAlign: "center",
      margin: "30px 0 40px",
    },
    phoneImage: {
      width: "236px",
      height: "200px",
      objectFit: "contain",
      border: "1px solid rgba(0,0,0,.08)",
      borderRadius: "8px",
      boxShadow: "0 6px 16px rgba(0,0,0,.08)",
      background: "white",
      padding: "10px",
    },
    imageCaption: {
      marginTop: "12px",
      fontSize: "14px",
      color: "#64748b",
      fontStyle: "italic",
    },
    section: {
      margin: "24px 0 28px",
      padding: "20px 24px",
      background: "rgba(255, 255, 255, .78)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "8px",
      boxShadow: "0 6px 16px rgba(0,0,0,.08)",
    },
    sectionTitle: {
      margin: "0 0 18px",
      fontSize: "22px",
      color: "#0f172a",
      borderBottom: "2px solid rgba(16, 167, 255, 0.2)",
      paddingBottom: "10px",
    },
    content: {
      lineHeight: "1.75",
      fontSize: "16px",
      color: "#111827",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },
    contentParagraph: {
      margin: "0 0 16px",
      textAlign: "justify",
    },
    list: {
      margin: "12px 0 0 22px",
      padding: "0",
    },
    listItem: {
      margin: "10px 0",
      lineHeight: "1.6",
    },
    highlight: {
      fontWeight: "600",
      color: "#0f172a",
    },
    prerequisitesList: {
      background: "rgba(240, 244, 255, 0.5)",
      borderLeft: "4px solid #10a7ff",
      padding: "18px 24px 18px 32px",
      margin: "20px 0",
      borderRadius: "0 8px 8px 0",
    },
    prereqItem: {
      position: "relative",
      paddingLeft: "8px",
      margin: "10px 0",
      lineHeight: "1.6",
    },
    subscribeCta: {
      textAlign: "center",
      margin: "40px 0 30px",
      padding: "30px",
      background: "linear-gradient(135deg, rgba(16, 167, 255, 0.1), rgba(74, 108, 247, 0.1))",
      border: "2px solid rgba(16, 167, 255, 0.3)",
      borderRadius: "12px",
    },
    ctaTitle: {
      margin: "0 0 16px",
      fontSize: "26px",
      color: "#0f172a",
    },
    ctaText: {
      fontSize: "16px",
      color: "#334155",
      margin: "0 0 24px",
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    subscribeBtn: {
      display: "inline-block",
      padding: "14px 32px",
      background: "linear-gradient(135deg, #10a7ff, #4a6cf7)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "17px",
      fontWeight: "700",
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(16, 167, 255, 0.25)",
    },
    meta: {
      marginTop: "24px",
      fontSize: "13px",
      color: "rgba(17,24,39,.78)",
      textAlign: "center",
    },
  };

  // Data arrays
  const prerequisites = [
    t("prereq1"),
    t("prereq2"),
    t("prereq3"),
    t("prereq4"),
    t("prereq5"),
  ];

  const serviceList = [
    t("service1"),
    t("service2"),
    t("service3"),
    t("service4"),
    t("service5"),
    t("service6"),
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
        <div style={styles.container}>
          <div style={styles.card}>
            <h1 style={styles.title}>{t("phoneTitle")}</h1>

            <div style={styles.introText}>
              <p>{t("introText")}</p>
            </div>

            <div style={styles.imageSection}>
              <img src={ASSET("/images/general/icons/phone.png")} alt="Find My Phone" style={styles.phoneImage} />
              <div style={styles.imageCaption}>{t("imageCaption")}</div>
            </div>

            <div style={styles.content}>
              {/* Essential Information Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("essentialTitle")}</h2>
                <p style={styles.contentParagraph}>{t("essentialDesc")}</p>
              </div>

              {/* Prerequisites Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("prerequisitesTitle")}</h2>
                <p style={styles.contentParagraph}>{t("prerequisitesDesc")}</p>
                
                <div style={styles.prerequisitesList}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {prerequisites.map((item, index) => (
                      <li key={index} style={styles.prereqItem}>
                        <span style={styles.highlight}>{item.split(":")[0]}:</span>
                        {item.split(":").slice(1).join(":")}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p style={styles.contentParagraph}>{t("prereqNote")}</p>
              </div>

              {/* How It Works Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("howItWorksTitle")}</h2>
                <p style={styles.contentParagraph}>{t("howItWorksDesc")}</p>
                <ul style={styles.list}>
                  {serviceList.map((item, index) => (
                    <li key={index} style={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div style={styles.subscribeCta}>
                <h3 style={styles.ctaTitle}>{t("ctaTitle")}</h3>
                <p style={styles.ctaText}>{t("ctaText")}</p>
                <Link to="/subscribe" style={styles.subscribeBtn}>
                  {t("ctaButton")}
                </Link>
              </div>

              <div style={styles.meta}>{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="footer-inner">
            <div>
              <div className="footer-title">{t("footerCompany")}</div>
              <div className="footer-links">
                <Link to="/about">{t("aboutUs")}</Link>
                <Link to="/support">{t("support")}</Link>
                <Link to="/contact">{t("contactUs")}</Link>
                <Link to="/GeneralServices">{t("generalServices")}</Link>
                <Link to="/pricing">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="footer-title">{t("footerServices")}</div>
              <div className="footer-links">
                <Link to="/subscribe">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info">{t("professionalAIChat")}</Link>
                <Link to="/add-banner">{t("addBannerFooter")}</Link>
                <Link to="/education">{t("educationFooter")}</Link>
                <Link to="/web-development">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="footer-title">{t("footerLegality")}</div>
              <div className="footer-links">
                <Link to="/terms">{t("terms")}</Link>
                <Link to="/privacy">{t("privacy")}</Link>
                <Link to="/pdpa">{t("pdpa")}</Link>
                <Link to="/services">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="footer-title">{t("footerConnection")}</div>
              <div className="footer-links">
                <a href="#">{t("facebook")}</a>
                <a href="#">{t("linkedin")}</a>
                <a href="#">{t("twitter")}</a>
                <a href="#">{t("tiktok")}</a>
                <a href="#">{t("telegram")}</a>
              </div>
            </div>
          </div>
          <div className="copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default FindMyPhone;