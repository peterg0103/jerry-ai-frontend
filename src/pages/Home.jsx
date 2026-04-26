import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";

const Home = ({ targetLang, setTargetLang }) => {
  const [banners, setBanners] = useState([]);

  const ASSET = (p) => process.env.PUBLIC_URL + p;

  // =========================
  // 1️⃣ ALL useEffect hooks FIRST
  // =========================
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = useMemo(() => ({
    heroTitle: "Build Smarter. Launch Faster.",
    heroSub: "Your Vision Becomes Reality.",
    login: "Login",
    register: "Register",
    tryNow: "Try Now",
    servicesTitle: "Our Services",
    bannerTitle: "List Your Company Banners",
    comingSoon: "Coming Soon",
    moreComingSoon: "More Coming Soon",
    svcEducation: "Education",
    svcWebDev: "Web Development",
    svcAppDev: "App Development",
    svcLaunchSEO: "Launch SEO",
    svcDigital: "Digital Marketing",
    svcVoice: "AI Voice Translator",
    svcAnalyse: "Analyse Data & Report",
    svcCyber: "CyberSecurity",
    svcPhone: "Find My Phone",
    svcProChat: "Professional AI Chat",
    svcAddBanner: "Add Banner",
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

  // =========================
  // 3️⃣ DEEPSEEK TRANSLATION HOOK
  // =========================
  const { translatedText, isTranslating, error } = useDeepSeekTranslation(EN, targetLang);

  const t = (key) => {
    if (!translatedText) return EN[key] || key;
    return translatedText[key] || EN[key] || key;
  };

  // =========================
  // 4️⃣ BANNER DATA (MOVED HERE - BEFORE useEffect THAT USES IT)
  // =========================
  const bannerData = [
    { img: ASSET("/images/banners/c-1.png"), url: "https://nearshoreamericas.com/" },
    { img: ASSET("/images/banners/c-2.png"), url: "https://www.temenos.com/press_release/kony-is-now-temenos/" },
    { img: ASSET("/images/banners/c-3.png"), url: "https://www.researchgate.net/" },
    { img: ASSET("/images/banners/c-4.png"), url: "https://phoenixetech.com/" },
    { img: ASSET("/images/banners/c-5.png"), url: "https://bit.ly/FreyrSolutionsWebsite" },
    { img: ASSET("/images/banners/c-6.png"), url: "https://www.capgemini.com/us-en/" },
    { img: ASSET("/images/banners/c-7.png"), url: "https://maqsoftware.com/" },
    { img: ASSET("/images/banners/c-8.png"), url: "https://otsi-global.com/" },
    ...Array(24).fill(null).map((_, i) => ({
      img: ASSET(`/images/banners/c-${(i % 8) + 1}.png`),
      url: `https://example.com/banner-${i + 1}`,
    })),
  ];

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // =========================
  // 5️⃣ BANNER SHUFFLE EFFECT (NOW AFTER bannerData AND shuffleArray)
  // =========================
  useEffect(() => {
    const shuffled = shuffleArray([...bannerData]);
    setBanners(shuffled.slice(0, 32));
  }, []);

  // =========================
  // 6️⃣ LOADING INDICATOR (after all hooks)
  // =========================
 // if (isTranslating && targetLang !== 'en') {
//    return (
//      <>
  //      <header className="header" role="banner">
 //         <Link to="/" className="brand" aria-label="Go to Home">
    //        <img src={ASSET("/images/general/icons/logo.png")} className="logo" alt="Jerry's //AI Logo" />
//          </Link>
//          <div className="header-center">
//            <Link to="/" className="title-link" aria-label="Go to Home">
//              <span className="title">Jerry's AI</span>
 //           </Link>
//          </div>
//          <LTLanguageSwitcher globeSrc={ASSET("/images/general/icons/globe.png")} //onChange={setTargetLang} />
 //       </header>
 //       <div style={{ textAlign: 'center', padding: '50px' }}>
 //         <h3>🌐 Translating to {targetLang}...</h3>
//          <p>Please wait while DeepSeek translates the content.</p>
//        </div>
//      </>
 //   );
 // }

  if (error) {
    console.error('Translation error:', error);
  }

  // =========================
  // 7️⃣ RETURN JSX
  // =========================
  return (
    <>
      <header className="header" role="banner">
        <Link to="/" className="brand" aria-label="Go to Home">
          <img src={ASSET("/images/general/icons/logo.png")} className="logo" alt="Jerry's AI Logo" />
        </Link>
        <div className="header-center">
          <Link to="/" className="title-link" aria-label="Go to Home">
            <span className="title">Jerry's AI</span>
          </Link>
        </div>
        <LTLanguageSwitcher globeSrc={ASSET("/images/general/icons/globe.png")} onChange={setTargetLang} />
      </header>

      <div className="page">
        <main className="page-wrapper">
          <section className="hero">
            <h1>{t("heroTitle")}</h1>
            <div className="sub">{t("heroSub")}</div>
            <div className="actions">
              <Link to="/login" className="btn btn-outline">{t("login")}</Link>
              <Link to="/register" className="btn btn-primary">{t("register")}</Link>
              <Link to="/trynow" className="btn btn-primary">{t("tryNow")}</Link>
            </div>
          </section>

          <div className="section-title">{t("servicesTitle")}</div>

          <section className="services-grid" aria-label="Services">
            <Link to="/education" className="svc-mini">
              <img src={ASSET("/images/general/icons/education.png")} alt="Education" />
              <span>{t("svcEducation")}</span>
            </Link>
            <Link to="/web-development" className="svc-mini">
              <img src={ASSET("/images/general/icons/web-dev-icon.png")} alt="Web Development" />
              <span>{t("svcWebDev")}</span>
            </Link>
            <Link to="/app-development" className="svc-mini">
              <img src={ASSET("/images/general/icons/app-dev-icon.png")} alt="App Development" />
              <span>{t("svcAppDev")}</span>
            </Link>
            <Link to="/seo" className="svc-mini">
              <img src={ASSET("/images/general/icons/seo.png")} alt="Launch SEO" />
              <span>{t("svcLaunchSEO")}</span>
            </Link>
            <Link to="/digital-marketing" className="svc-mini">
              <img src={ASSET("/images/general/icons/digital.png")} alt="Digital Marketing" />
              <span>{t("svcDigital")}</span>
            </Link>
            <Link to="/voice-translator" className="svc-mini">
              <img src={ASSET("/images/general/icons/voice-translator.png")} alt="AI Voice Translator" />
              <span>{t("svcVoice")}</span>
            </Link>
            <Link to="/analyse-data" className="svc-mini">
              <img src={ASSET("/images/general/icons/analysis_data.png")} alt="Analyse Data & Report" />
              <span>{t("svcAnalyse")}</span>
            </Link>
            <Link to="/cybersecurity" className="svc-mini">
              <img src={ASSET("/images/general/icons/cybersecurity.png")} alt="CyberSecurity" />
              <span>{t("svcCyber")}</span>
            </Link>
            <Link to="/find-my-phone" className="svc-mini">
              <img src={ASSET("/images/general/icons/phone.png")} alt="Find My Phone" />
              <span>{t("svcPhone")}</span>
            </Link>
            <Link to="/ai-pro-chat-info" className="svc-mini">
              <img src={ASSET("/images/general/icons/ai_pro_chat.png")} alt="Professional AI Chat" />
              <span>{t("svcProChat")}</span>
            </Link>
            <Link to="/add-banner" className="svc-mini">
              <img src={ASSET("/images/general/icons/marketing-icon.png")} alt="Add Banner" />
              <span>{t("svcAddBanner")}</span>
            </Link>
            <div className="svc-mini" style={{ opacity: 0.6 }}>
              <img src={ASSET("/images/general/icons/globe.png")} alt="Coming Soon" />
              <span>{t("moreComingSoon")}</span>
            </div>
          </section>

          <div className="banner-section">
            <h2>{t("bannerTitle")}</h2>
            <div className="banner-grid">
              {banners.map((banner, index) => (
                <a key={index} href={banner.url} target="_blank" rel="noopener noreferrer" className="banner-item">
                  <img src={banner.img} alt={`Banner ${index + 1}`} />
                </a>
              ))}
            </div>
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

export default Home;
