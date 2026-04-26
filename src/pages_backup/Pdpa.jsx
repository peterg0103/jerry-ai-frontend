import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const Pdpa = ({ targetLang, setTargetLang }) => {
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
      pdpaTitle: "Personal Data Protection (PDPA)",

      // Subtitle
      subtitle: "Jerry's AI is committed to responsible handling of personal data in accordance with Singapore's Personal Data Protection Act (PDPA).",

      // Section 0 - Overview
      overviewTitle: "Overview",
      overview1: "The Personal Data Protection Act (PDPA) is Singapore's data protection law that sets out how organisations must collect, use, disclose, and care for personal data. It promotes accountability and transparency so that individuals understand what data is being collected and why, and it requires organisations to protect that data with reasonable security measures.",
      overview2: "At Jerry's AI, we apply PDPA principles across our website and services by limiting data collection to what is necessary, using data only for clear and legitimate purposes, and giving individuals practical ways to access, correct, withdraw consent, or request deletion of their personal data, where applicable.",

      // Section 1
      section1Title: "1. Understanding Personal Data",
      section1Text: "Personal data refers to information that can identify an individual, whether on its own or when combined with other accessible data. At Jerry's AI, we recognize the importance of protecting such data, especially when collected through our website, applications, or services.",

      // Section 2
      section2Title: "2. About the PDPA",
      section2Text1: "The PDPA establishes a standard framework for managing personal data in Singapore. It ensures responsible handling of personal data and includes measures like the Do Not Call (DNC) Registry, which allows individuals to opt out of receiving unsolicited marketing messages.",
      section2Text2: "This Act works alongside other regulations and applies to Singapore-based businesses and service providers.",

      // Section 3
      section3Title: "3. Our Commitment",
      commitment1: "Collecting only necessary data for legitimate business purposes",
      commitment2: "Using data in a lawful and transparent manner",
      commitment3: "Safeguarding your information against unauthorized access or misuse",
      commitment4: "Allowing users to opt-out, update, or request deletion of their personal data (where applicable)",
      commitment5: "Respecting preferences registered on the DNC Registry",

      // Section 4
      section4Title: "4. Scope of PDPA at Jerry's AI",
      scopeIntro: "This policy applies to all personal data in our possession—whether digital or physical. The PDPA does not apply to:",
      scope1: "Personal data collected by individuals for domestic purposes",
      scope2: "Employee data used internally within our organization",
      scope3: "Government agencies handling public sector data",
      scope4: "Publicly available business contact information (e.g., name, business email)",

      // Section 5 - Data Protection Obligations
      section5Title: "5. Data Protection Obligations",
      obligationsIntro: "Jerry's AI adheres to the following PDPA data protection obligations:",
      obligation1: "Consent: We obtain consent before collecting or using personal data (where required).",
      obligation2: "Purpose Limitation: We use data only for clearly defined purposes.",
      obligation3: "Notification: You will be informed of the reasons your data is being collected.",
      obligation4: "Access & Correction: You may request access or updates to your personal data.",
      obligation5: "Accuracy: We take reasonable steps to keep data accurate and up-to-date.",
      obligation6: "Protection: We implement reasonable security measures to safeguard personal data.",
      obligation7: "Retention Limitation: We retain data only as long as necessary for business/legal reasons.",
      obligation8: "Transfer Limitation: We transfer data overseas only with appropriate protection.",
      obligation9: "Openness: Our data policies are clear and accessible.",
      obligation10: "Accountability: A Data Protection Officer (DPO) oversees our compliance.",

      // Section 6 - DPO Contact
      section6Title: "6. Contacting Our DPO",
      dpoIntro: "For any questions or concerns about how your data is being used, or to submit a request under the PDPA, please contact:",
      dpoTitle: "Data Protection Officer (DPO)",
      dpoEmail: "dpo@jerry-ai.net",

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
    pageWrapper: {
      maxWidth: "960px",
      width: "100%",
      margin: "30px auto",
      padding: "0",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      background: "rgba(255, 255, 255, 0.62)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
      boxShadow: "0 10px 26px rgba(0, 0, 0, .10)",
      padding: "20px 18px",
    },
    title: {
      margin: "6px 0 10px",
      fontSize: "36px",
      color: "#0f172a",
      textAlign: "center",
      letterSpacing: ".3px",
    },
    subtitle: {
      margin: "0 0 18px",
      textAlign: "center",
      color: "#334155",
      fontSize: "15px",
      lineHeight: "1.55",
    },
    content: {
      lineHeight: "1.75",
      fontSize: "16px",
      color: "#111827",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },
    section: {
      margin: "16px 0 18px",
      padding: "14px 14px",
      background: "rgba(255, 255, 255, .78)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
    },
    sectionTitle: {
      margin: "0 0 10px",
      fontSize: "18px",
      color: "#0f172a",
    },
    paragraph: {
      margin: "0 0 12px",
    },
    list: {
      margin: "8px 0 0 22px",
      padding: "0",
    },
    listItem: {
      margin: "6px 0",
    },
    note: {
      padding: "12px 12px",
      borderRadius: "0",
      background: "rgba(240, 244, 255, .80)",
      border: "1px solid rgba(0, 0, 0, .06)",
    },
    noteLink: {
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      color: "#0b5fbf",
      fontWeight: "700",
    },
    meta: {
      marginTop: "14px",
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
      padding: "0 6px",
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
      padding: "6px 0",
      fontSize: "14px",
      color: "rgba(255, 255, 255, .90)",
      whiteSpace: "normal",
      wordBreak: "break-word",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    footerLinkHover: {
      color: "#fff",
      textDecoration: "underline",
    },
    copyright: {
      margin: "18px auto 0",
      opacity: ".75",
      fontSize: "13px",
      textAlign: "center",
      color: "#fff",
    },
  };

  // State for hover effects
  const [hoveredFooterLink, setHoveredFooterLink] = useState({ section: null, index: null });

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
        <main style={styles.pageWrapper} id="main-content">
          <div style={styles.card}>
            <h1 style={styles.title}>{t("pdpaTitle")}</h1>

            <div style={styles.subtitle}>
              {t("subtitle")}
            </div>

            <div style={styles.content}>
              {/* Overview Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("overviewTitle")}</h2>
                <p style={styles.paragraph}>{t("overview1")}</p>
                <p style={styles.paragraph}>{t("overview2")}</p>
              </div>

              {/* Section 1 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section1Title")}</h2>
                <p style={styles.paragraph}>{t("section1Text")}</p>
              </div>

              {/* Section 2 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section2Title")}</h2>
                <p style={styles.paragraph}>{t("section2Text1")}</p>
                <p style={styles.paragraph}>{t("section2Text2")}</p>
              </div>

              {/* Section 3 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section3Title")}</h2>
                <ul style={styles.list}>
                  <li style={styles.listItem}>{t("commitment1")}</li>
                  <li style={styles.listItem}>{t("commitment2")}</li>
                  <li style={styles.listItem}>{t("commitment3")}</li>
                  <li style={styles.listItem}>{t("commitment4")}</li>
                  <li style={styles.listItem}>{t("commitment5")}</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section4Title")}</h2>
                <p style={styles.paragraph}>{t("scopeIntro")}</p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>{t("scope1")}</li>
                  <li style={styles.listItem}>{t("scope2")}</li>
                  <li style={styles.listItem}>{t("scope3")}</li>
                  <li style={styles.listItem}>{t("scope4")}</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section5Title")}</h2>
                <p style={styles.paragraph}>{t("obligationsIntro")}</p>
                <ul style={styles.list}>
                  <li style={styles.listItem}>{t("obligation1")}</li>
                  <li style={styles.listItem}>{t("obligation2")}</li>
                  <li style={styles.listItem}>{t("obligation3")}</li>
                  <li style={styles.listItem}>{t("obligation4")}</li>
                  <li style={styles.listItem}>{t("obligation5")}</li>
                  <li style={styles.listItem}>{t("obligation6")}</li>
                  <li style={styles.listItem}>{t("obligation7")}</li>
                  <li style={styles.listItem}>{t("obligation8")}</li>
                  <li style={styles.listItem}>{t("obligation9")}</li>
                  <li style={styles.listItem}>{t("obligation10")}</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("section6Title")}</h2>
                <div style={styles.note}>
                  <p style={styles.paragraph}>{t("dpoIntro")}</p>
                  <p style={styles.paragraph}>
                    <strong>{t("dpoTitle")}</strong><br />
                    📧 <strong>
                      <a href="mailto:dpo@jerry-ai.net" style={styles.noteLink}>
                        {t("dpoEmail")}
                      </a>
                    </strong>
                  </p>
                </div>
              </div>

              <div style={styles.meta}>
                {t("meta")}
              </div>
            </div>
          </div>
        </main>

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
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
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

export default Pdpa;
