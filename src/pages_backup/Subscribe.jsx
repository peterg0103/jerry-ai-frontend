import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./Subscribe.css"; // Import the CSS file

const Subscribe = ({ targetLang, setTargetLang }) => {
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
  const EN = useMemo(
    () => ({
      // Page Title
      subscribeTitle: "Subscription Plans",

      // Intro Text
      introText1: "Are you ready to take your experience with Jerry's AI to the next level? Our subscription plans offer powerful features tailored to your needs. Whether you're looking for AI-powered chat assistance, digital marketing tools, or advanced web and app development, we have the right plan for you. Stay ahead with premium features and exceptional customer support, all at an affordable price!",
      introText2: "Subscribing to one of our plans grants you exclusive access to our wide range of AI services. Each plan is designed to help you maximize your potential and achieve your goals with cutting-edge technology. Our easy-to-use interface and continuous support will ensure you make the most out of every service we offer.",

      // Plan Titles
      planJA001: "JA#001",
      planJA002: "JA#002",
      planJA003: "JA#003",
      planJA004: "JA#004",
      planJA005: "JA#005",
      planJA006: "JA#006",
      planJA007: "JA#007",
      planJA008: "JA#008",
      planJA009: "JA#009",
      planJA010: "JA#010",
      planJA011: "JA#011",
      planJA012: "JA#012",

      // Plan Names
      planName001: "Starter Plan",
      planName002: "Banner Placement",
      planName003: "Educational",
      planName004: "Web Development",
      planName005: "App Development",
      planName006: "Digital Marketing",
      planName007: "Launch SEO",
      planName008: "AI Voice Translator",
      planName009: "Analyzing Data & Report",
      planName010: "Enhancing CyberSecurity",
      planName011: "Records Meeting",
      planName012: "Find My Phone Location",

      // Plan Subtitles
      planSub001: "General Queries & Discussion",
      planSub002: "Best Value - Order Now",
      planSub003: "Children & Adults",
      planSub004: "Full-stack Solutions",
      planSub005: "iOS & Android Apps",
      planSub006: "Online Platform Usage",
      planSub007: "With Platform",
      planSub008: "130+ Languages",
      planSub009: "Stock & Crypto Analysis",
      planSub010: "Complete Security Suite",
      planSub011: "Automated Transcription",
      planSub012: "Global Phone Tracking",

      // Plan Prices
      price001: "$0.10/month",
      price002: "$0.20/month",
      price003: "$0.30/month",
      price004: "$0.40/month",
      price005: "$0.50/month",
      price006: "$0.60/month",
      price007: "$0.70/month",
      price008: "$0.80/month",
      price009: "$0.90/month",
      price010: "$1.00/month",
      price011: "$1.10/month",
      price012: "$1.20/month",

      // Plan Icons
      icon001: "💎",
      icon002: "📢",
      icon003: "🌟",
      icon004: "🌐",
      icon005: "📱",
      icon006: "📈",
      icon007: "🔍",
      icon008: "🌍",
      icon009: "📊",
      icon010: "🛡️",
      icon011: "🎙️",
      icon012: "📍",

      // Plan Features - JA#001
      features001: [
        "Unlimited chat with AI",
        "Priority response speed",
        "Voice-to-text & AI voice replies",
        "Chat history (stored for 30 days)",
        "Download app for iOS/Android"
      ],

      // Plan Features - JA#002
      features002: [
        "Premium banner placement",
        "Targeted audience reach",
        "Real-time performance analytics",
        "Mobile-optimized designs",
        "ROI tracking dashboard"
      ],

      // Plan Features - JA#003
      features003: [
        "Foundational literacy programs",
        "Advanced career skill development",
        "Personalized learning paths",
        "Bite-sized interactive modules",
        "Real-time progress tracking",
        "Adaptive difficulty levels"
      ],

      // Plan Features - JA#004
      features004: [
        "Full-stack web development",
        "Python, Java, C#, HTML, CSS, etc.",
        "Front-end & back-end solutions",
        "Responsive design implementation",
        "Database integration",
        "Ongoing maintenance support"
      ],

      // Plan Features - JA#005
      features005: [
        "iOS & Android native apps",
        "Cross-platform development",
        "UI/UX design services",
        "App store deployment",
        "API integration",
        "Post-launch updates"
      ],

      // Plan Features - JA#006
      features006: [
        "Social media management",
        "Campaign performance analytics",
        "Content strategy development",
        "Lead generation tools",
        "Conversion rate optimization"
      ],

      // Plan Features - JA#007
      features007: [
        "Automated SEO analysis",
        "Competitor tracking",
        "Keyword optimization",
        "Performance reporting",
        "Backlink monitoring",
        "Rank tracking dashboard"
      ],

      // Plan Features - JA#008
      features008: [
        "130+ language translation",
        "Text-to-speech in all languages",
        "Mobile-optimized interface",
        "Real-time conversation mode",
        "Offline translation capability",
        "Document translation service"
      ],

      // Plan Features - JA#009
      features009: [
        "Stock market analysis",
        "Cryptocurrency tracking",
        "Predictive analytics",
        "Custom report generation",
        "Real-time data visualization",
        "Investment recommendations"
      ],

      // Plan Features - JA#010
      features010: [
        "Security code audit",
        "Firewall configuration",
        "Vulnerability assessment",
        "Threat monitoring",
        "Security protocol implementation",
        "24/7 security alerts"
      ],

      // Plan Features - JA#011
      features011: [
        "Automated meeting transcription",
        "Action item extraction",
        "Voice recognition technology",
        "Meeting summary generation",
        "Cloud storage integration",
        "Multi-speaker identification"
      ],

      // Plan Features - JA#012
      features012: [
        "Global phone number tracking",
        "Country code support",
        "Real-time location data",
        "Privacy-compliant searches",
        "Mobile network integration",
        "Emergency contact features"
      ],

      // Button Text
      subscribeButton: "Subscribe Now",

      // Rules Section
      rulesTitle: "Billing & Service Rules",
      rulesIntro: "Important Payment Information:",
      rulesList: [
        "Order now – Pay directly to our PayPal account",
        "Service will auto-charge your bank card on a monthly basis",
        "If payment fails on the second month or any following months, service is terminated immediately",
        "An email notification will be sent from payment@jerry-ai.net informing you of service termination",
        "To resume service, a new subscription is required"
      ],

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

  // Handle subscribe button click
  const handleSubscribe = (planId, planName) => {
    alert(`Redirecting to PayPal for ${planId} - ${planName} subscription\n\nNote: Service will auto-charge monthly. If payment fails, service will be terminated and you'll need to resubscribe.`);
  };

  // State for hover effects
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  // Plan data array
  const plans = [
    { id: "JA#001", name: t("planName001"), subtitle: t("planSub001"), price: t("price001"), icon: t("icon001"), features: t("features001") },
    { id: "JA#002", name: t("planName002"), subtitle: t("planSub002"), price: t("price002"), icon: t("icon002"), features: t("features002") },
    { id: "JA#003", name: t("planName003"), subtitle: t("planSub003"), price: t("price003"), icon: t("icon003"), features: t("features003") },
    { id: "JA#004", name: t("planName004"), subtitle: t("planSub004"), price: t("price004"), icon: t("icon004"), features: t("features004") },
    { id: "JA#005", name: t("planName005"), subtitle: t("planSub005"), price: t("price005"), icon: t("icon005"), features: t("features005") },
    { id: "JA#006", name: t("planName006"), subtitle: t("planSub006"), price: t("price006"), icon: t("icon006"), features: t("features006") },
    { id: "JA#007", name: t("planName007"), subtitle: t("planSub007"), price: t("price007"), icon: t("icon007"), features: t("features007") },
    { id: "JA#008", name: t("planName008"), subtitle: t("planSub008"), price: t("price008"), icon: t("icon008"), features: t("features008") },
    { id: "JA#009", name: t("planName009"), subtitle: t("planSub009"), price: t("price009"), icon: t("icon009"), features: t("features009") },
    { id: "JA#010", name: t("planName010"), subtitle: t("planSub010"), price: t("price010"), icon: t("icon010"), features: t("features010") },
    { id: "JA#011", name: t("planName011"), subtitle: t("planSub011"), price: t("price011"), icon: t("icon011"), features: t("features011") },
    { id: "JA#012", name: t("planName012"), subtitle: t("planSub012"), price: t("price012"), icon: t("icon012"), features: t("features012") },
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
        <div className="subscribe-container">
          {/* Intro Section */}
          <div className="subscribe-intro-section">
            <h1 className="subscribe-title">{t("subscribeTitle")}</h1>
            <div className="subscribe-intro-text">
              <p className="subscribe-intro-paragraph">{t("introText1")}</p>
              <p className="subscribe-intro-paragraph">{t("introText2")}</p>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="subscribe-plans-grid">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`subscribe-plan-card ${hoveredPlan === index ? 'subscribe-plan-card-hover' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <div className="subscribe-plan-header">
                  <span className="subscribe-plan-id">{plan.id}</span>
                  <span className="subscribe-plan-icon">{plan.icon}</span>
                </div>
                <div className="subscribe-plan-price">{plan.price}</div>
                <h3 className="subscribe-plan-title">{plan.name}</h3>
                <div className="subscribe-plan-subtitle">{plan.subtitle}</div>
                <div className="subscribe-plan-features">
                  <ul className="subscribe-plan-features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="subscribe-plan-feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`subscribe-btn ${hoveredBtn === index ? 'subscribe-btn-hover' : ''}`}
                  onMouseEnter={() => setHoveredBtn(index)}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={() => handleSubscribe(plan.id, plan.name)}
                >
                  {t("subscribeButton")}
                </button>
              </div>
            ))}
          </div>

          {/* Rules Section */}
          <div className="subscribe-rules-section">
            <h2 className="subscribe-rules-title">{t("rulesTitle")}</h2>
            <div className="subscribe-rules">
              <p><strong className="subscribe-rules-strong">{t("rulesIntro")}</strong></p>
              <ul className="subscribe-rules-list">
                {t("rulesList").map((rule, index) => (
                  <li key={index} className="subscribe-rules-item">{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="subscribe-footer-inner">
            <div>
              <div className="subscribe-footer-title">{t("footerCompany")}</div>
              <div className="subscribe-footer-links">
                <Link to="/about" className="subscribe-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="subscribe-footer-link">{t("support")}</Link>
                <Link to="/contact" className="subscribe-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="subscribe-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="subscribe-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="subscribe-footer-title">{t("footerServices")}</div>
              <div className="subscribe-footer-links">
                <Link to="/subscribe" className="subscribe-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="subscribe-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="subscribe-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="subscribe-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="subscribe-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="subscribe-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="subscribe-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="subscribe-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="subscribe-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="subscribe-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="subscribe-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="subscribe-footer-title">{t("footerLegality")}</div>
              <div className="subscribe-footer-links">
                <Link to="/terms" className="subscribe-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="subscribe-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="subscribe-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="subscribe-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="subscribe-footer-title">{t("footerConnection")}</div>
              <div className="subscribe-footer-links">
                <a href="#" className="subscribe-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="subscribe-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="subscribe-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="subscribe-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="subscribe-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="subscribe-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Subscribe;
