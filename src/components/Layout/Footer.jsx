import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Since this is a separate component now, we need to define t() or receive it as props
  // For now, let's assume we'll pass the t function as a prop
  const t = (key) => key; // Placeholder - will be replaced when we implement properly

  const styles = {
    footerInner: {
      maxWidth: "100%",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
      alignItems: "start",
    },
    footerTitle: {
      fontWeight: "800",
      marginBottom: "10px",
      opacity: ".95",
      textAlign: "center",
      color: "#fff",
    },
    footerLinks: {
      textAlign: "center",
    },
    footerLink: {
      display: "block",
      color: "rgba(255, 255, 255, .90)",
      padding: "6px 0",
      fontSize: "13px",
      whiteSpace: "nowrap",
      overflow: "hidden",        // ✅ CHANGE FROM 'visible' TO 'hidden'
      textOverflow: "ellipsis",  // ✅ CHANGE FROM 'unset' TO 'ellipsis'
      wordBreak: "normal",
      textDecoration: "none",
    },
    copyright: {
      margin: "18px auto 0",
      opacity: ".75",
      fontSize: "13px",
      textAlign: "left",
      color: "#fff",
    }
  };

  return (
    <footer>
      <div style={styles.footerInner}>
        <div>
          <div style={styles.footerTitle}>Company</div>
          <div style={styles.footerLinks}>
            <Link to="/about" style={styles.footerLink}>About Us</Link>
            <Link to="/support" style={styles.footerLink}>Support</Link>
            <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
            <Link to="/services" style={styles.footerLink}>General Services</Link>
            <Link to="/pricing" style={styles.footerLink}>Pricing</Link>
          </div>
        </div>

        <div>
          <div style={styles.footerTitle}>Services</div>
          <div style={styles.footerLinks}>
            <Link to="/subscribe" style={styles.footerLink}>Subscription Plan</Link>
            <Link to="/ai-pro-chat-info" style={styles.footerLink}>Professional AI Chat</Link>
            <Link to="/add-banner" style={styles.footerLink}>Add Banner</Link>
            <Link to="/education" style={styles.footerLink}>Education</Link>
            <Link to="/web-development" style={styles.footerLink}>Web Development</Link>
            <Link to="/app-development" style={styles.footerLink}>App Development</Link>
            <Link to="/digital-marketing" style={styles.footerLink}>Digital Marketing</Link>
            <Link to="/voice-translator" style={styles.footerLink}>AI Voice Translator</Link>
            <Link to="/analyse-data" style={styles.footerLink}>Analyse Data, Report</Link>
            <Link to="/cybersecurity" style={styles.footerLink}>Enhance CyberSecurity</Link>
            <Link to="/find-my-phone" style={styles.footerLink}>Find My Phone</Link>
          </div>
        </div>

        <div>
          <div style={styles.footerTitle}>Legality</div>
          <div style={styles.footerLinks}>
            <Link to="/terms" style={styles.footerLink}>Terms & Condition</Link>
            <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
            <Link to="/pdpa" style={styles.footerLink}>Personal Data Protection</Link>
            <Link to="/services-policy" style={styles.footerLink}>Services Policy</Link>
          </div>
        </div>

        <div>
          <div style={styles.footerTitle}>Connection</div>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Facebook</a>
            <a href="#" style={styles.footerLink}>LinkedIn</a>
            <a href="#" style={styles.footerLink}>Twitter</a>
            <a href="#" style={styles.footerLink}>Tik Tok</a>
            <a href="#" style={styles.footerLink}>Telegram</a>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>© 2025 Jerry's AI. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
