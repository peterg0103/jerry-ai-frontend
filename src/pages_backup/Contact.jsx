import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const Contact = ({ targetLang, setTargetLang }) => {
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


  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  // =========================
  // 1️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = useMemo(
    () => ({
      contactTitle: "Contact Us",
      
      // Form Labels
      dateLabel: "Date:",
      fromLabel: "From:",
      subjectLabel: "Subject:",
      messageLabel: "Message:",
      
      // Subject Options
      subjectPlaceholder: "-- Select Subject --",
      subjectGeneral: "General Enquiries",
      subjectTechnical: "Technical Assistant",
      subjectSuggestion: "Improvement / Suggestion",
      subjectOther: "Other Issues",
      
      // Placeholders
      emailPlaceholder: "Your email address",
      messagePlaceholder: "Write your message here (up to 500 words)...",
      
      // Button
      submitButton: "Send Enquiry",

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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "960px",
      width: "100%",
      margin: "0 auto",
      padding: "8px 16px 0 16px",
      boxSizing: "border-box",
      
      // Mobile styles for container
      '@media (max-width: 768px)': {
        padding: "5px 10px 0 10px",
      },
      
      '@media (max-width: 480px)': {
        padding: "0 5px",
      },
    },
    
    title: {
      fontSize: "48px",
      color: "#10a7ff",
      textAlign: "center",
      margin: "0 0 8px 0",
      fontWeight: "800",
    },
    
    form: {
      backgroundColor: "#ffffff",
      padding: "25px",
      borderRadius: "10px",
      width: "100%",
      maxWidth: "500px",
      margin: "30px auto",
      boxShadow: "0 10px 26px rgba(0, 0, 0, .10)",
      border: "1px solid rgba(0, 0, 0, .06)",
      boxSizing: "border-box",
      
      // Mobile styles for form
      '@media (max-width: 768px)': {
        width: "95%",
        padding: "20px 15px",
        margin: "10px auto",
        maxWidth: "100%",
      },
      
      '@media (max-width: 480px)': {
        width: "100%",
        padding: "15px 12px",
        margin: "5px auto",
        borderRadius: "8px",
      },
    },
    
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: "#111827",
    },
    
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      fontSize: "16px",
    },
    
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      fontSize: "16px",
      backgroundColor: "#fff",
    },
    
    textarea: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      fontSize: "16px",
      height: "150px",
      resize: "vertical",
      fontFamily: "inherit",
    },
    
    submitButton: {
      backgroundColor: "#10a7ff",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
      width: "100%",
      transition: "background-color 0.3s",
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
          <h1 style={styles.title}>{t("contactTitle")}</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>{t("dateLabel")}</label>
            <input
              type="text"
              style={styles.input}
              value={getCurrentDateTime()}
              readOnly
            />

            <label style={styles.label} htmlFor="email">{t("fromLabel")}</label>
            <input
              type="email"
              id="email"
              name="email"
              style={styles.input}
              required
              placeholder={t("emailPlaceholder")}
            />

            <label style={styles.label} htmlFor="subject">{t("subjectLabel")}</label>
            <select
              id="subject"
              name="subject"
              style={styles.select}
              required
            >
              <option value="">{t("subjectPlaceholder")}</option>
              <option value="General Enquiries">{t("subjectGeneral")}</option>
              <option value="Technical Assistant">{t("subjectTechnical")}</option>
              <option value="Improvement/Suggestion">{t("subjectSuggestion")}</option>
              <option value="Other Issues">{t("subjectOther")}</option>
            </select>

            <label style={styles.label} htmlFor="message">{t("messageLabel")}</label>
            <textarea
              id="message"
              name="message"
              style={styles.textarea}
              maxLength="3000"
              placeholder={t("messagePlaceholder")}
            ></textarea>

            <button
              type="submit"
              style={styles.submitButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#0a8ad0"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#10a7ff"}
            >
              {t("submitButton")}
            </button>
          </form>
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

export default Contact;
