import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./Pricing.css"; // Import the CSS file

const Pricing = ({ targetLang, setTargetLang }) => {
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
      pricingTitle: "AI Pricing Models",

      // Intro Text
      intro1: "Across industries, artificial intelligence (AI) has emerged as a valuable tool for transforming customer experiences, improving operational efficiency and driving business growth. But no matter your company's size, the cost of building and maintaining AI technologies can be a challenge.",
      intro2: "One of the most important steps in adopting AI solutions is choosing the right pricing model. With such a wide variety of options out there, trying to select the right one — balancing your current needs, your future aspirations and your budget — can become quite the juggling act.",

      // Image Caption
      imageCaption: "Choose the Right AI Pricing Model for Your Business",

      // Section Titles
      modelsTitle: "AI Pricing Models: Which Is Best for Controlling Costs?",
      advantagesTitle: "AI Pricing Advantages",
      tokenisationTitle: "Why Tokenisation Makes Sense for AI Pricing",
      strategyTitle: "Start Small, Scale Wisely",
      
      // Model Descriptions
      licenseTitle: "License-Based",
      licenseDesc: "Predictable but costly upfront. A one-time fee for access over a set period offers budget predictability but requires high initial investment.",
      
      consumptionTitle: "Consumption-Based",
      consumptionDesc: "Flexible but variable. Pay-per-use based on API calls or data volumes. Ideal for seasonal use but requires careful financial planning.",
      
      subscriptionTitle: "Subscription-Based",
      subscriptionDesc: "Consistent but rigid. Recurring fees for continuous access simplify budgeting but may lead to paying for unused capacity.",
      
      freemiumTitle: "Freemium",
      freemiumDesc: "Low risk but potentially expensive. Great for small-scale exploration but costs can escalate quickly as needs grow.",
      
      revenueTitle: "Revenue-Shared",
      revenueDesc: "Aligned goals but complex. Vendor fees based on revenue success incentivizes collaboration but makes scaling difficult to quantify.",
      
      outcomeTitle: "Outcome-Based",
      outcomeDesc: "Results-focused but hard to define. Pay only for pre-defined results but struggles with agreeing on performance metrics.",

      // Advantages Metrics
      costControlTitle: "Cost Control",
      costControlDesc: "Flexible models allow you to scale spending based on actual business needs and results achieved",
      
      predictabilityTitle: "Predictability",
      predictabilityDesc: "Fixed models provide budget certainty for financial planning and forecasting",
      
      scalabilityTitle: "Scalability",
      scalabilityDesc: "Grow your AI usage gradually as business needs expand without major upfront commitments",

      // Enhanced Paragraphs
      enhancedTitle: "Strategic AI Investment & Future-Proof Pricing",
      enhanced1: "Modern businesses need agility in their technology investments. A flexible pricing model allows you to scale AI usage up or down based on actual business needs, preventing budget waste while ensuring you have access to resources when opportunities arise. This adaptive approach ensures that your AI investment directly correlates with business outcomes, providing measurable ROI at every stage of implementation. Unlike traditional software licensing that locks you into long-term commitments regardless of usage, modern AI pricing models align costs with value creation, allowing businesses of all sizes to access cutting-edge AI capabilities without prohibitive upfront expenses.",
      enhanced2: "As AI technology evolves rapidly, locking into rigid long-term contracts can limit your ability to adopt newer, more efficient solutions. Our approach ensures you can always access the latest AI advancements without penalty or complex migration processes. Future-proof pricing means building flexibility into your AI strategy from the beginning, allowing you to pivot as new technologies emerge and business priorities shift. By choosing models that prioritize adaptability over rigidity, you create a sustainable AI investment strategy that grows with your business rather than constraining it. This forward-looking approach to AI pricing protects your investment against technological obsolescence while maximizing the value you extract from every dollar spent on artificial intelligence.",

      // Tokenisation Strategy
      paygoTitle: "Pay-As-You-Go",
      paygoDesc: "You pay only for what you use — tracked using Jerry AI Experience tokens",
      
      costTitle: "Cost Control",
      costDesc: "Reduce waste and maintain complete control over your AI spending",
      
      scalingTitle: "Flexible Scaling",
      scalingDesc: "Easily adjust usage up or down based on business needs and budget",
      
      analyticsTitle: "Transparent Analytics",
      analyticsDesc: "Detailed usage tracking and reporting for informed decision-making",

      // Strategy List Items
      strategy1: "Begin with Focus: Start with one AI service aligned with your most pressing business goals",
      strategy2: "Prove ROI First: Validate benefits through measurable results before broader implementation",
      strategy3: "Scale Gradually: Expand AI usage based on demonstrated value and budget alignment",
      strategy4: "Expert Consultation: Our team helps identify the optimal starting point for your industry",
      strategy5: "Continuous Optimization: Regularly review and adjust your AI strategy based on performance",
      strategy6: "Future-Proof Planning: Build flexibility into your AI investment for emerging technologies",

      // CTA Section
      ctaTitle: "Real-World Example: Virgin Atlantic",
      ctaText: "Virgin Atlantic implemented AI from Jerry's AI starting with predictive routing, improving both customer service and agent engagement. As ROI became clear, expansion into broader AI tools followed. Their journey demonstrates how starting with focused AI applications can validate value before broader implementation.",
      ctaButton: "Get Your Custom Pricing Quote",

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

  // State for hover effects
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  // Data arrays
  const pricingModels = [
    { title: t("licenseTitle"), desc: t("licenseDesc") },
    { title: t("consumptionTitle"), desc: t("consumptionDesc") },
    { title: t("subscriptionTitle"), desc: t("subscriptionDesc") },
    { title: t("freemiumTitle"), desc: t("freemiumDesc") },
    { title: t("revenueTitle"), desc: t("revenueDesc") },
    { title: t("outcomeTitle"), desc: t("outcomeDesc") },
  ];

  const metrics = [
    { icon: "📊", title: t("costControlTitle"), desc: t("costControlDesc") },
    { icon: "🎯", title: t("predictabilityTitle"), desc: t("predictabilityDesc") },
    { icon: "🚀", title: t("scalabilityTitle"), desc: t("scalabilityDesc") },
  ];

  const strategies = [
    { icon: "⚖️", title: t("paygoTitle"), desc: t("paygoDesc") },
    { icon: "📈", title: t("costTitle"), desc: t("costDesc") },
    { icon: "🔄", title: t("scalingTitle"), desc: t("scalingDesc") },
    { icon: "🔍", title: t("analyticsTitle"), desc: t("analyticsDesc") },
  ];

  const strategyList = [
    t("strategy1"),
    t("strategy2"),
    t("strategy3"),
    t("strategy4"),
    t("strategy5"),
    t("strategy6"),
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
        <div className="pricing-container">
          <div className="pricing-card">
            <h1 className="pricing-title">{t("pricingTitle")}</h1>

            <div className="pricing-intro-text">
              <p className="pricing-intro-paragraph">{t("intro1")}</p>
              <p className="pricing-intro-paragraph">{t("intro2")}</p>
            </div>

            <div className="pricing-image-section">
              <img
                src={ASSET("/images/general/price-cost.png")}
                alt="AI Pricing Models"
                className="pricing-image"
              />
              <div className="pricing-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="pricing-content">
              {/* Models Section */}
              <div className="pricing-section">
                <h2 className="pricing-section-title">{t("modelsTitle")}</h2>
                
                <div className="pricing-grid">
                  {pricingModels.map((model, index) => (
                    <div
                      key={index}
                      className={`pricing-model-card ${hoveredCard === index ? 'pricing-model-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <h3 className="pricing-model-title">
                        {model.title}
                      </h3>
                      <p className="pricing-model-desc">{model.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages Section */}
              <div className="pricing-section">
                <h2 className="pricing-section-title">{t("advantagesTitle")}</h2>
                
                <div className="pricing-metrics">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`pricing-metric-card ${hoveredMetric === index ? 'pricing-metric-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredMetric(index)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <span className="pricing-metric-icon">{metric.icon}</span>
                      <h3 className="pricing-metric-title">{metric.title}</h3>
                      <p className="pricing-metric-desc">{metric.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="pricing-enhanced">
                <h3 className="pricing-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="pricing-content-paragraph">{t("enhanced1")}</p>
                <p className="pricing-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Tokenisation Section */}
              <div className="pricing-section">
                <h2 className="pricing-section-title">{t("tokenisationTitle")}</h2>
                
                <div className="pricing-strategy-grid">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="pricing-strategy-card">
                      <span className="pricing-strategy-icon">{strategy.icon}</span>
                      <h3 className="pricing-strategy-title">{strategy.title}</h3>
                      <p className="pricing-strategy-desc">{strategy.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Section */}
              <div className="pricing-section">
                <h2 className="pricing-section-title">{t("strategyTitle")}</h2>
                <ul className="pricing-strategy-list">
                  {strategyList.map((item, index) => (
                    <li key={index} className="pricing-strategy-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pricing-cta">
                  <h3 className="pricing-cta-title">{t("ctaTitle")}</h3>
                  <p className="pricing-cta-text">{t("ctaText")}</p>
                  <Link to="/contact" className="pricing-cta-button">
                    {t("ctaButton")}
                  </Link>
                </div>
              </div>

              <div className="pricing-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="pricing-footer-inner">
            <div>
              <div className="pricing-footer-title">{t("footerCompany")}</div>
              <div className="pricing-footer-links">
                <Link to="/about" className="pricing-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="pricing-footer-link">{t("support")}</Link>
                <Link to="/contact" className="pricing-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="pricing-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="pricing-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="pricing-footer-title">{t("footerServices")}</div>
              <div className="pricing-footer-links">
                <Link to="/subscribe" className="pricing-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="pricing-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="pricing-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="pricing-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="pricing-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="pricing-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="pricing-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="pricing-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="pricing-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="pricing-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="pricing-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="pricing-footer-title">{t("footerLegality")}</div>
              <div className="pricing-footer-links">
                <Link to="/terms" className="pricing-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="pricing-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="pricing-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="pricing-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="pricing-footer-title">{t("footerConnection")}</div>
              <div className="pricing-footer-links">
                <a href="#" className="pricing-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="pricing-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="pricing-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="pricing-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="pricing-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Pricing;