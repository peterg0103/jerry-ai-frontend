import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";

const Seo = ({ targetLang, setTargetLang }) => {
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
  // 1️⃣ ALL useState hooks FIRST
  // =========================
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [hoveredFooterLink, setHoveredFooterLink] = useState({ section: null, index: null });

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT (FULLY INTACT)
  // =========================
  const EN = {
    // Page Title
    seoTitle: "Launch SEO Globally",

    // Intro Text
    introText: "The best benefits of launching SEO are significantly increased organic traffic, higher brand visibility & credibility, superior ROI over paid ads, and gaining a strong competitive edge, all while providing valuable insights into customer behavior for long-term, sustainable business growth. SEO delivers quality, engaged users actively searching for your products/services, making them more likely to convert into leads and sales.",

    // Image Caption
    imageCaption: "Global Search Engine Optimization & Digital Visibility",

    // Section Titles
    benefitsTitle: "Key Benefits of SEO",
    benefitsDesc: "Search Engine Optimization transforms your online presence and delivers measurable business results through strategic optimization techniques.",

    metricsTitle: "SEO Performance Metrics",
    metricsDesc: "Our SEO strategies deliver measurable improvements across key performance indicators that directly impact your business success.",

    strategyTitle: "Our SEO Strategy Components",
    strategyDesc: "We implement a comprehensive, multi-faceted approach to SEO that addresses all critical ranking factors.",

    additionalTitle: "Additional SEO Advantages",

    // Benefit Cards
    benefit1Title: "Increased Visibility & Traffic",
    benefit1Desc: "Higher rankings on search engines (like Google) mean more people see and visit your website, expanding your digital footprint.",

    benefit2Title: "High-Quality, Targeted Traffic",
    benefit2Desc: "SEO attracts users who are actively searching for what you offer, leading to better conversion rates and qualified leads.",

    benefit3Title: "Builds Trust & Credibility",
    benefit3Desc: "Users trust websites that rank higher, associating them with authority and reliability in your industry or niche.",

    benefit4Title: "Cost-Effective Marketing",
    benefit4Desc: "Organic traffic from SEO is essentially free, offering better long-term ROI compared to constant paid ad spending.",

    benefit5Title: "Competitive Advantage",
    benefit5Desc: "Outranking competitors in search results captures market share and positions you as a leader in your industry.",

    benefit6Title: "Long-Term Growth",
    benefit6Desc: "SEO provides sustainable results, building value over time rather than just for the duration of an ad campaign.",

    // Metrics Cards
    metric1Title: "Traffic Growth",
    metric1Desc: "40-200% increase in organic website visitors within 6-12 months",

    metric2Title: "Higher Rankings",
    metric2Desc: "Top 3 positions for strategic keywords in competitive markets",

    metric3Title: "Cost Savings",
    metric3Desc: "60-80% lower cost per acquisition vs. paid advertising channels",

    // Enhanced Paragraphs
    enhancedTitle: "The Strategic Advantage of Professional SEO",
    enhanced1: "In today's digital landscape where consumers increasingly rely on search engines to discover products, services, and information, appearing prominently in search results is no longer a luxury—it's a business necessity. Professional SEO provides a strategic framework that goes beyond simple keyword optimization to create a comprehensive digital presence that search engines recognize as authoritative and relevant. Unlike paid advertising which stops generating traffic the moment you stop spending, SEO builds lasting equity in your digital assets. Each piece of optimized content, every technical improvement, and all earned backlinks continue to work for your business indefinitely, compounding their value over time and creating a sustainable competitive advantage that grows stronger with each passing month.",
    enhanced2: "Beyond the obvious benefits of increased visibility and traffic, professional SEO delivers profound strategic insights that can transform your entire business approach. Through comprehensive keyword research and competitive analysis, you gain unparalleled understanding of your target audience's needs, preferences, and search behaviors. This intelligence informs not only your digital marketing strategy but also product development, content creation, and customer service initiatives. Technical SEO optimizations improve website performance for all users, reducing bounce rates and increasing engagement regardless of how visitors arrive at your site. Local SEO strategies connect you with nearby customers at the precise moment they're ready to make purchasing decisions, while international SEO expands your reach to global markets. By aligning your digital presence with search engine algorithms and user intent, professional SEO creates a virtuous cycle of visibility, engagement, and conversion that drives sustainable business growth.",

    // Strategy Cards
    strategy1Title: "Keyword Research",
    strategy1Desc: "Identifying high-value search terms with optimal competition and search volume",

    strategy2Title: "Content Optimization",
    strategy2Desc: "Creating and optimizing content that satisfies user intent and search algorithms",

    strategy3Title: "Technical SEO",
    strategy3Desc: "Improving site architecture, speed, mobile-friendliness, and indexability",

    strategy4Title: "Link Building",
    strategy4Desc: "Acquiring high-quality backlinks from authoritative, relevant websites",

    strategy5Title: "Analytics & Reporting",
    strategy5Desc: "Monitoring performance, tracking rankings, and measuring ROI",

    strategy6Title: "Local SEO",
    strategy6Desc: "Optimizing for local search results and Google Business Profile",

    // Additional Advantages List
    additional1: "Deeper Customer Insights: Analyzing search data helps you understand customer needs, preferences, and behavior patterns",
    additional2: "Enhanced User Experience (UX): Optimizing for SEO often improves site speed, navigation, and mobile-friendliness, benefiting all visitors",
    additional3: "24/7 Promotion: Top rankings work for you around the clock, promoting your business continuously without additional costs",
    additional4: "Local & Global Reach: Local SEO targets nearby customers, while broader strategies expand your market reach internationally",
    additional5: "Brand Building: Consistent visibility in search results establishes brand authority and industry leadership",
    additional6: "Adaptive Strategy: Ongoing optimization adjusts to algorithm updates and changing search behaviors",

    // CTA Section
    ctaTitle: "Dominate Search Results with Professional SEO",
    ctaText: "Subscribe to our Launch SEO plan and unlock the full power of search engine optimization. Increase your visibility, drive qualified traffic, and achieve sustainable business growth with our comprehensive SEO solutions.",
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
  };

  // =========================
  // 3️⃣ DEEPSEEK TRANSLATION HOOK (REPLACES OLD CODE)
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

  // Inline styles (KEPT 100% INTACT)
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
    seoImage: {
      width: "236px",
      height: "236px",
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
      borderBottom: "2px solid rgba(139, 92, 246, 0.3)",
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
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "25px",
      margin: "30px 0",
    },
    benefitCard: {
      background: "rgba(139, 92, 246, 0.08)",
      border: "1px solid rgba(139, 92, 246, 0.2)",
      borderRadius: "10px",
      padding: "22px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "default",
    },
    benefitCardHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.15)",
    },
    benefitCardTitle: {
      margin: "0 0 12px",
      fontSize: "18px",
      color: "#8b5cf6",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    benefitCardTitleBefore: {
      content: "✓",
      background: "#8b5cf6",
      color: "white",
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "bold",
    },
    benefitCardDesc: {
      margin: "0",
      fontSize: "15px",
      color: "#334155",
    },
    seoMetrics: {
      display: "flex",
      justifyContent: "space-around",
      gap: "25px",
      margin: "35px 0",
      flexWrap: "wrap",
    },
    metricCard: {
      background: "white",
      border: "2px solid rgba(139, 92, 246, 0.3)",
      borderRadius: "12px",
      padding: "25px 20px",
      textAlign: "center",
      width: "200px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "default",
    },
    metricCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(139, 92, 246, 0.2)",
      borderColor: "#8b5cf6",
    },
    metricIcon: {
      fontSize: "40px",
      marginBottom: "15px",
      display: "block",
      color: "#8b5cf6",
    },
    metricCardTitle: {
      margin: "0 0 10px",
      fontSize: "18px",
      color: "#0f172a",
    },
    metricCardDesc: {
      margin: "0",
      fontSize: "14px",
      color: "#64748b",
    },
    enhancedParagraphs: {
      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(16, 167, 255, 0.05))",
      border: "1px solid rgba(139, 92, 246, 0.15)",
      borderRadius: "12px",
      padding: "28px 32px",
      margin: "35px 0",
    },
    enhancedTitle: {
      margin: "0 0 20px",
      fontSize: "22px",
      color: "#8b5cf6",
      textAlign: "center",
    },
    strategyGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      margin: "30px 0",
    },
    strategyCard: {
      background: "white",
      border: "1px solid rgba(139, 92, 246, 0.2)",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 6px 16px rgba(0,0,0,.08)",
    },
    strategyIcon: {
      fontSize: "32px",
      color: "#8b5cf6",
      marginBottom: "12px",
      display: "block",
    },
    strategyCardTitle: {
      margin: "0 0 10px",
      fontSize: "16px",
      color: "#0f172a",
      fontWeight: "700",
    },
    strategyCardDesc: {
      margin: "0",
      fontSize: "14px",
      color: "#64748b",
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

  // Data arrays (KEPT INTACT)
  const benefits = [
    { title: t("benefit1Title"), desc: t("benefit1Desc") },
    { title: t("benefit2Title"), desc: t("benefit2Desc") },
    { title: t("benefit3Title"), desc: t("benefit3Desc") },
    { title: t("benefit4Title"), desc: t("benefit4Desc") },
    { title: t("benefit5Title"), desc: t("benefit5Desc") },
    { title: t("benefit6Title"), desc: t("benefit6Desc") },
  ];

  const metrics = [
    { icon: "📈", title: t("metric1Title"), desc: t("metric1Desc") },
    { icon: "🎯", title: t("metric2Title"), desc: t("metric2Desc") },
    { icon: "💰", title: t("metric3Title"), desc: t("metric3Desc") },
  ];

  const strategies = [
    { icon: "🔍", title: t("strategy1Title"), desc: t("strategy1Desc") },
    { icon: "📝", title: t("strategy2Title"), desc: t("strategy2Desc") },
    { icon: "⚙️", title: t("strategy3Title"), desc: t("strategy3Desc") },
    { icon: "🔗", title: t("strategy4Title"), desc: t("strategy4Desc") },
    { icon: "📊", title: t("strategy5Title"), desc: t("strategy5Desc") },
    { icon: "📍", title: t("strategy6Title"), desc: t("strategy6Desc") },
  ];

  const additionalList = [
    t("additional1"),
    t("additional2"),
    t("additional3"),
    t("additional4"),
    t("additional5"),
    t("additional6"),
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
            <h1 style={styles.title}>{t("seoTitle")}</h1>

            <div style={styles.introText}>
              <p>{t("introText")}</p>
            </div>

            <div style={styles.imageSection}>
              <img src={ASSET("/images/seo.png")} alt="Search Engine Optimization" style={styles.seoImage} />
              <div style={styles.imageCaption}>{t("imageCaption")}</div>
            </div>

            <div style={styles.content}>
              {/* Benefits Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("benefitsTitle")}</h2>
                <p style={styles.contentParagraph}>{t("benefitsDesc")}</p>
                
                <div style={styles.benefitsGrid}>
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.benefitCard,
                        ...(hoveredBenefit === index ? styles.benefitCardHover : {}),
                      }}
                      onMouseEnter={() => setHoveredBenefit(index)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <h3 style={styles.benefitCardTitle}>
                        <span style={styles.benefitCardTitleBefore}></span>
                        {benefit.title}
                      </h3>
                      <p style={styles.benefitCardDesc}>{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("metricsTitle")}</h2>
                <p style={styles.contentParagraph}>{t("metricsDesc")}</p>
                
                <div style={styles.seoMetrics}>
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.metricCard,
                        ...(hoveredMetric === index ? styles.metricCardHover : {}),
                      }}
                      onMouseEnter={() => setHoveredMetric(index)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <span style={styles.metricIcon}>{metric.icon}</span>
                      <h3 style={styles.metricCardTitle}>{metric.title}</h3>
                      <p style={styles.metricCardDesc}>{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div style={styles.enhancedParagraphs}>
                <h3 style={styles.enhancedTitle}>{t("enhancedTitle")}</h3>
                <p style={styles.contentParagraph}>{t("enhanced1")}</p>
                <p style={styles.contentParagraph}>{t("enhanced2")}</p>
              </div>

              {/* Strategy Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("strategyTitle")}</h2>
                <p style={styles.contentParagraph}>{t("strategyDesc")}</p>
                
                <div style={styles.strategyGrid}>
                  {strategies.map((strategy, index) => (
                    <div key={index} style={styles.strategyCard}>
                      <span style={styles.strategyIcon}>{strategy.icon}</span>
                      <h3 style={styles.strategyCardTitle}>{strategy.title}</h3>
                      <p style={styles.strategyCardDesc}>{strategy.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Advantages Section */}
              <div style={styles.section}>
                <h2 style={styles.sectionTitle}>{t("additionalTitle")}</h2>
                <ul style={styles.list}>
                  {additionalList.map((item, index) => (
                    <li key={index} style={styles.listItem}>
                      <span style={styles.highlight}>{item.split(":")[0]}:</span>
                      {item.split(":").slice(1).join(":")}
                    </li>
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
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("facebook")}</a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("linkedin")}</a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("twitter")}</a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("tiktok")}</a>
                <a href="/" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>{t("telegram")}</a>
              </div>
            </div>
          </div>
          <div className="copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Seo;
