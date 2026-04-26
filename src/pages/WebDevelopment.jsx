import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import "./WebDevelopment.css";

const WebDevelopment = ({ targetLang, setTargetLang }) => {
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
  const [hoveredTech, setHoveredTech] = useState(null);

  // =========================
  // 2️⃣ ENGLISH SOURCE TEXT (FULLY INTACT)
  // =========================
  const EN = {
    // Page Title
    webDevTitle: "Web Development Services",

    // Intro Text
    introText: "At Jerry's AI, our web development services empower your business with customized, secure, and scalable web applications. From static websites to dynamic platforms, we ensure clean UI, responsive layouts, and fast loading speeds. Whether you're a startup or enterprise, we craft solutions tailored for you. Reach global audiences with SEO-optimized, mobile-friendly websites powered by the latest technologies. Let's bring your online vision to life today.",

    // Image Caption
    imageCaption: "Professional Web Development & Digital Solutions",

    // Section Titles
    expertiseTitle: "Our Web Development Expertise",
    expertiseDesc: "We provide comprehensive web development solutions designed to create powerful digital experiences that drive business growth and engage your target audience effectively.",

    techTitle: "Technology Stack",
    techDesc: "We work with cutting-edge technologies and frameworks to deliver high-performance web solutions.",

    benefitsTitle: "Key Benefits of Our Web Development",
    benefitsDesc: "Our development approach delivers tangible advantages that drive business growth and user satisfaction.",

    packageTitle: "Complete Development Package",
    packageDesc: "Our comprehensive web development service includes:",

    // Service Cards
    service1Title: "Frontend Development",
    service1Desc: "Creating beautiful, intuitive user interfaces with modern frameworks like React, Vue.js, and Angular for exceptional user experiences across all devices.",

    service2Title: "Backend Development",
    service2Desc: "Building robust server-side architectures using Node.js, Python, Java, and PHP to ensure performance, security, and scalability for your applications.",

    service3Title: "Full-Stack Solutions",
    service3Desc: "End-to-end web application development that seamlessly integrates frontend and backend technologies for complete digital solutions.",

    service4Title: "E-commerce Development",
    service4Desc: "Building secure, scalable online stores with payment gateway integration, inventory management, and seamless shopping experiences.",

    // Tech Stack Cards
    tech1Title: "React",
    tech1Desc: "Modern JavaScript library for building dynamic user interfaces",

    tech2Title: "Python",
    tech2Desc: "Powerful backend development with Django and Flask frameworks",

    tech3Title: "Databases",
    tech3Desc: "MySQL, PostgreSQL, MongoDB for reliable data management",

    tech4Title: "Cloud",
    tech4Desc: "AWS, Azure, Google Cloud for scalable hosting solutions",

    // Enhanced Paragraphs
    enhancedTitle: "The Strategic Value of Professional Web Development",
    enhanced1: "In today's digital-first economy, your website is often the first point of contact between your business and potential customers. A professionally developed website serves as more than just an online brochure—it's a powerful business tool that operates 24/7, representing your brand, showcasing your products or services, and converting visitors into customers. Unlike template-based solutions that offer limited customization and scalability, custom web development provides the flexibility to create unique digital experiences tailored specifically to your business objectives and target audience. This level of customization ensures your website not only looks exceptional but also functions perfectly across all devices and browsers, providing a seamless user experience that builds trust and encourages engagement.",
    enhanced2: "Beyond aesthetics and functionality, professional web development incorporates critical elements that directly impact your business success. Search engine optimization (SEO) is built into the foundation of our development process, ensuring your website is structured and coded to rank well in search results. Performance optimization techniques guarantee fast loading speeds, which significantly reduces bounce rates and improves user satisfaction. Security measures protect both your business and your customers' data from emerging threats. Scalability planning ensures your website can grow alongside your business, accommodating increased traffic and functionality requirements without compromising performance. Whether you need a simple informational site or a complex web application with advanced features, our web development services provide the technical expertise and strategic insight needed to create digital solutions that deliver measurable business results.",

    // Benefit Cards
    benefit1Title: "High Performance",
    benefit1Desc: "Optimized code and architecture for lightning-fast loading speeds",

    benefit2Title: "Mobile Responsive",
    benefit2Desc: "Seamless experience across all devices and screen sizes",

    benefit3Title: "Enhanced Security",
    benefit3Desc: "Enterprise-level security protocols and regular updates",

    benefit4Title: "SEO Optimized",
    benefit4Desc: "Built-in SEO best practices for better search visibility",

    benefit5Title: "Easy Maintenance",
    benefit5Desc: "Clean, documented code for simple updates and modifications",

    benefit6Title: "Global Reach",
    benefit6Desc: "Multilingual support and internationalization capabilities",

    // Package List
    package1: "Full-stack web development with modern technologies",
    package2: "Python, Java, C#, HTML, CSS, JavaScript, and more",
    package3: "Frontend & backend architecture and implementation",
    package4: "Responsive design for all device types",
    package5: "Database integration and management",
    package6: "Ongoing maintenance and support",
    package7: "Performance optimization and monitoring",
    package8: "Security audits and implementation",
    package9: "Search engine optimization (SEO) integration",
    package10: "Analytics and reporting setup",

    // CTA Section
    ctaTitle: "Build Your Digital Presence with Expert Web Development",
    ctaText: "Subscribe to our Web Development plan and access professional web development services that transform your ideas into powerful digital solutions. Create engaging, high-performance websites and applications that drive business growth.",
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
  const { translatedText, isTranslating, error: translationError } = useDeepSeekTranslation(EN, targetLang);

  // Safe t() function with fallback
  const t = (key) => {
    if (!translatedText) return EN[key] || key;
    return translatedText[key] || EN[key] || key;
  };

  // Loading indicator for translation
  if (isTranslating && targetLang !== 'en') {
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
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>🌐 Translating to {targetLang}...</h3>
          <p>Please wait while DeepSeek translates the content.</p>
        </div>
      </>
    );
  }

  if (translationError) {
    console.error('Translation error:', translationError);
  }

  // Data arrays (KEPT INTACT)
  const services = [
    { title: t("service1Title"), desc: t("service1Desc") },
    { title: t("service2Title"), desc: t("service2Desc") },
    { title: t("service3Title"), desc: t("service3Desc") },
    { title: t("service4Title"), desc: t("service4Desc") },
  ];

  const techStack = [
    { icon: "⚛️", title: t("tech1Title"), desc: t("tech1Desc") },
    { icon: "🐍", title: t("tech2Title"), desc: t("tech2Desc") },
    { icon: "🗄️", title: t("tech3Title"), desc: t("tech3Desc") },
    { icon: "☁️", title: t("tech4Title"), desc: t("tech4Desc") },
  ];

  const benefits = [
    { icon: "⚡", title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: "📱", title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: "🔒", title: t("benefit3Title"), desc: t("benefit3Desc") },
    { icon: "📈", title: t("benefit4Title"), desc: t("benefit4Desc") },
    { icon: "🔄", title: t("benefit5Title"), desc: t("benefit5Desc") },
    { icon: "🌍", title: t("benefit6Title"), desc: t("benefit6Desc") },
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
        <div className="webdev-container">
          <div className="webdev-card">
            <h1 className="webdev-title">{t("webDevTitle")}</h1>

            <div className="webdev-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="webdev-image-section">
              <img
                src={ASSET("/images/general/icons/web-dev-icon.png")}
                alt="Web Development Services"
                className="webdev-image"
              />
              <div className="webdev-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="webdev-content">
              {/* Expertise Section */}
              <div className="webdev-section">
                <h2 className="webdev-section-title">{t("expertiseTitle")}</h2>
                <p className="webdev-content-paragraph">{t("expertiseDesc")}</p>
                
                <div className="webdev-services-grid">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`webdev-service-card ${hoveredService === index ? 'webdev-service-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <h3 className="webdev-service-title">{service.title}</h3>
                      <p className="webdev-service-desc">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="webdev-section">
                <h2 className="webdev-section-title">{t("techTitle")}</h2>
                <p className="webdev-content-paragraph">{t("techDesc")}</p>
                
                <div className="webdev-tech-stack">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className={`webdev-tech-card ${hoveredTech === index ? 'webdev-tech-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredTech(index)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <span className="webdev-tech-icon">{tech.icon}</span>
                      <h3 className="webdev-tech-title">{tech.title}</h3>
                      <p className="webdev-tech-desc">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="webdev-enhanced">
                <h3 className="webdev-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="webdev-content-paragraph">{t("enhanced1")}</p>
                <p className="webdev-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Benefits Section */}
              <div className="webdev-section">
                <h2 className="webdev-section-title">{t("benefitsTitle")}</h2>
                <p className="webdev-content-paragraph">{t("benefitsDesc")}</p>
                
                <div className="webdev-benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="webdev-benefit-card">
                      <span className="webdev-benefit-icon">{benefit.icon}</span>
                      <h3 className="webdev-benefit-title">{benefit.title}</h3>
                      <p className="webdev-benefit-desc">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Section */}
              <div className="webdev-section">
                <h2 className="webdev-section-title">{t("packageTitle")}</h2>
                <p className="webdev-content-paragraph">{t("packageDesc")}</p>
                <ul className="webdev-list">
                  {packageList.map((item, index) => (
                    <li key={index} className="webdev-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="webdev-cta">
                <h3 className="webdev-cta-title">{t("ctaTitle")}</h3>
                <p className="webdev-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="webdev-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="webdev-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="webdev-footer-inner">
            <div>
              <div className="webdev-footer-title">{t("footerCompany")}</div>
              <div className="webdev-footer-links">
                <Link to="/about" className="webdev-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="webdev-footer-link">{t("support")}</Link>
                <Link to="/contact" className="webdev-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="webdev-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="webdev-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="webdev-footer-title">{t("footerServices")}</div>
              <div className="webdev-footer-links">
                <Link to="/subscribe" className="webdev-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="webdev-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="webdev-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="webdev-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="webdev-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="webdev-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="webdev-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="webdev-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="webdev-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="webdev-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="webdev-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="webdev-footer-title">{t("footerLegality")}</div>
              <div className="webdev-footer-links">
                <Link to="/terms" className="webdev-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="webdev-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="webdev-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="webdev-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="webdev-footer-title">{t("footerConnection")}</div>
              <div className="webdev-footer-links">
                <a href="/" className="webdev-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="/" className="webdev-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="/" className="webdev-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="/" className="webdev-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="/" className="webdev-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>
          <div className="webdev-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default WebDevelopment;
