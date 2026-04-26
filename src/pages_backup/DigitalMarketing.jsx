import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./DigitalMarketing.css"; // Import the CSS file

const DigitalMarketing = ({ targetLang, setTargetLang }) => {
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
      digitalTitle: "Digital Marketing Solutions",

      // Intro Text
      introText: "Boost your brand's online visibility with our data-driven digital marketing services. Our team specializes in SEO, PPC, email campaigns, and social media marketing that convert traffic into loyal customers. We tailor every strategy based on your audience, niche, and goals. Grow your business with proven digital techniques that deliver results and increase ROI.",

      // Image Caption
      imageCaption: "Strategic Digital Marketing & Growth Solutions",

      // Section Titles
      servicesTitle: "Our Digital Marketing Services",
      servicesDesc: "We provide comprehensive digital marketing solutions designed to amplify your brand's presence and drive measurable business growth across all digital channels.",

      channelsTitle: "Marketing Channels We Master",
      channelsDesc: "Our expertise spans across all major digital marketing channels to ensure comprehensive coverage and maximum impact.",

      resultsTitle: "Expected Results & Performance Metrics",
      resultsDesc: "Our data-driven approach delivers measurable results across key performance indicators.",

      packageTitle: "Complete Marketing Package",
      packageDesc: "Our comprehensive digital marketing service includes:",

      // Service Cards
      service1Title: "Search Engine Optimization",
      service1Desc: "Comprehensive SEO strategies to improve your website's visibility, drive organic traffic, and achieve higher search engine rankings for relevant keywords.",

      service2Title: "Pay-Per-Click Advertising",
      service2Desc: "Strategic PPC campaigns on Google Ads, Bing, and social platforms to generate immediate traffic and qualified leads with optimal budget efficiency.",

      service3Title: "Social Media Marketing",
      service3Desc: "Engaging content creation and community management across all major social platforms to build brand awareness and foster customer relationships.",

      service4Title: "Content Marketing",
      service4Desc: "Strategic content creation that educates, engages, and converts your target audience while establishing your brand as an industry authority.",

      // Channel Cards
      channel1Title: "Google & SEO",
      channel1Desc: "Dominate search results with our advanced SEO and Google Ads strategies.",

      channel2Title: "Social Media",
      channel2Desc: "Facebook, Instagram, LinkedIn, Twitter, and TikTok marketing solutions.",

      channel3Title: "Email Marketing",
      channel3Desc: "Personalized email campaigns that nurture leads and drive conversions.",

      // Enhanced Paragraphs
      enhancedTitle: "Why Digital Marketing is Essential for Modern Businesses",
      enhanced1: "In today's increasingly digital world, having a strong online presence is no longer optional—it's fundamental to business survival and growth. Digital marketing provides the unique advantage of reaching your exact target audience with precision and efficiency that traditional marketing methods simply cannot match. Through sophisticated data analytics and AI-driven insights, we can identify exactly who your ideal customers are, where they spend their time online, and what messaging resonates most effectively with them. This level of targeting ensures that every marketing dollar is spent efficiently, maximizing your return on investment while minimizing wasted resources.",
      enhanced2: "Beyond mere visibility, effective digital marketing builds meaningful connections with your audience. Through compelling content, engaging social media interactions, and personalized email campaigns, we help transform casual browsers into loyal brand advocates. The digital landscape is constantly evolving, with new platforms, algorithms, and consumer behaviors emerging regularly. Our adaptive approach ensures your marketing strategy remains agile and responsive to these changes, keeping you ahead of competitors while maintaining relevance with your target market. Whether you're looking to increase brand awareness, generate qualified leads, or boost online sales, our comprehensive digital marketing services provide the strategic framework and tactical execution needed to achieve your specific business objectives in the digital age.",

      // Result Metrics
      metric1Value: "40-70%",
      metric1Label: "Increase in Website Traffic",

      metric2Value: "3-5x",
      metric2Label: "Higher Conversion Rates",

      metric3Value: "50-80%",
      metric3Label: "More Qualified Leads",

      metric4Value: "25-60%",
      metric4Label: "Reduction in Cost Per Acquisition",

      // Package List
      package1: "Social media management and campaign optimization",
      package2: "Campaign performance analytics and reporting",
      package3: "Content strategy development and execution",
      package4: "Advanced lead generation tools and techniques",
      package5: "Conversion rate optimization strategies",
      package6: "Competitor analysis and market research",
      package7: "Monthly performance reports and strategy adjustments",
      package8: "Marketing automation setup and management",

      // CTA Section
      ctaTitle: "Transform Your Online Presence with Strategic Marketing",
      ctaText: "Subscribe to our Digital Marketing plan and unlock the full potential of your online marketing efforts. Drive growth, increase visibility, and achieve measurable ROI with our expert digital marketing solutions.",
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

  // State for hover effects
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredChannel, setHoveredChannel] = useState(null);

  // Data arrays
  const services = [
    { title: t("service1Title"), desc: t("service1Desc") },
    { title: t("service2Title"), desc: t("service2Desc") },
    { title: t("service3Title"), desc: t("service3Desc") },
    { title: t("service4Title"), desc: t("service4Desc") },
  ];

  const channels = [
    { icon: "🔍", title: t("channel1Title"), desc: t("channel1Desc") },
    { icon: "📱", title: t("channel2Title"), desc: t("channel2Desc") },
    { icon: "📧", title: t("channel3Title"), desc: t("channel3Desc") },
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
        <div className="dm-container">
          <div className="dm-card">
            <h1 className="dm-title">{t("digitalTitle")}</h1>

            <div className="dm-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="dm-image-section">
              <img
                src={ASSET("/images/general/icons/digital.png")}
                alt="Digital Marketing Solutions"
                className="dm-image"
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

              {/* Channels Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("channelsTitle")}</h2>
                <p className="dm-content-paragraph">{t("channelsDesc")}</p>
                
                <div className="dm-channels">
                  {channels.map((channel, index) => (
                    <div
                      key={index}
                      className={`dm-channel-card ${hoveredChannel === index ? 'dm-channel-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredChannel(index)}
                      onMouseLeave={() => setHoveredChannel(null)}
                    >
                      <span className="dm-channel-icon">{channel.icon}</span>
                      <h3 className="dm-channel-title">{channel.title}</h3>
                      <p className="dm-channel-desc">{channel.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="dm-enhanced">
                <h3 className="dm-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="dm-content-paragraph">{t("enhanced1")}</p>
                <p className="dm-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Results Metrics Section */}
              <div className="dm-section">
                <h2 className="dm-section-title">{t("resultsTitle")}</h2>
                <p className="dm-content-paragraph">{t("resultsDesc")}</p>
                
                <div className="dm-metrics-grid">
                  {metrics.map((metric, index) => (
                    <div key={index} className="dm-metric-card">
                      <div className="dm-metric-value">{metric.value}</div>
                      <div className="dm-metric-label">{metric.label}</div>
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
                <a href="#" className="dm-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="dm-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="dm-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="dm-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="dm-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="dm-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default DigitalMarketing;
