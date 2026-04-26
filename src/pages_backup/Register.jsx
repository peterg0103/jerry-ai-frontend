import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { authApi } from "../services/api/authApi";
import { authStorage } from "../services/localStorage/authStorage";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const Register = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;
  const navigate = useNavigate();

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
  const EN = useMemo(() => ({
    // Header
    siteTitle: "Jerry's AI",
    
    // Form
    registerTitle: "Create your account",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Create a password",
    createAccount: "Create Account",
    agreeTerms: "I agree to the",
    termsLink: "Terms & Conditions",
    privacyLink: "Privacy Policy",
    
    // Social
    orContinueWith: "Or continue with",
    signupWithEmail: "Sign up with Email",
    signupWithYahoo: "Sign up with Yahoo",
    signupWithFacebook: "Sign up with Facebook",
    signupWithGoogle: "Sign up with Google",
    
    // Messages
    registrationSuccess: "Registration successful! Redirecting to login...",
    registrationError: "Registration failed. Please try again.",
    processing: "Processing...",
    creatingAccount: "Creating Account...",
    
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
  }), []);

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

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeTerms: false
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // State for hover effects
  const [hoveredSignup, setHoveredSignup] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      setError("You must agree to the Terms & Conditions and Privacy Policy");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await authApi.register(formData);
      
      if (response.token) {
        authStorage.saveUser(response);
      }
      
      setSuccess(true);
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      
    } catch (err) {
      setError(err.message || t("registrationError"));
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = async (provider) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Initiating ${provider} signup...`);
      alert(`${provider} signup integration coming soon!`);
    } catch (err) {
      setError(err.message || `${provider} signup failed`);
    } finally {
      setLoading(false);
    }
  };

  // Inline styles
  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000,
      height: "96px",
      maxWidth: "960px",
      width: "100%",
      background: "#fcfdff",
      borderBottom: "1px solid rgba(0,0,0,.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 18px",
      gap: "12px",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      minWidth: "80px",
    },
    logo: {
      height: "90px",
      width: "auto",
      maxWidth: "180px",
      objectFit: "contain",
      display: "block",
    },
    headerCenter: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: "34px",
      fontWeight: 800,
      letterSpacing: ".2px",
      color: "#10a7ff",
      whiteSpace: "nowrap",
      textDecoration: "none",
    },
    page: {
      minHeight: "calc(100vh - 96px)",
      display: "flex",
      flexDirection: "column",
      paddingTop: "96px",
    },
    container: {
      maxWidth: "960px",
      width: "100%",
      margin: "0 auto",
      padding: "8px 16px 0 16px",
      boxSizing: "border-box",
      flex: 1,
    },
    formWrapper: {
      width: "min(420px, 100%)",
      margin: "0 auto 40px",
      background: "#fff",
      border: "1px solid rgba(0,0,0,.06)",
      borderRadius: "14px",
      boxShadow: "0 10px 26px rgba(0,0,0,.10)",
      padding: "22px 20px 18px",
      textAlign: "center",
    },
    brandBlock: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      marginBottom: "10px",
      textDecoration: "none",
      color: "inherit",
    },
    brandLogo: {
      height: "64px",
      width: "auto",
      display: "block",
    },
    brandTitle: {
      margin: 0,
      fontSize: "22px",
      fontWeight: 900,
      color: "#0f172a",
    },
    brandSubtitle: {
      margin: 0,
      fontSize: "13px",
      color: "#6b7280",
    },
    form: {
      marginTop: "14px",
      textAlign: "left",
    },
    field: {
      margin: "10px 0",
    },
    fieldLabel: {
      display: "block",
      fontSize: "13px",
      fontWeight: 700,
      color: "#0f172a",
      marginBottom: "6px",
    },
    fieldInput: {
      width: "100%",
      padding: "11px 12px",
      fontSize: "14px",
      borderRadius: "10px",
      border: "1px solid #d7dbe3",
      outline: "none",
      background: "#fff",
      boxSizing: "border-box",
    },
    fieldInputError: {
      border: "1px solid #ff4444",
    },
    signupBtn: {
      width: "auto",
      minWidth: "220px",
      padding: "12px 28px",
      margin: "14px auto 0",
      display: "block",
      borderRadius: "999px",
      border: "none",
      background: "#10a7ff",
      color: "#fff",
      fontWeight: 900,
      fontSize: "15px",
      cursor: loading ? "wait" : "pointer",
      transition: "transform .15s ease, opacity .15s ease",
      opacity: loading ? 0.7 : 1,
    },
    signupBtnHover: {
      opacity: 0.92,
    },
    terms: {
      marginTop: "10px",
      fontSize: "13px",
      color: "#111827",
      textAlign: "left",
      lineHeight: "1.4",
    },
    termsLink: {
      color: "#10a7ff",
      fontWeight: 800,
      textDecoration: "none",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "14px 0 10px",
      color: "#6b7280",
      fontSize: "12px",
    },
    socialBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      border: "1px solid #d7dbe3",
      padding: "10px 12px",
      borderRadius: "12px",
      background: "#fff",
      cursor: loading ? "wait" : "pointer",
      margin: "8px auto",
      width: "100%",
      fontSize: "13px",
      fontWeight: 800,
      color: "#0f172a",
      transition: "transform .15s ease, border-color .15s ease",
      opacity: loading ? 0.7 : 1,
    },
    socialBtnHover: {
      borderColor: "rgba(0,0,0,.22)",
      transform: "translateY(-1px)",
    },
    errorMessage: {
      backgroundColor: "#ffebee",
      color: "#c62828",
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "15px",
      fontSize: "14px",
      textAlign: "left",
    },
    successMessage: {
      backgroundColor: "#e8f5e9",
      color: "#2e7d32",
      padding: "10px",
      borderRadius: "6px",
      marginBottom: "15px",
      fontSize: "14px",
      textAlign: "center",
    },
    loader: {
      display: "inline-block",
      width: "16px",
      height: "16px",
      border: "2px solid #f3f3f3",
      borderTop: "2px solid #10a7ff",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "8px",
    },
    footerInner: {
      maxWidth: "960px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
      alignItems: "start",
    },
    footerTitle: {
      fontWeight: 800,
      marginBottom: "10px",
      opacity: 0.95,
      textAlign: "center",
      color: "#fff",
    },
    footerLinks: {
      textAlign: "center",
    },
    footerLink: {
      display: "block",
      color: "rgba(255,255,255,.9)",
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
      opacity: 0.75,
      fontSize: "13px",
      textAlign: "center",
      color: "#fff",
    },
  };

  // Social signup providers with individual icon sizes
  const socialProviders = [
    { 
      name: "email", 
      icon: "general/mail-icon.png", 
      labelKey: "signupWithEmail",
      iconSize: { height: "24px", width: "auto" }
    },
    { 
      name: "yahoo", 
      icon: "general/yahoo-icon.png", 
      labelKey: "signupWithYahoo",
      iconSize: { height: "28px", width: "auto" }
    },
    { 
      name: "facebook", 
      icon: "general/facebook-icon-blue.png", 
      labelKey: "signupWithFacebook",
      iconSize: { height: "26px", width: "auto" }
    },
    { 
      name: "google", 
      icon: "general/google-icon.png", 
      labelKey: "signupWithGoogle",
      iconSize: { height: "30px", width: "auto" }
    },
  ];

  return (
    <>
      {/* Header */}
      <header style={styles.header} className="header">
        <Link to="/" style={styles.brand}>
          <img
            src={ASSET("/images/logo.png")}
            style={styles.logo}
            alt="Jerry's AI Logo"
          />
        </Link>

        <div style={styles.headerCenter}>
          <Link to="/" style={styles.title}>
            {t("siteTitle")}
          </Link>
        </div>

        <LTLanguageSwitcher
          globeSrc={ASSET("/images/general/icons/globe.png")}
          onChange={setTargetLang}
        />
      </header>

      {/* Main Content */}
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.formWrapper}>
            <Link to="/" style={styles.brandBlock}>
              <img 
                src={ASSET("/images/logo.png")} 
                alt="Jerry's AI Logo" 
                style={styles.brandLogo}
              />
              <h2 style={styles.brandTitle}>{t("siteTitle")}</h2>
              <p style={styles.brandSubtitle}>{t("registerTitle")}</p>
            </Link>

            {/* Success Message */}
            {success && (
              <div style={styles.successMessage}>
                ✓ {t("registrationSuccess")}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div style={styles.errorMessage}>
                ⚠️ {error}
              </div>
            )}

            {/* Register Form */}
            <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
              <div style={styles.field}>
                <label htmlFor="email" style={styles.fieldLabel}>{t("emailLabel")}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  style={{
                    ...styles.fieldInput,
                    ...(error ? styles.fieldInputError : {}),
                  }}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading || success}
                />
              </div>

              <div style={styles.field}>
                <label htmlFor="password" style={styles.fieldLabel}>{t("passwordLabel")}</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder={t("passwordPlaceholder")}
                  required
                  minLength="6"
                  style={{
                    ...styles.fieldInput,
                    ...(error ? styles.fieldInputError : {}),
                  }}
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading || success}
                />
              </div>

              <button
                type="submit"
                style={{
                  ...styles.signupBtn,
                  ...(hoveredSignup && !loading && !success ? styles.signupBtnHover : {}),
                }}
                onMouseEnter={() => !loading && !success && setHoveredSignup(true)}
                onMouseLeave={() => setHoveredSignup(false)}
                disabled={loading || success}
              >
                {loading ? (
                  <>
                    <span style={styles.loader}></span>
                    {t("creatingAccount")}
                  </>
                ) : (
                  t("createAccount")
                )}
              </button>

              <div style={styles.terms}>
                <label>
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required
                    disabled={loading || success}
                  />
                  {" "}{t("agreeTerms")}
                  <a 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener"
                    style={styles.termsLink}
                  > {t("termsLink")}</a>
                  {" "}and
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener"
                    style={styles.termsLink}
                  > {t("privacyLink")}</a>.
                </label>
              </div>
            </form>

            <div style={styles.divider}>
              <span></span>
              <span>{t("orContinueWith")}</span>
              <span></span>
            </div>

            {/* Social signup buttons */}
            {socialProviders.map((provider, index) => (
              <button
                key={provider.name}
                style={{
                  ...styles.socialBtn,
                  ...(hoveredSocial === index && !loading && !success ? styles.socialBtnHover : {}),
                }}
                onMouseEnter={() => !loading && !success && setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                onClick={() => !loading && !success && handleSocialSignup(provider.name)}
                type="button"
                disabled={loading || success}
              >
                <img
                  src={ASSET(`/images/${provider.icon}`)}
                  alt={provider.name}
                  style={{
                    height: provider.iconSize.height,
                    width: provider.iconSize.width,
                    display: "block"
                  }}
                />
                {t(provider.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ background: "#5c5c5c", padding: "24px 18px", marginTop: "18px" }}>
          <div style={styles.footerInner}>
            <div>
              <div style={styles.footerTitle}>{t("footerCompany")}</div>
              <div style={styles.footerLinks}>
                <Link to="/about" style={styles.footerLink}>{t("aboutUs")}</Link>
                <Link to="/support" style={styles.footerLink}>{t("support")}</Link>
                <Link to="/contact" style={styles.footerLink}>{t("contactUs")}</Link>
                <Link to="/GeneralServices" style={styles.footerLink}>{t("generalServices")}</Link>
                <Link to="/pricing" style={styles.footerLink}>{t("pricing")}</Link>
              </div>
            </div>

            <div>
              <div style={styles.footerTitle}>{t("footerServices")}</div>
              <div style={styles.footerLinks}>
                <Link to="/subscribe" style={styles.footerLink}>{t("subscriptionPlan")}</Link>
                <Link to="/ai-pro-chat-info" style={styles.footerLink}>{t("professionalAIChat")}</Link>
                <Link to="/add-banner" style={styles.footerLink}>{t("addBannerFooter")}</Link>
                <Link to="/education" style={styles.footerLink}>{t("educationFooter")}</Link>
                <Link to="/web-development" style={styles.footerLink}>{t("webDevelopmentFooter")}</Link>
                <Link to="/app-development" style={styles.footerLink}>{t("appDevelopmentFooter")}</Link>
                <Link to="/digital-marketing" style={styles.footerLink}>{t("digitalMarketingFooter")}</Link>
                <Link to="/voice-translator" style={styles.footerLink}>{t("voiceTranslatorFooter")}</Link>
                <Link to="/analyse-data" style={styles.footerLink}>{t("analyseDataFooter")}</Link>
                <Link to="/cybersecurity" style={styles.footerLink}>{t("enhanceCyberFooter")}</Link>
                <Link to="/find-my-phone" style={styles.footerLink}>{t("findMyPhoneFooter")}</Link>
              </div>
            </div>

            <div>
              <div style={styles.footerTitle}>{t("footerLegality")}</div>
              <div style={styles.footerLinks}>
                <Link to="/terms" style={styles.footerLink}>{t("terms")}</Link>
                <Link to="/privacy" style={styles.footerLink}>{t("privacy")}</Link>
                <Link to="/pdpa" style={styles.footerLink}>{t("pdpa")}</Link>
                <Link to="/services" style={styles.footerLink}>{t("servicesPolicy")}</Link>
              </div>
            </div>

            <div>
              <div style={styles.footerTitle}>{t("footerConnection")}</div>
              <div style={styles.footerLinks}>
                <a href="#" style={styles.footerLink}>{t("facebook")}</a>
                <a href="#" style={styles.footerLink}>{t("linkedin")}</a>
                <a href="#" style={styles.footerLink}>{t("twitter")}</a>
                <a href="#" style={styles.footerLink}>{t("tiktok")}</a>
                <a href="#" style={styles.footerLink}>{t("telegram")}</a>
              </div>
            </div>
          </div>

          <div style={styles.copyright}>{t("copyright")}</div>
        </footer>
      </div>

      {/* Add keyframe animation for loader */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Register;
