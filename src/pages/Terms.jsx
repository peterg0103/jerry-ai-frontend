import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";

const Terms = ({ targetLang, setTargetLang }) => {
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
  // 1️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = {
    // Page Title
    termsTitle: "Terms & Conditions",
    
    // Hero Subtitle
    heroSubtitle: "These Terms and Conditions are a legally binding agreement between you and Jerry's AI. By using our services, you agree to comply with these terms.",

    // Intro Section
    intro1: "These Terms and Conditions (\"Terms\") are a legally binding agreement between you (\"User,\" \"you,\" or \"your\") and Jerry's AI Pte. Ltd. (\"Jerry's AI\", \"we\", \"us\", or \"our\"), a company registered in Singapore.",
    intro2: "By accessing or using our services, websites, applications, artificial intelligence tools, and any other platforms operated by Jerry's AI (collectively referred to as \"Services\"), you agree to comply with and be bound by these Terms. Please read them carefully.",

    // Section Titles and Content
    section1Title: "Changes to Terms",
    section1Text: "We may update these Terms from time to time. Continued use of our Services after changes implies your acceptance. If you do not agree, please discontinue use of the Services.",

    section2Title: "Eligibility and Account",
    section2Text: "You must be at least 18 years old, or 13 and above with parental supervision, to use our Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",

    section3Title: "Use of Services",
    section3Intro: "You agree not to:",
    section3Item1: "Violate any laws of Singapore or other applicable jurisdictions",
    section3Item2: "Use our Services to harm, harass, or exploit others",
    section3Item3: "Upload or share illegal, obscene, harmful, or misleading content",
    section3Item4: "Reverse engineer, scrape, hack, or interfere with the Services",
    section3Item5: "Use our Services for automated data extraction or spam",

    section4Title: "Content and Ownership",
    section4Sub1: "User Content:",
    section4Text1: "You retain rights to content you generate through the Services. You must ensure that you have the right to use any content you submit.",
    section4Sub2: "AI Output:",
    section4Text2: "Jerry's AI does not claim ownership of the output generated for you, but disclaims all liability for how it is used.",
    section4Sub3: "Intellectual Property:",
    section4Text3: "All rights, title, and interest in and to the Services and software are owned by Jerry's AI. Use of our logos, trademarks, or brand identity is prohibited without written permission.",

    section5Title: "Fees and Payments",
    section5Intro: "Some Services are free; others require payment. Paid services are billed as described on our Pricing page. All payments are:",
    section5Item1: "Made in Singapore Dollars (SGD)",
    section5Item2: "Subject to prevailing GST or VAT (if applicable)",
    section5Item3: "Non-refundable unless otherwise stated",
    section5Item4: "Automatically deducted on a monthly basis unless canceled by the User",

    section6Title: "Termination",
    section6Text: "We may suspend or terminate your access to our Services at any time for any reason, including breach of these Terms. You may also stop using the Services at any time.",

    section7Title: "Limitation of Liability",
    section7Item1: "Jerry's AI provides services \"as-is\" with no warranties",
    section7Item2: "We are not liable for indirect or consequential damages",
    section7Item3: "Our liability is limited to the fees you paid in the last 6 months (if any)",

    section8Title: "Indemnity",
    section8Text: "You agree to indemnify and hold harmless Jerry's AI, its staff, and affiliates against any claims, losses, or liabilities arising from your use of our Services or breach of these Terms.",

    section9Title: "Third-Party Links and Tools",
    section9Text: "Our Services may link to third-party websites or tools. Jerry's AI is not responsible for their content or terms. Use them at your own risk.",

    section10Title: "Privacy",
    section10Text: "Please refer to our",
    privacyLink: "Privacy Policy",
    section10End: "for details on how your data is collected, used, and protected in compliance with the Personal Data Protection Act (PDPA) of Singapore.",

    section11Title: "Governing Law and Dispute Resolution",
    section11Text: "These Terms are governed by the laws of Singapore. Any disputes shall be resolved through amicable discussions. If unresolved, parties may submit to the courts of Singapore.",

    section12Title: "General Provisions",
    section12Item1: "Entire Agreement: These Terms constitute the full agreement between you and Jerry's AI.",
    section12Item2: "No Waiver: Failure to enforce any right does not constitute a waiver.",
    section12Item3: "Severability: If any clause is found unenforceable, the remainder remains valid.",
    section12Item4: "Force Majeure: We are not liable for events beyond our control.",

    section13Title: "All Policies",
    section13Text: "These Terms & Conditions, along with all other policies indicated on the Jerry's AI website, may be updated periodically without prior notice. Users are responsible for reviewing these policies on an ongoing basis to stay informed.",

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
      margin: "30px auto",
      padding: "0 16px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      background: "rgba(255, 255, 255, 0.62)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
      padding: "18px 18px",
      boxShadow: "0 10px 26px rgba(0, 0, 0, .10)",
    },
    title: {
      margin: "6px 0 10px",
      fontSize: "34px",
      color: "#0f172a",
      textAlign: "center",
      letterSpacing: ".3px",
    },
    heroSubtitle: {
      margin: "0 0 18px",
      textAlign: "center",
      color: "#334155",
      fontSize: "15px",
      lineHeight: "1.55",
    },
    intro: {
      margin: "0 0 10px",
      fontWeight: "700",
      color: "#0f172a",
    },
    paragraph: {
      margin: "0 0 12px",
      lineHeight: "1.75",
      color: "#111827",
    },
    section: {
      margin: "16px 0 18px",
      padding: "14px 14px",
      background: "rgba(255, 255, 255, .78)",
      border: "1px solid rgba(0, 0, 0, .06)",
      borderRadius: "0",
    },
    secHead: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      margin: "0 0 10px",
    },
    secNum: {
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      color: "#0f172a",
      border: "1px solid rgba(0, 0, 0, .14)",
      background: "rgba(240, 244, 255, .9)",
      borderRadius: "0",
      flex: "0 0 auto",
      fontSize: "13px",
    },
    secTitle: {
      margin: "2px 0 0",
      fontSize: "18px",
      color: "#0f172a",
    },
    list: {
      margin: "8px 0 0 22px",
      padding: "0",
    },
    listItem: {
      margin: "6px 0",
      color: "#111827",
      lineHeight: "1.75",
    },
    policyBox: {
      padding: "14px 14px",
      background: "rgba(240, 244, 255, .78)",
      border: "1px solid rgba(0, 0, 0, .10)",
      borderRadius: "0",
      color: "#0f172a",
    },
    policyLink: {
      color: "#0b5fbf",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      fontWeight: "700",
    },
  };

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
            <h1 style={styles.title}>{t("termsTitle")}</h1>
            <div style={styles.heroSubtitle}>
              {t("heroSubtitle")}
            </div>

            <div style={styles.section}>
              <p style={styles.intro}>{t("intro1")}</p>
              <p style={styles.paragraph}>{t("intro2")}</p>
            </div>

            {/* Section 1 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>1</div>
                <h2 style={styles.secTitle}>{t("section1Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section1Text")}</p>
            </section>

            {/* Section 2 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>2</div>
                <h2 style={styles.secTitle}>{t("section2Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section2Text")}</p>
            </section>

            {/* Section 3 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>3</div>
                <h2 style={styles.secTitle}>{t("section3Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section3Intro")}</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>{t("section3Item1")}</li>
                <li style={styles.listItem}>{t("section3Item2")}</li>
                <li style={styles.listItem}>{t("section3Item3")}</li>
                <li style={styles.listItem}>{t("section3Item4")}</li>
                <li style={styles.listItem}>{t("section3Item5")}</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>4</div>
                <h2 style={styles.secTitle}>{t("section4Title")}</h2>
              </div>
              <p style={styles.paragraph}><strong>{t("section4Sub1")}</strong> {t("section4Text1")}</p>
              <p style={styles.paragraph}><strong>{t("section4Sub2")}</strong> {t("section4Text2")}</p>
              <p style={styles.paragraph}><strong>{t("section4Sub3")}</strong> {t("section4Text3")}</p>
            </section>

            {/* Section 5 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>5</div>
                <h2 style={styles.secTitle}>{t("section5Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section5Intro")}</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>{t("section5Item1")}</li>
                <li style={styles.listItem}>{t("section5Item2")}</li>
                <li style={styles.listItem}>{t("section5Item3")}</li>
                <li style={styles.listItem}>{t("section5Item4")}</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>6</div>
                <h2 style={styles.secTitle}>{t("section6Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section6Text")}</p>
            </section>

            {/* Section 7 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>7</div>
                <h2 style={styles.secTitle}>{t("section7Title")}</h2>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>{t("section7Item1")}</li>
                <li style={styles.listItem}>{t("section7Item2")}</li>
                <li style={styles.listItem}>{t("section7Item3")}</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>8</div>
                <h2 style={styles.secTitle}>{t("section8Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section8Text")}</p>
            </section>

            {/* Section 9 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>9</div>
                <h2 style={styles.secTitle}>{t("section9Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section9Text")}</p>
            </section>

            {/* Section 10 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>10</div>
                <h2 style={styles.secTitle}>{t("section10Title")}</h2>
              </div>
              <p style={styles.paragraph}>
                {t("section10Text")}{" "}
                <Link to="/privacy" style={styles.policyLink}>
                  {t("privacyLink")}
                </Link>{" "}
                {t("section10End")}
              </p>
            </section>

            {/* Section 11 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>11</div>
                <h2 style={styles.secTitle}>{t("section11Title")}</h2>
              </div>
              <p style={styles.paragraph}>{t("section11Text")}</p>
            </section>

            {/* Section 12 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>12</div>
                <h2 style={styles.secTitle}>{t("section12Title")}</h2>
              </div>
              <ul style={styles.list}>
                <li style={styles.listItem}>{t("section12Item1")}</li>
                <li style={styles.listItem}>{t("section12Item2")}</li>
                <li style={styles.listItem}>{t("section12Item3")}</li>
                <li style={styles.listItem}>{t("section12Item4")}</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section style={styles.section}>
              <div style={styles.secHead}>
                <div style={styles.secNum}>13</div>
                <h2 style={styles.secTitle}>{t("section13Title")}</h2>
              </div>
              <div style={styles.policyBox}>
                {t("section13Text")}
              </div>
            </section>
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

export default Terms;