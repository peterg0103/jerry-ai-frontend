import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./AnalyseData.css";

const AnalyseData = ({ targetLang, setTargetLang }) => {
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
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredChart, setHoveredChart] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT
  // =========================
  const EN = {
    // Page Title
    analyseTitle: "Analyzing Data & Report",

    // Intro Text
    introText: "Transform raw data into actionable insights with our AI-powered data analysis platform. Our advanced analytics tools help you understand trends, predict outcomes, and make data-driven decisions that drive business growth.",

    // Image Caption
    imageCaption: "AI-Powered Data Analysis & Reporting Dashboard",

    // Section Titles
    servicesTitle: "Our Data Analysis Services",
    servicesDesc: "We provide comprehensive data analysis solutions that turn complex data into clear, actionable insights for your business.",

    chartTypesTitle: "Chart Types We Offer",
    chartTypesDesc: "Our platform supports 5 different visualization types to help you understand your data from every angle.",

    frameworkTitle: "Our Analysis Framework",
    frameworkDesc: "We follow a structured approach to ensure comprehensive and accurate data analysis.",

    resultsTitle: "Expected Results & Business Impact",
    resultsDesc: "Our data-driven approach delivers measurable improvements in business performance and decision-making.",

    packageTitle: "Complete Data Analysis Package",
    packageDesc: "Our comprehensive data analysis service includes:",

    // Service Cards
    service1Title: "Predictive Analytics",
    service1Desc: "Forecast future trends and outcomes using advanced AI algorithms that learn from your historical data.",

    service2Title: "Real-Time Reporting",
    service2Desc: "Access live dashboards and real-time data visualizations that update automatically as new data comes in.",

    service3Title: "Custom Dashboards",
    service3Desc: "Create personalized dashboards that focus on the metrics and KPIs that matter most to your business.",

    service4Title: "Data Integration",
    service4Desc: "Connect and analyze data from multiple sources including databases, CRMs, spreadsheets, and APIs.",

    // Chart Types
    chart1: "Bar Chart",
    chart1Desc: "Compare values across different categories with easy-to-read vertical bars.",
    chart2: "Round/Circle Chart",
    chart2Desc: "Visualize proportions and percentages with interactive pie and donut charts.",
    chart3: "Floating Chart",
    chart3Desc: "Track changes over time with dynamic bubble and floating bar visualizations.",
    chart4: "3D Chart",
    chart4Desc: "Explore complex data relationships with stunning three-dimensional representations.",
    chart5: "Future Prediction Chart",
    chart5Desc: "See projected trends and forecasts based on AI-powered predictive modeling.",

    // Framework Points
    framework1: "Data Collection & Integration",
    framework1Desc: "Gather and consolidate data from all relevant sources into a unified analysis platform.",
    framework2: "Data Cleaning & Preparation",
    framework2Desc: "Remove inconsistencies, handle missing values, and prepare data for accurate analysis.",
    framework3: "Exploratory Analysis",
    framework3Desc: "Identify patterns, correlations, and initial insights through statistical exploration.",
    framework4: "Advanced AI Modeling",
    framework4Desc: "Apply machine learning algorithms to uncover deep insights and make predictions.",
    framework5: "Visualization & Reporting",
    framework5Desc: "Present findings through clear visualizations and comprehensive reports.",
    framework6: "Actionable Recommendations",
    framework6Desc: "Translate insights into concrete business actions and strategic recommendations.",

    // Result Metrics
    metric1Value: "40-60%",
    metric1Label: "Faster Decision Making",
    metric2Value: "85-95%",
    metric2Label: "Data Accuracy",
    metric3Value: "3-5x",
    metric3Label: "Faster Report Generation",
    metric4Value: "30-50%",
    metric4Label: "Cost Reduction",

    // Enhanced Paragraphs
    enhancedTitle: "Why Data Analysis is Critical for Business Success",
    enhanced1: "In today's data-driven economy, the ability to extract meaningful insights from your data is no longer a competitive advantage—it's a necessity for survival. Businesses that leverage data effectively make better decisions, identify opportunities faster, and respond more quickly to market changes. Our AI-powered data analysis platform democratizes advanced analytics, making sophisticated insights accessible to organizations of all sizes.",
    enhanced2: "Beyond basic reporting, our platform provides predictive capabilities that help you anticipate future trends and customer behaviors. By analyzing historical patterns and identifying correlations, our AI models can forecast outcomes with remarkable accuracy, allowing you to proactively address challenges and capitalize on opportunities before your competitors. Whether you're looking to optimize operations, increase revenue, or reduce costs, our comprehensive data analysis solutions provide the insights you need to achieve your goals.",

    // Package List
    package1: "Unlimited data analysis requests",
    package2: "Access to all 5 chart types",
    package3: "Custom dashboard creation",
    package4: "Real-time data updates",
    package5: "Export reports in multiple formats (PDF, Excel, CSV)",
    package6: "Email and chat support",
    package7: "Monthly strategy consultation",
    package8: "API access for data integration",

    // CTA Section
    ctaTitle: "Unlock the Power of Your Data Today",
    ctaText: "Subscribe to our Data Analysis plan and transform your raw data into actionable business intelligence. Make faster, smarter decisions with AI-powered insights.",
    ctaButton: "Click Here To Subscribe",

    // Meta
    meta: "© 2025 Jerry's AI. All rights reserved.",

    // Footer
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
  };

  // =========================
  // 3️⃣ DEEPSEEK TRANSLATION HOOK
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

  // =========================
  // 4️⃣ DATA ARRAYS
  // =========================
  const services = [
    { title: t("service1Title"), desc: t("service1Desc") },
    { title: t("service2Title"), desc: t("service2Desc") },
    { title: t("service3Title"), desc: t("service3Desc") },
    { title: t("service4Title"), desc: t("service4Desc") },
  ];

  const chartTypes = [
    { name: t("chart1"), desc: t("chart1Desc"), icon: "📊" },
    { name: t("chart2"), desc: t("chart2Desc"), icon: "🥧" },
    { name: t("chart3"), desc: t("chart3Desc"), icon: "🎈" },
    { name: t("chart4"), desc: t("chart4Desc"), icon: "🎯" },
    { name: t("chart5"), desc: t("chart5Desc"), icon: "🔮" },
  ];

  const frameworks = [
    { title: t("framework1"), desc: t("framework1Desc") },
    { title: t("framework2"), desc: t("framework2Desc") },
    { title: t("framework3"), desc: t("framework3Desc") },
    { title: t("framework4"), desc: t("framework4Desc") },
    { title: t("framework5"), desc: t("framework5Desc") },
    { title: t("framework6"), desc: t("framework6Desc") },
  ];

  const metrics = [
    { value: t("metric1Value"), label: t("metric1Label") },
    { value: t("metric2Value"), label: t("metric2Label") },
    { value: t("metric3Value"), label: t("metric3Label") },
    { value: t("metric4Value"), label: t("metric4Label") },
  ];

  const packageList = [
    t("package1"),
    t("package2"),
    t("package3"),
    t("package4"),
    t("package5"),
    t("package6"),
    t("package7"),
    t("package8"),
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
        <div className="dm-container">
          <div className="dm-card">
            <h1 className="dm-title">{t("analyseTitle")}</h1>

            <div className="dm-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="dm-image-section">
              <img
                src={ASSET("/images/general/icons/analysis_data.png")}
                alt="Data Analysis"
                className="dm-image"
                onError={(e) => { e.target.src = "https://via.placeholder.com/236x150?text=Data+Analysis"; }}
              />
              <div className="dm-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="dm-content">
              {/* Services Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("servicesTitle")}</h2>
                <p className="dm-content-paragraph">{t("servicesDesc")}</p>
                
                <div className="dm-services-grid">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`dm-service-card ${hoveredService === index ? 'dm-service-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <h3 className="dm-service-title">{service.title}</h3>
                      <p className="dm-service-desc">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Types Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("chartTypesTitle")}</h2>
                <p className="dm-content-paragraph">{t("chartTypesDesc")}</p>
                
                <div className="dm-channels">
                  {chartTypes.map((chart, index) => (
                    <div
                      key={index}
                      className={`dm-channel-card ${hoveredChart === index ? 'dm-channel-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredChart(index)}
                      onMouseLeave={() => setHoveredChart(null)}
                    >
                      <span className="dm-channel-icon">{chart.icon}</span>
                      <h3 className="dm-channel-title">{chart.name}</h3>
                      <p className="dm-channel-desc">{chart.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Framework Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("frameworkTitle")}</h2>
                <p className="dm-content-paragraph">{t("frameworkDesc")}</p>
                
                <div className="dm-services-grid">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="dm-service-card">
                      <h3 className="dm-service-title">{framework.title}</h3>
                      <p className="dm-service-desc">{framework.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="dm-section">
                <h3 className="dm-section-title">{t("enhancedTitle")}</h3>
                <p className="dm-content-paragraph">{t("enhanced1")}</p>
                <p className="dm-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Results Metrics Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("resultsTitle")}</h2>
                <p className="dm-content-paragraph">{t("resultsDesc")}</p>
                
                <div className="dm-channels">
                  {metrics.map((metric, index) => (
                    <div key={index} className="dm-channel-card">
                      <div className="dm-metric-value" style={{ fontSize: "32px", fontWeight: "bold", color: "#10a7ff" }}>
                        {metric.value}
                      </div>
                      <div className="dm-metric-label" style={{ fontSize: "14px", color: "#64748b" }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("packageTitle")}</h2>
                <p className="dm-content-paragraph">{t("packageDesc")}</p>
                <ul className="dm-list">
                  {packageList.map((item, index) => (
                    <li key={index} className="dm-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="dm-cta">
                <h3 className="dm-cta-title">{t("ctaTitle")}</h3>
                <p className="dm-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="dm-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="dm-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="dm-footer-inner">
            <div>
              <div className="dm-footer-title">{t("footerCompany")}</div>
              <div className="dm-footer-links">
                <Link to="/about" className="dm-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="dm-footer-link">{t("support")}</Link>
                <Link to="/contact" className="dm-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="dm-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="dm-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="dm-footer-title">{t("footerServices")}</div>
              <div className="dm-footer-links">
                <Link to="/subscribe" className="dm-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="dm-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="dm-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="dm-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="dm-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="dm-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="dm-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="dm-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="dm-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="dm-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="dm-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="dm-footer-title">{t("footerLegality")}</div>
              <div className="dm-footer-links">
                <Link to="/terms" className="dm-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="dm-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="dm-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="dm-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="dm-footer-title">{t("footerConnection")}</div>
              <div className="dm-footer-links">
                <a href="/" className="dm-footer-link">{t("facebook")}</a>
                <a href="/" className="dm-footer-link">{t("linkedin")}</a>
                <a href="/" className="dm-footer-link">{t("twitter")}</a>
                <a href="/" className="dm-footer-link">{t("tiktok")}</a>
                <a href="/" className="dm-footer-link">{t("telegram")}</a>
              </div>
            </div>
          </div>
          <div className="dm-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default AnalyseData;
