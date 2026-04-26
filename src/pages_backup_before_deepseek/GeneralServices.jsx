import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./GeneralServices.css";

const GeneralServices = ({ targetLang, setTargetLang }) => {
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
      servicesTitle: "Jerry's AI - Complete Service Ecosystem",

      // Hero Section
      heroTitle: "Transform Your World with AI-Powered Solutions",
      heroText: "Jerry's AI offers a comprehensive suite of intelligent services designed to solve real-world problems, enhance productivity, and drive innovation across every aspect of your personal and professional life. Each service is crafted with cutting-edge artificial intelligence to provide seamless, efficient, and effective solutions tailored to your unique needs.",

      // Introduction Section
      introTitle: "Why Choose Jerry's AI?",
      introText: "In today's fast-paced digital landscape, challenges arise constantly—from communication barriers and cybersecurity threats to the need for digital presence and data-driven insights. Jerry's AI stands as your trusted partner, offering intelligent solutions that not only address these challenges but transform them into opportunities for growth and success. Our AI-powered platform combines advanced technology with user-centric design to deliver services that are accessible, reliable, and remarkably effective.",

      // How We Help Section
      helpTitle: "How Jerry's AI Solves Your Problems",
      helpText: "Every service we offer is designed with a single purpose: to make your life easier and your business more successful. Here's how our AI-powered solutions address common challenges:",

      helpPoints: [
        "24/7 Availability: Our AI never sleeps, providing instant support and solutions whenever you need them",
        "Intelligent Automation: Complex tasks become simple through smart automation and AI-driven processes",
        "Personalized Solutions: Each service adapts to your specific needs, learning from your behavior to provide better results",
        "Cost-Effective: Reduce operational costs by automating routine tasks and optimizing resource allocation",
        "Scalable Growth: Start small and expand as your needs grow, with services that scale seamlessly",
        "Expert Guidance: Built-in AI expertise guides you through every process, ensuring optimal results"
      ],

      // Services Overview Section
      servicesOverview: "Our Complete Service Portfolio",
      servicesDesc: "Jerry's AI offers a diverse range of intelligent services, each designed to address specific needs while working together to create a comprehensive digital ecosystem for your success.",

      // Communication & Interaction Services
      commTitle: "Communication & Interaction Services",
      commDesc: "Break down barriers and connect seamlessly with our AI-powered communication tools.",

      // AI Pro Chat
      proChatTitle: "🤖 AI Professional Chat",
      proChatDesc: "Engage in intelligent, context-aware conversations with Jerry's AI. Whether you need business advice, creative brainstorming, technical support, or just friendly conversation, our advanced chat AI provides thoughtful, accurate, and helpful responses 24/7. It learns from your preferences to deliver increasingly personalized interactions over time.",
      proChatHelp: "**How it helps:** Instant access to expert knowledge, never wait for support, get answers to complex questions, brainstorm ideas, overcome writer's block, and have a intelligent companion always available.",

      // AI Pro Chat Info
      proChatInfoTitle: "ℹ️ AI Pro Chat Information",
      proChatInfoDesc: "A comprehensive guide to maximizing your AI chat experience. Learn about features, capabilities, best practices, and tips for getting the most value from your conversations with Jerry's AI. This service ensures you understand the full potential of our chat technology.",
      proChatInfoHelp: "**How it helps:** Master the technology, discover hidden features, learn effective prompting techniques, and unlock the full potential of AI-assisted communication.",

      // Voice Translator
      voiceTitle: "🎤 AI Voice Translator",
      voiceDesc: "Real-time voice translation across 130+ languages. Speak naturally and have your words instantly translated into your listener's preferred language. Perfect for international business meetings, travel, customer support, and connecting with people from different cultures.",
      voiceHelp: "**How it helps:** Eliminate language barriers forever, conduct business globally without interpreters, travel confidently, support international customers, and build meaningful cross-cultural relationships.",

      // ✅ NEW: AI Video Conferencing
      videoTitle: "📹 AI Video Conferencing",
      videoDesc: "Intelligent video meetings with real-time translation, automated note-taking, and smart summaries. Our AI enhances every conversation with live captions, speaker identification, and action item extraction. Perfect for global teams and international clients.",
      videoHelp: "**How it helps:** Break language barriers in live meetings, never miss important points with auto summaries, save time with automated notes, and collaborate effectively across continents.",

      // Digital Presence & Marketing Services
      digitalTitle: "Digital Presence & Marketing Services",
      digitalDesc: "Establish and grow your online presence with our comprehensive digital solutions.",

      // Web Development
      webTitle: "🌐 Web Development",
      webDesc: "Custom website and web application development using cutting-edge technologies. From simple informational sites to complex e-commerce platforms and web apps, we create responsive, fast, and secure digital experiences that represent your brand perfectly.",
      webHelp: "**How it helps:** Establish professional online presence, reach global audiences, showcase products/services 24/7, generate leads automatically, and build credibility with a stunning website.",

      // App Development
      appTitle: "📱 App Development",
      appDesc: "Native and cross-platform mobile applications for iOS and Android. Transform your ideas into powerful mobile experiences that engage users, drive loyalty, and open new revenue streams. Our apps are designed for performance, security, and exceptional user experience.",
      appHelp: "**How it helps:** Connect with customers on their preferred devices, build brand loyalty through dedicated apps, access device features (camera, GPS, notifications), and create new business opportunities.",

      // Add Banner
      bannerTitle: "📢 AI Banner Advertising",
      bannerDesc: "Intelligent, dynamic banner creation and placement. Our AI generates personalized, high-converting banners tailored to your audience, automatically optimizes for performance, and places them where they'll have the most impact.",
      bannerHelp: "**How it helps:** Create professional ads in minutes, reach targeted audiences, increase click-through rates, reduce advertising costs, and maximize ROI on marketing spend.",

      // Digital Marketing
      marketingTitle: "📈 Digital Marketing",
      marketingDesc: "Comprehensive marketing solutions including SEO, content marketing, social media management, and email campaigns. Our AI-driven strategies ensure your message reaches the right people at the right time.",
      marketingHelp: "**How it helps:** Increase brand visibility, attract qualified leads, engage with your audience authentically, measure campaign performance, and achieve sustainable business growth.",

      // SEO
      seoTitle: "🔍 Launch SEO Globally",
      seoDesc: "Global search engine optimization that puts your website at the top of search results. Our AI analyzes search patterns, optimizes your content, and builds authority to drive organic traffic from around the world.",
      seoHelp: "**How it helps:** Dominate search rankings, attract free organic traffic, build long-term visibility, understand customer search behavior, and outperform competitors.",

      // ✅ NEW: Social Media Management
      socialTitle: "📱 Social Media Management",
      socialDesc: "Complete social media strategy, content creation, and community management across all major platforms. Our AI analyzes engagement patterns to optimize posting times, content types, and audience interactions for maximum reach and growth.",
      socialHelp: "**How it helps:** Build engaged communities, increase brand awareness, drive website traffic, generate leads through social channels, and measure ROI on every post.",

      // Data & Security Services
      dataTitle: "Data & Security Services",
      dataDesc: "Protect your assets and unlock insights with our intelligent data and security solutions.",

      // Analyse Data
      analyseTitle: "📊 Analyse Data & Report",
      analyseDesc: "Transform raw data into actionable insights. Our AI analyzes complex datasets, identifies patterns, generates comprehensive reports, and provides predictive analytics to inform better decision-making. Includes 5 chart types: Bar, Circle, Floating, 3D, and Future Prediction.",
      analyseHelp: "**How it helps:** Make data-driven decisions, identify trends before competitors, visualize complex information, predict future outcomes, and communicate insights effectively.",

      // Cybersecurity
      cyberTitle: "🛡️ Enhance Cybersecurity",
      cyberDesc: "Comprehensive protection for your digital assets. Our AI-powered security systems monitor threats in real-time, conduct vulnerability assessments, implement enterprise-grade firewalls, and ensure compliance with data protection regulations.",
      cyberHelp: "**How it helps:** Prevent data breaches, protect customer information, maintain business continuity, comply with regulations, and build trust with stakeholders.",

      // Find My Phone
      phoneTitle: "📱 Find My Phone Location",
      phoneDesc: "Never lose your device again. Advanced phone tracking with real-time location data, network integration for offline tracking, and emergency notification systems. Works globally across all networks and devices.",
      phoneHelp: "**How it helps:** Locate lost devices instantly, protect personal data, track family members' safety, recover stolen phones, and gain peace of mind.",

      // ✅ NEW: Data Backup & Recovery
      backupTitle: "💾 Data Backup & Recovery",
      backupDesc: "Automated, secure backup solutions for all your critical data. Our AI-powered system ensures your files, databases, and applications are continuously protected with instant recovery options and version history.",
      backupHelp: "**How it helps:** Never lose important data, recover from accidents instantly, protect against ransomware, maintain business continuity, and sleep peacefully knowing your data is safe.",

      // Education & Learning Services
      eduTitle: "Education & Learning Services",
      eduDesc: "Empower yourself and your team with AI-enhanced learning solutions.",

      // Education
      educationTitle: "🎓 AI Education",
      educationDesc: "Personalized learning paths powered by AI. Whether you're learning new skills, training employees, or educating students, our platform adapts to individual learning styles, provides intelligent tutoring, and tracks progress with detailed analytics.",
      educationHelp: "**How it helps:** Learn faster with personalized content, identify knowledge gaps, receive 24/7 tutoring support, track learning progress, and achieve educational goals efficiently.",

      // ✅ NEW: Corporate Training
      corporateTitle: "🏢 Corporate Training",
      corporateDesc: "Enterprise-grade AI training solutions for teams and organizations. Custom learning paths, progress tracking for multiple employees, team analytics, and specialized content for different departments and skill levels.",
      corporateHelp: "**How it helps:** Upskill entire teams efficiently, track collective progress, identify skill gaps across organization, ensure consistent training, and measure training ROI.",

      // Efficiency & Effectiveness Section
      efficiencyTitle: "The Jerry's AI Advantage: Unmatched Efficiency & Effectiveness",
      efficiencyText: "What sets Jerry's AI apart is not just the individual services, but how they work together to create a seamless, intelligent ecosystem that amplifies your success:",

      efficiencyPoints: [
        {
          title: "⚡ Lightning-Fast Resolution",
          desc: "Our AI processes complex problems in seconds, delivering solutions that would take humans hours or days. From analyzing data to translating languages, speed is built into every service."
        },
        {
          title: "🎯 Precision & Accuracy",
          desc: "With 98% translation accuracy, predictive analytics that anticipate trends, and security systems that detect threats before they materialize, our services deliver reliable, trustworthy results."
        },
        {
          title: "🔄 Continuous Learning",
          desc: "Every interaction makes our AI smarter. Services improve over time, learning from your preferences, feedback, and usage patterns to deliver increasingly personalized and effective solutions."
        },
        {
          title: "💼 Cost Transformation",
          desc: "Replace expensive human services with affordable AI alternatives. Save 60-80% on translation, marketing, development, and analysis costs while maintaining or improving quality."
        },
        {
          title: "🌍 Global Scale",
          desc: "From local businesses to international enterprises, our services scale to your needs. Support customers in 130+ languages, reach global markets, and operate across time zones effortlessly."
        },
        {
          title: "🔒 Enterprise-Grade Security",
          desc: "All services are built with security-first architecture, ensuring your data, conversations, and business information remain private, protected, and compliant with international regulations."
        }
      ],

      // Problem-Solution Summary
      problemTitle: "Comprehensive Problem-Solving Matrix",
      problemDesc: "Whatever challenge you face, Jerry's AI has a solution:",

      problemMatrix: [
        { problem: "Language barriers in communication", solution: "AI Voice Translator - Real-time translation across 130+ languages" },
        { problem: "Need instant expert advice or support", solution: "AI Professional Chat - 24/7 intelligent conversation and assistance" },
        { problem: "No website or poor online presence", solution: "Web Development - Custom, professional websites that drive business" },
        { problem: "Need a mobile app but lack development skills", solution: "App Development - Native iOS and Android apps built for you" },
        { problem: "Low website traffic and visibility", solution: "SEO & Digital Marketing - Drive organic traffic and brand awareness" },
        { problem: "Ineffective advertising with poor ROI", solution: "AI Banner Advertising - Intelligent, high-converting ad campaigns" },
        { problem: "Overwhelmed by data, need insights", solution: "Analyse Data & Report - Transform data into actionable intelligence" },
        { problem: "Worried about cyber threats and breaches", solution: "Enhance Cybersecurity - Comprehensive protection for digital assets" },
        { problem: "Constantly losing or misplacing phone", solution: "Find My Phone - Real-time tracking and recovery services" },
        { problem: "Need to learn new skills efficiently", solution: "AI Education - Personalized learning paths with AI tutoring" },
        { problem: "Unsure which service fits your needs", solution: "General Services Guide - Complete overview and consultation support" },
        { problem: "Remote team collaboration challenges", solution: "AI Video Conferencing - Smart meetings with translation and summaries" },
        { problem: "Struggling with social media growth", solution: "Social Media Management - AI-powered content and engagement" },
        { problem: "Fear of losing important data", solution: "Data Backup & Recovery - Automated, secure backup solutions" },
        { problem: "Need to train entire organization", solution: "Corporate Training - Enterprise AI learning solutions" }
      ],

      // Guidance Section
      guidanceTitle: "Expert Guidance Every Step of the Way",
      guidanceText: "Not sure where to start? Jerry's AI provides built-in guidance across all services:",

      guidancePoints: [
        "🎯 **Service Selector:** Answer a few questions, and our AI recommends the perfect service package for your needs",
        "📘 **Interactive Tutorials:** Step-by-step guidance through each service's features and capabilities",
        "💬 **Live AI Support:** 24/7 chat assistance to answer questions and help you navigate any service",
        "📊 **Progress Tracking:** Monitor your usage, results, and ROI across all subscribed services",
        "🔄 **Service Integration:** Our AI suggests how different services can work together for enhanced results",
        "📞 **Human Backup:** Complex issues can be escalated to our expert team for personalized attention"
      ],

      // Call to Action
      ctaTitle: "Start Your Journey with Jerry's AI Today",
      ctaText: "Experience the power of integrated AI solutions. Whether you're an individual seeking to enhance productivity or a business aiming to transform operations, Jerry's AI has the perfect service package for you. Subscribe to any service individually or bundle them for maximum value and seamless integration.",
      ctaButton: "Explore Subscription Plans",

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
  const [hoveredFooterLink, setHoveredFooterLink] = useState({ section: null, index: null });

  // Data arrays
  const communicationServices = [
    { key: "proChat", title: t("proChatTitle"), desc: t("proChatDesc"), help: t("proChatHelp") },
    { key: "proChatInfo", title: t("proChatInfoTitle"), desc: t("proChatInfoDesc"), help: t("proChatInfoHelp") },
    { key: "voice", title: t("voiceTitle"), desc: t("voiceDesc"), help: t("voiceHelp") },
    { key: "video", title: t("videoTitle"), desc: t("videoDesc"), help: t("videoHelp") }
  ];

  const digitalServices = [
    { key: "web", title: t("webTitle"), desc: t("webDesc"), help: t("webHelp") },
    { key: "app", title: t("appTitle"), desc: t("appDesc"), help: t("appHelp") },
    { key: "banner", title: t("bannerTitle"), desc: t("bannerDesc"), help: t("bannerHelp") },
    { key: "marketing", title: t("marketingTitle"), desc: t("marketingDesc"), help: t("marketingHelp") },
    { key: "seo", title: t("seoTitle"), desc: t("seoDesc"), help: t("seoHelp") },
    { key: "social", title: t("socialTitle"), desc: t("socialDesc"), help: t("socialHelp") }
  ];

  const dataServices = [
    { key: "analyse", title: t("analyseTitle"), desc: t("analyseDesc"), help: t("analyseHelp") },
    { key: "cyber", title: t("cyberTitle"), desc: t("cyberDesc"), help: t("cyberHelp") },
    { key: "phone", title: t("phoneTitle"), desc: t("phoneDesc"), help: t("phoneHelp") },
    { key: "backup", title: t("backupTitle"), desc: t("backupDesc"), help: t("backupHelp") }
  ];

  const educationServices = [
    { key: "education", title: t("educationTitle"), desc: t("educationDesc"), help: t("educationHelp") },
    { key: "corporate", title: t("corporateTitle"), desc: t("corporateDesc"), help: t("corporateHelp") }
  ];

  const helpPoints = t("helpPoints");
  const efficiencyPoints = t("efficiencyPoints");
  const problemMatrix = t("problemMatrix");
  const guidancePoints = t("guidancePoints");

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
        <div className="gs-container">
          <div className="gs-card">
            <h1 className="gs-title">{t("servicesTitle")}</h1>

            {/* Hero Section */}
            <div className="gs-hero-section">
              <h2 className="gs-hero-title">{t("heroTitle")}</h2>
              <p className="gs-hero-text">{t("heroText")}</p>
            </div>

            {/* Introduction */}
            <div className="gs-section">
              <h2 className="gs-section-title">{t("introTitle")}</h2>
              <p>{t("introText")}</p>
            </div>

            {/* How We Help */}
            <div className="gs-section">
              <h2 className="gs-section-title">{t("helpTitle")}</h2>
              <p style={{ marginBottom: "20px" }}>{t("helpText")}</p>
              <div className="gs-help-points">
                {helpPoints.map((point, index) => (
                  <div key={index} className="gs-help-point">{point}</div>
                ))}
              </div>
            </div>

            {/* Services Overview */}
            <h2 className="gs-subsection-title">{t("servicesOverview")}</h2>
            <p style={{ marginBottom: "30px" }}>{t("servicesDesc")}</p>

            {/* Communication Services */}
            <h3 className="gs-service-category">{t("commTitle")}</h3>
            <p style={{ marginBottom: "20px" }}>{t("commDesc")}</p>
            <div className="gs-service-grid">
              {communicationServices.map((service, index) => (
                <div
                  key={index}
                  className={`gs-service-card ${hoveredService === `comm-${index}` ? 'gs-service-card-hover' : ''}`}
                  onMouseEnter={() => setHoveredService(`comm-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="gs-service-title">{service.title}</h4>
                  <p className="gs-service-desc">{service.desc}</p>
                  <div className="gs-service-help">{service.help}</div>
                </div>
              ))}
            </div>

            {/* Digital Services */}
            <h3 className="gs-service-category">{t("digitalTitle")}</h3>
            <p style={{ marginBottom: "20px" }}>{t("digitalDesc")}</p>
            <div className="gs-service-grid">
              {digitalServices.map((service, index) => (
                <div
                  key={index}
                  className={`gs-service-card ${hoveredService === `digital-${index}` ? 'gs-service-card-hover' : ''}`}
                  onMouseEnter={() => setHoveredService(`digital-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="gs-service-title">{service.title}</h4>
                  <p className="gs-service-desc">{service.desc}</p>
                  <div className="gs-service-help">{service.help}</div>
                </div>
              ))}
            </div>

            {/* Data Services */}
            <h3 className="gs-service-category">{t("dataTitle")}</h3>
            <p style={{ marginBottom: "20px" }}>{t("dataDesc")}</p>
            <div className="gs-service-grid">
              {dataServices.map((service, index) => (
                <div
                  key={index}
                  className={`gs-service-card ${hoveredService === `data-${index}` ? 'gs-service-card-hover' : ''}`}
                  onMouseEnter={() => setHoveredService(`data-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="gs-service-title">{service.title}</h4>
                  <p className="gs-service-desc">{service.desc}</p>
                  <div className="gs-service-help">{service.help}</div>
                </div>
              ))}
            </div>

            {/* Education Services */}
            <h3 className="gs-service-category">{t("eduTitle")}</h3>
            <p style={{ marginBottom: "20px" }}>{t("eduDesc")}</p>
            <div className="gs-service-grid">
              {educationServices.map((service, index) => (
                <div
                  key={index}
                  className={`gs-service-card ${hoveredService === `edu-${index}` ? 'gs-service-card-hover' : ''}`}
                  onMouseEnter={() => setHoveredService(`edu-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="gs-service-title">{service.title}</h4>
                  <p className="gs-service-desc">{service.desc}</p>
                  <div className="gs-service-help">{service.help}</div>
                </div>
              ))}
            </div>

            {/* Efficiency Section */}
            <div className="gs-section">
              <h2 className="gs-section-title">{t("efficiencyTitle")}</h2>
              <p style={{ marginBottom: "30px" }}>{t("efficiencyText")}</p>
              <div className="gs-efficiency-grid">
                {efficiencyPoints.map((point, index) => (
                  <div key={index} className="gs-efficiency-card">
                    <h4 className="gs-efficiency-card-title">{point.title}</h4>
                    <p className="gs-efficiency-card-desc">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Matrix */}
            <div className="gs-section">
              <h2 className="gs-section-title">{t("problemTitle")}</h2>
              <p style={{ marginBottom: "20px" }}>{t("problemDesc")}</p>
              <div className="gs-matrix-grid">
                {problemMatrix.map((item, index) => (
                  <div key={index} className="gs-matrix-item">
                    <div className="gs-matrix-problem">❓ {item.problem}</div>
                    <div className="gs-matrix-solution">✅ {item.solution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidance Section */}
            <div className="gs-section">
              <h2 className="gs-section-title">{t("guidanceTitle")}</h2>
              <p style={{ marginBottom: "20px" }}>{t("guidanceText")}</p>
              <div className="gs-guidance-grid">
                {guidancePoints.map((point, index) => (
                  <div key={index} className="gs-guidance-item">{point}</div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="gs-cta-section">
              <h3 className="gs-cta-title">{t("ctaTitle")}</h3>
              <p className="gs-cta-text">{t("ctaText")}</p>
              <Link to="/pricing" className="gs-cta-button">
                {t("ctaButton")}
              </Link>
            </div>

            <div className="gs-meta">{t("meta")}</div>
          </div>
        </div>

       {/* FOOTER */}
<footer>
  <div className="gs-footer-inner">
    <div>
      <div className="gs-footer-title">{t("footerCompany")}</div>
      <div className="gs-footer-links">
        <Link to="/about" className="gs-footer-link">{t("aboutUs")}</Link>
        <Link to="/support" className="gs-footer-link">{t("support")}</Link>
        <Link to="/contact" className="gs-footer-link">{t("contactUs")}</Link>
        <Link to="/GeneralServices" className="gs-footer-link">{t("generalServices")}</Link>
        <Link to="/pricing" className="gs-footer-link">{t("pricing")}</Link>
      </div>
    </div>

    <div>
      <div className="gs-footer-title">{t("footerServices")}</div>
      <div className="gs-footer-links">
        <Link to="/subscribe" className="gs-footer-link">{t("subscriptionPlan")}</Link>
        <Link to="/ai-pro-chat-info" className="gs-footer-link">{t("professionalAIChat")}</Link>
        <Link to="/add-banner" className="gs-footer-link">{t("addBannerFooter")}</Link>
        <Link to="/education" className="gs-footer-link">{t("educationFooter")}</Link>
        <Link to="/web-development" className="gs-footer-link">{t("webDevelopmentFooter")}</Link>
        <Link to="/app-development" className="gs-footer-link">{t("appDevelopmentFooter")}</Link>
        <Link to="/digital-marketing" className="gs-footer-link">{t("digitalMarketingFooter")}</Link>
        <Link to="/voice-translator" className="gs-footer-link">{t("voiceTranslatorFooter")}</Link>
        <Link to="/analyse-data" className="gs-footer-link">{t("analyseDataFooter")}</Link>
        <Link to="/cybersecurity" className="gs-footer-link">{t("enhanceCyberFooter")}</Link>
        <Link to="/find-my-phone" className="gs-footer-link">{t("findMyPhoneFooter")}</Link>
      </div>
    </div>

    <div>
      <div className="gs-footer-title">{t("footerLegality")}</div>
      <div className="gs-footer-links">
        <Link to="/terms" className="gs-footer-link">{t("terms")}</Link>
        <Link to="/privacy" className="gs-footer-link">{t("privacy")}</Link>
        <Link to="/pdpa" className="gs-footer-link">{t("pdpa")}</Link>
        <Link to="/services" className="gs-footer-link">{t("servicesPolicy")}</Link>
      </div>
    </div>

    <div>
      <div className="gs-footer-title">{t("footerConnection")}</div>
      <div className="gs-footer-links">
        <a href="#" className="gs-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
          {t("facebook")}
        </a>
        <a href="#" className="gs-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
          {t("linkedin")}
        </a>
        <a href="#" className="gs-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
          {t("twitter")}
        </a>
        <a href="#" className="gs-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
          {t("tiktok")}
        </a>
        <a href="#" className="gs-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
          {t("telegram")}
        </a>
      </div>
    </div>
  </div>

  <div className="gs-copyright">{t("copyright")}</div>
</footer>
      </div>
    </>
  );
};

export default GeneralServices;