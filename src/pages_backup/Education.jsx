import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { nllbTranslateBatch } from "../utils/nllbTranslate";
import "./Education.css"; // Import the CSS file

const Education = ({ targetLang, setTargetLang }) => {
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
      educationTitle: "AI Education",

      // Intro Text
      introText: "The best benefits of AI in education worldwide include hyper-personalized learning paths for students, 24/7 intelligent tutoring, and automation of administrative tasks (like grading) for teachers, freeing them for deeper engagement. AI also boosts accessibility (real-time captioning, translation) and develops crucial 21st-century skills (critical thinking, problem-solving) while enabling immersive learning through simulations, making education more efficient, inclusive, and effective for all learners.",

      // Image Caption
      imageCaption: "Transformative AI-Powered Learning Solutions",

      // Section Titles
      benefitsTitle: "Core Benefits of AI Education",
      benefitsDesc: "AI is revolutionizing education by creating personalized, accessible, and efficient learning experiences that adapt to each learner's unique needs and pace.",

      forStudentsTitle: "For Students",
      forEducatorsTitle: "For Educators",

      impactTitle: "Educational Impact Statistics",
      impactDesc: "AI education technologies are delivering measurable improvements in learning outcomes and educational efficiency.",

      approachesTitle: "AI Learning Approaches",
      approachesDesc: "Our AI education platform employs multiple sophisticated learning methodologies to optimize educational outcomes.",

      systemBenefitsTitle: "System-Wide Benefits",

      // Benefit Cards
      benefit1Title: "Personalized Learning Paths",
      benefit1Desc: "AI tailors content, pace, and feedback to individual needs, addressing knowledge gaps while challenging advanced learners with appropriate materials.",

      benefit2Title: "24/7 Intelligent Support",
      benefit2Desc: "AI chatbots and virtual tutors offer instant help with homework and concepts anytime, anywhere, providing continuous learning support outside classroom hours.",

      benefit3Title: "Enhanced Student Engagement",
      benefit3Desc: "Gamification and immersive experiences (VR/AR) make learning interactive and bring abstract concepts to life through experiential learning.",

      benefit4Title: "Universal Accessibility",
      benefit4Desc: "Tools like speech-to-text, real-time captions, and translation break down barriers for students with disabilities and diverse learning needs.",

      benefit5Title: "21st Century Skill Development",
      benefit5Desc: "AI helps build essential digital literacy, critical thinking, and problem-solving skills needed for future careers and civic participation.",

      benefit6Title: "Teacher Empowerment",
      benefit6Desc: "Automation of administrative tasks allows educators to focus on meaningful instruction and personalized student interactions.",

      // Student Benefits
      student1: "Personalized Learning: AI tailors content, pace, and feedback to individual needs, addressing knowledge gaps and challenging advanced learners.",
      student2: "24/7 Support: AI chatbots and virtual tutors offer instant help with homework and concepts anytime, anywhere.",
      student3: "Enhanced Engagement: Gamification and immersive experiences (VR/AR) make learning interactive and bring abstract concepts to life.",
      student4: "Accessibility: Tools like speech-to-text, real-time captions, and translation break down barriers for students with disabilities.",
      student5: "Skill Development: AI helps build essential digital literacy, critical thinking, and problem-solving skills needed for the future.",

      // Educator Benefits
      educator1: "Time Savings: Automation of grading and administrative tasks allows teachers to focus more on teaching and student interaction.",
      educator2: "Data-Driven Insights: AI analytics help identify learning gaps and customize instruction effectively for each student.",
      educator3: "Content Creation: Generative AI assists in creating lesson plans, quizzes, and research summaries, reducing preparation time.",

      // Enhanced Paragraphs
      enhancedTitle: "Transforming Education Through Artificial Intelligence",
      enhanced1: "Artificial Intelligence represents the most significant transformation in education since the advent of the printing press, fundamentally reimagining how knowledge is acquired, processed, and applied. Unlike traditional one-size-fits-all educational models, AI-powered learning systems adapt in real-time to each student's unique cognitive patterns, learning preferences, and knowledge gaps. This creates a dynamic educational ecosystem where the curriculum evolves with the learner, presenting concepts in optimal sequences and formats that maximize comprehension and retention. Through sophisticated machine learning algorithms, these systems continuously analyze student performance, engagement levels, and progress patterns to identify precisely when a student is struggling with a concept or ready to advance to more challenging material, creating a truly responsive learning environment that traditional classrooms could never achieve.",
      enhanced2: "Beyond personalized learning, AI is democratizing education on a global scale by breaking down geographic, economic, and physical barriers to knowledge access. Students in remote villages can now access the same high-quality educational resources as those in elite urban institutions, while learners with disabilities can participate fully through adaptive interfaces and assistive technologies. AI-powered translation tools make educational content available in dozens of languages simultaneously, while virtual reality simulations provide hands-on learning experiences that would be impossible, dangerous, or prohibitively expensive in the physical world. For educators, AI serves as a powerful co-pilot, automating administrative burdens while providing deep insights into classroom dynamics and individual student needs. This symbiotic relationship between human educators and AI systems creates an educational paradigm that combines the empathy, creativity, and mentorship of human teachers with the scalability, personalization, and analytical power of artificial intelligence.",

      // Impact Statistics
      impact1Title: "Learning Retention",
      impact1Desc: "40-60% improvement in knowledge retention through personalized adaptive learning paths",

      impact2Title: "Teacher Efficiency",
      impact2Desc: "50-70% reduction in administrative tasks, freeing teachers for student engagement",

      impact3Title: "Global Access",
      impact3Desc: "Expanded educational access to 200M+ students in underserved regions worldwide",

      // Learning Approaches
      approach1Title: "Adaptive Learning",
      approach1Desc: "Dynamic adjustment of difficulty and content based on real-time performance analysis",

      approach2Title: "Gamified Learning",
      approach2Desc: "Game mechanics and rewards that increase engagement and motivation",

      approach3Title: "Spaced Repetition",
      approach3Desc: "Algorithmically optimized review schedules for long-term memory retention",

      approach4Title: "Mastery Learning",
      approach4Desc: "Ensuring complete understanding before progression to advanced concepts",

      approach5Title: "Intelligent Tutoring",
      approach5Desc: "AI tutors that provide step-by-step guidance and personalized feedback",

      approach6Title: "Predictive Analytics",
      approach6Desc: "Identifying at-risk students and recommending intervention strategies",

      // System Benefits
      system1: "Global Problem Solving: AI education prepares future generations to tackle major global challenges like climate change and health crises through data literacy and computational thinking.",
      system2: "Efficiency & Innovation: Streamlines educational processes and fosters new, dynamic ways to teach and learn through continuous technological advancement.",
      system3: "Lifelong Learning: Creates continuous learning ecosystems that support skill development throughout entire careers and lifetimes.",
      system4: "Research Enhancement: Accelerates educational research through large-scale data analysis and pattern recognition across diverse learner populations.",
      system5: "Resource Optimization: Maximizes educational impact through intelligent allocation of resources based on data-driven insights.",

      // CTA Section
      ctaTitle: "Transform Learning with AI-Powered Education",
      ctaText: "Subscribe to our AI Education plan and access personalized learning paths, intelligent tutoring, gamified educational experiences, and comprehensive educational analytics. Empower students and educators with the future of learning technology.",
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
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredImpact, setHoveredImpact] = useState(null);

  // Data arrays
  const benefits = [
    { title: t("benefit1Title"), desc: t("benefit1Desc") },
    { title: t("benefit2Title"), desc: t("benefit2Desc") },
    { title: t("benefit3Title"), desc: t("benefit3Desc") },
    { title: t("benefit4Title"), desc: t("benefit4Desc") },
    { title: t("benefit5Title"), desc: t("benefit5Desc") },
    { title: t("benefit6Title"), desc: t("benefit6Desc") },
  ];

  const studentBenefits = [
    t("student1"),
    t("student2"),
    t("student3"),
    t("student4"),
    t("student5"),
  ];

  const educatorBenefits = [
    t("educator1"),
    t("educator2"),
    t("educator3"),
  ];

  const impacts = [
    { icon: "📈", title: t("impact1Title"), desc: t("impact1Desc") },
    { icon: "⏱️", title: t("impact2Title"), desc: t("impact2Desc") },
    { icon: "🌍", title: t("impact3Title"), desc: t("impact3Desc") },
  ];

  const approaches = [
    { icon: "🧩", title: t("approach1Title"), desc: t("approach1Desc") },
    { icon: "🎮", title: t("approach2Title"), desc: t("approach2Desc") },
    { icon: "🔄", title: t("approach3Title"), desc: t("approach3Desc") },
    { icon: "🎯", title: t("approach4Title"), desc: t("approach4Desc") },
    { icon: "🤖", title: t("approach5Title"), desc: t("approach5Desc") },
    { icon: "📊", title: t("approach6Title"), desc: t("approach6Desc") },
  ];

  const systemBenefits = [
    t("system1"),
    t("system2"),
    t("system3"),
    t("system4"),
    t("system5"),
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
        <div className="edu-container">
          <div className="edu-card">
            <h1 className="edu-title">{t("educationTitle")}</h1>

            <div className="edu-intro-text">
              <p>{t("introText")}</p>
            </div>

            <div className="edu-image-section">
              <img
                src={ASSET("/images/general/icons/education.png")}
                alt="AI Education Technology"
                className="edu-image"
              />
              <div className="edu-image-caption">{t("imageCaption")}</div>
            </div>

            <div className="edu-content">
              {/* Benefits Section */}
              <div className="edu-section">
                <h2 className="edu-section-title">{t("benefitsTitle")}</h2>
                <p className="edu-content-paragraph">{t("benefitsDesc")}</p>
                
                <div className="edu-benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`edu-benefit-card ${hoveredBenefit === index ? 'edu-benefit-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredBenefit(index)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                    >
                      <h3 className="edu-benefit-title">{benefit.title}</h3>
                      <p className="edu-benefit-desc">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Students Section */}
              <div className="edu-stakeholder-section">
                <h3 className="edu-stakeholder-title">{t("forStudentsTitle")}</h3>
                <ul className="edu-list">
                  {studentBenefits.map((item, index) => (
                    <li key={index} className="edu-list-item">
                      <span className="edu-highlight">{item.split(":")[0]}:</span>
                      {item.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Educators Section */}
              <div className="edu-stakeholder-section">
                <h3 className="edu-stakeholder-title">{t("forEducatorsTitle")}</h3>
                <ul className="edu-list">
                  {educatorBenefits.map((item, index) => (
                    <li key={index} className="edu-list-item">
                      <span className="edu-highlight">{item.split(":")[0]}:</span>
                      {item.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Paragraphs */}
              <div className="edu-enhanced">
                <h3 className="edu-enhanced-title">{t("enhancedTitle")}</h3>
                <p className="edu-content-paragraph">{t("enhanced1")}</p>
                <p className="edu-content-paragraph">{t("enhanced2")}</p>
              </div>

              {/* Impact Stats Section */}
              <div className="edu-section">
                <h2 className="edu-section-title">{t("impactTitle")}</h2>
                <p className="edu-content-paragraph">{t("impactDesc")}</p>
                
                <div className="edu-impact-stats">
                  {impacts.map((impact, index) => (
                    <div
                      key={index}
                      className={`edu-impact-card ${hoveredImpact === index ? 'edu-impact-card-hover' : ''}`}
                      onMouseEnter={() => setHoveredImpact(index)}
                      onMouseLeave={() => setHoveredImpact(null)}
                    >
                      <span className="edu-impact-icon">{impact.icon}</span>
                      <h3 className="edu-impact-title">{impact.title}</h3>
                      <p className="edu-impact-desc">{impact.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Approaches Section */}
              <div className="edu-section">
                <h2 className="edu-section-title">{t("approachesTitle")}</h2>
                <p className="edu-content-paragraph">{t("approachesDesc")}</p>
                
                <div className="edu-approach-grid">
                  {approaches.map((approach, index) => (
                    <div key={index} className="edu-approach-card">
                      <span className="edu-approach-icon">{approach.icon}</span>
                      <h3 className="edu-approach-title">{approach.title}</h3>
                      <p className="edu-approach-desc">{approach.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Benefits Section */}
              <div className="edu-section">
                <h2 className="edu-section-title">{t("systemBenefitsTitle")}</h2>
                <ul className="edu-list">
                  {systemBenefits.map((item, index) => (
                    <li key={index} className="edu-list-item">
                      <span className="edu-highlight">{item.split(":")[0]}:</span>
                      {item.split(":").slice(1).join(":")}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="edu-cta">
                <h3 className="edu-cta-title">{t("ctaTitle")}</h3>
                <p className="edu-cta-text">{t("ctaText")}</p>
                <Link to="/subscribe" className="edu-cta-button">
                  {t("ctaButton")}
                </Link>
              </div>

              <div className="edu-meta">{t("meta")}</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="edu-footer-inner">
            <div>
              <div className="edu-footer-title">{t("footerCompany")}</div>
              <div className="edu-footer-links">
                <Link to="/about" className="edu-footer-link">{t("aboutUs")}</Link>
                <Link to="/support" className="edu-footer-link">{t("support")}</Link>
                <Link to="/contact" className="edu-footer-link">{t("contactUs")}</Link>
                <Link to="/GeneralServices" className="edu-footer-link">{t("generalServices")}</Link>
                <Link to="/pricing" className="edu-footer-link">{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div className="edu-footer-title">{t("footerServices")}</div>
              <div className="edu-footer-links">
                <Link to="/subscribe" className="edu-footer-link">{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" className="edu-footer-link">{t("professionalAIChat")}</Link>
                <Link to="/add-banner" className="edu-footer-link">{t("addBannerFooter")}</Link>
                <Link to="/education" className="edu-footer-link">{t("educationFooter")}</Link>
                <Link to="/web-development" className="edu-footer-link">{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" className="edu-footer-link">{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" className="edu-footer-link">{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" className="edu-footer-link">{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" className="edu-footer-link">{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" className="edu-footer-link">{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" className="edu-footer-link">{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div className="edu-footer-title">{t("footerLegality")}</div>
              <div className="edu-footer-links">
                <Link to="/terms" className="edu-footer-link">{t("terms")}</Link>
                <Link to="/privacy" className="edu-footer-link">{t("privacy")}</Link>
                <Link to="/pdpa" className="edu-footer-link">{t("pdpa")}</Link>
                <Link to="/services" className="edu-footer-link">{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div className="edu-footer-title">{t("footerConnection")}</div>
              <div className="edu-footer-links">
                <a href="#" className="edu-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("facebook")}
                </a>
                <a href="#" className="edu-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("linkedin")}
                </a>
                <a href="#" className="edu-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("twitter")}
                </a>
                <a href="#" className="edu-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("tiktok")}
                </a>
                <a href="#" className="edu-footer-link" onClick={(e) => { e.preventDefault(); alert("Link later"); }}>
                  {t("telegram")}
                </a>
              </div>
            </div>
          </div>

          <div className="edu-copyright">{t("copyright")}</div>
        </footer>
      </div>
    </>
  );
};

export default Education;
