import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./Cybersecurity.css"; // Import the CSS file

const Cybersecurity = ({ targetLang, setTargetLang }) => {
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
      cybersecurityTitle: "Enhancing Cybersecurity",

      // Intro Text
      introText: "An effective introduction to enhancing cybersecurity should cover fundamental concepts, the current threat landscape, core objectives, and a high-level overview of key strategies.",

      // Image Caption
      imageCaption: "Advanced Cybersecurity Protection & Defense Systems",

      // Section Titles
      coreConceptsTitle: "Core Concepts and Importance",
      threatTitle: "The Threat Landscape",
      impactTitle: "Security Impact Areas",
      strategicTitle: "Key Strategic Areas",
      solutionTitle: "Our Comprehensive Cybersecurity Solution",

      // Core Concepts Content
      definitionText: "The practice of protecting internet-connected systems, networks, and data from digital threats, unauthorized access, or damage.",
      ciaIntro: "The three primary goals of information security are:",

      // CIA Triad Cards
      confidentialityTitle: "Confidentiality",
      confidentialityDesc: "Ensuring sensitive information is only accessible by authorized individuals.",

      integrityTitle: "Integrity",
      integrityDesc: "Maintaining the accuracy, consistency, and trustworthiness of data.",

      availabilityTitle: "Availability",
      availabilityDesc: "Guaranteeing that systems and data are accessible to authorized users when needed.",

      importanceText: "Explain that the increasing reliance on technology means a breach can lead to significant financial losses, reputational damage, operational disruptions, and legal/regulatory penalties (e.g., GDPR fines).",

      // Threat Landscape Content
      evolvingThreatsText: "Mention that cyber threats are constantly changing and becoming more sophisticated, targeting individuals, businesses (including small ones), and governments.",
      attackVectorsIntro: "Briefly introduce prevalent threats such as:",

      // Attack Vectors
      phishingText: "Using deceptive emails or messages to trick users into revealing sensitive information.",
      ransomwareText: "Malware that encrypts data and demands payment for its release.",
      malwareText: "Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems.",

      humanFactorText: "Acknowledge that human error is a significant factor in many incidents and that awareness is as important as technology.",

      // Enhanced Paragraphs
      enhancedTitle: "Why Proactive Cybersecurity is Essential in Today's Digital World",
      enhanced1: "In today's interconnected digital ecosystem, cybersecurity is no longer just an IT concern—it's a fundamental business imperative that affects every aspect of organizational operations. The exponential growth of cloud computing, Internet of Things (IoT) devices, and remote work environments has dramatically expanded the attack surface, creating vulnerabilities that sophisticated threat actors are eager to exploit. Proactive cybersecurity measures move beyond mere reactive defense to establish comprehensive protection frameworks that anticipate and neutralize threats before they can cause damage. This strategic approach recognizes that the cost of prevention is invariably lower than the cost of remediation, with data breaches often resulting not just in immediate financial losses but also in long-term reputational damage, customer trust erosion, and regulatory penalties that can cripple organizations for years.",
      enhanced2: "Modern cybersecurity represents a dynamic, evolving discipline that requires continuous adaptation to emerging threats. Unlike traditional security measures that focused primarily on perimeter defense, contemporary cybersecurity adopts a zero-trust architecture that assumes no user or system is inherently trustworthy. This paradigm shift recognizes that threats can originate from both external and internal sources, requiring multi-layered protection strategies that combine advanced technological solutions with comprehensive human training and robust procedural safeguards. The integration of artificial intelligence and machine learning has revolutionized threat detection capabilities, enabling security systems to identify anomalous patterns and potential breaches with unprecedented speed and accuracy. This creates a security posture that is not just defensive but intelligently adaptive, capable of learning from each attempted breach to strengthen protections against future attacks.",

      // Security Impact Cards
      impact1Title: "Business Continuity",
      impact1Desc: "Ensuring uninterrupted operations and service delivery through robust security measures",

      impact2Title: "Customer Trust",
      impact2Desc: "Building and maintaining customer confidence through reliable data protection",

      impact3Title: "Regulatory Compliance",
      impact3Desc: "Meeting legal requirements and avoiding penalties through proper security protocols",

      impact4Title: "Intellectual Property",
      impact4Desc: "Protecting proprietary information and competitive advantages from theft",

      impact5Title: "Financial Stability",
      impact5Desc: "Preventing direct financial losses and maintaining operational efficiency",

      impact6Title: "Digital Transformation",
      impact6Desc: "Enabling secure adoption of new technologies and business models",

      // Strategic Areas Cards
      strategy1Title: "Technology",
      strategy1Desc: "Implementing technical safeguards like firewalls, antivirus software, encryption, and multi-factor authentication (MFA).",

      strategy2Title: "Processes & Procedures",
      strategy2Desc: "Establishing clear policies for data handling, incident reporting, disaster recovery, and regular risk assessments.",

      strategy3Title: "People & Training",
      strategy3Desc: "Emphasizing the need for ongoing security awareness training for all personnel to foster a security-conscious culture.",

      strategyConclusion: "By covering these points, an introduction effectively sets the stage for a comprehensive discussion on enhancing cybersecurity, establishing the context, importance, and scope of necessary actions.",

      // Solution List
      solution1: "Security code audit and vulnerability assessment",
      solution2: "Enterprise firewall configuration and management",
      solution3: "Continuous threat monitoring and real-time alerts",
      solution4: "Security protocol implementation and maintenance",
      solution5: "24/7 security operations center support",
      solution6: "Incident response and disaster recovery planning",
      solution7: "Employee security awareness training programs",
      solution8: "Regular security compliance audits and reporting",
      solution9: "Advanced encryption and data protection solutions",
      solution10: "Network security monitoring and intrusion detection",

      // CTA Section
      ctaTitle: "Secure Your Digital Assets with Advanced Cybersecurity",
      ctaText: "Subscribe to our Enhance Cybersecurity plan for comprehensive protection including security audits, firewall configuration, vulnerability assessments, threat monitoring, and 24/7 security alerts. Protect your business from evolving digital threats.",
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
  const [hoveredCia, setHoveredCia] = useState(null);

  // Data arrays
  const ciaTriad = [
    { title: t("confidentialityTitle"), desc: t("confidentialityDesc") },
    { title: t("integrityTitle"), desc: t("integrityDesc") },
    { title: t("availabilityTitle"), desc: t("availabilityDesc") },
  ];

  const attackVectors = [
    t("phishingText"),
    t("ransomwareText"),
    t("malwareText"),
  ];

  const impactCards = [
    { icon: "💼", title: t("impact1Title"), desc: t("impact1Desc") },
    { icon: "🤝", title: t("impact2Title"), desc: t("impact2Desc") },
    { icon: "⚖️", title: t("impact3Title"), desc: t("impact3Desc") },
    { icon: "💡", title: t("impact4Title"), desc: t("impact4Desc") },
    { icon: "📈", title: t("impact5Title"), desc: t("impact5Desc") },
    { icon: "🌐", title: t("impact6Title"), desc: t("impact6Desc") },
  ];

  const strategicAreas = [
    { title: t("strategy1Title"), desc: t("strategy1Desc") },
    { title: t("strategy2Title"), desc: t("strategy2Desc") },
    { title: t("strategy3Title"), desc: t("strategy3Desc") },
  ];

  const solutionList = [
    t("solution1"),
    t("solution2"),
    t("solution3"),
    t("solution4"),
    t("solution5"),
    t("solution6"),
    t("solution7"),
    t("solution8"),
    t("solution9"),
    t("solution10"),
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
        <div className="cyber-container">
          <div className="cyber-card">
            <h1 className="cyber-title">{t("cybersecurityTitle")}</h1>

            <div className="cyber-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="cyber-image-section">
              <img
                src={ASSET("/images/general/icons/cybersecurity.png")}
                alt="Cybersecurity Protection Shield"
                className="cyber-image"
              />
              <div className="cyber-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="cyber-content">
              {/* Core Concepts Section */}
              <div className="cyber-section">
                <h2 className="cyber-section-title">{t("coreConceptsTitle")}</h2>
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">Definition of Cybersecurity:</span> {t("definitionText")}
                </p>
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">The CIA Triad:</span> {t("ciaIntro")}
                </p>
                
                <div className="cyber-cia-triad">
                  {ciaTriad.map((item, index) => (
                    <div
                      key={index}
                      className={`cyber-cia-card ${hoveredCia === index ? 'cyber-cia-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredCia(index)}
                      onMouseLeave={() => setHoveredCia(null)}
                    >
                      <h3 className="cyber-cia-title">{item.title}</h3>
                      <p className="cyber-cia-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">Importance and Impact:</span> {t("importanceText")}
                </p>
              </div>

              {/* Threat Landscape Section */}
              <div className="cyber-section">
                <h2 className="cyber-section-title">{t("threatTitle")}</h2>
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">Evolving Threats:</span> {t("evolvingThreatsText")}
                </p>
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">Common Attack Vectors:</span> {t("attackVectorsIntro")}
                </p>
                
                <div className="cyber-attack-vectors">
                  <ul className="cyber-attack-list">
                    {attackVectors.map((vector, index) => (
                      <li key={index} className="cyber-attack-item">
                        <span className="cyber-highlight">
                          {index === 0 ? "Phishing: " : index === 1 ? "Ransomware: " : "Malware: "}
                        </span>
                        {vector}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="cyber-content-paragraph">
                  <span className="cyber-highlight">Human Factor:</span> {t("humanFactorText")}
                </p>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="cyber-enhanced">
                <h3 className="cyber-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="cyber-content-paragraph">{t("enhanced1")}</p>
                <p className="cyber-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Security Impact Section */}
              <div className="cyber-section">
                <h2 className="cyber-section-title">{t("impactTitle")}</h2>
                <p className="cyber-content-paragraph">Effective cybersecurity protects multiple critical aspects of modern business operations.</p>
                
                <div className="cyber-security-impact">
                  {impactCards.map((impact, index) => (
                    <div key={index} className="cyber-impact-card">
                      <span className="cyber-impact-icon">{impact.icon}</span>
                      <h3 className="cyber-impact-title">{impact.title}</h3>
                      <p className="cyber-impact-desc">{impact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Areas Section */}
              <div className="cyber-section">
                <h2 className="cyber-section-title">{t("strategicTitle")}</h2>
                <p className="cyber-content-paragraph">The introduction should outline the primary areas where effort is needed to build a robust defense. These include:</p>
                
                <div className="cyber-strategic-areas">
                  {strategicAreas.map((area, index) => (
                    <div key={index} className="cyber-strategy-card">
                      <h3 className="cyber-strategy-title">{area.title}</h3>
                      <p className="cyber-strategy-desc">{area.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="cyber-content-paragraph">{t("strategyConclusion")}</p>
              </div>

              {/* Solution Section */}
              <div className="cyber-section">
                <h2 className="cyber-section-title">{t("solutionTitle")}</h2>
                <p className="cyber-content-paragraph">Our AI-powered cybersecurity service provides complete protection through advanced technologies and expert strategies:</p>
                <ul className="cyber-list">
                  {solutionList.map((item, index) => (
                    <li key={index} className="cyber-list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="cyber-cta">
                <h3 className="cyber-cta-title">{t("ctaTitle")}</h3>
                <p className="cyber-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="cyber-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="cyber-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="cyber-footer-inner">
            <div>
              <div className="cyber-footer-title">{t("footerCompany")}</div>
              <div className="cyber-footer-links">
                <Link to="/about" className="cyber-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="cyber-footer-link">{t("support")}</Link>
                <Link to="/contact" className="cyber-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="cyber-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="cyber-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="cyber-footer-title">{t("footerServices")}</div>
              <div className="cyber-footer-links">
                <Link to="/subscribe" className="cyber-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="cyber-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="cyber-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="cyber-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="cyber-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="cyber-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="cyber-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="cyber-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="cyber-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="cyber-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="cyber-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="cyber-footer-title">{t("footerLegality")}</div>
              <div className="cyber-footer-links">
                <Link to="/terms" className="cyber-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="cyber-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="cyber-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="cyber-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="cyber-footer-title">{t("footerConnection")}</div>
              <div className="cyber-footer-links">
                <a href="#" className="cyber-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="cyber-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="cyber-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="cyber-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="cyber-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="cyber-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Cybersecurity;
