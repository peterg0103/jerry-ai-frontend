import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const Support = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  useEffect(() => {
  // Single timer - this will run once and only once
  const timer = setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 50); // Small delay to ensure DOM is ready
  
  return () => clearTimeout(timer); // Clean up
}, []);

  // =========================
  // 1️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = useMemo(
    () => ({
      supportTitle: "JERRY'S AI SUPPORT GUIDE",

      // Overview Section
      overviewTitle: "1. Overview",
      overviewText:
        "Jerry's AI Support Center is dedicated to helping all registered users and partners receive fast, accurate, and secure assistance for technical, subscription, and account-related issues. This document outlines the available channels, expected response times, and the scope of support provided.",

      // Contact Channels Section
      contactTitle: "2. Contact Channels",
      contactGeneral: "• General Support Email:",
      contactGeneralEmail: "support@jerry-ai.net",
      contactPayment: "• Administrative or Payment Queries:",
      contactPaymentEmail: "payment@jerry-ai.net",
      contactFeedback: "• Feedback & Suggestions:",
      contactFeedbackEmail: "feedback@jerry-ai.net",

      // Service Categories Section
      serviceTitle: "3. Service Categories",
      service1: "1. Account Management – Registration issues, email verification, password reset, and login problems.",
      service2: "2. Billing & Subscription – Plan upgrades, PayPal payments, refund queries, and invoice verification.",
      service3: "3. Platform Feedback – Suggestions for improvement and new feature requests.",

      // Remote Assistance Section
      remoteTitle: "4. Remote Assistance and PDPA Compliance",
      remoteText1: "Jerry's AI may offer remote diagnostic support to resolve software or account issues. Before any session begins, the user will receive a PDPA Consent Form and must grant explicit approval.",
      remoteText2: "All remote sessions are recorded for security and training purposes.",

      // Response Times Section
      responseTitle: "5. Expected Response Times",
      responseText1: "• Typical response within 24 - 48 hours for most queries.",
      responseText2: "• Complex technical issues may take up to 72 hours for resolution.",

      // Confidentiality Section
      confidentialityTitle: "6. Confidentiality and Data Protection",
      confidentialityText: "All support interactions comply with the Personal Data Protection Act (PDPA) and Jerry's AI Privacy Policy. User data is handled only for troubleshooting and is never shared with unauthorized third parties.",

      // Feedback Section
      feedbackTitle: "7. Feedback and Continuous Improvement",
      feedbackText1: "Jerry's AI values user input to improve service quality.",
      feedbackText2: "Share your ideas at feedback@jerry-ai.net or participate in quarterly user surveys sent via email.",

      // Footer
      updated: "Updated 1st November 2025",
      copyright: "© 2025 Jerry's AI Support Division | All Rights Reserved",

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
    }),
    []
  );

  // =========================
  // 2️⃣ TRANSLATED STATE
  // =========================
  const [T, setT] = useState(EN);
  const t = (key) => T[key] || EN[key] || key;

  // =========================
  // 3️⃣ TRANSLATE WHEN LANGUAGE CHANGES
  // =========================
  useEffect(() => {
    let cancelled = false;

    async function runTranslation() {
      if (!targetLang || targetLang === "eng_Latn") {
        setT(EN);
        return;
      }

      try {
        const keys = Object.keys(EN);
        const texts = keys.map((k) => EN[k]);

        const translated = await nllbTranslateBatch({
          q: texts,
          source: "eng_Latn",
          target: targetLang,
        });

        if (cancelled) return;

        const next = { ...EN };
        keys.forEach((k, i) => {
          if (translated[i]) next[k] = translated[i];
        });

        setT(next);
      } catch {
        if (!cancelled) setT(EN);
      }
    }

    runTranslation();
    return () => {
      cancelled = true;
    };
  }, [targetLang, EN]);

  // Inline styles
  const styles = {
    container: {
      maxWidth: "960px",
      width: "100%",
      margin: "0 auto",
      padding: "8px 16px 0 16px",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "48px",
      color: "#10a7ff",
      textAlign: "center",
      margin: "0 0 8px 0",
      fontWeight: "800",
    },
    contentCard: {
      width: "100%",
      background: "rgba(255, 255, 255, 0.62)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
      padding: "20px",
      boxShadow: "0 10px 26px rgba(0, 0, 0, .10)",
      marginBottom: "0",
    },
    sectionTitle: {
      fontSize: "24px",
      color: "#10a7ff",
      margin: "20px 0 12px 0",
      fontWeight: "700",
    },
    paragraph: {
      lineHeight: "1.75",
      fontSize: "16px",
      color: "#111827",
      margin: "0 0 12px 0",
    },
    list: {
      margin: "0 0 12px 0",
      paddingLeft: "20px",
    },
    listItem: {
      lineHeight: "1.75",
      fontSize: "16px",
      color: "#111827",
      margin: "0 0 6px 0",
    },
    emailLink: {
      color: "#10a7ff",
      textDecoration: "none",
    },
    updated: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#666",
      fontStyle: "italic",
    },
    footerInner: {
      maxWidth: "100%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
      alignItems: "start",
    },
    footerTitle: {
      fontWeight: "800",
      marginBottom: "10px",
      opacity: ".95",
      textAlign: "center",
      color: "#fff",
    },
    footerLinks: {
      textAlign: "center",
    },
    footerLink: {
      display: "block",
      color: "rgba(255, 255, 255, .90)",
      padding: "6px 0",
      fontSize: "13px",
      whiteSpace: "nowrap",
      overflow: "visible",
      textOverflow: "unset",
      wordBreak: "normal",
      textDecoration: "none",
    },
    copyright: {
      margin: "18px auto 0",
      opacity: ".75",
      fontSize: "13px",
      textAlign: "left",
      color: "#fff",
    }
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="brand">
          <img
            src={ASSET("/images/logo.png")}
            className="logo"
            alt="Jerry's AI Logo"
          />
        </Link>

        <div className="header-center">
          <Link to="/" className="title-link">
            <span className="title">Jerry's AI</span>
          </Link>
        </div>

        <LTLanguageSwitcher
          globeSrc={ASSET("/images/general/icons/globe.png")}
          onChange={setTargetLang}
        />
      </header>

      <div className="page">
        <div style={styles.container}>
          <h1 style={styles.title}>{t("supportTitle")}</h1>

          <div style={styles.contentCard}>
            {/* Overview Section */}
            <h2 style={styles.sectionTitle}>{t("overviewTitle")}</h2>
            <p style={styles.paragraph}>{t("overviewText")}</p>

            {/* Contact Channels Section */}
            <h2 style={styles.sectionTitle}>{t("contactTitle")}</h2>
            <p style={styles.paragraph}>
              {t("contactGeneral")}{" "}
              <a href="mailto:support@jerry-ai.net" style={styles.emailLink}>
                {t("contactGeneralEmail")}
              </a>
              <br />
              {t("contactPayment")}{" "}
              <a href="mailto:payment@jerry-ai.net" style={styles.emailLink}>
                {t("contactPaymentEmail")}
              </a>
              <br />
              {t("contactFeedback")}{" "}
              <a href="mailto:feedback@jerry-ai.net" style={styles.emailLink}>
                {t("contactFeedbackEmail")}
              </a>
            </p>

            {/* Service Categories Section */}
            <h2 style={styles.sectionTitle}>{t("serviceTitle")}</h2>
            <div style={styles.list}>
              <p style={styles.listItem}>{t("service1")}</p>
              <p style={styles.listItem}>{t("service2")}</p>
              <p style={styles.listItem}>{t("service3")}</p>
            </div>

            {/* Remote Assistance Section */}
            <h2 style={styles.sectionTitle}>{t("remoteTitle")}</h2>
            <p style={styles.paragraph}>{t("remoteText1")}</p>
            <p style={styles.paragraph}>{t("remoteText2")}</p>

            {/* Response Times Section */}
            <h2 style={styles.sectionTitle}>{t("responseTitle")}</h2>
            <div style={styles.list}>
              <p style={styles.listItem}>{t("responseText1")}</p>
              <p style={styles.listItem}>{t("responseText2")}</p>
            </div>

            {/* Confidentiality Section */}
            <h2 style={styles.sectionTitle}>{t("confidentialityTitle")}</h2>
            <p style={styles.paragraph}>{t("confidentialityText")}</p>

            {/* Feedback Section */}
            <h2 style={styles.sectionTitle}>{t("feedbackTitle")}</h2>
            <p style={styles.paragraph}>{t("feedbackText1")}</p>
            <p style={styles.paragraph}>{t("feedbackText2")}</p>

            {/* Updated Date */}
            <div style={styles.updated}>{t("updated")}</div>
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
    <Link to="/GeneralServices">{t("generalServices")}</Link>  {/* ✅ Changed from "/services" to "/GeneralServices" */}
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
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="copyright">{t("copyright")}</div>
        </footer>

      </div>
    </>
  );
};

export default Support;
