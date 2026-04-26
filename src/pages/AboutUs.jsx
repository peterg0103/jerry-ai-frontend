import React, { useEffect, useMemo } from "react";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import "./AboutUs.css";

const AboutUs = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const EN = useMemo(() => ({
    aboutTitle: "About Us",
    p1: "Over the years in the field of web development, Jerry - GP., the Founder and CEO of Jerry's AI, has witnessed firsthand how narrow and unpredictable the path to building a successful startup can be. What separates companies that thrive from those that fade isn't flashy valuations or the latest technology — it's the people.",
    p2: "Jerry firmly believes that long-term success is built on strong teams, a unified purpose, and a company culture rooted in trust, collaboration, and continuous growth. These values have enabled Jerry's AI to overcome countless challenges and become a trusted name, securing partnerships with reputable clients around the globe.",
    p3: "His journey began in 2015, a path marked by relentless learning, starting from the basics and culminating in the achievement of his academic goals. Jerry earned a Bachelor of Business Administration and a Degree in Professional IT, which laid the foundation for his passion for technology and innovation.",
    p4: "Jerry had excelled academically and deepened his interest in digital innovation. With a forward-thinking mindset, he has been instrumental in product development across various platforms — including operating systems, Android, and iOS.",
    p5: "He is also deeply committed to building diverse, high-performing teams that bring together individuals from different backgrounds to achieve extraordinary results. His leadership reflects a commitment to excellence, innovation, and fostering an inclusive workplace where creativity and collaboration drive success.",
    footerCompany: "Company",
    footerServices: "Services",
    footerLegality: "Legality",
    footerConnection: "Connection",
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
  }), []);

  const { translatedTexts } = useDeepSeekTranslation(EN, targetLang);
  
  const t = (key) => translatedTexts[key] || EN[key];

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
        <main className="about-page-wrapper">
          <h1 className="about-title">{t("aboutTitle")}</h1>
          <div className="about-content-card">
            <p>{t("p1")}</p>
            <img className="about-float-right" src={ASSET("/images/general/icons/jerry.png")} alt="Jerry - Founder & CEO" />
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <img className="about-float-left" src={ASSET("/icons/big_group_8_2.png")} alt="Jerry's AI Team" />
            <p>{t("p4")}</p>
            <p className="about-last-paragraph">{t("p5")}</p>
          </div>
        </main>

        <footer>
          <div className="footer-inner">
            <div>
              <div className="footer-title">{t("footerCompany")}</div>
              <div className="footer-links">
                <Link to="/aboutus">{t("aboutUs")}</Link>
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
                <a href="/">{t("facebook")}</a>
                <a href="/">{t("linkedin")}</a>
                <a href="/">{t("twitter")}</a>
                <a href="/">{t("tiktok")}</a>
                <a href="/">{t("telegram")}</a>
              </div>
            </div>
          </div>
          <div className="copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
