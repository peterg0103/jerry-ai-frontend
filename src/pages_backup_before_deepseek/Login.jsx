import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";
import { authApi } from "../services/api/authApi";
import { authStorage } from "../services/localStorage/authStorage";
import { nllbTranslateBatch } from "../utils/nllbTranslate";

const Login = ({ targetLang, setTargetLang }) => {
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

  // Translation setup
  const EN = useMemo(() => ({
    // Header
    siteTitle: "Jerry's AI",
    
    // Form
    loginTitle: "Login",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    rememberPassword: "Remember Password",
    loginButton: "Login",
    forgotPassword: "Forgot your password?",
    noAccount: "Don't have an account?",
    registerHere: "Register here",
    copyright: "© 2025 Jerry's AI. All rights reserved.",
    
    // Social login labels
    loginWithEmail: "Login with email",
    loginWithFacebook: "Login with Facebook",
    loginWithGoogle: "Login with Google",
    
    // Success/Error messages
    loginSuccess: "Login successful! Redirecting...",
    loginError: "Login failed. Please check your credentials.",
    
    // Loading states
    loggingIn: "Logging in...",
    processing: "Processing...",

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
  }), []);

  const [T, setT] = useState(EN);
  const t = (key) => T[key] || EN[key] || key;

  // Translation effect
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
    remember: false
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // State for hover effects
  const [hoveredLogin, setHoveredLogin] = useState(false);
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
    setLoading(true);
    setError(null);
    
    try {
      const response = await authApi.login(formData);
      
      authStorage.saveUser({
        ...response,
        remember: formData.remember
      });
      
      setSuccess(true);
      
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Initiating ${provider} login...`);
      alert(`${provider} login integration coming soon!`);
    } catch (err) {
      setError(err.message || `${provider} login failed`);
    } finally {
      setLoading(false);
    }
  };

  // Inline styles
  const styles = {
    // Header styles (matching Contact.jsx)
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
      paddingTop: "96px", // Add padding to account for fixed header
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
      maxWidth: "360px",
      margin: "40px auto",
      padding: "30px",
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    formLogo: {
      height: "60px",
      marginBottom: "10px",
    },
    formTitle: {
      marginTop: "10px",
      fontSize: "24px",
      color: "#222",
    },
    form: {
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "8px 0",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box",
    },
    inputError: {
      border: "1px solid #ff4444",
    },
    checkboxGroup: {
      textAlign: "left",
      fontSize: "13px",
      margin: "8px 0 16px",
    },
    checkbox: {
      marginRight: "6px",
    },
    loginBtn: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#1877f2",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "6px",
      fontSize: "15px",
      cursor: loading ? "wait" : "pointer",
      opacity: loading ? 0.7 : 1,
    },
    loginBtnHover: {
      backgroundColor: "#0f5bc4",
    },
    forgotLink: {
      display: "block",
      fontSize: "13px",
      marginTop: "8px",
      color: "#666",
      textDecoration: "none",
    },
    socialBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      border: "1px solid #ccc",
      borderRadius: "30px",
      padding: "10px 15px",
      backgroundColor: "white",
      margin: "10px 0",
      cursor: loading ? "wait" : "pointer",
      fontSize: "14px",
      width: "100%",
      transition: "background-color 0.3s",
      opacity: loading ? 0.7 : 1,
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
    loginLink: {
      marginTop: "20px",
      fontSize: "14px",
    },
    registerLink: {
      color: "#1877f2",
      textDecoration: "none",
      fontWeight: "bold",
    },
    loader: {
      display: "inline-block",
      width: "16px",
      height: "16px",
      border: "2px solid #f3f3f3",
      borderTop: "2px solid #1877f2",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginRight: "8px",
    },
    // Footer styles
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

  // Social login providers
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img 
                src={ASSET("/images/logo.png")} 
                alt="Jerry's AI Logo" 
                style={styles.formLogo} 
              />
              <h2 style={styles.formTitle}>{t("siteTitle")}</h2>
            </Link>

            {/* Success Message */}
            {success && (
              <div style={styles.successMessage}>
                ✓ {t("loginSuccess")}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div style={styles.errorMessage}>
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                required
                style={{
                  ...styles.input,
                  ...(error ? styles.inputError : {}),
                }}
                value={formData.email}
                onChange={handleInputChange}
                disabled={loading || success}
              />
              <input
                type="password"
                name="password"
                placeholder={t("passwordPlaceholder")}
                required
                style={{
                  ...styles.input,
                  ...(error ? styles.inputError : {}),
                }}
                value={formData.password}
                onChange={handleInputChange}
                disabled={loading || success}
              />
              <div style={styles.checkboxGroup}>
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                    style={styles.checkbox}
                    disabled={loading || success}
                  /> 
                  {t("rememberPassword")}
                </label>
              </div>
              <button
                type="submit"
                style={{
                  ...styles.loginBtn,
                  ...(hoveredLogin && !loading && !success ? styles.loginBtnHover : {}),
                }}
                onMouseEnter={() => !loading && !success && setHoveredLogin(true)}
                onMouseLeave={() => setHoveredLogin(false)}
                disabled={loading || success}
              >
                {loading ? (
                  <>
                    <span style={styles.loader}></span>
                    {t("loggingIn")}
                  </>
                ) : (
                  t("loginButton")
                )}
              </button>
            </form>

            <Link to="/forgot-password" style={styles.forgotLink}>
              {t("forgotPassword")}
            </Link>

            {/* Social Login Buttons */}
            {socialProviders.map((provider, index) => (
              <div
                key={provider.name}
                style={{
                  ...styles.socialBtn,
                  ...(hoveredSocial === index && !loading && !success ? { backgroundColor: "#f0f0f0" } : {}),
                }}
                onMouseEnter={() => !loading && !success && setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                onClick={() => !loading && !success && handleSocialLogin(provider.name)}
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
              </div>
            ))}

            <div style={styles.loginLink}>
              {t("noAccount")} <Link to="/register" style={styles.registerLink}>{t("registerHere")}</Link>
            </div>
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
                <a href="/" style={styles.footerLink}>{t("facebook")}</a>
                <a href="/" style={styles.footerLink}>{t("linkedin")}</a>
                <a href="/" style={styles.footerLink}>{t("twitter")}</a>
                <a href="/" style={styles.footerLink}>{t("tiktok")}</a>
                <a href="/" style={styles.footerLink}>{t("telegram")}</a>
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

export default Login;
