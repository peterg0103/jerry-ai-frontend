import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const AnalyseData = ({ targetLang, setTargetLang }) => {
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
      // Page Title
      analyseTitle: "Analyzing Data & Report",

      // Intro Text
      introText: "The introduction section of a report on AI analyzing data and reporting should provide a concise overview of the project, establishing its context, purpose, methodology, and the key findings the reader can expect.",

      // Image Caption
      imageCaption: "AI-Powered Data Analysis & Reporting",

      // Section Titles
      essentialTitle: "Essential Information for the Introduction",
      frameworkTitle: "Comprehensive Analysis Framework",
      reportingTitle: "Reporting & Presentation",

      // Essential Section Content
      purposeText: "Clearly state the primary reason for the report and the specific goals the AI analysis aimed to achieve. This prevents the report from being a mere \"data dump\" and focuses attention on the relevant outcomes.",
      
      chartIntro: "Able to develop 5 types of different charts:",
      chart1: "Bar Chart",
      chart2: "Round/Circle Chart",
      chart3: "Floating Chart",
      chart4: "3D Chart",
      chart5: "Future Prediction Chart",

      // Framework Section Content
      backgroundText: "Provide relevant background information on the topic or business problem being addressed. Explain why this analysis is important and what organizational goals or challenges it relates to.",
      
      problemText: "Define the specific \"big questions\" the data analysis is intended to answer or the problem it aims to solve.",
      
      methodologyText: "Briefly outline that AI and machine learning techniques were used for the analysis. This establishes the credibility of the findings and gives the reader insight into the approach, but detailed technical explanations should be reserved for the body or an appendix.",
      
      dataSourcesText: "Mention generally where the data came from (e.g., transactional databases, customer feedback, IoT sensors) to provide context for the scope of the analysis.",

      // Reporting Section Content
      findingsText: "Conclude the introduction with a brief summary of the most important findings or a \"road map\" of what the reader can expect in the following sections. This prepares the audience for the conclusions and recommendations that follow.",
      
      audienceText: "Tailor the language and technicality to the intended audience (e.g., executives may need a high-level summary, while technical supervisors might need more detail).",
      
      conclusionText: "By including these elements, the introduction will effectively set the stage, manage audience expectations, and highlight the value derived from the AI-powered data analysis.",

      // CTA Section
      ctaTitle: "Unlock Advanced Data Analysis Features",
      ctaText: "Get access to our powerful AI data analysis tools with 5 different chart types, predictive analytics, and comprehensive reporting capabilities. Subscribe to JA#009 plan for just $0.90/month.",
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
    analysisImage: {
      width: "236px",
      height: "150px",
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

  // State for hover effects
  const [hoveredFooterLink, setHoveredFooterLink] = useState({ section: null, index: null });

  // Chart types list
  const chartTypes = [
    t("chart1"),
    t("chart2"),
    t("chart3"),
    t("chart4"),
    t("chart5"),
  ];

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
          <div style={styles.card}>
            <h1 style={styles.title}>{t("analyseTitle")}</h1>

            <div style={styles.introText}>
              <p>{t("introText")}</p>
            </div>

            <div style={styles.imageSection}>
              <img
               src={ASSET("/images/general/icons/analysis_data.png")}
                alt="Data Analysis Visualization"
                style={styles.analysisImage}
              />
              <div style={styles.imageCaption}>{t("imageCaption")}</div>
            </div>

            <div style={styles.content}>
              {/* Essential Information Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("essentialTitle")}</h2>
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Purpose and Objectives:</span> {t("purposeText")}
                </p>
                
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>{t("chartIntro")}</span>
                </p>
                <ul style={styles.list}>
                  {chartTypes.map((chart, index) => (
                    <li key={index} style={styles.listItem}>{chart}</li>
                  ))}
                </ul>
              </div>

              {/* Comprehensive Analysis Framework Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("frameworkTitle")}</h2>
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Background and Context:</span> {t("backgroundText")}
                </p>
                
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Problem Statement or Research Question:</span> {t("problemText")}
                </p>
                
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Brief Mention of Methodology:</span> {t("methodologyText")}
                </p>
                
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Data Sources (Overview):</span> {t("dataSourcesText")}
                </p>
              </div>

              {/* Reporting & Presentation Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("reportingTitle")}</h2>
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Overview of Key Findings/Road Map:</span> {t("findingsText")}
                </p>
                
                <p style={styles.contentParagraph}>
                  <span style={styles.highlight}>Audience Consideration:</span> {t("audienceText")}
                </p>
                
                <p style={styles.contentParagraph}>{t("conclusionText")}</p>
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

export default AnalyseData;
