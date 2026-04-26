import React, { useState, useEffect, useMemo } from 'react';
import { usePageTranslation } from '../hooks/usePageTranslation';
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import "./AddBanner.css";

const AddBanner = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const EN = useMemo(() => ({
    bannerTitle: "AI Banner Advertising",
    introText: "The best benefit of adding banners to a website is achieving Hyper-Personalization at Scale, allowing for dynamic, data-driven designs that instantly adapt to individual users, boosting engagement and conversions far beyond static banners, while also saving significant time and cost in creation and iteration. AI enables the rapid generation of countless banner variations, predicting user interests, optimizing for performance (like click-through rates), and ensuring brand consistency across diverse audiences and devices.",
    imageCaption: "Intelligent AI-Powered Banner Design & Optimization",
    benefitsTitle: "Key Benefits of AI Banner Advertising",
    benefitsDesc: "AI transforms banner advertising from static displays into intelligent, responsive marketing assets that deliver measurable results.",
    performanceTitle: "Performance Metrics",
    performanceDesc: "Our AI banner advertising solutions deliver measurable improvements in campaign performance and efficiency.",
    typesTitle: "AI Banner Types & Applications",
    typesDesc: "Our AI technology creates optimized banners for every platform and marketing objective.",
    packageTitle: "Comprehensive Banner Solution",
    packageDesc: "Our AI banner advertising service includes:",
    transformationTitle: "The Transformation Impact",
    transformationDesc: "In essence, AI transforms banner advertising from a static, costly, and time-consuming process into a dynamic, efficient, and highly profitable engine for user engagement and conversion. This technology democratizes high-quality advertising, making sophisticated marketing capabilities accessible to businesses of all sizes while delivering measurable ROI improvements that directly impact the bottom line.",
    benefit1Title: "Personalization at Scale",
    benefit1Desc: "AI analyzes user data to craft banners specifically tailored to each visitor's preferences and behavior, making ads feel like helpful suggestions rather than interruptions.",
    benefit2Title: "Unmatched Efficiency",
    benefit2Desc: "Automates design, layout, and content creation, allowing businesses to produce dozens of effective banners in minutes, slashing production time by 80-90%.",
    benefit3Title: "Performance Optimization",
    benefit3Desc: "AI predicts which designs will perform best, enabling A/B testing at scale and data-driven adjustments to improve click-through rates and conversions continuously.",
    benefit4Title: "Significant Cost Reduction",
    benefit4Desc: "Reduces reliance on expensive designers and stock assets, making high-quality, customized visuals accessible for businesses of all sizes and budgets.",
    benefit5Title: "Global Scalability",
    benefit5Desc: "Quickly create and deploy localized, on-brand banners for different campaigns, regions, or platforms (social media, mobile, desktop) with consistent quality.",
    benefit6Title: "Creative Inspiration",
    benefit6Desc: "Suggests innovative layouts, colors, and concepts that human designers might overlook, leading to more engaging and effective visual communications.",
    stat1Value: "40-70%",
    stat1Label: "Higher Click-Through Rates",
    stat2Value: "90%",
    stat2Label: "Faster Banner Creation",
    stat3Value: "60-80%",
    stat3Label: "Cost Reduction",
    enhancedTitle: "Revolutionizing Digital Advertising with AI-Powered Banners",
    enhanced1: "AI-powered banner advertising represents a fundamental shift in how businesses communicate with their audiences online. Unlike traditional static banners that deliver the same message to every visitor, AI-driven banners function as intelligent conversation starters that adapt in real-time to individual user behaviors, preferences, and contexts. This technology leverages sophisticated machine learning algorithms that analyze thousands of data points—from browsing history and demographic information to real-time engagement patterns and conversion probabilities—to create hyper-personalized visual messages that resonate deeply with each viewer. The result is advertising that feels less like an interruption and more like a valuable recommendation, dramatically increasing both user engagement and conversion rates while simultaneously reducing ad fatigue and banner blindness that plague traditional digital advertising.",
    enhanced2: "Beyond personalization, AI banner technology introduces unprecedented efficiency and scalability to digital marketing operations. Where traditional banner creation involves time-consuming design processes, multiple revisions, and significant human resources, AI systems can generate hundreds of professionally designed, brand-consistent banner variations in the time it takes a human designer to create a single concept. These AI-generated banners aren't just visually appealing—they're data-optimized, incorporating performance insights from previous campaigns, competitor analysis, and industry benchmarks to maximize effectiveness. The system continuously learns and improves, automatically testing different design elements, messaging approaches, and calls-to-action to identify the highest-performing combinations. This creates a virtuous cycle where each campaign makes the next one more effective, allowing businesses of all sizes to compete with the advertising sophistication previously available only to large corporations with massive marketing budgets.",
    type1Title: "Website Banners",
    type1Desc: "Dynamic homepage banners that adapt to visitor behavior and preferences in real-time",
    type2Title: "Mobile Ads",
    type2Desc: "Optimized mobile banners with perfect sizing, loading speed, and mobile-first designs",
    type3Title: "Social Media Ads",
    type3Desc: "Platform-specific banners for Facebook, Instagram, LinkedIn, Twitter, and TikTok",
    type4Title: "Retargeting Banners",
    type4Desc: "Intelligent banners that remind visitors of products they viewed or left in cart",
    type5Title: "Localized Banners",
    type5Desc: "Geographically and culturally adapted banners for global marketing campaigns",
    type6Title: "Performance Banners",
    type6Desc: "Data-driven banners optimized for specific conversion goals and KPIs",
    package1: "Premium banner placement with strategic positioning",
    package2: "Targeted audience reach based on sophisticated user profiling",
    package3: "Real-time performance analytics and optimization",
    package4: "Mobile-optimized designs for all device types",
    package5: "ROI tracking dashboard with comprehensive metrics",
    package6: "Automated A/B testing and optimization algorithms",
    package7: "Brand consistency across all banner variations",
    package8: "Seasonal and trend-responsive banner generation",
    package9: "Multi-platform banner synchronization",
    package10: "Continuous learning and performance improvement",
    ctaTitle: "Elevate Your Digital Advertising with AI-Powered Banners",
    ctaText: "Subscribe to our AI Banner Advertising plan and access premium banner placement, targeted audience reach, real-time performance analytics, and mobile-optimized designs. Transform your digital advertising with intelligent, high-converting banner solutions.",
    ctaButton: "Click Here To Subscribe",
    meta: "© 2025 Jerry's AI. All rights reserved.",
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
    copyright: "© 2025 Jerry's AI. All rights reserved."
  }), []);

  // CORRECTED TRANSLATION HOOK
  const translatedText = usePageTranslation(EN, targetLang);
  const t = (key) => translatedText[key] || EN[key] || key;

  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const benefits = [
    { title: t("benefit1Title"), desc: t("benefit1Desc") },
    { title: t("benefit2Title"), desc: t("benefit2Desc") },
    { title: t("benefit3Title"), desc: t("benefit3Desc") },
    { title: t("benefit4Title"), desc: t("benefit4Desc") },
    { title: t("benefit5Title"), desc: t("benefit5Desc") },
    { title: t("benefit6Title"), desc: t("benefit6Desc") },
  ];

  const stats = [
    { icon: "📈", value: t("stat1Value"), label: t("stat1Label") },
    { icon: "⚡", value: t("stat2Value"), label: t("stat2Label") },
    { icon: "💰", value: t("stat3Value"), label: t("stat3Label") },
  ];

  const bannerTypes = [
    { icon: "🖥️", title: t("type1Title"), desc: t("type1Desc") },
    { icon: "📱", title: t("type2Title"), desc: t("type2Desc") },
    { icon: "📢", title: t("type3Title"), desc: t("type3Desc") },
    { icon: "🎯", title: t("type4Title"), desc: t("type4Desc") },
    { icon: "🌍", title: t("type5Title"), desc: t("type5Desc") },
    { icon: "📊", title: t("type6Title"), desc: t("type6Desc") },
  ];

  const packageList = [
    t("package1"), t("package2"), t("package3"), t("package4"), t("package5"),
    t("package6"), t("package7"), t("package8"), t("package9"), t("package10"),
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
        <div className="banner-container">
          <div className="banner-card">
            <h1 className="banner-title">{t("bannerTitle")}</h1>
            <div className="banner-intro-text"><p>{t("introText")}</p></div>
            <div className="banner-image-section">
              <img src={ASSET("/images/general/icons/jerry-ai-banr.png")} alt="AI Banner Advertising Solutions" className="banner-image" />
              <div className="banner-image-caption">{t("imageCaption")}</div>
            </div>
            <div className="banner-content">
              <div className="banner-section">
                <h2 className="banner-section-title">{t("benefitsTitle")}</h2>
                <p className="banner-content-paragraph">{t("benefitsDesc")}</p>
                <div className="banner-benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className={`banner-benefit-card ${hoveredBenefit === index ? 'banner-benefit-card-hover' : ''}`} onMouseEnter={() => setHoveredBenefit(index)} onMouseLeave={() => setHoveredBenefit(null)}>
                      <h3 className="banner-benefit-title">{benefit.title}</h3>
                      <p className="banner-benefit-desc">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="banner-section">
                <h2 className="banner-section-title">{t("performanceTitle")}</h2>
                <p className="banner-content-paragraph">{t("performanceDesc")}</p>
                <div className="banner-performance-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className={`banner-stat-card ${hoveredStat === index ? 'banner-stat-card-hover' : ''}`} onMouseEnter={() => setHoveredStat(index)} onMouseLeave={() => setHoveredStat(null)}>
                      <span className="banner-stat-icon">{stat.icon}</span>
                      <div className="banner-stat-value">{stat.value}</div>
                      <div className="banner-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="banner-enhanced">
                <h3 className="banner-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="banner-content-paragraph">{t("enhanced1")}</p>
                <p className="banner-content-paragraph">{t("enhanced2")}</p>
              </div>
              <div className="banner-section">
                <h2 className="banner-section-title">{t("typesTitle")}</h2>
                <p className="banner-content-paragraph">{t("typesDesc")}</p>
                <div className="banner-types-grid">
                  {bannerTypes.map((type, index) => (
                    <div key={index} className="banner-type-card">
                      <span className="banner-type-icon">{type.icon}</span>
                      <h3 className="banner-type-title">{type.title}</h3>
                      <p className="banner-type-desc">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="banner-section">
                <h2 className="banner-section-title">{t("packageTitle")}</h2>
                <p className="banner-content-paragraph">{t("packageDesc")}</p>
                <ul className="banner-list">{packageList.map((item, index) => (<li key={index} className="banner-list-item">{item}</li>))}</ul>
              </div>
              <div className="banner-section">
                <h2 className="banner-section-title">{t("transformationTitle")}</h2>
                <p className="banner-content-paragraph">{t("transformationDesc")}</p>
              </div>
              <div className="banner-cta">
                <h3 className="banner-cta-title">{t("ctaTitle")}</h3>
                <p className="banner-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="banner-cta-button">{t("ctaButton")}</Link>
              </div>
              <div className="banner-meta">{t("meta")}</div>
            </div>
          </div>
        </div>
        <footer>
          <div className="banner-footer-inner">
            <div><div className="banner-footer-title">{t("footerCompany")}</div><div className="banner-footer-links"><Link to="/about" className="banner-footer-link">{t("aboutUs")}</Link><Link to="/support" className="banner-footer-link">{t("support")}</Link><Link to="/contact" className="banner-footer-link">{t("contactUs")}</Link><Link to="/GeneralServices" className="banner-footer-link">{t("generalServices")}</Link><Link to="/pricing" className="banner-footer-link">{t("pricing")}</Link></div></div>
            <div><div className="banner-footer-title">{t("footerServices")}</div><div className="banner-footer-links"><Link to="/subscribe" className="banner-footer-link">{t("subscriptionPlan")}</Link><Link to="/ai-pro-chat-info" className="banner-footer-link">{t("professionalAIChat")}</Link><Link to="/add-banner" className="banner-footer-link">{t("addBannerFooter")}</Link><Link to="/education" className="banner-footer-link">{t("educationFooter")}</Link><Link to="/web-development" className="banner-footer-link">{t("webDevelopmentFooter")}</Link><Link to="/app-development" className="banner-footer-link">{t("appDevelopmentFooter")}</Link><Link to="/digital-marketing" className="banner-footer-link">{t("digitalMarketingFooter")}</Link><Link to="/voice-translator" className="banner-footer-link">{t("voiceTranslatorFooter")}</Link><Link to="/analyse-data" className="banner-footer-link">{t("analyseDataFooter")}</Link><Link to="/cybersecurity" className="banner-footer-link">{t("enhanceCyberFooter")}</Link><Link to="/find-my-phone" className="banner-footer-link">{t("findMyPhoneFooter")}</Link></div></div>
            <div><div className="banner-footer-title">{t("footerLegality")}</div><div className="banner-footer-links"><Link to="/terms" className="banner-footer-link">{t("terms")}</Link><Link to="/privacy" className="banner-footer-link">{t("privacy")}</Link><Link to="/pdpa" className="banner-footer-link">{t("pdpa")}</Link><Link to="/services" className="banner-footer-link">{t("servicesPolicy")}</Link></div></div>
            <div><div className="banner-footer-title">{t("footerConnection")}</div><div className="banner-footer-links"><a href="/" className="banner-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("facebook")}</a><a href="/" className="banner-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("linkedin")}</a><a href="/" className="banner-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("twitter")}</a><a href="/" className="banner-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("tiktok")}</a><a href="/" className="banner-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("telegram")}</a></div></div>
          </div>
          <div className="banner-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default AddBanner;
