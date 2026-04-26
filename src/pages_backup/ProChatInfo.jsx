import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./ProChatInfo.css"; // Import the CSS file

const AIProChatInfo = ({ targetLang, setTargetLang }) => {
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
      proChatTitle: "AI Professional Chat",

      // Intro Text
      introText: "The best benefit of AI Chat is providing instant, 24/7 personalized support and information, dramatically improving customer satisfaction and business efficiency by eliminating wait times, scaling operations, and offering tailored experiences, essentially giving everyone immediate access to knowledge and assistance anytime, anywhere.",

      // Image Caption
      imageCaption: "Advanced AI-Powered Professional Chat Solutions",

      // Section Titles
      advantagesTitle: "Key Advantages of AI Chatbots",
      advantagesDesc: "Our AI professional chat technology revolutionizes customer service and information access through intelligent, responsive conversation systems.",

      statsTitle: "Chat Performance Statistics",
      statsDesc: "Our AI professional chat solutions deliver measurable improvements in customer service efficiency and satisfaction.",

      applicationsTitle: "Professional Applications",
      applicationsDesc: "Our AI chat technology serves diverse professional needs across multiple industries and use cases.",

      whyBestTitle: "Why It's the \"Best\" Benefit",
      whyBestDesc: "This combination of capabilities addresses fundamental human needs for quick, relevant information and assistance, transforming how users interact with businesses and information sources. AI professional chat makes services more accessible and personalized for everyone by:",

      packageTitle: "Complete Professional Chat Package",
      packageDesc: "Our comprehensive AI professional chat service includes:",

      // Advantage Cards
      advantage1Title: "24/7 Availability & Instant Responses",
      advantage1Desc: "AI chatbots never sleep, offering immediate help globally, reducing frustration from waiting for human agents and ensuring constant support availability.",

      advantage2Title: "Personalization at Scale",
      advantage2Desc: "AI remembers past interactions to offer tailored suggestions and content, making users feel understood and valued with contextually relevant responses.",

      advantage3Title: "Efficiency & Cost Savings",
      advantage3Desc: "Automating common inquiries frees up human teams for complex issues, reducing operational costs while maintaining high-quality customer service standards.",

      advantage4Title: "Faster Resolutions",
      advantage4Desc: "Quick access to information or solutions shortens the time customers spend seeking help, boosting satisfaction through rapid problem resolution.",

      advantage5Title: "Data & Insights Collection",
      advantage5Desc: "AI chatbots collect valuable data on customer needs, preferences, and pain points, helping businesses improve services, products, and user experiences.",

      advantage6Title: "Seamless Handoff Capability",
      advantage6Desc: "Advanced bots can intelligently pass complex issues to human agents with full context, ensuring smooth transitions and maintaining conversation continuity.",

      // Statistics
      stat1Value: "2-3s",
      stat1Label: "Average Response Time",
      stat2Value: "85%",
      stat2Label: "First Contact Resolution",
      stat3Value: "70%",
      stat3Label: "Cost Reduction",

      // Enhanced Paragraphs
      enhancedTitle: "Transforming Communication Through Intelligent Conversation",
      enhanced1: "AI professional chat represents a paradigm shift in how businesses and individuals access information and support. Unlike traditional communication channels that operate within fixed hours and suffer from human limitations, AI-powered chat systems provide instant, accurate, and contextually aware responses around the clock. These sophisticated systems leverage natural language processing and machine learning to understand not just the words but the intent behind user queries, enabling conversations that feel genuinely helpful rather than robotic or scripted. This technology democratizes access to expert knowledge, making professional-grade advice and support available to everyone regardless of time zone, location, or organizational size—transforming what was once a luxury service into a universally accessible utility.",
      enhanced2: "Beyond mere convenience, AI professional chat creates meaningful business advantages through continuous learning and adaptation. Each interaction serves as a learning opportunity, allowing the system to refine its responses, identify emerging patterns, and anticipate user needs before they're explicitly stated. This creates a virtuous cycle where the chat system becomes increasingly sophisticated and valuable over time. For businesses, this translates to deeper customer relationships, improved brand loyalty, and valuable insights into customer behavior that inform product development and service improvements. The system's ability to handle multiple simultaneous conversations at scale while maintaining personalized interactions represents a quantum leap in customer service efficiency, allowing organizations to provide premium support experiences without corresponding increases in operational costs.",

      // Application Cards
      app1Title: "Customer Support",
      app1Desc: "24/7 customer service with instant responses, reducing wait times and improving satisfaction",
      
      app2Title: "E-commerce Assistance",
      app2Desc: "Product recommendations, order tracking, and shopping guidance for online retailers",
      
      app3Title: "Business Consultations",
      app3Desc: "Professional advice and consultation services across various business domains",
      
      app4Title: "Healthcare Support",
      app4Desc: "Medical information, appointment scheduling, and preliminary health assessments",
      
      app5Title: "Financial Services",
      app5Desc: "Account inquiries, transaction assistance, and basic financial guidance",
      
      app6Title: "Educational Tutoring",
      app6Desc: "Personalized learning support, homework assistance, and educational guidance",

      // Why Best List
      whyBest1: "Eliminating geographical and temporal barriers to expert knowledge",
      whyBest2: "Providing consistent, high-quality interactions regardless of scale",
      whyBest3: "Learning from each interaction to improve future responses",
      whyBest4: "Integrating seamlessly with existing business systems and workflows",
      whyBest5: "Offering multilingual support to serve global audiences",
      whyBest6: "Maintaining detailed conversation histories for context-aware interactions",
      whyBest7: "Supporting voice-to-text and text-to-voice capabilities for accessibility",
      whyBest8: "Providing analytics and insights to inform business decisions",

      // Package List
      package1: "Unlimited AI-powered chat with priority response speeds",
      package2: "Advanced voice-to-text and AI voice reply capabilities",
      package3: "Comprehensive chat history storage and management",
      package4: "Cross-platform compatibility with iOS and Android applications",
      package5: "Natural language understanding with context awareness",
      package6: "Multi-language support for global accessibility",
      package7: "Enterprise-grade security and privacy protections",
      package8: "Customizable personality and response styles",
      package9: "Integration capabilities with existing business systems",
      package10: "Real-time analytics and performance reporting",

      // CTA Section
      ctaTitle: "Experience Next-Generation Professional Communication",
      ctaText: "Subscribe to our AI Professional Chat plan and gain access to unlimited AI-powered conversations, priority response speeds, voice interaction capabilities, and comprehensive chat management features. Transform how you communicate professionally.",
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
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  // Data arrays
  const advantages = [
    { title: t("advantage1Title"), desc: t("advantage1Desc") },
    { title: t("advantage2Title"), desc: t("advantage2Desc") },
    { title: t("advantage3Title"), desc: t("advantage3Desc") },
    { title: t("advantage4Title"), desc: t("advantage4Desc") },
    { title: t("advantage5Title"), desc: t("advantage5Desc") },
    { title: t("advantage6Title"), desc: t("advantage6Desc") },
  ];

  const stats = [
    { icon: "⚡", value: t("stat1Value"), label: t("stat1Label") },
    { icon: "📈", value: t("stat2Value"), label: t("stat2Label") },
    { icon: "💰", value: t("stat3Value"), label: t("stat3Label") },
  ];

  const applications = [
    { icon: "🏢", title: t("app1Title"), desc: t("app1Desc") },
    { icon: "🛒", title: t("app2Title"), desc: t("app2Desc") },
    { icon: "💼", title: t("app3Title"), desc: t("app3Desc") },
    { icon: "🏥", title: t("app4Title"), desc: t("app4Desc") },
    { icon: "🏦", title: t("app5Title"), desc: t("app5Desc") },
    { icon: "🎓", title: t("app6Title"), desc: t("app6Desc") },
  ];

  const whyBestList = [
    t("whyBest1"),
    t("whyBest2"),
    t("whyBest3"),
    t("whyBest4"),
    t("whyBest5"),
    t("whyBest6"),
    t("whyBest7"),
    t("whyBest8"),
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
    t("package9"),
    t("package10"),
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
        <div className="prochat-container">
          <div className="prochat-card">
            <h1 className="prochat-title">{t("proChatTitle")}</h1>

            <div className="prochat-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="prochat-image-section">
              <img
                src={ASSET("/images/general/icons/ai_pro_chat.png")}
                alt="AI Professional Chat Interface"
                className="prochat-image"
              />
              <div className="prochat-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="prochat-content">
              {/* Advantages Section */}
              <div className="prochat-section">
                <h2 className="prochat-section-title">{t("advantagesTitle")}</h2>
                <p className="prochat-content-paragraph">{t("advantagesDesc")}</p>
                
                <div className="prochat-advantages-grid">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className={`prochat-advantage-card ${hoveredAdvantage === index ? 'prochat-advantage-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredAdvantage(index)}
                      onMouseLeave={() => setHoveredAdvantage(null)}
                    >
                      <h3 className="prochat-advantage-title">{advantage.title}</h3>
                      <p className="prochat-advantage-desc">{advantage.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Section */}
              <div className="prochat-section">
                <h2 className="prochat-section-title">{t("statsTitle")}</h2>
                <p className="prochat-content-paragraph">{t("statsDesc")}</p>
                
                <div className="prochat-stats">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`prochat-stat-card ${hoveredStat === index ? 'prochat-stat-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                    >
                      <span className="prochat-stat-icon">{stat.icon}</span>
                      <div className="prochat-stat-value">{stat.value}</div>
                      <div className="prochat-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="prochat-enhanced">
                <h3 className="prochat-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="prochat-content-paragraph">{t("enhanced1")}</p>
                <p className="prochat-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Applications Section */}
              <div className="prochat-section">
                <h2 className="prochat-section-title">{t("applicationsTitle")}</h2>
                <p className="prochat-content-paragraph">{t("applicationsDesc")}</p>
                
                <div className="prochat-applications-grid">
                  {applications.map((app, index) => (
                    <div key={index} className="prochat-application-card">
                      <span className="prochat-application-icon">{app.icon}</span>
                      <h3 className="prochat-application-title">{app.title}</h3>
                      <p className="prochat-application-desc">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Best Section */}
              <div className="prochat-section">
                <h2 className="prochat-section-title">{t("whyBestTitle")}</h2>
                <p className="prochat-content-paragraph">{t("whyBestDesc")}</p>
                <ul className="prochat-list">
                  {whyBestList.map((item, index) => (
                    <li key={index} className="prochat-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Package Section */}
              <div className="prochat-section">
                <h2 className="prochat-section-title">{t("packageTitle")}</h2>
                <p className="prochat-content-paragraph">{t("packageDesc")}</p>
                <ul className="prochat-list">
                  {packageList.map((item, index) => (
                    <li key={index} className="prochat-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="prochat-cta">
                <h3 className="prochat-cta-title">{t("ctaTitle")}</h3>
                <p className="prochat-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="prochat-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="prochat-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="prochat-footer-inner">
            <div>
              <div className="prochat-footer-title">{t("footerCompany")}</div>
              <div className="prochat-footer-links">
                <Link to="/about" className="prochat-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="prochat-footer-link">{t("support")}</Link>
                <Link to="/contact" className="prochat-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="prochat-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="prochat-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="prochat-footer-title">{t("footerServices")}</div>
              <div className="prochat-footer-links">
                <Link to="/subscribe" className="prochat-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="prochat-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="prochat-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="prochat-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="prochat-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="prochat-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="prochat-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="prochat-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="prochat-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="prochat-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="prochat-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="prochat-footer-title">{t("footerLegality")}</div>
              <div className="prochat-footer-links">
                <Link to="/terms" className="prochat-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="prochat-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="prochat-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="prochat-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="prochat-footer-title">{t("footerConnection")}</div>
              <div className="prochat-footer-links">
                <a href="#" className="prochat-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="prochat-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="prochat-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="prochat-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="prochat-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="prochat-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default AIProChatInfo;
